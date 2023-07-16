import React from 'react';
import { BookCar, PlanTrip, PickCar, Banner, ChooseUs, Testimonials, Faqs, Download, Footer, Hero} from "../components/index";


const Home = () => {
  return (
    <>
       <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faqs />
      <Download />
      <Footer />  
    </>
  )
}

export default Home