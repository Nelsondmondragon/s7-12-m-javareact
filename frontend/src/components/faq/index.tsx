export const Question = () => {
  return (
    <ul className="list-disc">
      <li className="mb-2">
        <p className="font-semibold">
          ¿Qué sucede si no hay disponibilidad de automóviles en la categoría
          reservada?
        </p>
        <p>Se entregará un vehículo de una categoría superior.</p>
      </li>
      <li className="mb-2">
        <p className="font-semibold">¿Cómo se confirma una reserva?</p>
        <p>
          La confirmación de la reserva se realiza mediante un número de reserva
          enviado por Move AR.
        </p>
      </li>
      <li className="mb-2">
        <p className="font-semibold">
          ¿Cuál es la penalización por cancelar una reserva?
        </p>
        <p>
          La cancelación de reserva tendrá una penalización del 20% del valor
          del alquiler.
        </p>
      </li>
      <li className="mb-2">
        <p className="font-semibold">
          ¿Cuánto tiempo se mantiene la reserva después de la hora prevista de
          entrega del vehículo?
        </p>
        <p>La reserva se mantiene por 1 hora adicional.</p>
      </li>
      <li className="mb-2">
        <p className="font-semibold">
          ¿Qué debe hacer el cliente en caso de robo, hurto, incendio o
          colisión?
        </p>
        <p>
          Debe efectuar una denuncia policial en un plazo no superior a 48 hs.
          de ocurrido el hecho.
        </p>
      </li>
      <li className="mb-2">
        <p className="font-semibold">
          ¿Cómo debe devolver el vehículo el cliente?
        </p>
        <p>
          El vehículo se debe devolver limpio y con combustible. En caso
          contrario, se cobrará el reabastecimiento y/o lavado al precio fijado
          por Move AR.
        </p>
      </li>
      <li className="mb-2">
        <p className="font-semibold">
          ¿Quiénes pueden conducir el vehículo alquilado? Solo el titular del
          contrato de alquiler o quien éste designe (siempre que cuente con
          licencia de conducir vigente y sea mayor de 21 años) pueden conducir
          el vehículo.
        </p>
      </li>
      <li className="mb-2">
        <p className="font-semibold">
          ¿Cuál es la duración mínima de alquiler?
        </p>
        <p>La duración mínima de alquiler es de 72 horas.</p>
      </li>
      <li className="mb-2">
        <p className="font-semibold">¿Qué formas de pago acepta Move AR?</p>
        <p>
          Acepta pagos con tarjetas de crédito (Visa, American Express,
          Mastercard, Diners, Cabal y Mercado Pago) y en efectivo en pesos
          argentinos, euros o dólares.
        </p>
      </li>
      <li className="mb-2">
        <p className="font-semibold">
          ¿Qué servicios están a cargo de Move AR?
        </p>
        <p>
          El mantenimiento y service periódico del vehículo, entrega del
          vehículo limpio y con combustible, sustitución del vehículo por averío
          o accidente, asistencia mecánica en carreteras las 24 hs. en todo el
          país.
        </p>
      </li>
    </ul>
  );
};
