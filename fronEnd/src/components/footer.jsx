const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Contact Info */}
        <div className="space-y-5">
          <div className="flex items-start space-x-3">
            <i className="fas fa-map-marker-alt text-lg text-white mt-1"></i>
            <div>
              <p className="text-gray-300">21 Revolution Street</p>
              <p className="text-white font-semibold">Paris, France</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fas fa-phone-alt text-lg text-white"></i>
            <p>+1 555 123456</p>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fas fa-envelope text-lg text-white"></i>
            <a href="mailto:support@company.com" className="text-blue-400 hover:underline">
              support@company.com
            </a>
          </div>
        </div>

        {/* About Company */}
        <div className="max-w-md">
          <h3 className="text-lg font-semibold mb-2">About the company</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod convallis velit, eu auctor lacus
            vehicula sit amet.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#"><i className="fab fa-facebook-f text-white hover:text-blue-500"></i></a>
            <a href="#"><i className="fab fa-twitter text-white hover:text-blue-400"></i></a>
            <a href="#"><i className="fab fa-linkedin-in text-white hover:text-blue-300"></i></a>
            <a href="#"><i className="fab fa-github text-white hover:text-gray-300"></i></a>
          </div>
        </div>
      </div>
    </footer>
    <div className="text-sm font-thin text-center text-white bg-gray-700">All rights reserved 2025.</div>
    </>
  );
};

export default Footer;
