import mongoose from "mongoose";

// Cache the database connection
let cachedConnection: typeof mongoose | null = null;

const connectDB = async () => {
  // If the connection is already established, reuse it
  if (cachedConnection && mongoose.connection.readyState === 1) {
    console.log("Using existing database connection");
    return cachedConnection;
  }

  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });
    
    cachedConnection = mongoose;
    
    console.log(
      `MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
    
    return mongoose;
  } catch (error) {
    console.log("MongoDB connection failed: " + error);
    throw error;
  }
};

export default connectDB;