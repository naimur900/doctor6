import {
  Droplet,
  ShieldAlert,
  Stethoscope,
  Sun,
  Umbrella,
  Utensils,
  X,
} from "lucide-react";
  
  const samplePdfPath = "/pdf/Journal-PDF.pdf";
  
  export const services = [
    {
      title: "চর্ম/ত্বকের সব ধরনের রোগ",
      description:
        "যেকোনো চর্ম রোগ যেমন ফাঙ্গাল ইনফেকশন, একজিমা, সোরিয়াসিস বা ভাইরাসজনিত চর্মরোগের সঠিক চিকিৎসা করা হয়। রোগের প্রকৃতি নির্ণয় করে প্রয়োজনীয় মেডিসিন, থেরাপি এবং অন্যান্য আধুনিক চিকিৎসা পদ্ধতি প্রদান করা হয়।",
      imgURL: "/images/services/s1.webp",
    },
    {
      title: "অ্যালার্জি, ঔষধের প্রতিক্রিয়া",
      description:
        "ত্বকের অ্যালার্জি এবং ঔষধজনিত প্রতিক্রিয়ার ফলে হওয়া চুলকানি, লালচে র‍্যাশ বা ত্বকের অন্যান্য সমস্যার চিকিৎসা করা হয়। অ্যালার্জি টেস্ট করে সঠিক প্রতিরোধ ও চিকিৎসা প্রদান করা হয়।",
      imgURL: "/images/services/s2.webp",
    },
    {
      title: "শিশু, মহিলা এবং গর্ভবতীর সব ধরনের চর্মরোগ ও অ্যালার্জি",
      description:
        "শিশুদের সংবেদনশীল ত্বক, নারীদের হরমোনজনিত চর্মরোগ এবং গর্ভবতী নারীদের ত্বকের সমস্যার জন্য আলাদা ও নিরাপদ চিকিৎসা প্রদান করা হয়। গর্ভাবস্থায় ব্যবহৃত ওষুধ বা থেরাপি মা ও শিশুর জন্য ঝুঁকিমুক্ত।",
      imgURL: "/images/services/s3.webp",
    },
    {
      title: "চুলপড়া, ত্বকে বলিরেখা, বয়সের ছাপ",
      description:
        "চুল পড়া বন্ধ করার জন্য বিশেষ থেরাপি, হেয়ার রিজেনারেশন টেকনিক এবং ঔষধ দেওয়া হয়। ত্বকে বয়সের ছাপ, বলিরেখা বা রোদে পোড়ার দাগ দূর করতে স্কিন রিজুভেনেশন এবং লেজার থেরাপি ব্যবহার করা হয়।",
      imgURL: "/images/services/s4.webp",
    },
    {
      title: "ব্রণ, মেছতা, শরীরে অবাঞ্ছিত দাগ, ব্রণের গর্ত",
      description:
        "ব্রণ থেকে সৃষ্ট দাগ বা গর্ত দূর করার জন্য বিশেষায়িত লেজার থেরাপি, ক্রিম এবং মাইক্রো ডার্ম অ্যাব্রেশন পদ্ধতি ব্যবহার করা হয়। মেছতা এবং ত্বকের অন্যান্য স্থায়ী দাগের জন্য লং-টার্ম স্কিন ট্রিটমেন্ট দেওয়া হয়।",
      imgURL: "/images/services/s5.webp",
    },
    {
      title: "অবাঞ্ছিত লোম, শ্বেতী",
      description:
        "অবাঞ্ছিত লোমের সমস্যার জন্য লেজার রিমুভাল টেকনিক ব্যবহার করা হয় যা স্থায়ী সমাধান দেয়। শ্বেতী রোগের ক্ষেত্রে ত্বকের রং ফিরিয়ে আনতে প্রয়োজনীয় চিকিৎসা এবং পিগমেন্ট থেরাপি প্রদান করা হয়।",
      imgURL: "/images/services/s6.webp",
    },
    {
      title: "ভিল, আঁচিল, ত্বকের টিউমার",
      description:
        "ত্বকে ভিল বা আঁচিল হলে তা ইলেকট্রোকটারি বা ক্রায়ো সার্জারি ব্যবহার করে সরানো হয়। এছাড়া, ত্বকের ছোট টিউমার নির্ণয় করে প্রয়োজনে অস্ত্রোপচার করা হয়।",
      imgURL: "/images/services/s7.webp",
    },
    {
      title: "কুষ্ঠ, আর্সেনিক",
      description:
        "কুষ্ঠ রোগ এবং আর্সেনিকজনিত ত্বকের রোগ যেমন দাগ, ক্ষত বা সংক্রমণের জন্য সঠিক মেডিসিন এবং দীর্ঘমেয়াদী চিকিৎসা দেওয়া হয়। রোগের পর্যায় বুঝে বিশেষায়িত চিকিৎসা করা হয়।",
      imgURL: "/images/services/s8.webp",
    },
    {
      title: "নখের সমস্যা",
      description:
        "নখের ফাঙ্গাল ইনফেকশন, প্যারোনাইকিয়া, ইনগ্রোন নখ বা নখের ভঙ্গুর অবস্থা নিরাময়ে আধুনিক চিকিৎসা দেওয়া হয়। প্রয়োজনে নখের গঠন পুনরুদ্ধার করার জন্য বিশেষ পদ্ধতি প্রয়োগ করা হয়।",
      imgURL: "/images/services/s9.webp",
    },
    {
      title: "ত্বকে টিউমার, সিস্ট (Cyst), কেলোয়েড (Keloid)",
      description:
        "ত্বকের টিউমার বা সিস্ট এবং কেলোয়েডের জন্য ইলেকট্রোসার্জারি, লেজার বা প্রয়োজনীয় অস্ত্রোপচার করা হয়। ফোলা দাগ বা কঠিন টিউমারের জন্য দ্রুত এবং কার্যকর চিকিৎসা নিশ্চিত করা হয়।",
      imgURL: "/images/services/s10.webp",
    },
    {
      title: "ভাইরাসজনিত গোটা (Molluscum Contagiosum) (Viral warts)",
      description:
        "মলাসকাম কন্টাজিওসামের মতো ভাইরাসজনিত রোগের চিকিৎসায় ইলেকট্রোকটারি বা ওষুধের মাধ্যমে দ্রুত নিরাময় করা হয়। রোগ ছড়ানো বন্ধ করতে তাৎক্ষণিক পদক্ষেপ নেওয়া হয়।",
      imgURL: "/images/services/s11.webp",
    },
    {
      title: "জন্ম দাগ (NEVUS)",
      description:
        "জন্ম দাগ বা রঙের অস্বাভাবিকতা কমানোর জন্য লেজার এবং স্কিন রিজুভেনেশন পদ্ধতি ব্যবহার করা হয়। চিকিৎসাটি ত্বকের গঠন অনুযায়ী পরিকল্পনা করা হয়।",
      imgURL: "/images/services/s12.webp",
    },
    {
      title: "ট্যাটু দাগ (Tattoo marks)",
      description:
        "ট্যাটু মুছার জন্য বিশেষ লেজার প্রযুক্তি ব্যবহার করা হয়। এটি নিরাপদ পদ্ধতিতে দাগ সরানোর পাশাপাশি ত্বকের প্রাকৃতিক সৌন্দর্য ফিরিয়ে আনে।",
      imgURL: "/images/services/s13.webp",
    },
    {
      title: "আর্সেনিকজনিত ক্যান্সার",
      description:
        "আর্সেনিকের কারণে সৃষ্ট ত্বকের ক্যান্সার সঠিক পরীক্ষার মাধ্যমে শনাক্ত করা হয় এবং প্রয়োজনীয় থেরাপি বা অস্ত্রোপচার করা হয়।",
      imgURL: "/images/services/s14.webp",
    },
    {
      title: "অতিরিক্ত হাত-পা ঘামা",
      description:
        "হাত-পায়ের অতিরিক্ত ঘাম বন্ধ করতে বিশেষ ওষুধ বা ইলেকট্রোকটারি পদ্ধতি ব্যবহার করা হয়। এটি ঘামের গ্রন্থি বন্ধ করে দেয়।",
      imgURL: "/images/services/s15.webp",
    },
    {
      title: "মাতৃত্বজনিত দাগ",
      description:
        "গর্ভকালীন সময়ে ত্বকে হওয়া ফাটা দাগ বা প্রসব-পরবর্তী ত্বকের সমস্যার জন্য উন্নত থেরাপি এবং স্কিন ক্রিম দেওয়া হয়।",
      imgURL: "/images/services/s16.webp",
    },
    {
      title: "কর্ন, ক্যালাস (Corn, Callous)",
      description:
        "পায়ের কর্ন বা ক্যালাস চিকিৎসার জন্য বিশেষ থেরাপি এবং প্রয়োজনে অপারেশন করা হয়। পায়ের আরামদায়ক জুতা ব্যবহারের পরামর্শও দেওয়া হয়।",
      imgURL: "/images/services/s17.webp",
    },
    {
      title: "সব ধরনের যৌন রোগের চিকিৎসা ও পরামর্শ",
      description:
        "যৌন রোগ যেমন সিফিলিস, গনোরিয়া ইত্যাদি রোগের সঠিক পরীক্ষা এবং ওষুধের মাধ্যমে চিকিৎসা করা হয়। রোগীকে গোপনীয়তার সঙ্গে সঠিক পরামর্শও দেওয়া হয়।",
      imgURL: "/images/services/s18.webp",
    },
  ];
  
  export const chambers = [
    {
      id: "chamber1",
      imgURL: "/images/c1.webp",
      name: "Ibn Sina Diagnostic & Imaging Center",
      location: "House #48, Road #9A, Dhanmondi, Dhaka-1209, Bangladesh",
      visiting: "6pm to 9pm (Closed: Friday)",
      contact: "+8809610010615",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.056041407119!2d90.36970697484558!3d23.745380888969972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4c7c2d90a9%3A0x26436b1b9dcd741e!2sIbn%20Sina%20Diagnostic%20and%20Imaging%20Center%20(Dhanmondi%209A)!5e0!3m2!1sen!2sbd!4v1737031049431!5m2!1sen!2sbd",
    },
    {
      id: "chamber2",
      imgURL: "/images/c2.webp",
      name: "Popular Diagnostic Centre Ltd.",
      location: "House #16, Road #2, Dhanmondi, Dhaka-1205, Bangladesh",
      visiting: "12pm to 1pm (Closed: Mon, Thu & Friday)",
      contact: "+8809613787801",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.234285515575!2d90.37913487533558!3d23.73902337867816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7d77ee2d3%3A0xf7cf072181fe0001!2sPopular%20Consultation%20Centre-1!5e0!3m2!1sen!2sbd!4v1736847765505!5m2!1sen!2sbd",
    },
    {
      id: "chamber3",
      imgURL: "/images/c3.webp",
      name: "Modern Diagnostic Center, Narayanganj",
      location: "207, Bangabandhu Road, Chashara, Narayanganj – 1400, Bangladesh",
      visiting: "3pm to 6pm (Only Friday)",
      contact: "+8801619088999",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.5379950357274!2d90.4979037748419!3d23.620896693736697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b109c6219add%3A0x66dd18de9932d4f5!2sModern%20Diagnostic%20Center%20-%20Narayanganj!5e0!3m2!1sen!2sbd!4v1737033169014!5m2!1sen!2sbd",
    },
  ];
  
  export const about = [
    {
      title: "Concentration",
      content:
        "Acne Problems\nAllergic conjunctivitis\nAllergic Rhinitis\nBacterial Skin Infection Treatment\nChronic Skin Allergy\nDimple Creation\nDisorder of Sexual Differentiation\nFemale Sexual Dysfunction\nSun Burn Treatment\nNail Diseases Treatment",
      pos: "end",
      titlePos: "start",
    },
    {
      title: "Experience",
      content:
        "Professor - Dhaka Medical College & Hospital's Department of Dermatology & Venereology\n20 Years of Experience Overall",
      pos: "start",
      titlePos: "end",
    },
    {
      title: "Specialization",
      content: "Skin, Allergy, Leprosy & Sex Diseases",
      pos: "end",
      titlePos: "start",
    },
    {
      title: "Education",
      content:
        "MBBS - Bachelor of Medicine and Bachelor of Surgery\nMD - Masters of surgery\nCCD - Birdem\nDLP - UK",
      pos: "start",
      titlePos: "end",
    },
  ];
  
  export const reviews = [
    {
      text: "Prof. Dr. Masuda Khatun’s care and attention to detail are unmatched. She goes above and beyond to ensure her patients feel confident and informed.",
      person: "Mehrunnnesa A ",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      text: "I was nervous about my condition, but Prof. Dr. Masuda’s thorough explanations and calm demeanor put me at ease immediately.",
      person: "Marufa K.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      text: "Professor Masuda’s personalized approach to treatment made all the difference. She truly understands her patients’ unique needs.",
      person: "Najza M.",
      star: "⭐⭐⭐⭐",
    },
    {
      text: "I’ve never met a doctor as attentive and knowledgeable as Prof. Dr. Masuda Khatun. She has earned my trust completely.",
      person: "Yeasmin A.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      text: "The care I received from Prof. Dr. Masuda was extraordinary. She took the time to address all my concerns with genuine empathy.",
      person: "Rashida H.",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      text: "Prof. Masuda’s dedication to her patients is inspiring. Her proactive approach helped me manage my condition effectively.",
      person: "Josna B.",
      star: "⭐⭐⭐⭐",
    },
  ];
  
  export const journals = [
    {
      id: "item-1",
      title: "Advanced Techniques in Skin Allergy Treatment",
      date: "2023",
      abstract:
        "This paper discusses the latest advancements in skin allergy treatments and leprosy management...",
      pdfUrl: samplePdfPath,
    },
    {
      id: "item-2",
      title: "Innovations in Dermatological Care",
      date: "2023",
      abstract:
        "A comprehensive review of modern approaches to treating chronic skin conditions and sex diseases...",
      pdfUrl: samplePdfPath,
    },
    {
      id: "item-3",
      title: "Leprosy: Current Practices and Treatments",
      date: "2022",
      abstract:
        "An overview of current practices and emerging trends in leprosy and skin disease treatments...",
      pdfUrl: samplePdfPath,
    },
  ];
  
  // export const introInfo = {
  //   name: "Prof. Dr. Masuda Khatun",
  //   headline: "Skin, Allergy, Leprosy & Sex Diseases Specialist",
  //   description:
  //     "প্রফেসর ডা. মাসুদা খাতুন একজন প্রখ্যাত চর্মরোগ বিশেষজ্ঞ। তিনি এমবিবিএস এবং এমডি (ডার্মাটোলজি) ডিগ্রিধারী। বর্তমানে তিনি ঢাকা মেডিকেল কলেজ ও হাসপাতালের চর্মরোগ ও যৌনরোগ বিভাগের অধ্যাপক হিসেবে কর্মরত।",
  //   imgURL: "/images/doctorIntroPic.webp",
  // };
  
  export const introInfo = {
    name: "অধ্যাপক (ডাঃ) মাসুদা খাতুন",
    nameEng: "Prof. Dr. Masuda Khatun",
    headline: "এমবিবিএস (বিসিএস স্বাস্থ্য), এমডি (চর্ম ও যৌন রোগ)",
    desgnation: "অধ্যাপক, চর্ম ও যৌন রোগ বিভাগ",
    place: " ঢাকা মেডিকেল কলেজ হাসপাতাল, ঢাকা।",
    description2:
      "প্রফেসর ডা. মাসুদা খাতুন একজন প্রখ্যাত চর্মরোগ বিশেষজ্ঞ। তিনি এমবিবিএস এবং এমডি (ডার্মাটোলজি) ডিগ্রিধারী। বর্তমানে তিনি ঢাকা মেডিকেল কলেজ ও হাসপাতালের চর্মরোগ ও যৌনরোগ বিভাগের অধ্যাপক হিসেবে কর্মরত।",
    imgURL: "/images/doctorIntroPic.webp",
    imgAvatarUrl: "/images/doctorIntroPic-2.webp",
  };
  
  export const navItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/services", label: "Services" },
    { id: "/journals", label: "Journals" },
    { id: "/tips", label: "Tips" },
    { id: "/contact", label: "Contact" },
  ];
  
  export const tips = [
    {
      icon: <Droplet className="h-6 w-6" />,
      tip: "ত্বকে পর্যাপ্ত ময়েশ্চারাইজার ব্যবহার করুন।",
    },
    {
      icon: <X className="h-6 w-6" />,
      tip: "গোসলের সময় শক্ত কিছু দিয়ে ত্বক ঘষবেন না।",
    },
    {
      icon: <Sun className="h-6 w-6" />,
      tip: "রোদে বের হবার আগে এবং চুলার কাছে যাওয়ার আগে মুখে, গলায়, হাতে সান ব্লক ক্রিম ব্যবহার করুন।",
    },
    {
      icon: <Umbrella className="h-6 w-6" />,
      tip: "সকাল ৯টা থেকে দুপুর ৩টা পর্যন্ত রোদ যতদূর সম্ভব এড়িয়ে চলুন এবং সম্ভব হলে ছাতা ব্যবহার করুন।",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      tip: "ত্বকে রোগ হওয়া মাত্রই অযথা খাবার বাছবেন না এবং বিশেষজ্ঞের পরামর্শ নিন।",
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      tip: "ফুটপাতের চমকদার কথায় প্রতারিত হবেন না।",
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      tip: "চর্ম ও যৌন রোগ বিষয়ে যেকোন সমস্যার জন্য বিশেষজ্ঞ ডাক্তারের পরামর্শ গ্রহণ করুন।",
    },
  ];