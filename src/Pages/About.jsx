import React from 'react';

const AboutSection = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <div className=" bg-gray-200 text-black font-bold px-4 py-1.5 m-1.5 rounded-sm md:rounded-md">
        <span className="bg-blue-400 text-black font-bold p-1 rounded-sm mr-1 h-2">
          2025
        </span>{" "}
        Dig Deep About Us
      </div>
      <h1 className="text-5xl font-bold mt-4">
        Learn More About Landin
        <br /> Let’s Deep Dive!
      </h1>
      <p className="text-gray-600 max-w-lg mt-2">
        DevFlux is your go-to agency for creative thinking and marketing ideas.
        We specialize in digital business solutions.
      </p>
      <button className="bg-none text-black text-xl px-6 py-2 rounded-full mt-4 font-bold">
        Contact With Us
      </button>
    </div>
  );
};

const AgencySection = () => {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 gap-17 ">
      <div className=" bg-white rounded-2xl p-3">
        <img
          src="src/assets/images/ab.jpg"
          alt="Agency Image"
          className="w-[400px] rounded-2xl"
        />
      </div>
      <div className="max-w-md text-left flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="bg-white font-bold px-5 py-3 rounded-xl">
            • About DeuFlux
          </span>
        </div>
        <h2 className="text-3xl font-bold mt-4">
          An Agency With Classic <br />
          <span className="text-gray-700">Revolutionary Skills!</span>
          <hr />
        </h2>
        <p className="mt-4 text-gray-600">
          <span className="font-bold text-blue-500">
            Your Success, Our Priority
          </span>
          <br />
          At Landin, we believe in empowering our clients to achieve their
          goals. Our team works closely with you.
        </p>
        <p className="mt-4 text-gray-600">
          <span className="font-bold text-blue-500">
            Partners You Can Rely On
          </span>
          <br />
          Landin is here to ensure your success with expert guidance and
          collaborative teamwork.
        </p>
        <div className="flex items-center justify-between mt-4">
          <button className="bg-none text-black font-bold text-xl px-6 py-2 rounded-full mt-4 hover:bg-blue-600">
            View About Deuflux
          </button>
          <p className="mt-2 text-gray-500 border-l-2 pl-2">
            ★★★★★
            <br />
            200+ Agencies Rated
          </p>
        </div>
      </div>
    </div>
  );
};

const Agencywork = () => {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row-reverse items-center justify-center px-6 gap-10 ">
      <div className=" bg-white rounded-2xl p-3">
        <img
          src="src/assets/images/ab.jpg"
          alt="Agency Image"
          className="w-[400px] rounded-2xl"
        />
      </div>
      <div className="max-w-md text-left flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="bg-white font-bold px-5 py-3 rounded-xl">
            • About DeuFlux
          </span>
        </div>
        <h2 className="text-3xl font-bold mt-4">
          Work Smarter Not Harder
          <br />
          <span className="text-gray-700">in Every Minute!</span>
          <hr />
        </h2>
        <p className="mt-4 text-gray-600">
          <span className="font-bold text-blue-500">Guided Every Step</span>
          <br />
          We ensure a smooth and successful project delivery with our innovative
          and strategic approach.
        </p>
        <p className="mt-4 text-gray-600">
          <span className="font-bold text-blue-500">
            Support Beyond Delivery
          </span>
          <br />
          Our team is here to support you even after the project is completed.
        </p>
        <div className="flex items-center justify-between mt-4">
          <button className="bg-none text-black font-bold text-xl px-6 py-2 rounded-full mt-4 hover:bg-blue-600">
            View About Deuflux
          </button>
          <p className="mt-2 text-gray-500 border-l-2 pl-2">
            ★★★★★
            <br />
            200+ Agencies Rated
          </p>
        </div>
      </div>
    </div>
  );
};


