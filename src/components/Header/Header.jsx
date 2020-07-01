import React from "react";
import {Grid,Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import language from "../../others/language";
import SearchIcon from '@material-ui/icons/Search';
import bg from "../../assets/images/bg.jpg";

const useStyles = makeStyles(theme=>({


    root:{
      minHeight:'85vh',
      width:'100%',

     backgroundPosition:'center center',
     background:`url(${bg})`,

    },


    searchInput:{
        width:"600px",
        padding:"20px 30px",
        fontSize:20,
        '&:focus':{
            outline:'none'
        },
        [theme.breakpoints.down("md")]:{
            width:400,
        },
        [theme.breakpoints.down("sm")]:{
            width:200,
        }



    }



}));

export default props=>{
    const videoSource = 'https://ak.picdn.net/shutterstock/videos/1047963103/preview/stock-footage-focused-business-man-entrepreneur-typing-on-laptop-doing-research-young-male-professional-using.webm';
    const classes = useStyles();

    return(
        <Grid container direction={"column"}  className={classes.root} justify={"center"} alignItems={"center"}>

            <Grid item>
                <Typography  variant={"h2"} style={{fontWeight:800,}}  color={"primary"}>Netflix</Typography>
            </Grid>

            <Grid item>
                <Typography  variant={"h6"} style={{fontSize:25,}} >{language.search_your_favourite_tv_shows}</Typography>
            </Grid>

            <Grid item >

                <Grid container justify={"center"} alignItems={"center"}>
                    <Grid item>
                        <SearchIcon style={{fontSize:25,color:'black',backgroundColor:'white',padding:20,marginTop:4,}} />
                    </Grid>
                    <Grid item >
                        <input style={{border:'1px solid white'}} className={classes.searchInput}   placeholder={language.search}/>
                    </Grid>
                </Grid>

          </Grid>




        </Grid>
    )
}
