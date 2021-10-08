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
    qus: "REFUND POLICY",
    ans: [
      {
        Header: "RETURNS",
        Points: [
            {
                point: "DO YOU HAVE EXCHANGE POLICY?",
                ans: "Regrettably, we do not have an exchange policy, we can only provide refund in case you received damaged/defective or wrong product after complete investigation done by the concerned department. "
              },
              {
                point: "WHAT IS YOUR RETURN PROCEDURE?",
                ans:  "If product delivered is damaged/defective or wrong, you need to inform us within 7 days from the day it was delivered. We may request you to share images or a video with order number (The link to upload Pictures and video will be given to you on your registered email address). The issue will then escalate to the concerned department who deals with shipping company and the seller. "
              },
              {
                point: "WHICH PRODUCTS ARE NOT RETURNABLE?",
                ans: "Following products are not returnable: Products not in the same condition as received. Specific categories like innerwear, lingerie, Beauty products, perfumes/deodorant, pants, socks and clothing freebies, grocery & gourmet, Jewelry and Pet Supplies etc. Products which have been used or installed. Products with tampered or missing serial numbers. Products with missing labels or accessories. Digital products. The DAP shipments cannot return until the customs clearance is complete."
              },
              {
                point: "WHAT IS YOUR RETURN POLICY?",
                ans: "In the unlikely event, if product delivered is damaged/defective or wrong, you can return your product. The product should be returned in a resalable & unused condition. The item must be in the original packaging and returned with any accessories or free gifts within 7 days from the day it was delivered."
              },
        ],
      },

      {
        Header: "REFUNDS",
        Points: [
          {
            point: "HOW SHOULD REFUND PROCESS ON RETURN?",
            ans: "Once your product returned, we will send you an email to notify you that we have received your returned product. The product will be then inspected and on that basis the approval or rejection of refund determines. Once it’s approved, your refund will be processed to original method of payment. Transaction settlement will take couple of days depending on your card issuer’s policy."
          },
        ],
      },
    ],
  },
   
];

const ReturnsAndRefund = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const styleObj = {
    display: "table-row"
    
    }
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
      
        <div className="card-body">
          
          {faq.ans.map((faqDetails, i) => (
            <p>
            
                    <h4 key={i} >{faqDetails.Header}</h4>
                    <ul>
                                    {faqDetails.Points.map((vari, i) => {
                                        return (
                                            <li key={i} style={styleObj} >{vari.point}<br/>
                                            <h6>{vari.ans}</h6>
                                            </li>)
                                    })}
                                </ul> 
                                <br/>
            </p>
                  ))}
          
        </div>
     
    </Card>
  );
};

const ReturnsAndRefundPage = () => {
  return (
    <>
      <CommonLayout parent="home" title="Returns & refunds">
        <section className="faq-section section-b-space">
          <Container>
            <Row>
              <Col sm="12">
                <div
                  className="accordion theme-accordion"
                  id="accordionExample"
                >
                  {faqData.map((faq, i) => (
                    <ReturnsAndRefund faq={faq} key={i} />
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

export default ReturnsAndRefundPage;
