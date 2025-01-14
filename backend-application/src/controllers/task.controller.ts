import { Request, Response } from 'express';

export const getAllTasks = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Get all tasks' });
};

export const createTask = async (req: Request, res: Response) => {
  res.status(201).json({ message: 'Create a task' });
};

export const updateTask = async (req: Request, res: Response) => {
  res.status(200).json({ message: `Update task ${req.params.taskId}` });
};

export const deleteTask = async (req: Request, res: Response) => {
  res.status(200).json({ message: `Delete task ${req.params.taskId}` });
};
