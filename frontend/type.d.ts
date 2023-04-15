import { type } from 'os';

type User = {
  email: string;
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

type Location = {
  id: string;
  name: string;
};
