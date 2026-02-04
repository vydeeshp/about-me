import { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/blogs")
      .then(res => res.json())
      .then(setBlogs);
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      {blogs.map(blog => (
        <article key={blog.id} style={{ textAlign: "left", marginBottom: "1rem" }}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <small>{new Date(blog.createdAt).toDateString()}</small>
        </article>
      ))}
    </div>
  );
}
