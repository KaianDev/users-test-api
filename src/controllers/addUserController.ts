import { Request, Response } from "express";
import { AddUserService } from "../services/addUserService";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        try {
            const { firstName, lastName, age, email } = req.body as {
                firstName: string;
                lastName: string;
                age: string;
                email: string;
            };

            const addUser = new AddUserService();

            const results = await addUser.execute({
                firstName,
                lastName,
                age: Number(age),
                email,
            });

            return res.json(results);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}
