/* =================================*********
   JEEVAN REAL ESTATE - CORE JS CONTROLLER
   ========================================= */

// Global query parser
const urlParams = new URLSearchParams(window.location.search);

// 1. PROPERTY DATABASE (12 Premium Listings)
const propertiesData = [
  {
    id: 1,
    title: "The Oasis Luxury Villa",
    type: "villa",
    location: "Goa",
    price: 1250000,
    beds: 4,
    baths: 5,
    area: 4800,
    purpose: "sale",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Nestled in the lush tropics of North Goa, The Oasis Luxury Villa blends contemporary open-concept architecture with classic Portuguese-influenced layouts. This gorgeous estate features a private infinity pool, sunset deck, smart-home automation, and a custom designer kitchen. Perfect for investors seeking high rental yields or families longing for a private paradise near the coast.",
    features: ["Private Infinity Pool", "Smart Home Automation", "Sunset Deck", "24/7 Security", "Chef's Kitchen", "Fully Furnished"],
    parking: 2,
    yearBuilt: 2024,
    agentId: 1
  },
  {
    id: 2,
    title: "Skyline Height Mansion",
    type: "penthouse",
    location: "Mumbai",
    price: 4500000,
    beds: 5,
    baths: 6,
    area: 7200,
    purpose: "sale",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Rising high above the Arabian Sea, this ultra-luxurious double-duplex penthouse offers panoramic 360-degree city views. Equipped with a private elevator, an internal spiral staircase, floor-to-ceiling soundproof glazing, and state-of-the-art climate control systems. Experience unmatched elite residency in the heart of Mumbai's financial district.",
    features: ["Private Elevator", "Sea View Deck", "Soundproof Glazing", "24/7 Concierge", "Integrated Wine Cellar", "Private Jacuzzi"],
    parking: 4,
    yearBuilt: 2023,
    agentId: 7
  },
  {
    id: 3,
    title: "Elysian Fields Family Estate",
    type: "house",
    location: "Bangalore",
    price: 850000,
    beds: 3,
    baths: 3,
    area: 3200,
    purpose: "sale",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Located in the quiet, tree-lined suburbs of Bangalore, this elegant modern villa is ideal for young families. It boasts a wrap-around private garden, dedicated home office, customized children play areas, and a rooftop solar grid installation. Close to top-tier international schools and tech corridors.",
    features: ["Solar Power Grid", "Home Office Studio", "Wrap-around Garden", "Rainwater Harvesting", "Modular Wardrobes", "High-speed Fiber Ready"],
    parking: 2,
    yearBuilt: 2022,
    agentId: 3
  },
  {
    id: 4,
    title: "Minimalist Modern Apartment",
    type: "apartment",
    location: "Pune",
    price: 1200,
    beds: 2,
    baths: 2,
    area: 1400,
    purpose: "rent",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An elegant, minimalist apartment designed to maximize natural lighting and functional storage space. Located in Hinjawadi, Pune, it offers excellent transit access. The building features an exclusive residents-only lounge, high-end gym, and secure lobby reception.",
    features: ["Gym Access", "Lounge Deck", "Video Door Phone", "Modular Storage", "Underground Parking", "24/7 Power Backup"],
    parking: 1,
    yearBuilt: 2021,
    agentId: 4
  },
  {
    id: 5,
    title: "Infinity Blue Beach Residence",
    type: "villa",
    location: "Goa",
    price: 1950000,
    beds: 4,
    baths: 4,
    area: 5200,
    purpose: "sale",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Boasting direct access to a semi-private beach, Infinity Blue is an architectural marvel. Built with marine-grade materials and expansive wrap-around ocean balconies. Includes a glass-bottom pool, dedicated barbecue pavilion, and master bathrooms with natural rock outdoor showers.",
    features: ["Direct Beach Access", "Glass-bottom Pool", "BBQ Pavilion", "Outdoor Showers", "Smart Climate Zones", "Servant Quarters"],
    parking: 3,
    yearBuilt: 2025,
    agentId: 5
  },
  {
    id: 6,
    title: "Metropolitan Business Hub",
    type: "office",
    location: "Mumbai",
    price: 8500,
    beds: 0,
    baths: 4,
    area: 8500,
    purpose: "rent",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Premium commercial office space located in Bandra-Kurla Complex (BKC). Offering a blank canvas layout for bespoke tech or corporate workstations, double-height executive boardrooms, and highly secure card-access control networks.",
    features: ["Double-height Boardroom", "RFID Entry Control", "Central HVAC", "100% DG Backup", "Server Server Room", "Executive Dining Area"],
    parking: 6,
    yearBuilt: 2020,
    agentId: 6
  },
  {
    id: 7,
    title: "Urban Skyline Penthouse",
    type: "penthouse",
    location: "Delhi",
    price: 2100000,
    beds: 3,
    baths: 4,
    area: 4200,
    purpose: "sale",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Located in Lutyens Delhi's proximity, this penthouse is the epitome of luxurious refinement. High wood-paneled ceilings, private heated lap pool, state-of-the-art security details, and custom imported marble flooring throughout.",
    features: ["Private Heated Pool", "Imported Marble Floors", "Smart Lock Control", "Wrap-around Skylights", "Dry/Wet Kitchen Setup", "Professional Gym"],
    parking: 2,
    yearBuilt: 2023,
    agentId: 1
  },
  {
    id: 8,
    title: "Golden Crest Villa",
    type: "villa",
    location: "Pune",
    price: 980000,
    beds: 4,
    baths: 4,
    area: 4100,
    purpose: "sale",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An elegant villa located in Koregaon Park, Pune. This property provides absolute privacy with high boundary walls and tall manicured bamboo hedges. Custom built with double-brick insulation, hardwood floors, and a modern fireplace.",
    features: ["Manicured Garden", "Stone Fireplace", "Italian Fittings", "Dedicated Staff Room", "CCTV Surveillance", "Borewell & Corporation Water"],
    parking: 3,
    yearBuilt: 2022,
    agentId: 2
  },
  {
    id: 9,
    title: "High Rise Skyline Flat",
    type: "apartment",
    location: "Mumbai",
    price: 2500,
    beds: 2,
    baths: 2,
    area: 1200,
    purpose: "rent",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A gorgeous, interior-designed apartment in Lower Parel, Mumbai. The property comes fully loaded with premium modular configurations, high-end white goods, and direct views of the central racecourse and shoreline.",
    features: ["Racecourse View", "Fully Fitted Modular", "Imported Wardrobes", "High-speed Elevators", "Swimming Pool Access", "Multi-tier Security"],
    parking: 1,
    yearBuilt: 2021,
    agentId: 3
  },
  {
    id: 10,
    title: "Heritage Garden Manor",
    type: "house",
    location: "Chennai",
    price: 680000,
    beds: 3,
    baths: 3,
    area: 2800,
    purpose: "sale",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A wonderful traditional-meets-modern home located along the East Coast Road (ECR), Chennai. Excellent cross-ventilation designed to capture cool coastal breezes. Features high ceilings, custom wood details, and rainwater harvesting structures.",
    features: ["Rainwater Harvesting", "High-ceiling Design", "Coastal Cross Breeze", "Custom Wooden Archways", "Modular Kitchen", "Terrace Garden"],
    parking: 2,
    yearBuilt: 2019,
    agentId: 4
  },
  {
    id: 11,
    title: "Royal Bangalore Estate",
    type: "villa",
    location: "Bangalore",
    price: 3200000,
    beds: 5,
    baths: 6,
    area: 6800,
    purpose: "sale",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A stunning modern-palace themed mansion inside a private gated enclave in Bangalore. Featuring solid teak woodwork, private thermal-regulated pool, premium home cinema, bar lounge, and absolute elite security configurations.",
    features: ["Private Gated Enclave", "Home Cinema Lounge", "Thermal Heated Pool", "Teak Wood Interiors", "Billiard Room", "Interconnected CCTV Hub"],
    parking: 4,
    yearBuilt: 2024,
    agentId: 5
  },
  {
    id: 12,
    title: "Bespoke Corporate Chambers",
    type: "office",
    location: "Delhi",
    price: 6500,
    beds: 0,
    baths: 3,
    area: 5200,
    purpose: "rent",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Fully-furnished corporate shell office situated in Connaught Place (CP). Ready to move with luxury work-stations, reception hall, conference chambers, pantry corner, and secure high-speed internet grids.",
    features: ["High-speed Server Rack", "Connaught Place Location", "Fully Furnished Layout", "Modern Pantry Lounge", "Central AC Grids", "24/7 Staff Access"],
    parking: 2,
    yearBuilt: 2022,
    agentId: 6
  }
];

