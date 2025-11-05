"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send to an API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-earth-50">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Trinity County landscape"
            fill
            className="object-cover brightness-75"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-2xl mb-4">Get in Touch</h1>
          <p className="text-xl drop-shadow-lg">Let&apos;s talk about bringing Redwood Creek Reserve to your dispensary</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-forest-800">Wholesale Inquiries</h2>
            <p className="text-earth-700 mb-6">
              Interested in carrying Redwood Creek Reserve at your dispensary? We work with select
              partners who share our commitment to quality and sustainability.
            </p>

            {submitted && (
              <div className="bg-forest-100 border-l-4 border-forest-600 p-4 mb-6">
                <p className="text-forest-800 font-semibold">
                  Thank you for your message! We&apos;ll get back to you within 24-48 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-earth-800 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-earth-300 rounded-md focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-earth-800 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-earth-300 rounded-md focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-earth-800 mb-2">
                  Dispensary / Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-earth-300 rounded-md focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-earth-800 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-earth-300 rounded-md focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                  placeholder="Tell us about your dispensary and what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-forest-800">Find Our Flower</h3>
              <p className="text-earth-700 mb-4">
                Redwood Creek Reserve is currently available at select dispensaries throughout Northern California:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">📍</span>
                  <div>
                    <strong className="text-forest-800">Trinity Organics</strong>
                    <br />
                    <span className="text-sm text-earth-600">Weaverville, CA</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">📍</span>
                  <div>
                    <strong className="text-forest-800">Emerald Triangle Dispensary</strong>
                    <br />
                    <span className="text-sm text-earth-600">Arcata, CA</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">📍</span>
                  <div>
                    <strong className="text-forest-800">NorCal Cannabis Co.</strong>
                    <br />
                    <span className="text-sm text-earth-600">Eureka, CA</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">📍</span>
                  <div>
                    <strong className="text-forest-800">Mountain High Wellness</strong>
                    <br />
                    <span className="text-sm text-earth-600">Redding, CA</span>
                  </div>
                </li>
              </ul>
              <p className="text-sm text-earth-600 mt-4 italic">
                * These are fictional dispensaries for portfolio demonstration purposes
              </p>
            </div>

            <div className="bg-forest-800 text-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why Partner With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Consistent, premium-quality flower</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Authentic Trinity County legacy story</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>100% sun-grown & sustainable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Small-batch, hand-crafted quality</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Full compliance & testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-earth-100 border-l-4 border-earth-600 p-6 rounded">
          <p className="text-sm text-earth-800">
            <strong>Legal Notice:</strong> Redwood Creek Reserve is a licensed cannabis cultivator operating
            in compliance with California state law. We only sell to licensed dispensaries and distributors.
            This website is for informational and portfolio purposes. Cannabis products are for adults 21+ only.
          </p>
        </div>
      </section>
    </div>
  );
}
