import React from 'react'

export default function Contact() {
  return (
    <section id="contact_me" className="py-20">
    <h2 className="text-primary font-mono text-3xl text-center mb-10">{'{ contact_me }'}</h2>
    <div className="max-w-md mx-auto">
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 bg-gray-800 text-gray-100 rounded" />
        <input type="email" placeholder="Email" className="w-full p-3 bg-gray-800 text-gray-100 rounded" />
        <textarea placeholder="Message" className="w-full p-3 bg-gray-800 text-gray-100 rounded h-32"></textarea>
        <button type="submit" className="bg-accent text-black w-full py-2 rounded font-mono">
          Submit
        </button>
      </form>
    </div>
  </section>
  )
}
