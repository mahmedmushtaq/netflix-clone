import React from "react";
import {Grid,GridList, Typography, Divider, useMediaQuery} from "@material-ui/core";
import {Header} from "../../components";
import {makeStyles,useTheme} from "@material-ui/styles";
import language from "../../others/language";
import {Item} from "../../components";


const useStyles = makeStyles(theme=>({
     divider:{
         backgroundColor:'white',height:1,width:180,marginTop:10,marginBottom:30,
     }
}));


const tvShowDummyData = [
    {id:1,imgSrc:"https://www.newscase.com/wp-content/uploads/2020/02/Game-of-Thrones-Season-8-1280x720.jpg",title:"Game of thrones season 8"},
    {id:2,imgSrc:"https://iadsb.tmgrup.com.tr/ac95d4/1200/627/0/144/1000/666?u=https://idsb.tmgrup.com.tr/2020/01/31/1580466098868.jpg",title:"Dirilis Ertugrul Season 5"},
    {id:3,imgSrc:"https://www.gstatic.com/tv/thumb/tvbanners/18298448/p18298448_b_v8_aa.jpg",title:"Dirty John"},
    {id:4,imgSrc:"https://i.ytimg.com/sh/pVbNUD8B-lMLaljDXqlMpA/market.jpg",title:"Killing Eve Season 3"},
    {id:5,imgSrc:"https://www.turkishdrama.com/wp-content/uploads/2019/03/the-circle-halka-tv-series-poster-back.jpg",title:"Halka season 1"},
    {id:6,imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDu5gYmIl6NnWtRjZl6p8qI7UCGa2nIaI_og&usqp=CAU",title:"Halka season 3"},
    {id:7,imgSrc:"https://media.millichronicle.com/2020/05/09090602/dirilis_ertugrulun_kadrosuna_3_yeni_isim_1539495081_4167.jpg",title:"Diriliş: Ertuğrul season 2"},

]

export default props=>{
    const classes  = useStyles();
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container  direction={"column"} >
            <Grid item >
                <Header/>
            </Grid>

           <Grid item container direction={"column"} justify={sm ? "center": "undefined"} alignItems={sm ? "center" : undefined}  style={{width:'95%',margin:'60px auto'}}>
               <Grid item>
                   <Typography style={{fontWeight:100,}} variant={"subtitle1"}>{language.tv_shows}</Typography>
               </Grid>
               <Divider className={classes.divider}/>

               <Grid item container justify={sm ? "center": "undefined"} style={{flexWrap:'nowrap'}} alignItems={sm ? "center" : undefined}>

                   {
                           tvShowDummyData.map(data=>(
                               <Item imgSrc={data.imgSrc} title={data.title} key={data.id}/>
                           ))
                       }



               </Grid>

               <Grid item container>

               </Grid>
           </Grid>


        </Grid>
    )
}