// 2. AGENTS DATABASE (7 Experts)
const agentsData = [
  {
    id: 7,
    name: "Jeevan Kumar",
    role: "Founder & CEO",
    specialization: "Luxury Acquisitions & Capital Portfolios",
    experience: "12+ Years",
    phone: "+91 98765 43210",
    email: "ceo@jeevanrealestate.com",
    image: "images/ceo.jpg",
    bio: "Jeevan Kumar is the visionary founder and CEO of Jeevan Real Estate. Under his leadership, the firm has grown into India's premier boutique real estate consultancy. Jeevan works directly with HNIs, NRI investors, and corporate developers to secure clean-titled, architectural masterpieces across Mumbai, Goa, and Bangalore."
  },
  {
    id: 1,
    name: "Aanya Sharma",
    role: "Senior Investment Specialist",
    specialization: "Luxury Villas & Coastal Estates",
    experience: "10+ Years",
    phone: "+91 98765 43210",
    email: "aanya@jeevanrealestate.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Aanya is recognized as a leader in premium villa sales. Her clients appreciate her analytical approach to coastal assets and Goa luxury markets, ensuring portfolios appreciate year-on-year."
  },
  {
    id: 2,
    name: "Vikram Malhotra",
    role: "Managing Director & Broker",
    specialization: "Penthouses & Premium Residential",
    experience: "15+ Years",
    phone: "+91 98765 43211",
    email: "vikram@jeevanrealestate.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "Co-founder of Jeevan Real Estate. Vikram brings over a decade and a half of brokering excellence, working with corporate CEOs, HNIs, and elite families to locate super-prime penthouses."
  },
  {
    id: 3,
    name: "Priyanka Roy",
    role: "Client Relations Lead",
    specialization: "Residential Relocations & Rentals",
    experience: "8+ Years",
    phone: "+91 98765 43212",
    email: "priyanka@jeevanrealestate.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Priyanka handles residential leases and HNI moves. Her focus is making transitions friction-free for busy professionals and corporate relocation profiles in major cities."
  },
  {
    id: 4,
    name: "Rohan Verma",
    role: "Commercial Advisor",
    specialization: "Office Spaces & Retail Hubs",
    experience: "9+ Years",
    phone: "+91 98765 43213",
    email: "rohan@jeevanrealestate.com",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Rohan leads our commercial properties arm. Specializing in high-value office leases, business-hub acquisitions, and zoning layouts in Bangalore and Mumbai tech zones."
  },
  {
    id: 5,
    name: "Ananya Iyer",
    role: "Senior Consultant",
    specialization: "Suburban Mansions & Estates",
    experience: "12+ Years",
    phone: "+91 98765 43214",
    email: "ananya.iyer@jeevanrealestate.com",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Ananya specializes in gated suburban properties and heritage builds. She brings exceptional legal negotiation expertise, ensuring clean compliance audits for buyers."
  },
  {
    id: 6,
    name: "Rahul Nair",
    role: "Portfolio Manager",
    specialization: "Corporate Leasing & REITs",
    experience: "7+ Years",
    phone: "+91 98765 43215",
    email: "rahul@jeevanrealestate.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Rahul coordinates corporate investments, asset audits, and REIT structures. He optimizes yields for commercial space buyers looking for long-term lease covenants."
  }
];

