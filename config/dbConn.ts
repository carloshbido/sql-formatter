import mongoose from "mongoose"

async function connectDb() {
  const res = await mongoose.connect(process.env.MONGODB_URI as string)
  return res
}

export default connectDb