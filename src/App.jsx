// import React, { useRef, useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import "./App.css";
// import Hero from "./Hero/Hero";
// import { useGlobalContext } from "./context";
// import About from "./About/About";
// import Loading from "./Loading/Loading";
// import Domain from "./Domain/Domain";
// import Prizes from "./Prizes/Prizes";
// import Timeline from "./Timeline/Timeline";
// import Footer from "./Footer/Footer";
// import FAQ from "./FAQ/FAQ";
// import Partners from "./Partners/Partners";
// import VIP from "./VIP/VIP";
// // import ProblemStatement from "./ProblemStatement/ProblemStatement";
// import Track from "./Track/Track";
// // import DigitalBadge from "./DigitalBadge/DigitalBadge";

// const MainPage = ({ isLoaded }) => {
//   // const [team, setTeam] = useState(0);
//   return (
//     <>
//       <Hero isLoaded={isLoaded} />
//       {/* <DigitalBadge team={team} setTeam={setTeam} /> */}
//       <About />
//       <Timeline />
//       <Domain />
//       <Track />
//       {/* <ProblemStatement /> */}
//       <Prizes />
//       <VIP />
//       {/* <Judges />
//     <Mentors /> */}
//        <Partners /> 
//       <FAQ />
//       <Footer />
//     </>
//   );
// };

// const RedirectToGithubForm = () => {
//   useEffect(() => {
//     window.location.href = "https://forms.gle/kLF7RepkvY5mK6VB8";
//   }, []);

//   return null;
// };

// const RedirectToPSForm = () => {
//   useEffect(() => {
//     window.location.href = "https://forms.gle/55UkjabJhEPYY4bn7";
//   }, []);

//   return null;
// };

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const checkIfLoaded = () => {
//       if (document.readyState === "complete") {
//         // DOM and resources (including images) are fully loaded
//         setIsLoaded(true);
//       } else {
//         // Fallback: add an event listener to handle when loading is complete
//         window.addEventListener("load", () => setIsLoaded(true));
//       }
//     };

//     checkIfLoaded();

//     return () => {
//       window.removeEventListener("load", () => setIsLoaded(true));
//     };
//   }, []);

//   const windowRef = useRef(null);
//   const { setWindowSize, setMobile } = useGlobalContext();

//   useEffect(() => {
//     const updateSize = () => {
//       if (windowRef.current) {
//         setWindowSize({
//           width: windowRef.current.offsetWidth,
//           height: windowRef.current.offsetHeight,
//         });
//         if (
//           windowRef.current.offsetWidth < 768 ||
//           windowRef.current.offsetHeight * 1.5 > windowRef.current.offsetWidth
//         ) {
//           setMobile(true);
//         } else {
//           setMobile(false);
//         }
//       }
//     };

//     updateSize();
//     window.addEventListener("resize", updateSize);

//     return () => window.removeEventListener("resize", updateSize);
//   }, [setMobile, setWindowSize]);

//   return (
//     <Router>
//       <div className="App font-inter min-h-dvh min-w-full">
//         <div
//           className="h-dvh w-dvw fixed top-0 left-0 pointer-events-none opacity-0 z-[-1000]"
//           ref={windowRef}
//         ></div>
//         <Loading isLoaded={isLoaded} />
//         <div className={isLoaded ? "" : "hidden pointer-events-none fixed"}>
//           <Routes>
//             <Route path="/" element={<MainPage isLoaded={isLoaded} />} />
//             <Route path="/githubform" element={<RedirectToGithubForm />} />
//             <Route path="/psform" element={<RedirectToPSForm />} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useRef, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Hero from "./Hero/Hero";
import { useGlobalContext } from "./context";
import About from "./About/About";
import Loading from "./Loading/Loading";
import Domain from "./Domain/Domain";
import Prizes from "./Prizes/Prizes";
import Timeline from "./Timeline/Timeline";
import Footer from "./Footer/Footer";
import FAQ from "./FAQ/FAQ";
import Partners from "./Partners/Partners";
import VIP from "./VIP/VIP";
import ProblemStatement from "./ProblemStatement/ProblemStatement";
import Track from "./Track/Track";



/* ================= POPUP ================= */
const Popup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // instant show
  }, []);

  if (!show) return null;

  return (
    <div style={styles.overlay}>
      {/* 🔥 ALL ANIMATIONS */}
      <style>
        {`
        @keyframes popupFade {
          from {
            opacity: 0;
            transform: scale(0.6);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes glowPulse {
          0% { text-shadow: 0 0 5px rgba(255,0,0,0.4); }
          50% { text-shadow: 0 0 20px rgba(255,0,0,0.9); }
          100% { text-shadow: 0 0 5px rgba(255,0,0,0.4); }
        }
      `}
      </style>

      <div style={styles.box}>
        <span style={styles.close} onClick={() => setShow(false)}>
          &times;
        </span>

        {/* 🔥 PREMIUM TEXT */}
        <h2 style={styles.heading}>
          <h2>Pls Note</h2>
</h2>

<p style={styles.subtext}>
  All selected teams are requested to check the mail sent to them.
</p>

<p style={{ marginTop: "10px", color: "#ff6b6b", fontWeight: "600" }}>
  Please accept the RSVP as soon as possible.
</p>

<p style={{ marginTop: "10px", fontSize: "13px", color: "#bbb" }}>
  Failure to respond may result in missing further updates regarding the hackathon.
</p>
      
        
      </div>
    </div>
  );
};

