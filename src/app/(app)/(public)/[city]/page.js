export default function CityPage({ params }) {
  const { city } = params;

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold capitalize">
        Welcome to Bloom in {city}
      </h1>
      <p className="mt-4 text-lg">Explore hotels, attractions, and more.</p>
    </div>
  );
}
