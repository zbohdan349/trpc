import { z } from 'zod';

import { prisma } from '../../prisma';
import { adminProcedure, publicProcedure, router } from '~/server/trpc';

export const categoryRouter = router({
  create: adminProcedure
    .input(
      z.object({
        name: z.string().min(1).max(32),
      }),
    )
    .mutation(async ({ input }) => {
      const category = await prisma.category.create({ data: input });
      return category;
    }),
  byId: publicProcedure
    .input(
      z.object({
        id: z.string().min(1).max(32),
      }),
    )
    .query(async ({ input }) => {
      return await prisma.category.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});
