import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import image2 from "../assets/courses/2.png"
import image3 from "../assets/courses/3.png"
import image4 from "../assets/courses/4.png"
import image5 from "../assets/courses/5.png"
import image6 from "../assets/courses/6.png"
import image7 from "../assets/courses/7.png"
import {
  FiArrowUpRight,
  FiBookOpen,
  FiShoppingBag,
  FiFileText,
  FiTarget,
  FiAward,
  FiMonitor,
  FiCheckCircle,
  FiUsers,
  FiPackage,
  FiGlobe,
  FiHeadphones,
  FiMessageCircle,
  FiDownload,
  FiPlayCircle,
  FiSun,
  FiBook,
  FiBox,
} from "react-icons/fi";
import "./ASD.css";

const img = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const courses = [
  {
    title: "Medicinal & Aromatic Plants – Cultivation, Processing & Business Opportunities",
    tag: "3-Day Workshop",
    description: "Learn cultivation, processing, value addition, marketing and business opportunities.",
    image: img("photo-1500382017468-9049fed747ef"),
    icon: <FiSun />,
    tagline: "Medicinal and aromatic plants: cultivation, processing and business opportunities.",
    about: "A three-day live online workshop connecting cultivation knowledge with processing, value addition and market opportunities. Participants explore the complete value chain, from crop production to business development.",
    modules: [
      { heading: "Day 1 – Cultivation Techniques & Crop Management", items: ["Introduction to medicinal and aromatic plants","Selection of suitable commercially relevant crops","Land selection and preparation","Cultivation techniques and crop management","Fertilizer and nutrient management","Disease and pest management","Harvesting techniques","Methods to improve crop production","Plants covered: Ashwagandha, Shatavari, Tulsi, Guggal, Aloe Vera, Lemongrass, Palmarosa, Mint, Geranium and Lavender"] },
      { heading: "Day 2 – Processing & Value Addition", items: ["Harvesting, drying and proper storage techniques","Different methods of essential oil extraction","Essential oil and product quality testing","Processing of medicinal and aromatic plants","Development of value-added products","Herbal products, oils, extracts and powders","Opportunities in small-scale processing industries"] },
      { heading: "Day 3 – Marketing, Export & Business Opportunities", items: ["Understanding domestic and international markets","Introduction to export procedures","Important export-related documentation","Guidance for starting a medicinal and aromatic plant business","Understanding production costs","Product pricing and profit analysis","Business opportunities in value-added products","Exploring higher-value market opportunities"] }
    ],
    benefits: ["Understand cultivation techniques for important medicinal and aromatic plants","Explore commercially relevant crop opportunities","Learn harvesting and post-harvest management","Understand essential oil extraction methods","Explore processing and value-added product development","Gain an understanding of product quality testing","Learn domestic and international market opportunities","Understand basic export procedures and documentation","Explore business planning, costing and profitability analysis"],
    audience: ["Farmers interested in alternative high-value crops","Aspiring agricultural entrepreneurs","Agriculture and horticulture students","Existing agribusiness owners","Women entrepreneurs and self-help groups","Essential oil business aspirants","Herbal product manufacturers and startups","Individuals interested in medicinal and aromatic plant cultivation","People exploring new agricultural opportunities"],
    details: ["Duration: 3 Days","Mode: Online – Live online training","Language: Marathi","Daily timing: 7:00 PM to 9:00 PM","Total learning duration: 6 Hours","Course fee: ₹1,499"],
    why: "Deccan Greens combines cultivation, processing and business perspectives to help participants understand the complete value chain, including opportunities beyond cultivation."
  },
  {
    title: "Hydroponics & Agribusiness: From Home Gardening to Commercial Farming",
    tag: "3-Day Workshop",
    description: "Learn DIY home hydroponics, commercial project planning and small-space agribusiness.",
    image: image2,
    icon: <FiBookOpen />,
    tagline: "From growing vegetables at home to commercial farming—learn hydroponics and explore business opportunities.",
    about: "A practical three-day online workshop covering DIY home hydroponics, commercial hydroponic project planning, project report preparation, microgreens and wheatgrass production, and business development.",
    modules: [
      { heading: "Day 1 – Home Hydroponics (DIY)", items: ["Introduction to hydroponics and its working principles","Selecting suitable hydroponic systems for home gardening","Planning a home hydroponic setup","Required materials, equipment and infrastructure","Setup costs and basic investment requirements","Preparation and management of nutrient solutions","Understanding pH and EC","Growing leafy vegetables using hydroponic techniques","Basic crop care and maintenance","Practical focus: establish a small hydroponic vegetable garden at home"] },
      { heading: "Day 2 – Commercial Hydroponics & Project Planning", items: ["Introduction to commercial hydroponic farming","Planning a 10-guntha hydroponic project","Selection of crops such as lettuce, spinach and fenugreek","Infrastructure and greenhouse planning","Hydroponic system selection and layout","Investment and infrastructure cost estimation","Production planning and cost calculations","Understanding business feasibility","Introduction to government subsidy opportunities","Preparation and understanding of a Detailed Project Report (DPR)","Market opportunities for hydroponically grown vegetables"] },
      { heading: "Day 3 – Microgreens & Wheatgrass Production and Business", items: ["Introduction to microgreens and wheatgrass","Nutritional importance and market potential","Selection of suitable seeds","Growing media and cultivation methods","Seed preparation and sowing techniques","Water, hygiene and crop management","Harvesting and post-harvest handling","Storage, packaging and maintaining freshness","Sales opportunities in hotels, restaurants and health stores","Small-space production models","Microgreens and wheatgrass business planning"] }
    ],
    benefits: ["Learn to establish a DIY hydroponic system at home","Understand hydroponic nutrients, pH and EC management","Explore commercial hydroponic farming","Understand 10-guntha project planning","Learn project report preparation fundamentals","Explore crop selection and production planning","Understand microgreens and wheatgrass cultivation","Learn harvesting, packaging and marketing basics","Explore modern agricultural business opportunities"],
    audience: ["Aspiring agricultural entrepreneurs","Home gardening enthusiasts","Hydroponics beginners","Farmers interested in modern farming technologies","Agriculture and horticulture students","Urban gardening enthusiasts","Startup founders exploring agribusiness","Women entrepreneurs and self-help groups","Individuals interested in microgreens and wheatgrass businesses"],
    details: ["Duration: 3 Days","Mode: Live Online Workshop","Language: Marathi","Course level: Beginner to Intermediate","Learning hours: As per scheduled sessions"],
    resources: ["10-guntha hydroponic project sample Detailed Project Report (PDF)","Business cost and financial calculation template (Excel)","DIY home hydroponics guide (PDF)","Microgreens business guidance material (PDF)","Certificate of course completion","7-day WhatsApp guidance"],
    why: "The workshop introduces home-based growing systems, commercial project planning and small-space agricultural businesses, helping learners evaluate practical and commercial applications."
  },
  {
    title: "Kitchen & Balcony Gardening – Create Your Own Green Space",
    tag: "Beginner Friendly",
    description: "Turn your balcony, terrace or small space into a productive home garden.",
    image: image3,
    icon: <FiSun />,
    tagline: "Make your balcony green—grow fresh vegetables and beautiful flowers at home.",
    about: "Learn practical kitchen and balcony gardening techniques including garden planning, plant selection, potting mixtures, organic fertilizers, kitchen waste composting, watering and natural pest management.",
    modules: [
      { heading: "Balcony & Terrace Garden Planning", items: ["Planning a home garden in limited spaces","Selecting suitable locations","Understanding garden setup requirements","Arranging plants in balconies and terraces"] },
      { heading: "Growing Vegetables, Fruits & Flowering Plants", items: ["Selection of suitable home garden plants","Growing leafy vegetables at home","Cultivating fruit-bearing plants in containers","Selecting and maintaining flowering plants","Basic plant growth and care"] },
      { heading: "Potting Mixtures & Fertilizer Management", items: ["Understanding suitable potting mixtures","Selecting growing media","Preparing potting mixtures for different plants","Understanding fertilizer requirements","Basic nutrient management"] },
      { heading: "Kitchen Waste Composting", items: ["Understanding kitchen waste composting","Using household organic waste","Basic compost preparation","Managing organic waste at home"] },
      { heading: "Water & Sunlight Management", items: ["Understanding plant water requirements","Proper watering techniques","Identifying suitable sunlight conditions","Managing water and sunlight for different plants"] },
      { heading: "Natural Pest & Disease Management", items: ["Identifying common garden pests and diseases","Natural pest management","Preventive plant protection","Maintaining healthy garden plants"] },
      { heading: "Homemade Organic Fertilizers & Pest-Control Preparations", items: ["Introduction to 10 types of homemade organic fertilizers","Preparing organic plant nutrition solutions","Homemade natural pest-control preparations","Practical approaches to maintaining a healthy home garden"] }
    ],
    benefits: ["Develop a balcony and terrace garden","Grow fresh leafy vegetables at home","Explore fruit-bearing and flowering plants","Understand potting mixtures and growing media","Learn kitchen waste composting","Understand watering and sunlight management","Explore natural pest and disease management","Learn 10 types of homemade organic fertilizers and pest-control preparations","Develop practical home gardening skills"],
    audience: ["Home gardening enthusiasts","Beginners interested in gardening","Apartment and flat residents","Balcony and terrace gardeners","Urban gardening enthusiasts","Students interested in horticulture","Nursery owners and gardening professionals","Individuals interested in growing vegetables","Nature lovers and plant enthusiasts"],
    details: ["Mode: Online Training","Language: Marathi","Course level: Beginner Friendly","Learning areas: Home Gardening, Vegetable Cultivation, Composting and Organic Plant Management"],
    why: "Deccan Greens makes gardening practical and accessible, focusing on plant selection, garden development and everyday plant management for beginners and enthusiasts."
  },
  {
    title: "Medicinal & Meditation Garden – Create Your Own Green & Peaceful Space",
    tag: "Beginner Friendly",
    description: "Create a medicinal and aromatic plant garden with a peaceful meditation corner.",
    image: image4,
    icon: <FiSun />,
    tagline: "Create a medicinal and aromatic garden and a refreshing green corner for meditation at home.",
    about: "Learn to select, grow and maintain useful medicinal and aromatic plants in limited spaces while creating a peaceful meditation garden at home.",
    modules: [
      { heading: "Selection of Medicinal & Aromatic Plants", items: ["Introduction to medicinal and aromatic plants","Identifying suitable plants for home gardening","Selecting plants according to available space","Basic growing requirements","Commonly grown household herbs"] },
      { heading: "Small-Space Medicinal Garden Development", items: ["Planning a medicinal garden at home","Growing useful plants in pots and containers","Designing in limited spaces","Arrangement of 8 medicinal plants in a 2 × 2 feet area","Understanding compact garden layouts","Proper placement and management"] },
      { heading: "Balcony & Terrace Meditation Garden Design", items: ["Introduction to meditation garden concepts","Planning a peaceful green corner","Selecting suitable aromatic and decorative plants","Combining greenery with aesthetic garden elements","Designing balcony and terrace meditation spaces","Creating a relaxing environment through thoughtful arrangement"] },
      { heading: "Soil, Water & Nutrient Management", items: ["Suitable soil and growing media","Preparation of potting mixtures","Watering requirements","Sunlight requirements","Organic fertilizer management","Maintaining healthy plant growth"] },
      { heading: "Plant Care, Harvesting & Everyday Use", items: ["Regular maintenance of medicinal plants","Appropriate harvesting stages","Basic harvesting and handling","Maintaining plants for continued growth","Traditional household uses of selected plants","Responsible use and handling of medicinal herbs"] }
    ],
    benefits: ["Develop a medicinal garden at home","Grow useful plants in limited spaces","Arrange 8 plants in just 2 × 2 feet","Learn balcony and terrace garden design","Create a peaceful meditation garden","Understand soil, water and sunlight management","Learn basic organic nutrient management","Understand plant care and harvesting"],
    audience: ["Home gardening enthusiasts","Beginners interested in medicinal plants","Balcony and terrace gardeners","Nature and plant lovers","People interested in meditation garden design","Students interested in horticulture","Nursery owners and gardening professionals","Individuals interested in useful herbs","People looking to develop peaceful green spaces"],
    details: ["Mode: Online Training","Language: Marathi","Course level: Beginner Friendly","Learning areas: Medicinal Plants, Aromatic Plants, Small-Space Gardening and Meditation Garden Design"],
    why: "Deccan Greens focuses on practical gardening and creative use of household spaces, making medicinal and aromatic plant gardening accessible and enjoyable."
  },
  {
    title: "Home Hydroponics – Grow Fresh Vegetables Without Soil",
    tag: "Beginner Friendly",
    description: "Build a low-cost DIY hydroponic setup and grow vegetables in your home.",
    image: image5,
    icon: <FiBookOpen />,
    tagline: "No soil? Grow fresh vegetables at home!",
    about: "A beginner-friendly online course simplifying soilless cultivation and helping learners establish and manage a small hydroponic system in a balcony, terrace or available household space.",
    modules: [
      { heading: "Introduction to Home Hydroponics", items: ["What is hydroponics and how does it work?","Basic principles of soilless cultivation","Benefits and applications of home hydroponics","Growing vegetables in limited spaces"] },
      { heading: "Low-Cost DIY Hydroponic Setup", items: ["Planning a home hydroponic system","Selecting suitable materials and equipment","Requirements of a small setup","Step-by-step introduction to building a low-cost DIY hydroponic unit","Basic setup maintenance"] },
      { heading: "Selection of Vegetables & Plants", items: ["Suitable leafy vegetables","Fruit-bearing vegetable crops","Medicinal and aromatic plants suitable for hydroponic experimentation","Crop-specific growing requirements"] },
      { heading: "Types of Hydroponic Systems", items: ["Wick System","Deep Water Culture (DWC)","Nutrient Film Technique (NFT)","Working principles of different systems","Selecting a suitable home gardening system"] },
      { heading: "Seeds, Seedlings & Planting", items: ["Seed selection","Seed preparation and germination","Seedling development","Transplanting seedlings into hydroponic systems","Basic plant establishment"] },
      { heading: "Nutrient Solution Management", items: ["Introduction to hydroponic nutrient solutions","Essential plant nutrients","Preparation and management of nutrient solutions","Understanding pH and EC","Monitoring nutrient solution quality"] },
      { heading: "Light, Water & Plant Management", items: ["Light requirements","Water management in hydroponic systems","Common plant diseases and management","Daily monitoring and maintenance","Identifying and managing common growing problems"] }
    ],
    benefits: ["Learn hydroponics from basics","Grow vegetables without conventional soil","Develop a low-cost DIY hydroponic setup","Explore Wick, DWC and NFT systems","Understand seed and seedling preparation","Learn nutrient solution preparation and management","Understand pH and EC monitoring","Explore leafy vegetable and fruit-bearing crop cultivation","Learn water, light and daily plant management"],
    audience: ["Beginners interested in hydroponics","Home gardening enthusiasts","Apartment and flat residents","Balcony and terrace gardeners","Agriculture and horticulture students","Urban farming enthusiasts","Individuals interested in modern cultivation","People who want fresh vegetables at home","Aspiring hydroponic entrepreneurs"],
    details: ["Mode: Online Training","Language: Marathi","Course level: Beginner Friendly","Learning areas: DIY Hydroponics, Soilless Cultivation, Nutrient Management and Home Vegetable Production"],
    why: "Deccan Greens simplifies soilless cultivation—from choosing a growing technique to nutrient management and everyday plant care."
  },
  {
    title: "Microgreens Production – From Basics to Business",
    tag: "Basics to Business",
    description: "Learn microgreens cultivation, harvesting, packaging and small-scale business development.",
    image: image6,
    icon: <FiPackage />,
    tagline: "Grow microgreens in small spaces, produce nutritious greens and start your own business.",
    about: "A practical online course introducing microgreens cultivation and commercial aspects—from varieties and seed preparation to growing conditions, harvesting, packaging and identifying potential customers.",
    modules: [
      { heading: "Introduction to Microgreens", items: ["What are microgreens?","Difference between microgreens, sprouts and baby greens","Nutritional characteristics and benefits","Popular microgreens varieties","Microgreens market opportunities"] },
      { heading: "Seed Selection & Preparation", items: ["Selecting suitable seeds","Understanding seed quality","Seed soaking and preparation","Germination requirements","Different seed varieties"] },
      { heading: "Growing Media & Cultivation Techniques", items: ["Introduction to growing media","Cocopeat and other suitable substrates","Tray selection and preparation","Sowing techniques","Seed density and spacing","Growing without conventional soil"] },
      { heading: "Microgreens Production Planning – 7 to 15 Days", items: ["Production cycle","Day-wise crop development","Germination and blackout period","Light exposure and growth management","Watering and moisture management","Environmental requirements","Planning continuous production batches"] },
      { heading: "Crop Management", items: ["Managing light and temperature","Maintaining suitable moisture","Airflow and hygiene","Identifying common cultivation problems","Maintaining healthy microgreens","Basic preventive crop management"] },
      { heading: "Harvesting & Post-Harvest Management", items: ["Appropriate harvesting stage","Harvesting techniques","Maintaining freshness and quality","Cleaning and handling","Storage and shelf-life considerations","Reducing post-harvest losses"] },
      { heading: "Packaging & Branding", items: ["Introduction to microgreens packaging","Selecting packaging materials","Maintaining freshness during packaging","Product presentation and labelling","Developing your own microgreens brand","Basic product pricing considerations"] },
      { heading: "Microgreens Business Development", items: ["Microgreens business model","Small-scale production planning","Basic infrastructure requirements","Production costs","Calculating cost and potential selling price","Identifying potential customers","Opportunities with hotels, restaurants and supermarkets","Direct-to-consumer marketing","Planning regular production and sales"] },
      { heading: "Commercial Production Using Vertical Racks", items: ["Commercial growing setups","Vertical rack systems","Space utilisation and tray management","Planning multiple production batches","Small-scale commercial production"] }
    ],
    benefits: ["Learn microgreens cultivation from basics","Understand seed selection and preparation","Learn tray-based cultivation","Understand the 7–15 day production cycle","Explore different varieties","Learn harvesting and packaging","Understand freshness and storage","Explore commercial production models","Understand costing and pricing","Identify buyers and marketing channels","Explore small-space agribusiness"],
    audience: ["Aspiring agribusiness entrepreneurs","Agriculture and horticulture students","Home gardening enthusiasts","Women entrepreneurs and self-help groups","Urban farming enthusiasts","Existing nursery owners","Individuals interested in healthy food products","Startup founders exploring food and agriculture","People starting a business with limited space"],
    details: ["Mode: Online Training","Language: Marathi","Course level: Beginner Friendly","Learning areas: Microgreens Cultivation, Crop Management, Harvesting, Packaging and Business Development"],
    why: "Deccan Greens covers cultivation techniques and commercial aspects, helping learners develop microgreens production as a household activity or business opportunity."
  },
  {
    title: "Complete Home Gardening – 4 Special Online Courses",
    tag: "4 Courses in 1",
    description: "A four-course package covering hydroponics, microgreens, kitchen gardening and medicinal gardens.",
    image: image7,
    icon: <FiAward />,
    tagline: "Learn gardening at home, create your own green space and connect with nature.",
    about: "A comprehensive four-course learning package: Home Hydroponics, Microgreens Production, Kitchen & Balcony Gardening, and Medicinal & Meditation Garden Development. Combines practical gardening knowledge, modern cultivation, organic waste management and creative garden planning.",
    modules: [
      { heading: "Course 01 – Home Hydroponics", items: ["Introduction to home hydroponics","Planning a balcony and terrace hydroponic setup","Low-cost DIY hydroponic unit development","Selection of leafy vegetables, fruit-bearing crops and herbs","Wick, DWC and NFT systems","Seed preparation and seedling development","Nutrient solution preparation","pH and EC management","Light, water and everyday plant care"] },
      { heading: "Course 02 – Microgreens Production", items: ["Introduction to microgreens and nutritional characteristics","Seed selection and preparation","Growing media and cocopeat","Tray preparation and sowing techniques","7–15 day production cycle","Germination, light and water management","Harvesting and hygiene","Packaging and freshness management","Commercial production and business planning","Identifying potential customers and sales opportunities"] },
      { heading: "Course 03 – Kitchen & Balcony Gardening", items: ["Balcony and terrace garden planning","Selection of vegetables, fruits and flowering plants","Growing leafy vegetables and fruit-bearing plants","Preparation of suitable potting mixtures","Fertilizer and nutrient management","Kitchen waste composting","Water and sunlight management","Natural pest and disease management","Preparation of 10 types of homemade organic fertilizers and pest-control preparations"] },
      { heading: "Course 04 – Medicinal & Meditation Garden", items: ["Selection of medicinal and aromatic plants","Small-space medicinal garden planning","Growing useful plants in pots and containers","Arrangement of 8 medicinal plants in a 2 × 2 feet space","Balcony and terrace meditation garden design","Selection and arrangement of suitable plants","Soil, water and organic nutrient management","Plant care and harvesting techniques","Everyday maintenance of medicinal and aromatic gardens"] }
    ],
    benefits: ["Four courses in one: four important areas of home gardening","Modern growing techniques: hydroponics and microgreens","Grow vegetables, fruits and herbs in limited spaces","Organic gardening: composting and homemade organic fertilizers","Medicinal plant knowledge and aromatic garden development","Creative balcony, terrace and meditation garden design","Business exposure through microgreens production"],
    outcomes: ["Establish a basic home hydroponic system","Grow microgreens using tray-based cultivation","Plan a kitchen and balcony garden","Prepare suitable potting mixtures","Manage water, sunlight and plant nutrients","Prepare kitchen waste compost","Understand natural pest management","Develop a compact medicinal garden","Design attractive green spaces at home","Explore small-scale gardening business opportunities"],
    audience: ["Home gardening beginners","Balcony and terrace gardening enthusiasts","Apartment and flat residents","Agriculture and horticulture students","Urban farming enthusiasts","Women entrepreneurs and self-help groups","People interested in growing fresh vegetables","Aspiring microgreens entrepreneurs","Plant lovers and nature enthusiasts","Individuals interested in modern and organic gardening"],
    details: ["Programme duration: 4 Days","Individual session duration: 2 Hours","Total learning duration: 8 Hours","Mode: Online Training","Language: Marathi","Course level: Beginner Friendly","Learning areas: Hydroponics, Microgreens, Kitchen & Balcony Gardening, Medicinal & Meditation Garden"],
    why: "Instead of learning only one gardening method, participants get an introduction to four specialised areas applicable at home and potentially as business opportunities."
  }
];

