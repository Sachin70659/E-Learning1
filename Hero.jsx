export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
      <div>
        <h1 className="text-5xl font-bold mb-6">Grow Your Business With Us</h1>
        <p className="text-lg mb-8">We provide the best solutions for your business success.</p>
        <a href="#services" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Get Started
        </a>
      </div>
    </section>
  )
}
