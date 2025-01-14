import { Request, Response } from 'express';

export const getUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: `Get user with email ${req.params.email}` });
};

export const createUser = async (req: Request, res: Response) => {
  res.status(201).json({ message: 'Create a new user' });
};
