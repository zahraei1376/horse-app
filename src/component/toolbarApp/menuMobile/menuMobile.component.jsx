import React from 'react';
import Divider from '@material-ui/core/Divider';
////////////
import {LogoImg , ToolbarLinkLogo,ToolbarLinkLi,ToolbarIcon,ToolbarLinka,ToolbarSubUL,
    ToolbarSubLi,ToolbarSuba,ToolbarLiInContainer} from './menuMobile.styles';
import Logo from '../../../assets/img/horseLogo.png';
////////////////
import { useHistory } from 'react-router-dom';

const MenuMobile = ({items ,setShowMenu}) =>{
    let history = useHistory();

    const handleHref = () =>{
        console.log('handleHref');
        setShowMenu(false);
        history.push('/')
    }
    return(
        <div>
            <ToolbarLinkLogo to="/" ><LogoImg src={Logo} /></ToolbarLinkLogo>
            {items.map((item , index) =>(
                <div  key={index}>
                <ToolbarLinkLi onClick={handleHref}><ToolbarLiInContainer><ToolbarIcon>{item.icon}</ToolbarIcon><ToolbarLinka 
                // href="#"
                >{item.item}</ToolbarLinka></ToolbarLiInContainer>
                {item.subset.length > 0 ? <ToolbarSubUL>
                { item.subset.map((subItem , index) =>{
                    return <ToolbarSubLi key={index} onClick={handleHref}><ToolbarLiInContainer>
                        <ToolbarIcon>{item.icon}</ToolbarIcon><ToolbarSuba 
                        // href="#"
                        >{subItem.subitem}</ToolbarSuba>
                        </ToolbarLiInContainer></ToolbarSubLi>
                }) }
                </ToolbarSubUL> : ''}
                {/* <Divider/> */}
                </ToolbarLinkLi>
                
                
                </div>
            ))}
        </div>
    )
};

export default MenuMobile;