import dotenv from "dotenv";
import connectDB from "./utils/db.js"; // use your existing connectDB
import { Page } from "./models/page.model.js";
import { Card } from "./models/card.model.js";


dotenv.config();

const seedPages = async () => {
  try {
    await connectDB(); // ✅ reuse your existing DB connection

    // Clear old data
    await Page.deleteMany();
    console.log("🧹 Old pages removed");

    await Card.deleteMany();
    console.log("🧹 Old cards removed");


    // Insert new data
    const pages = [
      {
        title: "About",
        category: "about",
        slug: "about",
        hero: {
          image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-About-us?ts=1758701709378&dpr=off",
          heading: "360° value is at the heart of our business",
          description:
            "Every day, the people of Accenture embrace change and create value for all our stakeholders, in every part of the world—we call it 360° value.",
        },
      },

      {
        title: "Services",
        category: "services",
        slug: "services",
        hero: {
          image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Woman-in-front-of-projector-hi-res-2%3Arad-3x2?ts=1754596453836&fit=constrain&qlt=40&dpr=off",
          heading: "Reinvent what your business could be",
          description:
            "Our wide range of capabilities, ecosystem partnerships and unmatched industry expertise can help your business become the next best version of itself.",
        },
      },

      {
        title: "Careers",
        category: "careers",
        slug: "careers",
        hero: {
          //   image: "https://picsum.photos/1200/600?random=3",
          heading: "Work at the heart of change",
          description:
            "This is a place to grow, learn and connect. Everything that makes you who you are is welcome here.",
        },
      },

      {
        title: "Cloud",
        category: "services",
        slug: "cloud",
        hero: {
          image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-cloud-illustration-hero-image-2?ts=1757637645249&&fmt=webp-alpha&dpr=off",
          heading: "Cloud consulting services",
          description:
            "AI at scale depends on cloud at scale. Unlock cloud's true potential by modernizing and reframing it as the engine of AI, innovation and growth.",
        },

      },


      {
        title: "Cybersecurity",
        category: "services",
        slug: "cybersecurity",
        hero: {
          image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-security-index-illustration-hero-image-1?ts=1757928103398&&fmt=webp-alpha&dpr=off",
          heading: "Cybersecurity consulting",
          description:
            "De-risk tomorrow by boosting cybersecurity today. Infuse cybersecurity into your strategy and ecosystem to protect value, help prevent threats and build trust as you grow.",
        },

      },


      {
        title: "Managed Services",
        category: "services",
        slug: "managed-services",
        hero: {
          image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-supply-chain-management-and-operations-index-illustration-hero-image?ts=1757671570184&fit=constrain&dpr=off",
          heading: "Managed services",
          description:
            "As organizations strive to optimize cost and accelerate growth, managed services, including business process services (BPS), can help to better prepare them to reinvent operations and drive holistic value at scale.",
        },

      },


      {
        title: "Learning",
        category: "services",
        slug: "learning",
        hero: {
          image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Education-Services-Hero-Image?ts=1757559658621&&fmt=webp-alpha&dpr=off",
          heading: "Digital learning solutions",
          description:
            "Become a talent creator. While technology plays a key role in business reinvention, it’s your people who determine its success. Accenture LearnVantage helps you build the skills they need, and you want, to grow faster.",
        },

      },


      {
        title: "Aerospace and Defense",
        category: "industries",
        slug: "aerospace-and-defense",
        hero: {
          image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-aerospace-defense-index-illustration-hero-image?ts=1757568103272&&fmt=webp-alpha&dpr=off",
          heading: "Aerospace consulting",
          description:
            "Navigate headwinds in Aerospace and Defense. From economic uncertainty, supply chain disruptions and skill gaps, the Aerospace and Defense Industry is being challenged. The key is to have a digital-first mindset.",
        },

      },

      {
        title: "Automotive",
        category: "industries",
        slug: "automotive",
        hero: {
          image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-automotive-index-illustration-hero-image?ts=1757664123224&fmt=webp-alpha&wid=1200&fit=constrain&dpr=off",
          heading: "Automotive consulting",
          description:
            "The traditional automotive industry has reached a crossroads. We are now operating in a mobility ecosystem, shifting into the next iteration of automotive. To move forward, it's time to embrace the ecosystem, collaborate beyond industry lines, and find new ways of innovating and partnering for success.",
        },

      },


      {
        title: "Banking",
        category: "industries",
        slug: "banking",
        hero: {
          image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-banking-index-index-illustration-hero-image-1?ts=1758617705421&&fmt=webp-alpha&dpr=off",
          heading: "Financial services consulting",
          description:
            "Build the next generation of Banking. Technology has changed the way people and businesses bank, and traditional strategies no longer work. Now is the time for bold new approaches to intensifying disruption.",
        },

      },

    ];

    const cards = [

      {
        title: 'CASE STUDY',
        heading: "Accenture x NFL: Key Points",
        description1: "The NFL's gameplan: reinventing the future of football",
        description2: [
          "Accenture's campaign uses shifting goalposts to visualize reinvention during the NFL's highest-viewership cultural moments.",
          "The sponsorship of NFL International Games strengthens Accenture as a global business and technology partner.",
          "Building on last year's 'The Pass,'. the campaign aims to maintain continuity and expand its reach across sports and markets."
        ],
        imageUrl: "https://dynamicmedia.accenture.com/is/image/accenture/Glance-Image0600x848-POV-Function%3Arad-card-full?ts=1743029753430&fit=constrain&dpr=off",
        hoverText: "We helped the NFL transform how it uses data to drive better decision-making and grow the game internationally.",
        hero: {
          image: "https://newsroom.accenture.com/news/2025/media_19c2ba955be14a5decf73d3a8737ca3088bc456cc.png?width=750&format=png&optimize=medium",
          heading: "What Agencies Can Learn from Accenture",
          description:
            "For agencies, Accenture and the NFL present a case study in how a consulting brand can translate abstract services into visual storytelling. Metaphors work best when they turn intangible services, like reinvention, into universally understood visuals. Sponsorship announcements gain more impact when paired with culturally relevant media events. Consistent campaigns across multiple seasons strengthen recall and credibility for both brand and agency partners.",
        },
      },

      {
        title: 'RESEARCH REPORT',
        heading: "Accenture Technology Vision 2025",
        description1: "Powered for Change 2025",
        description2: [
          "Now in its 25th year, the Accenture Technology Vision 2025 explores how the future is being shaped by AI-powered autonomy.",
          "As AI diffusion accelerates across the enterprise and society at a rate that is faster than any prior technology.",
          "69% of executives believe it brings new urgency to reinvention and how technology systems and the processes it enables are designed, built and operated."
        ],
        imageUrl: "https://dynamicmedia.accenture.com/is/image/accenture/State-of-Cybersecurity-SkimGlance-600x848%3Arad-card-full?ts=1751957996678&fit=constrain&dpr=off",
        hoverText: "This year's Powered for Change research shows how to make progress in industrial decarbonization, by scaling net-zero infrastructure rapidly and cost-effectively by applying a multigenerational approach.",
        hero: {
          image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Powered-for-Change-II-SS-Image-1200x628%3Asocial-thumbnail-landscape?ts=1758200112084&qlt=60&dpr=off",
          heading: "What Agencies Can Learn from Accenture",
          description:
            "For agencies, Accenture and the NFL present a case study in how a consulting brand can translate abstract services into visual storytelling. Metaphors work best when they turn intangible services, like reinvention, into universally understood visuals. Sponsorship announcements gain more impact when paired with culturally relevant media events. Consistent campaigns across multiple seasons strengthen recall and credibility for both brand and agency partners.",
        },
      },

      {
        title: 'RESEARCH REPORT',
        heading: "Reinventing enterprise models in the age of generative AI",
        description1: "Learning, reinvented. Accelerating human-AI collaboration",
        description2: [
          "Generative AI (gen AI) is more than a new technology—it represents a fundamentally different way of working.",
          "97% of executives believe gen AI will transform their company and industry. 93% say their gen AI investments are outperforming other strategic areas.",
          "Organizations must reimagine not only how tasks are performed, but how new capabilities can be scaled to reinvent work across the enterprise."
        ],
        imageUrl: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Edge-AI-Future-Manufacturing-Glance-600x424%3Arad-card-half?ts=1732553434618&fit=constrain&dpr=off",
        hoverText: "Humans and Al must learn and adapt together through continuous co-learning. Yet only 11% of organizations are currently equipped to do so effectively, creating an urgent gap and a significant opportunity.",
        hero: {
          image: "https://newsroom.accenture.com/news/2023/media_11167c9ce2407f3fb74c434c6ab867291e0880131.jpg?width=1200&format=pjpg&optimize=medium",
          heading: "Progress (and pitfalls) so far",
          description:
            "Despite strong momentum around gen AI pilots: 82% of workers believe they already understand gen AI technology and 94% are confident they can develop the skills needed—yet 63% of employers still cite skill gaps as a major hurdle. Leadership trust gaps are emerging, as many executives underestimate how prepared (and eager) employees are to adopt gen AI. Misaligned organizational structures loom larger than many realize. Simply layering gen AI on existing workflows will not unlock its full potential.",
        },
      },

      {
        title: 'RESEARCH REPORT',
        heading: "State of Cybersecurity Resilience 2025",
        description1 : "4 critical actions to take now to strengthen your cyber defenses",
        description2: [
          "The cyber threat landscape is being reshaped not only by technology, but by geopolitics.",
          "Heightened global tensions, changing trade dynamics and shifting regulations are compounding cyber exposure.",
          "As companies respond by adjusting supply chains and data strategies, many are unknowingly introducing new cyber risks —especially when security assessment, compliance and risk protocols fail to keep pace."
        ],
        imageUrl: "https://dynamicmedia.accenture.com/is/image/accenture/LearningReinvented-New-GlanceSkim-600x848%3Arad-card-full?ts=1758200063228&fit=constrain&dpr=off",
        hoverText: "Cyber risks are growing faster than ever, outpacing security efforts. How do you get ahead of these threats? In this year's State of Cybersecurity Resilience, learn the steps to build resilience as you embrace Al transformation.",
        hero: {
          image: "https://newsroom.accenture.com/news/2025/media_19c2ba955be14a5decf73d3a8737ca3088bc456cc.png?width=750&format=png&optimize=medium",
          heading: "Actions to strengthen AI security",
          description:
            "Establish clear accountability and align AI security with regulatory and business objectives.Traditional security alone is insufficient. True cyber resilience in an AI-driven world requires embedding advanced security controls into the Digital Core. As AI adoption accelerates, threat actors are leveraging adversarial AI techniques like data poisoning, model inversion and automated prompt injections.",
        },

      },

      {
        title: 'RESEARCH REPORT',
        heading: "Are you ready for autonomous supply chains?",
        // description1 : "4 critical actions to take now to strengthen your cyber defenses",
        // description2: [
        //   "The cyber threat landscape is being reshaped not only by technology, but by geopolitics.",
        //   "Heightened global tensions, changing trade dynamics and shifting regulations are compounding cyber exposure.",
        //   "As companies respond by adjusting supply chains and data strategies, many are unknowingly introducing new cyber risks —especially when security assessment, compliance and risk protocols fail to keep pace."
        // ],
        imageUrl: "https://dynamicmedia.accenture.com/is/image/accenture/EMEA-Reinventing-Industries-Glance-600x848%3Arad-card-full?ts=1748537171862&fit=constrain&dpr=off",
        hoverText: "Companies are seeing diminishing returns from classic business efficiency strategies. To create value, supply chains need to be fast, agile and sustainable, not just cost-efficient. Could Al- powered autonomy be the key to unlocking this?",
        // hero: {
        //   image: "https://newsroom.accenture.com/news/2025/media_19c2ba955be14a5decf73d3a8737ca3088bc456cc.png?width=750&format=png&optimize=medium",
        //   heading: "Actions to strengthen AI security",
        //   description:
        //     "Establish clear accountability and align AI security with regulatory and business objectives.Traditional security alone is insufficient. True cyber resilience in an AI-driven world requires embedding advanced security controls into the Digital Core. As AI adoption accelerates, threat actors are leveraging adversarial AI techniques like data poisoning, model inversion and automated prompt injections.",
        // },
      },

      {
        title: 'RESEARCH REPORT',
        heading: "Trying to scale AI? You're going to need to think big. And act bigger.",
        imageUrl: "https://dynamicmedia.accenture.com/is/image/accenture/Hero-600x424%3Arad-card-half?ts=1759400239067&fit=constrain&dpr=off",
        hoverText: "The race to reinvent with generative Al is well underway. The time to determine if you're leading or being left behind is now. Discover the front-runners' guide to scaling Al."
      },

      {
        title: 'RESEARCH REPORT',
        heading: "Resilience Redefined: From readiness to reinvention",
        imageUrl: "https://dynamicmedia.accenture.com/is/image/accenture/Noli-GlanceSkim-600x424%3Arad-card-half?ts=1758200035469&fit=constrain&dpr=off",
        hoverText: "Resilience appears to be rebounding to post-pandemic highs, but the gains mask a deeper vulnerability. Increased volatility requires adaptative resilience for competitiveness and growth."
      },

      {
        title: 'RESEARCH REPORT',
        heading: "How to win hearts, minds—and algorithms",
        imageUrl: "https://dynamicmedia.accenture.com/is/image/accenture/GS-The-Front-Runners-600x848%3Arad-card-full?ts=1751987002836&fit=constrain&dpr=off",
        hoverText: "Al is evolving from a useful tool to a trusted guide, loyal companion and second self. Building resilient relationships between consumers, brands and Al in times of uncertainty is essential to remain seen and relevant."
      },
    ];

    await Page.insertMany(pages);
    console.log("🌱 Pages seeded successfully");

    await Card.insertMany(cards);
    console.log("🌱 Cards seeded successfully");

    process.exit(); // exit when done
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

seedPages();
