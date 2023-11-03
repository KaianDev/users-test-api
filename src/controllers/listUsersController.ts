import { Request, Response } from "express";
import { ListUsersServices } from "../services/listUsersService";

export class ListUserController {
    async handle(req: Request, res: Response) {
        const listService = new ListUsersServices();
        const list = await listService.execute();

        return res.json(list);
    }
}
