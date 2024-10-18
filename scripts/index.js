const careerBranches = [
  {
    name: "Engineering",
    icon: "fas fa-code",
    description:
      "Explore various engineering disciplines and technological innovations.",
  },
  {
    name: "Medical",
    icon: "fas fa-stethoscope",
    description:
      "Discover careers in healthcare, medicine, and related fields.",
  },
  {
    name: "Business",
    icon: "fas fa-briefcase",
    description:
      "Learn about opportunities in management, finance, and entrepreneurship.",
  },
  {
    name: "Law",
    icon: "fas fa-balance-scale",
    description: "Explore legal professions and the justice system.",
  },
];

let careerSubBranches = [];

const engineeringSubBranches = [
  {
    name: "Computer Science",
    icon: "fas fa-microchip",
    description:
      "Study of computation, information processing, and computer systems.",
  },
  {
    name: "Aerospace Engineering",
    icon: "fas fa-code",
    description: "Application of engineering principles to aerospace systems.",
  },
  {
    name: "Electrical Engineering",
    icon: "fas fa-bolt",
    description: "Study of electricity, electronics, and electromagnetism.",
  },
  {
    name: "Mechanical Engineering",
    icon: "fas fa-cog",
    description: "Design and analysis of mechanical systems and components.",
  },
];

const medicalSubBranches = [
  {
    name: "Cardiology",
    icon: "fas fa-heartbeat",
    description: "Diagnosis and treatment of heart diseases.",
  },
  {
    name: "Neurology",
    icon: "fas fa-brain",
    description: "Study and treatment of nervous system disorders.",
  },
  {
    name: "Oncology",
    icon: "fas fa-ribbon",
    description: "Diagnosis and treatment of cancer.",
  },
];

const businessSubBranches = [
  {
    name: "Finance",
    icon: "fas fa-chart-line",
    description: "Management of money and investments.",
  },
  {
    name: "Operations Management",
    icon: "fas fa-cogs",
    description: "Overseeing and designing business operations.",
  },
  {
    name: "Business Analytics",
    icon: "fas fa-chart-bar",
    description: "Use of data analysis in business decision-making.",
  },
];

const lawSubBranches = [
  {
    name: "Corporate Law",
    icon: "fas fa-building",
    description: "Legal practices related to corporations and businesses.",
  },
  {
    name: "Criminal Law",
    icon: "fas fa-gavel",
    description: "Laws related to crimes and their punishments.",
  },
  {
    name: "Civil Rights Law",
    icon: "fas fa-balance-scale",
    description: "Protection of individuals' rights and liberties.",
  },
];

const computerScienceDatabase = {
  name: "Computer Science",
  heroSection: {
    backgroundImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Computer Science in India",
    description:
      "Explore the exciting world of Computer Science education and career opportunities in India",
    buttonText: "Explore Now",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-university",
      description: "Explore top Computer Science colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "IIT Bombay",
            ranking: 1,
            location: "Mumbai, Maharashtra",
            specialization: "AI, Machine Learning",
          },
          {
            name: "IIT Delhi",
            ranking: 2,
            location: "New Delhi",
            specialization: "Cybersecurity, Big Data",
          },
          {
            name: "IIT Kanpur",
            ranking: 3,
            location: "Kanpur, Uttar Pradesh",
            specialization: "Robotics, Computer Vision",
          },
          {
            name: "IIT Kharagpur",
            ranking: 4,
            location: "Kharagpur, West Bengal",
            specialization: "Quantum Computing, Blockchain",
          },
          {
            name: "IIT Roorkee",
            ranking: 5,
            location: "Roorkee, Uttarakhand",
            specialization: "Natural Language Processing, Computer Graphics",
          },
        ],
        midTier: [
          {
            name: "IIT Madras",
            ranking: 6,
            location: "Chennai, Tamil Nadu",
            specialization: "Cloud Computing, IoT",
          },
          {
            name: "BITS Pilani",
            ranking: 7,
            location: "Pilani, Rajasthan",
            specialization: "Software Engineering, Data Science",
          },
          {
            name: "IIT Guwahati",
            ranking: 8,
            location: "Guwahati, Assam",
            specialization: "Artificial Intelligence, Parallel Computing",
          },
          {
            name: "IIIT Hyderabad",
            ranking: 9,
            location: "Hyderabad, Telangana",
            specialization: "Data Analytics, Information Security",
          },
          {
            name: "VIT Vellore",
            ranking: 10,
            location: "Vellore, Tamil Nadu",
            specialization: "Mobile Computing, Web Technologies",
          },
        ],
        local: [
          {
            name: "NIT Tiruchirappalli",
            ranking: 11,
            location: "Tiruchirappalli, Tamil Nadu",
            specialization: "Computer Networks, Embedded Systems",
          },
          {
            name: "IIIT Bangalore",
            ranking: 12,
            location: "Bangalore, Karnataka",
            specialization: "Software Architecture, Human-Computer Interaction",
          },
          {
            name: "DTU Delhi",
            ranking: 13,
            location: "New Delhi",
            specialization: "Distributed Systems, Computer Architecture",
          },
          {
            name: "NIT Surathkal",
            ranking: 14,
            location: "Mangalore, Karnataka",
            specialization: "Compiler Design, Operating Systems",
          },
          {
            name: "Jadavpur University",
            ranking: 15,
            location: "Kolkata, West Bengal",
            specialization: "Algorithms, Theory of Computation",
          },
          {
            name: "COEP Pune",
            ranking: 16,
            location: "Pune, Maharashtra",
            specialization: "High Performance Computing, Database Management",
          },
          {
            name: "IIIT Allahabad",
            ranking: 17,
            location: "Allahabad, Uttar Pradesh",
            specialization: "Bioinformatics, Cryptography",
          },
          {
            name: "NIT Warangal",
            ranking: 18,
            location: "Warangal, Telangana",
            specialization: "Computer Graphics, Image Processing",
          },
          {
            name: "BITS Goa",
            ranking: 19,
            location: "Goa",
            specialization: "Game Development, Virtual Reality",
          },
          {
            name: "IIT BHU",
            ranking: 20,
            location: "Varanasi, Uttar Pradesh",
            specialization: "Network Security, Wireless Communication",
          },
        ],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Science with Computer Science",
          description:
            "Focus on Physics, Chemistry, Maths, and Computer Science.",
        },
        {
          name: "Science with Biology",
          description:
            "Ideal for those interested in Bioinformatics or Computational Biology.",
        },
        {
          name: "Commerce with Computer Applications",
          description: "Blend of business studies and computer applications.",
        },
        {
          name: "Vocational Course in IT",
          description: "Practical, job-oriented computer courses.",
        },
        {
          name: "Diploma in Computer Science",
          description: "3-year program focusing on practical computer skills.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Computer Science programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "JEE Main",
          type: "National",
          difficulty: "High",
          subjects: "Physics, Chemistry, Mathematics",
        },
        {
          name: "JEE Advanced",
          type: "National",
          difficulty: "Very High",
          subjects: "Physics, Chemistry, Mathematics",
        },
        {
          name: "BITSAT",
          type: "University",
          difficulty: "High",
          subjects: "Physics, Chemistry, Mathematics, English, Logic",
        },
        {
          name: "COMEDK UGET",
          type: "State (Karnataka)",
          difficulty: "Medium",
          subjects: "Physics, Chemistry, Mathematics",
        },
        {
          name: "MHT CET",
          type: "State (Maharashtra)",
          difficulty: "Medium",
          subjects: "Physics, Chemistry, Mathematics",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description:
        "Explore advanced degree options in Computer Science in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "M.Tech in Computer Science",
          duration: "2 years",
          focus: "Advanced CS concepts, research",
        },
        {
          name: "MCA (Master of Computer Applications)",
          duration: "2 years",
          focus: "Application development, software engineering",
        },
        {
          name: "M.Sc in Computer Science",
          duration: "2 years",
          focus: "Theoretical CS, algorithms, research",
        },
        {
          name: "MBA in IT",
          duration: "2 years",
          focus: "IT management, business skills",
        },
        {
          name: "M.Tech in Artificial Intelligence",
          duration: "2 years",
          focus: "AI algorithms, machine learning, deep learning",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description:
        "Discover career paths in the field of Computer Science in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Software Developer",
          avgSalary: "₹5,00,000",
          growth: "22%",
          skills: "Java, Python, JavaScript, Agile",
        },
        {
          role: "Data Scientist",
          avgSalary: "₹8,00,000",
          growth: "31%",
          skills: "Python, R, Machine Learning, Big Data",
        },
        {
          role: "Cybersecurity Analyst",
          avgSalary: "₹6,50,000",
          growth: "31%",
          skills: "Network Security, Ethical Hacking, CISSP",
        },
        {
          role: "AI Engineer",
          avgSalary: "₹7,50,000",
          growth: "21%",
          skills: "Machine Learning, Deep Learning, NLP",
        },
        {
          role: "Cloud Architect",
          avgSalary: "₹15,00,000",
          growth: "25%",
          skills: "AWS, Azure, Google Cloud, DevOps",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description:
        "Find scholarship opportunities for Computer Science students in India.",
      image:
        "https://img.freepik.com/premium-vector/finance-savings-concept-tiny-male-character-collects-gold-coins-huge-glass-jar-businessman-makes-savings-flat-vector-cartoon-character-illustration_77116-2457.jpg",
      content: [
        {
          name: "AICTE PG Scholarship",
          amount: "₹12,400/month",
          eligibility: "GATE qualified students pursuing M.Tech/M.E.",
        },
        {
          name: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
          amount: "Up to ₹80,000/year",
          eligibility: "Students pursuing basic science courses",
        },
        {
          name: "Inspire Scholarship",
          amount: "₹80,000/year",
          eligibility: "Top 1% in 12th standard board examinations",
        },
        {
          name: "Google India Scholarship",
          amount: "Varies",
          eligibility: "Undergraduates in CS or related fields",
        },
        {
          name: "Wipro Santoor Scholarship",
          amount: "Up to ₹24,000/year",
          eligibility: "Girl students from disadvantaged backgrounds",
        },
      ],
    },
  ],
};

