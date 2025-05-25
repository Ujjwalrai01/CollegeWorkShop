// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ChevronDown, 
//   Github, 
//   Linkedin, 
//   Mail, 
//   Phone, 
//   Download, 
//   ExternalLink,
//   Trophy,
//   Moon,
//   Sun,
//   Code,
//   Database,
//   Globe,
//   Zap,
//   Shield,
//   AlertTriangle,
//   Film,
//   Star
// } from 'lucide-react';

// const Portfolio = () => {
//   const [darkMode, setDarkMode] = useState(true);
//   const [activeSection, setActiveSection] = useState('home');
//   const [typewriterText, setTypewriterText] = useState('');
//   const [showCursor, setShowCursor] = useState(true);

//   const fullText = "Hello, I'm Ujjwal Rai";

//   useEffect(() => {
//     let i = 0;
//     const timer = setInterval(() => {
//       if (i < fullText.length) {
//         setTypewriterText(fullText.slice(0, i + 1));
//         i++;
//       } else {
//         clearInterval(timer);
//         setTimeout(() => setShowCursor(false), 1000);
//       }
//     }, 100);

//     return () => clearInterval(timer);
//   }, []);

//   const projects = [
//     {
//       title: "City Reporter",
//       description: "Community Issue Reporting platform built during hackathon",
//       tech: ["React.js", "Tailwind CSS", "Framer Motion"],
//       icon: <Globe className="w-6 h-6" />,
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       title: "IDVerifyAI",
//       description: "AI-powered identity verification system",
//       tech: ["React.js", "Tailwind CSS", "AI/ML"],
//       icon: <Shield className="w-6 h-6" />,
//       color: "from-green-500 to-emerald-500"
//     },
//     {
//       title: "Disaster Management System",
//       description: "Emergency response and disaster coordination platform",
//       tech: ["React.js", "Node.js", "Real-time APIs"],
//       icon: <AlertTriangle className="w-6 h-6" />,
//       color: "from-red-500 to-pink-500"
//     },
//     {
//       title: "Netflix Clone",
//       description: "Full-featured streaming platform replica",
//       tech: ["React.js", "CSS3", "API Integration"],
//       icon: <Film className="w-6 h-6" />,
//       color: "from-purple-500 to-indigo-500"
//     },
//     {
//       title: "Movie Recommender App",
//       description: "Personalized movie recommendation engine",
//       tech: ["Python", "React.js", "Machine Learning"],
//       icon: <Star className="w-6 h-6" />,
//       color: "from-yellow-500 to-orange-500"
//     }
//   ];

//   const skills = [
//     { name: "JavaScript", level: 90, category: "Languages" },
//     { name: "Python", level: 80, category: "Languages" },
//     { name: "React.js", level: 95, category: "Libraries" },
//     { name: "Tailwind CSS", level: 90, category: "Libraries" },
//     { name: "Node.js", level: 75, category: "Languages" },
//     { name: "MongoDB", level: 70, category: "Databases" },
//     { name: "Git", level: 85, category: "Tools" },
//     { name: "Framer Motion", level: 80, category: "Libraries" }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1
//     }
//   };

//   const Navigation = () => (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 w-full z-50 backdrop-blur-lg ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           <motion.div 
//             className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
//             whileHover={{ scale: 1.05 }}
//           >
//             &lt;UR/&gt;
//           </motion.div>
          
//           <div className="hidden md:flex space-x-8">
//             {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
//               <motion.button
//                 key={item}
//                 onClick={() => setActiveSection(item.toLowerCase())}
//                 className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}
//                 whileHover={{ y: -2 }}
//                 whileTap={{ y: 0 }}
//               >
//                 {item}
//               </motion.button>
//             ))}
//           </div>

//           <motion.button
//             onClick={() => setDarkMode(!darkMode)}
//             className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-800'}`}
//             whileHover={{ rotate: 180 }}
//             transition={{ duration: 0.3 }}
//           >
//             {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//           </motion.button>
//         </div>
//       </div>
//     </motion.nav>
//   );

//   const HeroSection = () => (
//     <motion.section 
//       className={`min-h-screen flex items-center justify-center relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className={`absolute w-2 h-2 ${darkMode ? 'bg-blue-400/20' : 'bg-blue-500/20'} rounded-full`}
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//             }}
//             animate={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//           />
//         ))}
//       </div>

//       <div className="text-center z-10 px-6">
//         <motion.div 
//           className={`font-mono text-lg mb-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`}
//           variants={itemVariants}
//         >
//           {typewriterText}
//           {showCursor && <span className="animate-pulse">|</span>}
//         </motion.div>
        
//         <motion.h1 
//           className={`text-6xl md:text-8xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
//           variants={itemVariants}
//         >
//           Frontend
//           <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//             {' '}Developer
//           </span>
//         </motion.h1>
        
//         <motion.p 
//           className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
//           variants={itemVariants}
//         >
//           Crafting Real-world Solutions, One Line of Code at a Time
//         </motion.p>
        
//         <motion.div 
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//           variants={itemVariants}
//         >
//           <motion.button
//             className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center gap-2"
//             whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setActiveSection('projects')}
//           >
//             <Code className="w-5 h-5" />
//             View My Work
//           </motion.button>
          
//           <motion.button
//             className={`px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-full font-semibold flex items-center justify-center gap-2 ${darkMode ? 'hover:bg-blue-500/10' : 'hover:bg-blue-50'}`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Download className="w-5 h-5" />
//             Download Resume
//           </motion.button>
//         </motion.div>
        
//         <motion.div
//           className="mt-16"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <ChevronDown className={`w-8 h-8 mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
//         </motion.div>
//       </div>
//     </motion.section>
//   );

