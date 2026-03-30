import Link from 'next/link';

async function getBooth(id: string) {
  const res = await fetch(`http://127.0.0.1:4000/booth/${id}`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function BoothPage({ params }: { params: { id: string } }) {
  const booth = await getBooth(params.id);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <Link href="/" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to Booths
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        📍 {booth.location}
      </h1>
      <p className="text-gray-500 mb-8">{booth.theme}</p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Collections</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {booth.collections?.map((collection: any) => (
          <Link href={`/collection/${collection.collection_id}`} key={collection.collection_id}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 cursor-pointer border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                📚 {collection.name}
              </h3>
              <p className="text-gray-500 text-sm">{collection.category}</p>
              <p className="text-gray-400 text-xs mt-2">{collection.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}