const products = [
  {
    title: "Growing Media",
    tag: "Quality Materials",
    description:
      "Explore growing media selected to support healthy roots and plant growth.",
    image: img("photo-1589923188900-85dae523342b"),
    icon: <FiPackage />,
  },
  {
    title: "Plants & Saplings",
    tag: "Healthy Plants",
    description:
      "Discover plants and saplings for home gardens and growing projects.",
    image: img("photo-1487530811176-3780de880c2d"),
    icon: <FiSun />,
  },
  {
    title: "Hydroponic Equipment",
    tag: "Grow Smarter",
    description:
      "Find practical equipment for setting up and managing hydroponic systems.",
    image: img("photo-1585320806297-9794b3e4eeae"),
    icon: <FiShoppingBag />,
  },
  {
    title: "Gardening Supplies",
    tag: "Garden Essentials",
    description:
      "Useful supplies and essentials for everyday gardening activities.",
    image: img("photo-1416879595882-3373a0480b5b"),
    icon: <FiBox />,
  },
  {
    title: "Seeds & Nutrients",
    tag: "Plant Nutrition",
    description:
      "Explore seeds and nutrient solutions for healthy plant growth.",
    image: img("photo-1497250681960-ef046c08a56e"),
    icon: <FiSun />,
  },
  {
    title: "Garden Tools",
    tag: "Everyday Tools",
    description:
      "Find essential tools for planting, pruning and garden maintenance.",
    image: img("photo-1487530811176-3780de880c2d"),
    icon: <FiShoppingBag />,
  },
];

