import { FaPhoneVolume } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <h2 className="text-3xl">¿Tenes consultas o sugerencias? Contactanos:</h2>
      <p className="my-4">
        <FaPhoneVolume />
      </p>
    </section>
  );
}
