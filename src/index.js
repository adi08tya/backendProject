import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({
    path:'./.env'
});

connectDB()
.then(() => {
    app.listen(process.env.PORT , ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);   
    })
}).catch((err) => {
    console.log("MongoDB connection failed", err );
    
});

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("err:", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// })();