const electricalEngineeringDatabase = {
  name: "Electrical Engineering",
  heroSection: {
    backgroundImage:
      "https://t3.ftcdn.net/jpg/08/03/48/72/360_F_803487234_WGjrw55eb5ogfjmdvko0fnon5mKw3cr6.jpg",
    title: "Electrical Engineering in India",
    description:
      "Explore the field of Electrical Engineering and its career opportunities.",
    buttonText: "Explore Electrical Engineering",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-university",
      description: "Explore top Electrical Engineering colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "IIT Bombay",
            ranking: 1,
            location: "Mumbai, Maharashtra",
            specialization: "Power Systems, Control Systems",
          },
          {
            name: "IIT Delhi",
            ranking: 2,
            location: "New Delhi",
            specialization: "Electronics, Communication",
          },
        ],
        midTier: [
          {
            name: "IIT Madras",
            ranking: 3,
            location: "Chennai, Tamil Nadu",
            specialization: "Power Electronics, Control Systems",
          },
          {
            name: "NIT Trichy",
            ranking: 4,
            location: "Tiruchirappalli, Tamil Nadu",
            specialization: "Electrical Machines, Power Systems",
          },
        ],
        local: [
          {
            name: "IIIT Bangalore",
            ranking: 5,
            location: "Bangalore, Karnataka",
            specialization: "Embedded Systems, VLSI Design",
          },
          {
            name: "NIT Surathkal",
            ranking: 6,
            location: "Mangalore, Karnataka",
            specialization: "Signal Processing, Control Systems",
          },
        ],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Science with Electrical Engineering",
          description:
            "Focus on Physics, Chemistry, Maths, and Electrical Engineering.",
        },
        {
          name: "Science with Biology",
          description:
            "Ideal for those interested in Bioinformatics or Computational Biology.",
        },
        {
          name: "Commerce with Electrical Applications",
          description: "Blend of business studies and electrical applications.",
        },
        {
          name: "Vocational Course in Electrical",
          description: "Practical, job-oriented electrical courses.",
        },
        {
          name: "Diploma in Electrical Engineering",
          description:
            "3-year program focusing on practical electrical skills.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Electrical Engineering programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "JEE Main",
          type: "National",
          difficulty: "High",
          subjects: "Physics, Chemistry, Mathematics",
        },
        {
          name: "JEE Advanced",
          type: "National",
          difficulty: "Very High",
          subjects: "Physics, Chemistry, Mathematics",
        },
        {
          name: "BITSAT",
          type: "University",
          difficulty: "High",
          subjects: "Physics, Chemistry, Mathematics, English, Logic",
        },
        {
          name: "COMEDK UGET",
          type: "State (Karnataka)",
          difficulty: "Medium",
          subjects: "Physics, Chemistry, Mathematics",
        },
        {
          name: "MHT CET",
          type: "State (Maharashtra)",
          difficulty: "Medium",
          subjects: "Physics, Chemistry, Mathematics",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description:
        "Explore advanced degree options in Electrical Engineering in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "M.Tech in Electrical Engineering",
          duration: "2 years",
          focus: "Advanced Electrical concepts, research",
        },
        {
          name: "M.Sc in Electrical Engineering",
          duration: "2 years",
          focus: "Theoretical Electrical, algorithms, research",
        },
        {
          name: "MBA in Electrical Management",
          duration: "2 years",
          focus: "Electrical management, business skills",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description:
        "Discover career paths in the field of Electrical Engineering in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Electrical Engineer",
          avgSalary: "₹6,00,000 - ₹12,00,000",
          growth: "20%",
          skills: "Circuit Design, Power Systems, Control Systems",
        },
        {
          role: "Electronics Engineer",
          avgSalary: "₹5,00,000 - ₹10,00,000",
          growth: "18%",
          skills: "Embedded Systems, Signal Processing",
        },
        {
          role: "Power Systems Engineer",
          avgSalary: "₹7,00,000 - ₹14,00,000",
          growth: "22%",
          skills: "Power Generation, Transmission, Distribution",
        },
        {
          role: "Control Systems Engineer",
          avgSalary: "₹6,50,000 - ₹12,50,000",
          growth: "19%",
          skills: "Automation, Robotics, Control Theory",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description:
        "Find scholarship opportunities for Electrical Engineering students in India.",
      image:
        "https://img.freepik.com/premium-vector/finance-savings-concept-tiny-male-character-collects-gold-coins-huge-glass-jar-businessman-makes-savings-flat-vector-cartoon-character-illustration_77116-2457.jpg",
      content: [
        {
          name: "Electrical Engineering Scholarship",
          amount: "₹50,000",
          eligibility: "Students pursuing Electrical Engineering.",
        },
        {
          name: "Tech Innovator Scholarship",
          amount: "₹30,000",
          eligibility: "Meritorious students in engineering colleges.",
        },
        {
          name: "AICTE Scholarship",
          amount: "₹20,000",
          eligibility: "Students from economically weaker sections.",
        },
      ],
    },
  ],
};

