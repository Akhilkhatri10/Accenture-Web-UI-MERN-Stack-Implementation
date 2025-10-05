import express from 'express';
import dotenv from 'dotenv';    
import connectDB from './utils/db.js';
import pageRoutes from './routes/page.route.js';
import cardRoutes from './routes/card.route.js';
import cors from "cors";

dotenv.config({});

const app = express();

// Middleware
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions))

// Routes
app.use("/api/pages", pageRoutes);
app.use("/cards", cardRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Async function for starting server
const startServer = async () => {
  try {
    await connectDB(); // wait until DB is connected
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1); // stop server if DB fails
  }
};

startServer();