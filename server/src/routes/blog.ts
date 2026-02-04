import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// GET all blogs
router.get("/", async (_req, res) => {
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
  res.json(blogs);
});

// CREATE blog
router.post("/", async (req, res) => {
  const { title, content } = req.body;

  const blog = await prisma.blog.create({
    data: {
      title,
      content,
      published: true,
    },
  });

  res.json(blog);
});

export default router;
