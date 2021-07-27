import React, { useState } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import {
  Collapse,
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

const termsData = [
  {
    qus: "Privacy Poicy",
    ans: [
      {
        Header: "",
        Points: [
          {
            point: "This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.",
          },
           
        ],
      },

      {
        Header: "What personal information do we collect from the people that visit our website or app?",
        Points: [
          {
            point: "We do not collect information from visitors of our site. or other details to help you with your experience.",
          },
        ],
      },
      {
        Header: "When do we collect information?",
        Points: [
          {
            point: "We collect information from you when you register on our site, place an order, subscribe to a newsletter, respond to a survey, fill out a form, Use Live Chat, Open a Support Ticket or enter information on our site.",
          },
          {
              point:"Provide us with feedback on our products or services."
          }
        ],
      },
      {
        Header: "How do we use your information?",
        Points: [
          {
            point: "We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:",
          },
          {
            point: "•	To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.",
          },
          {
            point: "•	To improve our website in order to better serve you.",
          },
          {
            point: "•	To allow us to better service you in responding to your customer service requests.",
          },
          {
            point: "•	To administer a contest, promotion, survey or other site feature.",
          },
          {
            point: "•	To quickly process your transactions.",
          },
          {
            point: "•	To ask for ratings and reviews of services or products",
          },
          {
            point: "•	To follow up with them after correspondence (live chat, email or phone inquiries)",
          },
        ],
      },
      {
        Header: "How do we protect your information?",
        Points: [
          {
            point: "•	Our website is scanned on a regular basis for security vulnerabilities in order to make your visit to our site as safe as possible.",
          },

          {
            point:"•	We use regular Malware Scanning.",
          },
          {
            point:"•	Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.",
          },
          {
            point:"•	We implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information.",
          },
          {
            point:"•	All transactions are processed through a gateway provider and are not stored or processed on our servers.",
          }
        ],
      },
      {
        Header: "Do we use 'cookies'?",
        Points: [
          {
            point: "Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.",
          },
        ],
      },
      {
        Header: "We use cookies to:",
        Points: [
          {
            point: "•	Help remember and process the items in the shopping cart.",
          },
          {
            point:"•	Understand and save user's preferences for future visits.",
          },
          {
            point:"•	Keep track of advertisements.",
          },
          {
            point:"•	Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.",
          },
          {
            point:"You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies",
          }
        ],
      },
      {
        Header: "If users disable cookies in their browser:",
        Points: [
          {
            point: "If you turn cookies off it will turn off some of the features of the site.",
          },
           
        ],
      },
      {
        Header: "Third-party disclosure",
        Points: [
            {
              point: "",
            } 
          ],
      },
      {
        Header: "Do we disclose the information we collect to Third-Parties?",
        Points: [
          {
            point: "We transfer to outside parties (like shipping companies,payment gateways) your name, address,city,town, phone number, Email address. Payment gateways will also capture your card info if you will choose to make payment using Credit/Debit card. ",
          } 
        ],
      },
      {
        Header: "We engage in this practice because,:",
        Points: [
          {
            point: "Note: We have the contract with third parties (to whomever we transfer your data) so all your data will be disposed at their end after a certain time.",
          } 
        ],
      },
      {
        Header: "Third-party links",
        Points: [
          {
            point: "Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.",
          } 
        ],
      },
      {
        Header: "Google",
        Points: [
          {
            point: "Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en We use Google AdSense Advertising on our website. Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.",
          } 
        ],
      },
      {
        Header: "We have implemented the following:",
        Points: [
          {
            point: "•	Remarketing with Google AdSense",
          },
          {
            point: "•	Google Display Network Impression Reporting",
          },
          {
            point: "•	Demographics and Interests Reporting",
          },
          {
            point: "•	DoubleClick Platform Integration",
          },
          {
            point: "We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.",
          } 
        ],
      },
      {
        Header: "California Online Privacy Protection Act",
        Points: [
          {
            point: "CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf",
          } 
        ],
      },
      {
        Header: "According to CalOPPA, we agree to the following:",
        Points: [
          {
            point: "Users can visit our site anonymously. Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website. Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above",
          }, 
          {
              point:"You will be notified of any Privacy Policy changes:"
          },
          {
            point:"•	On our Privacy Policy PageCan change your personal information:"
        },
        {
            point:"•	By logging in to your account"
        }
        ],
      },
      {
        Header: "Does our site allow third-party behavioral tracking?",
        Points: [
          {
            point: "It's also important to note that we allow third-party behavioral tracking",
          } 
        ],
      },
      {
        Header: "COPPA (Children Online Privacy Protection Act)",
        Points: [
          { 
            point: "When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online. We do not specifically market to children under the age of 13 years old.",
          } 
        ],
      },
      {
        Header: "Fair Information Practices",
        Points: [
          {
            point: "The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.",
          } 
        ],
      },
      {
        Header: "In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:",
        Points: [
          {
            point: "•	Within 7 business days We will notify the users via in-site notification",
          } 
        ],
      },
    ],
  },
];

const TermsList = ({ terms }) => {
  const [isOpen, setIsOpen] = useState(false);

  const styleObj = {
    display: "table-row",
    textAlign: "justify"
    
    }
  const toggle = () => setIsOpen(!isOpen);
  return (
     <div>
        <h3 className="mb-0">
          
            {terms.qus}
 
        </h3>
       
        <div className="card-body">
          {terms.ans.map((termsDetails, i) => (
            <p>
                    <h4 key={i} >{termsDetails.Header}</h4>
                     <ul>
                                    {termsDetails.Points.map((vari, i) => {
                                        return (
                                            <li key={i}><p><div style={styleObj}>{vari.point}</div></p><br/></li>)
                                    })}
                                </ul> 
            </p>
                  ))}
          
        </div>
        </div>
  );
};

const TermsPage = () => {
  return (
    <>
      <CommonLayout parent="home" title="Terms & Conditions">
        <section className="terms-section section-b-space">
          <Container>
            <Row>
              <Col sm="12">
                <div
                  className="accordion theme-accordion"
                  id="accordionExample"
                >
                  {termsData.map((terms, i) => (
                    <TermsList terms={terms} key={i} />
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

export default TermsPage;
