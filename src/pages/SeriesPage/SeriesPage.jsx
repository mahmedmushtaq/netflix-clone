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
    const [seriesName,setSeriesName] = React.useState('');

    const loadData = useCallback(async ()=>{
        // load data from the backed
        },[]);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    useEffect(()=>{
        loadData()
    },[loadData])

    return(
        <Grid container className={classes.root} direction={"column"} justify={"center"} alignItems={"center"}>
            <Grid item>
                <Typography variant={"h2"} style={{fontSize:30,color:'red'}}>Series Name</Typography>
            </Grid>

            <Grid item>
                <div className={classes.divider}></div>
            </Grid>


            <Grid item>
                <Typography variant={"subtitle1"} style={{fontSize:20,}}>Production By</Typography>
            </Grid>

            <Grid item>
                <Typography variant={"h6"} style={{fontSize:13,}}>Name</Typography>
            </Grid>



            <Grid item container justify={"center"}>
                {
                    tvShowDummyData.map(item=>(
                        <Grid item key={item._id}>
                            <Item to={'/play/'+item.slug} {...item}/>
                        </Grid>
                    ))
                }
            </Grid>


        </Grid>
    )
}
