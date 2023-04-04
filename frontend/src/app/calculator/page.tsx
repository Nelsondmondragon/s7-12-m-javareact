// import { MoveElements } from '@/components/calculator/MoveElement';
import { MoveThing } from '@/components/calculator/MoveThing';

type Props = {};
const Calculator = (props: Props) => {
  return (
    <section>
      {/* Elemento a mover */}
      <MoveThing />
      {/* <MoveElements /> */}
    </section>
  );
};
export default Calculator;
