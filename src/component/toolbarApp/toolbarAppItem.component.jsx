import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
////////////
// import {LogoImg , ToolbarLinkLogo,ToolbarLinkLi,ToolbarLinka,ToolbarSubUL,ToolbarSubLi,ToolbarSuba} from './toolbarAppItem.styles';
// import Logo from '../../assets/img/horseLogo.png';
import MenuMobile from './menuMobile/menuMobile.component';
const useStyles = makeStyles({
  list: {
    width: 250,
    // direction:'rtl',
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer({items ,setShowMenu}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowMenu(false);
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <MenuMobile items={items} setShowMenu={setShowMenu}/>
        
      {/* <ToolbarLinkLogo to="/" ><LogoImg src={Logo} /></ToolbarLinkLogo>
      {items.map((item , index) =>(
        <div  key={index}>
        <ToolbarLinkLi>{item.icon}<ToolbarLinka href="#">{item.item}</ToolbarLinka>
        {item.subset.length > 0 ? <ToolbarSubUL>
          { item.subset.map((subItem , index) =>{
             return <ToolbarSubLi key={index}><ToolbarSuba href="#">{subItem.subitem}</ToolbarSuba></ToolbarSubLi>
          }) }
        </ToolbarSubUL> : ''}</ToolbarLinkLi>
        
        
        </div>
      ))} */}
        {/* {items.map((MyItem, index) => (
          <>
          <ListItem button key={index}>
            <ListItemIcon>{MyItem.icon}</ListItemIcon>
            <ListItemText primary={MyItem.item} />

        
          </ListItem>
          <Divider />
          </>
        ))} */}
      </List>
      
      
    </div>
  );

  return (
    <div>
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  );
}
