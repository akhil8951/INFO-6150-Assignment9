import "../../styles/css/Jobs.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import softwareEngineer from "../../Assets/softwareEngineer.jpg";
import marketing from "../../Assets/marketing.jpg";
import carMechanic from "../../Assets/carMechanic.jpg";
import carDesigner from "../../Assets/carDesigner.jpg";
import customerService from "../../Assets/customerService.jpg";
import JobsCard from "./JobsCard";

const Jobs = () => {
  let [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Automotive Detailer",
      text: "Our team is seeking a responsible, dedicated person to join our team as full time and part time Automotive Detailers.",
      source: softwareEngineer,
    },
    {
      id: 2,
      title: "Marketing Consultant",
      text: "As a Marketing Consultant, you will play a pivotal role in developing and executing marketing strategies to promote our car rental services. Working closely with the marketing team, you will analyze market trends, and customer acquisition.",
      source: marketing,
    },
    {
      id: 3,
      title: "Car Sales Consultant",
      text: "The Car Sales Consultant facilitates the sales & finance process, provides excellent customer service. Fully execute sales process, achieve monthly sales targets, maintain strong CRM output and quality.",
      source: carMechanic,
    },

    {
      id: 4,
      title: "Director of Marketing",
      text: "Whether you see yourself in sales, business development, customer service, retail management, or operations, as a manager in training, you can count on a career path with a clear beginning and an open end that’s full of opportunities. ",
      source: carDesigner,
    },
    {
      id: 5,
      title: "Customer Service Representative",
      text: "The Customer Service Representative will provide a high level of service and be a part of supporting our business partners! CSR will perform a variety of administrative and business account functions.",
      source: customerService,
    },
  ]);

  return (
    <>
      <div className="main-jobs">
        <div className="title">
          <h1>Carrer at CarRentals</h1>
        </div>
        <hr></hr>
        <Container fluid className="Container-jobs">
          <Row>
            {jobs.map((job) => {
              return (
                <JobsCard
                  title={job.title}
                  text={job.text}
                  source={job.source}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Jobs;
