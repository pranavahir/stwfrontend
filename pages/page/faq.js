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
            ans: "You can trust ShopTheWorld any day and be assured that your trust with us is really valuable for us and the money you spend is in safe hands. We are learning and growing each day to become better and more efficient in the days to come."

          },
        ],
      },

      {
        Header: "RELIABILITY",
        Points: [
          {
            point: "IS ShopTheWorld A TRUSTWORTHY ECOMMERCE STORE?",
            ans: "ShopTheWorld is a genuine and trustworthy eCommerce store; launched in the year 2015. It has been providing millions of customers with branded and authentic products, in over 90 countries globally. Headquartered in Kuwait, it offers highly secure website services, using the latest technologies; to provide a seamless online shopping experience. It is a legit site and is different from other sites since it provides stuff from across the international borders; especially unique products that are not easily available at local stores."

          },
          {
            point: "IS IT SAFE TO BUY FROM ShopTheWorld?",
            ans: "Yes, it is safe to buy from ShopTheWorld, since it is a legit eCommerce store operating in more than 90 countries. It has been successfully delivering millions of products to customers around the globe since 2015. Many of our customer reviews on websites like Trustpilot have been positive while sometimes customers do face certain issues and we solve it ASAP. Our website runs on HTTPS which is a more secure version since all communications between your browser and the website are encrypted and the transactions are more safe and secure. All your personal information is kept confidential and is protected by secured networks. We do believe in ensuring 100% customer delight for anyone who shops with us. Our payment process is online and your money is safe with us since we use advanced encryption systems. In the unlikely event of an incorrect or damaged product, you will get a full refund as per the criteria."
          },
        ],
      },
    ],
  },
  {
    qus: "CAMPAIGNS & OFFERS",
    ans: [
      {
        Header: "",
        Points: [
          {
            point: "WHAT ARE THE CONDITIONS FOR CAMPAIGNS & OFFERS?",
            ans: "They are valid for a limited amount of time only and cannot be applied before and after this period. They do not apply on products that are already on discount."
          },
          {
            point: "HOW DO I USE MY COUPON CODE?",
            ans: "You need to enter your coupon code in the correct field at the cart page. Please make sure that no additional spaces are added when you paste code."

          },
        ],
      },
    ],
  },
   
  {
    qus: "WEBSITE AND TROUBLESHOOTING",
    ans: [
      {
        Header: "WEBSITE",
        Points: [
          {
            point: "WHAT METHODS ARE USED TO PREVENT FRAUD?",
            ans: "All the products are delivered to customers on providing the online invoice generated after successful payment. All the delivery addresses are stored in the order history and verified before delivery by our respective departments. If the system detected any transaction as fraud, we verify the transaction by taking some details from buyer and if authentication failed in verification then the transaction will be canceled and refunded within 7 working days."
          },
          {
            point: "HOW DO I KNOW YOU WORK IN SECURE ECOMMERCE ENVIRONMENT?",
            ans: "All the payment transaction pages are secured by approved SSL certificates. SSL Certificate can be verified by the following https://shoptheworld.in All our payment transactions are done on the provider website, which are well known and authorized providers."
          },
          {
            point: "WHEN CAN I CONTACT CUSTOMER CARE AND HOW?",
            ans: "You can email/watsapp/call/live chat with us anytime with the details provided on 'Contact us' page."
          },
          
          {
            point: "DO YOU HAVE PHYSICAL STORE?",
            ans: "We have are 100% online store only. So we do not have any physical store as of now. All our items are sourced internationally."
          },
        ],
      },

      {
        Header: "TROUBLESHOOTING",
        Points: [
          {
            point: "WHAT ARE COOKIES AND WHY DO I NEED TO ALLOW THEM?",
            ans: "We use cookies on our website to collect visitor statistics to improve your experience using our website and provide start of the art features. When necessary we may update this information from time to time. We recommend that you visit this page on a regular basis to get the latest information regarding the cookies we use on our website."
          },
          {
            point: "AMOUNT DEDUCTED AND MY ORDER STATUS IS SHOWING ON HOLD OR CANCELLED, WHAT DOES IT MEANS?",
            ans:  "On hold or canceled order status means that we did not receive amount from your card or bank. If your amount deducted from your account and your order status is showing on hold or canceled, you can either wait for a couple of days, amount will reverse in your account or contact our customer care for further assistance."
          },
          {
            point: "I HAVE PLACED AN ORDER BUT I HAVEN'T RECEIVED A CONFIRMATION EMAIL. WHAT DOES THIS MEAN?",
            ans: "You will receive the order confirmation email immediately just after placing your order. If you don’t receive that email, please check your Spam folder and see if you can locate it (Please mark “Not as Spam” to receive the emails directly into your Inbox)."
          },
          {
            point: "WHEN I CLICK ON THE \"PLACE ORDER\" BUTTON NOTHING HAPPENS. WHAT CAN I DO?",
            ans: "Please try to clear the cookies in your browser before you place the order. Go to Tools Clear history Clear cookies Afterward, please restart/refresh your browser. *This path might be slightly different depending on the browser you use. If you still cannot place your order, please contact our support. "
            
          },
        ],
      },
    ],
  },
  {
    qus: "PAYMENTS AND FEES",
    ans: [
      {
        Header: "PAYMENTS",
        Points: [
          {
            point: "DO YOU HAVE CASH ON DELIVERY/BANK TRANSFER PAYMENT OPTIONS?",
            ans: "Currently, Cash on delivery option is not available. We accept bank transfer, please reach our customer support."
          },
          {
            point: "DOES ShopTheWorld CHARGE ANYTHING EXTRA BECAUSE OF THE DIFFERENCE IN CURRENCY?",
            ans: "We do not charge anything extra apart from the total amount shown in your cart at the time of checkout."
          },
          {
            point: "WHAT ONLINE PAYMENT METHODS ARE ACCEPTED IN DIFFERENT COUNTRIES?",
            ans: "Available payment options are shown for each country in the bottom of the home page of website. You can also find the same on the third step of the checkout."
          },
        ],
      },

      {
        Header: "FEES",
        Points: [
          {
            point: "ARE SHIPPING FEES REFUNDABLE IF I RETURN MY PRODUCT?",
            ans: "If you received a damaged/defective/wrong product from ShopTheWorld, it is our responsibility and we will refund complete amount along with shipping fees."
          },
          {
            point: "DO I NEED TO PAY ANYTHING EXTRA AT THE TIME OF DELIVERY?",
            ans:  "No, we do not charge anything other than what you pay at the time of check out.If you are requested to pay again then please contact us immediately."
          },
           
        ],
      },
    ],
  },
  {
    qus: "CANCELLATION",
    ans: [
      {
        Header: "CANCELLATION",
        Points: [
          {
            point: "WILL I GET COMPLETE REFUND ON ORDER CANCELLATION?",
            ans:  "If you received a damaged/defective/wrong product from ShopTheWorld, it is our responsibility and we will refund complete amount along with shipping fees. If you would like to cancel your order for any personal reasons, in that case: a.)  If the shipment has been created/processed: Partial shipping fees will be deducted and rest of the amount will be refunded. b.)  If the shipment has not been created so far, Full refund will be processed. c.)  If the shipment left to your address, we cannot cancel your order."
          },
          {
            point: "HOW DO I CANCEL ORDER?",
            ans:  "You need to contact our customer service for order cancellation. You can contact us through email, chat or call."
          },
        ],
      },
    ],
  },
  {
    qus: "ORDER & DELIVERY",
    ans: [
      {
        Header: "ORDER",
        Points: [
            {
                point: "CAN I REQUEST FOR A COPY OF ORDER INVOICE TO MY EMAIL ID?",
                ans: "Yes, you can contact with customer service team and they will provide you order invoice immediately."
              },
              {
                point: "CAN I CHANGE PRODUCT IN ORDER?",
                ans: "We are sorry to say that we cannot change the product in order once placed. If the order not shipped yet, you can reach us to see what can be done."
              },
              {
                point: "HOW DO I TRACK MY ORDER?",
                ans:  "You will receive Track order link once the order shipped.  You can also track order on our website, login to your account and check the status of each order."
              },
        ],
      },

      {
        Header: "DELIVERY",
        Points: [
          
          {
            point: "WHAT IS THE ESTIMATED TIME OF DELIVERY FOR THE PRODUCTS?",
            ans: "In general, you will receive your item within the chosen shipping method 12 Business days or sooner. We update the orders with tracking information and you can check the status of the order. "
          },
          {
            point: "WHICH SHIPPING CARRIERS DO YOU USE?",
            ans: "We use only reputed carriers, such as UPS, DHL, FedEx and Bluedart for shipments delivery."
          },
        ],
      },
    ],
  },
  {
    qus: "RETURNS & REFUNDS",
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

const FaqList = ({ faq }) => {
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
      </Collapse>
    </Card>
  );
};

const FaqPage = () => {
  return (
    <>
      <CommonLayout parent="home" title="frequently asked question">
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
