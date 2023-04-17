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

  /*
    function validarNumCard(numeroTarjeta) {
        soloNumero(numeroTarjeta);
        cantidadNumeros(numeroTarjeta);
    }
    
    function soloNumero(numeroTarjeta) {
        numeroTarjeta.value = numeroTarjeta.value.replace(expNum,'');
    }
    
    function cantidadNumeros(numeroTarjeta) {
        numeroTarjeta
    }
    
    */

  console.log('number: 4373471036301103', cardValNumber('4373471036301103'));
  console.log('number: 4851519931403589', cardValNumber('4851519931403589'));
  console.log('number: 4578565808288696', cardValNumber('4578565808288696'));
  console.log('number: 4242424242424242', cardValNumber('4242424242424242'));
  console.log('number: 4000056655665556', cardValNumber('4000056655665556'));
  console.log('number: 4000004840008001', cardValNumber('4000004840008001'));
  console.log('number: 4000000000000002', cardValNumber('4000000000000002'));
};
