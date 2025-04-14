import AboutImg from '../images/AboutImg.jpg'; // replace with your image path

const About = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-white flex flex-col md:flex-row items-center justify-center space-x-20 gap-12">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h4 className="text-sm font-semibold text-gray-500 uppercase">About <span className="text-2xl font-bold text-red-400">MaahiTech</span></h4>
        <h1 className="text-4xl font-bold text-gray-800 mt-2 mb-6 leading-tight">
          Caring For Our Planet
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Sustainability is a core pillar at MaahiTech. We are working toward building a responsible tech
          education system that supports the environment and the future.
          <br /><br />
          From energy-efficient tools to paperless teaching systems, we are committed to positive change.
        </p>
        <button className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
          Learn More
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-[400px]">
        <img src={AboutImg} alt="About MaahiTech" className="w-full rounded-md object-cover" />
      </div>
    </section>
  );
};

export default About;
