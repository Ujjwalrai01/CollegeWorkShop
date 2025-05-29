// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const faqs = [
//   {
//     question: "What is JobLeads?",
//     answer:
//       "JobLeads is a comprehensive job search platform that helps professionals discover opportunities and connect with headhunters worldwide.",
//   },
//   {
//     question: "How does JobLeads help me land a job?",
//     answer:
//       "We provide targeted job matching, resume optimization, headhunter connections, and personalized career coaching to accelerate your job search.",
//   },
//   {
//     question: "What does the free JobLeads Resume Review include?",
//     answer:
//       "Our free resume review includes professional feedback on formatting, content optimization, keyword analysis, and actionable improvement recommendations.",
//   },
//   {
//     question: "What is the JobLeads Job Search Assessment?",
//     answer:
//       "A comprehensive evaluation of your job search strategy, including profile optimization, application approach, and interview preparation guidance.",
//   },
// ];

// const FAQSection = () => {
//   const [expandedFaq, setExpandedFaq] = useState(null);

//   return (
//     <section className="py-20 lg:py-28 bg-white" id="faq">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900">FAQs</h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Everything you need to know about using JobLeads.
//           </p>
//         </div>

//         {/* FAQ List */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
//               <button
//                 className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
//                 onClick={() =>
//                   setExpandedFaq(expandedFaq === index ? null : index)
//                 }
//               >
//                 <span className="text-lg font-medium text-gray-900">
//                   {faq.question}
//                 </span>
//                 <ChevronDown
//                   className={`h-5 w-5 text-gray-500 transform transition-transform ${
//                     expandedFaq === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {expandedFaq === index && (
//                 <div className="px-6 pb-4">
//                   <p className="text-gray-700">{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;








// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import FAQImage from "../assets/Images/FAQ.png"; 

// const faqs = [
//   {
//     question: "What is JobLeads?",
//     answer:
//       "JobLeads is a comprehensive job search platform that helps professionals discover opportunities and connect with headhunters worldwide.",
//   },
//   {
//     question: "How does JobLeads help me land a job?",
//     answer:
//       "We provide targeted job matching, resume optimization, headhunter connections, and personalized career coaching to accelerate your job search.",
//   },
//   {
//     question: "What does the free JobLeads Resume Review include?",
//     answer:
//       "Our free resume review includes professional feedback on formatting, content optimization, keyword analysis, and actionable improvement recommendations.",
//   },
//   {
//     question: "What is the JobLeads Job Search Assessment?",
//     answer:
//       "A comprehensive evaluation of your job search strategy, including profile optimization, application approach, and interview preparation guidance.",
//   },
// ];

// const FAQSection = () => {
//   const [expandedFaq, setExpandedFaq] = useState(null);

//   return (
//     <section className="py-20 lg:py-28 bg-white dark:bg-gray-900" id="faq">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left: Image or Illustration */}
//         <div className="hidden md:block">
//           <img
//             src={FAQImage} // replace with your image
//             alt="FAQImage"
//             className=" inset-0 w-full h-full object-cover z-0"
//           />
//         </div>
//         {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-10" /> */}

//         {/* Right: FAQ Content */}
//         <div>
//           <div className="text-left mb-10">
//             <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">FAQs</h2>
//             <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
//               Everything you need to know about using JobLeads.
//             </p>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
//                 <button
//                   className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
//                   onClick={() =>
//                     setExpandedFaq(expandedFaq === index ? null : index)
//                   }
//                 >
//                   <span className="text-lg font-medium text-gray-900 dark:text-white">
//                     {faq.question}
//                   </span>
//                   <ChevronDown
//                     className={`h-5 w-5 text-gray-500 dark:text-gray-300 transform transition-transform ${
//                       expandedFaq === index ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <AnimatePresence>
//                   {expandedFaq === index && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="px-6 pb-4 overflow-hidden"
//                     >
//                       <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;





import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FAQImage from "../assets/Images/FAQ.png";

const faqs = [
  {
    question: "What is JobLeads?",
    answer:
      "JobLeads is a comprehensive job search platform that helps professionals discover opportunities and connect with headhunters worldwide.",
  },
  {
    question: "How does JobLeads help me land a job?",
    answer:
      "We provide targeted job matching, resume optimization, headhunter connections, and personalized career coaching to accelerate your job search.",
  },
  {
    question: "What does the free JobLeads Resume Review include?",
    answer:
      "Our free resume review includes professional feedback on formatting, content optimization, keyword analysis, and actionable improvement recommendations.",
  },
  {
    question: "What is the JobLeads Job Search Assessment?",
    answer:
      "A comprehensive evaluation of your job search strategy, including profile optimization, application approach, and interview preparation guidance.",
  },
];

const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <section className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden" id="faq">
      {/* Background Image */}
      {/* <img
        src={FAQImage}
        alt="FAQ background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      /> */}
      {/* Dark Overlay for readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-10" /> */}

      {/* FAQ Content */}
      <div className="relative z-20 max-w-4xl w-full px-6 text-blue-900 text-center">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">FAQs</h2>
          <p className="mt-4 text-lg md:text-xl text-white">
            Everything you need to know about using JobLeads.
          </p>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-blue/20 bg-blue/10 backdrop-blur-sm rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-black/20 transition-colors"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-blue-600 transform transition-transform ${
                    expandedFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-white">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;





