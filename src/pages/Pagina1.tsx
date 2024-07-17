
const CoverPage = () => {
    
    return (
        <>
            <div className="grid grid-cols-3 md:grid-cols-4 p-6 xl:px-20  items-center">
                <div className="flex justify-end md:justify-center">
                    <img 
                        src="https://uptecamac.edomex.gob.mx/sites/uptecamac.edomex.gob.mx/files/images/logo%20upt.png" 
                        alt="logo universidad"
                        className="sm:w-10 h-auto sm:mt-9 md:w-32 md:mt-0" 
                    />
                </div>
                <div className="col-span-2 text-center">
                    <h1 className="md:text-xl font-bold mt-4">UNIVERSIDAD POLITÉCNICA DE TECÁMAC</h1>
                    <div className="w-full border-t-4 border-green-500 mt-2"></div>
                </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 p-1 xl:px-20">
                <div className="flex justify-center  h-full">
                    <div className="border-l-4 border-green-500"></div>
                    <div className="border-l-2 border-blue-950 ml-2"></div>
                    <div className="border-l-4 border-green-500 ml-2"></div>
                </div>
                <div className="col-span-2 text-center">
                    <div>
                        <span className="md:text-lg font-bold">INGENIERÍA EN SOFTWARE</span>
                    </div>
                    <div className="my-2 text-sm">
                        <span>SEGURIDAD DE LA INFORMACIÓN</span>
                    </div>
                    <div className="my-2 text-sm">
                        <span>EVIDENCIA PARCIAL 3</span>
                    </div>
                    <div className="mt-8">
                        <span className="md:text-lg font-bold">NOMBRE DEL ALUMNO</span>
                    </div>
                    <div>
                        <span>Cervantes Rosas Jesed</span>
                        <br />
                        <span>Gomez Romero Enrique</span>
                    </div>
                    <div className="mt-8">
                        <span className="md:text-lg font-bold">MATRICULA</span>
                    </div>
                    <div>
                        <span>1321124104</span>
                        <br />
                        <span>1321124095</span>
                    </div>
                    <div className="mt-8">
                        <span className="md:text-lg font-bold">NÉSTOR APOLO LOPEZ GONZÁLES</span>
                    </div>
                    <div>
                        <span>4924IS</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 p-1 xl:px-20">
                <div className="flex justify-end md:justify-center">
                    <img 
                        src="https://uptecamac.edomex.gob.mx/sites/uptecamac.edomex.gob.mx/files/images/Acerca%20de%20la%20Universidad/s%C3%ADmbolos/Ingenieria-en-software-AZUL.png" 
                        alt="" 
                        className="sm:w-10 h-auto sm:mt-9 md:w-52 md:mt-0" 
                    />
                </div>
            </div>
            <div className="mt-10 p-6 md:px-16 lg:px-24 xl:px-64">
                <p className="font-bold md:text-xl text-center">Introduccion</p>
                <p className="mt-5">
                    En la era digital actual, la legislación informática desempeña un papel crucial en la protección de los derechos de autor, la privacidad y 
                    los datos personales. Con el rápido avance de la tecnología y la interconexión global, es fundamental que tanto individuos como organizaciones 
                    comprendan y cumplan con las normativas legales que regulan estos aspectos esenciales.
                    <br />
                    <br />
                    Proporciona una visión integral sobre los conceptos fundamentales de derechos de autor, privacidad y protección de datos, destacando la 
                    importancia de proteger la propiedad intelectual y la información personal en el entorno digital. Además, se analizan las leyes nacionales e 
                    internacionales aplicables, ofreciendo una guía clara sobre los trámites y requisitos necesarios para el registro de obras ante las instituciones 
                    de derechos de autor y la elaboración de avisos de privacidad.
                    <br />
                    <br />
                    Asimismo, se abordan aspectos clave relacionados con la ética informática y los delitos informáticos. La ética informática establece los principios 
                    y valores que deben guiar el comportamiento en el uso de tecnologías de la información, mientras que los delitos informáticos representan conductas 
                    ilícitas que deben ser prevenidas y sancionadas para proteger la integridad y seguridad de la información.
                    <br />
                    <br />
                    Tiene como objetivo ofrecer una comprensión profunda y práctica de la legislación informática, proporcionando las herramientas necesarias para navegar 
                    en el complejo panorama legal de la era digital y garantizar el cumplimiento adecuado de las normativas vigentes.
                </p>
            </div>
        </>
    );
};

export default CoverPage;