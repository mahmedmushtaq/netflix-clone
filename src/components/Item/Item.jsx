import React from "react";
import {Grid,Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles =makeStyles(theme=>({
    img:{

        height:'240px'
    },
    root:{
        margin:"20px 5px",
        backgroundColor:'black',

    },
    title:{
        fontSize:18,

    }
}))

const dummyData = [
    {imgSrc:'https://www.newscase.com/wp-content/uploads/2020/02/Game-of-Thrones-Season-8-1280x720.jpg', id:1,title:'Game of thrones season 8'}
]

export default props=>{
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Grid item>
                <img className={classes.img} src={props.imgSrc} alt=""/>
                <Typography variant={"h6"} className={classes.title}>{props.title.length > 30 ? props.title.substring(0,30)+"..." : props.title}</Typography>
            </Grid>

        </Grid>

    )
}
