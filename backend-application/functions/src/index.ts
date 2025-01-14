import { onRequest } from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import express, { Application } from "express";
import taskRoutes from "./routes/task.routes";
import userRoutes from "./routes/user.routes";
import endpoints from "./constants/route.constant";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(endpoints.tasks, taskRoutes);
app.use(endpoints.users, userRoutes);

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

exports.taskedApi= onRequest(app);
