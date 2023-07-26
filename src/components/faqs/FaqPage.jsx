import React , {useState} from 'react';

import { Accordion } from 'react-bootstrap-accordion';
import { Tabs, TabPanel } from 'react-tabs';
import evolution from '../../assets/images/tree/evolutions.png'


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
                            <img src={evolution} style={{width: "1000px", marginBottom: 100}} alt="ancestor evolutions"/>
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>FAQs</span></h6>               
                            </div>

                            <div className="faq__main flat-tabs">

                           
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