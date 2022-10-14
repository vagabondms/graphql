import { ReactElement } from 'react';

import Simple from '@/layouts/Simple';
import Form from '@/modules/login/Form';

const Login = (): ReactElement => {
  return (
    <Simple>
      <Form />
    </Simple>
  );
};

export default Login;
