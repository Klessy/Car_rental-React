import Golf6 from "../assets/cars-big/golf6.jpg";
import AudiA1 from "../assets/cars-big/audia1.jpg";
import Toyota from "../assets/cars-big/toyotacamry.jpg";
import Bmw320 from "../assets/cars-big/bmw320.jpg";
import Benz from "../assets/cars-big/benz.jpg";
import Passat from "../assets/cars-big/passatcc.jpg";
// import { Testimonials } from "../components";

export const navLinks = [
  {
      id: 1, 
      title:'Home',
      path: '/'
     
  },

  {
      id: 2, 
      title: 'About',
      path: '/about'
  },

  {
      id: 3, 
      title: 'Models',
      path: '/models', 
  },

  {
      id: 4,
      title: 'Testimonials',
      path: '/testimonials'
  },

  {
      id: 5,
      title: 'Our Team',
      path: '/team'
  },
  
  {
      id: 6, 
      title: 'Contact',
      path: '/contact'
  },
]

export const CAR_DATA = [
  [
    {
      name: "VW Golf 6",
      price: "37",
      img: Golf6,
      model: "Golf 6",
      mark: "Volkswagen",
      year: "2008",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
  ],
  [
    {
      name: "Audi A1 S-Line",
      price: "45",
      img: AudiA1,
      model: "Audi",
      mark: "A1",
      year: "2012",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Gasoline",
    },
  ],
  [
    {
      name: "Toyota Camry",
      price: "30",
      img: Toyota,
      model: "Camry",
      mark: "Toyota",
      year: "2006",
      doors: "4/5",
      air: "Yes",
      transmission: "Automatic",
      fuel: "Hybrid",
    },
  ],
  [
    {
      name: "BMW 320 ModernLine",
      price: "35",
      img: Bmw320,
      model: "320",
      mark: "BMW",
      year: "2012",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
  ],
  [
    {
      name: "Mercedes-Benz GLK",
      price: "50",
      img: Benz,
      model: "Benz GLK",
      mark: "Mercedes",
      year: "2006",
      doors: "4/5",
      air: "Yes",
      transmission: "Manual",
      fuel: "Diesel",
    },
  ],
  [
    {
      name: "VW Passat CC",
      price: "25",
      img: Passat,
      model: "Passat CC",
      mark: "Volkswagen",
      year: "2008",
      doors: "4/5",
      air: "Yes",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  ],
];
