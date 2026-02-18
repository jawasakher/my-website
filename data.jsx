import { CiMap } from "react-icons/ci"; 
import { FaImages,FaCreditCard} from "react-icons/fa"; 
export const cardDate =[
    { 
        id:1,
     img:<CiMap/>,
     title:"Books Library",
     description:"The gradual accumulation of information about atomic and small-scale behaviour...",
     color:"#e74040",
     bgcolor:"#ffdcd1",
    },

    {
        id:2,
        img:<FaImages/>,
        title:"Market Analysis",
        description:"The gradual accumulation of information about atomic and small-scale behaviour...",
        color:"#2dc071",
        bgcolor:"#b9eaa8",
    },

    {
       id:3,
       img:<FaCreditCard/>,
       title:"50+ Online Courses",
       description:"The gradual accumulation of information about atomic and small-scale behaviour...",
       color:"#23a6f0",
       bgcolor:"#b2e3ff",
    },
];

export const coursesData=[
    {
        id:1,
        img:"./Graphic_design.jpeg",
        department:"Graphic Design",
        title:"UI & UX Desingn",
        rating:"4.7",
        description:"Clean and user-friendly UI/UX design focused on usability, clarity, and seamless user experience.",
        sales:"80",
        price:"$11.99",
        discount:"$4.99",
        duration:"22hr 30min",
        lessons:"64 Lessons",

    },
      {
        id:2,
        img:"/Software_Development.jpeg",
        department:"Software Development",
        title:"Project Design",
        rating:"4.6",
        description:"Structured project design focused on planning, organization, and building efficient solutions.",
        sales:"160",
        price:"$15.99",
        discount:"$7.99",
        duration:"30hr 30min",
        lessons:"121 Lessons",

    },
      {
        id:3,
        img:"./Web.jpeg",
        department:"Web Development",
        title:"HTML & CSS",
        rating:"4.9",
        description:"Responsive layouts built with HTML and CSS using clean, modern, and well-structured code.",
        sales:"288",
        price:"$10.99",
        discount:"$8.99",
        duration:"16hr 40min",
        lessons:"107 Lessons",

    },
]
