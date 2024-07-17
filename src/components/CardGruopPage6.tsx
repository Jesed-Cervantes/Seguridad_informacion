import { cn } from "../lib/utils";
import {
  IconShieldCheck,
  IconGavel,
  IconCreditCard,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP)",
      description:
        "Regula el tratamiento de datos personales por parte de entidades privadas y establece medidas de seguridad para proteger la información personal.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Código Penal Federal",
      description:
        "Contiene disposiciones específicas relacionadas con los delitos informáticos en México, como el acceso ilícito a sistemas y equipos de informática, así como la interceptación de comunicaciones electrónicas.",
      icon: <IconGavel />,
    },
    {
      title: "Ley de Instituciones de Crédito y Ley de Transparencia y Ordenamiento de los Servicios Financieros",
      description:
        "Regulan aspectos específicos como la seguridad en las operaciones electrónicas y la protección de la información financiera.",
      icon: <IconCreditCard />,
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature ",
        (index === 0 || index === 4) && "lg:border-l ",
        index < 4 && "lg:border-b "
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100  to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100  to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300  group-hover/feature:bg-green-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 ">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600  max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
