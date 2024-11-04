import React from 'react'

export default function Services() {
  return (
    <section id="services" className="py-20 text-center">
    <h2 className="text-primary font-mono text-3xl mb-10">{'{ services }'}</h2>
    <div className="flex flex-col space-y-4">
      {['web designer', 'front-end developer', 'full-stack engineer'].map((role) => (
        <p key={role} className="text-2xl font-mono text-primary">
          {`{ "_${role}" }`}
        </p>
      ))}
      <button className="bg-accent text-black px-4 py-2 mt-6 rounded font-mono">
        All Services
      </button>
    </div>
  </section>
  )
}
