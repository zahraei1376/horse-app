import styled from 'styled-components';

export const AnswerConatiner = styled.div`
    width:100%;
    margin:10rem 0;
`;

export const AnswerTitle = styled.h1`
    font-size:4rem;
    font-weight:400;
    font-family:Nastaliq;
    text-align:center;
    padding:3rem 0;
`;


export const AnswerBox = styled.div`
    display:flex;
    margin:2rem auto;
    align-items:center;
    border: 1px solid rgba(0, 0, 0, 0.12);
    width:90%;
    min-height:20rem;
`;

export const AnswerImageContainer = styled.div`
    width:20rem;
    height:100%;
`;

export const AnswerImage = styled.img`
    width:100%;
    height:100%;
`;

export const AnswerName = styled.p`
    font-size:2rem;
    font-weight:300;
    font-family:Bnazanin;
    margin:3rem 0;
`;

export const AnswerTextContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const AnswerTextBotton = styled.button`
    color: #843910;
    font-size: 1.2rem;
    border: none;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    transition: all .2s;
    margin-bottom:2rem;
    font-family:Nastaliq;

    &:hover{
        color:#333;
    }
`;

export const AnswerTextSpan = styled.span`
    font-size:2.5rem;
    font-weight:400;
    font-family:Bnazanin;
`;

export const AnswerTextQuestion = styled.pre`
    font-size:1.5rem;
    font-weight:300;
    font-family:Bnazanin;
    white-space: break-spaces;
    word-break: break-word;
    line-height:3rem;
    display:inline-block;
    padding:0 3rem 2rem 3rem;
    border-bottom:1px solid #eee;
`;

export const AnswerTextAnswer = styled.pre`
    font-size:1.6rem;
    font-weight:400;
    font-family:Bnazanin;
    white-space: break-spaces;
    word-break: break-word;
    line-height:3rem;
    display:inline-block;
    padding: 3rem 2rem;
`;

export const AnswerTextAnswerSpan = styled.span`
    font-size:1.7rem;
    font-weight:bold;
    font-family:Bnazanin;
`;


