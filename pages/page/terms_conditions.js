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

const termsData = [
  {
    qus: "Billing Terms & Conditions",
    ans: [
      {
        Header: "Terms and Conditions of Use",
        Points: [
          {
            point: " THESE TERMS AND CONDITIONS OF USE, INCLUDING OUR PRIVACY POLICY, CONSTITUTE A LEGALLY BINDING AGREEMENT BETWEEN YOU AND HAYLIE POMROY GROUP, INC.",
          },
          {
            point: " We are happy that you have decided to visit https://shoptheworld.in (the “Website”) which is operated by STW Ecommerce Pvt Ltd. (“STW”, “we”, “us”, or “our”) and hope that you enjoy your vist. Before proceeding any further, please read these Terms and Conditions of Use carefully. Your use of the Website indicates that you agree to be bound by and comply with these Terms and Conditions of Use, which includes and incorporates our Privacy Policy, as revised by STW from time to time, in its sole discretion.",
          },
        ],
      },

      {
        Header: "Content and Copyright, Trademark, and Related Issues",
        Points: [
          {
            point: "All content, including information, text and graphics and all other material contained on the Website or features and functions which may be available on or through the Website (collectively, the “Content”) is for your personal informational purposes only. Content is owned by STW or our licensors and is protected by the copyright, trademark and other laws and regulations of the respective jurisdictions. Your use of the Content in any way not expressly permitted by these Terms and Conditions will immediately and automatically terminate your right to access the Website and/or use the Content. Access to the Website and the Content are subject to change or termination without notice.",
          },

          {
            point: "The trademarks, names, slogans, logos, characters and service marks (collectively the “Trademarks”) displayed on our Website belong to STW or have been licensed to STW. Nothing contained on the Website should be construed as granting you any license or right to use any Trademark displayed on our Website. Your use/misuse of the Trademarks, except as provided in these Terms and Conditions, is strictly prohibited.",
          },
          {
            point: "STW will aggressively enforce its intellectual property rights to the fullest extent of the law, including criminal prosecution. All rights not expressly granted herein are reserved.",
          },
          

        ],
      },
      {
        Header: "User Submissions",
        Points: [
          {
            point: "Any Personal Information you submit to the Website is governed by the Privacy Policy. The term “Personal Information” includes your name, street address, town or city, state, zip code, telephone number, email address, gender and any other information that would allow someone to identify you or contact you. You agree you will not send, upload or transmit any communication or content of any type that infringes or violates any rights of any party or violate these Terms of Use. You understand, acknowledge and agree 1) that all information, data, text, software, music, sound, photographs, graphics, video, messages, tags, or other materials (“User Content”), whether publicly posted or privately transmitted, are the sole responsibility of the person from whom such User Content originated; 2) that such User Content will not be considered or treated by STW as confidential; and 3) you further (i) acknowledge and understand others may see, read, use or re-transmit such User Content, (ii) explicitly represent and warrant that you are the owner of such User Content or have all rights and licenses necessary regarding such User Content and (iii) acknowledge and agree that STW is, by your submission of such User Content, granted a royalty-free, perpetual, irrevocable, unrestricted world-wide nonexclusive license to use, reproduce, create derivative works from, modify, publish, edit, translate, adapt, transform, distribute, transmit, broadcast, perform and display such User Content in any media or medium, or any form, format, or forum now known or hereafter developed. STW may sublicense its rights through multiple tiers of sublicenses. STW, however, is under no obligation to use the User Content.",
          },
        ],
      },
      {
        Header: "Commercial Transactions:",
        Points: [
          {
            point: " \"Products Orders and Refunds\" Please click on the following link: Shipping and Returns Policies We reserve the right to increase charges and fees, or to institute new charges or fees at any time, upon reasonable advance notice communicated to you through a posting on the Website or such other means as we may deem appropriate from time to time (including electronic mail).",
          },
          {
            point: " \"Passwords and Security\"  If you are a registered member of our Website you are responsible for maintaining the confidentiality of your password and user account information. You agree to notify us in the event of any known or suspected unauthorized use of your user account. STW will not be liable for any loss that you may incur as a result of someone else using your password or account, either with or without your knowledge.",
          },
          {
            point: " \"Linking / Third Party Links on the Website\" This Website may contain links to other websites. STW does not recommend, monitor, control or endorse any third party advertising or content, or the content on any third-party websites and is not responsible for such websites’ terms of use or privacy policies or how they may treat your information. Your use of third-party websites is at your own risk.",
          },
          {
            point: "Do not, without STW’s written permission,: (a) incorporate any content from our Website into your website (e.g., by in-lining or framing); or (b) use any of our Trademarks or any words or codes identifying our Website in any “metatag” or other information used by search engines or other information location tools to identify and select websites.",
          },


        ],
      },
      {
        Header: "Limitation of Liability",
        Points: [
          {
            point: "The use of the Website and Content is at your own risk.  Transmissions over the Internet and communications networks are not in STWs control and can never be completely secure. Accordingly, STW cannot and shall not be liable for any delay, failure, interruption, compromise or corruption of any data or other information transmitted in connection with use of the Website, including information you provide to us or the Website for any reason.",
          },

          {
            point:"TO THE FULLEST EXTENT PERMITTED BY LAW, STW AND THE WEBSITE DISCLAIM ALL WARRANTIES, EXPRESS AND IMPLIED, STATUTORY AND OTHERWISE, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.",
          },
          {
            point:"In no event shall STW, the Website, our licensors, suppliers or Content providers be liable for any damages, including, without limitation, direct, indirect, incidental, consequential, special, exemplary and special damages or damages resulting from lost data or business interruption, regardless of the form of action or the basis of the claim, whether based on warranty, contract, tort, strict liability or any other legal theory, and whether or not a party has been advised of the possibility of damages. If, for any reason, STW shall be found to be liable, our aggregate liability to you or any other party or parties claiming with, under or through you, shall be limited to U.S. $1,000, notwithstanding any claim that such remedy fails of its essential purpose. No claim or action arising from or concerning the Website, the Content or otherwise arising hereunder may be brought later than one (1) year from the date the claim or cause of action arose.",
          }
        ],
      },
      {
        Header: "Indemnification",
        Points: [
          {
            point: "You agree to defend, indemnify, and hold STW, its officers, directors, employees, agents, licensors and suppliers, harmless from and against any claims, actions or demands, liabilities and settlements including without limitation, reasonable legal and accounting fees, arising out of, resulting from, or alleged to result from, your violation of these Terms and Conditions of Use.",
          },
        ],
      },
      {
        Header: "General",
        Points: [
          {
            point: "STW is based in California, in the United States of America. STW makes no claims that the Website, any Content or User Content are appropriate or may be transmitted, used or installed outside of the United States. Access may not be legal by certain persons or in certain countries. If you access the Website from outside the United States, you do so at your own risk and are responsible for compliance with the laws of your jurisdiction.",
          },
          {
            point:"Any terms or conditions in these Terms and Conditions of Use that must survive to give effect to their meaning, shall survive the termination, expiration or cancellation of these Terms and Conditions of Use.",
          }
        ],
      },
      {
        Header: "Law that Applies; Interpretation and Modification",
        Points: [
          {
            point: "By using the Website, you expressly agree and personally submit to the exclusive jurisdiction of the courts of the County of Los Angeles, State of California, to adjudicate and resolve any dispute with STW, its affiliates, subsidiaries, employees, contractors, officers, directors, telecommunication providers and Content providers or in any other way relating to the Website, including, but not limited to, Content or User Content. YOU HEREBY IRREVOCABLE WAIVE YOUR RIGHT TO A JURY TRIAL OR TO CLAIM THAT THE STATE OF CALIFORNIA IS AN INCONVENIENT FORUM TO HEAR CLAIMS AND DISPUTES.",
          },
          {
            point:"These Terms of Use are governed by the substantive laws of the State of California, without respect to its conflict of laws principles. If any provision of these Terms and Conditions of Use is found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms and Conditions of  Use, which shall remain in full force and effect. No waiver of any of these Terms and Conditions of Use shall be deemed a further or continuing waiver of such term or condition or any other term or condition. STW may modify these Terms and Conditions of Use, including our Privacy Policy, at any time and although we will generally try and provide at least 30 days’ advance notice of the effective date of any material modification, if we do not provide advance notice, the modification will take effect when STW posts the change on our Website. Accordingly, STW urges you to check back frequently so that you are aware of the terms and conditions that apply to your continued use of the Website.",
          }

        ],
      },
      {
        Header: "Complete Agreement",
        Points: [
          {
            point: "These Terms and Conditions of Use, including our Privacy Policy, constitute the entire agreement between you and STW regarding the Website and supersedes any and all other terms, representations, promises or discussions. Only STW has the authority to agree to amendments to these Terms and Conditions of Use, and to be and be considered binding, any amendments must be in writing and executed by STW.",
          },
          {
            point:"Questions or comments regarding this Website, including reports of non-functioning links, should be submitted using our contact us form or mail to: "  +"\n \n" + " care@shoptheworldonline.com ",
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
                                            <li key={i}><p><div style={styleObj}>{vari.point}</div></p><br/><br/></li>)
                                    })}
                                </ul> 
                                <br/>
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
