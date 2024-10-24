import React from 'react';
import { FaHeartbeat, FaBrain, FaUserNurse, FaBaby, FaUsers } from 'react-icons/fa';

// Sample data (this can be replaced with actual data fetched from an API or state management)
const departments = [
  { dept_name: "Cardiology", dept_description: "A branch of medicine that specializes in diagnosing and treating diseases of the heart, blood vessels, and circulatory system", icon: <FaHeartbeat className="text-red-500 text-4xl" /> },
  { dept_name: "Dermatology", dept_description: "Dermatology is the branch of medicine dealing with the skin. It is a specialty with both medical and surgical aspects.", icon: <FaUserNurse className="text-yellow-500 text-4xl" /> },
  { dept_name: "Pediatrics", dept_description: "Pediatrics is the branch of medicine that involves the medical care of infants, children, adolescents, and young adults.", icon: <FaBaby className="text-green-500 text-4xl" /> },
  { dept_name: "Psychology", dept_description: "Psychology is the scientific study of mind and behavior, both conscious and unconscious, and mental processes like thoughts, feelings, and motives.", icon: <FaUsers className="text-blue-500 text-4xl" /> },
  { dept_name: "Neurology", dept_description: "Neurology is the branch of medicine dealing with the diagnosis and treatment of all categories of conditions and disease involving the nervous system, which comprises the brain, the spinal cord and the peripheral nerves.", icon: <FaBrain className="text-indigo-500 text-4xl" /> },
];

function Departments() {
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      {/* Page Header */}
      <h1 className="text-center text-5xl font-extrabold text-gray-800 dark:text-white mb-8">Our Departments</h1>
      <p className="text-center text-lg text-gray-600 dark:text-slate-200 mb-10 max-w-2xl mx-auto">
        Explore the diverse departments at ABC Hospital where we offer specialized healthcare services for your specific needs.
      </p>
      
      <hr className="mb-10 border-gray-300 dark:border-slate-700" />

      {/* Departments Section */}
      <div className="flex flex-wrap gap-6 justify-center max-w-7xl mx-auto text-black">
        {departments.map((d, index) => (
          <div key={index} className="bg-gradient-to-r from-blue-100 via-white to-pink-100 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border rounded-3xl p-8 text-center w-full sm:w-1/2 md:w-1/3">
            {/* Department Icon */}
            <div className="mb-4 flex justify-center items-center gap-2">
              {d.icon} <h2 className="text-3xl font-semibold text-gray-800">{d.dept_name}</h2>
            </div>            
            {/* Department Description */}
            <p className="text-gray-500 text-lg">{d.dept_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;
