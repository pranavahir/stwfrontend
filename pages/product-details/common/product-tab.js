import React,{useState} from 'react';
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';


const ProductTab = ({selectedItem}) => {
    const productData = selectedItem;
    var productDesc = null;
    var bulletpoints = null;
    var SpecificationsData = [];
    
    const JsonCopy = (Value) => {

        return JSON.parse(JSON.stringify(Value))
    }

    const specFormation=(specifications)=>{

        var specificationsDetails = [];
        var data={
                key:null,
                value:null
        }
        if(specifications!=null && specifications!=undefined)
        {
          
            
            if(specifications.upc!=null && specifications.upc!=undefined && specifications.upc!="")
            {
                data.key = "UPC";
                data.value = specifications.upc;
                specificationsDetails.push(JsonCopy(data));
            }
    
            if(specifications.mpn!=null && specifications.mpn!=undefined && specifications.mpn!="")
            {
                data.key = "MPN";
                data.value = specifications.mpn;
                specificationsDetails.push(JsonCopy(data));
            }
    
            if(specifications.partnumber!=null && specifications.partnumber!=undefined && specifications.partnumber!="")
            {
                data.key = "Part Number";
                data.value = specifications.partnumber;
                specificationsDetails.push(JsonCopy(data));
            }
    
            if(specifications.isbn!=null && specifications.isbn!=undefined && specifications.isbn!="")
            {
                data.key = "ISBN";
                data.value = specifications.isbn;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.screendisplaysize!=null && specifications.screendisplaysize!=undefined && specifications.screendisplaysize!="")
            {
                data.key = "Screen Display Size";
                data.value = specifications.screendisplaysize;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.maxscreenresolution!=null && specifications.maxscreenresolution!=undefined && specifications.maxscreenresolution!="")
            {
                data.key = "Max Screen Resolution";
                data.value = specifications.maxscreenresolution;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.processor!=null && specifications.processor!=undefined && specifications.processor!="")
            {
                data.key = "Processor";
                data.value = specifications.processor;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.ram!=null && specifications.ram!=undefined && specifications.ram!="")
            {
                data.key = "Ram";
                data.value = specifications.ram;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.memoryspeed!=null && specifications.memoryspeed!=undefined && specifications.memoryspeed!="")
            {
                data.key = "Memory Speed";
                data.value = specifications.memoryspeed;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.harddrive!=null && specifications.harddrive!=undefined && specifications.harddrive!="")
            {
                data.key = "Harddrive";
                data.value = specifications.harddrive;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.graphiccoprocessor!=null && specifications.graphiccoprocessor!=undefined && specifications.graphiccoprocessor!="")
            {
                data.key = "Graphic co Processor";
                data.value = specifications.graphiccoprocessor;
                specificationsDetails.push(JsonCopy(data));
            }
    
            
            if(specifications.chipsetbrand!=null && specifications.chipsetbrand!=undefined && specifications.chipsetbrand!="")
            {
                data.key = "Chipset Brand";
                data.value = specifications.chipsetbrand;
                specificationsDetails.push(JsonCopy(data));
            }
    
            
            if(specifications.carddescription!=null && specifications.carddescription!=undefined && specifications.carddescription!="")
            {
                data.key = "Card Description";
                data.value = specifications.carddescription;
                specificationsDetails.push(JsonCopy(data));
            }
    
            
            if(specifications.wirelesstype!=null && specifications.wirelesstype!=undefined && specifications.wirelesstype!="")
            {
                data.key = "Wireless Type";
                data.value = specifications.wirelesstype;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.numberofusb2port!=null && specifications.numberofusb2port!=undefined && specifications.numberofusb2port!="")
            {
                data.key = "Number of USB 2 Port";
                data.value = specifications.numberofusb2port;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.numberofusb3port!=null && specifications.numberofusb3port!=undefined && specifications.numberofusb3port!="")
            {
                data.key = "Number of USB 3 Port";
                data.value = specifications.numberofusb3port;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.avgbatterylife!=null && specifications.avgbatterylife!=undefined && specifications.avgbatterylife!="")
            {
                data.key = "Avg. Battery Life";
                data.value = specifications.avgbatterylife;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.series!=null && specifications.series!=undefined && specifications.series!="")
            {
                data.key = "Series";
                data.value = specifications.series;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.operatingsystem!=null && specifications.operatingsystem!=undefined && specifications.operatingsystem!="")
            {
                data.key = "Operating System";
                data.value = specifications.operatingsystem;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.processorbrand!=null && specifications.processorbrand!=undefined && specifications.processorbrand!="")
            {
                data.key = "Processor Brand";
                data.value = specifications.processorbrand;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.processorcount!=null && specifications.processorcount!=undefined && specifications.processorcount!="")
            {
                data.key = "Processor Count";
                data.value = specifications.processorcount;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.computermemorytype!=null && specifications.computermemorytype!=undefined && specifications.computermemorytype!="")
            {
                data.key = "Computer Memory Type";
                data.value = specifications.computermemorytype;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.flashmemorysize!=null && specifications.flashmemorysize!=undefined && specifications.flashmemorysize!="")
            {
                data.key = "Flash Memory Size";
                data.value = specifications.flashmemorysize;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.hardriveinterface!=null && specifications.hardriveinterface!=undefined && specifications.hardriveinterface!="")
            {
                data.key = "Hard Drive Interface";
                data.value = specifications.hardriveinterface;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.harddriverotationalspeed!=null && specifications.harddriverotationalspeed!=undefined && specifications.harddriverotationalspeed!="")
            {
                data.key = "Hard Drive Rotational Speed";
                data.value = specifications.harddriverotationalspeed;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.batteries!=null && specifications.batteries!=undefined && specifications.batteries!="")
            {
                data.key = "Batteries";
                data.value = specifications.batteries;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.itemdimension!=null && specifications.itemdimension!=undefined && specifications.itemdimension!="")
            {
                data.key = "Item Dimension";
                data.value = specifications.itemdimension;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.productdimension!=null && specifications.productdimension!=undefined && specifications.productdimension!="")
            {
                data.key = "Product Dimension";
                data.value = specifications.productdimension;
                specificationsDetails.push(JsonCopy(data));
            }
            
            
            if(specifications.opticalzoom!=null && specifications.opticalzoom!=undefined && specifications.opticalzoom!="")
            {
                data.key = "Optical Zoom";
                data.value = specifications.opticalzoom;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.publisher!=null && specifications.publisher!=undefined && specifications.publisher!="")
            {
                data.key = "Publisher";
                data.value = specifications.publisher;
                specificationsDetails.push(JsonCopy(data));
            }
            
            if(specifications.size!=null && specifications.size!=undefined && specifications.size!="")
            {
                data.key = "Size";
                data.value = specifications.size;
                specificationsDetails.push(JsonCopy(data));
            }
            
        }
        
        return specificationsDetails;

    }

    if(productData!=null || productData!=undefined)
    {
        productDesc = productData.product.description;
        bulletpoints = productData.product.bullepoints;
        SpecificationsData = specFormation(productData.product.specifications[0]);
    }

    const productDescriptions = productDesc;
    const productbulletpoints = bulletpoints;

    const [activeTab, setActiveTab] = useState('1');
  
    return (
   
        <section className="tab-product m-0">
            <Container>
                <Row>
                    <Col sm="12" lg="12">
                        <Row className="product-page-main m-0">
                            <Nav tabs className="nav-material">
                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                    <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                        Description
                                        </NavLink>
                                </NavItem>
                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                    <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                    Specifications
                                        </NavLink>
                                </NavItem>
                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                    <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                        Vedio
                                        </NavLink>
                                </NavItem>
                                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                                    <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                                        Write Review
                                        </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab} className="nav-material">
                                <TabPane tabId="1">
                                    <p className="mb-0 pb-0">{productDescriptions}</p>
                                </TabPane>
                                <TabPane tabId="2">
                                    {/* <p className="mb-0 pb-0">{SpecificationsData}</p> */}
                                    
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Value</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    {SpecificationsData.map(spec => {
                                                    return <tr><td>{spec.key}</td><td>{spec.value}</td></tr>;
                                                    })}
                                                </tbody>
                                            </table>
                                    
                                </TabPane>
                                <TabPane tabId="3">
                                    <p className="mb-0 pb-0"> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                </TabPane>
                                <TabPane tabId="4">
                                    <p className="mb-0 pb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                </TabPane>
                            </TabContent>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProductTab;