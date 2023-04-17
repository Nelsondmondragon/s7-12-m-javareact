import { BookingCard } from '@/components/bookingCard';

const Confirmed = () => {    
    return (
        <section className="min-h-[85vh] flex justify-center text-white py-[5%]">
            <BookingCard btn1={"Modificar reserva"} btn2={"Compartir"}/>
        </section>
    );
};

export default Confirmed;