const teamMembers = [
  {
    name: "Mable Lang",
    role: "Forward Usability Analyst",
    image: "src/assets/images/ab.jpg",
  },
  {
    name: "Kelly Mayert",
    role: "Customer Security Designer",
    image: "src/assets/images/ab.jpg",
  },
  {
    name: "Louise Loue",
    role: "Legacy Interactions Agent",
    image: "src/assets/images/ab.jpg",
  },
  {
    name: "Velma Ratke",
    role: "Central Operations Strategist",
    image: "src/assets/images/ab.jpg",
  },
  {
    name: "Ada Franekci-Feil",
    role: "Lead Security Representative",
    image: "src/assets/images/ab.jpg",
  },
  {
    name: "Joey Cassin",
    role: "Future Response Assistant",
    image: "src/assets/images/ab.jpg",
  },
];
const TeamSection = () => {
  return (
    <section
      className=" relative py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
      style={{
        backgroundImage: "url('src/assets/images/ab.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="max-w-7xl mx-auto text-center">
        
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet the Team Making
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-700">
            Things Happen Every Day
          </h3>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our team is made up of passionate professionals <br /> who bring
            their expertise and creativity to every <br /> project.
          </p>
          <button className="mt-8 px-8 py-3 bg-black text-white rounded-full text-base font-medium hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
            Book A 15 Min Call
          </button>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member }) => {
  return (
    <div className="group relative bg-transparent rounded-2xl transition-transform duration-300 hover:transform hover:scale-105">
      
      <div className="aspect-w-3 aspect-h-4 bg-white rounded-2xl overflow-hidden shadow-xl p-3">
        <img
          src={member.image}
          alt={`Portrait of ${member.name}`}
          className="w-full h-full object-cover object-top rounded-2xl"
        />
      </div>

      
      <div className="absolute bottom-5 left-5 right-5  p-5 rounded-2xl shadow-lg">
        <div className="flex flex-col items-start">
          <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
          <p className="text-gray-700 text-md font-light leading-tight">
            {member.role}
          </p>
        </div>
        <button className="absolute top-6 right-4 p-2 rounded-lg bg-white/90 hover:bg-white transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900">
          <svg
            className="w-7 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const tools = [
  {
    name: "Zapier",
    category: "Automation",
    description:
      "Zapier connects your favorite apps and automates your workflows.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Zapier_logo.png/800px-Zapier_logo.png",
  },
  {
    name: "Slack",
    category: "Communication",
    description:
      "Slack is our go-to platform for real-time communication and collaboration.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  },
  {
    name: "Dropbox",
    category: "Cloud Storage",
    description:
      "Dropbox provides secure cloud storage, enabling us to share files and collaborate.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/1024px-Dropbox_Icon.svg.png",
  },
  {
    name: "Stripe",
    category: "Payments",
    description:
      "Stripe is our payment processing tool, providing a secure way to transactions.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Stripe_Logo%2C_revised_2016.png/768px-Stripe_Logo%2C_revised_2016.png",
  },
  {
    name: "Mailchimp",
    category: "Email Marketing",
    description:
      "Mailchimp helps us craft effective email marketing campaigns to nurture clients.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mailchimp_Logo.svg/1024px-Mailchimp_Logo.svg.png",
  },
  {
    name: "GitHub",
    category: "Version Control",
    description:
      "GitHub is our version control system, enabling smooth collaboration.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
];

const ToolsSection = () => {
  return (
    <section className=" py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <div>
          <span className="bg-white font-bold px-5 py-3 rounded-xl">
            • Tools
          </span>
        </div>
        <h2 className="text-3xl font-bold mt-4">
          Tools We Use <br />
          <span className="text-gray-600">To Make Things Happen</span>
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Explore the tools that empower our team <br /> to deliver exceptional
          results and streamline workflows.
        </p>
        <button className="bg-none text-black font-bold text-xl px-6 py-2 rounded-full mt-4 hover:bg-blue-600">
          View About Deuflux
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% 
          shadow-lg p-6 rounded-3xl border border-gray-200 flex flex-col items-start text-left"
          >
            <img src={tool.logo} alt={tool.name} className="h-16 w-16 mb-4" />
            <h3 className="font-bold text-lg">{tool.name}</h3>
            <p className="text-gray-500 text-sm">{tool.category}</p>
            <hr className="border-gray-300 my-2 w-full" />
            <p className="text-black text-sm font-bold">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};




const About = () => {
  return (
    <div>
      <AboutSection />
      <AgencySection />
      <Agencywork />
      <TeamSection />
      <ToolsSection />
      
    </div>
  );
};

export default  About;