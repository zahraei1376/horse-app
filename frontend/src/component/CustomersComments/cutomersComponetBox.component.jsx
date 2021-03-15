import React from 'react';
import { CommentsBox ,CommentsBoxText ,CommentsBoxUser ,CommentsBoxImg,CommentsBoxdisc,
    CommentsBoxdiscName,CommentsBoxdiscdate,CommentsBoxdiscRate ,CommentsBoxUserContent} from './cutomersComponetBox.styles';
import user from '../../assets/img/user.png';

const CustomersCommentsBox =() =>(
    <CommentsBox>
        <CommentsBoxText>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
        </CommentsBoxText>
        <CommentsBoxUser>
            <CommentsBoxdiscRate>7.8</CommentsBoxdiscRate>
            <CommentsBoxUserContent>
                <CommentsBoxdisc>
                    <CommentsBoxdiscName >mary</CommentsBoxdiscName>
                    <CommentsBoxdiscdate>Feb 23rd,2020</CommentsBoxdiscdate>
                </CommentsBoxdisc>
                <CommentsBoxImg src={user} alt="کاربر" />
            </CommentsBoxUserContent>
            
        </CommentsBoxUser>
        
    </CommentsBox>
);

export default CustomersCommentsBox;
