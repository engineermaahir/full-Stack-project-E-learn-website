const Contact = () => {
  return (
    <section className="min-h-screen py-10 px-6 md:px-20 bg-white flex flex-col md:flex-row gap-12">
      {/* Left Info Section */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
        </p>
        <div className="space-y-4 text-gray-800">
          <div className="flex items-center space-x-3">
            <i className="fas fa-phone-alt text-orange-500 text-xl"></i>
            <span>484.324.2400</span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fas fa-envelope text-orange-500 text-xl"></i>
            <span>info@maahitech.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fas fa-map-marker-alt text-orange-500 text-xl"></i>
            <span>15 West 3rd St, Mogadishu, Somalia</span>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="md:w-1/2">
        <form className="space-y-5">
          {/* Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First"
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Last"
              className="border border-gray-300 p-3 rounded-md w-full"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="example@email.com"
            className="border border-gray-300 p-3 rounded-md w-full"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone (optional)"
            className="border border-gray-300 p-3 rounded-md w-full"
          />

          {/* Message */}
          <textarea
            placeholder="Type your message..."
            rows="5"
            className="border border-gray-300 p-3 rounded-md w-full"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
