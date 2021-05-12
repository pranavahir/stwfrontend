import React, { useState } from "react";
import CommonLayout from "../../components/shop/common-layout";
import {
  Collapse,
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

const faqData = [
  {
    qus: "LEGITIMACY & RELIABILITY",
    ans: [
      {
        Header: "LEGITIMACY",
        Points: [
          {
            point: "IS Shop the world A LEGIT WEBSITE?",
          },
        ],
      },

      {
        Header: "RELIABILITY",
        Points: [
          {
            point: "IS UBUY A TRUSTWORTHY ECOMMERCE STORE?",
          },
          {
            point: "IS IT SAFE TO BUY FROM UBUY?",
          },
        ],
      },
    ],
  },
   
];

const FaqList = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Card>
      <CardHeader id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            type="button"
            data-toggle="collapse"
            onClick={toggle}
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {faq.qus}
          </button>
        </h5>
      </CardHeader>
      <Collapse
        isOpen={isOpen}
        id="collapseOne"
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">
          
          {faq.ans.map((faqDetails, i) => (
            <p>
                    <h4 key={i} >{faqDetails.Header}</h4>
                    <ul className="color-variant">
                                    {faqDetails.Points.map((vari, i) => {
                                        return (
                                            <li key={i} >{vari.point}</li>)
                                    })}
                                </ul> 
            </p>
                  ))}
          
        </div>
      </Collapse>
    </Card>
  );
};

const FaqPage = () => {
  return (
    <>
      <CommonLayout parent="home" title="faq">
        <section className="faq-section section-b-space">
          <Container>
            <Row>
              <Col sm="12">
                <div
                  className="accordion theme-accordion"
                  id="accordionExample"
                >
                  {faqData.map((faq, i) => (
                    <FaqList faq={faq} key={i} />
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </CommonLayout>
    </>
  );
};

export default FaqPage;
