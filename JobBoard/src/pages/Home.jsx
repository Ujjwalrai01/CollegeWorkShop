import React, { useState } from "react";
import FAQSection from "../component/FAQSection";
import JobSeeker from "../assets/Images/jobSeeker.png";
import { useNavigate } from "react-router-dom";
// import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Menu,
  X,
  ChevronDown,
  Star,
  Users,
  Briefcase,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import nikeLogo from "../assets/Images/nike2.png";
import amazonLogo from "../assets/Images/amazon.png";
import appleLogo from "../assets/Images/apple.png";
import paypalLogo from "../assets/Images/paypal.png";
import microsoftLogo from "../assets/Images/microsoft.png";
import netflixLogo from "../assets/Images/netflix.png";
import visaLogo from "../assets/Images/visa.png";

const JobLeadsLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const companies = [
    { name: "Nike", logo: nikeLogo },
    { name: "Amazon", logo: amazonLogo },
    { name: "Apple", logo: appleLogo },
    { name: "Netflix", logo: netflixLogo },
    { name: "PayPal", logo: paypalLogo },
    { name: "Microsoft", logo: microsoftLogo },
    { name: "Visa", logo: visaLogo },
  ];

  const testimonials = [
    {
      name: "Siyabonga",
      initial: "S",
      text: "I am so impressed with all the advise I received from you. Honest, helpful and informative. I have learned a lot of things that I usually do or do not do when searching for a job that impacted negatively on my job search, and now I am all about changing my approach and strategy due to the help I have received from you!",
    },
    {
      name: "Rick",
      initial: "R",
      text: "Impressive. I was impressed with the speedy response I received. Process was easy and review straight to the point and clear what my next approach should be and how to go about it. Thank you, I'm sure I will notice a huge improvement shortly.",
    },
  ];

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

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">
                job<span className="text-blue-400">⫶⫶⫶</span>board
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Jobs
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Headhunters
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Resume
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Coaching
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                className="border border-gray-600 text-white px-4 py-2 rounded-lg hover:border-gray-500 transition-colors"
                onClick={() => navigate("/signin")}
              >
                Sign up now
              </button>
              <button
                className="text-gray-300 hover:text-white px-4 py-2 transition-colors"
                onClick={() => navigate("/signin")}
              >
                Log in
              </button>
              {/* <button className="text-gray-300 hover:text-white px-2 py-2 flex items-center">
                EN <ChevronDown className="ml-1 h-4 w-4" />
              </button> */}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                Jobs
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                Headhunters
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                Resume
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                Coaching
              </a>
              <div className="pt-4 pb-3 border-t border-slate-700">
                <button
                  className="w-full border border-gray-600 text-white px-4 py-2 rounded-lg mb-2"
                  onClick={() => navigate("/signin")}
                >
                  Sign up now
                </button>
                <button
                  className="w-full text-gray-300 px-4 py-2"
                  onClick={() => navigate("/signin")}
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {/* <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-900"></div>
        <img
          src={JobSeeker}
          alt="Hero Illustration"
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-slate-900/80 to-slate-700 z-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-7xl font-bold mb-6">
            Land a better job
          </h1>
          <h2 className="text-3xl lg:text-5xl font-bold text-blue-400 mb-12 italic">
            faster!
          </h2>

          <div className="mb-16">
            <p className="text-xl lg:text-2xl text-gray-300 mb-4">
              Get more <span className="text-blue-400">tailored guidance</span>
            </p>
            <p className="text-xl lg:text-2xl text-gray-300 mb-4">
              <span className="text-white font-semibold">
                headhunter contacts
              </span>
            </p>
            <p className="text-xl lg:text-2xl text-gray-300">
              <span className="text-blue-400">confidence</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <button
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105"
              onClick={() => navigate("/signin")}
            >
              Sign up for free
            </button>
            <button className="w-full sm:w-auto border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Free Resume Review
            </button>
          </div>
        </div>
      </section> */}
      {/* Hero Section */}
