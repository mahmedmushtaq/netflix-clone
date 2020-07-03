import {makeStyles} from "@material-ui/styles";
import registerBg from "../../assets/images/register_bg.jpg";

const designStyle = makeStyles(theme=>({
    divider:{
        width:260,
        height:1,
        backgroundColor:'white',
        margin:"20px 0"
    },
    root:{

        width:'100%',
        height:'100vh',
        background:`url(${registerBg})`,
        backgroundSize:'cover',

        backgroundPosition:'center center'
    },
    registerContainer:{
        background:'linear-gradient(to right,black,rgba(0,0,0,.6))',
        padding:"20px 30px",
        margin:'30px 0',
    },
    input:{
        padding:"10px 20px",
        outline:'none',
        width:400,
        backgroundColor:'transparent',
        border:'none',
        margin:'20px 0',
        borderBottom:'1px solid white',
        fontFamily:theme.typography.common.fontFamily,
        fontSize:20,
        '&:focus':{
            outline:'none',
            color:'white',
            borderBottom:'1px solid '+theme.palette.primary.main,
        },
        [theme.breakpoints.down("sm")]:{
            width:250,
        }
    },
    gridItem:{
        margin:"10px 0",
    }
}));

export default designStyle;
