import { FeaturesSectionDemo } from "../components/CardGruopPage6";
import { FeaturesSectionDemo2 } from "../components/CardGroup2Page6";


export default function CoverPage6() {
    return (
        <main className="p-14 lg:px-28 xl:px-64">
            <div>
                <p className="font-bold mb-4 text-xl text-center">2.2- Características de los delitos informáticos tipificados en México</p>
                <p>En México, los delitos informáticos están tipificados en diversas leyes y regulaciones que abordan el uso indebido de las tecnologías de la información y la comunicación. A continuación, se presentan algunas características y aspectos relevantes de los delitos informáticos según la legislación mexicana:</p>
                <p className="mb-4 mt-4 font-bold">Legislación Aplicable</p>
                <div className="lg:px-28 xl:px-32">
                    <FeaturesSectionDemo/>
                </div>
                <p className="mb-4 mt-4 font-bold">Características de los Delitos Informáticos en México</p>
                <div className="lg:px-28 xl:px-32">
                    <FeaturesSectionDemo2/>
                </div>
            </div>
            <div className="mt-4">
                <p className="font-bold mb-4 text-xl text-center">2.3- Aspectos legales relacionados con delitos informáticos en México</p>
                <p>En México, los delitos informáticos están regulados por diversas leyes que establecen sanciones y procedimientos para combatir el uso indebido de las tecnologías de la información</p>
                <p className="mb-4 mt-4 font-bold">Código Penal Federal</p>
                <p>
                    <ul className="space-y-7">
                        <li>
                            <strong> Acceso Ilícito a Sistemas y Equipos Informáticos (Artículo 211 bis 1):</strong>
                            <ul className="ml-4">
                                <li>* Delito: Acceso sin autorización a sistemas y equipos informáticos.</li>
                                <li>* Pena: Prisión de 3 meses a 2 años y multa de 50 a 300 días de salario mínimo.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Intercepción de Comunicaciones Privadas (Artículo 211 bis 2):</strong> 
                            <ul className="ml-4">
                                <li>* Delito: Intercepción, sin autorización, de comunicaciones privadas transmitidas por cualquier medio.</li>
                                <li>* Pena: Prisión de 6 meses a 4 años y multa de 300 a 600 días de salario mínimo.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Modificación o Destrucción de Información (Artículo 211 bis 3):</strong> 
                            <ul className="ml-4">
                                <li>* Delito: Modificación, destrucción o supresión de información contenida en sistemas o equipos informáticos sin autorización.</li>
                                <li>* Pena: Prisión de 6 meses a 4 años y multa de 100 a 600 días de salario mínimo.</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <p className="mb-4 mt-4 font-bold">Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</p>
                <p>
                    <ul className="space-y-7">
                        <li>
                            Obligaciones del Responsable del Tratamiento de Datos:
                            <ul className="ml-4">
                                <li>* Implementar medidas de seguridad para proteger los datos personales.</li>
                                <li>* nformar a los titulares sobre el uso y tratamiento de sus datos a través de avisos de privacidad.</li>
                            </ul>
                        </li>
                        <li>
                            Sanciones por Incumplimiento:
                            <ul className="ml-4">
                                <li>Multas económicas que pueden variar dependiendo de la gravedad del incumplimiento.</li>
                                <li>Posibilidad de enfrentar sanciones penales en casos de uso indebido de datos personales.</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <p className="mb-4 mt-4 font-bold">Ley de Instituciones de Crédito y Ley de Transparencia y Ordenamiento de los Servicios Financieros</p>
                <p>
                    <ul className="space-y-7">
                        <li>
                            Protección de la Información Financiera:
                            <ul className="ml-4">
                                <li>* Obliga a las instituciones financieras a implementar medidas de seguridad para proteger la información de sus clientes.</li>
                            </ul>
                        </li>
                        <li>
                            Sanciones:
                            <ul className="ml-4">
                                <li>* Multas y otras sanciones administrativas para las instituciones que no cumplan con las medidas de seguridad y protección de datos.</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <p className="mb-4 mt-4 font-bold">Colaboración Internacional</p>
                <p>
                    <ul className="space-y-7">
                        <li>
                            Interpol y Europol:
                            <ul className="ml-4">
                                <li>* Colaboración en investigaciones y operaciones conjuntas contra el cibercrimen.</li>
                            </ul>
                        </li>
                        <li>
                            Convenios Internacionales:
                            <ul className="ml-4">
                                <li>* Participación en tratados y acuerdos internacionales que facilitan la cooperación en la lucha contra los delitos informáticos.</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <p className="mb-4 mt-4 font-bold">Mecanismos de Denuncia y Persecución de Delitos Informáticos</p>
                <p>
                    <ul className="space-y-7">
                        <li>
                            Policía Cibernética:
                            <ul className="ml-4">
                                <li>* La Policía Federal cuenta con una unidad especializada en delitos cibernéticos que se encarga de investigar y perseguir estos delitos.</li>
                            </ul>
                        </li>
                        <li>
                            Ministerio Público:
                            <ul className="ml-4">
                                <li>* El Ministerio Público puede iniciar investigaciones y procesos legales contra los presuntos responsables de delitos informáticos.</li>
                            </ul>
                        </li>
                        <li>
                            Denuncia Ciudadana:
                            <ul className="ml-4">
                                <li>* Los ciudadanos pueden denunciar delitos informáticos ante las autoridades competentes, como la Policía Cibernética o el Ministerio Público.</li>
                            </ul>
                        </li>
                    </ul>
                </p>
            </div>
            <div className="flex justify-center mt-5 lg:px-28 xl:px-64">
                <iframe className="sm:w-full sm:h-full md:max-w-[500px] md:h-96 xl:max-w-[800px] xl:h-96" src="https://www.youtube.com/embed/Ve8c3e5Uy6k" allowFullScreen></iframe>
            </div>
            <div className="mt-4">
                <p className="font-bold mb-4 text-xl text-center">2.4- Proceso de elaboración de códigos de conducta y ética informática.</p>
                <p>Elaborar un código de conducta y ética informática es un proceso crucial para establecer normas claras que guíen el comportamiento de los empleados y usuarios en el uso de las tecnologías de la información y la comunicación.</p>
                <p className="mb-4 mt-4 font-bold">Definir Objetivos y Alcance</p>
                <p>
                    <ul className="space-y-7">
                        <li>
                            <strong>Objetivos:</strong> 
                            <ul className="ml-4">
                                <li>* Establecer principios y normas claras para el uso ético y responsable de los recursos informáticos.</li>
                                <li>* Proteger la privacidad, seguridad y confidencialidad de la información.</li>
                                <li>* Prevenir y sancionar el mal uso de la tecnología.</li>
                            </ul>
                        </li>
                        <li>
                            <strong> Alcance:</strong>
                            <ul className="ml-4">
                                <li>* Determinar a quiénes aplica el código (empleados, contratistas, socios, etc.).</li>
                                <li>* Especificar los recursos tecnológicos cubiertos (computadoras, redes, software, datos, etc.).</li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <p className="mb-4 mt-4 font-bold">Formar un Comité de Ética y Conducta</p>
                <p>
                    <ul className="ml-4">
                        <li>* Incluir representantes de diversas áreas de la organización (TI, recursos humanos, legal, etc.).</li>
                        <li>* Asignar roles y responsabilidades dentro del comité para la redacción, revisión y aprobación del código.</li>
                    </ul>
                </p>
                <p className="mb-4 mt-4 font-bold">Recopilar Información y Referencias</p>
                <p>
                    <ul className="ml-4">
                        <li>* Revisar códigos de conducta y ética de otras organizaciones como referencia.</li>
                        <li>* Consultar marcos legales y regulaciones relevantes (nacionales e internacionales).</li>
                        <li>* Recoger aportes y expectativas de los empleados y otras partes interesadas.</li>
                    </ul>
                </p>
                <p className="mb-4 mt-4 font-bold">Revisión y Aprobación</p>
                <p>
                    <ul className="ml-4">
                        <li>* Someter el borrador del código a revisión por parte del comité y la alta dirección.</li>
                        <li>* Incorporar retroalimentación y realizar las modificaciones necesarias.</li>
                        <li>* Obtener la aprobación formal del código por parte de la dirección ejecutiva o el consejo de administración.</li>
                    </ul>
                </p>
                <p className="mb-4 mt-4 font-bold">Monitoreo y Actualización</p>
                <p>
                    <ul className="ml-4">
                        <li>* Establecer mecanismos para monitorear el cumplimiento del código (auditorías, revisiones periódicas, etc.).</li>
                        <li>* Crear un sistema de retroalimentación continua para recibir sugerencias y comentarios sobre el código.</li>
                        <li>* Actualizar el código regularmente para adaptarse a cambios tecnológicos, legales y organizacionales.</li>
                    </ul>
                </p>
            </div>
            <div className="flex justify-center mt-5 lg:px-28 xl:px-64">
                <iframe className="sm:w-full sm:h-full md:max-w-[500px] md:h-96 xl:max-w-[800px] xl:h-96" src="https://www.youtube.com/embed/RBkYfjYMqNg" allowFullScreen></iframe>
            </div>
        </main>
    );
}