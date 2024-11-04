import React from 'react'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
    <h2 className="text-primary font-mono text-3xl text-center mb-10">{'{ portfolio }'}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {/* Portfolio items */}
      {['Patissiere', 'Game Studio', 'Restaurant', 'OneCorp', 'Blockchain'].map((item) => (
        <div key={item} className="bg-dark border border-gray-700 p-4 rounded-md shadow-md">
          <h3 className="text-lg font-mono text-primary">{`{ ${item.toLowerCase()} }`}</h3>
          {/* Include a placeholder for each image */}
          <p className="text-gray-300 text-sm mt-2 font-mono">
            {/* Short description here */}
          </p>
        </div>
      ))}
    </div>
  </section>
  )
}
