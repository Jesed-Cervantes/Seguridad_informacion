import { HoverEffect } from "../components/Card";

export default function CoverPage2(){
    return(
        <main className="p-14 ">
            <div className="lg:px-28 xl:px-64">
                <p className="font-bold mb-4 text-xl text-center">1- Legislación informática</p>
                <p>
                    La Legislación Informática en México se refiere al conjunto de leyes, normas y regulaciones que rigen el uso, manejo y protección 
                    de la información y las tecnologías de la información y la comunicación (TIC) en el país. Este marco legal abarca diversos aspectos 
                    relacionados con la informática, incluyendo la protección de datos personales, los delitos informáticos, la propiedad intelectual,
                    el comercio electrónico, y la ciberseguridad.
                    
                </p>
                <br />
                <p>
                    Algunos de los componentes principales de la Legislación Informática en México:
                    <br />
                    <br />
                </p>
            <div className="lg:px-28 xl:px-10">
                <HoverEffect items={projects} />
            </div>
            </div>
            <div className="mt-5 lg:px-28 xl:px-64">
                <p className="font-bold text-xl text-center">1.1- Conceptos de derechos de autor, privacidad y protección</p>
                <p className="mt-4"><strong>Derechos de autor</strong>: El derecho de autor es un conjunto de normas jurídicas que otorgan a los creadores de obras literarias, artísticas, musicales, científicas o didácticas, ya sean publicadas o inéditas, derechos morales y patrimoniales exclusivos. Estos derechos permiten al creador decidir si otros individuos pueden utilizar su obra y cómo pueden hacerlo, dentro de ciertas limitaciones y excepciones.</p>
                <p className="mt-4"><strong>Privacidad</strong>: El derecho a la privacidad protege la dignidad y libertad de las personas. En México, el artículo 16 de la Constitución Política de los Estados Unidos Mexicanos reconoce este derecho y establece que nadie puede ser molestado en su persona, familia, domicilio, papeles o posesiones, salvo que exista una orden judicial.</p>
                <p className="mt-4"><strong>Protección</strong>: El derecho a la protección de datos personales permite a los individuos controlar el uso y destino de su información personal, con el objetivo de impedir su tráfico ilícito y la potencial vulneración de su dignidad. Este derecho también tiene como objetivo minimizar el acceso malicioso y la manipulación de los datos personales por parte de terceros malintencionados, así como reducir la incidencia de fraudes y robos de identidad</p>
            </div>
            <div className="flex justify-center mt-5 lg:px-28 xl:px-64">
                <iframe  className="sm:w-full sm:h-full md:max-w-[500px] md:h-96 xl:max-w-[800px] xl:h-96" src="https://www.youtube.com/embed/0gTjH84RiOY" allowFullScreen></iframe>
            </div>
        </main>
    );
}

export const projects = [
    {
      title: "Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)",
      description:
        "Esta ley regula el tratamiento de datos personales por parte de empresas y organizaciones privadas, estableciendo principios y procedimientos para garantizar la privacidad y protección de la información personal de los ciudadanos",
    //   link: "https://stripe.com",
    },
    {
      title: "Ley de Protección de Datos Personales en Posesión de Sujetos Obligados (LPDPPSO)",
      description:
        "Esta ley se aplica a las entidades públicas y tiene como objetivo proteger los datos personales en posesión de las autoridades gubernamentales.",
    //   link: "https://netflix.com",
    },
    {
      title: "Ley de Derechos de Autor",
      description:
        "Regula los derechos de autor y los derechos conexos en el ámbito digital, protegiendo las obras y creaciones en formato electrónico.",
    //   link: "https://google.com",
    },
    {
        title: "Reglamento de la Ley Federal de Telecomunicaciones y Radiodifusión",
        description:
          "Contiene disposiciones relacionadas con la infraestructura de telecomunicaciones y la ciberseguridad.",
        // link: "https://google.com",
      },
  ];