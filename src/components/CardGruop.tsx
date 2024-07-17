import { cn } from "../lib/utils";
import {
  IconLock,
  IconIdBadge,
  IconAlertTriangle,
  IconVirus,
  IconMessageCircle,
  IconEye,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Acceso No Autorizado",
      description:
        "Ingresar sin permiso a sistemas informáticos o redes para obtener, modificar o destruir información",
      icon: <IconLock />,
    },
    {
      title: "Robo de Identidad",
      description:
        "Obtener y usar la información personal de alguien sin su permiso para cometer fraude o robo.",
      icon: <IconIdBadge />,
    },
    {
      title: "Fraude Informático",
      description:
        "Crear y distribuir software malicioso, como virus, troyanos y ransomware, para dañar sistemas o robar información.",
      icon: <IconAlertTriangle />,
    },
    {
      title: "Difusión de Malware",
      description:
        "Crear y distribuir software malicioso, como virus, troyanos y ransomware, para dañar sistemas o robar información.",
      icon: <IconVirus />,
    },
    {
      title: "Ciberacoso",
      description: "Utilizar las TIC para acosar, amenazar o intimidar a individuos.",
      icon: <IconMessageCircle />,
    },
    {
      title: "Espionaje Informático",
      description:
        "Obtener información confidencial de manera ilegal para utilizarla en beneficio propio o de terceros.",
      icon: <IconEye />,
    },
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