const aerospaceEngineeringDatabase = {
  name: "Aerospace Engineering",
  heroSection: {
    backgroundImage: "https://www.planitplus.net/JobProfileImages/69.png",
    title: "Aerospace Engineering in India",
    description:
      "Explore the field of Aerospace Engineering and its career opportunities.",
    buttonText: "Explore Aerospace Engineering",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-university",
      description: "Explore top Aerospace Engineering colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "IIT Kanpur",
            ranking: 1,
            location: "Kanpur, Uttar Pradesh",
            specialization: "Aerodynamics, Propulsion",
          },
          {
            name: "IIT Bombay",
            ranking: 2,
            location: "Mumbai, Maharashtra",
            specialization: "Aerospace Structures, Flight Mechanics",
          },
        ],
        midTier: [
          {
            name: "IIT Madras",
            ranking: 3,
            location: "Chennai, Tamil Nadu",
            specialization: "Aerospace Engineering, Avionics",
          },
        ],
        local: [
          {
            name: "NIT Trichy",
            ranking: 4,
            location: "Tiruchirappalli, Tamil Nadu",
            specialization: "Aerodynamics, Propulsion Systems",
          },
          {
            name: "IIIT Bangalore",
            ranking: 5,
            location: "Bangalore, Karnataka",
            specialization: "Aerospace Software Engineering",
          },
        ],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Science with Aerospace Engineering",
          description:
            "Focus on Physics, Chemistry, Maths, and Aerospace Engineering.",
        },
        {
          name: "Science with Biology",
          description:
            "Ideal for those interested in Bioinformatics or Computational Biology.",
        },
        {
          name: "Commerce with Aerospace Applications",
          description: "Blend of business studies and aerospace applications.",
        },
        {
          name: "Vocational Course in Aerospace",
          description: "Practical, job-oriented aerospace courses.",
        },
        {
          name: "Diploma in Aerospace Engineering",
          description: "3-year program focusing on practical aerospace skills.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Aerospace Engineering programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "JEE Main",
          type: "National",
          difficulty: "High",
          subjects: "Physics, Chemistry, Mathematics",
        },
        {
          name: "JEE Advanced",
          type: "National",
          difficulty: "Very High",
          subjects: "Physics, Chemistry, Mathematics",
        },
        {
          name: "BITSAT",
          type: "University",
          difficulty: "High",
          subjects: "Physics, Chemistry, Mathematics, English, Logic",
        },
        {
          name: "COMEDK UGET",
          type: "State (Karnataka)",
          difficulty: "Medium",
          subjects: "Physics, Chemistry, Mathematics",
        },
        {
          name: "MHT CET",
          type: "State (Maharashtra)",
          difficulty: "Medium",
          subjects: "Physics, Chemistry, Mathematics",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description:
        "Explore advanced degree options in Aerospace Engineering in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "M.Tech in Aerospace Engineering",
          duration: "2 years",
          focus: "Advanced Aerospace concepts, research",
        },
        {
          name: "M.Sc in Aerospace Engineering",
          duration: "2 years",
          focus: "Theoretical Aerospace, algorithms, research",
        },
        {
          name: "MBA in Aerospace Management",
          duration: "2 years",
          focus: "Aerospace management, business skills",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description:
        "Discover career paths in the field of Aerospace Engineering in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Aerospace Engineer",
          avgSalary: "₹8,00,000 - ₹15,00,000",
          growth: "20%",
          skills: "Aerodynamics, Propulsion, Flight Mechanics",
        },
        {
          role: "Flight Test Engineer",
          avgSalary: "₹7,00,000 - ₹12,00,000",
          growth: "18%",
          skills: "Testing, Analysis, Flight Operations",
        },
      ],
    },
    {
      name: "Specializations",
      icon: "fa-user-md",
      description:
        "Explore various specializations within Aerospace Engineering.",
      image:
        "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
      content: [
        {
          name: "Aerodynamics",
          duration: "3 years (B.Tech)",
          focus:
            "Study of the behavior of air as it interacts with solid objects.",
        },
        {
          name: "Propulsion",
          duration: "3 years (B.Tech)",
          focus: "Design and development of engines and propulsion systems.",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description:
        "Find scholarship opportunities for Aerospace Engineering students in India.",
      image:
        "https://img.freepik.com/premium-vector/finance-savings-concept-tiny-male-character-collects-gold-coins-huge-glass-jar-businessman-makes-savings-flat-vector-cartoon-character-illustration_77116-2457.jpg",
      content: [
        {
          name: "Aerospace Engineering Scholarship",
          amount: "₹50,000",
          eligibility: "Students pursuing Aerospace Engineering.",
        },
        {
          name: "Tech Innovator Scholarship",
          amount: "₹30,000",
          eligibility: "Meritorious students in engineering colleges.",
        },
        {
          name: "ISRO Scholarship",
          amount: "Varies",
          eligibility: "Students pursuing aerospace-related courses.",
        },
      ],
    },
  ],
};

const mechanicalEngineeringDatabase = {
  name: "Mechanical Engineering",
  heroSection: {
    backgroundImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Mechanical Engineering in India",
    description:
      "Explore the field of Mechanical Engineering and its career opportunities.",
    buttonText: "Explore Mechanical Engineering",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-university",
      description: "Explore top Mechanical Engineering colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "IIT Madras",
            ranking: 1,
            location: "Chennai, Tamil Nadu",
            specialization: "Thermodynamics, Fluid Mechanics",
          },
          {
            name: "IIT Delhi",
            ranking: 2,
            location: "New Delhi",
            specialization: "Machine Design, Manufacturing",
          },
        ],
        midTier: [
          {
            name: "NIT Surathkal",
            ranking: 3,
            location: "Surathkal, Karnataka",
            specialization: "Mechanical Systems, Robotics",
          },
        ],
        local: [
          {
            name: "IIIT Hyderabad",
            ranking: 4,
            location: "Hyderabad, Telangana",
            specialization: "Mechanical Engineering, Design",
          },
          {
            name: "VIT Vellore",
            ranking: 5,
            location: "Vellore, Tamil Nadu",
            specialization: "Mechanical Engineering, Automation",
          },
        ],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Science with Mechanical Engineering",
          description:
            "Focus on Physics, Chemistry, Maths, and Mechanical Engineering.",
        },
        {
          name: "Science with Biology",
          description:
            "Ideal for those interested in Bioinformatics or Computational Biology.",
        },
        {
          name: "Commerce with Mechanical Applications",
          description: "Blend of business studies and mechanical applications.",
        },
        {
          name: "Vocational Course in Mechanical",
          description: "Practical, job-oriented mechanical courses.",
        },
        {
          name: "Diploma in Mechanical Engineering",
          description:
            "3-year program focusing on practical mechanical skills.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Mechanical Engineering programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "JEE Main",
          type: "National",
          difficulty: "High",
          subjects: "Physics, Chemistry, Mathematics",
        },
        {
          name: "JEE Advanced",
          type: "National",
          difficulty: "Very High",
          subjects: "Physics, Chemistry, Mathematics",
        },
        {
          name: "BITSAT",
          type: "University",
          difficulty: "High",
          subjects: "Physics, Chemistry, Mathematics, English, Logic",
        },
        {
          name: "COMEDK UGET",
          type: "State (Karnataka)",
          difficulty: "Medium",
          subjects: "Physics, Chemistry, Mathematics",
        },
        {
          name: "MHT CET",
          type: "State (Maharashtra)",
          difficulty: "Medium",
          subjects: "Physics, Chemistry, Mathematics",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description:
        "Explore advanced degree options in Mechanical Engineering in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "M.Tech in Mechanical Engineering",
          duration: "2 years",
          focus: "Advanced Mechanical concepts, research",
        },
        {
          name: "M.Sc in Mechanical Engineering",
          duration: "2 years",
          focus: "Theoretical Mechanical, algorithms, research",
        },
        {
          name: "MBA in Mechanical Management",
          duration: "2 years",
          focus: "Mechanical management, business skills",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description:
        "Discover career paths in the field of Mechanical Engineering in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Mechanical Engineer",
          avgSalary: "₹6,00,000 - ₹12,00,000",
          growth: "20%",
          skills: "Thermodynamics, Fluid Mechanics, CAD",
        },
        {
          role: "Design Engineer",
          avgSalary: "₹5,00,000 - ₹10,00,000",
          growth: "18%",
          skills: "3D Modeling, Prototyping, Manufacturing",
        },
      ],
    },
    {
      name: "Specializations",
      icon: "fa-user-md",
      description:
        "Explore various specializations within Mechanical Engineering.",
      image:
        "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
      content: [
        {
          name: "Thermodynamics",
          duration: "3 years (B.Tech)",
          focus: "Study of energy, heat, and work.",
        },
        {
          name: "Fluid Mechanics",
          duration: "3 years (B.Tech)",
          focus: "Study of fluids and their behavior.",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description:
        "Find scholarship opportunities for Mechanical Engineering students.",
      image:
        "https://img.freepik.com/free-vector/scholarship-concept-illustration_114360-7978.jpg",
      content: [
        {
          name: "Mechanical Engineering Scholarship",
          amount: "₹50,000",
          eligibility: "Students pursuing Mechanical Engineering.",
        },
        {
          name: "Tech Innovator Scholarship",
          amount: "₹30,000",
          eligibility: "Meritorious students in engineering colleges.",
        },
        {
          name: "National Scholarship",
          amount: "Varies",
          eligibility: "Students from economically weaker sections.",
        },
      ],
    },
  ],
};

