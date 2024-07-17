import { HoverEffect } from "../components/Card";
import { cn } from "../lib/utils";
import { AnimatedList } from "../components/ListNotification";

interface Item {
    name: string;
    description: string;
    icon: string;
    color?: string;
    time?: string;
}
const Notification = ({ name, description, icon, color }: Item) => {



    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                "transition-all duration-1000 ease-in-out hover:scale-[103%]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-red-600 ">
                        <span className="text-sm sm:text-lg text-black">{name}</span>
                    </figcaption>
                    <p className="text-sm font-normal text-black">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};
export default function CoverPage4() {

    let notifications: Item[] = [
        {
            name: "Datos de identificación (nombre, etc.).",
            description: "Tipo de dato personal",
            icon: "🆔",
            color: "#009688" // Verde Teal
        },
        {
            name: "Datos laborales (puesto, etc.).",
            description: "Tipo de dato personal",
            icon: "💼",
            color: "#FFC107" // Amarillo
        },
        {
            name: "Datos académicos (títulos, etc.).",
            description: "Tipo de dato personal",
            icon: "🎓",
            color: "#E91E63" // Rosa Fucsia
        },
        {
            name: "Datos financieros (número de cuenta).",
            description: "Tipo de dato personal",
            icon: "💳",
            color: "#2196F3" // Azul
        },
        {
            name: "Datos sensibles (salud, etc.).",
            description: "Tipo de dato personal",
            icon: "🔒",
            color: "#FF5722" // Naranja Profundo
        }
    ];

    notifications = Array.from({ length: 10 }, () => notifications).flat();

    return (
        <main className="p-14 ">
            <div className="lg:px-28 xl:px-64">
                <p className="font-bold mb-4 text-xl">1.4- Proceso de trámite de registro de obras ante la institución de derechos de autor</p>
                <p className="mt-4 mb-4">El proceso de registro de obras ante el Instituto Nacional del Derecho de Autor (INDAUTOR) en México se realiza para proteger los derechos de autor y establecer la titularidad de las obras literarias, artísticas y científicas. A continuación, se detalla el proceso de trámite paso a paso:</p>
                <p className="mb-4 font-bold">Documentos necesarios:</p>
            <div className="lg:px-28 xl:px-16">
                <HoverEffect items={projects} />
            </div>
            </div>
            <div className="lg:px-28 xl:px-64">
                <p className="mb-4 mt-4 font-bold">Realizacion de pago:</p>
                <p>
                    <ul>
                        <li>
                            <strong> Tarifas:</strong> Las tarifas varían dependiendo del tipo de obra y del trámite específico. Verificar las tarifas vigentes en el sitio web de <a href="https://catalogonacional.gob.mx/FichaTramite/INDAUTOR-01-001.html">INDAUTOR.</a>
                        </li>
                        <br />
                        <li>
                            <strong> Método de Pago:</strong> El pago puede realizarse en línea a través del portal de INDAUTOR, en bancos autorizados o en las oficinas de INDAUTOR.
                        </li>
                    </ul>
                </p>
                <p className="mb-4 mt-4 font-bold">Presentacion de la solicitud:</p>
                <p>
                    <ul>
                        <li>
                            <strong> Precencial:</strong>
                            <ul>
                                <li>* Presentar todos los documentos en las oficinas de INDAUTOR.</li>
                                <li>* Asegurarse de llevar copias y originales de todos los documentos.</li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <strong>En Línea:</strong>
                            <ul>
                                <li>* Algunos registros pueden realizarse a través de la plataforma en línea de INDAUTOR, si está disponible.</li>
                                <li>* Subir los documentos requeridos en formato digital.</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <p className="mb-4 mt-4 font-bold">Recepción y Revisión de la Solicitud:</p>
                <p>
                    <ul>
                        <li> <strong> Recepción:</strong> INDAUTOR recibe la solicitud y proporciona un acuse de recibo.</li>
                        <li> <strong>Revisión:</strong> INDAUTOR revisa la documentación para asegurarse de que cumple con todos los requisitos.</li>
                    </ul>
                </p>
                <p className="mb-4 mt-4 font-bold">Registro y Certificación:</p>
                <p>
                    <ul>
                        <li> <strong> Aprobación:</strong> Si la solicitud cumple con todos los requisitos, INDAUTOR procede a registrar la obra.</li>
                        <li> <strong> Emisión de Certificado:</strong> Se emite un certificado de registro que acredita la titularidad de los derechos de autor sobre la obra. Este certificado puede ser recogido en persona o enviado por correo, dependiendo de la modalidad de trámite seleccionada.</li>
                    </ul>
                </p>
            </div>
            <div className="flex justify-center mt-5 lg:px-28 xl:px-64">
                <iframe className="sm:w-full sm:h-full md:max-w-[500px] md:h-96 xl:max-w-[800px] xl:h-96" src="https://www.youtube.com/embed/wefqSLORcxg" allowFullScreen></iframe>
            </div>

            <div className="mt-5 lg:px-28 xl:px-64">
                <p className="font-bold text-xl">1.5- Proceso de elaboración de avisos de privacidad </p>
                <p className="mt-4 mb-4">El aviso de privacidad es un documento que informa a las personas sobre cómo una organización recopila, usa, almacena y protege sus datos personales. En México, la elaboración de avisos de privacidad está regulada por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). A continuación, se detalla el proceso de elaboración de un aviso de privacidad:</p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <p className="mb-4 mt-4 font-bold">Redacción del Aviso de Privacidad:</p>
                        <p>
                            <ul className="space-y-4">
                                <li>
                                    <strong>1. Identidad y Domicilio del Responsable:</strong>
                                    <ul className="ml-4">
                                        <li>* Nombre o razón social del responsable del tratamiento de los datos.</li>
                                        <li>* Domicilio del responsable, incluyendo la dirección completa y datos de contacto.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>2. Finalidades del Tratamiento:</strong>
                                    <ul className="ml-4">
                                        <li>* Describir las finalidades primarias y secundarias del tratamiento de datos.</li>
                                        <li>* Finalidades primarias son aquellas necesarias para la relación con el titular.</li>
                                        <li>* Finalidades secundarias son aquellas que no son necesarias para la relación con el titular pero pueden ser adicionales.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>3. Medios para Ejercer los Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición):</strong>
                                    <ul className="ml-4">
                                        <li>* Describir los procedimientos y medios para que los titulares puedan ejercer sus derechos ARCO.</li>
                                        <li>* Incluir direcciones de correo electrónico, números de teléfono y cualquier otra forma de contacto.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>4. Transferencias de Datos:</strong>
                                    <ul className="ml-4">
                                        <li>* Informar si los datos serán transferidos a terceros y, en su caso, especificar las finalidades de dichas transferencias.</li>
                                        <li>* Incluir el consentimiento del titular cuando sea necesario.</li>
                                    </ul>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <div
                            className={cn(
                                "relative flex h-[500px] w-full flex-col p-6 overflow-hidden ",
                            )}
                        >
                            <AnimatedList>
                                {notifications.map((item, idx) => (
                                    <Notification {...item} key={idx} />
                                ))}
                            </AnimatedList>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <p className="mb-4 mt-4 font-bold">Publicación y Difusión del Aviso de Privacidad</p>
                        <p>
                            <ul>
                                <li>
                                    Físico:
                                    <ul>
                                        <li>* Colocar el aviso de privacidad en lugares visibles dentro de las instalaciones de la organización.</li>
                                    </ul>
                                </li>
                                <li>
                                    Digital:
                                    <ul>
                                        <li>* Publicar el aviso de privacidad en el sitio web de la organización.</li>
                                        <li>* Incluir el aviso de privacidad en aplicaciones móviles y cualquier plataforma digital utilizada por la organización.</li>
                                    </ul>
                                </li>
                                <li>
                                    Otros Medios:
                                    <ul>
                                        <li>* Enviar el aviso de privacidad por correo electrónico a los titulares de datos.</li>
                                        <li>* Incluir el aviso de privacidad en contratos, formularios y cualquier documento que recoja datos personales.</li>
                                    </ul>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <p className="mb-4 mt-4 font-bold">Revisión y Cumplimiento Legal</p>
                        <p>
                            <strong> Revisión Legal:</strong>
                            <ul>
                                <li>* Verificar que el aviso de privacidad cumpla con los requisitos establecidos por la LFPDPPP y sus regulaciones.</li>
                                <li>* Consultar con un asesor legal especializado en protección de datos personales si es necesario.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export const projects = [
    {
        title: "Formulario de Solicitud de Registro:",
        description:
            "Completar el formulario específico para el tipo de obra a registrar. Los formularios están disponibles en el sitio web de INDAUTOR  o en sus oficinas.",
        link: "https://catalogonacional.gob.mx/FichaTramite/INDAUTOR-01-001.html",
    },
    {
        title: "Ejemplar de la Obra:",
        description:
            "Una copia de la obra a registrar. Dependiendo del tipo de obra, esto puede ser una copia impresa, digital o en otros formatos específicos.",
        //   link: "https://netflix.com",
    },
    {
        title: "Comprobante de Pago:",
        description:
            "Realizar el pago correspondiente a la tarifa del registro y adjuntar el comprobante de pago",
        //   link: "https://google.com",
    },
    {
        title: "Identificación Oficial:",
        description:
            "Copia de una identificación oficial del autor o autores (INE, pasaporte, cédula profesional).  Si el trámite lo realiza un representante, se debe incluir una carta poder firmada por el autor, junto con copias de las identificaciones oficiales de los involucrados.",
        // link: "https://google.com",
    },
];