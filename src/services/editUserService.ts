import { prisma } from "../database";

interface EditUserServiceProps {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
}

export class EditUserService {
    async execute({
        id,
        firstName,
        lastName,
        age,
        email,
    }: EditUserServiceProps) {
        const user = await prisma.user.findFirst({
            where: { id },
        });

        if (!user) {
            throw new Error("Usuário não encontrado!");
        }
        const emailAlreadyExists = await prisma.user.findFirst({
            where: { email, id: { not: id } },
        });

        if (emailAlreadyExists) {
            throw new Error("Email já cadastrado!");
        }

        const updated = await prisma.user.update({
            where: { id: user.id },
            data: {
                firstName: firstName || user.firstName,
                lastName: lastName || user.lastName,
                age: age || user.age,
                email: email || user.email,
            },
        });

        return updated;
    }
}
