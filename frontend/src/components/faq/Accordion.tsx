const accordionData = [
  {
    question: 'Pregunta 1',
    answer:
      'Respuestas 1 lore  Pregunta Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vel iste eius deserunt optio, voluptates magnam recusandae, illum incidunt ea velit libero, temporibus amet rerum aliquam in non quaerat culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magnam magni deleniti quisquam quaerat rerum temporibus. Aperiam ex, tempore recusandae ratione veritatis, culpa odit cumque sequi, velit sint voluptatem deserunt',
  },
  {
    question: 'Pregunta 2',
    answer:
      'Respuestas 2 lore  Pregunta Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vel iste eius deserunt optio, voluptates magnam recusandae, illum incidunt ea velit libero, temporibus amet rerum aliquam in non quaerat culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magnam magni deleniti quisquam quaerat rerum temporibus. Aperiam ex, tempore recusandae ratione veritatis, culpa odit cumque sequi, velit sint voluptatem deserunt',
  },
  {
    question: 'Pregunta 3',
    answer:
      'Respuestas 3 lore  Pregunta Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vel iste eius deserunt optio, voluptates magnam recusandae, illum incidunt ea velit libero, temporibus amet rerum aliquam in non quaerat culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magnam magni deleniti quisquam quaerat rerum temporibus. Aperiam ex, tempore recusandae ratione veritatis, culpa odit cumque sequi, velit sint voluptatem deserunt',
  },
];

type Props = {};
export const Accordion = (props: Props) => {
  return (
    <section className="min-h-[60vh] ">
      <h1> Preguntas y Respuestas Frecuentes</h1>
      <article className="bg-red-300">
        {accordionData.map((question) => {
          return <p key={question.question}>{question.question}</p>;
        })}
      </article>
    </section>
  );
};