const cardiologyDatabase = {
  name: "Cardiology",
  heroSection: {
    backgroundImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Cardiology in India",
    description:
      "Explore the field of Cardiology and its career opportunities.",
    buttonText: "Explore Cardiology",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-hospital-user",
      description: "Explore top Cardiology colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "AIIMS Delhi",
            ranking: 1,
            location: "New Delhi",
            specialization: "Cardiology, Child Health",
          },
          {
            name: "Christian Medical College, Vellore",
            ranking: 2,
            location: "Vellore, Tamil Nadu",
            specialization: "Cardiology, Multi-specialty healthcare",
          },
        ],
        midTier: [
          {
            name: "KMC Manipal",
            ranking: 3,
            location: "Manipal, Karnataka",
            specialization: "Cardiology, Heart Health",
          },
        ],
        local: [
          {
            name: "Narayana Health",
            ranking: 4,
            location: "Bangalore, Karnataka",
            specialization: "Cardiology, Heart Surgery",
          },
          {
            name: "Fortis Hospital",
            ranking: 5,
            location: "Delhi",
            specialization: "Cardiology, Heart Care",
          },
        ],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Science with Cardiology",
          description: "Focus on Physics, Chemistry, Biology, and Cardiology.",
        },
        {
          name: "Science with Biology",
          description:
            "Ideal for those interested in Bioinformatics or Computational Biology.",
        },
        {
          name: "Commerce with Health Applications",
          description: "Blend of business studies and health applications.",
        },
        {
          name: "Vocational Course in Cardiology",
          description: "Practical, job-oriented cardiology courses.",
        },
        {
          name: "Diploma in Cardiology",
          description:
            "3-year program focusing on practical cardiology skills.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Cardiology programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "NEET",
          type: "National",
          difficulty: "High",
          subjects: "Physics, Chemistry, Biology",
        },
        {
          name: "AIIMS PG",
          type: "National",
          difficulty: "Very High",
          subjects: "Medical Science, Clinical Knowledge",
        },
        {
          name: "JIPMER",
          type: "University",
          difficulty: "High",
          subjects: "Physics, Chemistry, Biology",
        },
        {
          name: "PGIMER",
          type: "State (Punjab)",
          difficulty: "Medium",
          subjects: "Medical Science, Clinical Knowledge",
        },
        {
          name: "DNB CET",
          type: "National",
          difficulty: "Medium",
          subjects: "Medical Science, Clinical Knowledge",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description: "Explore advanced degree options in Cardiology in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "MD in Cardiology",
          duration: "3 years",
          focus: "Advanced Cardiology concepts, research",
        },
        {
          name: "DM in Cardiology",
          duration: "3 years",
          focus: "Theoretical Cardiology, algorithms, research",
        },
        {
          name: "MBA in Healthcare Management",
          duration: "2 years",
          focus: "Healthcare management, business skills",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description: "Discover career paths in the field of Cardiology in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Cardiologist",
          avgSalary: "₹10,00,000 - ₹20,00,000",
          growth: "15%",
          skills: "Heart health, Diagnosis, Treatment planning",
        },
        {
          role: "Interventional Cardiologist",
          avgSalary: "₹15,00,000 - ₹30,00,000",
          growth: "20%",
          skills: "Surgical techniques, Heart procedures",
        },
      ],
    },
    {
      name: "Specializations",
      icon: "fa-user-md",
      description: "Explore various specializations within Cardiology.",
      image:
        "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
      content: [
        {
          name: "Pediatric Cardiology",
          duration: "3 years (DM)",
          focus: "Heart conditions in children.",
        },
        {
          name: "Electrophysiology",
          duration: "3 years (DM)",
          focus: "Heart rhythm disorders.",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description: "Find scholarship opportunities for Cardiology students.",
      image:
        "https://img.freepik.com/free-vector/scholarship-concept-illustration_114360-7978.jpg",
      content: [
        {
          name: "Cardiology Scholarship",
          amount: "₹50,000",
          eligibility: "Students pursuing Cardiology.",
        },
        {
          name: "Heart Health Scholarship",
          amount: "₹30,000",
          eligibility: "Meritorious students in Colleges.",
        },
        {
          name: "National Health Scholarship",
          amount: "Varies",
          eligibility: "Students from economically weaker sections.",
        },
      ],
    },
  ],
};

const neurologyDatabase = {
  name: "Neurology",
  heroSection: {
    backgroundImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Neurology in India",
    description: "Explore the field of Neurology and its career opportunities.",
    buttonText: "Explore Neurology",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-hospital-user",
      description: "Explore top Neurology colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "AIIMS Delhi",
            ranking: 1,
            location: "New Delhi",
            specialization: "Neurology, Brain Health",
          },
          {
            name: "Christian Medical College, Vellore",
            ranking: 2,
            location: "Vellore, Tamil Nadu",
            specialization: "Neurology, Multi-specialty healthcare",
          },
        ],
        midTier: [
          {
            name: "KMC Manipal",
            ranking: 3,
            location: "Manipal, Karnataka",
            specialization: "Neurology, Brain Health",
          },
        ],
        local: [
          {
            name: "Narayana Health",
            ranking: 4,
            location: "Bangalore, Karnataka",
            specialization: "Neurology, Brain Surgery",
          },
          {
            name: "Fortis Hospital",
            ranking: 5,
            location: "Delhi",
            specialization: "Neurology, Brain Care",
          },
        ],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Science with Neurology",
          description: "Focus on Physics, Chemistry, Biology, and Neurology.",
        },
        {
          name: "Science with Biology",
          description:
            "Ideal for those interested in Bioinformatics or Computational Biology.",
        },
        {
          name: "Commerce with Health Applications",
          description: "Blend of business studies and health applications.",
        },
        {
          name: "Vocational Course in Neurology",
          description: "Practical, job-oriented neurology courses.",
        },
        {
          name: "Diploma in Neurology",
          description: "3-year program focusing on practical neurology skills.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Neurology programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "NEET",
          type: "National",
          difficulty: "High",
          subjects: "Physics, Chemistry, Biology",
        },
        {
          name: "AIIMS PG",
          type: "National",
          difficulty: "Very High",
          subjects: "Medical Science, Clinical Knowledge",
        },
        {
          name: "JIPMER",
          type: "University",
          difficulty: "High",
          subjects: "Physics, Chemistry, Biology",
        },
        {
          name: "PGIMER",
          type: "State (Punjab)",
          difficulty: "Medium",
          subjects: "Medical Science, Clinical Knowledge",
        },
        {
          name: "DNB CET",
          type: "National",
          difficulty: "Medium",
          subjects: "Medical Science, Clinical Knowledge",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description: "Explore advanced degree options in Neurology in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "MD in Neurology",
          duration: "3 years",
          focus: "Advanced Neurology concepts, research",
        },
        {
          name: "DM in Neurology",
          duration: "3 years",
          focus: "Theoretical Neurology, algorithms, research",
        },
        {
          name: "MBA in Healthcare Management",
          duration: "2 years",
          focus: "Healthcare management, business skills",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description: "Discover career paths in the field of Neurology in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Neurologist",
          avgSalary: "₹10,00,000 - ₹20,00,000",
          growth: "15%",
          skills: "Brain health, Diagnosis, Treatment planning",
        },
        {
          role: "Neurosurgeon",
          avgSalary: "₹15,00,000 - ₹30,00,000",
          growth: "20%",
          skills: "Surgical techniques, Brain procedures",
        },
      ],
    },
    {
      name: "Specializations",
      icon: "fa-user-md",
      description: "Explore various specializations within Neurology.",
      image:
        "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
      content: [
        {
          name: "Pediatric Neurology",
          duration: "3 years (DM)",
          focus: "Neurological conditions in children.",
        },
        {
          name: "Neurophysiology",
          duration: "3 years (DM)",
          focus: "Study of the nervous system's functions.",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description: "Find scholarship opportunities for Neurology students.",
      image:
        "https://img.freepik.com/free-vector/scholarship-concept-illustration_114360-7978.jpg",
      content: [
        {
          name: "Neurology Scholarship",
          amount: "₹50,000",
          eligibility: "Students pursuing Neurology.",
        },
        {
          name: "Brain Health Scholarship",
          amount: "₹30,000",
          eligibility: "Meritorious students in Colleges.",
        },
        {
          name: "National Health Scholarship",
          amount: "Varies",
          eligibility: "Students from economically weaker sections.",
        },
      ],
    },
  ],
};

