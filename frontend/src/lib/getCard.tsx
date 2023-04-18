type GetCardProps = {
  id: number;
  token: { token: string };
};

const getCard = async ({ id, token }: GetCardProps) => {
  console.log(token);
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${URL}cards/detail/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.token}`,
      },
    });

    const res = await response.json();
    return res;
  } catch (error) {
    console.log('error es', error, token);
  }
};
export default getCard;
