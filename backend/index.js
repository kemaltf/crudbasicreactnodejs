// import
import express from "express";
import cors from "cors";
// panggil User Route
import UserRoute from "./routes/UserRoute.js";
// buat variabel app
const app = express();
// tambahin middle ware
app.use(cors());
// agar bisa menerima request dalam format json
app.use(express.json());
// panggil sebagai middle ware si UserRoutenya
app.use(UserRoute);
app.listen(5000, () => console.log("Server is up and running"));
