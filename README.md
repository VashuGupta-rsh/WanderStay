# 🌍 WanderStay – MERN-Powered Travel & Stay Platform

[🚀 Live Demo] (https://wanderstay1.onrender.com)

**Summary**

🔹Wanderstay is a comprehensive, full-stack hotel booking web application that allows users to seamlessly register, log in, explore hotel listings, create and manage their own listings, and leave or remove reviews. 
🔹Built with the MERN stack (MongoDB, Express.js, Node.js) and powered by EJS templating, Wanderstay offers a dynamic, responsive user experience with a powerful backend.
🔹The application utilizes RESTful APIs developed with Node.js and Express.js for handling user authentication and authorization, session management, and data processing.
🔹The front-end UI is dynamically rendered using the EJS templating engine, styled with HTML, CSS, and Bootstrap for a seamless and responsive design across devices. 
🔹MongoDB serves as the primary data storage solution, efficiently managing user data, hotel listings, and reviews with well-structured schema design.
🔹The platform supports full CRUD operations for both users and administrators, with role-based access ensuring an intuitive and secure user experience.

---


## 🧩 Key Features

- 📝 User Registration and Login with secure authentication and authorisation
- 🏨 Browse, Create, Edit, and Delete hotel listings
- 💬 Write and delete reviews
- 🔐 Role-based access control (Admins vs Regular Users)
- 📦 Image uploads using Cloudinary via Multer
- 🧠 Form validation with Joi
- 📱 Responsive UI using HTML, CSS, and Bootstrap
- 🎯 RESTful routes and structured controllers

---

## 🌐 Tech Stack

- **Frontend**: EJS Templates, HTML, CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: Passport.js with sessions
- **File Uploads**: Multer + Cloudinary
- **Validation**: Joi

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/VashuGupta-rsh/Wanderstay.git
cd Wanderstay

```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a .env file in the root directory and add:

```env
MONGO_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SESSION_SECRET=your_session_secret
```

### 4️⃣ Run the Application
```bash
npm start
```