const oncologyDatabase = {
  name: "Oncology",
  heroSection: {
    backgroundImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Oncology in India",
    description: "Explore the field of Oncology and its career opportunities.",
    buttonText: "Explore Oncology",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-hospital-user",
      description: "Explore top Oncology colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "AIIMS Delhi",
            ranking: 1,
            location: "New Delhi",
            specialization: "Oncology, Cancer Care",
          },
          {
            name: "Christian Medical College, Vellore",
            ranking: 2,
            location: "Vellore, Tamil Nadu",
            specialization: "Oncology, Multi-specialty healthcare",
          },
        ],
        midTier: [
          {
            name: "KMC Manipal",
            ranking: 3,
            location: "Manipal, Karnataka",
            specialization: "Oncology, Cancer Health",
          },
        ],
        local: [
          {
            name: "Narayana Health",
            ranking: 4,
            location: "Bangalore, Karnataka",
            specialization: "Oncology, Cancer Surgery",
          },
          {
            name: "Fortis Hospital",
            ranking: 5,
            location: "Delhi",
            specialization: "Oncology, Cancer Care",
          },
        ],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Science with Oncology",
          description: "Focus on Physics, Chemistry, Biology, and Oncology.",
        },
        {
          name: "Science with Biology",
          description:
            "Ideal for those interested in Bioinformatics or Computational Biology.",
        },
        {
          name: "Commerce with Health Applications",
          description: "Blend of business studies and health applications.",
        },
        {
          name: "Vocational Course in Oncology",
          description: "Practical, job-oriented oncology courses.",
        },
        {
          name: "Diploma in Oncology",
          description: "3-year program focusing on practical oncology skills.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Oncology programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "NEET",
          type: "National",
          difficulty: "High",
          subjects: "Physics, Chemistry, Biology",
        },
        {
          name: "AIIMS PG",
          type: "National",
          difficulty: "Very High",
          subjects: "Medical Science, Clinical Knowledge",
        },
        {
          name: "JIPMER",
          type: "University",
          difficulty: "High",
          subjects: "Physics, Chemistry, Biology",
        },
        {
          name: "PGIMER",
          type: "State (Punjab)",
          difficulty: "Medium",
          subjects: "Medical Science, Clinical Knowledge",
        },
        {
          name: "DNB CET",
          type: "National",
          difficulty: "Medium",
          subjects: "Medical Science, Clinical Knowledge",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description: "Explore advanced degree options in Oncology in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "MD in Oncology",
          duration: "3 years",
          focus: "Advanced Oncology concepts, research",
        },
        {
          name: "DM in Oncology",
          duration: "3 years",
          focus: "Theoretical Oncology, algorithms, research",
        },
        {
          name: "MBA in Healthcare Management",
          duration: "2 years",
          focus: "Healthcare management, business skills",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description: "Discover career paths in the field of Oncology in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Oncologist",
          avgSalary: "₹10,00,000 - ₹20,00,000",
          growth: "15%",
          skills: "Cancer care, Diagnosis, Treatment planning",
        },
        {
          role: "Radiation Oncologist",
          avgSalary: "₹15,00,000 - ₹30,00,000",
          growth: "20%",
          skills: "Radiation therapy, Cancer treatment",
        },
      ],
    },
    {
      name: "Specializations",
      icon: "fa-user-md",
      description: "Explore various specializations within Oncology.",
      image:
        "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
      content: [
        {
          name: "Medical Oncology",
          duration: "3 years (DM)",
          focus: "Chemotherapy and medical treatment of cancer.",
        },
        {
          name: "Surgical Oncology",
          duration: "3 years (DM)",
          focus: "Surgical treatment of cancer.",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description: "Find scholarship opportunities for Oncology students.",
      image:
        "https://img.freepik.com/free-vector/scholarship-concept-illustration_114360-7978.jpg",
      content: [
        {
          name: "Oncology Scholarship",
          amount: "₹50,000",
          eligibility: "Students pursuing Oncology.",
        },
        {
          name: "Cancer Care Scholarship",
          amount: "₹30,000",
          eligibility: "Meritorious students in Colleges.",
        },
        {
          name: "National Health Scholarship",
          amount: "Varies",
          eligibility: "Students from economically weaker sections.",
        },
      ],
    },
  ],
};

const financeDatabase = {
  name: "Finance",
  heroSection: {
    backgroundImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Finance in India",
    description: "Explore the field of Finance and its career opportunities.",
    buttonText: "Explore Finance",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-hospital-user",
      description: "Explore top Finance colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "IIM Ahmedabad",
            ranking: 1,
            location: "Ahmedabad, Gujarat",
            specialization: "Finance, Business Management",
          },
          {
            name: "IIM Bangalore",
            ranking: 2,
            location: "Bangalore, Karnataka",
            specialization: "Finance, Business Management",
          },
        ],
        midTier: [],
        local: [],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Science with Finance",
          description: "Focus on Physics, Chemistry, Biology, and Finance.",
        },
        {
          name: "Commerce with Finance Applications",
          description: "Blend of business studies and finance applications.",
        },
        {
          name: "Vocational Course in Finance",
          description: "Practical, job-oriented finance courses.",
        },
        {
          name: "Diploma in Finance",
          description: "3-year program focusing on practical finance skills.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Finance programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "CAT",
          type: "National",
          difficulty: "High",
          subjects: "Quantitative Ability, Data Interpretation, Verbal Ability",
        },
        {
          name: "XAT",
          type: "National",
          difficulty: "Very High",
          subjects: "Decision Making, Verbal and Logical Ability",
        },
        {
          name: "CMAT",
          type: "National",
          difficulty: "Medium",
          subjects: "Quantitative Techniques, Language Comprehension",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description: "Explore advanced degree options in Finance in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "MBA in Finance",
          duration: "2 years",
          focus: "Advanced finance concepts, investment strategies",
        },
        {
          name: "MSc in Finance",
          duration: "2 years",
          focus: "Financial analysis, risk management",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description: "Discover career paths in the field of Finance in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Financial Analyst",
          avgSalary: "₹6,00,000 - ₹12,00,000",
          growth: "20%",
          skills: "Financial modeling, Data analysis",
        },
        {
          role: "Investment Banker",
          avgSalary: "₹10,00,000 - ₹20,00,000",
          growth: "25%",
          skills: "Mergers and acquisitions, Financial advisory",
        },
      ],
    },
    {
      name: "Specializations",
      icon: "fa-user-md",
      description: "Explore various specializations within Finance.",
      image:
        "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
      content: [
        {
          name: "Corporate Finance",
          duration: "3 years (MBA)",
          focus: "Financial management of corporations.",
        },
        {
          name: "Investment Management",
          duration: "3 years (MBA)",
          focus: "Managing investment portfolios.",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description: "Find scholarship opportunities for Finance students.",
      image:
        "https://img.freepik.com/free-vector/scholarship-concept-illustration_114360-7978.jpg",
      content: [
        {
          name: "Finance Scholarship",
          amount: "₹50,000",
          eligibility: "Students pursuing Finance.",
        },
        {
          name: "Business Management Scholarship",
          amount: "₹30,000",
          eligibility: "Meritorious students in business colleges.",
        },
      ],
    },
  ],
};

