import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";
import Testimonials from "../components/Testimonials";

const TestimonialsPage = () => {
  return (
    <>
    <section className="testimonial-page">
      <HeroPage name="Testimonials" />
      <Testimonials />
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(234) 8053929587</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  </>
  )
}

export default TestimonialsPage