const ebooks = [
  { title: "केळीच्या सालींपासून वेगवेगळी खते", englishTitle: "Different Fertilizers from Banana Peels", tag: "DIY Gardening", description: "Turn banana peels into useful gardening resources with simple fertilizer preparation techniques.", image: img("photo-1416879595882-3373a0480b5b"), subtitle: "Turn Banana Peels into Useful Gardening Resources – Simple DIY Fertilizer Preparation Techniques", about: "Explore four ways to utilize banana peels for gardening: Banana Tea, Banana Peel Powder, Chopped Banana Fertilizer and Banana Peel Compost.", topics: ["Banana Tea", "Banana Peel Powder", "Chopped Banana Fertilizer", "Banana Peel Compost"], benefits: ["Learn four ways to utilize banana peels", "Explore kitchen waste management", "Discover simple DIY gardening preparations", "Suitable for beginners and gardening enthusiasts"] },
  { title: "Best Plants for Balcony & Terrace Garden", tag: "Home Gardening", description: "Discover suitable plants to transform balconies and terraces into beautiful green spaces.", image: img("photo-1487530811176-3780de880c2d"), subtitle: "Discover the Right Plants to Transform Your Balcony and Terrace into a Beautiful Green Space.", about: "A practical guide to plant selection and making available balcony or terrace space greener, attractive and enjoyable.", topics: ["Plant selection for balcony gardens", "Suitable plants for terrace gardening", "Green spaces in limited areas", "Ideas to beautify balconies and terraces"], benefits: ["Discover plant options for urban gardening", "Use balcony and terrace space better", "Get inspiration for green spaces", "Explore home gardening as a hobby"] },
  { title: "Cactus & Succulents Potting Mix", tag: "Plant Care", description: "Understand the right growing medium for healthy cacti and beautiful succulents.", image: img("photo-1497250681960-ef046c08a56e"), subtitle: "Discover the Right Growing Medium for Healthy Cacti and Beautiful Succulents.", about: "Introduces suitable potting media, drainage, aeration and root-zone requirements for cacti and succulents.", topics: ["Importance of potting mix", "Growing media fundamentals", "Suitable growing substrates", "Drainage and aeration"], benefits: ["Understand appropriate potting media", "Develop succulent cultivation knowledge", "Understand root-zone management", "Build confidence caring for succulents"] },
  { title: "अंड्याच्या कवचापासून वेगवेगळी खते", englishTitle: "Different Fertilizers from Eggshells", tag: "DIY Gardening", description: "Turn everyday kitchen waste into useful gardening resources with eggshell-based preparations.", image: img("photo-1416879595882-3373a0480b5b"), subtitle: "Turn Everyday Kitchen Waste into Useful Gardening Resources!", about: "Explore ways to process and utilize eggshells in gardening and understand their role and calcium content.", topics: ["Potential of eggshells in gardening", "Processing and preparing eggshells", "Eggshell powder and DIY preparations", "Calcium in plant nutrition", "Kitchen waste utilization"], benefits: ["Learn DIY gardening techniques", "Understand calcium in plant nutrition", "Reduce household waste", "Develop sustainable gardening practices"] },
  { title: "Complete Guide on Hydroponics", tag: "Hydroponics", description: "A comprehensive learning resource for home and commercial hydroponic farming.", image: img("photo-1585320806297-9794b3e4eeae"), subtitle: "A Comprehensive Learning Resource for Home & Commercial Hydroponic Farming", about: "Covers hydroponics fundamentals, plant requirements, nutrient management, growing media, systems, sensors, grow lights and commercial setup planning.", topics: ["Fundamentals of Hydroponics", "Plant Requirements & Environmental Management", "Growing Media & Hydroponic Systems", "Technology & Commercial Setup"], benefits: ["Understand soilless cultivation", "Explore hydroponic systems", "Learn pH and EC management", "Explore sensors and growing technologies", "Build a foundation for home and commercial hydroponics"] },
  { title: "किचन वेस्ट कंपोस्ट", englishTitle: "Kitchen Waste Compost – A Practical Guide to Home Composting", tag: "Composting", description: "Turn everyday kitchen waste into a valuable resource for your garden.", image: img("photo-1543002588-bfa74002ed7e"), subtitle: "Turn Everyday Kitchen Waste into a Valuable Resource for Your Garden!", about: "Introduces kitchen waste composting, biodegradable household waste, responsible waste management and sustainable home gardening.", topics: ["Kitchen waste composting", "Biodegradable household waste", "Composting in home gardening", "Organic waste management", "Compost and sustainable gardening"], benefits: ["Understand home composting", "Utilize biodegradable kitchen waste", "Reduce household waste", "Develop sustainable gardening habits"] },
  { title: "मायक्रोग्रीन्स उत्पादन ते व्यवसाय", englishTitle: "Microgreens: From Production to Business", tag: "Production to Business", description: "Learn microgreens cultivation, production management, harvesting, packaging and business opportunities.", image: img("photo-1497250681960-ef046c08a56e"), subtitle: "Learn Microgreens Cultivation, Production Management, Harvesting, Packaging & Business Opportunities.", about: "Connects microgreens cultivation knowledge with production planning, harvesting, packaging and commercial opportunities.", topics: ["Understanding Microgreens", "Production Planning (7–15 days)", "Cultivation Techniques", "Harvesting & Packaging", "Commercial Production", "Marketing & Business Opportunities"], benefits: ["Learn microgreens cultivation", "Understand production cycles", "Learn harvesting and packaging", "Explore commercial production", "Identify potential buyers and marketing channels"] },
  { title: "Medicinal Garden", tag: "Medicinal Plants", description: "Explore medicinal plants and practical ways to develop a medicinal garden.", image: img("photo-1544947950-fa07a98d237f"), subtitle: "A Practical Guide to Medicinal Garden Development", about: "Introduces medicinal plants, plant selection, small-space garden design, cultivation, plant management, harvesting and utilization.", topics: ["Introduction to Medicinal Plants", "Medicinal Plant Selection", "Small-Space Medicinal Garden Design", "Cultivation & Plant Management", "Harvesting & Utilization"], benefits: ["Explore useful medicinal plants", "Plan a compact medicinal garden", "Understand basic plant management", "Learn harvesting and utilization"] },
  { title: "Saffron Cultivation in Hydroponics", tag: "Advanced Cultivation", description: "Explore saffron cultivation concepts using hydroponic growing approaches.", image: img("photo-1585320806297-9794b3e4eeae"), subtitle: "Saffron Cultivation in Hydroponics", about: "A digital resource focused on saffron cultivation in hydroponic systems.", topics: ["Saffron cultivation in hydroponics"], benefits: ["Explore a specialised cultivation topic", "Learn about hydroponic saffron growing"] },
  { title: "Pearl Farming", tag: "Aquaculture", description: "Explore pearl farming as a specialised agricultural and business opportunity.", image: img("photo-1544947950-fa07a98d237f"), subtitle: "Pearl Farming", about: "A digital resource introducing pearl farming and its potential as a specialised business opportunity.", topics: ["Pearl farming"], benefits: ["Explore pearl farming", "Learn about a specialised business opportunity"] },
];

