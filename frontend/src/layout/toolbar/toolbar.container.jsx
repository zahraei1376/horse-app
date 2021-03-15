import { React , useState ,useEffect} from "react";
// import './toolbar.styles';
import AppBarComponnet from '../../component/toolbarApp/toolbarApp.component';
import ToolbarDeskTop from "../../component/toolbarDeskTop/toolbarDesktop.component";

const items = [
    {item:'درباره ما',subset : [{subitem:'درباره '},{subitem:'ما'}]},
    {item:'تماس با ما',subset : []},
    {item:'پرسش و پاسخ',subset : []},
    {item:'خدمات',subset : []},
    {item:'ورود',subset : []},
    {item:'سبد خرید',subset : []},
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
