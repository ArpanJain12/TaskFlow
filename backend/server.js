import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import userRouter from './routes/userRoute.js';
import taskRouter from './routes/taskRoute.js';

const app = express();

//  FIXED CORS
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));




// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", userRouter);
app.use("/api/tasks", taskRouter);

// Test route
app.get('/', (req, res) => {
  res.send('API Working');
});

export default app;