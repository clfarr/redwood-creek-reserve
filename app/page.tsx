import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-mountains.jpg"
            alt="Trinity County Mountains"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Redwood Creek Reserve
          </h1>
          <p className="text-xl md:text-3xl mb-8 drop-shadow-lg font-light">
            Rooted in Tradition. Grown in the Heart of the Emerald Triangle.
          </p>
          <Link
            href="/process"
            className="inline-block bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
          >
            See How We Grow
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-forest-800">
            Trinity County Legacy
          </h2>
          <p className="text-xl text-earth-700 max-w-3xl mx-auto leading-relaxed">
            For three generations, the Thorne family has cultivated the land and the legacy of
            Trinity County cannabis. We grow the old way—sun-grown, sustainable, and small-batch—
            because nature knows best.
          </p>
        </div>
      </section>

      {/* Featured Philosophy Cards */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-forest-800">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">☀️</div>
              <h3 className="text-2xl font-bold mb-4 text-forest-700">Sun-Grown</h3>
              <p className="text-earth-700">
                100% outdoor cultivation under the Trinity County sun.
                The unique terroir of our mountains creates unmatched flavor and potency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold mb-4 text-forest-700">Sustainable</h3>
              <p className="text-earth-700">
                Living soil, rainwater collection, and permaculture principles.
                We grow in harmony with the land, not against it.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">✋</div>
              <h3 className="text-2xl font-bold mb-4 text-forest-700">Small-Batch</h3>
              <p className="text-earth-700">
                Hand-trimmed and cured to perfection. Quality over quantity,
                every single time. This is craft cannabis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Harvest */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-forest-800">Explore Our Current Harvest</h2>
        <p className="text-xl text-earth-700 mb-8 max-w-2xl mx-auto">
          From classic strains to unique Trinity County originals,
          each harvest tells a story of the land and our legacy.
        </p>
        <Link
          href="/harvest"
          className="inline-block bg-earth-600 hover:bg-earth-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
        >
          View Our Strains
        </Link>
      </section>
    </div>
  );
}
