import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const FooterContainer = styled.div`
    width:100%;
    min-height:60rem;
    background-color:#CEA176;
`;

export const FooterTitle = styled.h1`
    color:#843910;
    font-size:3rem;
    font-family:gol;
    text-align:center;
    padding:3rem;
`;

export const FooterInfo = styled.div`
    width:70%;
    height:40rem;
    background-color:#843910;
    margin:3rem auto;
    border-radius:3rem;
    position:relative;
    box-shadow: 0 5px 7px 0 rgba(0, 0, 0, .2);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const FooterLinks = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-bottom:1px solid #eee;
    padding:2rem 0 3rem 0;
    height:80%;
`;

export const FooterUl = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:20%;
    `;

export const FooterUlTitle = styled.h2`
    font-size:2rem;
    font-family:Abdoullah;
    text-align:center;
`;

export const FooterItem = styled.li`
    padding:1rem 2rem;
    font-size:1.5rem;
    transition:all 0.2s;
    margin:1rem;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    &:hover{
        transform: scale(1.1) rotate(-10deg);
        border:1px solid #eee;
    }
`;

export const FooterLink = styled.a`
    text-decoration:none;
    color:#fff;
`;

export const FooterImage = styled.img`
    width:30%;
    height:auto;
    position:absolute;
    top:25%;
    left:10%;
    transform:translate(-50%,-50%);
    border-radius:3rem;
    box-shadow: 5px 9px 17px 0 #000;
    @media only screen and (max-width: 768px) {
        top:15%;
        left:10%;
    }
`;

export const SocialMediaContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:3rem;
    height:10%;
`;

export const SocialMediaLinks = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const SocialMediaLinksIcon = styled(IconButton)`
    color:#fff;
    @media only screen and (max-width: 281px) {
       padding:5px !important;
    }
`;

export const SocialMediadisc = styled.p`
    width:50%;
    font-size:1rem;
    font-family:Bnazanin;
    color:#fff;
`;


