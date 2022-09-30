import { useQuery } from '@apollo/client';
import { useState } from 'react';

import { GET_DIE } from 'src/queries/example';

const ExampleComponent = () => {
  const { data } = useQuery(GET_DIE);
  const [num, setNum] = useState(0);
  console.log(data);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setNum(prev => prev + 1);
        }}
      >
        {num}
      </button>
      ExampleComponent
    </div>
  );
};

export default ExampleComponent;
