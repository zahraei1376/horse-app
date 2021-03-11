import styled from 'styled-components';
import { Paper, Button } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';


export const ButtonStyle = styled(Button)`
    width:10rem;
    height:3rem;
    border-radius:5rem;
    background-color:red;
    margin:0 auto;
`;

export const PaperStyle = styled(Paper)`
    width:100%;
    height:85vh;
    object-fit:cover;
`;

export const CarouselContainer = styled(Carousel)`
    z-index:-1000;
`;

export const ImageCarousel =styled.img`
    width:100%;
    height:85vh;
    object-fit:cover;
    position:relative;
`;

export const TitleConatiner = styled.div`
    position:absolute;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%);
`;

export const TitleCarousel =styled.h1`
   text-align:center;
   font-size:2.5rem;
   font-family:Nazanin;
   margin-top:2rem;
`;

export const DiscCarousel =styled.p`
   text-align:center;
   font-size:1.5rem;
   font-family:tabssom;
   margin-top:3rem;
   padding:0 2rem;
   line-height:3rem;
`;