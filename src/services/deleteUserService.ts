import { prisma } from "../database";

export class DeleteUserService {
    async execute(id: string) {
        const user = await prisma.user.findFirst({
            where: { id },
        });

        if (!user) {
            throw new Error("Usuário não encontrado!");
        }

        await prisma.user.delete({
            where: { id: user.id },
        });

        return { message: "Usuário deletado com sucesso!" };
    }
}
