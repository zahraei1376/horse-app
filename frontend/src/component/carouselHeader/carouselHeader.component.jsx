import React from 'react';
import Carousel from 'react-material-ui-carousel';
// import { Paper, Button } from '@material-ui/core';
////////////////
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
//////////////////////////////////
import {ButtonStyle , ImageCarousel ,PaperStyle ,TitleCarousel ,DiscCarousel,TitleConatiner ,CarouselContainer} from './carouselHeader.styles';
import headerPic1 from '../../assets/img/hors1.jpg';
import headerPic2 from '../../assets/img/horse2.jpg';
import headerPic3 from '../../assets/img/horse3.jpg';
function CarouselComponnet(props)
{
    var items = [
        {
            url:{headerPic1},
            name: "با چند تار مو از اسبتان، او را بهتر بشناسید. ",
            description: "شاید برایتان عجیب و باور نکردنی باشد که با چند تار مو از اسبتان می توانید اطلاعاتی در خصوص میزان هوش، کنجکاوی و آموزش پذیری او بدست آورید. این همه ی ماجرا نیست!"
        },
        {
            url:{headerPic2},
            name: "با چند تار مو از اسبتان، او را بهتر بشناسید. ",
            description: "شما با همان چند  تار مو همچنین می توانید از میزان ریسک ابتلای او به بیماری های ژنتیکی آگاه شوید و خواهیددانست اگر قرار است کره ای داشته باشد تا چه میزان احتمال انتقال بیماری به فرزندش وجود دارد."
        },
        {
            url:{headerPic3},
            name: "با چند تار مو از اسبتان، او را بهتر بشناسید. ",
            description: " همان چند تار مو کافیست تا خلوص نژادی اسبتان را بطور دقیق بدانید و تشخیص دهید کره اش پس از تولد چه رنگی خواهد داشت. ماموریت ما این است که برای کشف دنیای اسبتان در کنارتان باشیم و کمک کنیم تا زندگی مطلوبتری برای اسبتان رقم بزنید و یا اگر پرورش دهنده اسب هستید، اسب های رویاییتان را پرورش دهید."

        }
    ]

    return (
        <CarouselContainer NextIcon={<NavigateNextIcon/>}
        PrevIcon={<NavigateBeforeIcon/>}
        animation="fade"
        timeout={1500}
        interval={8000}
        style={{ zIndex: -1251 }}>
            
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </CarouselContainer>
    )
}

function Item(props)
{
    return (
        <PaperStyle>
            <ImageCarousel src={headerPic2}></ImageCarousel>
            <TitleConatiner>
                <TitleCarousel>{props.item.name}</TitleCarousel>
                <DiscCarousel>{props.item.description}</DiscCarousel>

                <ButtonStyle>
                    ورود
                </ButtonStyle>
            </TitleConatiner>
        </PaperStyle>
    )
}

export default CarouselComponnet;
