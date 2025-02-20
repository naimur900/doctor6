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
      title: "মূত্রথলী ক্যান্সার সার্জারি",
      description:
        "মূত্রথলীর ক্যান্সার নিরাময়ে সার্জারির মাধ্যমে আক্রান্ত কোষ বা টিউমার অপসারণ করা হয়। রোগের পর্যায় ও অবস্থার উপর ভিত্তি করে সার্জারির ধরন নির্ধারণ করা হয়।",
      imgURL: "/images/services/s1.webp",
    },
    {
      title: "সিরোসিস",
      description:
        "সিরোসিস হলো লিভারের দীর্ঘমেয়াদী রোগ, যেখানে লিভারের কোষ ক্ষতিগ্রস্ত হয়ে কার্যক্ষমতা হারায়। এর ফলে লিভার ক্যান্সারের ঝুঁকি বাড়ে।",
      imgURL: "/images/services/s2.webp",
    },
    {
      title: "কলোনোস্কোপি",
      description:
        "কলোনোস্কোপি একটি এন্ডোস্কোপিক পরীক্ষা, যার মাধ্যমে বৃহদান্ত্র ও মলাশয়ের অভ্যন্তরীণ অবস্থা মূল্যায়ন করা হয়। এটি পলিপ, আলসার বা ক্যান্সার শনাক্তে ব্যবহৃত হয়।",
      imgURL: "/images/services/s3.webp",
    },
    {
      title: "পাইলস",
      description:
        "পাইলস বা হেমোরয়েড হলো মলদ্বারের রক্তনালির ফোলা বা স্ফীতি। এটি ব্যথা, রক্তপাত ও অস্বস্তি সৃষ্টি করতে পারে।",
      imgURL: "/images/services/s4.webp",
    },
    {
      title: "ক্ষুদ্রান্ত্র",
      description:
        "ক্ষুদ্রান্ত্র হলো পাচনতন্ত্রের একটি অংশ, যেখানে খাদ্যের প্রধান হজম ও পুষ্টি শোষণ প্রক্রিয়া সম্পন্ন হয়।",
      imgURL: "/images/services/s5.webp",
    },
    {
      title: "আলসারেটিভ কোলাইটিস চিকিৎসা",
      description:
        "আলসারেটিভ কোলাইটিস হলো বৃহদান্ত্রের প্রদাহজনিত রোগ, যা দীর্ঘস্থায়ী ডায়রিয়া ও পেটের ব্যথা সৃষ্টি করে। এর চিকিৎসায় ওষুধ ও প্রয়োজনে সার্জারি প্রয়োগ করা হয়।",
      imgURL: "/images/services/s6.webp",
    },
    {
      title: "লিভার রোগের চিকিৎসা",
      description:
        "লিভারের বিভিন্ন রোগ যেমন হেপাটাইটিস, সিরোসিস বা ফ্যাটি লিভারের চিকিৎসায় ওষুধ, খাদ্য নিয়ন্ত্রণ ও প্রয়োজনে সার্জারি প্রয়োগ করা হয়।",
      imgURL: "/images/services/s7.webp",
    },
    {
      title: "অম্লতা চিকিৎসা",
      description:
        "অম্লতা বা এসিডিটি হলো পাকস্থলীতে অতিরিক্ত অ্যাসিড নিঃসরণ, যা বুক জ্বালা ও অস্বস্তি সৃষ্টি করে। এর চিকিৎসায় অ্যান্টাসিড ও খাদ্যাভ্যাস নিয়ন্ত্রণ করা হয়।",
      imgURL: "/images/services/s8.webp",
    },
    {
      title: "ইরিটেবল বাওয়েল সিনড্রোম",
      description:
        "ইরিটেবল বাওয়েল সিনড্রোম (IBS) হলো অন্ত্রের কার্যকারিতার ব্যাধি, যা পেটের ব্যথা, ফোলাভাব ও অনিয়মিত মলত্যাগের কারণ হয়।",
      imgURL: "/images/services/s9.webp",
    },
    {
      title: "পেপটিক/গ্যাসট্রিক আলসার চিকিৎসা",
      description:
        "পেপটিক বা গ্যাসট্রিক আলসার হলো পাকস্থলী বা ক্ষুদ্রান্ত্রের প্রাচীরে ক্ষত। এর চিকিৎসায় ওষুধ ও খাদ্য নিয়ন্ত্রণ প্রয়োগ করা হয়।",
      imgURL: "/images/services/s10.webp",
    },
    {
      title: "হেপাটাইটিস এ চিকিৎসা",
      description:
        "হেপাটাইটিস এ হলো লিভারের ভাইরাসজনিত সংক্রমণ, যা সাধারণত খাদ্য বা পানির মাধ্যমে ছড়ায়। বিশ্রাম, পুষ্টিকর খাদ্য ও পর্যাপ্ত পানি পানের মাধ্যমে এটি নিরাময় করা যায়।",
      imgURL: "/images/services/s11.webp",
    },
    {
      title: "স্টিওটোসিস",
      description:
        "স্টিওটোসিস বা ফ্যাটি লিভার হলো লিভারে অতিরিক্ত চর্বি জমা হওয়া, যা লিভারের কার্যকারিতা ব্যাহত করতে পারে।",
      imgURL: "/images/services/s12.webp",
    },
    {
      title: "কলন",
      description:
        "কলন বা বৃহদান্ত্র হলো পাচনতন্ত্রের শেষ অংশ, যেখানে পানি শোষণ ও মল তৈরি হয়।",
      imgURL: "/images/services/s13.webp",
    },
    {
      title: "হেপাটাইটিস বি চিকিৎসা",
      description:
        "হেপাটাইটিস বি হলো লিভারের ভাইরাসজনিত সংক্রমণ, যা রক্ত বা শরীরের তরলের মাধ্যমে ছড়ায়। এর চিকিৎসায় অ্যান্টিভাইরাল ওষুধ ও প্রয়োজনে লিভার ট্রান্সপ্লান্ট প্রয়োগ করা হয়।",
      imgURL: "/images/services/s14.webp",
    },
    {
      title: "হেপাটাইটিস সি চিকিৎসা",
      description:
        "হেপাটাইটিস সি হলো লিভারের ভাইরাসজনিত সংক্রমণ, যা রক্তের মাধ্যমে ছড়ায়। এর চিকিৎসায় অ্যান্টিভাইরাল ওষুধ ব্যবহৃত হয়।",
      imgURL: "/images/services/s15.webp",
    },
    {
      title: "মূত্রথলী ক্যান্সার সার্জারি",
      description:
        "মূত্রথলীর ক্যান্সার নিরাময়ে সার্জারির মাধ্যমে আক্রান্ত কোষ বা টিউমার অপসারণ করা হয়। রোগের পর্যায় ও অবস্থার উপর ভিত্তি করে সার্জারির ধরন নির্ধারণ করা হয়।",
      imgURL: "/images/services/s16.webp",
    },
    {
      title: "পেট",
      description:
        "পেট বা উদর হলো শরীরের অংশ, যেখানে পাচনতন্ত্রের প্রধান অঙ্গগুলি অবস্থিত।",
      imgURL: "/images/services/s17.webp",
    },
    {
      title: "ক্ষুদ্রান্ত্র",
      description:
        "ক্ষুদ্রান্ত্র হলো পাচনতন্ত্রের একটি অংশ, যেখানে খাদ্যের প্রধান হজম ও পুষ্টি শোষণ প্রক্রিয়া সম্পন্ন হয়।",
      imgURL: "/images/services/s18.webp",
    },
    // {
    //   title: "আলসারেটিভ কোলাইটিস চিকিৎসা",
    //   description:
    //     "আলসারেটিভ কোলাইটিস হলো বৃহদান্ত্রের দীর্ঘমেয়াদী প্রদাহজনিত রোগ, যা ডায়রিয়া, রক্তপাত এবং পেটের ব্যথার কারণ হতে পারে। চিকিৎসায় ওষুধ, খাদ্য নিয়ন্ত্রণ এবং প্রয়োজনে সার্জারি ব্যবহার করা হয়।",
    //   imgURL: "/images/services/s19.webp",
    // },
    // {
    //   title: "সিরোসিস, কলোনোস্কোপি",
    //   description:
    //     "সিরোসিস হলো লিভারের দীর্ঘমেয়াদী রোগ, যেখানে লিভারের কোষ ধীরে ধীরে কার্যক্ষমতা হারায়। কলোনোস্কোপি হলো বৃহদান্ত্র ও মলাশয় পরীক্ষা করার জন্য ব্যবহৃত একটি এন্ডোস্কোপিক পদ্ধতি, যা পলিপ, আলসার বা ক্যান্সার শনাক্তে সাহায্য করে।",
    //   imgURL: "/images/services/s20.webp",
    // },
    // {
    //   title: "ইআরসিপি (ERCP)",
    //   description:
    //     "ইআরসিপি (এন্ডোস্কোপিক রেট্রোগ্রেড কোলাঞ্জিওপ্যানক্রিয়াটোগ্রাফি) হলো একটি বিশেষ এন্ডোস্কোপিক পরীক্ষা, যা পিত্তনালী ও অগ্ন্যাশয় নালির রোগ নির্ণয় এবং চিকিৎসায় ব্যবহৃত হয়। এটি পিত্তনালীর পাথর, বাধা বা টিউমার শনাক্ত করতে সাহায্য করে।",
    //   imgURL: "/images/services/s21.webp",
    // },
  ]
   
  export const chambers = [
    {
      id: "chamber1",
      imgURL: "/images/c1.webp",
      name: "Ibn Sina Diagnostic & Imaging Center",
      location: "House #48, Road #9A, Dhanmondi, Dhaka-1209, Bangladesh",
      visiting: "4:30pm to 8pm (Closed: Friday)",
      contact: "09610010615, 48115270-2, 48114040-1",
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
  ];
  
  export const about = [
    {
      title: "Concentration",
      content: 
          "Bariatric (Gastric Bypass) Surgery\nGas bloat\nGastric Balloon\nGastric Plication\nGastritis Treatment\nGastro Intenstinal Onco Surgery\nGastro-Intestinal Cancer Treatment\nGastroenteritis Treatment\nGastroenterology\nGastrointestinal Bleeding\nGastrointestinal Cancer Surgery\nGastrointestinal Diseases\nGastrointestinal Disorders\nGastrointestinal Infections\nGastrointestinal Oncology\nGastrointestinal Inflammation",
       pos: "end",
      titlePos: "start",
    },
    {
      title: "Experience",
      content:
        "Professor & Head of Combined Military Hospital\n27 Years of Experience Overall",
      pos: "start",
      titlePos: "end",
    },
    {
      title: "Specialization",
      content: "Gastroenterologist",
      pos: "end",
      titlePos: "start",
    },
    {
      title: "Education",
      content:
        "MBBS - Bachelor of Medicine and Bachelor of Surgery\nFCPS (Medicine) - Fellow of College of Physicians and Surgeons Pakistan\nFellowship Gastroenterology & Hepatology - PAK",
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
  
  export const introInfo = {
    name: "ব্রিগেডিয়ার জেনারেল অধ্যাপক (ডাঃ) মোঃ মোখলেসুর রহমান (অবঃ)",
    nameEng: "Prof. Dr. Brig. Gen. Md. Mokhlesur Rahman",
    headline: "এমবিবিএস (ঢাকা), এফসিপিএস (মেডিসিন), ফেলোশিপ ইন গ্যাস্ট্রোএন্টারোলজি (পাকিস্তান)",
    shortName: "Prof. Md. Mokhlesur Rahman",
    desgnation: "প্রাক্তন অধ্যাপক ও বিভাগীয় প্রধান গ্যাস্ট্রোএন্টারোলজি বিভাগ"
    ,place: "সিএমএইচ এবং এএফএমসি, ঢাকা ক্যান্টনমেন্ট।",
    description2:
      "প্রফেসর",
    imgURL: "/images/doctorIntroPic.webp",
    imgAvatarUrl: "/images/doctorIntroPic.webp",
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
      tip: "প্রতিদিন পর্যাপ্ত পরিমাণে পানি পান করুন, এটি হজম প্রক্রিয়া সচল রাখতে সাহায্য করে।",
    },
    {
      icon: <X className="h-6 w-6" />,
      tip: "অতিরিক্ত মশলাযুক্ত ও ভাজাপোড়া খাবার পরিহার করুন, এটি গ্যাস্ট্রিক ও অ্যাসিডিটি বাড়াতে পারে।",
    },
    {
      icon: <Sun className="h-6 w-6" />,
      tip: "খাবারের পর সরাসরি শুয়ে পড়বেন না, এটি অ্যাসিড রিফ্লাক্স ও গ্যাস্ট্রিকের সমস্যা বাড়াতে পারে।",
    },
    {
      icon: <Umbrella className="h-6 w-6" />,
      tip: "দীর্ঘ সময় না খেয়ে থাকবেন না, নিয়মিত ও পরিমিত খাবার গ্রহণ করুন।",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      tip: "ফাইবার সমৃদ্ধ খাবার যেমন শাকসবজি ও ফলমূল খান, এটি হজমে সহায়ক।",
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      tip: "অস্বাস্থ্যকর ও রাস্তার ধুলোবালি মিশ্রিত খাবার খাওয়া থেকে বিরত থাকুন, এটি পাকস্থলীর সংক্রমণ ঘটাতে পারে।",
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      tip: "গ্যাস্ট্রিক, পেট ব্যথা বা হজমজনিত সমস্যা হলে দেরি না করে গ্যাস্ট্রোএন্টারোলজিস্টের পরামর্শ নিন।",
    },
  ];
  