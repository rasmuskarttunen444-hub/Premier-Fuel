import { useState, useEffect } from 'react';
import { 
  Phone, 
  Droplets, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Service Area', href: '#area' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <span className={`text-xl font-black tracking-tighter ${isScrolled ? 'text-primary' : 'text-primary sm:text-white'}`}>
                PREMIER<span className="text-accent">FUEL</span>
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-semibold hover:text-accent transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-700 lg:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <a href="tel:9144836860" className="flex items-center gap-2 font-bold text-accent hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
                (914) 483-6860
              </a>
              <button onClick={onOpenQuote} className="btn-accent text-sm py-2 px-4">
                Order Oil
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <a href="tel:9144836860" className="text-accent">
              <Phone className="w-6 h-6" />
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={isScrolled ? 'text-slate-900' : 'text-slate-900 sm:text-white'}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-bold text-slate-700 hover:bg-slate-50 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:9144836860" className="btn-primary flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (914) 483-6860
                </a>
                <button onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }} className="btn-accent">
                  Get a Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=2000" 
          alt="Heating oil delivery truck in winter" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent-hover px-3 py-1 rounded-full text-sm font-bold mb-6">
              <Clock className="w-4 h-4" />
              Same-Day Delivery Available
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Premier Heating Oil Delivery in <span className="text-accent underline decoration-4 underline-offset-8">North Salem</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              Family owned and operated. Serving North Salem, Armonk, Bedford & surrounding areas with reliable fuel and expert system service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9144836860" className="btn-accent text-xl py-4 px-8 flex items-center justify-center gap-3 group">
                <Phone className="w-6 h-6 group-hover:animate-bounce" />
                Call (914) 483-6860
              </a>
              <button onClick={onOpenQuote} className="btn-primary text-xl py-4 px-8 bg-white text-primary hover:bg-slate-100">
                Get a Quote
              </button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-white/80 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent w-5 h-5" />
                Family Owned & Operated
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent w-5 h-5" />
                Full System Service
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent w-5 h-5" />
                24/7 Support
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <div className="bg-white border-y border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
        <span className="text-xl font-bold italic">Westchester Homeowners Choice</span>
        <span className="text-xl font-bold italic">North Salem Local Business</span>
        <span className="text-xl font-bold italic">5-Star Rated Service</span>
        <span className="text-xl font-bold italic">Licensed & Insured</span>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Heating Oil Delivery",
      description: "Fast, on-demand heating oil delivery for your home. We prioritize your comfort and safety.",
      icon: <Droplets className="w-8 h-8" />,
      cta: "Order Now"
    },
    {
      title: "Service & Repairs",
      description: "Expert burner service, system maintenance, and emergency repairs to keep your heat running.",
      icon: <ShieldCheck className="w-8 h-8" />,
      cta: "Book Service"
    },
    {
      title: "Commercial Fuel",
      description: "Reliable diesel and heating fuel solutions for businesses and commercial fleets.",
      icon: <ArrowRight className="w-8 h-8" />,
      cta: "Get Quote"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Premier fuel and system services tailored to the needs of Northern Westchester residents and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col"
            >
              <div className="bg-blue-50 text-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {s.description}
              </p>
              <button className="flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors">
                {s.cta} <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Call or Request Quote",
      description: "Contact us via phone or our simple online form to get today's best rate."
    },
    {
      number: "02",
      title: "Schedule Delivery",
      description: "Choose a time that works for you. We offer flexible scheduling and emergency delivery."
    },
    {
      number: "03",
      title: "Get Your Oil",
      description: "Our professional drivers deliver your fuel safely and efficiently. Stay warm!"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 leading-tight">
              How It Works: <br />
              <span className="text-accent">Easy as 1-2-3</span>
            </h2>
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-4xl font-black text-slate-200">{step.number}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a href="tel:9144836860" className="btn-accent inline-flex items-center gap-2">
                Call to Order <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
              alt="Fuel delivery professional" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="italic mb-4">"Premier Fuel Oil is the most reliable service I've used in 20 years in North Salem."</p>
              <p className="font-bold text-sm">— Sarah J., North Salem Resident</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UrgencyCTA = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <AlertTriangle className="text-white w-16 h-16 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-black text-white">Running Low on Heating Oil?</h2>
          <p className="text-xl text-white/90 max-w-2xl">
            Don't risk losing heat. Our trucks are in your area today. Call now for priority delivery.
          </p>
          <a href="tel:9144836860" className="bg-white text-accent px-10 py-5 rounded-xl text-2xl font-black shadow-2xl hover:scale-105 transition-transform flex items-center gap-3">
            <Phone className="w-8 h-8" />
            Call (914) 483-6860
          </a>
        </div>
      </div>
    </section>
  );
};