const operationsManagementDatabase = {
  name: "Operations Management",
  heroSection: {
    backgroundImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Operations Management in India",
    description:
      "Explore the field of Operations Management and its career opportunities.",
    buttonText: "Explore Operations Management",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-hospital-user",
      description: "Explore top Operations Management colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "IIM Calcutta",
            ranking: 1,
            location: "Kolkata, West Bengal",
            specialization: "Operations Management, Business Management",
          },
          {
            name: "IIM Lucknow",
            ranking: 2,
            location: "Lucknow, Uttar Pradesh",
            specialization: "Operations Management, Business Management",
          },
        ],
        midTier: [],
        local: [],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Science with Operations Management",
          description:
            "Focus on Physics, Chemistry, Biology, and Operations Management.",
        },
        {
          name: "Commerce with Operations Applications",
          description: "Blend of business studies and operations applications.",
        },
        {
          name: "Vocational Course in Operations Management",
          description: "Practical, job-oriented operations management courses.",
        },
        {
          name: "Diploma in Operations Management",
          description:
            "3-year program focusing on practical operations management skills.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Operations Management programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "CAT",
          type: "National",
          difficulty: "High",
          subjects: "Quantitative Ability, Data Interpretation, Verbal Ability",
        },
        {
          name: "XAT",
          type: "National",
          difficulty: "Very High",
          subjects: "Decision Making, Verbal and Logical Ability",
        },
        {
          name: "CMAT",
          type: "National",
          difficulty: "Medium",
          subjects: "Quantitative Techniques, Language Comprehension",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description:
        "Explore advanced degree options in Operations Management in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "MBA in Operations Management",
          duration: "2 years",
          focus: "Advanced operations management concepts, strategies",
        },
        {
          name: "MSc in Operations Management",
          duration: "2 years",
          focus: "Operational analysis, process improvement",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description:
        "Discover career paths in the field of Operations Management in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Operations Manager",
          avgSalary: "₹8,00,000 - ₹15,00,000",
          growth: "20%",
          skills: "Process optimization, Project management",
        },
        {
          role: "Supply Chain Manager",
          avgSalary: "₹10,00,000 - ₹20,00,000",
          growth: "25%",
          skills: "Logistics, Inventory management",
        },
      ],
    },
    {
      name: "Specializations",
      icon: "fa-user-md",
      description:
        "Explore various specializations within Operations Management.",
      image:
        "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
      content: [
        {
          name: "Supply Chain Management",
          duration: "3 years (MBA)",
          focus: "Management of supply chain processes.",
        },
        {
          name: "Project Management",
          duration: "3 years (MBA)",
          focus: "Planning and executing projects.",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description:
        "Find scholarship opportunities for Operations Management students.",
      image:
        "https://img.freepik.com/free-vector/scholarship-concept-illustration_114360-7978.jpg",
      content: [
        {
          name: "Operations Management Scholarship",
          amount: "₹50,000",
          eligibility: "Students pursuing Operations Management.",
        },
        {
          name: "Business Management Scholarship",
          amount: "₹30,000",
          eligibility: "Meritorious students in business colleges.",
        },
      ],
    },
  ],
};

const businessAnalyticsDatabase = {
  name: "Business Analytics",
  heroSection: {
    backgroundImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Business Analytics in India",
    description:
      "Explore the field of Business Analytics and its career opportunities.",
    buttonText: "Explore Business Analytics",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-hospital-user",
      description: "Explore top Business Analytics colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "IIM Bangalore",
            ranking: 1,
            location: "Bangalore, Karnataka",
            specialization: "Business Analytics, Business Management",
          },
          {
            name: "IIM Ahmedabad",
            ranking: 2,
            location: "Ahmedabad, Gujarat",
            specialization: "Business Analytics, Business Management",
          },
        ],
        midTier: [],
        local: [],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Science with Business Analytics",
          description: "Focus on Mathematics, Statistics, and Data Science.",
        },
        {
          name: "Commerce with Business Analytics",
          description: "Blend of business studies and data analysis.",
        },
        {
          name: "Vocational Course in Data Analytics",
          description: "Practical, job-oriented data analysis courses.",
        },
        {
          name: "Diploma in Business Analytics",
          description: "3-year program focusing on practical analytics skills.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Business Analytics programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "CAT",
          type: "National",
          difficulty: "High",
          subjects: "Quantitative Ability, Data Interpretation, Verbal Ability",
        },
        {
          name: "GMAT",
          type: "International",
          difficulty: "Very High",
          subjects: "Analytical Writing, Integrated Reasoning, Quantitative",
        },
        {
          name: "GRE",
          type: "International",
          difficulty: "High",
          subjects:
            "Verbal Reasoning, Quantitative Reasoning, Analytical Writing",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description:
        "Explore advanced degree options in Business Analytics in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "MBA in Business Analytics",
          duration: "2 years",
          focus: "Advanced analytics concepts, business strategies",
        },
        {
          name: "MSc in Business Analytics",
          duration: "2 years",
          focus: "Data analysis, statistical modeling, machine learning",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description:
        "Discover career paths in the field of Business Analytics in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Data Analyst",
          avgSalary: "₹6,00,000 - ₹12,00,000",
          growth: "20%",
          skills: "Data analysis, Statistical modeling",
        },
        {
          role: "Business Intelligence Analyst",
          avgSalary: "₹8,00,000 - ₹15,00,000",
          growth: "25%",
          skills: "Data visualization, Reporting",
        },
      ],
    },
    {
      name: "Specializations",
      icon: "fa-user-md",
      description: "Explore various specializations within Business Analytics.",
      image:
        "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
      content: [
        {
          name: "Predictive Analytics",
          duration: "3 years (MBA)",
          focus: "Using data to predict future trends.",
        },
        {
          name: "Descriptive Analytics",
          duration: "3 years (MBA)",
          focus: "Analyzing past data to understand trends.",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description:
        "Find scholarship opportunities for Business Analytics students.",
      image:
        "https://img.freepik.com/free-vector/scholarship-concept-illustration_114360-7978.jpg",
      content: [
        {
          name: "Business Analytics Scholarship",
          amount: "₹50,000",
          eligibility: "Students pursuing Business Analytics.",
        },
        {
          name: "Data Science Scholarship",
          amount: "₹30,000",
          eligibility: "Meritorious students in business colleges.",
        },
      ],
    },
  ],
};

