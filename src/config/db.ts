import mongoose from 'mongoose';
const connectDB = async () => {
    await mongoose.connect('mongodb+srv://user12:v02va1hYHUXcY25K@cluster0.r5tzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('MongoDb Connected');
}
export { connectDB };