import { PrismaClient } from '@prisma/client';

// Singleton para evitar múltiples instancias en dev (hot-reload) y reutilizar
// la conexión en el entorno serverless. En prod cada lambda usa la string
// con "-pooler" de Neon, así que el pooling real lo maneja pgbouncer.
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
