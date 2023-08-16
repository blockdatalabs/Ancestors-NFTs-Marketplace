import React , {useState} from 'react';

import { Accordion } from 'react-bootstrap-accordion';
import { Tabs, TabPanel } from 'react-tabs';


function FaqPage(props) {
    const {data} = props;

    const [dataTab] = useState([
        {
            id: 1,
            title: 'Cryptocurrency',
        },
        {
            id: 2,
            title: 'NFT Token',
        },
        {
            id: 3,
            title: 'Collection',
        },
        {
            id: 4,
            title: 'Crypto Trading',
        },

    ]);
    return (
        <section className="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>FAQs</span></h6>               
                            </div>

                            <div className="faq__main flat-tabs">

                            <Tabs>

                                {
                                        dataTab.map(idx => (
                                            <TabPanel key={idx.id} className='content-tab'>
                                                <div className="content-inner">
                                                    <div className="flat-accordion row">
                                                        <div className="col-md-12 col-sm-12">
                                                        {
                                                            data.slice(0,4).map(idx => (
                                                                <Accordion show={idx.show} key={idx.id} title={idx.title} className='flat-toggle h6'>
                                                                    <p className="toggle-content">{idx.text} </p>
                                                                </Accordion>
                                                            ))
                                                        }

                                                        </div>

                                                        <div className="col-md-6 col-sm-12">
                                                        {
                                                            data.slice(4,8).map(idx => (
                                                                <Accordion show={idx.show} key={idx.id} title={idx.title} className='flat-toggle h6'>
                                                                    <p className="toggle-content">{idx.text} </p>
                                                                </Accordion>
                                                            ))
                                                        }
                                                        </div>
                                                        
                        
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        ))
                                    }


                                
                            </Tabs> 
                            <br/>
                            <br/>
                            <br/>
                        </div>

                            
                        </div>

                    </div>
                </div>
            </section>
    );
}

export default FaqPage;