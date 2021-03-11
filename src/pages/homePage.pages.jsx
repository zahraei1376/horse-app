import React from 'react';
import ToolbarContainer from '../layout/toolbar/toolbar.container';
import CarouselComponnet from '../component/carouselHeader/carouselHeader.component';
import AnswerQuestionComponent from '../component/answerQuestion/answerQuestion.component';
import CustomersComments from '../component/CustomersComments/CustomersComments.component';
import LastWeblog from '../component/lastWeblog/lastWeblog.component';

const HomePage = () =>{
    return (
        <div>
            <ToolbarContainer/>
            <CarouselComponnet/>
            <AnswerQuestionComponent/>
            <CustomersComments/>
            <LastWeblog/>
        </div>
    )
};


export default HomePage;