import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redwood Creek Reserve</h3>
            <p className="text-earth-200 text-sm leading-relaxed">
              Trinity County&apos;s legacy growers. Three generations of sustainable,
              sun-grown cannabis cultivation in the heart of the Emerald Triangle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-earth-200 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-earth-200 hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/harvest" className="text-earth-200 hover:text-white transition-colors">
                  Our Harvest
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-earth-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal Information</h3>
            <p className="text-earth-200 text-sm mb-4">
              Licensed cannabis cultivator in compliance with California state regulations.
            </p>
            <p className="text-earth-200 text-sm">
              <strong>For wholesale inquiries:</strong><br />
              Use our contact form
            </p>
          </div>
        </div>

        <div className="border-t border-forest-700 mt-8 pt-8 text-center text-sm text-earth-300">
          <p className="mb-2">
            &copy; {currentYear} Redwood Creek Reserve. All rights reserved.
          </p>
          <p className="text-xs">
            This is a portfolio project created for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