/* ================= STYLES ================= */
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    backdropFilter: "blur(10px)",
  },

  box: {
    background: "#0a0a0a",
    color: "white",
    padding: "40px 25px",
    borderRadius: "18px",
    width: "380px",
    textAlign: "center",
    position: "relative",

    animation: "popupFade 0.5s ease-out",

    boxShadow:
      "0 0 15px rgba(255,0,0,0.5), 0 0 40px rgba(255,0,0,0.3)",

    border: "1px solid rgba(255,255,255,0.08)",
  },

  close: {
    position: "absolute",
    top: "12px",
    right: "15px",
    fontSize: "22px",
    cursor: "pointer",
    color: "#aaa",
  },

  heading: {
    fontSize: "24px",
    fontWeight: "800",
    marginBottom: "12px",

    background: "linear-gradient(90deg, #fff, #ff4d4d, #fff)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

    animation: "shimmer 3s linear infinite, glowPulse 2s ease-in-out infinite",
  },

  subtext: {
    color: "#bbb",
    fontSize: "14px",
    marginBottom: "22px",
    lineHeight: "1.5",
  },

 primary: {
  padding: "12px 22px",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(135deg, #ff1f1f, #ff6b6b)",
  color: "white",
  cursor: "pointer",
  fontWeight: "700",
  fontSize: "14px",
  marginTop: "20px", // ✅ fixed
  boxShadow: "0 0 15px rgba(255,50,50,0.7)",
  transition: "0.3s",
},
};

/* ================= MAIN PAGE ================= */
const MainPage = ({ isLoaded }) => {
  
  return (   <>
      <Hero isLoaded={isLoaded} />
     
      <About />
      <Timeline />
      <Domain />
      <Track />
      <ProblemStatement/>
      <Prizes />
      <VIP />
      <Partners />
      <FAQ />
      <Footer />
    </>
  );
};

/* ================= REDIRECTS ================= */
const RedirectToGithubForm = () => {
  useEffect(() => {
    window.location.href = "https://forms.gle/kLF7RepkvY5mK6VB8";
  }, []);
  return null;
};

const RedirectToPSForm = () => {
  useEffect(() => {
    window.location.href = "https://itsahack.devfolio.co/";
  }, []);
  return null;
};

/* ================= APP ================= */
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkIfLoaded = () => {
      if (document.readyState === "complete") {
        setIsLoaded(true);
      } else {
        window.addEventListener("load", () => setIsLoaded(true));
      }
    };

    checkIfLoaded();

    return () => {
      window.removeEventListener("load", () => setIsLoaded(true));
    };
  }, []);

  const windowRef = useRef(null);
  const { setWindowSize, setMobile } = useGlobalContext();

  useEffect(() => {
    const updateSize = () => {
      if (windowRef.current) {
        setWindowSize({
          width: windowRef.current.offsetWidth,
          height: windowRef.current.offsetHeight,
        });

        if (
          windowRef.current.offsetWidth < 768 ||
          windowRef.current.offsetHeight * 1.5 >
            windowRef.current.offsetWidth
        ) {
          setMobile(true);
        } else {
          setMobile(false);
        }
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, [setMobile, setWindowSize]);

  return (
    <Router>
      <div className="App font-inter min-h-dvh min-w-full">

        {/* 🔥 PREMIUM POPUP */}
        <Popup />

        <div
          className="h-dvh w-dvw fixed top-0 left-0 pointer-events-none opacity-0 z-[-1000]"
          ref={windowRef}
        ></div>

        <Loading isLoaded={isLoaded} />

        <div className={isLoaded ? "" : "hidden pointer-events-none fixed"}>
          <Routes>
            <Route path="/" element={<MainPage isLoaded={isLoaded} />} />
            <Route path="/githubform" element={<RedirectToGithubForm />} />
            <Route path="/psform" element={<RedirectToPSForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;