import styled from 'styled-components';

export const LastWeblogComponent = styled.div`
    display:flex;
    justifu-content:center;
    align-items:center;
    margin-top:5rem;
`;

export const LastWeblogBox = styled.a`
    display:flex;
    flex-direction:column;
    justifu-content:center;
    align-items:center;
    box-shadow:0 1rem 2rem rgba(0,0,0,.5);
    margin:0 3rem;
    text-decoration:none;
    color:#000;
    transition:all .3s;
    border-radius:3rem;

    &:hover{
        transform:translateY(-10px);
    }
`;

export const LastWeblogBoxImg = styled.img`
    width:90%;
    
`;

export const LastWeblogBoxTitle = styled.h1`
    font-size:2rem;
    font-family:Nastaliq;
    margin-top:2rem;
`;

export const LastWeblogBoxDisc = styled.p`
    font-size:1.5rem;
    font-family:Nastaliq;
    line-height:2rem;
    padding:2rem;
    
`;