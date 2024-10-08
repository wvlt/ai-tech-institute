import React from 'react';

const KidsRobotics = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-kids-header">TechTykes Robotics Camp</h1>
      <p className="text-lg mb-8 text-gray-700">
        Discover the world of robotics through our exciting three-day camp! Designed for kids aged 7-12, our camp combines coding, creativity, and hands-on fun. Watch as your child’s robot comes to life, navigating mazes, solving challenges, and even battling in a friendly robot competition.
      </p>

      <div className="bg-kids-accent p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-black">Camp Highlights</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Learn to program and control a robot using intuitive drag-and-drop coding tools.</li>
          <li>Work on fun challenges like navigating mazes and solving puzzles.</li>
          <li>Compete in a thrilling 'Robot Royale' to showcase your new skills.</li>
          <li>Take home your own robot, 'TinkerBot,' included in the camp fee!</li>
          <li>Receive exclusive resources to continue learning at home with TinkerBot.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-kids-header">What to Expect</h2>

      {/* Day-by-Day Breakdown */}
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-kids-header mb-4">Day One: Meet Your Robot</h3>
          <p className="text-gray-700">
            On the first day, campers will be introduced to their robot buddy, 'TinkerBot'. They’ll learn how to use drag-and-drop coding concepts like loops, variables, and if-statements to make their robot move and respond to commands. It’s all about getting familiar with the technology and having fun!
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-kids-header mb-4">Day Two: Adventure Time</h3>
          <p className="text-gray-700">
            The second day is packed with activities! Campers will program TinkerBot to complete mazes, respond to light and sound, and even avoid obstacles. They’ll also learn about real-world robots like rescue drones and Mars rovers, showing how the skills they’re learning apply to exciting careers.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-kids-header mb-4">Day Three: Robot Royale</h3>
          <p className="text-gray-700">
            On the final day, campers will bring together all their skills for a friendly competition. They’ll program TinkerBot for races, sumo wrestling, and obstacle courses, with the chance to win prizes and be crowned the 'TechTykes Champion'. It’s a day of fun and learning that your child will never forget!
          </p>
        </div>
      </div>

      {/* Why Parents Love TechTykes Robotics Camp */}
      <div className="bg-kids-accent p-6 rounded-lg shadow-md my-12">
        <h2 className="text-2xl font-semibold mb-4 text-black">Why Parents Love TechTykes Robotics Camp</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Safe, engaging, and educational experiences led by qualified tutors.</li>
          <li>Every child receives their own robot and resources to continue learning at home.</li>
          <li>Daily updates on your child's progress and achievements.</li>
          <li>Friendly, small group settings to ensure personalized attention.</li>
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
          <h3 className="text-lg font-bold text-kids-header mb-2">Do I need to provide anything for my child?</h3>
          <p className="text-gray-700">All materials, including the robot, are provided. We recommend packing a water bottle, snacks, and lunch for your child.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-kids-header mb-2">Does my child need prior experience?</h3>
          <p className="text-gray-700">No prior experience is required. Our tutors ensure that all kids, regardless of skill level, can participate and have fun.</p>
        </div>
      </div>

      <p className="text-lg text-gray-700 mt-8">
        Ready to enroll your child in an unforgettable robotics experience? Contact us at 
        <a href="mailto:info@aitechinstitute.io" className="underline text-kids-accent ml-1">info@aitechinstitute.io</a>.
      </p>
    </div>
  );
};

export default KidsRobotics;
