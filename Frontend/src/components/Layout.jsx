// import React from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Header from "./Header";

// const Layout = () => {
//   const location = useLocation();

//   // Check if the path matches a dynamic page route
//   const isDP1 = /^\/[^/]+\/[^/]+$/.test(location.pathname);
//   // Explanation:
//   // ^\/        -> starts with a slash
//   // [^/]+      -> matches first segment (category)
//   // \/         -> another slash
//   // [^/]+$     -> matches second segment (slug) till the end

//   return (
//     <>
//       <Header />
//       <main className={isDP1 ? "pt-20" : ""}>
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default Layout;



import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; // ⬅️ import it
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
};

const Layout = () => {
  const location = useLocation();

  // Detect if current route is a dynamic page
  const isDP1 = /^\/[^/]+\/[^/]+$/.test(location.pathname);

  return (
    <>
      <Header />
      <main className={isDP1 ? "pt-20" : ""}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
};

export default Layout;

