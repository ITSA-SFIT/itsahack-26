// import React from "react";
// import title from "./../title.svg";

// const Content = () => {
//   return (
//     <div className="Front flex justify-center">
//       <div className="max-w-[30rem] flex flex-col items-center">
//         <h1 className="text-sm font-inter sm:mt-auto mt-8">ITSA PRESENTS</h1>
//         <img src={title} alt="ITSAHACK" className="lg:h-auto sm:h-24 h-20" />
//         <h3 className="text-md font-inter text-center p-2">
//           Welcome to ‘ITS-A-Hack’! Get ready to test your code, push boundaries,
//           and have some fun.
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default Content;
import React from "react";
import title from "./../ITSAHACK2.0.svg";

const Content = () => {
  return (
    <div className="Front flex justify-center">
      <div className="max-w-[30rem] flex flex-col items-center">
        <h1 className="text-sm font-inter sm:mt-auto mt-8">ITSA PRESENTS</h1>
        <div className="relative inline-block">
          <img 
            src={title} 
            alt="ITSAHACK" 
            className="lg:h-auto sm:h-24 h-20 animate-thunder" 
            style={{
              animation: 'thunder 4s ease-in-out infinite',
            }}
          />
        </div>
        <h3 className="text-md font-inter text-center p-2">
          Welcome to 'ITS-A-Hack'! Get ready to test your code, push boundaries,
          and have some fun.
        </h3>
      </div>
      <style jsx>{`
        @keyframes thunder {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.5));
          }
          25%, 75% {
            filter: drop-shadow(0 0 50px rgba(255, 255, 255, 1))
                    drop-shadow(0 0 100px rgba(255, 0, 0, 0.9));
          }
        }
      `}</style>
    </div>
  );
};

export default Content;
