import React from 'react'

export default function About() {
  return (
    <section id="about_me" className="py-20">
    <h2 className="text-primary font-mono text-3xl text-center mb-10">{'{ about_me }'}</h2>
    <div className="max-w-4xl mx-auto px-4 text-center">
      <p className="text-lg text-secondary mb-6 font-mono">
        {/* Placeholder for about me text */}
        I have over 12 years of experience in both front-end and back-end development...
      </p>
      <button className="bg-accent text-black px-4 py-2 rounded font-mono">
        Read More
      </button>
    </div>
  </section>
  )
}
