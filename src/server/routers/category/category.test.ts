import { inferProcedureInput } from '@trpc/server';

import { appRouter, AppRouter } from '../_app';
import { createContextInner } from '~/server/context';

test('add and get post', async () => {
  const ctx = await createContextInner({});
  const caller = appRouter.createCaller(ctx);

  const input: inferProcedureInput<AppRouter['category']['create']> = {
    name: 'тестова категорія',
  };

  const category = await caller.category.create(input);
  const byId = await caller.category.byId({ id: category.id });

  expect(byId).toMatchObject(input);
});
