import React from "react";

const stats = [
  {
    title: "₹4.5 LPA",
    description: "Average Package Offered",
  },
  {
    title: "₹53 LPA",
    description: "Highest Package (On-Campus)",
  },
  {
    title: "2000+",
    description: "Total Offers (Last Year)",
  },
  {
    title: "300+",
    description: "Recruiters Visited",
  },
  {
    title: "90%+",
    description: "Placement Rate",
  },
];

const PlacementStats: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/placement-banner.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
              {stat.title}
            </h2>
            <p className="text-sm md:text-base font-medium text-white">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlacementStats;
