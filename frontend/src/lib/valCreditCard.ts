const cl = console.log;
type CreditCardProps = {
  card_number?: string;
  name?: string;
  cvv?: string;
  month?: string;
  year?: string;
};

export const cardValNumber = (numberCard) => {
  if (numberCard) {
    let sumaTotal = 0;
    let revserNum = [...numberCard].reverse(); // obteniendo array inverso
    for (let index = 1; index < revserNum.length; index = index + 2) {
      revserNum[index] = revserNum[index] * 2;
      if (revserNum[index] >= 10) {
        revserNum[index] = revserNum[index] - 9;
      }
    }
    for (let value of revserNum) {
      sumaTotal = sumaTotal + parseInt(value);
    }
    if (sumaTotal % 10 === 0) {
      return true;
      console.log('Es una tarjeta valida');
    }
  } else return cl('la tarjet es invalida');
};

export const valCreditCard = () => {
  const onlyNum = /[^0-9]/g;
  const onlypLet = /[^a-zA-ZÑñáéíóúÁÉÍÓÚ\s]*$/g;
};
