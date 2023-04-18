type UpdateProps = {
  card: Card;
  id: number;
  token: string;
};

const updateCard = async (updateData: UpdateProps) => {
  console.log('en updateCard', updateData);
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${URL}cards/${updateData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${updateData.token}`,
      },
      body: JSON.stringify(updateData.card),
    });

    if (!response.ok) {
      console.log(response.status);
      return { status: response.status, msg: 'credential not valid' };
    }
    const a = await response.json();
    console.log(
      `${URL}cards/${updateData.id}`,
      'body: ',
      updateData.card,
      'resultado = ',
      a
    );
    return a;
  } catch (error) {
    console.log('error es', error);
  }
};
export default updateCard;
