import { NextResponse } from 'next/server';

type UserLogin = {
  email: string;
  password: string;
};

export const POST = async (req: Request, res: Response) => {
  const data: UserLogin = await req.json();
  const { email, password } = data;

  // Validar los datos
  if (!(email && password)) {
    return NextResponse.json({
      status: '400',
      msg: 'wrong crendetial ',
    });
  }

  let validEmail: boolean = false;

  let name: string = email.slice(0, email.indexOf('@'));
  switch (email) {
    case 'pedro@correo.com':
    case 'juan@correo.com':
    case 'luis@correo.com':
    case 'maria@correo.com':
    case 'juanluis@correo.com':
      validEmail = true;
  }
  let validPassword: boolean = false;
  switch (password) {
    case '111':
      validPassword = true;
  }

  if (!validEmail || !validPassword) {
    return NextResponse.json({
      status: '404',
      msg: 'wrong crendetial ',
    });
  }

  return NextResponse.json({
    status: 200,
    email,
    name,
    password,
    token: '1234',
  });
};
