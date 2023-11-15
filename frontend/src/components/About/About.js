import "../../styles/css/About.css";
import { Container, Card } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className="main-about">
        <div className="title-about">
          <h1>About Us</h1>
        </div>
        <hr />
        <div className="content-about">
          <div className="content-about-body">
            <Card className="card-about">
              <h5>
                Welcome to CarRentals, your premier destination for luxury car
                rentals in the heart of Boston, MA. At CarRental, we redefine
                the driving experience by offering an exclusive fleet of
                meticulously maintained luxury vehicles, ranging from
                sophisticated sedans and midsize SUVs to elegant limousines.
              </h5>
              <br />
              <br />
              <h2>Our Commitment:</h2>
              <br />
              <h5>
                Driven by passion and a commitment to excellence, CarRentals is
                more than just a car rental service – it's a symbol of prestige
                and unparalleled luxury. Our dedication to providing an
                exceptional experience extends beyond our exquisite fleet; it's
                embedded in every aspect of our service.
              </h5>
              <br />
              <br />
              <h2>Why Choose Us:</h2>
              <br />
              <h5>
                Premium Fleet: Explore our curated selection of high-end
                vehicles, each crafted to elevate your journey, whether it's a
                business trip, special occasion, or leisurely drive.
              </h5>
              <hr />
              <h5>
                Transparent Pricing: Enjoy straightforward and competitive
                pricing with no hidden fees. Our transparent approach ensures
                you know exactly what to expect, allowing you to indulge in
                luxury without compromise.
              </h5>
              <hr />
              <h5>
                Exceptional Service: Our team of dedicated professionals is
                committed to delivering personalized and seamless service. From
                the moment you inquire about a reservation to the completion of
                your rental, we prioritize your satisfaction.
              </h5>
              <hr />
              <h5>
                New Opportunities: CarRentals is not just a car rental company;
                it's a growing family. As we embark on this exciting journey,
                we're actively seeking talented individuals to join our team.
                Explore career opportunities in our Career section and be a part
                of shaping the future of luxury transportation.
              </h5>
              <hr />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
