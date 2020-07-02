import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import {Typography} from "@material-ui/core";
import {Header, Item} from "../../components";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {useMediaQuery} from "@material-ui/core";
import language from "../../others/language";
import {Link} from "react-router-dom";
import {tvShowDummyData} from "../dummydata";



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        margin:'20px 10px',
        justifyContent: 'space-around',
        overflow: 'hidden',

        position:'relative'


    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        position:'relative',


    },

    overlay:{
        position:'absolute',
        width:'100%',
        height:20,
        bottom:0,
        backgroundColor:'black',


    },
    next:{
        position:'absolute',
        top:'50%',
        bottom:'50%',
        right:0,
        cursor:'pointer',
    },
    back:{
        position:'absolute',
        top:'50%',
        bottom:'50%',
        left:0,
        cursor:'pointer',
    },
    divider:{
        width:180,
        height:1,
        marginTop:10,
        marginBottom:30,
        backgroundColor:'white',
    }
}));


const Home = props=> {

    const classes = useStyles();
    const ref = React.useRef();
    const [scrollLimit,setScrollLimit] = React.useState(0);
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("sm"));



    const rightClick = (id)=>{
        const parent = document.getElementById(id);
        parent.scrollTo(parent.scrollLeft+600,0)
    }

    const leftClick = (id)=>{
        const parent = document.getElementById(id);
        parent.scrollTo(parent.scrollLeft-600,0)
    }

    return (
        <div>
            <Header/>

            <div style={{marginTop:80,}}></div>

             <div style={{margin:'20px'}}>
                 <Typography component={Link} to={"/tv-shows"} variant={"subtitle1"}>{language.tv_shows}</Typography>
                 <div className={classes.divider}></div>
             </div>



            <div className={classes.root}>
                <GridList ref={ref}  id={"tvShowDiv"}  className={classes.gridList} cols={2.5}>
                    {tvShowDummyData.map((item,i) => (

                        <Item   key={item.id} {...item} to={"/series/"+item.slug}/>


                    ))}
                </GridList>
                <div className={classes.overlay}></div>
                <div className={classes.next}><NavigateNextIcon onClick={()=>rightClick("tvShowDiv")} style={{fontSize: sm ? 20: 70}}/></div>
                <div className={classes.back}><ArrowBackIosIcon onClick={()=>leftClick("tvShowDiv")} style={{fontSize: sm? 20: 50}}/></div>


            </div>

            <div style={{marginTop:80,}}></div>

            <div style={{margin:'20px'}}>
                <Typography component={Link} to={'/movies'} variant={"subtitle1"}>{language.movies}</Typography>
                <div className={classes.divider}></div>
            </div>


            <div className={classes.root}>
                <GridList id={'moviesDiv'} className={classes.gridList} cols={2.5}>
                    {tvShowDummyData.map((item) => (
                        <Item key={item.id} {...item} to={"/play/"+item.slug}/>
                    ))}
                </GridList>
                <div className={classes.overlay}></div>
                <div className={classes.next}><NavigateNextIcon onClick={()=>rightClick("moviesDiv")} style={{fontSize: sm ? 20: 70}}/></div>
                <div className={classes.back}><ArrowBackIosIcon onClick={()=>leftClick("moviesDiv")} style={{fontSize: sm? 20: 50}}/></div>

            </div>


            <div style={{marginTop:80,}}></div>

            <div style={{margin:'20px'}}>
                <Typography component={Link} to={"/coming-soon"} variant={"subtitle1"}>{language.comingSoon}</Typography>
                <div className={classes.divider}></div>
            </div>


            <div className={classes.root}>
                <GridList id={'comingSoonDiv'} className={classes.gridList} cols={2.5}>
                    {tvShowDummyData.map((item) => (
                        <Item key={item.id} {...item} to={"/play/"+item.slug}/>
                    ))}
                </GridList>
                <div className={classes.overlay}></div>
                <div className={classes.next}><NavigateNextIcon onClick={()=>rightClick("comingSoonDiv")} style={{fontSize: sm ? 20: 70}}/></div>
                <div className={classes.back}><ArrowBackIosIcon onClick={()=>leftClick("comingSoonDiv")} style={{fontSize: sm? 20: 50}}/></div>

            </div>




        </div>
    );
}

export default Home;
