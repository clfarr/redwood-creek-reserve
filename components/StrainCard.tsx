import Image from "next/image";
import { Strain, urlFor } from "@/lib/sanity";

interface StrainCardProps {
  strain: Strain;
}

export default function StrainCard({ strain }: StrainCardProps) {
  const typeColors = {
    sativa: 'bg-amber-100 text-amber-800 border-amber-300',
    indica: 'bg-purple-100 text-purple-800 border-purple-300',
    hybrid: 'bg-green-100 text-green-800 border-green-300',
  };

  const typeColor = typeColors[strain.type] || typeColors.hybrid;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 w-full">
        <Image
          src={urlFor(strain.image).width(600).height(400).url()}
          alt={strain.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-forest-800">{strain.name}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${typeColor}`}>
            {strain.type.charAt(0).toUpperCase() + strain.type.slice(1)}
          </span>
        </div>

        {/* THC Content */}
        {strain.thcContent && (
          <div className="mb-3">
            <span className="text-sm font-semibold text-earth-700">THC: {strain.thcContent}</span>
          </div>
        )}

        {/* Flavor Notes */}
        {strain.flavorNotes && strain.flavorNotes.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {strain.flavorNotes.map((note, index) => (
              <span
                key={index}
                className="bg-earth-100 text-earth-700 px-2 py-1 rounded text-xs"
              >
                {note}
              </span>
            ))}
          </div>
        )}

        {/* Profile Description */}
        <p className="text-earth-700 leading-relaxed mb-4">
          {strain.profile}
        </p>

        {/* Harvest Date */}
        {strain.harvestDate && (
          <div className="text-xs text-earth-600 border-t border-earth-200 pt-3">
            Harvested: {new Date(strain.harvestDate).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })}
          </div>
        )}
      </div>
    </div>
  );
}
