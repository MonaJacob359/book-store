
import React from 'react';
import { teamMembers } from './teamData';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 w-[90%]">
      {/* About Us Section */}
      <section className="mb-12 text-center mt-16 md:w-[70%] m-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900/70">About Us</h2>
        <p className="text-lg text-gray-700">
          Welcome to [<span className='font-semibold'>Maha BookStor</span>], your one-stop destination for all things books! Whether you're an avid reader, a casual book lover, or someone looking for that perfect gift, we have something for everyone. Our mission is to bring the joy of reading to people of all ages, backgrounds, and interests.
        </p>
      </section>

      {/* Meet Our Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900/70">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{member.title}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
