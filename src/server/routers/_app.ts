/**
 * This file contains the root router of your tRPC-backend
 */
//import { TRPCError } from '@trpc/server';
import { publicProcedure, router } from '../trpc';
import { categoryRouter } from './category/category';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    //throw new TRPCError({ code: 'BAD_REQUEST' });
    return '1111111111111';
  }),
  category: categoryRouter,
});

export type AppRouter = typeof appRouter;
