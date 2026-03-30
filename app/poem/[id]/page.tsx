import Link from 'next/link';

async function getPoem(id: string) {
  const res = await fetch(`http://127.0.0.1:4000/poem/${id}`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function PoemPage({ params }: { params: { id: string } }) {
  const poem = await getPoem(params.id);

  return (
    <main className="min-h-screen bg-gray-50 p-8 max-w-3xl mx-auto">
      <Link href="/" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to Booths
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        📜 {poem.name}
      </h1>
      <p className="text-gray-500 mb-6">{poem.description}</p>

      <div className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {poem.text}
        </p>
      </div>

      <div className="flex gap-6">
        {poem.poet && (
          <Link href={`/poet/${poem.poet.poet_id}`}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 cursor-pointer border border-gray-100">
              <p className="text-gray-500 text-xs mb-1">Poet</p>
              <p className="text-gray-800 font-medium">✍️ {poem.poet.name}</p>
            </div>
          </Link>
        )}

        {poem.collection && (
          <Link href={`/collection/${poem.collection.collection_id}`}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 cursor-pointer border border-gray-100">
              <p className="text-gray-500 text-xs mb-1">Collection</p>
              <p className="text-gray-800 font-medium">📚 {poem.collection.name}</p>
            </div>
          </Link>
        )}
      </div>
    </main>
  );
}