// Helper to Format Currency (USD with commas)
function formatCurrency(number) {
  if (number < 20000) {
    return `$${number.toLocaleString()}/mo`;
  }
  return `$${number.toLocaleString()}`;
}

// Helper to get active page string
function getActivePageName() {
  const path = window.location.pathname;
  const page = path.split("/").pop();
  if (page === "" || page === "index.html") return "home";
  return page.replace(".html", "");
}

/* =================================*********
   GLOBAL RUNNERS (Sticky Nav, Hamburger, Theme)
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Loader Fadeout
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("fade-out");
    }, 300);
  }

  // Active Nav Link Highlighter
  const activePage = getActivePageName();
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    const linkPage = href === "index.html" ? "home" : href.replace(".html", "");
    if (activePage === linkPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Sticky Header scroll trigger
  const header = document.querySelector("header");
  const hasHero = document.querySelector(".hero, .page-header");
  
  if (!hasHero && header) {
    header.classList.add("header-solid");
  }

  const handleScroll = () => {
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on load

  // Mobile Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const mobileNavMenu = document.querySelector(".nav-links");
  if (hamburger && mobileNavMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileNavMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileNavMenu.classList.remove("active");
      });
    });
  }

  // Theme Toggle Controller
  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  const savedTheme = localStorage.getItem("jeevan-theme") || "light";

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    updateThemeIcons("dark");
  } else {
    document.body.classList.remove("dark-theme");
    updateThemeIcons("light");
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-theme");
      const currentTheme = isDark ? "dark" : "light";
      localStorage.setItem("jeevan-theme", currentTheme);
      updateThemeIcons(currentTheme);
      showToast(isDark ? "Dark theme activated" : "Light theme activated");
    });
  });

  function updateThemeIcons(theme) {
    themeToggleBtns.forEach(btn => {
      if (theme === "dark") {
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      } else {
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      }
    });
  }

  // Back To Top Controller
  const backToTopBtn = document.querySelector(".back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Scroll Reveal Animations observer moved to the end of DOMContentLoaded to support dynamically generated cards.

  // Favorites System Toggle delegation
  document.body.addEventListener("click", (e) => {
    const favBtn = e.target.closest(".fav-btn");
    if (favBtn) {
      e.preventDefault();
      const propertyId = parseInt(favBtn.dataset.id);
      let favorites = JSON.parse(localStorage.getItem("jeevan-favs")) || [];
      
      if (favorites.includes(propertyId)) {
        favorites = favorites.filter(id => id !== propertyId);
        favBtn.classList.remove("active");
        showToast("Removed from favorites");
      } else {
        favorites.push(propertyId);
        favBtn.classList.add("active");
        showToast("Added to favorites");
      }
      localStorage.setItem("jeevan-favs", JSON.stringify(favorites));
    }
  });

  /* =================================*********
     HOME PAGE MODULE
     ========================================= */
  if (activePage === "home") {
    // Stats Counter Animation
    const statSection = document.querySelector(".stats-section");
    const statCounts = document.querySelectorAll(".stat-count");
    
    if (statSection && statCounts.length > 0) {
      let animated = false;
      const countObserver = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animated) {
          statCounts.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            let count = 0;
            const speed = target / 50; // divide target by 50 steps
            const updateCount = () => {
              count += speed;
              if (count < target) {
                counter.innerText = Math.floor(count);
                setTimeout(updateCount, 30);
              } else {
                counter.innerText = target + "+";
              }
            };
            updateCount();
          });
          animated = true;
        }
      }, { threshold: 0.2 });

      countObserver.observe(statSection);
    }

    // Render Featured Properties (First 6 cards)
    const featuredGrid = document.querySelector(".properties-grid");
    if (featuredGrid) {
      const favorites = JSON.parse(localStorage.getItem("jeevan-favs")) || [];
      const featuredList = propertiesData.slice(0, 6);
      let htmlContent = "";

      featuredList.forEach(prop => {
        const isFav = favorites.includes(prop.id) ? "active" : "";
        const purposeTag = prop.purpose === "sale" ? "For Sale" : "For Rent";
        const badgeClass = prop.purpose === "sale" ? "sale" : "";
        htmlContent += `
          <div class="property-card reveal">
            <div class="property-image-wrap">
              <span class="property-badge ${badgeClass}">${purposeTag}</span>
              <button class="fav-btn ${isFav}" data-id="${prop.id}" aria-label="Favorite property">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </button>
              <img src="${prop.image}" alt="${prop.title}" loading="lazy">
            </div>
            <div class="property-info">
              <span class="property-type">${prop.type}</span>
              <h3 class="property-title"><a href="property-details.html?id=${prop.id}">${prop.title}</a></h3>
              <div class="property-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></circle><circle cx="12" cy="10" r="3"></circle></svg>
                <span>${prop.location}, India</span>
              </div>
              <div class="property-specs">
                <span class="spec-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16h20V4H2z"/><path d="M2 8h20"/><path d="M6 4v4"/><path d="M18 4v4"/><path d="M6 12h12v8H6z"/></svg>
                  ${prop.beds} Beds
                </span>
                <span class="spec-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 22V6a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 18v-4"/><path d="M9 15h6"/></svg>
                  ${prop.baths} Baths
                </span>
                <span class="spec-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>
                  ${prop.area} Sq Ft
                </span>
              </div>
              <div class="property-footer">
                <span class="property-price">${formatCurrency(prop.price)}</span>
                <a href="property-details.html?id=${prop.id}" class="btn btn-outline" style="padding: 0.5rem 1.2rem; font-size: 0.85rem;">Details</a>
              </div>
            </div>
          </div>
        `;
      });
      featuredGrid.innerHTML = htmlContent;
    }

    // Home Search Form Redirector
    const searchFormBtn = document.querySelector("#home-search-btn");
    if (searchFormBtn) {
      searchFormBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const location = document.querySelector("#search-location").value;
        const type = document.querySelector("#search-type").value;
        const minPrice = document.querySelector("#search-min-price").value;
        const maxPrice = document.querySelector("#search-max-price").value;
        
        const params = new URLSearchParams();
        if (location) params.append("location", location);
        if (type) params.append("type", type);
        if (minPrice) params.append("minPrice", minPrice);
        if (maxPrice) params.append("maxPrice", maxPrice);
        
        window.location.href = `properties.html?${params.toString()}`;
      });
    }

    // Testimonials Carousel Logic
    initTestimonialCarousel();
  }

  /* =================================*********
     PROPERTIES LISTINGS PAGE MODULE
     ========================================= */
  if (activePage === "properties") {
    const listingsGrid = document.querySelector("#listings-grid");
    const noResultsDiv = document.querySelector(".no-results");
    const resultsCountEl = document.querySelector("#results-count-number");

    // Grab elements for filters
    const filterLoc = document.querySelector("#filter-location");
    const filterType = document.querySelector("#filter-type");
    const filterMinPrice = document.querySelector("#filter-min-price");
    const filterMaxPrice = document.querySelector("#filter-max-price");
    const filterBeds = document.querySelector("#filter-beds");
    const filterBaths = document.querySelector("#filter-baths");
    const filterReset = document.querySelector("#filter-reset");

    // Initialize from URL search parameters if any
    if (urlParams.get("location")) filterLoc.value = urlParams.get("location");
    if (urlParams.get("type")) filterType.value = urlParams.get("type");
    if (urlParams.get("minPrice")) filterMinPrice.value = urlParams.get("minPrice");
    if (urlParams.get("maxPrice")) filterMaxPrice.value = urlParams.get("maxPrice");

    // Purpose radio filters
    const purposeRadios = document.querySelectorAll('input[name="filter-purpose"]');

    // Run filter listings
    function renderListings() {
      const favorites = JSON.parse(localStorage.getItem("jeevan-favs")) || [];
      const location = filterLoc.value;
      const type = filterType.value;
      const minPrice = filterMinPrice.value ? parseInt(filterMinPrice.value) : 0;
      const maxPrice = filterMaxPrice.value ? parseInt(filterMaxPrice.value) : Infinity;
      const beds = filterBeds.value;
      const baths = filterBaths.value;
      
      let selectedPurpose = "";
      purposeRadios.forEach(radio => {
        if (radio.checked) selectedPurpose = radio.value;
      });

      const filtered = propertiesData.filter(prop => {
        // Match Location
        if (location && prop.location !== location) return false;
        // Match Type
        if (type && prop.type !== type) return false;
        // Match Price
        if (prop.price < minPrice || prop.price > maxPrice) return false;
        // Match Beds
        if (beds && prop.beds < parseInt(beds)) return false;
        // Match Baths
        if (baths && prop.baths < parseInt(baths)) return false;
        // Match Purpose
        if (selectedPurpose && selectedPurpose !== "all" && prop.purpose !== selectedPurpose) return false;

        return true;
      });

      resultsCountEl.innerText = filtered.length;

      if (filtered.length === 0) {
        listingsGrid.style.display = "none";
        noResultsDiv.style.display = "block";
      } else {
        listingsGrid.style.display = "grid";
        noResultsDiv.style.display = "none";
        
        let htmlContent = "";
        filtered.forEach(prop => {
          const isFav = favorites.includes(prop.id) ? "active" : "";
          const purposeTag = prop.purpose === "sale" ? "For Sale" : "For Rent";
          const badgeClass = prop.purpose === "sale" ? "sale" : "";
          htmlContent += `
            <div class="property-card">
              <div class="property-image-wrap">
                <span class="property-badge ${badgeClass}">${purposeTag}</span>
                <button class="fav-btn ${isFav}" data-id="${prop.id}" aria-label="Favorite property">
                  <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </button>
                <img src="${prop.image}" alt="${prop.title}" loading="lazy">
              </div>
              <div class="property-info">
                <span class="property-type">${prop.type}</span>
                <h3 class="property-title"><a href="property-details.html?id=${prop.id}">${prop.title}</a></h3>
                <div class="property-location">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></circle><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>${prop.location}, India</span>
                </div>
                <div class="property-specs">
                  <span class="spec-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16h20V4H2z"/><path d="M2 8h20"/><path d="M6 4v4"/><path d="M18 4v4"/><path d="M6 12h12v8H6z"/></svg>
                    ${prop.beds} Beds
                  </span>
                  <span class="spec-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 22V6a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 18v-4"/><path d="M9 15h6"/></svg>
                    ${prop.baths} Baths
                  </span>
                  <span class="spec-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>
                    ${prop.area} Sq Ft
                  </span>
                </div>
                <div class="property-footer">
                  <span class="property-price">${formatCurrency(prop.price)}</span>
                  <a href="property-details.html?id=${prop.id}" class="btn btn-outline" style="padding: 0.5rem 1.2rem; font-size: 0.85rem;">Details</a>
                </div>
              </div>
            </div>
          `;
        });
        listingsGrid.innerHTML = htmlContent;
      }
    }

    // Set filter listeners
    const inputs = [filterLoc, filterType, filterMinPrice, filterMaxPrice, filterBeds, filterBaths];
    inputs.forEach(input => {
      if (input) input.addEventListener("change", renderListings);
    });
    purposeRadios.forEach(radio => {
      radio.addEventListener("change", renderListings);
    });

    if (filterReset) {
      filterReset.addEventListener("click", () => {
        filterLoc.value = "";
        filterType.value = "";
        filterMinPrice.value = "";
        filterMaxPrice.value = "";
        filterBeds.value = "";
        filterBaths.value = "";
        purposeRadios.forEach(radio => {
          if (radio.value === "all") radio.checked = true;
        });
        renderListings();
        showToast("Filters cleared");
      });
    }

    // Initial Listing Render
    renderListings();
  }

  /* =================================*********
     PROPERTY DETAILS MODULE
     ========================================= */
  if (activePage === "property-details") {
    const detailId = parseInt(urlParams.get("id")) || 1;
    const prop = propertiesData.find(p => p.id === detailId) || propertiesData[0];

    // Populating DOM elements
    document.title = `${prop.title} | Jeevan Real Estate`;
    const detailsName = document.querySelector("#details-name");
    const detailsLoc = document.querySelector("#details-location");
    const detailsPrice = document.querySelector("#details-price");
    const detailsDesc = document.querySelector("#details-description");
    const detailsSpecs = document.querySelector("#details-specs-list");
    const detailsFeatures = document.querySelector("#details-features-grid");
    
    if (detailsName) detailsName.innerText = prop.title;
    if (detailsLoc) detailsLoc.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></circle><circle cx="12" cy="10" r="3"></circle></svg> ${prop.location}, India`;
    if (detailsPrice) detailsPrice.innerText = formatCurrency(prop.price);
    if (detailsDesc) detailsDesc.innerHTML = `<p>${prop.description}</p>`;

    // Render overview specs
    if (detailsSpecs) {
      detailsSpecs.innerHTML = `
        <div class="overview-item">
          <div class="overview-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16h20V4H2z"/><path d="M2 8h20"/><path d="M6 4v4"/><path d="M18 4v4"/><path d="M6 12h12v8H6z"/></svg>
          </div>
          <div class="overview-text">
            <span>Bedrooms</span>
            <strong>${prop.beds} Beds</strong>
          </div>
        </div>
        <div class="overview-item">
          <div class="overview-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 22V6a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 18v-4"/><path d="M9 15h6"/></svg>
          </div>
          <div class="overview-text">
            <span>Bathrooms</span>
            <strong>${prop.baths} Baths</strong>
          </div>
        </div>
        <div class="overview-item">
          <div class="overview-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>
          </div>
          <div class="overview-text">
            <span>Square Footage</span>
            <strong>${prop.area} Sq Ft</strong>
          </div>
        </div>
        <div class="overview-item">
          <div class="overview-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 1 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
          </div>
          <div class="overview-text">
            <span>Parking Garage</span>
            <strong>${prop.parking} Spaces</strong>
          </div>
        </div>
        <div class="overview-item">
          <div class="overview-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/><path d="M12 21v-4"/><path d="M12 12V7"/></svg>
          </div>
          <div class="overview-text">
            <span>Property Type</span>
            <strong>${prop.type.toUpperCase()}</strong>
          </div>
        </div>
        <div class="overview-item">
          <div class="overview-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div class="overview-text">
            <span>Year Built</span>
            <strong>${prop.yearBuilt}</strong>
          </div>
        </div>
      `;
    }

    // Render Features List
    if (detailsFeatures) {
      let featureHtml = "";
      prop.features.forEach(feat => {
        featureHtml += `
          <div class="feature-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${feat}</span>
          </div>
        `;
      });
      detailsFeatures.innerHTML = featureHtml;
    }

    // Populate Gallery Showcase
    const mainGalleryImg = document.querySelector("#main-gallery-image");
    const thumbnailRow = document.querySelector("#thumbnail-row");
    if (mainGalleryImg && thumbnailRow) {
      mainGalleryImg.setAttribute("src", prop.gallery[0]);
      mainGalleryImg.setAttribute("alt", prop.title);
      
      let thumbHtml = "";
      prop.gallery.forEach((gSrc, index) => {
        const activeClass = index === 0 ? "active" : "";
        thumbHtml += `
          <div class="thumbnail-item ${activeClass}" data-index="${index}">
            <img src="${gSrc}" alt="Thumbnail ${index + 1}" loading="lazy">
          </div>
        `;
      });
      thumbnailRow.innerHTML = thumbHtml;

      // Click event for thumbnails
      const thumbs = document.querySelectorAll(".thumbnail-item");
      thumbs.forEach(thumb => {
        thumb.addEventListener("click", () => {
          thumbs.forEach(t => t.classList.remove("active"));
          thumb.classList.add("active");
          const idx = parseInt(thumb.dataset.index);
          mainGalleryImg.setAttribute("src", prop.gallery[idx]);
          activeGalleryIndex = idx;
        });
      });

      // Gallery slider cycling buttons
      let activeGalleryIndex = 0;
      const prevBtn = document.querySelector(".gallery-btn.prev");
      const nextBtn = document.querySelector(".gallery-btn.next");

      function updateActiveGalleryIndex(newIdx) {
        if (newIdx < 0) newIdx = prop.gallery.length - 1;
        if (newIdx >= prop.gallery.length) newIdx = 0;
        activeGalleryIndex = newIdx;
        mainGalleryImg.setAttribute("src", prop.gallery[activeGalleryIndex]);
        thumbs.forEach((t, i) => {
          if (i === activeGalleryIndex) t.classList.add("active");
          else t.classList.remove("active");
        });
      }

      if (prevBtn) prevBtn.addEventListener("click", () => updateActiveGalleryIndex(activeGalleryIndex - 1));
      if (nextBtn) nextBtn.addEventListener("click", () => updateActiveGalleryIndex(activeGalleryIndex + 1));
    }

    // Populate Agent Info Block
    const agent = agentsData.find(a => a.id === prop.agentId) || agentsData[0];
    const sideAgentImg = document.querySelector("#sidebar-agent-img");
    const sideAgentName = document.querySelector("#sidebar-agent-name");
    const sideAgentRole = document.querySelector("#sidebar-agent-role");
    const sideAgentPhone = document.querySelector("#sidebar-agent-phone");
    const sideAgentEmail = document.querySelector("#sidebar-agent-email");

    if (sideAgentImg) sideAgentImg.setAttribute("src", agent.image);
    if (sideAgentName) sideAgentName.innerText = agent.name;
    if (sideAgentRole) sideAgentRole.innerText = agent.role;
    if (sideAgentPhone) sideAgentPhone.innerText = agent.phone;
    if (sideAgentEmail) {
      sideAgentEmail.innerText = agent.email;
      sideAgentEmail.setAttribute("href", `mailto:${agent.email}`);
    }

    // Schedule Tour Form validator
    const schedulerForm = document.querySelector("#scheduler-form");
    if (schedulerForm) {
      schedulerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const schedName = document.querySelector("#sched-name").value.trim();
        const schedEmail = document.querySelector("#sched-email").value.trim();
        const schedPhone = document.querySelector("#sched-phone").value.trim();
        const schedDate = document.querySelector("#sched-date").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!schedName || !schedEmail || !schedPhone || !schedDate) {
          showToast("Please fill all scheduler fields", true);
          return;
        }

        if (!emailRegex.test(schedEmail)) {
          showToast("Invalid email address format", true);
          return;
        }

        showToast(`Tour request scheduled for ${schedDate}!`);
        schedulerForm.reset();
      });
    }
  }

  /* =================================*********
     ABOUT PAGE MODULE
     ========================================= */
  if (activePage === "about") {
    // Re-run stats counters on About page
    const statSection = document.querySelector(".stats-section");
    const statCounts = document.querySelectorAll(".stat-count");
    
    if (statSection && statCounts.length > 0) {
      let animated = false;
      const countObserver = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animated) {
          statCounts.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            let count = 0;
            const speed = target / 50;
            const updateCount = () => {
              count += speed;
              if (count < target) {
                counter.innerText = Math.floor(count);
                setTimeout(updateCount, 30);
              } else {
                counter.innerText = target + "+";
              }
            };
            updateCount();
          });
          animated = true;
        }
      }, { threshold: 0.2 });

      countObserver.observe(statSection);
    }
  }

  /* =================================*********
     AGENTS PAGE MODULE
     ========================================= */
  if (activePage === "agents") {
    const agentsGrid = document.querySelector(".agents-grid");
    if (agentsGrid) {
      let agentsHtml = "";
      agentsData.forEach(agent => {
        agentsHtml += `
          <div class="agent-card reveal">
            <div class="agent-img-wrap">
              <img src="${agent.image}" alt="${agent.name}" loading="lazy">
              <div class="agent-social-overlay">
                <a href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                <a href="#" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                <a href="#" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              </div>
            </div>
            <div class="agent-info-box">
              <h3>${agent.name}</h3>
              <p>${agent.role}</p>
              <div class="agent-experience">Experience: ${agent.experience}</div>
              <button class="btn btn-outline view-profile-btn" data-agent-id="${agent.id}" style="width: 100%;">View Profile</button>
            </div>
          </div>
        `;
      });
      agentsGrid.innerHTML = agentsHtml;
    }

    // Modal popup triggers
    const modal = document.querySelector("#agent-modal");
    const modalClose = document.querySelector("#modal-close");
    const viewButtons = document.querySelectorAll(".view-profile-btn");
    
    // Setup delegation for dyn view buttons
    document.body.addEventListener("click", (e) => {
      const targetBtn = e.target.closest(".view-profile-btn");
      if (targetBtn) {
        const agentId = parseInt(targetBtn.dataset.agentId);
        const agentObj = agentsData.find(a => a.id === agentId);
        
        if (agentObj && modal) {
          document.querySelector("#modal-img").setAttribute("src", agentObj.image);
          document.querySelector("#modal-name").innerText = agentObj.name;
          document.querySelector("#modal-role").innerText = agentObj.role;
          document.querySelector("#modal-specialization").innerText = agentObj.specialization;
          document.querySelector("#modal-experience").innerText = agentObj.experience;
          document.querySelector("#modal-phone").innerText = agentObj.phone;
          document.querySelector("#modal-email").innerText = agentObj.email;
          document.querySelector("#modal-bio").innerText = agentObj.bio;
          
          modal.classList.add("show");
          document.body.style.overflow = "hidden"; // disable scroll
        }
      }
    });

    if (modalClose && modal) {
      modalClose.addEventListener("click", () => {
        modal.classList.remove("show");
        document.body.style.overflow = ""; // restore scroll
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("show");
          document.body.style.overflow = "";
        }
      });
    }
  }

  /* =================================*********
     CONTACT PAGE MODULE
     ========================================= */
  if (activePage === "contact") {
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const fullName = document.querySelector("#contact-name").value.trim();
        const email = document.querySelector("#contact-email").value.trim();
        const phone = document.querySelector("#contact-phone").value.trim();
        const msg = document.querySelector("#contact-message").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!fullName || !email || !phone || !msg) {
          showToast("Please fill in all mandatory fields", true);
          return;
        }

        if (!emailRegex.test(email)) {
          showToast("Invalid email address formatting", true);
          return;
        }

        showToast("Form submitted! We will contact you shortly.");
        contactForm.reset();
      });
    }
  }

  // Scroll Reveal Animations - Run after dynamic pages have injected their cards
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          // Optionally unobserve after animating in
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Initialize Style Hub Customizer
  initStyleHub();
});

/* =================================*********
   TESTIMONIALS CAROUSEL CORE COMPONENT
   ========================================= */
function initTestimonialCarousel() {
  const track = document.querySelector(".testimonial-track");
  const slides = Array.from(document.querySelectorAll(".testimonial-slide"));
  const nextBtn = document.querySelector(".carousel-control.next");
  const prevBtn = document.querySelector(".carousel-control.prev");
  const dotsContainer = document.querySelector(".carousel-dots");

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let autoSlideTimer;

  // Generate Dots
  dotsContainer.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("carousel-dot");
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("aria-label", `Slide ${index + 1}`);
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(document.querySelectorAll(".carousel-dot"));

  function updateCarousel(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) dot.classList.add("active");
      else dot.classList.remove("active");
    });
  }

  function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      updateCarousel(currentIndex + 1);
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      updateCarousel(currentIndex - 1);
      resetAutoSlide();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateCarousel(index);
      resetAutoSlide();
    });
  });

  startAutoSlide();
}

/* =================================*********
   DYNAMIC GLOBAL TOAST SYSTEM
   ========================================= */
function showToast(message, isError = false) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", "toast-container");
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.classList.add("toast");
  if (isError) {
    toast.style.borderLeftColor = "#e63946";
  }

  const checkOrCross = isError 
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e63946" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c5a880" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

  toast.innerHTML = `
    <div class="toast-content">
      ${checkOrCross}
      <span>${message}</span>
    </div>
    <button class="toast-close">&times;</button>
  `;

  container.appendChild(toast);

  // Trigger Slide-in Animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 50);

  // Dismiss Toast on Close Click
  const closeBtn = toast.querySelector(".toast-close");
  closeBtn.addEventListener("click", () => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  });

  // Auto-remove Toast after 3 seconds
  setTimeout(() => {
    if (toast.parentNode) {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }
  }, 3500);
}

/* =================================*********
   INTERACTIVE STYLE HUB (DESIGN CUSTOMIZER)
   ========================================= */
function initStyleHub() {
  // 1. Define Color Presets
  const colorPresets = {
    gold: { hex: "#c5a880", hover: "#b3956c", rgb: "197, 168, 128", name: "Luxury Gold" },
    emerald: { hex: "#10b981", hover: "#059669", rgb: "16, 185, 129", name: "Emerald Mint" },
    teal: { hex: "#0ea5e9", hover: "#0284c7", rgb: "14, 165, 233", name: "Ocean Teal" },
    violet: { hex: "#8b5cf6", hover: "#7c3aed", rgb: "139, 92, 246", name: "Royal Violet" },
    crimson: { hex: "#f43f5e", hover: "#e11d48", rgb: "244, 63, 94", name: "Ruby Crimson" }
  };

  // 2. Inject HTML Elements
  // Ambient Glow Blobs
  const glowDiv = document.createElement("div");
  glowDiv.className = "ambient-glow";
  glowDiv.setAttribute("aria-hidden", "true");
  glowDiv.innerHTML = `
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  `;
  document.body.prepend(glowDiv);

  // Style Hub Toggle Button
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "style-hub-toggle";
  toggleBtn.setAttribute("aria-label", "Open style customizer");
  toggleBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  `;
  document.body.appendChild(toggleBtn);

  // Style Hub Panel
  const panel = document.createElement("div");
  panel.className = "style-hub-panel";
  panel.innerHTML = `
    <div class="style-hub-header">
      <div class="style-hub-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"/></svg>
        Style Hub Customizer
      </div>
      <button class="style-hub-close" aria-label="Close customizer">&times;</button>
    </div>

    <div class="style-hub-section">
      <span class="style-hub-label">Accent Palette</span>
      <div class="palette-row">
        <div class="color-option active" data-color="gold" style="background-color: #c5a880;" title="Luxury Gold"></div>
        <div class="color-option" data-color="emerald" style="background-color: #10b981;" title="Emerald Mint"></div>
        <div class="color-option" data-color="teal" style="background-color: #0ea5e9;" title="Ocean Teal"></div>
        <div class="color-option" data-color="violet" style="background-color: #8b5cf6;" title="Royal Violet"></div>
        <div class="color-option" data-color="crimson" style="background-color: #f43f5e;" title="Ruby Crimson"></div>
      </div>
    </div>

    <div class="style-hub-section">
      <span class="style-hub-label">Background Specialty</span>
      <div class="style-group">
        <button class="style-btn" data-bg="aurora">Aurora Glow</button>
        <button class="style-btn" data-bg="spotlight">Spotlight</button>
        <button class="style-btn style-btn-full" data-bg="clean">Classic Gradient</button>
      </div>
    </div>

    <div class="style-hub-section">
      <span class="style-hub-label">Font Style</span>
      <div class="style-group">
        <button class="style-btn" data-font="default">Classic</button>
        <button class="style-btn" data-font="sans">Modern Sans</button>
        <button class="style-btn style-btn-full" data-font="serif">Editorial Serif</button>
      </div>
    </div>

    <div class="style-hub-section">
      <span class="style-hub-label">Layout Overlays</span>
      <div class="style-group">
        <button class="style-btn style-btn-full" id="glass-toggle">Glassmorphism: ON</button>
      </div>
    </div>

    <div class="style-hub-footer">
      <button class="style-reset-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
        Reset Styles
      </button>
    </div>
  `;
  document.body.appendChild(panel);

  // 3. Select Elements
  const colorOptions = panel.querySelectorAll(".color-option");
  const bgBtns = panel.querySelectorAll("[data-bg]");
  const fontBtns = panel.querySelectorAll("[data-font]");
  const glassBtn = panel.querySelector("#glass-toggle");
  const resetBtn = panel.querySelector(".style-reset-btn");
  const closeBtn = panel.querySelector(".style-hub-close");

  // 4. State Management & Applying Config
  let currentConfig = {
    color: localStorage.getItem("hub-accent") || "gold",
    background: localStorage.getItem("hub-bg") || "aurora",
    glass: localStorage.getItem("hub-glass") !== "off", // defaults to true
    font: localStorage.getItem("hub-font") || "default"
  };

  function applyConfig(isInitial = false) {
    // Apply accent color variables
    const p = colorPresets[currentConfig.color] || colorPresets.gold;
    document.documentElement.style.setProperty("--primary", p.hex);
    document.documentElement.style.setProperty("--primary-hover", p.hover);
    document.documentElement.style.setProperty("--primary-rgb", p.rgb);

    // Update palette row active class
    colorOptions.forEach(opt => {
      if (opt.dataset.color === currentConfig.color) {
        opt.classList.add("active");
      } else {
        opt.classList.remove("active");
      }
    });

    // Apply background class to body
    document.body.classList.remove("bg-aurora", "bg-spotlight", "bg-clean");
    document.body.classList.add("bg-" + currentConfig.background);

    // Update background buttons active class
    bgBtns.forEach(btn => {
      if (btn.dataset.bg === currentConfig.background) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Apply Font Pairing class
    document.body.classList.remove("font-default", "font-sans", "font-serif");
    document.body.classList.add("font-" + currentConfig.font);

    // Update Font button active classes
    fontBtns.forEach(btn => {
      if (btn.dataset.font === currentConfig.font) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Apply Glassmorphism class
    if (currentConfig.glass) {
      document.body.classList.add("glass-enabled");
      if (glassBtn) {
        glassBtn.innerText = "Glassmorphism: ON";
        glassBtn.classList.add("active");
      }
    } else {
      document.body.classList.remove("glass-enabled");
      if (glassBtn) {
        glassBtn.innerText = "Glassmorphism: OFF";
        glassBtn.classList.remove("active");
      }
    }

    // Save to localStorage
    if (!isInitial) {
      localStorage.setItem("hub-accent", currentConfig.color);
      localStorage.setItem("hub-bg", currentConfig.background);
      localStorage.setItem("hub-glass", currentConfig.glass ? "on" : "off");
      localStorage.setItem("hub-font", currentConfig.font);
    }
  }

  // Apply saved setup immediately
  applyConfig(true);

  // 5. Setup Action Listeners
  // Toggle opening style hub
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = panel.classList.toggle("open");
    toggleBtn.classList.toggle("active", isOpen);
  });

  closeBtn.addEventListener("click", () => {
    panel.classList.remove("open");
    toggleBtn.classList.remove("active");
  });

  // Close on outside clicks
  document.addEventListener("click", (e) => {
    if (!panel.contains(e.target) && !toggleBtn.contains(e.target)) {
      panel.classList.remove("open");
      toggleBtn.classList.remove("active");
    }
  });

  // Color Pickers
  colorOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      const colorName = opt.dataset.color;
      if (currentConfig.color !== colorName) {
        currentConfig.color = colorName;
        applyConfig();
        const name = colorPresets[colorName].name;
        showToast(`Accent color updated to ${name}`);
      }
    });
  });

  // Background FX Pickers
  bgBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const bgStyle = btn.dataset.bg;
      if (currentConfig.background !== bgStyle) {
        currentConfig.background = bgStyle;
        applyConfig();
        let readableName = "Aurora Glow";
        if (bgStyle === "spotlight") readableName = "Cursor Spotlight";
        if (bgStyle === "clean") readableName = "Classic Gradient";
        showToast(`Background style updated to ${readableName}`);
      }
    });
  });

  // Font Pickers
  fontBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const fontStyle = btn.dataset.font;
      if (currentConfig.font !== fontStyle) {
        currentConfig.font = fontStyle;
        applyConfig();
        let readableFont = "Classic (Serif & Sans)";
        if (fontStyle === "sans") readableFont = "Modern Sans (Inter)";
        if (fontStyle === "serif") readableFont = "Editorial Serif (Lora)";
        showToast(`Font style updated to ${readableFont}`);
      }
    });
  });

  // Glassmorphism Picker
  if (glassBtn) {
    glassBtn.addEventListener("click", () => {
      currentConfig.glass = !currentConfig.glass;
      applyConfig();
      showToast(currentConfig.glass ? "Glassmorphism activated" : "Glassmorphism deactivated");
    });
  }

  // Reset button
  resetBtn.addEventListener("click", () => {
    currentConfig.color = "gold";
    currentConfig.background = "aurora";
    currentConfig.glass = true;
    currentConfig.font = "default";
    applyConfig();
    showToast("Design themes reset to default configurations");
  });

  // Spotlight cursor follow
  window.addEventListener("mousemove", (e) => {
    if (currentConfig.background === "spotlight") {
      const xPercent = ((e.clientX / window.innerWidth) * 100).toFixed(2);
      const yPercent = ((e.clientY / window.innerHeight) * 100).toFixed(2);
      document.body.style.setProperty("--mouse-x", xPercent + "%");
      document.body.style.setProperty("--mouse-y", yPercent + "%");
    }
  });
}
