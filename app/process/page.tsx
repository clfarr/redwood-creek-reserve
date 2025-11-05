import Image from "next/image";

export const metadata = {
  title: "Our Process | Redwood Creek Reserve",
  description: "From living soil to setting sun - our sustainable, sun-grown cultivation process.",
};

export default function ProcessPage() {
  return (
    <div className="bg-earth-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/process-hero.jpg"
            alt="Sun setting over cannabis farm"
            fill
            className="object-cover brightness-75"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-2xl mb-4">Our Process</h1>
          <p className="text-2xl drop-shadow-lg">From Living Soil to Setting Sun</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <p className="text-xl text-earth-800 leading-relaxed">
          At Redwood Creek Reserve, we believe that great cannabis starts with great soil and ends with patience.
          Our process honors the natural cycles of the land and the wisdom passed down through three generations
          of Trinity County growers.
        </p>
      </section>

      {/* The Process Steps */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        {/* Step 1: Living Soil */}
        <div className="mb-20">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="text-6xl mr-6">🌱</div>
              <h2 className="text-4xl font-bold text-forest-800">Living Soil & Regenerative Agriculture</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-earth-800 mb-4 leading-relaxed">
                  We don&apos;t use traditional fertilizers. Instead, we cultivate <strong>living soil</strong>—a
                  thriving ecosystem of beneficial microbes, fungi, and organic matter that feeds our plants naturally.
                </p>
                <p className="text-lg text-earth-800 mb-4 leading-relaxed">
                  Our soil amendments include:
                </p>
                <ul className="list-disc list-inside text-earth-800 space-y-2 mb-4">
                  <li>Compost from on-site organic waste</li>
                  <li>Worm castings for nutrient cycling</li>
                  <li>Cover crops (clover, vetch) to fix nitrogen</li>
                  <li>Biochar for carbon sequestration</li>
                </ul>
                <p className="text-lg text-earth-800 leading-relaxed">
                  This regenerative approach doesn&apos;t just sustain the soil—it improves it year after year,
                  building resilience and creating cannabis with deeper, more complex terpene profiles.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/living-soil.jpg"
                  alt="Living soil with healthy microbes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Sun-Grown */}
        <div className="mb-20">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="text-6xl mr-6">☀️</div>
              <h2 className="text-4xl font-bold text-forest-800">Sun-Grown in the Emerald Triangle</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/sun-grown.jpg"
                  alt="Cannabis plants under the sun"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-earth-800 mb-4 leading-relaxed">
                  Every plant at Redwood Creek Reserve is grown <strong>100% outdoors</strong>, under the natural
                  light spectrum of the Trinity County sun.
                </p>
                <p className="text-lg text-earth-800 mb-4 leading-relaxed">
                  Why does this matter?
                </p>
                <ul className="list-disc list-inside text-earth-800 space-y-2 mb-4">
                  <li><strong>Full-spectrum light:</strong> Sunlight provides a complete spectrum that no artificial
                  light can replicate, resulting in richer terpenes and cannabinoids.</li>
                  <li><strong>Terroir:</strong> The unique climate, elevation (2,400 ft), and air quality of Trinity
                  County contribute to the flavor and character of our strains.</li>
                  <li><strong>Sustainability:</strong> No energy-intensive grow lights. Just the sun, as nature intended.</li>
                </ul>
                <p className="text-lg text-earth-800 leading-relaxed">
                  Our plants are sown in late spring, vegetate through the long summer days, and flower as the
                  days shorten in the fall—completely in sync with the natural rhythms of the earth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Water Management */}
        <div className="mb-20">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="text-6xl mr-6">💧</div>
              <h2 className="text-4xl font-bold text-forest-800">Sustainable Water Management</h2>
            </div>
            <p className="text-lg text-earth-800 mb-4 leading-relaxed">
              Trinity County receives abundant rainfall in the winter, but summers are dry. To honor our commitment
              to sustainability, we:
            </p>
            <ul className="list-disc list-inside text-earth-800 space-y-2 mb-4 text-lg">
              <li>Collect and store rainwater in spring-fed ponds during the wet season</li>
              <li>Use gravity-fed drip irrigation to minimize water waste</li>
              <li>Mulch heavily to retain soil moisture and reduce evaporation</li>
              <li>Never draw from Redwood Creek during the dry season, protecting local salmon habitat</li>
            </ul>
            <p className="text-lg text-earth-800 leading-relaxed">
              This approach allows us to grow premium cannabis while being responsible stewards of the watershed
              that gives our farm its name.
            </p>
          </div>
        </div>

        {/* Step 4: Small-Batch Cultivation */}
        <div className="mb-20">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="text-6xl mr-6">✋</div>
              <h2 className="text-4xl font-bold text-forest-800">Small-Batch, Hand-Crafted</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-earth-800 mb-4 leading-relaxed">
                  We grow fewer plants than we could, and that&apos;s a choice. Our focus is on <strong>quality,
                  not quantity</strong>.
                </p>
                <p className="text-lg text-earth-800 mb-4 leading-relaxed">
                  Each plant receives individual attention:
                </p>
                <ul className="list-disc list-inside text-earth-800 space-y-2 mb-4">
                  <li>Hand-watered and monitored daily</li>
                  <li>Trellised and trained for optimal light exposure</li>
                  <li>Harvested at peak ripeness, not on a schedule</li>
                  <li>Hand-trimmed (never machine-trimmed) to preserve trichomes</li>
                  <li>Slow-cured in small batches in our 1952 barn</li>
                </ul>
                <p className="text-lg text-earth-800 leading-relaxed">
                  This meticulous process takes longer and costs more, but the result is cannabis that honors
                  the plant, the land, and the legacy we&apos;re working to preserve.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/hand-trim.jpg"
                  alt="Hand trimming cannabis"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 5: Curing */}
        <div>
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="text-6xl mr-6">🏚️</div>
              <h2 className="text-4xl font-bold text-forest-800">The Cure: Where Time Creates Magic</h2>
            </div>
            <p className="text-lg text-earth-800 mb-4 leading-relaxed">
              After harvest and trimming, the real alchemy begins. We cure our cannabis for a minimum of 30 days—
              sometimes longer—in our climate-controlled barn.
            </p>
            <p className="text-lg text-earth-800 mb-4 leading-relaxed">
              During the cure, chlorophyll breaks down, harsh flavors mellow, and the terpene profile deepens.
              The result is cannabis that&apos;s smooth, flavorful, and complex—worlds apart from the rushed,
              mass-produced product flooding the market.
            </p>
            <div className="bg-forest-50 p-6 rounded-lg border-l-4 border-forest-600">
              <p className="text-lg italic text-forest-900">
                &quot;Good cannabis takes time. You can&apos;t rush nature. The cure is where a good harvest
                becomes a great one.&quot; — Elias Thorne
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-4 text-center bg-forest-800 text-white">
        <h2 className="text-4xl font-bold mb-6">The Result: Cannabis with Integrity</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          When you experience Redwood Creek Reserve cannabis, you&apos;re not just consuming a product.
          You&apos;re experiencing the culmination of three generations of knowledge, a deep respect for
          the land, and a commitment to doing things the right way.
        </p>
      </section>
    </div>
  );
}
