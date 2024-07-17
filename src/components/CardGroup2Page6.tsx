import { useId } from "react";

export function FeaturesSectionDemo2() {
  return (
    <div className="py-20 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b  from-neutral-100  to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600  mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Acceso Ilícito a Sistemas y Equipos de Informática",
    description:
      "Se refiere al acceso no autorizado a sistemas informáticos, redes o equipos, con la intención de obtener información o realizar modificaciones sin permiso.",
  },
  {
    title: "Daño a Datos o Sistemas Informáticos",
    description:
      "Incluye la alteración, destrucción o daño a sistemas informáticos, redes de telecomunicaciones o datos almacenados, provocando pérdidas o interrupciones en su funcionamiento.",
  },
  {
    title: "Fraude Informático",
    description:
      "Engloba diversas conductas fraudulentas realizadas a través de medios electrónicos, como el phishing (suplantación de identidad), estafas en línea y manipulación de sistemas para obtener beneficios económicos de manera ilegal.",
  },
  {
    title: "Sabotaje Informático",
    description:
      "Incluye acciones destinadas a interrumpir o dañar sistemas informáticos o redes, afectando su funcionamiento normal o la prestación de servicios.",
  },
  {
    title: "Delitos Financieros y Económicos en Medios Electrónicos",
    description:
      "Incluyen el fraude bancario, la manipulación de sistemas de pago electrónicos y otros delitos relacionados con el uso indebido de la tecnología para obtener ganancias financieras ilegales.",
  }
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]  from-green-500/30 to-green-300/30  opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay  stroke-green-600/10 fill-green-600/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
