import { React , useState ,useEffect} from "react";
// import './toolbar.styles';
import AppBarComponnet from '../../component/toolbarApp/toolbarApp.component';
import ToolbarDeskTop from "../../component/toolbarDeskTop/toolbarDesktop.component";
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
// import PersonIcon from '@material-ui/icons/Person';
// import PersonIcon from '@material-ui/icons/PeopleOutline';
// import PersonIcon from '@material-ui/icons/Person';
// import PersonIcon from '@material-ui/icons/Person';
// import PersonIcon from '@material-ui/icons/Person';
// import PersonIcon from '@material-ui/icons/Person';


const items = [
    {item:'درباره ما', icon:<PeopleAltOutlinedIcon/> ,subset : [{subitem:'درباره ', icon:<PeopleOutlineOutlinedIcon/>},{subitem:'ما', icon:<PeopleOutlineOutlinedIcon/>}]},
    {item:'تماس با ما', icon:<MailOutlineOutlinedIcon/>,subset : []},
    {item:'پرسش و پاسخ', icon:<ContactSupportOutlinedIcon/>,subset : []},
    {item:'خدمات', icon:<WorkOutlineOutlinedIcon/>,subset : []},
    {item:'ورود', icon:<PersonOutlineOutlinedIcon/>,subset : []},
    {item:'سبد خرید', icon:<LocalGroceryStoreOutlinedIcon/>,subset : []},
    // {item:'درباره ما',subset : []},
];
const ToolbarContainer = () =>{
    const [SelectToolbar,setSelectToolbar] = useState(false);
    
    useEffect(()=>{
        console.log('window.innerWidth',window.innerWidth);
        if(window.innerWidth < 600){
            setSelectToolbar(true)
        }
    },[])
    return(
        <>
            {SelectToolbar ? <AppBarComponnet items={items}/> : <ToolbarDeskTop items={items} />}
        </>
    )
};

export default ToolbarContainer;
