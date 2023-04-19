declare module '*.jpg';
declare module '*.png';
declare module '*.svg';

type LoginProps = {
  email: string;
  password: string;
};

type RegisterProps = {
  email: string;
  password: string;
};

type User = {
  id: number;
  email: string;
  password?: string;
  fullName: string;
  idLocation: string;
  address: string;
  dni: string;
  numberLicence: string;
  dateExpiration: string;
  card: {
    numberCard: string;
    fullName: string;
    date_expiration: string;
    cvv: string;
  };
};
type Card = {
  numberCard: string;
  fullName: string;
  date_expiration: string;
  cvv: string;
};

type Location = {
  id: string;
  name: string;
};
