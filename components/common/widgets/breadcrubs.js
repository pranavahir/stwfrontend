import React from 'react';
import { Container, Row ,Col } from 'reactstrap';
import Link from "next/link";


const Breadcrubs = ({title ,parent ,subTitle,leafTitle}) => {

    return (
        <div className="breadcrumb-section">
            <Container>
                <Row>
                    <Col sm="6">
                        {/* <div className="page-title">
                            <h5>{title}</h5>
                        </div> */}
                        <nav aria-label="breadcrumb" className="page-title">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">{parent}</a></li>
                                
                                   {
                                    
                                    subTitle === undefined ?  
                                   <li className="breadcrumb-item" aria-current="page"><b>{title}</b></li> : 
                                   <li className="breadcrumb-item" aria-current="page"><b><Link href={`/category/${title}`}>{title}</Link></b></li> 
                                   
                                   }
                                   

                                {subTitle === undefined ? '' : 
                                   (leafTitle == undefined ? 
                                       <li className="breadcrumb-item active" aria-current="page"><b>{subTitle}</b></li> :
                                       <li className="breadcrumb-item active" aria-current="page"><b><Link href={`/category/${title}/${subTitle}`}>{subTitle}</Link></b></li>
                                       )
                                    }
                                {
                                    leafTitle === undefined ?
                                    ''
                                    :
                                    <li className="breadcrumb-item active" aria-current="page"><b>{leafTitle}</b></li>
                                }

                            </ol>
                        </nav>
                    </Col>
                    <Col sm="6">
                        {/* <nav aria-label="breadcrumb" className="theme-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">{parent}</a></li>
                                <li className="breadcrumb-item" aria-current="page">{title}</li>
                                {
                                    subTitle === undefined ?
                                    ''
                                    :
                                    <li className="breadcrumb-item active" aria-current="page">{subTitle}</li>
                                }
                                
                            </ol>
                        </nav> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Breadcrubs;