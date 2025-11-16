import React from 'react'

const Staff = () => {
  const members = [
    { member: '/workers 1.png', name: 'Alex Watson', work: 'Founder & Chairman' },
    { member: '/workers 2.png', name: 'Tom Smith', work: 'Manager Director' },
    { member: '/workers 3.png', name: 'Emma Will', work: 'Product Designer' }
  ]

  return (
    <div className="max-w-6xl mx-auto my-5 py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 call">
      {members.map((m, index) => (
        <div key={index}>
          <div className="bg-[#f5f5f5] flex flex-col items-center shadow-lg rounded-lg p-6 hover:scale-102 transition-transform duration-300">
            <img src={m.member} alt={m.name} className="h-60 object-cover rounded-lg" />
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-3xl font-semibold">{m.name}</h3>
            <p className="text-sm">{m.work}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Staff
