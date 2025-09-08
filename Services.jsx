export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4 ">Web Development</h3>
            <p className="text-gray-600">Build modern, responsive websites tailored for your business needs.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
            <p className="text-gray-600">Grow your reach with SEO, ads, and social media campaigns.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Brand Strategy</h3>
            <p className="text-gray-600">Craft strong brand identities that connect with customers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
