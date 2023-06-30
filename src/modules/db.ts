import { PrismaClient } from '@prisma/client';

const { nanoid } = require('nanoid');

const db = new PrismaClient({ log: ['query', 'error', 'warn', 'info'] });

export default db;

export const genId = () => nanoid(16);
