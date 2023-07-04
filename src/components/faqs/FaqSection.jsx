import React from 'react';
import FaqPage from './FaqPage';
import dataFaqs from '../../assets/data/data-faq';





function FaqSection(props) {

    
    return (
        <div className='wrapper page-help'>

            <FaqPage data={dataFaqs} />
            
        </div>
    );
}

export default FaqSection;