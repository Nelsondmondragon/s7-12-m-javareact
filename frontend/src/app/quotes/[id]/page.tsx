type ParamsProps = {
  params: {
    id: string;
  };
};
const QuoteDetail = ({ params }: ParamsProps) => {
  return (
    <div className="text-rose-400 text-4xl flex justify-center items-center min-h-screen">
      Detalle Cotización {params.id}
    </div>
  );
};
export default QuoteDetail;
