import { Request, Response } from "express";
import { EditUserService } from "../services/editUserService";

export class EditUserController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const { firstName, lastName, age, email } = req.body as {
                firstName: string;
                lastName: string;
                age: string;
                email: string;
            };

            const editService = new EditUserService();
            const edited = await editService.execute({
                id,
                firstName,
                lastName,
                age: Number(age),
                email,
            });
            return res.json(edited);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}
