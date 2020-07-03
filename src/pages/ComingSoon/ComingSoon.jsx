import React from "react";
import {Grid, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import language from "../../others/language";
import {comingSoonData} from "../dummydata";
import {Item} from "../../components";

const useStyles = makeStyles(theme=>({
    root:{
        paddingTop:40,
    },
    divider:{
        width:430,
        height:1,
        margin:'20px 0',
        backgroundColor:'white',
        [theme.breakpoints.down("sm")]:{
            width:'230px',

        }
    }
}))


export default props=>{
    const classes = useStyles();
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const randomNo = Math.random();
    return(
        <Grid container className={classes.root} direction={"column"} justify={"center"} alignItems={"center"}>
            <Grid item>
                <Typography variant={!sm ? "h2":"h6"} style={{color:'red'}}>{language.comingSoon}</Typography>
            </Grid>
            <Grid item>
                <div className={classes.divider}></div>
            </Grid>

            <Grid item container justify={"center"}>
                {
                    comingSoonData.map(item=>(
                            (
                                <Grid item key={item.slug+randomNo+item._id}>

                                    <Item  to={item.type === 'movie'?"/play/"+item.slug:'/series/'+item.slug} imgSrc={item.imgSrc} title={item.title}/>
                                </Grid>
                            )
                        )
                    )
                }
            </Grid>



        </Grid>
    )
}
