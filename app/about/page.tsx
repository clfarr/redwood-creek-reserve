import Image from "next/image";

export const metadata = {
  title: "Our Story | Redwood Creek Reserve",
  description: "The story of Elias Thorne and three generations of Trinity County cannabis cultivation.",
};

export default function AboutPage() {
  return (
    <div className="bg-earth-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Trinity County Landscape"
            fill
            className="object-cover brightness-75"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-2xl">A Trinity County Legacy</h1>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          {/* Elias Introduction */}
          <div className="mb-12">
            <div className="float-right ml-8 mb-4 w-64 h-80 relative rounded-lg overflow-hidden shadow-lg hidden md:block">
              <Image
                src="/images/elias-thorne.jpg"
                alt="Elias Thorne"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-forest-800">Meet Elias Thorne</h2>
            <p className="text-lg text-earth-800 mb-4 leading-relaxed">
              Elias isn&apos;t a &quot;green rush&quot; grower chasing the latest trend. He&apos;s a third-generation
              Trinity County resident whose roots run as deep as the ancient redwoods that tower over his land.
            </p>
            <p className="text-lg text-earth-800 mb-4 leading-relaxed">
              His family were loggers and homesteaders, carving out a life in one of California&apos;s most remote
              and beautiful counties. In the 1970s, his parents were part of the &quot;back-to-the-land&quot; movement—
              idealists seeking a simpler, more sustainable way of life. They homesteaded 80 acres along Redwood Creek
              and, like many in Trinity County at the time, discreetly grew cannabis to make ends meet.
            </p>
          </div>

          {/* The Legacy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-forest-800">The Legacy</h2>
            <p className="text-lg text-earth-800 mb-4 leading-relaxed">
              Elias grew up working the land alongside his father. He learned to read the soil, understand the seasons,
              and respect the natural rhythms that his family had observed for decades. When his father passed in 2010,
              Elias inherited not just the land, but the responsibility to honor the legacy of Trinity County&apos;s
              pioneering growers.
            </p>
            <p className="text-lg text-earth-800 mb-4 leading-relaxed">
              When California legalized cannabis cultivation, Elias saw an opportunity to bring his family&apos;s
              craft out of the shadows. But he refused to compromise on the values that made Trinity County cannabis
              legendary in the first place.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-forest-50 p-8 rounded-lg border-l-4 border-forest-600 mb-12">
            <p className="text-xl italic text-forest-900 leading-relaxed">
              &quot;We&apos;re not just growing cannabis; we&apos;re preserving a way of life. This isn&apos;t about scale
              or profit margins. It&apos;s about doing things the right way—the way my parents taught me. Sun-grown,
              sustainable, and with respect for the land that&apos;s given our family everything.&quot;
            </p>
            <p className="text-right mt-4 text-forest-700 font-semibold">— Elias Thorne</p>
          </div>

          {/* The Philosophy */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-forest-800">The Redwood Creek Way</h2>
            <p className="text-lg text-earth-800 mb-4 leading-relaxed">
              Today, Redwood Creek Reserve is a licensed, compliant operation, but it&apos;s built on old-school
              principles. Elias uses <strong>living soil</strong>—a regenerative approach that treats the soil as
              a living ecosystem, not just dirt. He collects rainwater in the winter, stores it in ponds, and uses
              gravity-fed irrigation in the dry season.
            </p>
            <p className="text-lg text-earth-800 mb-4 leading-relaxed">
              Every plant is grown outdoors under the Trinity County sun, hand-trimmed after harvest, and cured slowly
              in a climate-controlled barn that his grandfather built in 1952. No harsh chemicals. No factory
              efficiency. Just time, patience, and a deep knowledge of the craft.
            </p>
            <p className="text-lg text-earth-800 leading-relaxed">
              For Elias, this is more than a business. It&apos;s a way to honor his parents, support his community,
              and prove that cannabis grown the old way—by farmers who care—is still the best way.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-forest-800">Experience the Difference</h2>
        <p className="text-xl text-earth-700 mb-8 max-w-2xl mx-auto">
          Discover cannabis grown with intention, integrity, and a deep respect for the land.
        </p>
      </section>
    </div>
  );
}