//   const AboutSection = () => (
//     <motion.section 
//       className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.h2 
//           className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
//           variants={itemVariants}
//         >
//           About Me
//         </motion.h2>
        
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div variants={itemVariants}>
//             <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900/50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
//               <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                 Passionate Problem Solver
//               </h3>
//               <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                 Enthusiastic and detail-oriented junior frontend developer passionate about solving real-world problems 
//                 through technology. Skilled in building responsive web applications using React.js and Tailwind CSS.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <Trophy className="w-5 h-5 text-yellow-500" />
//                   <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
//                     Hackathon Winner - MIT MYSURU HACKVERSE 2025
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Zap className="w-5 h-5 text-blue-500" />
//                   <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
//                     GPA: 8.1 - Mechanical Engineering Student
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
          
//           <motion.div 
//             className="space-y-6"
//             variants={itemVariants}
//           >
//             <motion.div 
//               className={`p-6 rounded-xl ${darkMode ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50' : 'bg-gradient-to-r from-blue-50 to-purple-50'} border ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}
//               whileHover={{ scale: 1.02 }}
//             >
//               <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
//                 Education
//               </h4>
//               <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                 Bachelor of Engineering in Mechanical Engineering<br/>
//                 JSS Science and Technology University, Mysuru (2023-2027)
//               </p>
//             </motion.div>
            
//             <motion.div 
//               className={`p-6 rounded-xl ${darkMode ? 'bg-gradient-to-r from-green-900/50 to-emerald-900/50' : 'bg-gradient-to-r from-green-50 to-emerald-50'} border ${darkMode ? 'border-green-800' : 'border-green-200'}`}
//               whileHover={{ scale: 1.02 }}
//             >
//               <h4 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
//                 Focus Areas
//               </h4>
//               <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                 Frontend Development, UI/UX Design, Responsive Web Applications, 
//                 Community Engagement Features
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );

//   const ProjectsSection = () => (
//     <motion.section 
//       className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.h2 
//           className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
//           variants={itemVariants}
//         >
//           Featured Projects
//         </motion.h2>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               className={`group relative overflow-hidden rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
//               variants={itemVariants}
//               whileHover={{ y: -10, rotateX: 5 }}
//               style={{ transformStyle: 'preserve-3d' }}
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
//               <div className="p-6">
//                 <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color} text-white mb-4`}>
//                   {project.icon}
//                 </div>
                
//                 <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                   {project.title}
//                 </h3>
                
//                 <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                   {project.description}
//                 </p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech) => (
//                     <span 
//                       key={tech}
//                       className={`px-3 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <motion.button
//                   className={`flex items-center gap-2 text-sm font-semibold ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
//                   whileHover={{ x: 5 }}
//                 >
//                   View Project <ExternalLink className="w-4 h-4" />
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );

//   const SkillsSection = () => (
//     <motion.section 
//       className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.h2 
//           className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
//           variants={itemVariants}
//         >
//           Skills & Technologies
//         </motion.h2>
        
//         <div className="grid md:grid-cols-2 gap-8">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
//               variants={itemVariants}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="flex justify-between items-center mb-3">
//                 <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                   {skill.name}
//                 </span>
//                 <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                   {skill.level}%
//                 </span>
//               </div>
              
//               <div className={`w-full bg-gray-200 rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
//                 <motion.div
//                   className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   transition={{ duration: 1, delay: index * 0.1 }}
//                 />
//               </div>
              
//               <div className="mt-2">
//                 <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
//                   {skill.category}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );

//   const ContactSection = () => (
//     <motion.section 
//       className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.h2 
//           className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
//           variants={itemVariants}
//         >
//           Let's Connect
//         </motion.h2>
        
//         <div className="grid md:grid-cols-2 gap-12">
//           <motion.div variants={itemVariants}>
//             <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//               Get In Touch
//             </h3>
//             <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//               Looking for a challenging role to apply my skills, grow as a developer, 
//               and contribute to meaningful projects in a fast-paced team environment.
//             </p>
            
//             <div className="space-y-4">
//               {[
//                 { icon: <Mail className="w-5 h-5" />, text: "urai31382@gmail.com", href: "mailto:urai31382@gmail.com" },
//                 { icon: <Phone className="w-5 h-5" />, text: "+91 7782895186", href: "tel:+917782895186" },
//                 { icon: <Linkedin className="w-5 h-5" />, text: "LinkedIn Profile", href: "http://linkedin.com/in/ujjwal-rai01" },
//                 { icon: <Github className="w-5 h-5" />, text: "GitHub Profile", href: "#" }
//               ].map((contact, index) => (
//                 <motion.a
//                   key={index}
//                   href={contact.href}
//                   className={`flex items-center gap-4 p-4 rounded-xl ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-colors`}
//                   whileHover={{ x: 10 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
//                     {contact.icon}
//                   </div>
//                   <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
//                     {contact.text}
//                   </span>
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
          
//           <motion.div 
//             className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
//             variants={itemVariants}
//           >
// 98 }}
//               >
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
//       <Navigation />
      
//       <AnimatePresence mode="wait">
//         {activeSection === 'home' && <HeroSection key="hero" />}
//         {activeSection === 'about' && <AboutSection key="about" />}
//         {activeSection === 'projects' && <ProjectsSection key="projects" />}
//         {activeSection === 'skills' && <SkillsSection key="skills" />}
//         {activeSection === 'contact' && <ContactSection key="contact" />}
//       </AnimatePresence>
      
//       {activeSection === 'home' && (
//         <>
//           <AboutSection />
//           <ProjectsSection />
//           <SkillsSection />
//           <ContactSection />
//         </>
//       )}
      
//       {/* Footer */}
//       <footer className={`py-8 border-t ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//             © 2025 Ujjwal Rai. Crafted with ❤️ using React.js & Tailwind CSS
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;