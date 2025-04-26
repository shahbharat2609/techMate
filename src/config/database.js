import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://namaste-node:Shahbharat%407@namaste-node.dr0rdup.mongodb.net/devTinder")
};

export default connectDB;