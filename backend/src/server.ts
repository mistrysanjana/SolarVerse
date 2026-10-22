import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { apiRouter } from './routes/apiRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { checkDbConnection } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// CORS configuration
app.use(
  cors({
    origin: [FRONTEND_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
  })
);

app.use(express.json());

// API Routes
app.use('/api', apiRouter);

// 404 Route Handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
  });
});

// Centralized Error Handling
app.use(errorHandler);

// Start Server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, async () => {
    console.log(`🚀 SOLARVERSE API server running on http://localhost:${PORT}`);
    const isDbConnected = await checkDbConnection();
    if (isDbConnected) {
      console.log('✅ SQLite/Prisma astronomical database connected successfully.');
    } else {
      console.log('⚠️ Running in verified static data mode.');
    }
  });
}

export default app;
