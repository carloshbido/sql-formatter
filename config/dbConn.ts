import mongoose from "mongoose"

async function connectDb() {
  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(process.env.MONGODB_URI as string)
  } catch(err) {
    console.log(err)
  }
}

export default connectDb

