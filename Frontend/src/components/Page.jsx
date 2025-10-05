import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import Footer from "./Footer";

const cardSection = [
  {
    title: "MODERNIZATION SERVICES",
    heading: "Update your cloud foundation to power AI",
    description:
      "25-40% of enterprise cloud spend goes to modernization. Coordinated modernization efforts transform tech to optimize processes, boost security, spark innovation and drive growth.",
  },
  {
    title: "APPLICATION TRANSFORMATION",
    heading: "Become a world-class software organization",
    description:
      "40% of companies cite outdated applications as a key barrier to cloud value. In today's fast-paced landscape, adaptability is essential. Here's how to transform your apps and unlock new business potential.",
  },
  {
    title: "CLOUD STRATEGY AND DESIGN",
    heading: "Craft a cloud strategy that delivers value and flexibility",
    description:
      "Only 42% of companies report achieving expected returns from cloud. It takes a custom strategy to meet your unique goals. Learn how to make the most of cloud's potential to reinvent your business.",
  },
  {
    title: "TECHNOLOGY SOVEREIGNTY",
    heading: "In the age of AI, Technology Sovereignty is key",
    description:
      "46% of companies have applied sovereignty to infrastructure, but only 22% apply it to AI models. Those who embrace sovereignty across the entire stack can boost resilience while scaling innovation.",
  },
];


const cardData = [
  {
    title: 'CASE STUDY',
    description: "The NFL's gameplan: reinventing the future of football",
    imageUrl: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-DigitalCore-Cpt2-Glance-Image-600x848%3Arad-card-full?ts=1739994953708&fit=constrain&dpr=off",
    hoverText: "We helped the NFL transform how it uses data to drive better decision-making and grow the game internationally."
  },
  {
    title: 'RESEARCH REPORT',
    description: "Powered for Change 2025",
    imageUrl: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Digital-Core-Glance-Image-600x848%3Arad-card-full?ts=1745477971979&fit=constrain&dpr=off",
    hoverText: "This year's Powered for Change research shows how to make progress in industrial decarbonization, by scaling net-zero infrastructure rapidly and cost-effectively by applying a multigenerational approach."
  },
  {
    title: 'RESEARCH REPORT',
    description: "Learning, reinvented. Accelerating human-AI collaboration",
    imageUrl: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Build-Tech-Balance-Debt-600x848%3Arad-card-full?ts=1758521015040&fit=constrain&dpr=off",
    hoverText: "Humans and Al must learn and adapt together through continuous co-learning. Yet only 11% of organizations are currently equipped to do so effectively, creating an urgent gap and a significant opportunity."
  },
  {
    title: 'RESEARCH REPORT',
    description: "4 critical actions to take now to strengthen your cyber defenses",
    imageUrl: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Race-cloud-glance-image%3Arad-card-full?ts=1721773234551&fit=constrain&dpr=off",
    hoverText: "Cyber risks are growing faster than ever, outpacing security efforts. How do you get ahead of these threats? In this year's State of Cybersecurity Resilience, learn the steps to build resilience as you embrace Al transformation."
  },
]


// Array representing 6 cards
const cards = [1,2,3,4,5,6];

// Function to get image based on id
const getImage = (id) => {
  if (id === 1 || id === 6) return p1;
  if (id === 2 || id === 4) return p3;
  if (id === 3 || id === 5) return p2;
};


const awardsData = [
  {
    title: "The Forrester Wave™: Application Modernization & Multicloud Managed Services",
    description: "According to Forrester's research, Accenture is a good fit for a program-level initiative that requires both modernization and migration skills, including customers that need Accenture's trademark balance of technical and business acumen."
  },
  {
    title: "Leader in Everest Group AWS Services PEAK Matrix® Assessment 2024",
    description: "Everest Group has positioned Accenture as the highest Leader on both the Market Impact axis and the Vision and Capability axis in its AWS Services PEAK Matrix® Assessment 2024."
  },
  {
    title: "Leader in Everest Group Google Cloud Services PEAK Matrix® Assessment 2024",
    description: "Everest Group has positioned Accenture as the highest Leader on the Vision and Capability axis in its Google Cloud Services PEAK Matrix® Assessment 2024."
  },
  {
    title: "Leader in Everest Group Microsoft Azure Services PEAK Matrix® Assessment 2024",
    description: "Everest Group has positioned Accenture as the highest Leader on both the Market Impact axis and the Vision and Capability axis in its Microsoft Azure Services PEAK Matrix® Assessment 2024."
  },
  {
    title: "The Forrester Wave™: Infrastructure Outsourcing Services",
    description: "The report states that “Accenture is a great fit for large and rapidly growing enterprises seeking support for complex IT infrastructure and to align their technology to strategic business objectives.”"
  },
  {
    title: "Gartner's Magic Quadrant for Managed Network Services 2024",
    description: "Accenture is recognized based on its Completeness of Vision and Ability to Execute in the report, which assessed 17 globally capable providers of remote service management functions for the network and security operations of enterprise networks."
  }
]


