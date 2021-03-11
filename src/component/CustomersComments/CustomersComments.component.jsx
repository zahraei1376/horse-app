import React from 'react';
import {ComentsContainer} from './CustomersComments.styles';
import CustomersCommentsBox from './cutomersComponetBox.component';

const CustomersComments = () =>{
    return(
        <ComentsContainer>
            <CustomersCommentsBox/>
            <CustomersCommentsBox/>
            <CustomersCommentsBox/>
        </ComentsContainer>
    )
};

export default CustomersComments;