<section className="relative py-24 lg:py-40 overflow-hidden font-sans">
  {/* Background Layers */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] z-0" />
  <img
    src={JobSeeker}
    alt="Hero Illustration"
    className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-slate-900/80 to-purple-700/40 z-0" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 -mt-18">
    <h1 className="text-4xl lg:text-7xl font-extrabold text-white drop-shadow-xl mb-6 leading-tight">
      <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
        Land a better job
      </span>
    </h1>
    <h2 className="text-3xl lg:text-5xl font-bold text-blue-300 italic mb-12 tracking-tight drop-shadow-md">
      faster!
    </h2>

    <div className="mb-16 space-y-3">
      <p className="text-xl lg:text-2xl text-slate-300">
        Get more <span className="text-blue-400 font-medium">tailored guidance</span>
      </p>
      <p className="text-xl lg:text-2xl text-slate-300">
        <span className="text-white font-semibold">headhunter contacts</span>
      </p>
      <p className="text-xl lg:text-2xl text-slate-300">
        Boost your <span className="text-purple-400 font-medium">confidence</span> today
      </p>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
      <button
        className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
        onClick={() => navigate("/signin")}
      >
        🚀 Sign up for free
      </button>
      <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105">
        📄 Free Resume Review
      </button>
    </div>
  </div>
</section>


      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Since 2007, our mission has been to enable ~ seekers to{" "}
              <span className="text-blue-600">land a better job faster</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We have helped millions of JobLeaders worldwide to{" "}
              <span className="font-semibold">find more relevant jobs</span>,
              get{" "}
              <span className="font-semibold">more interview invitations</span>,
              and receive <span className="font-semibold">multiple offers</span>
              .
            </p>
          </div>

          {/* Company Logos */}
          <div className="mb-16">
            <p className="text-center text-gray-600 mb-8">
              JobLeaders have been hired by:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-12 w-20 text-2xl font-bold text-gray-400"
                >
                  {company.logo && company.logo.endsWith(".png") ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-10 object-contain"
                    />
                  ) : (
                    company.logo || company.name
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities Section */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <Target className="h-12 w-12 text-blue-500 mr-4" />
              <h3 className="text-2xl lg:text-3xl font-bold">
                Discover more opportunities than anywhere else
              </h3>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              <span className="font-semibold">Every job worldwide</span> in one
              place
            </p>
            <div className="bg-gray-100 rounded-lg p-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Community Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16">
            Join <span className="text-blue-600">8 Million</span> JobLeaders
            growing with us
          </h2>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                15,700+ reviews
              </p>
              <div className="flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold mr-2">
                  ★ Trustpilot
                </span>
              </div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-green-500 text-green-500"
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                2,000+ reviews
              </p>
              <div className="flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold mr-2">Google 4.5</span>
              </div>
              <div className="flex justify-center">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  style={{ clipPath: "inset(0 50% 0 0)" }}
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                165,000+ followers
              </p>
              <div className="flex items-center justify-center mb-4">
                <span className="text-blue-700 font-bold">LinkedIn</span>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm text-left"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-700 font-bold">
                      {testimonial.initial}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {testimonial.name}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transform transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}
       <FAQSection />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Tagline */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold mb-4">
                job<span className="text-blue-400">⫶⫶⫶</span>leads
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Land a better job faster
              </p>
              <div>
                <p className="text-sm font-semibold mb-3">Follow us</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    📺
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    💼
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    📷
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    👤
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    🐦
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ❌
                  </a>
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Customer reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers at JobLeads
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Site notice
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Free resume review
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Job search
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Headhunter matching
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Career Advice
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    JobLeads MasterClass
                  </a>
                </li>
              </ul>
            </div>

            {/* Free Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Free resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Predictions for 2024
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    5 Stages of a Successful Job Search
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    8 Common Job Search Mistakes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    How Long should My Resume Be?
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Partner integration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ATS Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Countries
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <p className="text-sm text-gray-400">
              © JobLeads 2007 - 2025 | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobLeadsLanding;
