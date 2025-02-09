import express from 'express';
import connection from './db/connection.js'; 
import helmet from 'helmet';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import challengeRoutes from './routes/challengeRoutes.js'

// Import the combined Swagger documentation
import * as swaggerDocs from './swaggerDocs.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend API',
      version: '1.0.0',
      description: 'API documentation for the backend services',
    },
  },
  // Combine docs from different routes here
  apis: ['./swaggerDocs.js'], // Pointing to the single file
};

const swaggerDocsDefinition = swaggerJSDoc(swaggerOptions);

// Middleware
app.use(cors({
  origin: 'https://umurava-combined-12m3.vercel.app/'
}));
app.use(helmet());
app.use(express.json());

// Serve Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocsDefinition));

// Routes (example for the routes)
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/challenges", challengeRoutes);

// Connect to the database and start the server
connection.then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error('Database connection failed:', err.message);
});
