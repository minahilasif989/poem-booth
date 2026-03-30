import Link from 'next/link';

async function getBooths() {
  const res = await fetch('http://localhost:4000/booth', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function Home() {
  const booths = await getBooths();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
         Poem Booth
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Explore poetry collections from different booths
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {booths.map((booth: any) => (
          <Link href={`/booth/${booth.booth_id}`} key={booth.booth_id}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 cursor-pointer border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                📍 {booth.location}
              </h2>
              <p className="text-gray-500 text-sm">{booth.theme}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}