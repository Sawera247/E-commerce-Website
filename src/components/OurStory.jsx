import React from 'react'

const OurStory = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly p-6 md:p-10 gap-8 md:gap-10">
      
      {/* Text Section */}
      <div className="w-full md:w-2/5 flex flex-col gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">Our Story</h1>
        <p className="text-sm sm:text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit fugit dolor adipisci voluptate asperiores sequi sit repudiandae. Harum vitae necessitatibus quasi! Accusamus aliquam harum laborum amet repellat non recusandae laboriosam officia et nobis incidunt quisquam facere minus, culpa debitis voluptas qui voluptatem possimus dolorem quam necessitatibus velit praesentium vero.
        </p>
        <p className="text-sm sm:text-base text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum delectus ut quaerat commodi quae saepe nemo tempore neque sunt.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-2/5 flex justify-center">
        <img src="/story.png" alt="story" className="w-full max-w-md rounded-lg object-cover bg-[#e5729b]" />
      </div>

    </div>
  )
}

export default OurStory
