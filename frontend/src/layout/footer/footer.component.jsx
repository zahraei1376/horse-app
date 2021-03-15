import React from 'react';
import {FooterContainer , 
    FooterInfo ,
    FooterImage ,
    FooterTitle ,
    FooterLinks,
    FooterItem,
    FooterLink ,
    FooterUl,
    FooterUlTitle,
    SocialMediaContainer,
    SocialMediadisc,
    SocialMediaLinks,
    SocialMediaLinksIcon,
} from './footer.styles';
import FooterImg from '../../assets/img/horse5.jpg';
//////////////////////////////////////////////////
// import { Icon } from '@material-ui/core';
// import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () =>{
    return (
        <FooterContainer>
            <FooterTitle>اسب های من</FooterTitle>
            <FooterInfo>
                <FooterImage src={FooterImg} />
                <FooterLinks>
                    <FooterUl>
                        <FooterUlTitle>صفحات ما</FooterUlTitle>
                        <FooterItem><FooterLink href="#">صفحه1</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه2</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه3</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه4</FooterLink></FooterItem>
                    </FooterUl>
                    <FooterUl>
                        <FooterUlTitle>نمونه گزارش ها</FooterUlTitle>
                        <FooterItem><FooterLink href="#">صفحه1</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه2</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه3</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه4</FooterLink></FooterItem>
                    </FooterUl>
                    <FooterUl>
                        {/* <FooterUlTitle>قوانین و مقررات</FooterUlTitle>
                        <FooterItem><FooterLink href="#">صفحه1</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه2</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه3</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه4</FooterLink></FooterItem> */}
                    </FooterUl>
                </FooterLinks>
                <SocialMediaContainer>
                    <SocialMediaLinks>
                        <SocialMediaLinksIcon aria-label="تلگرام" style={{color:'#fff'}}>
                            <SendIcon />
                        </SocialMediaLinksIcon>
                        <SocialMediaLinksIcon aria-label="اینستاگرام" style={{color:'#fff'}}>
                            <InstagramIcon />
                        </SocialMediaLinksIcon>
                        <SocialMediaLinksIcon aria-label="ایمیل" style={{color:'#fff'}}>
                            <MailOutlineIcon />
                        </SocialMediaLinksIcon>
                        <SocialMediaLinksIcon aria-label="فیس بوک" style={{color:'#fff'}}>
                            <FacebookIcon />
                        </SocialMediaLinksIcon>
                    </SocialMediaLinks>
                    <SocialMediadisc>طراحی و تولید زهسان-ایران سال 1399-1400</SocialMediadisc>
                </SocialMediaContainer>
            </FooterInfo>
            
        </FooterContainer>
    )
};

export default Footer;