const corporateLawDatabase = {
  name: "Corporate Law",
  heroSection: {
    backgroundImage:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1512&q=80",
    title: "Corporate Law in India",
    description:
      "Explore the field of Corporate Law and its career opportunities.",
    buttonText: "Explore Corporate Law",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-hospital-user",
      description: "Explore top Corporate Law colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "National Law School of India University",
            ranking: 1,
            location: "Bangalore, Karnataka",
            specialization: "Corporate Law, Business Law",
          },
          {
            name: "NALSAR University of Law",
            ranking: 2,
            location: "Hyderabad, Telangana",
            specialization: "Corporate Law, Intellectual Property Law",
          },
        ],
        midTier: [
          {
            name: "Symbiosis Law School",
            ranking: 5,
            location: "Pune, Maharashtra",
            specialization: "Corporate Law, International Law",
          },
          {
            name: "ILS Law College",
            ranking: 6,
            location: "Pune, Maharashtra",
            specialization: "Corporate Law, Constitutional Law",
          },
        ],
        local: [
          {
            name: "Government Law College",
            ranking: 10,
            location: "Mumbai, Maharashtra",
            specialization: "Corporate Law, Criminal Law",
          },
          {
            name: "Faculty of Law, Delhi University",
            ranking: 11,
            location: "New Delhi",
            specialization: "Corporate Law, Labor Law",
          },
        ],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Commerce with Legal Studies",
          description: "Focus on Business, Economics, and Legal Studies.",
        },
        {
          name: "Arts with Legal Studies",
          description: "Blend of humanities and legal studies.",
        },
        {
          name: "Integrated Law Program",
          description:
            "5-year program combining undergraduate and law studies.",
        },
        {
          name: "Diploma in Corporate Law",
          description: "3-year program focusing on corporate legal practices.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Corporate Law programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "CLAT",
          type: "National",
          difficulty: "High",
          subjects:
            "English, General Knowledge, Legal Aptitude, Logical Reasoning",
        },
        {
          name: "AILET",
          type: "National",
          difficulty: "Very High",
          subjects:
            "English, General Knowledge, Legal Aptitude, Logical Reasoning, Mathematics",
        },
        {
          name: "LSAT",
          type: "International",
          difficulty: "High",
          subjects:
            "Logical Reasoning, Analytical Reasoning, Reading Comprehension",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description: "Explore advanced degree options in Corporate Law in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "LLM in Corporate Law",
          duration: "1-2 years",
          focus: "Advanced corporate law concepts, mergers and acquisitions",
        },
        {
          name: "MBA with Corporate Law specialization",
          duration: "2 years",
          focus: "Business management with focus on legal aspects",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description:
        "Discover career paths in the field of Corporate Law in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Corporate Lawyer",
          avgSalary: "₹8,00,000 - ₹25,00,000",
          growth: "15%",
          skills: "Contract drafting, Negotiation, Corporate governance",
        },
        {
          role: "Legal Counsel",
          avgSalary: "₹12,00,000 - ₹30,00,000",
          growth: "20%",
          skills: "Legal advisory, Compliance, Risk management",
        },
      ],
    },
    {
      name: "Specializations",
      icon: "fa-user-md",
      description: "Explore various specializations within Corporate Law.",
      image:
        "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
      content: [
        {
          name: "Mergers and Acquisitions",
          duration: "3 years (LLM)",
          focus: "Legal aspects of mergers and acquisitions.",
        },
        {
          name: "Corporate Governance",
          duration: "3 years (LLM)",
          focus: "Regulations and practices for corporate governance.",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description: "Find scholarship opportunities for Corporate Law students.",
      image:
        "https://img.freepik.com/free-vector/scholarship-concept-illustration_114360-7978.jpg",
      content: [
        {
          name: "Corporate Law Scholarship",
          amount: "₹50,000",
          eligibility: "Students pursuing Corporate Law.",
        },
        {
          name: "Business Law Scholarship",
          amount: "₹30,000",
          eligibility: "Meritorious students in law schools.",
        },
      ],
    },
  ],
};

const criminalLawDatabase = {
  name: "Criminal Law",
  heroSection: {
    backgroundImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Criminal Law in India",
    description:
      "Explore the field of Criminal Law and its career opportunities.",
    buttonText: "Explore Criminal Law",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-hospital-user",
      description: "Explore top Criminal Law colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "National Law School of India University",
            ranking: 1,
            location: "Bangalore, Karnataka",
            specialization: "Criminal Law, Constitutional Law",
          },
          {
            name: "National Academy of Legal Studies and Research",
            ranking: 2,
            location: "Hyderabad, Telangana",
            specialization: "Criminal Law, Corporate Law",
          },
        ],
        midTier: [
          {
            name: "Symbiosis Law School",
            ranking: 5,
            location: "Pune, Maharashtra",
            specialization: "Criminal Law, International Law",
          },
          {
            name: "ILS Law College",
            ranking: 6,
            location: "Pune, Maharashtra",
            specialization: "Criminal Law, Constitutional Law",
          },
        ],
        local: [
          {
            name: "Government Law College",
            ranking: 10,
            location: "Mumbai, Maharashtra",
            specialization: "Criminal Law, Corporate Law",
          },
          {
            name: "Faculty of Law, Delhi University",
            ranking: 11,
            location: "New Delhi",
            specialization: "Criminal Law, Labor Law",
          },
        ],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Arts with Legal Studies",
          description: "Blend of humanities and legal studies.",
        },
        {
          name: "Science with Legal Studies",
          description: "Focus on Science and Legal Studies.",
        },
        {
          name: "Integrated Law Program",
          description:
            "5-year program combining undergraduate and law studies.",
        },
        {
          name: "Diploma in Criminal Law",
          description: "3-year program focusing on criminal legal practices.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Criminal Law programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "CLAT",
          type: "National",
          difficulty: "High",
          subjects:
            "English, General Knowledge, Legal Aptitude, Logical Reasoning",
        },
        {
          name: "AILET",
          type: "National",
          difficulty: "Very High",
          subjects:
            "English, General Knowledge, Legal Aptitude, Logical Reasoning, Mathematics",
        },
        {
          name: "LSAT",
          type: "International",
          difficulty: "High",
          subjects:
            "Logical Reasoning, Analytical Reasoning, Reading Comprehension",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description: "Explore advanced degree options in Criminal Law in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "LLM in Criminal Law",
          duration: "1-2 years",
          focus: "Advanced criminal law concepts, criminal justice",
        },
        {
          name: "MBA with Criminal Law specialization",
          duration: "2 years",
          focus: "Business management with focus on legal aspects",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description:
        "Discover career paths in the field of Criminal Law in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Criminal Defense Lawyer",
          avgSalary: "₹8,00,000 - ₹15,00,000",
          growth: "15%",
          skills: "Legal research, Negotiation, Trial advocacy",
        },
        {
          role: "Prosecutor",
          avgSalary: "₹10,00,000 - ₹18,00,000",
          growth: "20%",
          skills: "Legal analysis, Public speaking, Case management",
        },
      ],
    },
    {
      name: "Specializations",
      icon: "fa-user-md",
      description: "Explore various specializations within Criminal Law.",
      image:
        "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
      content: [
        {
          name: "White Collar Crime",
          duration: "3 years (LLM)",
          focus: "Legal issues related to financial crimes.",
        },
        {
          name: "Cyber Crime",
          duration: "3 years (LLM)",
          focus: "Legal aspects of crimes committed via the internet.",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description: "Find scholarship opportunities for Criminal Law students.",
      image:
        "https://img.freepik.com/free-vector/scholarship-concept-illustration_114360-7978.jpg",
      content: [
        {
          name: "Criminal Law Scholarship",
          amount: "₹50,000",
          eligibility: "Students pursuing Criminal Law.",
        },
        {
          name: "Justice Advocate Scholarship",
          amount: "₹30,000",
          eligibility: "Meritorious students in law schools.",
        },
      ],
    },
  ],
};

