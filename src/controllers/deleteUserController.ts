import { Request, Response } from "express";
import { DeleteUserService } from "../services/deleteUserService";

export class DeleteUserController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deleteService = new DeleteUserService();
            const deleted = await deleteService.execute(id);
            return res.json(deleted);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}