const courseBenefits = [
  { icon: <FiTarget />, label: "Expert-Led Training" },
  { icon: <FiUsers />, label: "Practical Demonstrations" },
  { icon: <FiCheckCircle />, label: "Flexible Learning Options" },
  { icon: <FiAward />, label: "Certificate (Select Programs)" },
];

const productBenefits = [
  { icon: <FiCheckCircle />, label: "Quality-Checked Materials" },
  { icon: <FiPackage />, label: "Useful Growing Essentials" },
  { icon: <FiSun />, label: "For Home & Commercial Use" },
  { icon: <FiHeadphones />, label: "Guidance When You Need It" },
];

const digitalBenefits = [
  { icon: <FiBookOpen />, label: "Practical Knowledge" },
  { icon: <FiDownload />, label: "Easy-to-Use Resources" },
  { icon: <FiMonitor />, label: "Learn at Your Own Pace" },
  { icon: <FiGlobe />, label: "Access from Anywhere" },
];

function SectionTitle({ eyebrow, title, description, action }) {
  return (
    <div className="asd-section-title">
      <div>
        <span className="asd-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action && (
        <a className="asd-view-all" href={action.href}>
          {action.label} <FiArrowUpRight />
        </a>
      )}
    </div>
  );
}

function BenefitStrip({ items }) {
  return (
    <div className="asd-benefits">
      {items.map((item) => (
        <div className="asd-benefit" key={item.label}>
          <span>{item.icon}</span>
          <small>{item.label}</small>
        </div>
      ))}
    </div>
  );
}

