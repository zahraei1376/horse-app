import React ,{useEffect} from 'react';
/////////////////////////////
import {LogoImg , ToolbarContainer,ToolbarLink ,ToolbarLinkLogo,
  ToolbarLinkLi,ToolbarLinka,ToolbarSubUL,ToolbarSubLi,ToolbarSuba} from './toolbarDesktop.styles';
import Logo from '../../assets/img/horseLogo.png';

const ToolbarDeskTop = ({items}) =>{
  useEffect(()=>{
    console.log('items' , items)
  })
  return(
    <ToolbarContainer>
      {items.map((item , index) =>(
        <div  key={index}>
        <ToolbarLinkLi><ToolbarLinka href="#">{item.item}</ToolbarLinka>
        {item.subset.length > 0 ? <ToolbarSubUL>
          { item.subset.map((subItem , index) =>{
             return <ToolbarSubLi key={index}><ToolbarSuba href="#">{subItem.subitem}</ToolbarSuba></ToolbarSubLi>
          }) }
        </ToolbarSubUL> : ''}</ToolbarLinkLi>
        
        
        </div>
      ))}
      {/* //////////////////////////////// */}
      {/* {items.map((item , index) =>(
        <div>
        <ToolbarLink to="/" key={index}>{item.item}</ToolbarLink>
        </div>
      ))} */}
      <ToolbarLinkLogo to="/" ><LogoImg src={Logo} /></ToolbarLinkLogo>
    </ToolbarContainer>
  )
};

export default ToolbarDeskTop;
