// server.js
import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/product.route.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello from Node API SERVER Updated');
});

// Use product routes
app.use('/api/products', productRoutes);

// Connect to MongoDB and start server
mongoose.connect("mongodb+srv://saumikroy992:JIREtSmPvA8mzusj@test.iv6ocm7.mongodb.net/")
  .then(() => {
    console.log("✅ Connected to database!");
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
  });