const ServiceArea = () => {
  const towns = [
    "North Salem", "Armonk", "Bedford", "Katonah", 
    "Goldens Bridge", "Somers", "Pound Ridge", "South Salem",
    "Cross River", "Waccabuc", "Mount Kisco", "Chappaqua"
  ];

  return (
    <section id="area" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent font-bold mb-4">
            <MapPin className="w-5 h-5" />
            Locally Based in North Salem, NY
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Serving Northern Westchester</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We are your neighbors. We know these roads and we're committed to keeping our community warm.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {towns.map((town) => (
            <div key={town} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-white/10 transition-colors cursor-default">
              <span className="font-bold">{town}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Local Matters</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                When you call Premier Fuel Oil, you're not talking to a corporate call center. You're talking to people who live and work in Westchester. This means faster response times, better accountability, and a personal touch you won't find with national providers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  Direct owner communication
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  Knowledge of local weather patterns
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  Support for the local economy
                </li>
              </ul>
            </div>
            <div className="h-64 bg-slate-800 rounded-2xl flex items-center justify-center overflow-hidden">
              {/* Placeholder for Google Maps Embed */}
              <div className="text-slate-500 text-center p-4">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-20" />
                <p className="text-sm font-mono">MAP VIEW: NORTHERN WESTCHESTER SERVICE RADIUS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuoteModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-primary p-6 text-white flex justify-between items-center">
              <h3 className="text-2xl font-black">Get a Free Quote</h3>
              <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none" placeholder="(914) 483-6860" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Service Address</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none" placeholder="123 Main St, North Salem, NY" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Approx. Gallons Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none">
                    <option>100 - 150 Gallons</option>
                    <option>150 - 300 Gallons</option>
                    <option>300+ Gallons</option>
                    <option>Fill Tank</option>
                  </select>
                </div>
                <button className="w-full btn-accent py-4 text-xl mt-4">
                  Submit Quote Request
                </button>
                <p className="text-center text-slate-500 text-sm mt-4">
                  Or call us directly for an instant quote: <br />
                  <a href="tel:9144836860" className="text-primary font-bold">(914) 483-6860</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-primary">
                PREMIER<span className="text-accent">FUEL</span>
              </span>
            </div>
            <p className="text-slate-600 max-w-md leading-relaxed mb-8">
              Premier Fuel Oil is Northern Westchester's trusted partner for residential and commercial heating oil delivery. Locally owned and operated in North Salem, NY.
            </p>
            <div className="flex gap-4">
              <a href="tel:9144836860" className="bg-white p-3 rounded-full border border-slate-200 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white p-3 rounded-full border border-slate-200 hover:text-accent transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-accent transition-colors">Order Oil</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#area" className="hover:text-accent transition-colors">Service Area</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>26 June Rd, North Salem, NY 10560</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:9144836860" className="font-bold text-slate-900 hover:text-accent">(914) 483-6860</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span>Mon - Fri: 8am - 6pm<br />Sat: 9am - 2pm<br />24/7 Emergency Delivery</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2026 Premier Fuel Oil. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 bg-white/80 backdrop-blur-md border-t border-slate-200">
      <div className="grid grid-cols-2 gap-4">
        <a href="tel:9144836860" className="btn-accent flex items-center justify-center gap-2 py-4">
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <button className="btn-primary flex items-center justify-center gap-2 py-4">
          <ArrowRight className="w-5 h-5" />
          Order Oil
        </button>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <main>
        <Hero onOpenQuote={() => setIsQuoteModalOpen(true)} />
        <TrustBar />
        
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border-l-8 border-l-accent">
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <AlertTriangle className="text-accent w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Emergency Delivery Needed?</h3>
                  <p className="text-slate-600">We offer priority same-day service for low-tank emergencies.</p>
                </div>
              </div>
              <a href="tel:9144836860" className="btn-accent whitespace-nowrap">
                Call Emergency Line
              </a>
            </div>
          </div>
        </section>

        <Services />
        <HowItWorks />
        <UrgencyCTA />
        
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">Why Choose Premier Fuel Oil?</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We've built our reputation on being the most dependable fuel provider in Northern Westchester.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Locally Owned", desc: "Based in North Salem, serving our neighbors with pride.", icon: <MapPin /> },
                { title: "On-Time Delivery", desc: "We respect your time. When we schedule a delivery, we show up.", icon: <Clock /> },
                { title: "Fair Pricing", desc: "Transparent, competitive rates with no hidden fees.", icon: <ShieldCheck /> },
                { title: "Easy Ordering", desc: "One call or a quick form is all it takes to get your oil.", icon: <CheckCircle2 /> }
              ].map((item, i) => (
                <div key={i} className="text-center p-6">
                  <div className="bg-slate-100 text-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceArea />
      </main>

      <Footer />
      <MobileStickyCTA />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
}
