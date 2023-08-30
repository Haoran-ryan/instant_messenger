import { PrismaClient } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}
const client = globalThis.prisma || new PrismaClient(); // if globalThis.prisma already exists. If it does, client is set to that existing instance. Otherwise, a new instance of PrismaClient is created.
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;