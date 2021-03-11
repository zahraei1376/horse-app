import React from 'react';
import {LastWeblogComponent ,LastWeblogBox,LastWeblogBoxImg ,LastWeblogBoxTitle ,LastWeblogBoxDisc} from './lastWeblog.styles';
import weblogImage from '../../assets/img/horseLogo.png';

const LastWeblog = () =>{
    return(
        <LastWeblogComponent>
            <LastWeblogBox href="#">
                <LastWeblogBoxImg src={weblogImage}/>
                <LastWeblogBoxTitle>موضوع وبلاگ</LastWeblogBoxTitle>
                <LastWeblogBoxDisc>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</LastWeblogBoxDisc>
            </LastWeblogBox>
            <LastWeblogBox href="#">
                <LastWeblogBoxImg src={weblogImage}/>
                <LastWeblogBoxTitle>موضوع وبلاگ</LastWeblogBoxTitle>
                <LastWeblogBoxDisc>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</LastWeblogBoxDisc>
            </LastWeblogBox>
            <LastWeblogBox href="#">
                <LastWeblogBoxImg src={weblogImage}/>
                <LastWeblogBoxTitle>موضوع وبلاگ</LastWeblogBoxTitle>
                <LastWeblogBoxDisc>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</LastWeblogBoxDisc>
            </LastWeblogBox>
        </LastWeblogComponent>
    )
};

export default LastWeblog;