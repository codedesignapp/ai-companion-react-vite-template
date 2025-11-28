interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: "73M+",
    label: "developers",
  },
  {
    value: "1B+",
    label: "contributors",
  },
  {
    value: "4M+",
    label: "organizations",
  },
];

export function SocialProof() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">{stat.value}</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

