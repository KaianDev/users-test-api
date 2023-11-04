import { prisma } from "../database";

export class ListUsersServices {
    async execute() {
        const users = await prisma.user.findMany();

        return users;
    }
}
