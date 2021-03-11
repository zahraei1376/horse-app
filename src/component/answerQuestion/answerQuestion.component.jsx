import React from 'react';
import {AnswerConatiner , AnswerBox ,AnswerTitle,
    AnswerImageContainer,
    AnswerImage ,AnswerName,AnswerTextContainer,AnswerTextSpan,AnswerTextQuestion,AnswerTextAnswer,AnswerTextAnswerSpan ,AnswerTextBotton} from './answerQuestion.styles';

import question  from '../../assets/img/question.png';   

const AnswerQuestionComponent = () =>{
    return (
        <AnswerConatiner>
            <AnswerTitle>سوال و جواب</AnswerTitle>
            <AnswerBox>
                <AnswerImageContainer>
                    <AnswerImage src={question} />
                </AnswerImageContainer>
                <AnswerTextContainer>
                    <AnswerName>سوال از دوست عزیز <AnswerTextSpan>فرانک</AnswerTextSpan></AnswerName>
                    <AnswerTextQuestion>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </AnswerTextQuestion>
                    <AnswerTextAnswer>
                        <AnswerTextAnswerSpan>جواب : </AnswerTextAnswerSpan>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </AnswerTextAnswer>
                    <AnswerTextBotton><span>&rarr;</span> نمایش همه</AnswerTextBotton>
                </AnswerTextContainer>
            </AnswerBox>
            <AnswerBox>
                <AnswerImageContainer>
                    <AnswerImage src={question} />
                </AnswerImageContainer>
                <AnswerTextContainer>
                    <AnswerName>سوال از دوست عزیز <AnswerTextSpan>فرانک</AnswerTextSpan></AnswerName>
                    <AnswerTextQuestion>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </AnswerTextQuestion>
                    <AnswerTextAnswer>
                        <AnswerTextAnswerSpan>جواب : </AnswerTextAnswerSpan>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </AnswerTextAnswer>
                    <AnswerTextBotton><span>&rarr;</span> نمایش همه</AnswerTextBotton>
                </AnswerTextContainer>
            </AnswerBox>
            <AnswerBox>
                <AnswerImageContainer>
                    <AnswerImage src={question} />
                </AnswerImageContainer>
                <AnswerTextContainer>
                    <AnswerName>سوال از دوست عزیز <AnswerTextSpan>فرانک</AnswerTextSpan></AnswerName>
                    <AnswerTextQuestion>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </AnswerTextQuestion>
                    <AnswerTextAnswer>
                        <AnswerTextAnswerSpan>جواب : </AnswerTextAnswerSpan>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </AnswerTextAnswer>
                    <AnswerTextBotton><span>&rarr;</span> نمایش همه</AnswerTextBotton>
                </AnswerTextContainer>
            </AnswerBox>
        </AnswerConatiner>
    )
};


export default AnswerQuestionComponent;