function ImageCard({ item, buttonText = "View Details", onBuy }) {
  return (
    <article className="asd-card">
      <div className="asd-card-image">
        <img src={item.image} alt={item.title} loading="lazy" />
        <span className="asd-card-tag">{item.tag}</span>
      </div>
      <div className="asd-card-body">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {onBuy ? (
          <button type="button" className="asd-card-link asd-buy-button" onClick={() => onBuy(item)}>
            Buy Now <FiArrowUpRight />
          </button>
        ) : (
          <a className="asd-card-link" href="#contact">
            {buttonText} <FiArrowUpRight />
          </a>
        )}
      </div>
    </article>
  );
}


function CoursePurchaseModal({ course, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  if (!course) return null;

  const update = (field) => (event) => {
    setForm((previous) => ({
      ...previous,
      [field]: event.target.value,
    }));
  };

  const sendWhatsApp = (event) => {
    event.preventDefault();

    const durationDetail = course.details?.find((item) =>
      /^duration\s*:/i.test(item)
    );

    const duration = durationDetail
      ? durationDetail.replace(/^duration\s*:\s*/i, "")
      : course.tag || "As per course schedule";

    const courseDetails = (course.modules || []).map((module) => {
      const moduleHeading = module.heading || "";
      const moduleItems = module.items || [];

      return [
        moduleHeading,
        ...moduleItems.map((item) => `  - ${item}`),
      ].join("\n");
    });

    
const message = [
  "*DECCAN GREENS | COURSE PURCHASE*",
  "",
  "================================",
  "",
  "Hello Deccan Greens Team,",
  "",
  "I would like to proceed with the following course.",
  "",
  "*Course:*",
  course.title,
  "",
  "*Duration:*",
  duration,
  "",
  "*Contact Details:*",
  "",
  `Name: ${form.name}`,
  `Mobile: ${form.phone}`,
  `Email: ${form.email}`,
  "",
  "Please share the payment details and enrollment steps.",
  "",
  "Thank you.",
].join("\n");


    const whatsappNumber = "919168689163";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="asd-course-modal-backdrop"
      role="presentation"
      onMouseDown={(event) =>
        event.target === event.currentTarget && onClose()
      }
    >
      <section
        className="asd-course-modal asd-course-modal-mobile-form-first"
        role="dialog"
        aria-modal="true"
        aria-labelledby="asd-course-modal-title"
      >
        <button
          type="button"
          className="asd-course-modal-close"
          onClick={onClose}
          aria-label="Close course details"
        >
          ×
        </button>

        {/* LEFT: COURSE INFORMATION */}
        <div className="asd-course-modal-info">
          <div className="asd-course-modal-info-scroll">
            <span className="asd-eyebrow">
              Course Information
            </span>

            <h2 id="asd-course-modal-title">
              {course.title}
            </h2>

            {course.tagline && (
              <p className="asd-course-tagline">
                {course.tagline}
              </p>
            )}

            {course.about && <p>{course.about}</p>}

            {course.modules?.map((module) => (
              <section
                className="asd-course-module"
                key={module.heading}
              >
                <h3>{module.heading}</h3>

                <ul>
                  {module.items?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}

            {course.benefits && (
              <section className="asd-course-module">
                <h3>Key Benefits</h3>
                <ul>
                  {course.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {course.outcomes && (
              <section className="asd-course-module">
                <h3>Key Learning Outcomes</h3>
                <ul>
                  {course.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {course.audience && (
              <section className="asd-course-module">
                <h3>Who Should Enroll?</h3>
                <ul>
                  {course.audience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {course.resources && (
              <section className="asd-course-module">
                <h3>Special Learning Resources</h3>
                <ul>
                  {course.resources.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {course.details && (
              <section className="asd-course-module">
                <h3>Course Details</h3>
                <ul>
                  {course.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {course.why && (
              <section className="asd-course-module">
                <h3>Why Choose Deccan Greens?</h3>
                <p>{course.why}</p>
              </section>
            )}

            <div className="asd-course-modal-cta">
              <strong>{course.title}</strong>
              <p>
                Learn More. Grow More. Start your learning
                journey with Deccan Greens.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: COURSE PURCHASE FORM */}
        <div className="asd-course-modal-form-panel">
          <span className="asd-eyebrow">
            ENROLLMENT
          </span>

          <h3>Buy This Course</h3>

          <div className="asd-purchase-course-title">
            {course.title}
          </div>

          <p>
            Enter your details to continue with course
            enrollment on WhatsApp.
          </p>

          <form
            className="asd-course-enquiry-form"
            onSubmit={sendWhatsApp}
          >
            <div className="asd-form-field asd-form-name">
              <div className="asd-form-label-row">
                <label htmlFor="asd-buyer-name">
                  Full Name
                </label>
                <em>*</em>
              </div>

              <input
                id="asd-buyer-name"
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="asd-form-field asd-form-mobile">
              <div className="asd-form-label-row">
                <label htmlFor="asd-buyer-mobile">
                  Mobile Number
                </label>
                <em>*</em>
              </div>

              <input
                id="asd-buyer-mobile"
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="Enter mobile number"
                autoComplete="tel"
                pattern="[0-9+() -]{8,}"
                required
              />
            </div>

            <div className="asd-form-field asd-form-email">
              <div className="asd-form-label-row">
                <label htmlFor="asd-buyer-email">
                  Email Address
                </label>
                <em>*</em>
              </div>

              <input
                id="asd-buyer-email"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
            </div>

            <label className="asd-form-consent">
              <input type="checkbox" required />

              <span>
                I agree to be contacted by Deccan Greens
                regarding my course purchase.
              </span>
            </label>

            <button type="submit">
              Buy Now <FiArrowUpRight />
            </button>
          </form>

          <small className="asd-course-form-note">
            Your course purchase request will open in
            WhatsApp for confirmation.
          </small>
        </div>
      </section>
    </div>
  );
}



function EbookPurchaseModal({ ebook, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  if (!ebook) return null;
  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const sendWhatsApp = (event) => {
    event.preventDefault();
    const message = [
      "*DECCAN GREENS | E-BOOK PURCHASE*",
      "",
      "Hello Deccan Greens Team,",
      "I would like to purchase the following e-book:",
      "",
      `*E-book:* ${ebook.title}`,
      ebook.englishTitle ? `*English Title:* ${ebook.englishTitle}` : "",
      `*Overview:* ${ebook.about || ebook.description}`,
      ebook.subtitle ? `*Subtitle:* ${ebook.subtitle}` : "",
      ebook.topics?.length ? `*Topics covered:*\\n${ebook.topics.map((x) => `• ${x}`).join("\\n")}` : "",
      ebook.benefits?.length ? `*Key benefits:*\\n${ebook.benefits.map((x) => `• ${x}`).join("\\n")}` : "",
      "",
      "*Customer Details*",
      `Name: ${form.name}`,
      `Mobile: ${form.phone}`,
      `Email: ${form.email}`,
      "",
      "Please share the price, payment details and steps to receive the e-book.",
      "Thank you."
    ].filter(Boolean).join("\\n");
    const whatsappURL = `https://wa.me/919168689163?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="asd-course-modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <section className="asd-course-modal asd-course-modal-mobile-form-first" role="dialog" aria-modal="true" aria-labelledby="asd-ebook-modal-title">
        <button type="button" className="asd-course-modal-close" onClick={onClose} aria-label="Close e-book details">×</button>
        <div className="asd-course-modal-info">
          <div className="asd-course-modal-info-scroll">
            <span className="asd-eyebrow">E-BOOK INFORMATION</span>
            <h2 id="asd-ebook-modal-title">{ebook.title}</h2>
            {ebook.englishTitle && <p><strong>{ebook.englishTitle}</strong></p>}
            {ebook.subtitle && <p className="asd-course-tagline">{ebook.subtitle}</p>}
            <p>{ebook.about}</p>
            {ebook.topics?.length > 0 && <section className="asd-course-module"><h3>What You'll Explore</h3><ul>{ebook.topics.map((x) => <li key={x}>{x}</li>)}</ul></section>}
            {ebook.benefits?.length > 0 && <section className="asd-course-module"><h3>Key Benefits</h3><ul>{ebook.benefits.map((x) => <li key={x}>{x}</li>)}</ul></section>}
            <div className="asd-course-modal-cta"><strong>{ebook.title}</strong><p>Read. Learn. Grow with Deccan Greens.</p></div>
          </div>
        </div>
        <div className="asd-course-modal-form-panel">
          <span className="asd-eyebrow">E-BOOK PURCHASE</span><h3>Buy This E-book</h3>
          <div className="asd-purchase-course-title">{ebook.title}</div>
          <p>Enter your details to continue your e-book purchase on WhatsApp.</p>
          <form className="asd-course-enquiry-form" onSubmit={sendWhatsApp}>
            <div className="asd-form-field"><div className="asd-form-label-row"><label htmlFor="asd-ebook-name">Full Name</label><em>*</em></div><input id="asd-ebook-name" value={form.name} onChange={update("name")} placeholder="Enter your name" autoComplete="name" required /></div>
            <div className="asd-form-field"><div className="asd-form-label-row"><label htmlFor="asd-ebook-mobile">Mobile Number</label><em>*</em></div><input id="asd-ebook-mobile" type="tel" value={form.phone} onChange={update("phone")} placeholder="Enter mobile number" autoComplete="tel" pattern="[0-9+() -]{8,}" required /></div>
            <div className="asd-form-field"><div className="asd-form-label-row"><label htmlFor="asd-ebook-email">Email Address</label><em>*</em></div><input id="asd-ebook-email" type="email" value={form.email} onChange={update("email")} placeholder="Enter email address" autoComplete="email" required /></div>
            <label className="asd-form-consent"><input type="checkbox" required /><span>I agree to be contacted by Deccan Greens regarding my e-book purchase.</span></label>
            <button type="submit">Buy Now <FiArrowUpRight /></button>
          </form>
          <small className="asd-course-form-note">Your purchase request will open in WhatsApp for confirmation.</small>
        </div>
      </section>
    </div>
  );
}

export default function ASD() {
  const [searchParams] = useSearchParams();
  const [selectedCourse, setSelectedCourse] = useState(null); const [selectedEbook, setSelectedEbook] = useState(null);

  const tab = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState(
    ["courses", "products", "ebooks"].includes(tab)
      ? tab
      : "courses"
  );

  useEffect(() => {
    if (["courses", "products", "ebooks"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [tab]);

  return (
    <main className="asd-page">
      {/* HERO — full-width image and fading cream overlay, matching Home */}
      <section className="asd-hero" aria-labelledby="asd-hero-title">
        <img
          className="asd-hero-image"
          src="src/assets/images/academy-hero.png"
          alt=""
          aria-hidden="true"
        />
        <div className="asd-hero-overlay" />

        <div className="asd-hero-copy">
          <span className="asd-eyebrow">Academy &amp; Store</span>
          <h1 id="asd-hero-title">
            Learn. Grow.
            <br />
            <em>Access. All in One Place.</em>
          </h1>
          <p>
            Explore our training programs, quality agricultural products and
            digital resources designed to help you grow with practical
            knowledge and sustainable solutions.
          </p>

          <div className="asd-hero-benefits">
            <div>
              <span><FiTarget /></span>
              <b>Practical Learning</b>
            </div>
            <div>
              <span><FiShoppingBag /></span>
              <b>Quality Products</b>
            </div>
            <div>
              <span><FiBookOpen /></span>
              <b>Digital Resources</b>
            </div>
          </div>
        </div>

        <div className="asd-hero-note">
          <span><FiSun /></span>
          <strong>Knowledge Products for a Greener Tomorrow</strong>
        </div>
      </section>

      {/* CATEGORY SWITCHER — content changes in place without page scrolling */}
      <nav className="asd-tabs" aria-label="Academy and store categories" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "courses"}
          className={`asd-tab ${activeTab === "courses" ? "asd-tab-active" : ""}`}
          onClick={() => setActiveTab("courses")}
        >
          <span><FiAward /></span>
          <div><b>Courses</b><small>Learn from Experts</small></div>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "products"}
          className={`asd-tab ${activeTab === "products" ? "asd-tab-active" : ""}`}
          onClick={() => setActiveTab("products")}
        >
          <span><FiShoppingBag /></span>
          <div><b>Products</b><small>Shop Quality Materials</small></div>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "ebooks"}
          className={`asd-tab ${activeTab === "ebooks" ? "asd-tab-active" : ""}`}
          onClick={() => setActiveTab("ebooks")}
        >
          <span><FiBookOpen /></span>
          <div><b>E-Books</b><small>Digital Knowledge Library</small></div>
        </button>
      </nav>

      {/* Only the selected category renders; switching does not scroll */}
      <div className="asd-tab-content" key={activeTab}>
        {activeTab === "courses" && (
          <section className="asd-section asd-academy" role="tabpanel">
            <SectionTitle
              eyebrow="Our Training Programs"
              title={<>Practical Training<br />for Real-World Agriculture</>}
              description="Gain hands-on knowledge through our expert-led training programs designed for farmers, home growers, entrepreneurs and institutions."
              // action={{ label: "View All Courses", href: "#contact" }}
            />
            <BenefitStrip items={courseBenefits} />
            <div className="asd-card-grid">
              {courses.map((course) => <ImageCard item={course} key={course.title} onBuy={setSelectedCourse} />)}
            </div>
          </section>
        )}

        {activeTab === "products" && (
          <section className="asd-store" role="tabpanel">
            <SectionTitle
              eyebrow="Shop with Confidence"
              title={<>Quality Products for<br />Better Growing</>}
              description="Discover practical gardening and agricultural essentials selected to support healthy plants, productive spaces and sustainable growing."
              action={{ label: "Explore Products", href: "#contact" }}
            />
            <BenefitStrip items={productBenefits} />
            <div className="asd-card-grid">
              {products.map((product) => (
                <ImageCard item={product} buttonText="Explore Product" key={product.title} />
              ))}
            </div>
          </section>
        )}

        {activeTab === "ebooks" && (
          <section className="asd-digital" role="tabpanel">
          <div>
            <SectionTitle
              eyebrow="Digital Knowledge Library"
              title={<>Knowledge to Help You<br />Grow with Confidence</>}
              description="Access useful e-books, guides and digital resources created to make agricultural knowledge easier to understand and apply."
              action={{ label: "View All Resources", href: "#contact" }}
            />
            <BenefitStrip items={digitalBenefits} />
            <div className="asd-card-grid">
              {ebooks.map((ebook) => (
                <ImageCard item={ebook} key={ebook.title} onBuy={setSelectedEbook} />
              ))}
            </div>
          </div>
          </section>
        )}
      </div>

      {/* CONTACT CTA */}
      <section className="asd-bottom-cta" id="contact">
        <div className="asd-cta-copy">
          <span className="asd-eyebrow">Let's Grow Together</span>
          <h2>Need Help Choosing the Right Learning or Growing Solution?</h2>
          <p>
            Talk to our team for guidance on training programs, products and
            digital resources that match your goals.
          </p>
          <div className="asd-cta-actions">
            <a className="asd-cta-light" href="mailto:hello@deccangreens.com">
              Talk to Our Experts <FiArrowUpRight />
            </a>
            <a
              className="asd-cta-whatsapp"
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              Contact Our Team
            </a>
          </div>
        </div>
        <div className="asd-cta-image" aria-hidden="true">
          <img
            src={img("photo-1497250681960-ef046c08a56e", 900)}
            alt=""
            loading="lazy"
          />
        </div>
      </section>

      {/* Course purchase modal: rendered at page level so it can cover the full viewport */}
      {selectedCourse && <CoursePurchaseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />}
      {selectedEbook && <EbookPurchaseModal ebook={selectedEbook} onClose={() => setSelectedEbook(null)} />}
    </main>
  );
}
