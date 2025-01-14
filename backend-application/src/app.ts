import express, { Application } from "express";
import taskRoutes from './routes/task.routes';
import userRoutes from './routes/user.routes';
import endpoints from "./constants/route.constant";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(endpoints.tasks, taskRoutes);
app.use(endpoints.users, userRoutes);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;