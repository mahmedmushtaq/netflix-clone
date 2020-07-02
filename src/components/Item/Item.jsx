import React from "react";
import {Grid, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";
import clsx from "clsx";

const useStyles = props=> makeStyles(theme=>{

    return{
    img:{

        height:'240px',

        [theme.breakpoints.down('sm')]:{
            height:'120px',
            width:'120px',
        }
    },

    root:{
        margin:"20px 5px",
        backgroundColor:'black',

    },
    title:{
        fontSize:18,
        [theme.breakpoints.down('sm')]:{

            width:'120px',
        }

    },

}})



export default props=>{
    const classes = useStyles(props)();
    const theme = useTheme();
    const sm  = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        // if type === series then redirect toward series page other direct watch moview
        <Grid container component={Link} to={props.to} className={clsx(classes.root,"a-white")}>

            <Grid item className={classes.itemHolder}>
                <img src={props.imgSrc} className={classes.img}/>
                {
                    sm ?   <Typography variant={"h6"} className={classes.title}>
                            {props.title.length > 20 ? props.title.substring(0,20)+"..." : props.title}
                    </Typography>
                        :<Typography variant={"h6"} className={classes.title}>
                            {props.title.length > 30 ? props.title.substring(0,30)+"..." : props.title}
                        </Typography>

                }


            </Grid>

        </Grid>

    )
}
