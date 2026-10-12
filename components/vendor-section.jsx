"use client";

import Image from "next/image";

export default function VendorsSection() {
  const vendors = [
    {
      id: 1,
      name: "Luminary Decoration",
      category: "Decoration & Floral",
      logo: "/assets/vendor/1.webp",
    },
    {
      id: 2,
      name: "Aura Documentation",
      category: "Photography & Videography",
      logo: "/assets/vendor/2.webp",
    },
    {
      id: 3,
      name: "Velvet Couture",
      category: "Attire & Makeup",
      logo: "/assets/vendor/3.webp",
    },
    {
      id: 4,
      name: "Raka Catering",
      category: "Catering & Delights",
      logo: "/assets/vendor/4.webp",
    },
    {
      id: 5,
      name: "Harmonia Entertainment",
      category: "Music & Sound System",
      logo: "/assets/vendor/5.webp",
    },
    {
      id: 6,
      name: "Grand Palace Venue",
      category: "Ballroom & Venue",
      logo: "/assets/vendor/6.webp",
    },
  ];

  return (
    <div className="w-full bg-primary min-h-[70dvh] text-white px-4 md:px-8 pt-28 flex flex-col gap-16">
      {/* HEADER SECTION */}
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-3xl md:text-5xl font-normal text-second">
          Our Featured Vendors
        </h2>
      </div>

      {/* VENDORS GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 w-full items-stretch">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="flex flex-col items-center aspect-[1/1] justify-center bg-white border border-white/10 hover:border-second/50 transition-all duration-500 overflow-hidden group"
          >
            {/* CONTAINER LOGO */}
            <div className="relative h-full w-full flex items-center justify-center">
              <Image
                src={vendor.logo}
                alt={vendor.name}
                width={200}
                height={200}
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
