import React from 'react';

const KidsAbout = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-kids-header">About Us</h1>

      {/* Amir's Section */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4 text-black">Dr. Amir Charkhi</h2>
          <p className="text-lg text-gray-700">
            Dr. Amir is a renowned educator with over 20 years of experience in teaching AI, coding, and engineering. 
            An Associate Professor at the University of Western Australia (UWA), Amir has consistently demonstrated exceptional leadership and technical expertise, making him a trusted mentor for both children and adults. 
            His innovative approach and hands-on methodology have earned him numerous accolades, proving his commitment to developing the next generation of tech enthusiasts. 
            Parents can trust that their children will receive world-class education and guidance under his tutelage.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/amir.jpeg" alt="Dr. Amir Charkhi" className="rounded-full w-64 h-64 object-cover shadow-lg" />
        </div>
      </div>

      {/* Sheida's Section */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center order-2 md:order-1">
          <img src="/sheida.jpeg" alt="Sheida" className="rounded-full w-64 h-64 object-cover shadow-lg" />
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0 order-1 md:order-2">
          <h2 className="text-3xl font-semibold mb-4 text-black">Soon to be Dr. Sheida Shaban</h2>
          <p className="text-lg text-gray-700">
            Sheida, a highly accomplished engineer with expertise in AI, analytics, and data science, brings over 8 years of teaching experience to TechTykes. 
            Her passion for empowering the next generation is evident in her interactive and engaging teaching style, ensuring kids not only learn but have fun while doing so. 
            Parents can feel confident that their children are learning from one of the best, who is both a mentor and a role model.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KidsAbout;
