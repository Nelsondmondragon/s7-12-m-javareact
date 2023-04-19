import Image from "next/image";
import persLecs from "../../../public/assets/images/services/personaLecciones.png"
import consejo1 from "../../../public/assets/images/services/consejo1.png"
import consejo2 from "../../../public/assets/images/services/consejo2.png"
import consejo3 from "../../../public/assets/images/services/consejo3.png"
import consejo4 from "../../../public/assets/images/services/consejo4.png"
import consejo5 from "../../../public/assets/images/services/consejo5.png"



export default function Services3() {


    return (
        <section className="min-h-screen flex flex-col  items-center bg-mobile-pattern md:bg-global-pattern bg-no-repeat bg-cover bg-center">
            <h2 className="text-3xl text-[#FFFEFE] pt-10 pb-10">Lecciones de uso  del vehículo</h2>
            <div className="flex flex-col">
                <div className="flex max-xl:flex-row max-md:flex-col max-md:content-center max-md:justify-center ">
                    <div className="max-lg:self-center">
                        <Image src={persLecs} alt="Personal de mudanza" className="w-80 rounded-lg border-[#6EC8FC] border-solid border-2"></Image>
                    </div>
                    <div className="bg-[#FFFFFF] py-2 px-2 text-sm text-justify text-[#024369] font-black ml-12 rounded-lg w-80 max-md:self-center max-md:ml-0 max-md:mt-12">
                        <p>¡Bienvenidos a las lecciones de uso vehicular de camiones de mudanza!
                            <br /> <br />
                            Este es un resumen de las lecciones sobre el uso vehicular de camiones de mudanza. Se habla sobre los aspectos básicos de la conducción, conducción defensiva, carga del camión, conducción en carretera, estacionamiento y maniobras de giro. Se enfatiza la importancia de mantener una distancia de seguimiento adecuada, identificar peligros en la carretera y cargar el camión correctamente. Si se desea obtener más información detallada, se invita a ver el video completo con consejos útiles y prácticos.</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>
                        <h2 className="text-[#FFFFFF] text-2xl max-sm:text-lg mt-10">Video de lecciones de uso vehícular </h2>
                        <iframe className="w-[43rem] max-md:w-[35rem] max-md:h-[19.5rem] max-sm:w-80 max-sm:h-[11rem] mt-10 h-[25rem] max-sm:flex max-sm:self-center" src="https://www.youtube.com/embed/jy4qlNqObp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="bg-[#FFFFFF] rounded-lg flex flex-col pt-5 mt-10 mb-10 w-[43rem] max-md:w-[35rem] max-sm:w-80">
                        <h2 className="flex justify-center text-center text-[#024369] font-black">CONSEJOS PARA UNA MUDANZA ORGANIZADA</h2>
                        <div className="flex justify-start align-middle px-10 pt-5 max-sm:px-2 ">
                            <Image src={consejo1} alt="consejo1" className="w-16 max-sm:w-12 max-sm:h-12"></Image>
                            <p className="pl-4 text-primary-600 font-bold max-sm:pl-2">
                                Tambien podras calcular de acuerdo al volumen de carga, la mejor opcion de transporte.
                            </p>
                        </div>
                        <div className="flex justify-start align-middle px-10 pt-5 max-sm:px-2">
                            <Image src={consejo2} alt="consejo1" className="w-16 max-sm:w-12 max-sm:h-12"></Image>
                            <p className="pl-4 text-primary-600 font-bold max-sm:pl-2">
                                Inventario: Toma nota de cada articulo, agrupandolo por tipo/uso.
                            </p>
                        </div>
                        <div className="flex justify-start align-middle px-10 pt-5 max-sm:px-2 ">
                            <Image src={consejo3} alt="consejo1" className="w-16 max-sm:w-12 max-sm:h-12"></Image>
                            <p className="pl-4 text-primary-600 font-bold max-sm:pl-2">
                                Envuelve: Protege aquellos objetos fragiles y muebles, con papel, carton y plastico protector.
                            </p>
                        </div>
                        <div className="flex justify-start align-middle px-10 pt-5 max-sm:px-2 ">
                            <Image src={consejo4} alt="consejo1" className="w-16 max-sm:w-12 max-sm:h-12"></Image>
                            <p className="pl-4 text-primary-600 font-bold max-sm:pl-2">
                                Cajas: Una vez tengas todo clasificado, guarda lo maximo posible en cajas o canastas.
                            </p>
                        </div>
                        <div className="flex justify-start align-middle px-10 pt-5 pb-12 max-sm:px-2 ">
                            <Image src={consejo5} alt="consejo1" className="w-16 max-sm:w-12 max-sm:h-12"></Image>
                            <p className="pl-4 text-primary-600 font-bold max-sm:pl-2">
                                Etiqueta: Cada caja o canasto, identificalo con su contenido y asi te sera mas facil cuando termines tu mudanza, poder guardar todo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}