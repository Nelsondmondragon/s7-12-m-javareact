type UpdateProps = {
  card: Card;
  id: number;
  token: string;
};

const createCard = async (updateData: UpdateProps) => {
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${URL}cards/${updateData.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${updateData.token}`,
      },
      body: JSON.stringify(updateData.card),
    });

    if (!response.ok) {
      return { status: response.status, msg: 'credential not valid' };
    }
    return await response.json();
  } catch (error) {
    console.log('error es', error);
  }
};
export default createCard;
