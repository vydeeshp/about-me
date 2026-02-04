import React, { useState } from "react";
import { profile, hobbies, aspirations, skills } from "./content";
import LightPillar from "./ui/LightPillar";
import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";

import * as Switch from "@radix-ui/react-switch"; // Radix Switch
import WeatherBar from "./components/WeatherBar";
import ErrorBoundary from "./ui/ErrorBoundry"; 
import "./index.css";
import "./App.css";

import Blog from "./components/Blog";








export default function App() {
  const [bgMode, setBgMode] = useState(false); // false = purple, true = blue

  return (
    <React.Fragment>
      {/* BACKGROUND EFFECT */}
      {bgMode ? (
        <LightPillar
          topColor="#00ff33"
          bottomColor="#001cbb"
          intensity={1.2}
          rotationSpeed={0.6}
          glowAmount={0.01}
          pillarWidth={2.5}
          pillarHeight={0.5}
          noiseIntensity={0.7}
          interactive={true}
        />
      ) : (
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          interactive={false}
        />
      )}


 <div className="switch-container">
  <label className="switch-label" htmlFor="bg-switch">Background</label>
  <Switch.Root
    id="bg-switch"
    className="switch-root"
    checked={bgMode}
    onCheckedChange={setBgMode}
  >
    <Switch.Thumb className="switch-thumb" />
  </Switch.Root>
</div>



      {/* SCROLL CONTENT */}
      <ScrollStack>
        <ScrollStackItem>
          <h2>Profile</h2>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Roll:</strong> {profile.roll}</p>
          <p>{profile.about}</p>
          <p><strong>Email:</strong> {profile.email}</p>
        </ScrollStackItem>

        <ScrollStackItem>
          <h2>Hobbies</h2>
          <ul style={{ textAlign: "left" }}>{hobbies.map((h, i) => <li key={i}>{h}</li>)}</ul>
        </ScrollStackItem>

        <ScrollStackItem>
          <h2>Skills</h2>
          <ul style={{ textAlign: "left" }}>{skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </ScrollStackItem>

        <ScrollStackItem>
          <h2>Aspirations</h2>
          <ul style={{ textAlign: "left" }}>{aspirations.map((a, i) => <li key={i}>{a}</li>)}</ul>
        </ScrollStackItem>
        <ScrollStackItem>
  <Blog />
</ScrollStackItem>

      </ScrollStack>
     <ErrorBoundary><WeatherBar /></ErrorBoundary>
        
     
    </React.Fragment>
  );
}
