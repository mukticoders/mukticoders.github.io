import { useEffect, useRef, useState } from "react";

const projectCards = [
  { id: 1, title: "Clover",  image: "/clover.png" },
  { id: 2, title: "Atom AI",  image: "/AtomAi.png" },
  { id: 3, title: "Wpro",  image: "/wPro.png" },
  { id: 4, title: "Course Site", image: "/CourseSite.png" },
];

export default function Projects() {
  const sliderRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [scrollSpeed, setScrollSpeed] = useState(3); // Control the speed
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        setScrollDirection(-1);
      } else if (slider.scrollLeft <= 0) {
        setScrollDirection(1);
      }
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const scrollAmount = 2;

    // Function to check if the slider is in view
    const checkIfInView = () => {
      const rect = slider.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isVisible) {
        setIsInView(true);
      }
    };

    const autoScroll = setInterval(() => {
      if (slider && isInView) {
        handleScroll();
        slider.scrollLeft += scrollAmount * scrollDirection;
        if (scrollSpeed > 1) {
          setScrollSpeed((prevSpeed) => Math.max(prevSpeed - 0.1, 1)); // Slow down over time
        }
      }
    }, 20);

    window.addEventListener("scroll", checkIfInView);
    checkIfInView(); // Initial check on mount

    return () => {
      clearInterval(autoScroll);
      window.removeEventListener("scroll", checkIfInView);
    };
  }, [scrollDirection, isInView, scrollSpeed]);

  return (
    <section className="md:mb-15" id="projects">
      <div className="mt-10">
        {/* Badge */}
        <div className="relative md:ml-14">
        <div className="flex items-center justify-center">
        <div className=" w-[70%] h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent md:mb-18"></div>
        </div>
        <div className=" bg-white text-black w-30 h-13 rounded-lg text-2xl font-bold flex items-center justify-center border border-[#CACACA] headerText">
        <span className="w-1.5 h-1.5 mr-2  bg-black"></span>
        <p>Projects</p>
        </div>

        {/* Title and Description */}
        <h2 className="mt-4 md:text-5xl font-bold text-black headerText">Our Selected Projects</h2>
        <h3 className="md:text-5xl md:mt-2 font-bold text-[#595858] headerText">That Propel Your Website</h3>
        <p className="mt-2 text-xl  max-w-lg subHeaderText">
          Explore our curated work, showcasing <br />collaborations with visionary clients across <br /> diverse industries.
        </p>
        
      </div>
      <img src="/projects-bg.png" alt="project-bg" className="w-[100%] md:-mt-75"/>
        </div>
        

      {/* Project Slider */}
      <div ref={sliderRef} className="mt-8 flex space-x-6 overflow-x-scroll scrollbar-hide">
        {projectCards.map((project) => (
          <div key={project.id} className="flex-none md:w-150 md:h-135  text-black rounded-lg overflow-hidden ">
            <div className="bg-white p-3 rounded-4xl">
            <img src={project.image} alt={project.title} className="w-full rounded-4xl" />
            </div>
            
            <div className="p-4">
              <h4 className="mt-1 text-3xl font-bold headerText">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="flex items-center justify-center">
      <button className="mb-8">
            <div className="w-10 h-10 relative bg-[#00b2ca]  top-11 rounded-full"></div>
          <p className="absolute text-black py-2 px-4 text-2xl headerText">See All →</p>
        </button>

      </div>
      
    </section>
  );
}
