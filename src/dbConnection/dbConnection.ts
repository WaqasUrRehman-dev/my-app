import mongoose from "mongoose";

const url = process.env.MONGO_URL!;

if (!process.env.MONGO_URL) {
  throw new Error("MONGO_URL is not provided in the environment variables.");
  
}else{
  console.log("Database connected Successfully")
}

let dbConnection:any

dbConnection=mongoose.connect(url)
export default dbConnection


// export async function connectToDB() {
//   try {
//     await mongoose.connect(process.env.MONGO_URL!);
//     const connection = mongoose.connection;

//     connection.on("connected", () => {
//       console.log("MongoDB connected successfully");
//     });

//     connection.on("error", (err) => {
//       console.log(
//         "MongoDB connection error, please make sure that db is up and running: " +
//           err
//       );
//     });

//     process.exit();
//   } catch (error) {
//     console.log("Something went wrong while connecting to the database.");
//     console.log(error);
//   }
// }
