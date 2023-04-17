type UpdateProps = {
  fullName: string;
  address: string;
  dni: string;
  numberLicence: string;
  dateExpiration: string;
  idLocation: string;
};

const updateCustomer = async (updateData: UpdateProps) => {
  console.log('en updateCustomer', updateData);
  const URL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${URL}customers/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      console.log(response.status);
      return { status: response.status, msg: 'credential not valid' };
    }
    const a = await response.json();
    return a;
  } catch (error) {
    console.log('error es', error);
  }
};
export default updateCustomer;
