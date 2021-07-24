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
    qus: "Terms Conditions",
    ans: [
      {
        Header: "Conditions of Use",
        Points: [
          {
            point: " PLEASE READ THE FOLLOWING TERMS AND CONDITIONS OF USE CAREFULLY BEFORE USING THIS WEBSITE. All users of this site agree that access to and use of this site are subject to the following terms and conditions and other applicable law. If you do not agree to these terms and conditions, please do not use this site.",
          },
        ],
      },

      {
        Header: "Copyright",
        Points: [
          {
            point: "The entire content included in this site, including but not limited to text, graphics or code is copyrighted as a collective work under the State of Kuwait and other copyright laws, and is the property of ShopTheWorld Co for Designing and Managing Websites W.L.L The collective work includes works that are licensed to ShopTheWorld Co for Designing and Managing Websites W.L.L Copyright 2003, ShopTheWorld Co for Designing and Managing Websites W.L.L ALL RIGHTS RESERVED. Permission is granted to electronically copy and print hard copy portions of this site for the sole purpose of placing an order with ShopTheWorld Co for Designing and Managing Websites W.L.L or purchasing ShopTheWorld Co for Designing and Managing Websites W.L.L products. You may display and, subject to any expressly stated restrictions or limitations relating to specific material, download or print portions of the material from the different areas of the site solely for your own non-commercial use, or to place an order with ShopTheWorld Co for Designing and Managing Websites W.L.L or to purchase ShopTheWorld Co for Designing and Managing Websites W.L.L products. Any other use, including but not limited to the reproduction, distribution, display or transmission of the content of this site is strictly prohibited, unless authorized by ShopTheWorld Co for Designing and Managing Websites W.L.L You further agree not to change or delete any proprietary notices from materials downloaded from the site.",
          },
        ],
      },
      {
        Header: "Trademarks",
        Points: [
          {
            point: "All trademarks, service marks and trade names of ShopTheWorld Co for Designing and Managing Websites W.L.L used in the site are trademarks or registered trademarks of ShopTheWorld Co for Designing and Managing Websites W.L.L.",
          },
        ],
      },
      {
        Header: "Warranty Disclaimer",
        Points: [
          {
            point: "This site and the materials and products on this site are provided \"as is\" and without warranties of any kind, whether express or implied. To the fullest extent permissible pursuant to applicable law, ShopTheWorld Co for Designing and Managing Websites W.L.L disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose and non-infringement. ShopTheWorld Co for Designing and Managing Websites W.L.L does not represent or warrant that the functions contained in the site will be uninterrupted or error-free, that the defects will be corrected, or that this site or the server that makes the site available are free of viruses or other harmful components. ShopTheWorld Co for Designing and Managing Websites W.L.L does not make any warrantees or representations regarding the use of the materials in this site in terms of their correctness, accuracy, adequacy, usefulness, timeliness, reliability or otherwise. Some states do not permit limitations or exclusions on warranties, so the above limitations may not apply to you.",
          },
        ],
      },
      {
        Header: "Limitation of Liability",
        Points: [
          {
            point: "ShopTheWorld Co for Designing and Managing Websites W.L.L shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if ShopTheWorld Co for Designing and Managing Websites W.L.L has been advised of the possibility of such damages. Applicable law may not allow the limitation of exclusion of liability or incidental or consequential damages, so the above limitation or exclusion may not apply to you.",
          },
        ],
      },
      {
        Header: "Typographical Errors",
        Points: [
          {
            point: "In the event that a ShopTheWorld Co for Designing and Managing Websites W.L.L product is mistakenly listed at an incorrect price, ShopTheWorld Co for Designing and Managing Websites W.L.L reserves the right to refuse or cancel any orders placed for product listed at the incorrect price. ShopTheWorld Co for Designing and Managing Websites W.L.L reserves the right to refuse or cancel any such orders whether or not the order has been confirmed and your credit card charged. If your credit card has already been charged for the purchase and your order is cancelled, ShopTheWorld Co for Designing and Managing Websites W.L.L shall issue a credit to your credit card account in the amount of the incorrect price.",
          },
        ],
      },
      {
        Header: "Term & Termination",
        Points: [
          {
            point: "These terms and conditions are applicable to you upon your accessing the site and/or completing the registration or shopping process. These terms and conditions, or any part of them, may be terminated by ShopTheWorld Co for Designing and Managing Websites W.L.L without notice at any time, for any reason. The provisions relating to Copyrights, Trademark, Disclaimer, Limitation of Liability, Indemnification and Miscellaneous, shall survive any termination.",
          },
        ],
      },
      {
        Header: "Notice",
        Points: [
          {
            point: "ShopTheWorld Co for Designing and Managing Websites W.L.L may deliver notice to you by means of e-mail, a general notice on the site, or by other reliable method to the address you have provided to ShopTheWorld Co for Designing and Managing Websites W.L.L.",
          },
        ],
      },
      {
        Header: "Miscellaneous",
        Points: [
          {
            point: "Your use of this site shall be governed in all respects by the laws of the state of Kuwait., without regard to choice of law provisions, and not by the 1980 U.N. Convention on contracts for the international sale of goods. You agree that jurisdiction over and venue in any legal proceeding directly or indirectly arising out of or relating to this site (including but not limited to the purchase of ShopTheWorld Co for Designing and Managing Websites W.L.L products) shall be in the State of Kuwait. Any cause of action or claim you may have with respect to the site (including but not limited to the purchase of ShopTheWorld Co for Designing and Managing Websites W.L.L products) must be commenced within one (1) month after the claim or cause of action arises. ShopTheWorld Co for Designing and Managing Websites W.L.L failure to insist upon or enforce strict performance of any provision of these terms and conditions shall not be construed as a waiver of any provision or right. Neither the course of conduct between the parties nor trade practice shall act to modify any of these terms and conditions. ShopTheWorld Co for Designing and Managing Websites W.L.L may assign its rights and duties under this Agreement to any party at any time without notice to you.",
          },
        ],
      },
      {
        Header: "Use of Site",
        Points: [
          {
            point: "Harassment in any manner or form on the site, including via e-mail, chat, or by use of obscene or abusive language, is strictly forbidden. Impersonation of others, including a ShopTheWorld Co for Designing and Managing Websites W.L.L or other licensed employee, host, or representative, as well as other members or visitors on the site is prohibited. You may not upload to, distribute, or otherwise publish through the site any content which is libelous, defamatory, obscene, threatening, invasive of privacy or publicity rights, abusive, illegal, or otherwise objectionable which may constitute or encourage a criminal offense, violate the rights of any party or which may otherwise give rise to liability or violate any law. You may not upload commercial content on the site or use the site to solicit others to join or become members of any other commercial online service or other organization.",
          },
        ],
      },
      {
        Header: "Participation Disclaimer",
        Points: [
          {
            point: "ShopTheWorld Co for Designing and Managing Websites W.L.L does not and cannot review all communications and materials posted to or created by users accessing the site, and is not in any manner responsible for the content of these communications and materials. You acknowledge that by providing you with the ability to view and distribute user-generated content on the site, ShopTheWorld Co for Designing and Managing Websites W.L.L is merely acting as a passive conduit for such distribution and is not undertaking any obligation or liability relating to any contents or activities on the site. However, ShopTheWorld Co for Designing and Managing Websites W.L.L reserves the right to block or remove communications or materials that it determines to be (a) abusive, defamatory, or obscene, (b) fraudulent, deceptive, or misleading, (c) in violation of a copyright, trademark or; other intellectual property right of another or (d) offensive or otherwise unacceptable to ShopTheWorld Co for Designing and Managing Websites W.L.L in its sole discretion.",
          },
        ],
      },
      {
        Header: "Indemnification",
        Points: [
          {
            point: "You agree to indemnify, defend, and hold harmless ShopTheWorld Co for Designing and Managing Websites W.L.L, its officers, directors, employees, agents, licensors and suppliers (collectively the \"Service Providers\") from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of these terms and conditions or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the site using your Internet account.",
          },
        ],
      },
      {
        Header: "Third-Party Links",
        Points: [
          {
            point: "In an attempt to provide increased value to our visitors, ShopTheWorld Co for Designing and Managing Websites W.L.L may link to sites operated by third parties. However, even if the third party is affiliated with ShopTheWorld Co for Designing and Managing Websites W.L.L, ShopTheWorld Co for Designing and Managing Websites W.L.L has no control over these linked sites, all of which have separate privacy and data collection practices, independent of ShopTheWorld Co for Designing and Managing Websites W.L.L. These linked sites are only for your convenience and therefore you access them at your own risk. Nonetheless, ShopTheWorld Co for Designing and Managing Websites W.L.L seeks to protect the integrity of its web site and the links placed upon it and therefore requests any feedback on not only its own site, but for sites it links to as well (including if a specific link does not work).",
          },
        ],
      },
      {
        Header: "Governing Law and Jurisdiction",
        Points: [
          {
            point: "Country of merchant domicile: State of Kuwait",
          },
          {
            point: " Any dispute or claim arising out of or in connection with this website shall be governed and construed in accordance with the laws of the State of Kuwait",
          },
          {
            point: "ShopTheWorld will NOT deal or provide any services or products to any of OFAC sanctions countries in accordance with the law of the State of Kuwait",
          },
          {
            point: "ShopTheWorld Co for Designing and Managing Websites W.L.L and/or their affiliates (\"ShopTheWorld\") provide website features, payments solutions, Intellectual property, and other products and services to you when you visit or shop at ShopTheWorld international websites (the \"website\"). ShopTheWorld LLC, and ShopTheWorld Tech Ltd, provides logistics solutions. All sales/invoices on the ShopTheWorld websites are split between ShopTheWorld Co for Designing and Managing Websites W.L.L and/or their affiliates.",
          },
        ],
      },
      {
        Header: "Important Note Related to Electronic Products",
        Points: [
          {
            point: "Some electronic products of our website works on 120 volts and some works on 220 volts. Please read product’s manual/description before using the product and attach required power converter according to the product power capacity. In case of any help you can contact with our 24*7 customer support team.",
          },
        ],
      },
      {
        Header: "Note : ",
        Points: [
          {
            point: "Using the product on high/low voltage can cause the damage of your product.",
          },
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
            {terms.qus}
          </button>
        </h5>
      </CardHeader>
        <div className="card-body">
          {terms.ans.map((termsDetails, i) => (
            <p>
                    <h4 key={i} >{termsDetails.Header}</h4>
                    <ul>
                                    {termsDetails.Points.map((vari, i) => {
                                        return (
                                            <li key={i} style={styleObj} >{vari.point}<br/></li>)
                                    })}
                                </ul> 
                                <br/>
            </p>
                  ))}
          
        </div>
    </Card>
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
