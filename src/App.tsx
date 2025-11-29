import {
  Server,
  Cloud,
  Code,
  Database,
  Network,
  GraduationCap,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";


function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services","industries", "solutions", "contact"];

      let currentSection = "home";

      for (let id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1100, once: true });
  }, []);
  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-400 via-slate-800 to-slate-200">
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white "
      data-aos="fade-up"
    >
      <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="fixed inset-0 min-w-full min-h-full object-cover -z-10"
  style={{
    imageRendering: "crisp-edges",
    filter: "none"
  }}
>
    {/* <source src="/bg-video.mp4" type="video/mp4" /> */}
{/* <source src="https://cdn.pixabay.com/video/2023/08/06/174865-852206004_large.mp4" type="video/mp4" /> */}
  {/* <source src="https://cdn.pixabay.com/video/2022/09/18/131767-751014986_large.mp4" type="video/mp4" /> */}
<source src="/foxconnbg.mp4" type="video/mp4" />
{/* <source src="https://cdn.pixabay.com/video/2018/02/26/14535-258207669_tiny.mp4" type="video/mp4" /> */}

</video>


      {/* <div className="fixed inset-0 bg-transparent z-[-1]"></div> */}
      {/* <nav className="fixed top-0 w-full bg-slate-600/80 backdrop-blur-md z-50 border-b border-slate-700/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"> */}
