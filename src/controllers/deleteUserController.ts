import { Request, Response } from "express";
import { DeleteUserService } from "../services/deleteUserService";

export class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        console.log(id);

        const deleteService = new DeleteUserService();
        const deleted = await deleteService.execute(id);

        return res.json(deleted);
    }
}
