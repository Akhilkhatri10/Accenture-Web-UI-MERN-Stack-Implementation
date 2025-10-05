# 🚀 Accenture Web UI – MERN Stack Implementation

A full-stack web application built using the **MERN stack** — **MongoDB**, **Express**, **React**, and **Node.js**.  
This project demonstrates a complete implementation of frontend and backend integration with API handling, database connectivity, and deployment.

---

### ScreenShots

- Hompage Hero Section

![Homepage Hero Section](./Screenshots/Screenshot%202025-10-06%20002648.png)

- Hompage Cards Section

![Homepage Cards Section](./Screenshots/Screenshot%202025-10-06%20002815.png)

- Hompage Footer Section

![Homepage Footer Section](./Screenshots/Screenshot%202025-10-06%20002908.png)

---

## 🧠 Tech Stack

### 🖥️ Frontend
- **React.js** – Component-based UI framework
- **Vite / Create React App** – Lightning-fast dev environment
- **Tailwind CSS** – Modern utility-first CSS framework
- **Axios** – For communicating with the backend
- **React Router** – For client-side routing and navigation

### ⚙️ Backend
- **Node.js** – JavaScript runtime for server-side development
- **Express.js** – Backend framework for RESTful APIs
- **MongoDB + Mongoose** – NoSQL database and object modeling
- **dotenv** – For managing environment variables
- **CORS** – To enable secure cross-origin requests
- **Nodemon** – Auto-reload during development

---

## 📁 Folder Structure


### frontend (React + Tailwind frontend)

├── src/

├── public/

├── package.json

└── README.md (optional)

### backend (Express + MongoDB backend)

├── config/

├── controllers/

├── models/

├── routes/

├── server.js

├── .env (ignored)

└── package.json

### README.md (Main project README)



## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/yourproject.git
cd yourproject 
```

### 🖥️ 2. Setup Backend

### 2. Install dependencies
```bash
npm install
```

### 3. Create .env file
```bash
Create a .env file in the root of your backend directory and add:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret
```

### 4. Start the development server
```bash
npm run dev
```

This uses nodemon for hot reloading.

Server will run at 👉 http://localhost:5000


### 💻 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs at 👉 http://localhost:5173

### 🌍 Deployment

- **Frontend**: Hosted on Vercel / Netlify

- **Backend**: Hosted on Render / Railway

- **Database**: MongoDB Atlas

### Example API URL:
```bash
https://your-backend-service.onrender.com/api/cards
```

### 🧾 Available Scripts

| Command       | Description                                        |
| ------------- | -------------------------------------------------- |
| `npm start`   | Starts the server (production mode)                |
| `npm run dev` | Starts the server using nodemon (development mode) |


### 🌱 Seed Data (Optional)

If you have a seed.js file to pre-load some data:
```bash
node seed.js
```

### 🔒 Environment Variables

| Variable     | Description                       |
| ------------ | --------------------------------- |
| `PORT`       | Port on which the server runs     |
| `MONGO_URI`  | MongoDB connection string         |
| `JWT_SECRET` | Secret key for JWT authentication |

### 🧑‍💻 API Example
Example GET request:
```bash
GET /api/cards
```
Response:
```json
[
  {
    "_id": "652d3f...",
    "title": "Accenture’s Campaign",
    "description": [
      "Accenture's campaign uses shifting goalposts...",
      "The sponsorship strengthens global presence."
    ]
  }
]
```

### 🚀 Current Features

- 🔐 Fully integrated MERN stack project

- 🌍 Deployed backend (Render) and frontend (Vercel)

- 🧠 Dynamic data fetched via RESTful APIs

- ⚡ Real-time rendering using React + Axios

- 🧩 Clean modular architecture (controllers, routes, models)

- 📁 Secure environment variable management with dotenv

### 🛠 Future Enhancements

- 🧾 Add user authentication (JWT)

- ☁️ Integrate file/image upload using Cloudinary

- 📊 Implement dashboards and analytics

- 🧪 Add testing (Jest / Mocha)

- 🔄 Enable CI/CD pipeline for auto deployment


## 🧑‍💻 Author

### Akhilesh khatri

- 🎓 MERN Stack Developer | Fresher Graduate

- 💼 [www.linkedin.com/in/akhilesh-khatri-78696b209]

- 📧 [akhileshkhatri4@gmail.com]


### ⭐️ Show Some Love

If you found this project helpful, please ⭐ the repo — it helps a lot and makes my GitHub look ✨ legit ✨.