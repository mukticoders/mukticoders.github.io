import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className=" py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto flex-col items-center justify-center">
        <button
          className="bg-white shadow-md px-4 py-2 rounded-lg text-sm font-semibold flex md:ml-75"
          aria-label="Start working together"
        >
          <span className="bg-blue-500 text-white px-1 py-1 rounded-md text-xs headerText">
            24/7
          </span>
          <p className="headerText">Let's Work Together</p>
        </button>
        <h2 className="text-4xl font-bold mt-6 headerText">Any Questions Rising?</h2>
        <h3 className="text-3xl font-bold mt-2 headerText">We are All Here.</h3>
        <p className="text-gray-600 mt-4 max-w-3xl headerText">
          Whether you have a question, need assistance,
          <br /> or want to start a new project, our team is here to help.
        </p>
        <button
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full shadow-md font-semibold headerText"
          aria-label="Contact with us"
        >
          Contact With Us
        </button>
      </div>
      <hr className="my-12 border-gray-300" />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Email Section */}
        <div className="bg-white rounded-2xl shadow-md p-2 bg-gradient">
          <div className="bg-white rounded-2xl shadow-md p-15 bg-gradient">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaEnvelope className="text-black text-xl" aria-hidden="true" />
              <h4 className="text-lg font-semibold">Email</h4>
              <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full headerText">
                24/7
              </span>
            </div>
            <hr className="mt-2 mb-4" />
            <p className="text-gray-600 headerText">help [at] devuflux.com</p>
          </div>
        </div>
        {/* Phone Section */}
        <div className="bg-white rounded-2xl shadow-md p-2 bg-gradient">
          <div className="bg-white rounded-2xl shadow-md p-16 bg-gradient">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaPhone className="text-black text-xl" aria-hidden="true" />
              <h4 className="text-lg font-semibold headerText">Phone</h4>
            </div>
            <hr className="mt-2 mb-4" />
            <p className="text-gray-600 headerText">+1 (717) 550-1675</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white rounded-2xl shadow-md p-2 bg-gradient">
          <div className="bg-white rounded-2xl shadow-md p-9 bg-gradient">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaMapMarkerAlt
                className="text-black text-xl"
                aria-hidden="true"
              />
              <h4 className="text-lg font-semibold headerText">Address</h4>
              <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full headerText">
                Remote
              </span>
            </div>
            <hr className="mt-2 mb-4" />
            <p className="text-gray-600 headerText">
              California [CA], 90011
              <br />
              49th St. Los Angeles
              <br />
              United States
            </p>
          </div>
        </div>
      </div>
      <hr className="my-12 border-gray-300" />
    </section>
  );
};

export default Contact;