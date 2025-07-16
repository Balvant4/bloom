import { notFound } from "next/navigation";

const hotelsData = {
  mumbai: [
    { name: "The Taj Mahal Palace", price: "₹12,000", rating: 5 },
    { name: "Trident Hotel", price: "₹7,500", rating: 4 },
  ],
  delhi: [
    { name: "The Leela Palace", price: "₹10,000", rating: 5 },
    { name: "The Oberoi", price: "₹9,000", rating: 4.5 },
  ],
  chapra: [
    { name: "Chapra Residency", price: "₹2,000", rating: 3.5 },
    { name: "Hotel Gargee", price: "₹3,500", rating: 4 },
  ],
};

export default function CityPage({ params }) {
  const { city } = params;
  const hotels = hotelsData[city.toLowerCase()];

  if (!hotels) {
    return notFound(); // show 404 if city is not in the data
  }

  return (
    <main className="min-h-screen px-4 py-10 ">
      <h1 className="text-3xl font-bold text-center mb-10 capitalize">
        Hotels in {city}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {hotels.map((hotel, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{hotel.name}</h2>
            <p className="mt-2 text-gray-600">Price: {hotel.price}</p>
            <p className="text-yellow-500">Rating: ⭐ {hotel.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
