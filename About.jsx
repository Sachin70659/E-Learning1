export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <img src="https://via.placeholder.com/400" alt="About" className="rounded-lg shadow-lg"/>
        <div>
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 mb-4">
            We are a team of professionals dedicated to helping businesses achieve their goals through innovative digital solutions.
          </p>
          <p className="text-gray-600">
            Our mission is to deliver top-quality services that drive growth, efficiency, and success.
          </p>
        </div>
      </div>
    </section>
  )
}
