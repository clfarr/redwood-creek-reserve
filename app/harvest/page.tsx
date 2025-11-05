import Image from "next/image";
import { client, Strain } from "@/lib/sanity";
import StrainCard from "@/components/StrainCard";

export const metadata = {
  title: "Our Harvest | Redwood Creek Reserve",
  description: "Explore our current selection of sun-grown, sustainable cannabis strains from Trinity County.",
};

// GROQ query to fetch all strains
const query = `*[_type == "strain"] | order(_createdAt desc) {
  _id,
  _createdAt,
  name,
  slug,
  image,
  type,
  profile,
  flavorNotes,
  thcContent,
  harvestDate,
  featured
}`;

export const revalidate = 60; // Revalidate this page every 60 seconds
export const dynamic = 'force-dynamic'; // Don't try to fetch at build time

export default async function HarvestPage() {
  let strains: Strain[] = [];

  try {
    strains = await client.fetch(query);
  } catch (error) {
    console.error('Failed to fetch strains from Sanity:', error);
    // Return empty array if fetch fails (e.g., during build or if Sanity not configured)
  }

  return (
    <div className="bg-earth-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/harvest-hero.jpg"
            alt="Cannabis harvest"
            fill
            className="object-cover brightness-75"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-2xl mb-4">Our Current Harvest</h1>
          <p className="text-xl drop-shadow-lg">
            Small-batch, sun-grown strains from the heart of Trinity County
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <p className="text-xl text-earth-800 leading-relaxed">
          Each strain tells a story of our land, our legacy, and our commitment to quality.
          From classic cultivars to unique Trinity County originals, every harvest is grown
          with intention and cured to perfection.
        </p>
      </section>

      {/* Strains Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        {strains.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strains.map((strain) => (
              <StrainCard key={strain._id} strain={strain} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white rounded-lg shadow-xl p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-forest-800">No Strains Available Yet</h2>
              <p className="text-lg text-earth-700 mb-6">
                We&apos;re currently preparing our next harvest. Check back soon to see our latest selection
                of premium, sun-grown cannabis.
              </p>
              <p className="text-earth-600">
                In the meantime, explore our <a href="/process" className="text-forest-600 hover:text-forest-700 font-semibold">growing process</a> or <a href="/about" className="text-forest-600 hover:text-forest-700 font-semibold">learn our story</a>.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Wholesale CTA */}
      <section className="py-20 px-4 bg-forest-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Wholesale?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            We partner with select dispensaries throughout Northern California who share our
            commitment to quality and sustainability.
          </p>
          <a
            href="/contact"
            className="inline-block bg-earth-600 hover:bg-earth-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