function Page() {
    const { category, slug } = useParams(); // grabs slug from URL
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                console.log("API response:");

                const res = await axios.get(`http://localhost:5000/api/pages/${category}/${slug}`);

                console.log("API response:", res.data);
                setPage(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

      fetchPage();
    }, [category, slug]);

    if (loading) return <div className="text-white p-10">Loading...</div>;
    if (!page) return <div className="text-red-500 p-10">Page not found</div>;

    return (
        <div className="text-white min-h-screen bg-black">
            {/* Hero Section */}
            {page.hero.image ? (
                <div className="relative w-full flex items-center justify-center bg-black text-white mt-20">
                    <img
                        src={page.hero.image}
                        alt={page.hero.heading}
                        className="w-xl h-96 object-cover "
                    />
                    <div className="flex flex-col justify-center px-20 pb-18 max-w-3xl">
                        <h1 className="text-white text-4xl md:text-6xl font-semibold mb-10 mt-12">{page.hero?.heading}</h1>
                        <p className="text-lg">{page.hero?.description}</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-center px-70 pt-40 space-y-10 ">
                    <h1 className="text-8xl font-semibold text-white ">{page.hero.heading}</h1>
                    <p className="text-2xl">{page.hero.description}</p>
                </div>
            )}

 
      {/* Cards Section */}
      <div className="bg-black py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-10">Explore more</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardSection.map((card, index) => (
            <div
              key={index}
              className="bg-[#1F1E1E] p-6 rounded-xl shadow-lg flex flex-col justify-between transition-shadow duration-300"
            >
              <div>
                <span className="block h-1 w-10 bg-purple-600 my-6"></span>
                <p className="text-sm font-semibold text-white mb-7">{card.title}</p>

                <div className="group relative h-40 overflow-hidden">
                  {/* Heading */}
                  <h3
                    className="text-3xl text-white font-semibold mb-4 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0 group-hover:delay-0 group-hover:not-hover:delay-100"
                  >
                    {card.heading}
                  </h3>

                  {/* Description (hidden initially) */}
                  <p
                    className="absolute inset-0 flex items-center justify-center text-gray-300 
               opacity-0 translate-y-1/2 transition-all duration-500 
               group-hover:opacity-100 group-hover:translate-y-0"
                  // className="absolute text-gray-300 opacity-0 translate-y-1/2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-300 group-hover:not-hover:delay-0"
                  >
                    {card.description}
                  </p>
                </div>

              </div>

              <div className='space-x-3 flex items-center cursor-pointer' >
                <a href="" className='text-white font-semibold text-lg'>Read more</a>
                <button className="cursor-pointer relative h-[25px] w-[25px] overflow-hidden bg-purple-600 
                 text-white font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-purple-800 before:transition-all before:duration-500 hover:before:w-full">
                  <span className="relative z-10 text-xl top-[-2px]">&gt;</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Card2 Section */}
      <div className=" max-w-7xl my-4 mx-auto px-5 py-16  grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      {/* Awards Section */}
      <h1 className="text-5xl font-semibold ml-15 mb-10 mt-15">Awards and recognition</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 mb-40 ml-6 mr-6">
        {cards.map((cardId, index) => {
          const award = awardsData[index]; // get title & description from awardsData
          return (
            <div
              key={cardId}
              className="group relative w-full h-[200px] overflow-hidden "
              style={{
                backgroundImage: `url(${getImage(cardId)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Heading */}
              <h2
                className="absolute bottom-5 left-5 text-xl text-white font-semibold transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0"
                style={{ fontFamily: "'Merriweather', serif", fontWeight: 300 }}
              >
                {award.title}
              </h2>

              {/* Hidden content */}
              <div className="absolute inset-0 flex flex-col items-start justify-start p-8 opacity-0 translate-y-full transition-all duration-500 delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-white text-md">
                  {award.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>


      {/* footer section */}
      <Footer />
      </div>
    );
}

export default Page;
