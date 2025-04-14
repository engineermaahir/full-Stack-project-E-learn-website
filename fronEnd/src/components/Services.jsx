import React from "react";

const servicesData = [
  {
    icon: "fa-book-open",
    title: "Teaching Web Development",
    description:
      "        We teach HTML, CSS, JavaScript, React.js, and backend technologies so you can become a full-stack developer.",
  },
  {
    icon: "fa-laptop-code",
    title: "Frontend Projects",
    description:
      "We help you build amazing frontend apps with HTML, CSS, JavaScript, and React.js.",
  },
  {
    icon: "fa-server",
    title: "Backend & Database",
    description:
      "Learn Node.js, PHP, MongoDB, and MySQL for powerful backend development.",
  },
];

const Services = () => {
  return (
    <div className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-800">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 max-w-6xl mx-auto">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-amber-300 p-5 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <div className="flex items-center space-x-4">
              <i className={`fa-solid ${service.icon} text-5xl text-[#ff2500]`}></i>
              <h3 className="text-xl font-bold text-blue-500">{service.title}</h3>
            </div>
            <p className="text-md text-gray-800 mt-4 text-center font-medium">
              {service.description}
            </p>
            <div className="flex justify-center">
              <button className="py-2 px-6 mt-6 bg-amber-100 rounded-sm font-semibold">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
