import mongoose from "mongoose";
import c from "config";

const CONNECTION = c.get("MONGO_URI") || "mongodb://localhost/Umurava";

const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500,
      connectTimeoutMS: 30000,
    });
    console.log(`Connected Successfully to Umurava DB`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1); 
  }
};

connectDB();
