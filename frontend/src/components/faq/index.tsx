type Props = {};
export const Faq = (props: Props) => {
  return (
    <section className="p-[100px] max-w-7xl mx-auto">
      <h2 className="font-semibold mb-2 text-xl  ">PREGUNTAS Y RESPUESTAS</h2>
      <ol className="list-decimal">
        <li className="mb-2">
          ¿Qué sucede si no hay disponibilidad de automóviles en la categoría
          reservada? Se entregará un vehículo de una categoría superior.
        </li>
        <li className="mb-2">
          ¿Cómo se confirma una reserva? La confirmación de la reserva se
          realiza mediante un número de reserva enviado por Move AR.
        </li>
        <li className="mb-2">
          ¿Cuál es la penalización por cancelar una reserva? La cancelación de
          reserva tendrá una penalización del 20% del valor del alquiler.
        </li>
        <li className="mb-2">
          ¿Cuánto tiempo se mantiene la reserva después de la hora prevista de
          entrega del vehículo? La reserva se mantiene por 1 hora adicional.
        </li>
        <li className="mb-2">
          ¿Qué debe hacer el cliente en caso de robo, hurto, incendio o
          colisión? R: Debe efectuar una denuncia policial en un plazo no
          superior a 48 hs. de ocurrido el hecho.
        </li>
        <li className="mb-2">
          ¿Cómo debe devolver el vehículo el cliente? R: El vehículo se debe
          devolver limpio y con combustible. En caso contrario, se cobrará el
          reabastecimiento y/o lavado al precio fijado por Move AR.
        </li>
        <li className="mb-2">
          ¿Quiénes pueden conducir el vehículo alquilado? Solo el titular del
          contrato de alquiler o quien éste designe (siempre que cuente con
          licencia de conducir vigente y sea mayor de 21 años) pueden conducir
          el vehículo.
        </li>
        <li className="mb-2">
          ¿Cuál es la duración mínima de alquiler? La duración mínima de
          alquiler es de 72 horas.
        </li>
        <li className="mb-2">
          ¿Qué formas de pago acepta Move AR? Acepta pagos con tarjetas de
          crédito (Visa, American Express, Mastercard, Diners, Cabal y Mercado
          Pago) y en efectivo en pesos argentinos, euros o dólares.
        </li>
        <li className="mb-2">
          ¿Qué servicios están a cargo de Move AR? El mantenimiento y service
          periódico del vehículo, entrega del vehículo limpio y con combustible,
          sustitución del vehículo por averío o accidente, asistencia mecánica
          en carreteras las 24 hs. en todo el país.
        </li>
      </ol>
    </section>
  );
};
