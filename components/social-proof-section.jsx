"use client";

function Card({ name, value }) {
  return (
    <div className="relative group w-full bg-white/5 border border-white/10 p-8 lg:p-16 flex flex-col justify-center items-center gap-2 transition-colors duration-500 hover:border-second/50 overflow-hidden">
      {/* Accent Line Emas yang Memanjang saat Di-hover */}
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-second transition-all duration-500 group-hover:w-full" />

      {/* Angka dengan Serif Font Elegan */}
      <p className="font-serif text-4xl lg:text-5xl font-normal text-second text-center leading-none">
        {value}
      </p>

      {/* Label dengan Letter Spacing Wide */}
      <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/70 text-center">
        {name}
      </p>
    </div>
  );
}

export default function SocialProofSection() {
  const stats = [
    { value: "120+", name: "Weddings" },
    { value: "8+", name: "Years Experience" },
    { value: "35+", name: "Vendor Partners" },
    { value: "500+", name: "Happy Clients" },
  ];

  return (
    <section className="w-full bg-primary text-white p-4">
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <Card key={index} name={item.name} value={item.value} />
        ))}
      </div>
    </section>
  );
}
