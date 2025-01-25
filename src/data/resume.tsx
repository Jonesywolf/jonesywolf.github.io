import { Icons } from "@/components/icons";
import { HammerIcon, HomeIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "John Wolf",
  initials: "JW",
  url: "https://johnrwolf.com",
  location: "📍 Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Robotics Engineering @UofT",
  summary:
    "I'll never forget the smell of burning circuit boards—or the lesson it taught me.\nIn preparation for the launch of my first business, Progetto Company, I was manufacturing my first batch of circuit boards in my parents' basement. Having never reflowed solder on a hot plate before, I accidentally \"overcooked\" all 24, melting the solder mask and ruining the batch. While that failure stung, it taught me valuable lessons about perseverance, problem-solving, and learning through experience—principles that have shaped my journey ever since.\nThrough various mechanical, electrical, and software projects—whether for school, my business, or three engineering internships—I've learned (and failed) a lot. These experiences have solidified my passion for mechatronics and robotics engineering, blending the best of mechanical, electrical, and software domains. It’s this intersection that inspired me to pursue a degree in Robotics Engineering at the University of Toronto.\nI hope my engineering experiences inside and outside work continue to cater to this multidisciplinary interest and encourage me to keep learning new things. Whether you’ve got an idea to share, a project to tackle, or some circuit boards to “toast”, shoot me a message—I’d love to chat!",
  avatarUrl: "/me.jpg",
  skills: [
    "Arduino",
    "Python",
    "Go/Golang",
    "Fusion 360",
    "Flutter",
    "Prototyping",
    "Postgres",
    "Docker",
    "Java",
    "C",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: HammerIcon, label: "Projects" },
  ],
  contact: {
    email: "4johnryanwolf@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://git.new/johnwolf",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/jw-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:4johnryanwolf@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      goodreads: {
        name: "Goodreads",
        url: "https://dub.sh/jw-goodreads",
        icon: Icons.goodreads,

        navbar: true,
      }
    },
  },

  experience: [
    {
      company: "Progetto Company",
      href: "https://www.tindie.com/stores/Progetto/",
      badges: [],
      location: "Ottawa, ON",
      title: "Sole Proprietor",
      logoUrl: "/progetto.jpg",
      start: "January 2019",
      end: "Present",
      description:
        "• I sell hobbyist electronics modules for Arduino and Raspberry Pi enthusiasts. Progetto now has ~7.5K followers on Instagram, with paying customers in 8 countries.\n• Completed the entire product development cycle: inception, design, prototyping, refinement, testing, manufacturing, documentation, and commercialization\n• Wrote and distributed product support libraries in Python and Arduino.\n• Developed my soldering and hardware debugging skills as well as my circuit board design skills using Eagle / Fusion 360.",
    },
    {
      company: "Jule (eCamion)",
      badges: [],
      href: "https://www.julepower.com/",
      location: "Scarborough, ON",
      title: "Computer Automation and Electrical Engineering Co-op",
      logoUrl: "/jule.jpg",
      start: "May 2023",
      end: "August 2024",
      description:
        "• Implemented EV charging communication stacks in Golang to achieve OCPI & OCPP certifications, unlocking millions in federal funding.\n• Automated the ChargeON grant application process, thus reducing the time spent per application and eliminating transcription errors. This increased the number of submissions by 67%, corresponding to an increase of ~7.6M CAD in funding.\n• Designed an OCPI management server from the ground up to enable control and surveillance of the charging system, including automated end-to-end testing.\n• Reduced AWS cloud infra spend, by developing a homegrown solution using Golang, MQTT, and Redis deployed on a Kubernetes cluster. This cut the associated cloud cost by ~85%. \n• Independently redesigned our data pipeline for dynamic scalability using a microservices-based architecture, leveraging MQTT v5’s shared subscriptions.\n• Created a legacy-compatible C++ Modbus adapter to enable our next-gen POS upgrade.",
    },
    {
      company: "UofT Robosoccer Team",
      href: "https://www.utra.ca/teams/robosoccer/",
      badges: [],
      location: "Toronto, ON",
      title: "Member",
      logoUrl: "/utra.jpg",
      start: "September 2022",
      end: "April 2023",
      description:
        "• Implemented robot localization using computer vision in Python + ROS for a humanoid soccer robot. Developed practical knowledge in OpenCV, Linux, git, and ROS.",
    },
    {
      company: "Nokia",
      href: "https://www.nokia.com/",
      badges: [],
      location: "Ottawa, ON",
      title: "NI-IP HW Hardware Developer Eng Co-op",
      logoUrl: "/nokia.jpg",
      start: "May 2022",
      end: "September 2022",
      description:
        "• Tested and debugged network card prototypes using oscilloscopes and multimeters.\n• Created several innovative PoC projects to save Nokia time and money:\n o Automated a design workflow by creating a VBA-based optimization tool.\n o Developed a Perl-based script generator for automating manual telnet command sequences.\n o Used Fusion 360 to design, prototype, and produce 3D-printed bench-tool alternatives for a tenth of the market price.",
    },
    {
      company: "FRC Team 2706 - Merge Robotics",
      href: "https://www.team2706.ca/",
      badges: [],
      location: "Ottawa, ON",
      title: "Robotics Team Member",
      logoUrl: "/merge.jpg",
      start: "September 2016",
      end: "June 2020",
      description: "• Installed control system wiring and troubleshooting, SolidWorks CAD design, and metal fabrication.\n• Competed in FRC Provincial Championships 2016-2020, FRC World Championships 2018"
    },
    {
      company: "MVS Remote Video Systems Inc.",
      href: "https://remotevideo.my.canva.site/",
      badges: [],
      location: "Ottawa, ON",
      title: "Developer Internship",
      logoUrl: "/mvs.png",
      start: "July 2019",
      end: "November 2019",
      description:
        "• Developed an autonomous drone navigation prototype for a United Nations contract.\n• Developed additional expertise around Arduino and basic sensor fusion.",
    },
    {
      company: "Nokia",
      href: "https://www.nokia.com/",
      badges: [],
      location: "Ottawa, ON",
      title: "Future Tech Intern",
      logoUrl: "/nokia.jpg",
      start: "July 2019",
      end: "August 2019",
      description:
        "• Independently developed a prototypical schematic validation application for optical networking circuit boards using Python, exercising all facets of a software delivery cycle:\n o Requirement-gathering, design, prototyping, debugging, testing, documentation.\n• Developed documentation with Sphinx generating HTML and CSS using Python.",
    },
  ],
  education: [
    {
      school: "University of Toronto",
      href: "https://www.utoronto.ca/",
      degree: "Bachelor's Degree in Robotics Engineering + PEY Co-op",
      logoUrl: "/uoft.png",
      start: "2020",
      end: "2025",
    },
    {
      school: "Sacred Heart High School",
      href: "https://shh.ocsb.ca/",
      degree: "High School Diploma",
      logoUrl: "/shhs.png",
      start: "2016",
      end: "2020",
    },
  ],
  highlightedProjects: [
    {
      title: "Globe Robot",
      href: "https://github.com/Jonesywolf/Globe-Robot",
      dates: "March 2023 - April 2023",
      active: true,
      description:
        "For MIE438, my friends and I developed a globe robot which can respond to user queries and highlight the user's requested location on a globe with a magnifying glass, combining ChatGPT and Google's Text to Speech APIs to vocally respond with an interesting fact. I focused on the stepper mount design, the Arduino code, and the project's wiring.",
      technologies: [
        "Python",
        "APIs",
        "Fusion 360",
        "Arduino",
        "Raspberry Pi",
      ],
      links: [
        {
          type: "Video Demo",
          href: "https://www.youtube.com/watch?v=3yApgu7Wu_0",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jonesywolf/Globe-Robot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://github.com/Jonesywolf/Globe-Robot/blob/main/demo.gif?raw=true",
      video:
        "",
    },
    {
      title: "One Pin Keypad",
      href: "https://www.tindie.com/products/Progetto/one-pin-keypad/",
      dates: "August 2018 - October 2018",
      active: true,
      description:
        "One Pin Keypad was the first product I ever made for my first company, and was one of the biggest learning experiences of my life. It makes a typical matrix keypad far easier to wire, much easier to program, and saves you a ton of digital I/O on your microcontroller or single board computer.",
      technologies: [
        "Arduino",
        "Raspberry Pi",
        "Eagle CAD",
      ],
      links: [
        {
          type: "Video Demo",
          href: "https://youtu.be/YCaUk3orwyQ&t=4",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Website",
          href: "https://www.tindie.com/products/Progetto/one-pin-keypad/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Arduino Library",
          href: "https://github.com/ProgettoCompany/Progetto_One_Pin_Keypad_Arduino_Library",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Eagle Files",
          href: "https://github.com/ProgettoCompany/Progetto_One_Pin_Keypad_Eagle_Files",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://github.com/ProgettoCompany/Product-Photos/blob/main/One%20Pin%20Keypad/calculator.gif?raw=true",
      video: "",
    },
    {
      title: "Chestor [Coming Soon]",
      href: "http://chestor.app",
      dates: "December 2023 - Present",
      active: true,
      description:
        "AI-enhanced storage app for iOS and Android. Currently internally testing release candidates. Aiming to release in Spring 2025.",
      technologies: [
        "Flutter",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "http://chestor.app",
          icon: <Icons.globe className="size-3" />,
        },
        // TODO: Add video demo, Google Play Store, and Apple App Store links
      ],
      image: "/chestor.jpg",
      video: "",
    },
    {
      title: "BitCaml - Bitcoin Anti-Money Laundering Tool",
      href: "https://github.com/Jonesywolf/bitcoin-aml-thesis",
      dates: "August 2024 - Present",
      active: true,
      description:
        "Developing a web-based blockchain explorer with AI-based money laundering detection for my thesis. The tool uses a custom AI model to detect money laundering patterns in Bitcoin transactions.",
      technologies: [
        "React",
        "Typescript",
        "Python (FastAPI)",
        "Bootstrap",
        "Sigma.js",
        "Neo4j",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Jonesywolf/bitcoin-aml-thesis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bitcaml.jpg", // TODO: Make this a gif
      video: "",
    },
  ],
  projects: [
    {
      title: "Home Buddies - Interactive Visual Home Assistants",
      dates: "February 2024",
      location: "", // TODO Use location text for something
      description:
        "Developed various interactive home assistants using several Raspberry Pis networked together with our laptops. Employed various computer vision libraries to track users faces and interact with them.",
      image:
        "projects/home-buddies.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Jonesywolf/harry-potter-paintings",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/home-buddies",
        },
        {
          title: "Video Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=ObPXIejOL1A",
        },
      ],
    },
    {
      title: "DIY Raspberry Pi Volume Control Knob",
      dates: "December 2018",
      location: "",
      description:
        "To market the ADS1115 module I started carrying, I created a volume control knob for the Raspberry Pi using a potentiometer, an ADS1115 16-bit ADC, a breadboard, and some jumper wires. This is more of a tutorial module than a project and should serve as a great baseline for any projects where you need analog inputs on your Raspberry Pi.",
      image:
        "projects/volume-knob.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ProgettoCompany/Raspberry_Pi_Volume_Knob",
        },
        {
          title: "Instructables",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.instructables.com/DIY-Raspberry-Pi-Volume-Control-Knob-Using-an-ADS1/",
        }
      ],
    },
    {
      title: "PairwiseDNA: Using Deep Learning to Predict Incorrect Binding During Synthetic DNA Assembly",
      dates: "January 2023 - April 2023",
      location: "",
      description:
        "For our APS360 final project, my group and I developed a deep-learning model which aimed to predict the binding affinity between two short regions of DNA. I worked mostly on the non-deep learning-based baseline for this project, a k-nearest neighbours approach. I also trained a small ANN as a baseline but it performed even worse than the kNN solution.It was interesting to apply my machine-learning skills to a new industry and I learned a lot about DNA throughout this project.",
      image:
        "projects/pairwise-dna.jpg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Jonesywolf/pairwise-dna",
        },
        {
          title: "Google Colab",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://colab.research.google.com/drive/1APkiASokAhh6lzpSA2_Fm9U9BQZcurR2?usp=sharing",
        }
      ],
    },
    {
      title: "Spinify - A Spotify-Powered Record Player",
      dates: "February 2023",
      location: "",
      description:
        "Spinify uses NFC stickers to recognize a record and Spotify’s API to play the song associated with that record. Place a record on the turntable, and Spinify will identify the song, album, or playlist associated with that record and start streaming the corresponding song, album or playlist from Spotify when the needle is placed on the record. Under the hood it uses an Arduino (my focus during the project) which reads the user inputs and sensor data, controls the motor and interfaces with the display and the Raspberry Pi which plays the music from the speaker and interfaces with the Spotify API. Getting the display working, especially transitioning from volume control to play back was very challenging and I learned a lot.",
      image:
        "projects/spinify.jpg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/spinify",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/kevinangers/Spinify",
        },
        {
          title: "Video Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=Hmik-6Sq3YM",
        },
      ],
    },
    {
      title: "Arduino New Year's Countdown Clock",
      dates: "December 2021",
      location: "",
      description:
        "To market my products, I created an Arduino-based New Year countdown, which uses a real-time clock (RTC) module to get the current time and determine how much time there is remaining until the New Year. Be sure to see the video above for a demo!",
      image:
        "projects/new-years-countdown.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ProgettoCompany/New_Year_Countdown",
        },
        {
          title: "Instructables",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.instructables.com/Arduino-New-Year-Countdown-Clock/",
        },
        {
          title: "Video Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=m3ZdokzxSN0",
        },
      ],
    },
    {
      title: "Arduino Reaction Time Tester",
      dates: "August 2021",
      location: "",
      description:
        "To market some of my new products I created an Arduino-based reaction tester back in 2021, which measures the user's reaction time by randomly activating an LED, starting a timer and then displaying the value of the timer when the user pushes the button. Be sure to see the video demo!",
      image:
        "projects/reaction-time-tester.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ProgettoCompany/Arduino_Reaction_Tester"
        },
        {
          title: "Instructables",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.instructables.com/Arduino-Reaction-Tester/"
        },
        {
          title: "Video Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=VeCW8oQnrw8"
        }
      ],
    },
    {
      title: "Raspberry Pi Cryptocurrency Tracker",
      dates: "August 2021",
      location: "",
      description:
        "To promote my products I created a simple cryptocurrency tracker using a Raspberry Pi. a 16x2 I2C LCD, and a One Pin Keypad, along with a few other miscellaneous components. Since this project uses Python to connect to the CoinGecko API, you can easily add support for other cryptocurrencies beyond the three (Bitcoin, Ethereum and Litecoin) included in the code for this tutorial.",
      image:
        "projects/crypto-price-tracker.webp",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ProgettoCompany/Crypto_Price_Tracker",
        },
        {
          title: "Instructables",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.instructables.com/Raspberry-Pi-Cryptocurrency-Tracker/"
        },
        {
          title: "Video Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=bqy6lJRknvs"
        }
      ],
    },
    {
      title: "Simple Arduino Calculator",
      dates: "July 2021",
      location: "",
      description:
        "To market some of my products I created a simple Arduino calculator with basic arithmetic operators and support for numbers with decimals. However, this calculator does have other limitations, to simplify the code, this calculator evaluates the result from left to right, without regard for the order of operations. It also has no support for negative numbers. Be sure to see the video demo.",
      image:
        "projects/arduino-calculator.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ProgettoCompany/Simple_Arduino_Calculator",
        },
        {
          title: "Instructables",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.instructables.com/Simple-Arduino-Calculator-1/"
        },
        {
          title: "Video Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=BjUUuz75J9A"
        }
      ],
    },
  ],
} as const;
