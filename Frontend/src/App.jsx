import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // <-- Import Framer Motion
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CardsDetails from "./components/CardsDetails";
import AIsection from "./components/AIsection";
import ValueSection from "./components/ValueSection";
import CarouselDetails from "./components/CarouselDetails";
import AwardSection from "./components/AwardSection";
import StickyImageScroll from "./components/StickyImageScroll ";
import NewsData from "./components/NewsData";
import Page from "./components/Page";
import Footer from "./components/Footer";
import DynamicCard from "./components/DynamicCard";
// import DP1 from "./DynamicPages/DP1";

const pageVariants = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: "-100%",
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// Create a component that wraps DP1 with the animation
const AnimatedDP1 = ({ children }) => (
  <AnimatePresence mode="wait">
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {/* <DP1 /> */}
      {children}
    </motion.div>
  </AnimatePresence>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <CardsDetails />
            <AIsection />
            <ValueSection />
            <CarouselDetails />
            <AwardSection />
            <StickyImageScroll />
            <NewsData />
          </>
        ),
      },

      {
        path: "cards/:id",
        element: (
          <AnimatedDP1>
            <DynamicCard />
          </AnimatedDP1>
        )
      },

      {
        path: ":category/:slug",
        element: (
          <AnimatedDP1>
            <Page />
          </AnimatedDP1>
        )
      }

    ]
  }
]);

function App() {
  return (
    <div className="bg-black">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;