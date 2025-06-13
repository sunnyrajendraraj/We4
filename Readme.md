# 📝 We4 Backend

Welcome to **We4**, a backend API built with the **MERN stack (MongoDB, Express, React, Node.js)**. This API allows users to register, login, and read or post handwritten stories with tags like genre, category, etc.

This repository currently contains only the **backend** portion — responsible for handling:
- Server setup
- MongoDB database connection
- Environment config
- Middleware setup (CORS, JSON)
- Initial root route

---

## 📌 Project Purpose

StoryHub is a full-stack web application that enables:
- 📖 Users to view stories written by others
- ✍️ Users to post their own handwritten stories
- 🏷️ Attach tags such as genre, topic, or category
- 🔐 Secure authentication system with JWT

This project is being developed **step-by-step with educational commentary** for better understanding.

---

## 🧱 Tech Stack

| Layer        | Technology       | Description |
|--------------|------------------|-------------|
| Backend      | **Node.js**      | JavaScript runtime |
| Framework    | **Express.js**   | Minimalist backend framework |
| Database     | **MongoDB Atlas**| NoSQL cloud database |
| ORM          | **Mongoose**     | MongoDB object modeling |
| Config       | **dotenv**       | Manages environment variables |
| Middleware   | **cors**         | Cross-origin resource sharing |
| Dev Tools    | **nodemon**      | Auto restarts server on file changes |

---

## 🧠 Features Implemented

✅ Basic Express Server  
✅ Environment Variable Configuration  
✅ MongoDB Connection via Mongoose  
✅ CORS + JSON Body Parser Middleware  
✅ Git Version Control with Step-wise Commits

---

## ⚙️ Environment Variables

Create a `.env` file in your project root. Here’s an example `.env` setup:

```env
PORT=5000
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster.mongodb.net
JWT_SECRET=yourJWTsecretKey
CORS_ORIGIN=*