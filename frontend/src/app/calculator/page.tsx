// import { MoveElements } from '@/components/calculator/MoveElement';
import { MoveThing } from '@/components/calculator/MoveThing';

const Calculator = () => {
  return (
    <section className="min-h-[calc(100vh-287px)] bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center">
      {/* Elemento a mover */}
      <MoveThing />
      {/* <MoveElements /> */}
    </section>
  );
};
export default Calculator;
