import React, {useCallback, useEffect} from "react";
import {Grid,Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import language from "../../others/language";
import {tvShowDummyData} from "../dummydata";
import {Item} from "../../components";

const useStyles = makeStyles(theme=>({
    root:{
        paddingTop:40,
    },
    divider:{
        width:300,
        height:1,
        margin:'20px 0',
        backgroundColor:'white',
    }
}))


export default props=>{
    const classes = useStyles();
    const slug = props.match.params.slug;

    // const loadData = useCallback(async ()=>{
    //
    //
    //
    // },[]);
    //
    // useEffect(()=>{
    //     loadData()
    // },[loadData])

    return(
        <Grid container className={classes.root} direction={"column"} justify={"center"} alignItems={"center"}>
            <Grid item>
                <Typography variant={"h2"} style={{fontSize:30,color:'red'}}>Production Company Name</Typography>
            </Grid>

            <Grid item>
                <div className={classes.divider}></div>
            </Grid>






            <Grid item container justify={"center"}>
                {
                    tvShowDummyData.map(item=>(
                        <Grid item key={item._id}>
                            <Item {...item}/>
                        </Grid>
                    ))
                }
            </Grid>


        </Grid>
    )
}
