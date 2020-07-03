import React, {Component, useCallback, useEffect} from 'react'
import {moviesData,tvShowDummyData,comingSoonData} from "../dummydata";
import {makeStyles} from "@material-ui/styles";
import ReactPlayer from 'react-player'
import {Grid,Typography} from "@material-ui/core";
import {Item} from "../../components";
import language from "../../others/language";


const useStyles = makeStyles(theme=>({
    player:{
        width:'70vw',
        height:'70vh',
    }
}))

const  PlayerPage = props=> {
    const [videoData,setVideoData] = React.useState('');
    const classes = useStyles();
    const [relatedData,setRelatedData] = React.useState('');
    const [playerReady,setReady] = React.useState(false);
    const slug = props.match.params.slug;
    const loadData = useCallback(async()=>{
       //  this is the search in the dummy data if you apply backend then please use search in the database
       const data =  moviesData.find(item=>item.slug === slug);




       if(data) {
           setVideoData(data);
           setRelatedData(moviesData)
       }
      else{
           const cmData = comingSoonData.find(item=>item.slug ===slug);
           if(cmData) {
               setVideoData(cmData);
               setRelatedData(comingSoonData)
           }
           else {
               const tvData = tvShowDummyData.find(item=>item.slug ===slug);
               setVideoData(tvData);
               setRelatedData(tvShowDummyData)
           }

       }





    },[]);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    useEffect(()=>{
        loadData();
    },[loadData])

        return (
           <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
              <Grid item>
                  <ReactPlayer width={window.innerWidth - 30} onReady={()=>setReady(true)} height={600} url={videoData ? videoData.videoSrc : undefined}
                               controls={true}

                  />
              </Grid>

               {
                   playerReady ? (<React.Fragment>
                       <Grid item style={{margin:'30px 0'}}>
                           <Typography variant={"subtitle1"}>{language.related_videos}</Typography>
                       </Grid>

                       <Grid item container>
                           <Grid item container justify={"center"}>
                               {
                                   relatedData.map(item=>(
                                       <Grid item key={item._id}>
                                           <Item  to={"/play/"+item.slug} {...item}/>
                                       </Grid>
                                   ))
                               }
                           </Grid>
                       </Grid>

                   </React.Fragment>):''
               }


           </Grid>
        )

}

export default PlayerPage;


