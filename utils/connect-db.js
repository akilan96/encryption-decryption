import mongoose from "mongoose"

export  const connectDB = async (connectionString) =>{

    try {
        await mongoose.connect(connectionString)
         console.log("MongoDB Connected");
    } catch (error) {
       console.log(error)
        process.exit(1)
    }

}

