import MenuItem from './components/MenuItem';
import ContactForm from './components/ContactForm';

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
      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gray-900">Our Menu</h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Authentic flavors crafted with passion
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MenuItem
              name="Gober Tacos"
              description="Fresh shrimp with cilantro, lime, and chipotle aioli on soft corn tortillas"
              price="14.99"
              image="/img/taco-shrimp.jpg"
            />
            <MenuItem
              name="Carne Asada"
              description="Grilled steak with roasted vegetables and house chimichurri sauce"
              price="18.99"
              image="/img/steak.jpg"
            />
            <MenuItem
              name="Shrimp Burger"
              description="Crispy shrimp patty with avocado, lettuce, and chipotle mayo"
              price="15.99"
              image="/img/burger.jpg"
            />
            <MenuItem
              name="Tuna Tostada"
              description="Fresh tuna, avocado, cucumber, sesame seeds on crispy tortilla"
              price="16.99"
              image="/img/tuna.jpg"
            />
            <MenuItem
              name="Seafood Tower"
              description="Shrimp ceviche, mahi mahi, calamari, and fresh tuna"
              price="24.99"
              image="/img/seafood.jpg"
            />
            <MenuItem
              name="Octopus Tacos"
              description="Grilled octopus with pico de gallo, lime, and cilantro"
              price="17.99"
              image="/img/octopus.jpg"
            />
          </div>
          {/*Contact form section*/}
          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold text-center mb-4 text-gray-900">Reserve a Table</h2>
              <p className="text-center text-gray-600 text-lg mb-12">
                Have questions or want to make a reservation? We'd love to hear from you!
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Visit Us</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="text-orange-600 mr-4 text-xl">📍</div>
                        <div>
                          <p className="font-semibold text-gray-900">Address</p>
                          <p className="text-gray-600">Calle 34 Nte 43, Gonzalo Guerrero</p>
                          <p className="text-gray-600">Playa del Carmen, Q.R. 77720</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="text-orange-600 mr-4 text-xl">📞</div>
                        <div>
                          <p className="font-semibold text-gray-900">Phone</p>
                          <p className="text-gray-600">(984) 123-4567</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="text-orange-600 mr-4 text-xl">🕐</div>
                        <div>
                          <p className="font-semibold text-gray-900">Hours</p>
                          <p className="text-gray-600">Monday - Sunday</p>
                          <p className="text-gray-600">12:00 PM - 11:00 PM</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="text-orange-600 mr-4 text-xl">✉️</div>
                        <div>
                          <p className="font-semibold text-gray-900">Email</p>
                          <p className="text-gray-600">hello@zitlaceiba.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-orange-600 hover:text-orange-700 text-2xl">📘</a>
                      <a href="#" className="text-orange-600 hover:text-orange-700 text-2xl">📷</a>
                      <a href="#" className="text-orange-600 hover:text-orange-700 text-2xl">⭐</a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
          {/* View Full Menu Button */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-lg font-semibold text-lg inline-block transition-all hover:scale-105"
            >
              Order Now
            </a>
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
