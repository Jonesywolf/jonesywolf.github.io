import { Icons } from "@/components/icons";
import { HammerIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "John Wolf",
  initials: "JW",
  url: "https://dillion.io",
  location: "📍 Toronto, ON",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Robotics Engineering @UofT",
  summary:
    "I'll never forget the smell of burning circuit boards, or the memory it invariably resurfaces... In preparation for the launch of my first business, Progetto Company, I was manufacturing my first batch of circuit boards in my parent's basement. Having never reflowed solder on a hot plate before, I \"overcooked\" them and melted the solder mask, ruining all 24. The subsequent sting of failure taught me a valuable lesson that day and would continue to, for years to come. In the pursuit of various mechanical, electrical, and software projects for my school, my own company, and my past 3 engineering internships, I've learned (and failed) a lot since then. Along the way, I've learned that a combination of the three domains is my happy place, which is why I am pursuing a degree in Robotics Engineering at UofT. I hope my engineering experiences inside and outside work continue to cater to this multidisciplinary interest and encourage me to keep learning new things. Since you're here, if you ever need someone to lightly \"toast\" some circuit boards for you, shoot me a message!",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
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

  work: [
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
        "• I sell hobbyist electronics modules for Arduino and Raspberry Pi enthusiasts. Progetto now has ~7.5K followers on Instagram, and I have fulfilled orders from Canada, the U.S.A, Germany, Romania, Australia, and South Africa.\n• Completed the entire product development cycle: inception, design, prototype, refine, test, manufacture, document, and commercialize.\n• Wrote and distributed product support libraries in Python and Arduino.\n• Developed my soldering and hardware debugging skills as well as my circuit board design skills using Eagle.\n• Gained experience in social media marketing; built an ecommerce site via Shopify.",
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
        "• Implemented EV charging communication standards primarily using Golang, unlocking millions in federal EV charging funding. \n• Designed a REST-based server from the ground up to manage and control and communicate the state of our charger. Also added end-to-end testing.\n• Implemented a complete revamp of our cloud infrastructure to significantly reduce our AWS bill by shifting towards our own Kubernetes deployments of that mimicked the AWS feature sets we used. Furthermore, I redesigned our existing applications to be horizontally scalable as microservices using MQTT v5’s shared subscriptions.\n• Used C++ to create a legacy-compatible interface for a new payment device",
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
        "• Tested and debugged network card prototypes by creating Bode plots, using oscilloscopes and multimeters.\n• Created several innovative PoC projects to save Nokia time and money:\n• Programmed spreadsheet-based tuning aid using VBA.\n• Developed a Perl-based script generator from telnet command line log files.\n• Used Fusion 360 to design, prototype, and produce 3D-printed bench-tool alternatives for a tenth of the market price.",
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
        "• Independently developed a prototypical schematic validation application for optical networking circuit boards using Python, exercising all facets of a software delivery cycle: Requirement-gathering, design, prototyping, debugging, testing, documentation.\n• Developed documentation with Sphinx generating HTML and CSS pages using Python.",
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
      href: "https://magicui.design",
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
        "MongoDB", // TODO: Remove?
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
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