<nav className="sticky top-1 z-50 w-full px-4">

  {/* === DESKTOP NAV (unchanged) === */}
  <div className="hidden md:flex mx-auto w-[56%]
      bg-gradient-to-br from-white via-slate-200 to-slate-400
      backdrop-blur-xl border border-white/30
      shadow-lg rounded-full px-6 py-2 items-center justify-between">

     {/* Logo */}
  <div className="flex items-center gap-3">
   
    <a href="#home">
      {/* <span className="text-xl font-bold text-black">Foxconn IT</span> */}
       <img
      src="/logo.png"
      alt="Foxconn Logo"
      className="h-10 w-auto object-contain"
    />
    </a>
  </div>

    {/* Desktop Menu */}
    <div className="flex gap-8 text-sm font-medium">
      <a href="#home"
        className={`transition-colors ${
          activeSection === "home"
            ? "text-cyan-400 font-semibold"
            : "text-black hover:text-cyan-400"
        }`}
      >
        Home
      </a>
      <a href="#about"
        className={`transition-colors ${
          activeSection === "about"
            ? "text-cyan-400 font-semibold"
            : "text-black hover:text-cyan-400"
        }`}
      >
        About
      </a>
      <a href="#services"
        className={`transition-colors ${
          activeSection === "services"
            ? "text-cyan-400 font-semibold"
            : "text-black hover:text-cyan-400"
        }`}
      >
        Services
      </a>
      <a href="#industries"
        className={`transition-colors ${
          activeSection === "industries"
            ? "text-cyan-400 font-semibold"
            : "text-black hover:text-cyan-400"
        }`}
      >
        Industries
      </a>
      <a href="#solutions"
        className={`transition-colors ${
          activeSection === "solutions"
            ? "text-cyan-400 font-semibold"
            : "text-black hover:text-cyan-400"
        }`}
      >
        Solutions
      </a>
      <a href="#contact"
        className={`transition-colors ${
          activeSection === "contact"
            ? "text-cyan-400 font-semibold"
            : "text-black hover:text-cyan-400"
        }`}
      >
        Contact
      </a>
    </div>
  </div>


  {/* === MOBILE NAV TOP BAR === */}
  <div className="md:hidden flex items-center justify-between
      bg-white/60 backdrop-blur-xl border border-white/40
      shadow-lg rounded-xl px-4 py-2 mx-auto w-[95%]">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <Server className="w-7 h-7 text-cyan-400" />
      <span className="text-lg font-bold text-black">Foxconn</span>
    </div>

    {/* Hamburger / Close */}
    <button className="text-black" onClick={() => setOpen(!open)}>
      {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
    </button>
  </div>


  {/* === MOBILE DROPDOWN MENU === */}
  <div
    className={`md:hidden transition-all duration-300 
      overflow-hidden mx-auto w-[95%]
      ${open ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
  >
    <div className="flex flex-col space-y-4 bg-slate-700/80 p-4 rounded-xl
        backdrop-blur-xl border border-slate-600/40 text-sm font-medium">

      <a onClick={() => setOpen(false)} href="#home"
        className="text-slate-200 hover:text-cyan-400 transition-colors">
        Home
      </a>

      <a onClick={() => setOpen(false)} href="#about"
        className="text-slate-200 hover:text-cyan-400 transition-colors">
        About
      </a>

      <a onClick={() => setOpen(false)} href="#services"
        className="text-slate-200 hover:text-cyan-400 transition-colors">
        Services
      </a>

      <a onClick={() => setOpen(false)} href="#industries"
        className="text-slate-200 hover:text-cyan-400 transition-colors">
        Indutries
      </a>

      <a onClick={() => setOpen(false)} href="#solutions"
        className="text-slate-200 hover:text-cyan-400 transition-colors">
        Solutions
      </a>

      <a onClick={() => setOpen(false)} href="#contact"
        className="text-slate-200 hover:text-cyan-400 transition-colors">
        Contact
      </a>
    </div>
  </div>

</nav>


      {/* <section id="home" className="pt-32 pb-20 px-6 bg-slate-50"> */}
     
     <section
  id="home"
  className="pt-24 pb-20 px-6 bg-[url('/tech-bg.svg')]  bg-cover bg-center bg-fixed"
>
  
  <div className="max-w-7xl mx-auto">
    {/* Centered Heading */}
    <div className="text-center mb-16">
      <h1 className="font-handwriting text-5xl md:text-6xl font-bold  text-cyan-400 mb-6 leading-tight">
        Welcome to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700">
          Foxconn IT Infrastructure
        </span>
        <p className="font-handwriting text-xl md:text-2xl mt-3 text-slate-600 mb-8">
          Your trusted partner in Dubai for cutting-edge IT solutions
        </p>
      </h1>
    </div>

    {/* Two-column layout */}
    <div className="flex flex-col bg-slate-100 rounded-xl p-12 lg:flex-row items-start gap-12">
      {/* Left Column */}
      <div className="lg:w-1/2 mt-12">
        
        
        <p className="font-caveat text-lg mt-8 text-slate-800 leading-relaxed italic">
          "At Foxconn IT Infrastructure, we specialize in delivering a full
          spectrum of digital and infrastructure services — from data
          management and cloud services to custom software development, web
          design, and IT education. Whether you're a startup scaling up or a
          large enterprise optimizing your IT stack, we build powerful,
          scalable systems tailored to your needs."
        </p>

        <div className="text-center mt-10 flex flex-wrap gap-4 mb-10">
          <a
            href="#services"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 grid lg:grid-cols-2 gap-4">
        {/* Feature Box 1 */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-400/50 transition-all">
          <Globe className="w-10 h-10 text-cyan-400 mb-4" />
          <h3 className="font-handwritingtext-gray-800 font-semibold mb-2">
            Dubai-based, Global Vision
          </h3>
          <p className="text-slate-700 text-sm">
            Strategically located in the heart of the UAE, yet ready to support global businesses.
          </p>
        </div>

        {/* Feature Box 2 */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-400/50 transition-all">
          <Zap className="w-10 h-10 text-cyan-400 mb-4" />
          <h3 className="text-gray-800 font-semibold mb-2">
            Comprehensive Services
          </h3>
          <p className="text-slate-700 text-sm">
            From applications and media solutions to network infrastructure and cloud data centers.
          </p>
        </div>

        {/* Feature Box 3 */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-400/50 transition-all">
          <Shield className="w-10 h-10 text-cyan-400 mb-4" />
          <h3 className="text-gray-800 font-semibold mb-2">
            Expertise & Innovation
          </h3>
          <p className="text-slate-700 text-sm">
            Skilled professionals with deep experience in infrastructure, security, cloud, and design.
          </p>
        </div>

        {/* Feature Box 4 */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-400/50 transition-all">
          <CheckCircle className="w-10 h-10 text-cyan-400 mb-4" />
          <h3 className="text-gray-800 font-semibold mb-2">
            Reliability & Scalability
          </h3>
          <p className="text-slate-700 text-sm">
            Build for today, scale for tomorrow — with robust, flexible IT architecture.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

     <section id="about" className="py-20 px-6">
  <div data-aos="fade-up" data-aos-delay="0"
  className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
      About Us
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16"></div>

    {/* Timeline Line */}
    <div className="relative flex items-start justify-between max-w-5xl mx-auto">

      {/* Line */}
      <div className="absolute top-4 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50"></div>

      {/* Item 1 */}
      <div data-aos="fade-up" data-aos-delay="150"
      className="flex flex-col items-center w-1/3 px-4 ">
        <div className="w-6 h-6 bg-cyan-400 rounded-full mb-6 border-4 border-white"></div>
        <h3 className="font-caveat text-2xl font-bold text-cyan-500 mb-3">Our Mission</h3>
        <p className="font-caveat text-slate-500 leading-relaxed">
          To empower businesses in the UAE and beyond by providing reliable, secure, and 
          innovative IT infrastructure and digital services enabling transformation, growth, 
          and success.
        </p>
      </div>

      {/* Item 2 */}
      <div data-aos="fade-up" data-aos-delay="300"
      className="flex flex-col items-center w-1/3 px-4">
        <div className="w-6 h-6 bg-cyan-400 rounded-full mb-6 border-4 border-white"></div>
        <h3 className="font-caveat text-2xl font-bold text-cyan-500 mb-3">Our Vision</h3>
        <p className="font-caveat text-slate-500 leading-relaxed">
          Becoming a leading IT infrastructure and services provider in the MENA region 
          known for excellence, trust, and innovation.
        </p>
      </div>

      {/* Item 3 */}
      <div data-aos="fade-up" data-aos-delay="450"
      className="flex flex-col items-center w-1/3 px-4">
        <div className="w-6 h-6 bg-cyan-400 rounded-full mb-6 border-4 border-white"></div>
        <h3 className="font-caveat text-2xl font-bold text-cyan-500 mb-3">Who We Are</h3>
        <p className="font-caveat text-slate-500 leading-relaxed">
          Foxconn IT Infrastructure L.L.C is a Dubai-based company delivering 
          end-to-end IT solutions with a team of skilled experts.
        </p>
      </div>

    </div>
  </div>
</section>

      <section
  id="services"
  className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-purple-100"
>
  <div data-aos="fade-down" data-aos-delay="0"
  className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Our Services
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
    </div>

    {/* Centered Two Columns */}
    <div className="flex justify-center">
      <div className="grid md:grid-cols-2 gap-20 max-w-5xl w-full">

        {/* LEFT COLUMN */}
        <div data-aos="fade-down" data-aos-delay="50"
        className="space-y-16">

          {/* Service 1 */}
          <div data-aos="fade-down" data-aos-delay="150"
          className="flex gap-6 items-start">
            <Database className="w-12 h-12 text-cyan-500 flex-shrink-0" />
            <div>
              <h3 className="font-caveat text-2xl font-bold text-black mb-3">
                Data Entry & Management
              </h3>
              <ul className="font-caveat space-y-2 text-slate-600 leading-relaxed">
                <li>High-quality, accurate data entry</li>
                <li>Data cleaning and enrichment</li>
                <li>Database design & migration</li>
                <li>Data governance & security</li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div data-aos="fade-down" data-aos-delay="300"
          className="flex gap-6 items-start">
            <Code className="w-12 h-12 text-cyan-500 flex-shrink-0" />
            <div>
              <h3 className="font-caveat text-2xl font-bold text-black mb-3">
                Application Development
              </h3>
              <ul className="font-caveat space-y-2 text-slate-600 leading-relaxed">
                <li>Web & mobile apps</li>
                <li>Enterprise systems</li>
                <li>Legacy modernization</li>
                <li>API development</li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div data-aos="fade-down" data-aos-delay="450"
          className="flex gap-6 items-start">
            <Globe className="w-12 h-12 text-cyan-500 flex-shrink-0" />
            <div>
              <h3 className="font-caveat text-2xl font-bold text-black mb-3">
                Web & Media Design
              </h3>
              <ul className="font-caveat space-y-2 text-slate-600 leading-relaxed">
                <li>Business & e-commerce websites</li>
                <li>UI/UX responsive design</li>
                <li>Media & brand content</li>
                <li>Brand identity</li>
              </ul>
            </div>
          </div>

          {/* Service 4 */}
          <div data-aos="fade-down" data-aos-delay="600"
          className="flex gap-6 items-start">
            <Zap className="w-12 h-12 text-cyan-500 flex-shrink-0" />
            <div>
              <h3 className="font-caveat text-2xl font-bold text-black mb-3">
                Digital Marketing
              </h3>
              <ul className="font-caveat space-y-2 text-slate-600 leading-relaxed">
                <li>Social media strategy</li>
                <li>Paid campaign management</li>
                <li>Content creation</li>
                <li>Analytics & optimization</li>
              </ul>
            </div>
          </div>

        </div>


        {/* RIGHT COLUMN */}
        <div data-aos="fade-down" data-aos-delay="100"
        className="space-y-16">

          {/* Service 5 */}
          <div data-aos="fade-down" data-aos-delay="250"
          className="flex gap-6 items-start">
            <Cloud className="w-12 h-12 text-cyan-500 flex-shrink-0" />
            <div>
              <h3 className="font-caveat text-2xl font-bold text-black mb-3">
                IT Infrastructure & Cloud
              </h3>
              <ul className="font-caveat space-y-2 text-slate-600 leading-relaxed">
                <li>Cloud architecture</li>
                <li>Virtualization & servers</li>
                <li>Data center services</li>
                <li>Backup & continuity</li>
              </ul>
            </div>
          </div>

          {/* Service 6 */}
          <div data-aos="fade-down" data-aos-delay="400"
          className="flex gap-6 items-start">
            <Network className="w-12 h-12 text-cyan-500 flex-shrink-0" />
            <div>
              <h3 className="font-caveat text-2xl font-bold text-black mb-3">
                Network & Telecom
              </h3>
              <ul className="font-caveat space-y-2 text-slate-600 leading-relaxed">
                <li>LAN/WAN deployment</li>
                <li>Structured cabling</li>
                <li>VoIP & telecom</li>
                <li>Security & VPN</li>
              </ul>
            </div>
          </div>

          {/* Service 7 */}
          <div data-aos="fade-down" data-aos-delay="550"
          className="flex gap-6 items-start">
            <GraduationCap className="w-12 h-12 text-cyan-500 flex-shrink-0" />
            <div>
              <h3 className="font-caveat text-2xl font-bold text-black mb-3">
                Software & IT Training
              </h3>
              <ul className="font-caveat space-y-2 text-slate-600 leading-relaxed">
                <li>Corporate IT courses</li>
                <li>Exam preparation</li>
                <li>Hands-on labs</li>
                <li>E-learning solutions</li>
              </ul>
            </div>
          </div>

          {/* Service 8 */}
          <div data-aos="fade-down" data-aos-delay="700"
          className="flex gap-6 items-start">
            <Server className="w-12 h-12 text-cyan-500 flex-shrink-0" />
            <div>
              <h3 className="font-caveat text-2xl font-bold text-black mb-3">
                Data Center Services
              </h3>
              <ul className="font-caveat space-y-2 text-slate-600 leading-relaxed">
                <li>Co-location & management</li>
                <li>Hybrid/private cloud</li>
                <li>IaaS solutions</li>
                <li>Security & monitoring</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>


<section id="industries" className="py-20 px-6">
  <div data-aos="fade-up" data-aos-delay="0" className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Industry Solutions
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
      <p className="font-handwriting text-xl text-slate-500 max-w-3xl mx-auto">
        We deliver tailored solutions for various sectors
      </p>
    </div>

    <div className="relative max-w-4xl mx-auto">

      {/* Vertical Line */}
      <div
        className="
          absolute top-0 
          left-6 md:left-1/2 
          transform -translate-x-1/2 md:-translate-x-1/2
          h-full w-[2px] 
          bg-gradient-to-b from-cyan-400 to-blue-500 opacity-40
        "
      ></div>

      {/* ------- ITEM 1 ------- */}
      <div className="relative flex items-start mb-14" data-aos="fade-left" data-aos-delay="150">
        <div className="w-1/2 pr-10 text-right hidden md:block"></div>

        {/* Bullet */}
        <div
          className="
            absolute top-2
            left-6 md:left-1/2 
            transform -translate-x-1/2 md:-translate-x-1/2
            w-5 h-5 rounded-full bg-cyan-400 border-4 border-white
          "
        ></div>

        <div className="w-full pl-16 md:w-1/2 md:pl-10 mt-2 md:mt-0">
          <h3 className="font-handwriting text-2xl font-bold text-cyan-500 mb-2">
            Finance & Banking
          </h3>
          <p className="font-caveat text-slate-600">
            Secure data, compliance, high-availability systems
          </p>
        </div>
      </div>

      {/* ------- ITEM 2 ------- */}
      <div className="relative flex items-start mb-14 md:flex-row-reverse" data-aos="fade-right" data-aos-delay="300">
        <div className="w-1/2 pr-10 text-right hidden md:block"></div>

        {/* Bullet */}
        <div
          className="
            absolute top-2
            left-6 md:left-1/2 
            transform -translate-x-1/2 md:-translate-x-1/2
            w-5 h-5 rounded-full bg-cyan-400 border-4 border-white
          "
        ></div>

        <div className="w-full pl-16 md:w-1/2 md:pl-10 mt-2 md:mt-0">
          <h3 className="font-handwriting text-2xl font-bold text-cyan-500 mb-2">
            Healthcare
          </h3>
          <p className="font-caveat text-slate-600">
            Secure patient data management, cloud-based apps
          </p>
        </div>
      </div>

      {/* ------- ITEM 3 ------- */}
      <div className="relative flex items-start mb-14" data-aos="fade-left" data-aos-delay="450">
        <div className="w-1/2 pr-10 text-right hidden md:block"></div>

        {/* Bullet */}
        <div
          className="
            absolute top-2
            left-6 md:left-1/2 
            transform -translate-x-1/2 md:-translate-x-1/2
            w-5 h-5 rounded-full bg-cyan-400 border-4 border-white
          "
        ></div>

        <div className="w-full pl-16 md:w-1/2 md:pl-10 mt-2 md:mt-0">
          <h3 className="font-handwriting text-2xl font-bold text-cyan-500 mb-2">
            Retail & E-Commerce
          </h3>
          <p className="font-caveat text-slate-600">
            Scalable platforms, digital transformation, and analytics
          </p>
        </div>
      </div>

      {/* ------- ITEM 4 ------- */}
      <div className="relative flex items-start mb-14 md:flex-row-reverse" data-aos="fade-right" data-aos-delay="600">
        <div className="w-1/2 pr-10 text-right hidden md:block"></div>

        {/* Bullet */}
        <div
          className="
            absolute top-2
            left-6 md:left-1/2 
            transform -translate-x-1/2 md:-translate-x-1/2
            w-5 h-5 rounded-full bg-cyan-400 border-4 border-white
          "
        ></div>

        <div className="w-full pl-16 md:w-1/2 md:pl-10 mt-2 md:mt-0">
          <h3 className="font-handwriting text-2xl font-bold text-cyan-500 mb-2">
            Education & Training
          </h3>
          <p className="font-caveat text-slate-600">
            E-learning platforms, LMS systems, training infrastructure
          </p>
        </div>
      </div>

      {/* ------- ITEM 5 ------- */}
      <div className="relative flex items-start mb-4" data-aos="fade-left" data-aos-delay="750">
        <div className="w-1/2 pr-10 text-right hidden md:block"></div>

        {/* Bullet */}
        <div
          className="
            absolute top-2
            left-6 md:left-1/2 
            transform -translate-x-1/2 md:-translate-x-1/2
            w-5 h-5 rounded-full bg-cyan-400 border-4 border-white
          "
        ></div>

        <div className="w-full pl-16 md:w-1/2 md:pl-10 mt-2 md:mt-0">
          <h3 className="font-handwriting text-2xl font-bold text-cyan-500 mb-2">
            Manufacturing & Logistics
          </h3>
          <p className="font-caveat text-slate-600">
            IoT systems, intelligent automation, digital infrastructure
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


<section
  id="solutions"
    className="w-full py-24 px-6 md:px-12 lg:px-24  bg-gradient-to-br from-cyan-50 to-purple-100"
    // className="w-full py-24 px-6 md:px-12 lg:px-24 bg-slate-50"

  // data-aos="fade-up"
>
  {/* <div className="max-w-6xl mx-auto"> */}
  <div data-aos="fade-up" data-aos-delay="0"
  className="max-w-6xl mx-auto">
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
        Our Licensed Products & Solutions
      </h2>

      <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
    </div>

    {/* Card */}
    <div
    
      className="
        bg-slate-50
        shadow-xl 
        rounded-3xl 
        p-10 md:p-14 
        border border-gray-200 
        hover:shadow-2xl 
        transition-shadow 
        duration-300 
        text-center
      "
     data-aos="fade-up" data-aos-delay="150"
    >
      <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-md mb-8">
        PRIME999 Official Product
      </span>

      <p className="font-handwriting text-xl md:text-2xl font-semibold text-gray-800 leading-snug mb-6">
        Official technology product developed and operated under the{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">
          FOXCONN IT
        </span>{" "}
         <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700">
          INFRASTRUCTURE L.L.C
        </span>{" "}
        license.
      </p>

      <p className="font-caveat text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
        PRIME999 is a proprietary software solution functioning under the
        corporate authorization and licensing of FOXCONN IT INFRASTRUCTURE
        L.L.C, Dubai UAE. All commercial and technical integrations — including
        communication APIs — are processed entirely through FOXCONN’s certified
        legal entity, ensuring compliance, security, and enterprise-grade
        reliability.
      </p>
    </div>
  </div>
</section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600">
              Ready to transform your IT infrastructure? Let's talk.
            </p>
          </div>

          <div className="bg-slate-100/50 backdrop-blur-sm p-8 rounded-md border border-slate-700/50">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-slate-500 font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:info@foxconnitinfra.ae"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    info@foxconnitinfra.ae
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-slate-500 font-semibold mb-1">
                    Location
                  </h3>
                  <p className="text-slate-400">Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-slate-500 font-semibold mb-1">Website</h3>
                  <p className="text-slate-400">foxconnitinfrastructure.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700/50">
              <p className="text-center text-slate-400">
                Serving businesses across the UAE and MENA region with
                world-class IT infrastructure solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <footer className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 border-t border-slate-400/50 py-4 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Server className="w-6 h-6 text-cyan-400" />
            <span className="text-lg font-bold text-white">
              Foxconn IT Infrastructure L.L.C
            </span>
          </div>
          <p className="text-black text-sm">
            © 2025 Foxconn IT Infrastructure L.L.C. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
