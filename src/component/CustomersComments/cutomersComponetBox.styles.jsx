import styled from 'styled-components';

export const CommentsBox = styled.div`
    background-color: #fff;
    box-shadow: 0 1rem 3rem rgba(0,0,0,.4);
    padding: 3rem;
    margin-bottom: 3.5rem;
    position: relative;
    clip-path: polygon(50% 0%, 100% 0, 100% 38%, 100% 68%, 100% 90%, 33% 91%, 19% 100%, 23% 90%, 0 90%, 0 0);
    // overflow: hidden;

    @media only screen and (max-width:56.25em){
        margin-bottom: 3rem;
        padding: 2rem;
    }
`;

export const CommentsBoxText = styled.p`
    margin-bottom: 2rem;
    z-index: 10;
    position: relative;
    font-family:Nastaliq;
    line-height:2rem;
`;

export const CommentsBoxUser = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
`;

export const CommentsBoxUserContent = styled.div`
    display: flex;
    align-items: center;
`;

export const CommentsBoxImg = styled.img`
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    margin-right: 1.5rem;
`;

export const CommentsBoxdisc = styled.div`
    margin-right: auto;
`;

export const CommentsBoxdiscName = styled.p`
    font-size: 1.1rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: .4rem;
`;

export const CommentsBoxdiscdate = styled.p`
    font-size: 1rem;
    color:#999;
`;

export const CommentsBoxdiscRate = styled.div`
    font-size: 1rem;
    color:#eee;
    color:red;
`;