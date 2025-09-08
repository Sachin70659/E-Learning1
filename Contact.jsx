export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded-lg border" />
          <input type="email" placeholder="Your Email" className="p-3 rounded-lg border" />
          <textarea placeholder="Your Message" rows="5" className="p-3 rounded-lg border"></textarea>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </section>
  )
}
