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

const Notification = ({ name, description, icon, color}: Item) => {
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
                        <span className="mx-1">·</span>
                    </figcaption>
                    <p className="text-sm font-normal text-black">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export default function CoverPage3() {
    let notifications: Item[] = [
        {
            name: "Obras literarias",
            description: "Obra a registrar",
            icon: "📚",
            color: "#4CAF50" // Verde
        },
        {
            name: "Obras dramáticas",
            description: "Obra a registrar",
            icon: "🎭",
            color: "#FF9800" // Naranja
        },
        {
            name: "Programas de radio y televisión",
            description: "Obra a registrar",
            icon: "📺",
            color: "#9C27B0" // Púrpura
        },
        {
            name: "Programas de computación (software)",
            description: "Obra a registrar",
            icon: "💻",
            color: "#3F51B5" // Azul
        },
        {
            name: "Obras escultóricas",
            description: "Obra a registrar",
            icon: "🗿",
            color: "#795548" // Marrón
        },
        {
            name: "Obras musicales, con o sin letra",
            description: "Obra a registrar",
            icon: "🎵",
            color: "#FFEB3B" // Amarillo
        }
        
    ];

    notifications = Array.from({ length: 10 }, () => notifications).flat();

    return (
        <main className="p-14">
            <div className="lg:px-28 xl:px-64">
                <p className="font-bold mb-4 text-xl text-center">1.2- Leyes nacionales e internacionales aplicables a los derechos de autor, privacidad y protección de datos</p>
                <p>Las leyes de privacidad y protección de datos regulan la recopilación, el uso y el almacenamiento de información personal de los individuos. Estas leyes tienen como objetivo garantizar que la información confidencial de los usuarios se maneje de manera responsable y segura, y que se respeten los derechos de privacidad de las personas.
                    <br />
                    A nivel internacional, el Reglamento General de Protección de Datos (RGPD) de la Unión Europea es uno de los marcos legales más exhaustivos en esta área. En él se establecen principios como el consentimiento del usuario, la limitación de la finalidad y la minimización de datos, que deben ser seguidos por las empresas y organizaciones que recopilan y procesan información personal.
                </p>
                <br />
                <p className="font-bold">Ejemplos de leyes:</p>
                <div className="lg:px-28 xl:px-10">
                    <HoverEffect items={projects} />
                </div>
            </div>
            <div className="flex justify-center mt-5 lg:px-28 xl:px-64">
                <iframe className="sm:w-full sm:h-full md:max-w-[500px] md:h-96 xl:max-w-[800px] xl:h-96" src="https://www.youtube.com/embed/rDMy__XvfeM" allowFullScreen></iframe>
            </div>
            <div className="mt-16 lg:px-28 xl:px-64">
                <p className="font-bold text-xl text-center">1.3- Trámites y requisitos de registro de obras ante la institución de derechos de autor</p>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <p className="mt-4 mb-4"> <strong> Requisitos: </strong></p>
                        <p className="mt-8">
                            <ul className="space-y-10">
                                <li> <strong> Formulario de solicitud:</strong> Completar el formulario de solicitud de registro de obra, disponible en la página web de <a href="https://catalogonacional.gob.mx/FichaTramite/INDAUTOR-01-001.html" className="underline decoration-blue-950 decoration-wavy">INDAUTOR</a> o en sus oficinas.</li>
                                <li> <strong> Comprobante de pago:</strong> Realizar el pago correspondiente a la tarifa del registro y presentar el comprobante de pago.</li>
                                <li> <strong> Identificación oficial:</strong> Presentar una copia de la identificación oficial del autor o autores, o del representante legal si aplica.</li>
                                <li> <strong> Carta poder (si aplica):</strong> Si el trámite es realizado por un representante, se debe presentar una carta poder firmada por el autor, acompañada de copias de las identificaciones oficiales de los involucrados.</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <div
                            className={cn(
                                "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg ",
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

                <p className="mt-4 mb-4"> <strong> Bemeficios del registro:</strong></p>
                <p>
                    <ul>
                        <li>El registro ante induator proporciona una prueba fehaciente de la autoría y la fecha de creación de la obra, lo cual es útil en casos de disputas legales.</li>
                        <li>Aunque los derechos de autor se adquieren automáticamente al crear una obra, el registro facilita la protección y el ejercicio de estos derechos ante terceros.</li>
                    </ul>
                </p>
            </div>
        </main>
    );
}

export const projects = [
    {
        title: "Convenio 108 del Consejo de Europa",
        description:
            "Primer instrumento internacional vinculante sobre protección de datos personales.",
    },
    {
        title: "Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)",
        description:
            "Regula el tratamiento de datos personales por parte de entidades privadas, establece principios de protección, derechos de los titulares de los datos, y obligaciones para los responsables del tratamiento de datos",
    },
    {
        title: "Tratado de la Organización Mundial de la Propiedad Intelectual (OMPI) sobre Derecho de Autor",
        description:
            "Es un arreglo particular adoptado en virtud del Convenio de Berna que trata de la protección de las obras y los derechos de sus autores en el entorno digital. Además de los derechos reconocidos en el Convenio de Berna, se conceden determinados derechos económicos.",
    },
    {
        title: "Ley Federal del Derecho de Autor (LFDA)",
        description:
            "Regula los derechos de autor sobre obras literarias y artísticas, Protege los derechos morales y patrimoniales de los autores, Establece las sanciones por violaciones a los derechos de autor",
    },
];
