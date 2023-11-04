import { prisma } from "../database";

interface AddUserServiceProps {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
}

export class AddUserService {
    async execute({ firstName, lastName, age, email }: AddUserServiceProps) {
        if (!firstName || !lastName || !age || !email) {
            throw new Error("Algum dado está faltando!");
        }

        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                age,
                email,
            },
        });

        return newUser;
    }
}
