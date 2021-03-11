import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
/////////////////////
import Logo from '../../assets/img/horseLogo.png';
///////////////////////
import styled from 'styled-components';
import ToolbarAppItems from './toolbarAppItem.component';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#843910',
    position:'relative',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft:'auto',
  },
  title: {
    flexGrow: 1,
  },
}));


const ImgField = styled.img`
  width: 4rem ;
  height: 4rem;
  margin-right: auto

`

export default function AppBarComponnet({items}) {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#843910',}}>
        <Toolbar>
          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {!showMenu ? <MenuIcon  style={{fontSize:'3rem'}} onClick ={() => setShowMenu(!showMenu)} /> : <CloseIcon  style={{fontSize:'3rem'}} onClick ={() => setShowMenu(!showMenu)} />}
          </IconButton>
         
          <Button color="inherit"><ImgField src={Logo} /></Button>
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          
        </Toolbar>
        {showMenu ? <ToolbarAppItems items={items}/>: ''}
      </AppBar>
    </div>
  );
}