import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Container, Row, Col, Input } from 'reactstrap';
import { withApollo } from '../../helpers/apollo/apollo';
import SelectSearch from 'react-select-search'
const options = [{name:'Electronics',value:'et'},{name:'Fashion',value:'fs'}]
import './style.css'
const Search = () => {
    return (
        <CommonLayout parent="home" title="search">
                            <SelectSearch class='select-search' options={options} value="et" name="language" placeholder="All" />
            {/* <!--section start--> */}
            <section className="authentication-page section-b-space">
                <Container>

                    <section className="search-block">
                        <Container>
                            <Row>
                                <Col lg="6" className="offset-lg-3">
                                    <form className="form-header">
                                        <div className="input-group">
                                            <Input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"
                                                placeholder="Search Anything" />
                                            <div className="input-group-append">
                                                <button className="btn btn-solid"><i className="fa fa-search"></i>Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </Col>
                            </Row>

                        </Container>
                    </section>
                </Container>
            </section>
            {/* <!-- section end --> */}

        </CommonLayout>
    )
}

export default withApollo(Search);