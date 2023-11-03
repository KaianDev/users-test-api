import { prisma } from "../prisma";

export class ListUsersServices {
    async execute() {
        const users = await prisma.user.findMany();

        return users;
    }
}
