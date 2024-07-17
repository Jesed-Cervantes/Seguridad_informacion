import { HoverEffect } from "../components/Card";
import { FeaturesSectionDemo } from "../components/CardGruop";

export default function CoverPage5() {
    return (
        <main className="p-14 lg:px-28 xl:px-64">
            <div>
                <p className="font-bold mb-4 text-xl text-center">2- Ética informática y delitos informáticos</p>
                <p>
                    La ética informática se refiere a los principios y estándares que guían el comportamiento de las personas en el uso de las tecnologías de la información y la comunicación (TIC). Estos principios buscan asegurar que el uso de la informática sea justo, respetuoso y beneficie a la sociedad en general.
                </p>
                <p className="mb-4 mt-4 font-bold">Principios de la Ética Informática:</p>
                <div className="lg:px-28 xl:px-32">
                    <HoverEffect items={projects} />
                </div>
                <p className="mb-4 mt-4 font-bold">Delitos Informáticos:</p>
                <p className="mb-4">Los delitos informáticos, también conocidos como ciberdelitos, son actividades ilegales que se cometen utilizando computadoras y redes digitales. Estos delitos pueden afectar a individuos, organizaciones y gobiernos, causando daños económicos, de reputación y de seguridad.</p>
                <p className="mb-4 mt-4 font-bold">Tipos de Delitos Informáticos:</p>
                <div className="lg:px-28 xl:px-32">
                    <FeaturesSectionDemo/>
                </div>
                <p className="mb-4 mt-4 font-bold">Prevención y Sanción de Delitos Informáticos:</p>
            </div>
            <div className="lg:px-28 xl:px-32 ">
                <HoverEffect items={projects2} className=""/>
            </div>
            <div className="mt-5">
                <p className="font-bold mb-4 text-xl text-center">2.1- Conceptos de ética y delitos informáticos</p>
                <p>
                    <strong>Ética</strong>La ética informática se refiere a los principios y estándares que guían el comportamiento de las personas en el uso de las tecnologías de la información y la comunicación (TIC). Estos principios buscan asegurar que el uso de la informática sea justo, respetuoso y beneficie a la sociedad en general.
                </p>
                <br />
                <p>
                    <strong>Delitos informáticos</strong>Los delitos informáticos, también conocidos como ciberdelitos, son acciones ilegales que se cometen utilizando computadoras, redes de comunicación y tecnologías de la información. Estos delitos se caracterizan por el uso indebido de la tecnología para perpetrar actos ilegales que pueden afectar a individuos, organizaciones, gobiernos o sistemas informáticos en general.
                </p>
            </div>
            <div className="flex justify-center mt-5 lg:px-28 xl:px-64">
                <iframe className="sm:w-full sm:h-full md:max-w-[500px] md:h-96 xl:max-w-[800px] xl:h-96" src="https://www.youtube.com/embed/_o-2fQ3bDRQ" allowFullScreen></iframe>
            </div>
        </main>
    );
}

export const projects = [
    {
        title: "Privacidad:",
        description:
            "Respetar la privacidad de los individuos al manejar su información personal. Implementar medidas para proteger datos sensibles y evitar su divulgación no autorizada",
    },
    {
        title: "Propiedad Intelectual:",
        description:
            "Reconocer y respetar los derechos de autor y las patentes sobre software y contenido digital. Evitar la piratería y el uso no autorizado de software y otros recursos digitales.",
    },
    {
        title: "Acceso Justo:",
        description:
            "Promover el acceso equitativo a la tecnología y a la información. Evitar prácticas que restrinjan el acceso a la tecnología por razones económicas, sociales o culturales.",
    },
    {
        title: "Uso Responsable:",
        description:
            "Utilizar las TIC de manera que no causen daño a otros individuos o a la sociedad. Evitar la difusión de malware, spam y otras formas de abuso tecnológico.",
    },
    {
        title: "Confidencialidad:",
        description:
            "Proteger la confidencialidad de la información a la que se tiene acceso, especialmente en contextos profesionales. Evitar compartir información confidencial sin el consentimiento adecuado.",
    },
    {
        title: "Transparencia y Honestidad:",
        description:
            "Ser transparente y honesto en las interacciones y transacciones digitales. No participar en actividades fraudulentas o engañosas en línea.",
    },
];

export const projects2 = [
    {
        title: "Medidas Preventivas:",
        description:
            "Implementar sistemas de seguridad robustos, como firewalls, antivirus y cifrado de datos. Educar a los usuarios sobre buenas prácticas de seguridad informática y sobre cómo reconocer intentos de fraude.",
    },
    {
        title: "Legislación:",
        description:
            "Establecer leyes que tipifiquen y sancionen los delitos informáticos.",
    },
    {
        title: "Investigación y Persecución:",
        description:
            "Colaborar a nivel internacional para combatir el ciberdelito, ya que muchas actividades delictivas trascienden fronteras nacionales.",
    },
];