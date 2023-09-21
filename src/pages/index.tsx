import { useState } from 'react';
import { trpc } from '../utils/trpc';

const IndexPage = () => {
  const [result] = useState(trpc.category.byId.useQuery({ id: '2' }));

  return (
    <div>
      asdasdadadasd
      <br />
      {JSON.stringify(result.data)}
    </div>
  );
};

export default IndexPage;
