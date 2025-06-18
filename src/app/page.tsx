import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Welcome to Handcrafted Haven!</h1>
      <p className="mb-6">Discover beautifully crafted, handmade products from skilled artisans.</p>
      <Link
        href="/product"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Browse Products
      </Link>
    </>
  );
}
