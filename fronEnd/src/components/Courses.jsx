import HtmlCss from '../images/HtmlCss.jpeg';
import JavaScript from '../images/javaScript.png'
import React from '../images/react.jpeg'

const courseData = [
  {
    title: "HTML AND CSS",
    description: "Master the basics of web structure and styling.",
    image: HtmlCss,
  },
  {
    title: "JAVASCRIPT",
    description: "Build modern, responsive websites from scratch.",
    image: JavaScript,
  },
  {
    title: "REACT JS",
    description: "Learn how to design with Reactjs.",
    image: React,
  },
];

const Courses = () => {
  return (
    <div className="pt-10 pb-16">
      <h1 className="text-4xl font-bold text-center mb-10">Courses</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-10">
        {courseData.map((course, index) => (
          <div key={index} className="bg-white shadow-2xl rounded-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-bold text-green-900">{course.title}</h2>
              <p className="text-gray-700 mt-3 text-[15px]">{course.description}</p>
              <button className="mt-5 bg-black text-white py-2 px-6 rounded-sm hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
