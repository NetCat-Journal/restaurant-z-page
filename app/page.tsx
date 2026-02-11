import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <img src="/img/interior.jpg" alt="Zitla Ceiba Restaurant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center z-10 h-full text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">Zitla Ceiba Restaurant</h1>
          <p className="text-2xl md:text-3xl mb-8">Where Caribbean Flavors Meet Mexican Soul</p>
          <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all hover:scale-105"> Reserve a Table</a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="/img/chef.jpg"
              alt="Chef preparing authentic Mexican cuisine"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At Zitla Ceiba, we celebrate the vibrant fusion of Caribbean and
              Mexican culinary traditions. Our colorful, bohemian atmosphere
              reflects the spirit of Playa del Carmen - relaxed, authentic,
              and full of life.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every dish is crafted with fresh, local ingredients and a passion
              for bold flavors. From our famous Gober tacos to our signature
              seafood tower, each plate tells a story of tradition, creativity,
              and love for Mexican cuisine.
            </p>
            {/* Optional: Add some stats or highlights */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">15+</div>
                <div className="text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">100+</div>
                <div className="text-gray-600">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">4.7</div>
                <div className="text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white p-8 text-center">
        <p>Footer</p>
      </footer>
    </main>
  );
}