const civilRightsLawDatabase = {
  name: "Civil Rights Law",
  heroSection: {
    backgroundImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Civil Rights Law in India",
    description:
      "Explore the field of Civil Rights Law and its career opportunities.",
    buttonText: "Explore Civil Rights Law",
  },
  options: [
    {
      name: "Colleges",
      icon: "fa-hospital-user",
      description: "Explore top Civil Rights Law colleges in India.",
      image:
        "https://png.pngtree.com/background/20230401/original/pngtree-education-college-cartoon-background-picture-image_2252928.jpg",
      content: {
        ivyLeague: [
          {
            name: "National Law University, Delhi",
            ranking: 1,
            location: "New Delhi",
            specialization: "Human Rights Law, Civil Rights Law",
          },
          {
            name: "Gujarat National Law University",
            ranking: 2,
            location: "Gandhinagar, Gujarat",
            specialization: "Human Rights Law, Environmental Law",
          },
        ],
        midTier: [
          {
            name: "Symbiosis Law School",
            ranking: 5,
            location: "Pune, Maharashtra",
            specialization: "Civil Rights Law, International Law",
          },
          {
            name: "ILS Law College",
            ranking: 6,
            location: "Pune, Maharashtra",
            specialization: "Civil Rights Law, Constitutional Law",
          },
        ],
        local: [
          {
            name: "Government Law College",
            ranking: 10,
            location: "Mumbai, Maharashtra",
            specialization: "Civil Rights Law, Corporate Law",
          },
          {
            name: "Faculty of Law, Delhi University",
            ranking: 11,
            location: "New Delhi",
            specialization: "Civil Rights Law, Labor Law",
          },
        ],
      },
    },
    {
      name: "Groups after 10th",
      icon: "fa-book",
      description: "Explore educational paths after 10th grade.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-group-high-school-students_961875-456682.jpg",
      content: [
        {
          name: "Arts with Legal Studies",
          description: "Blend of humanities and legal studies.",
        },
        {
          name: "Science with Legal Studies",
          description: "Focus on Science and Legal Studies.",
        },
        {
          name: "Integrated Law Program",
          description:
            "5-year program combining undergraduate and law studies.",
        },
        {
          name: "Diploma in Civil Rights Law",
          description:
            "3-year program focusing on civil rights legal practices.",
        },
      ],
    },
    {
      name: "Entrance Exams",
      icon: "fa-file-alt",
      description:
        "Learn about key entrance exams for Civil Rights Law programs in India.",
      image:
        "https://img.freepik.com/premium-vector/young-happy-cheerful-smiling-boy-pupil-character-standing-with-test-exam-results-showing-thumbs-up_140689-1262.jpg",
      content: [
        {
          name: "CLAT",
          type: "National",
          difficulty: "High",
          subjects:
            "English, General Knowledge, Legal Aptitude, Logical Reasoning",
        },
        {
          name: "AILET",
          type: "National",
          difficulty: "Very High",
          subjects:
            "English, General Knowledge, Legal Aptitude, Logical Reasoning, Mathematics",
        },
        {
          name: "LSAT",
          type: "International",
          difficulty: "High",
          subjects:
            "Logical Reasoning, Analytical Reasoning, Reading Comprehension",
        },
      ],
    },
    {
      name: "Master Courses",
      icon: "fa-graduation-cap",
      description:
        "Explore advanced degree options in Civil Rights Law in India.",
      image:
        "https://elearningindustry.com/wp-content/uploads/2020/11/how-to-use-animation-for-online-courses.jpg",
      content: [
        {
          name: "LLM in Civil Rights Law",
          duration: "1-2 years",
          focus: "Advanced civil rights law concepts, human rights",
        },
        {
          name: "MBA with Civil Rights Law specialization",
          duration: "2 years",
          focus:
            "Business management with focus on legal aspects of civil rights",
        },
      ],
    },
    {
      name: "Job Opportunities",
      icon: "fa-briefcase",
      description:
        "Discover career paths in the field of Civil Rights Law in India.",
      image:
        "https://img.freepik.com/premium-vector/cartoon-man-working-laptop-with-man-working-his-laptop_1033579-59079.jpg",
      content: [
        {
          role: "Human Rights Advocate",
          avgSalary: "₹10,00,000 - ₹20,00,000",
          growth: "20%",
          skills: "Legal analysis, Public speaking, Community outreach",
        },
        {
          role: "Civil Rights Lawyer",
          avgSalary: "₹8,00,000 - ₹15,00,000",
          growth: "15%",
          skills: "Legal research, Advocacy, Negotiation",
        },
      ],
    },
    {
      name: "Specializations",
      icon: "fa-user-md",
      description: "Explore various specializations within Civil Rights Law.",
      image:
        "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
      content: [
        {
          name: "Disability Rights",
          duration: "3 years (LLM)",
          focus: "Legal protections for individuals with disabilities.",
        },
        {
          name: "Gender Rights",
          duration: "3 years (LLM)",
          focus: "Legal protections for gender equality.",
        },
      ],
    },
    {
      name: "Scholarships",
      icon: "fa-award",
      description:
        "Find scholarship opportunities for Civil Rights Law students.",
      image:
        "https://img.freepik.com/free-vector/scholarship-concept-illustration_114360-7978.jpg",
      content: [
        {
          name: "Civil Rights Scholarship",
          amount: "₹50,000",
          eligibility: "Students pursuing Civil Rights Law.",
        },
        {
          name: "Human Rights Scholarship",
          amount: "₹30,000",
          eligibility: "Meritorious students in law schools.",
        },
      ],
    },
  ],
};

// function chooseBranch(name) {
//   console.log(name);
//   switch (name) {
//     case "Engineering":
//       careerSubBranches = engineeringSubBranches;
//       setTimeout(() => {
//         window.location.href = "../pages/subbranch.html";
//       }, 500);
//       break;
//     case "Medical":
//       careerSubBranches = medicalSubBranches;
//       setTimeout(() => {
//         window.location.href = "../pages/subbranch.html";
//       }, 500);
//       break;
//     case "Business":
//       careerSubBranches = businessSubBranches;
//       setTimeout(() => {
//         window.location.href = "../pages/subbranch.html";
//       }, 500);
//       break;
//     case "Law":
//       careerSubBranches = lawSubBranches;
//       setTimeout(() => {
//         window.location.href = "../pages/subbranch.html";
//       }, 500);
//       break;
//   }

//   console.log(careerSubBranches);
// }

function selectSubCategory(name) {
  console.log("Selecting sub-category:", name);
  let selectedDatabase;

  switch (name) {
    case "Computer Science":
      selectedDatabase = computerScienceDatabase;
      break;
    case "Software Engineering":
      selectedDatabase = softwareEngineeringDatabase;
      break;
    case "Electrical Engineering":
      selectedDatabase = electricalEngineeringDatabase;
      break;
    case "Aerospace Engineering":
      selectedDatabase = aerospaceEngineeringDatabase;
      break;
    case "Mechanical Engineering":
      selectedDatabase = mechanicalEngineeringDatabase;
      break;
    case "Cardiology":
      selectedDatabase = cardiologyDatabase;
      break;
    case "Oncology":
      selectedDatabase = oncologyDatabase;
      break;
    case "Neurology":
      selectedDatabase = neurologyDatabase;
      break;
    case "Finance":
      selectedDatabase = financeDatabase;
      break;
    case "Civil Rights Law":
      selectedDatabase = civilRightsLawDatabase;
      break;
    case "Operations Management":
      selectedDatabase = operationsManagementDatabase;
      break;
    case "Business Analytics":
      selectedDatabase = businessAnalyticsDatabase;
      break;
    case "Corporate Law":
      selectedDatabase = corporateLawDatabase;
      break;
    case "Criminal Law":
      selectedDatabase = criminalLawDatabase;
      break;
    default:
      console.error("Unknown sub-category:", name);
      return;
  }

  localStorage.setItem("selectedDatabase", JSON.stringify(selectedDatabase));
  window.location.href = "../pages/path.html";
}

// Update the existing chooseBranch function
function chooseBranch(name) {
  console.log("Choosing branch:", name);
  localStorage.setItem("selectedBranch", name);
  window.location.href = "../pages/subbranch.html";
}
