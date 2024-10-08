import React from 'react';

const KidsCoding = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-kids-header">TechTykes Coding Camp</h1>
      <p className="text-lg mb-8 text-gray-700">
        Embark on a coding adventure at TechTykes Coding Camp! Over three action-packed days, your child will design, create, and code their own game while developing essential coding skills. Perfect for beginners or kids with some coding experience, our camp is the ideal place for young minds to unleash their creativity.
      </p>

      <div className="bg-kids-accent p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-black">Camp Highlights</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Learn to code through fun, interactive lessons and game design.</li>
          <li>Create your own game from scratch with colorful characters and exciting levels.</li>
          <li>Explore animation, coding loops, and physics to bring your game to life.</li>
          <li>Take home your game to share with family and friends—no additional software required!</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-kids-header">What to Expect</h2>

      {/* Day-by-Day Breakdown */}
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-kids-header mb-4">Day One: Game Design & Coding Basics</h3>
          <p className="text-gray-700">
            On the first day, campers will start by brainstorming their game’s theme, designing characters, and choosing magical backgrounds. Using block coding, they will bring their world to life by adding basic animations, in-game physics, and movement controls. It’s the perfect introduction to coding!
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-kids-header mb-4">Day Two: Building the Game World</h3>
          <p className="text-gray-700">
            Day two is all about enhancing the game! Campers will add challenging levels, new game features like baddies and obstacles, and refine their coding skills by using variables, loops, and if-statements. It’s a day filled with creativity, problem-solving, and coding fun!
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-kids-header mb-4">Day Three: Game Testing & Launch</h3>
          <p className="text-gray-700">
            On the final day, campers will polish their games, adding finishing touches like new levels and characters. They’ll learn how to test and debug their code before launching their creations. An awards ceremony will celebrate each camper’s achievements, and kids will leave with their game, ready to share it with family and friends!
          </p>
        </div>
      </div>

      {/* Why Parents Love TechTykes Coding Camp */}
      <div className="bg-kids-accent p-6 rounded-lg shadow-md my-12">
        <h2 className="text-2xl font-semibold mb-4 text-black">Why Parents Love TechTykes Coding Camp</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Incredibly fun, engaging, and educational coding experience for kids.</li>
          <li>Professional tutors and small class sizes to ensure personalized attention.</li>
          <li>Daily updates on your child’s progress, including what they’ve learned and created.</li>
          <li>Access to resources so your child can continue coding at home at no extra cost.</li>
        </ul>
      </div>

      {/* FAQs Section */}
      <h2 className="text-2xl font-semibold mb-4 text-kids-header">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-kids-header mb-2">What time is drop-off and pick-up?</h3>
          <p className="text-gray-700">Drop-off is between 9:00 - 9:30 AM, and pick-up is between 2:00 - 2:30 PM. Extended hours are available upon request.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-kids-header mb-2">Does my child need prior coding experience?</h3>
          <p className="text-gray-700">No experience is required. Our camp is designed for beginners and kids with some coding knowledge. We make sure everyone can learn and have fun!</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-kids-header mb-2">What should my child bring?</h3>
          <p className="text-gray-700">We provide all the equipment. Just pack a water bottle, lunch, and a sense of adventure!</p>
        </div>
      </div>

      <p className="text-lg text-gray-700 mt-8">
        Ready to start your coding journey with TechTykes? Contact us at 
        <a href="mailto:info@aitechinstitute.io" className="underline text-kids-accent ml-1">info@aitechinstitute.io</a>.
      </p>
    </div>
  );
};

export default KidsCoding;
