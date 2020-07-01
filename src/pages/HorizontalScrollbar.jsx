import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import ReactDOM from 'react-dom';

import {Item} from "../components";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const tvShowDummyData = [
    {id:1,imgSrc:"https://www.newscase.com/wp-content/uploads/2020/02/Game-of-Thrones-Season-8-1280x720.jpg",title:"Game of thrones season 8 osldfjlsdkjflkdjsf"},
    {id:2,imgSrc:"https://iadsb.tmgrup.com.tr/ac95d4/1200/627/0/144/1000/666?u=https://idsb.tmgrup.com.tr/2020/01/31/1580466098868.jpg",title:"Dirilis Ertugrul Season 5"},
    {id:3,imgSrc:"https://www.gstatic.com/tv/thumb/tvbanners/18298448/p18298448_b_v8_aa.jpg",title:"Dirty John"},
    {id:4,imgSrc:"https://i.ytimg.com/sh/pVbNUD8B-lMLaljDXqlMpA/market.jpg",title:"Killing Eve Season 3"},
    {id:5,imgSrc:"https://www.turkishdrama.com/wp-content/uploads/2019/03/the-circle-halka-tv-series-poster-back.jpg",title:"Halka season 1"},
    {id:6,imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDu5gYmIl6NnWtRjZl6p8qI7UCGa2nIaI_og&usqp=CAU",title:"Halka season 3"},
    {id:7,imgSrc:"https://media.millichronicle.com/2020/05/09090602/dirilis_ertugrulun_kadrosuna_3_yeni_isim_1539495081_4167.jpg",title:"Diriliş: Ertuğrul season 2"},

]


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
        backgroundColor:'green',


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
    }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const SingleLineGridList = props=> {

    const classes = useStyles();
    const ref = React.useRef();
    const [scrollLimit,setScrollLimit] = React.useState(0);


    const rightClick = (e)=>{


        const parent = document.getElementById("parent");
        const totalWidth = parent.getBoundingClientRect().width;

         parent.scrollTo(parent.scrollLeft+300,0)


        // if(check >= 0){
        //     parent.scrollTo(scrollLimit+200,0);
        //     setScrollLimit(scrollLimit+200);
        //
        // }else{
        //     const remaining = 200 + check; // check is already negative
        //     parent.scrollTo(scrollLimit-remaining,0);
        //     setScrollLimit(scrollLimit-remaining);
        // }

        // console.log(ref.current.offsetLeft+100);
        // window.scrollTo(ref.current.offsetLeft+100,0);




    }

    const leftClick = ()=>{
        const parent = document.getElementById("parent");
        const totalWidth = parent.getBoundingClientRect().width;


        parent.scrollTo(parent.scrollLeft-300,0)

    }

    return (
        <div>
            <div className={classes.root}>
                <GridList ref={ref}  id={"parent"}  className={classes.gridList} cols={2.5}>
                    {tvShowDummyData.map((item,i) => (

                            <Item   key={item.id} imgSrc={item.imgSrc} title={item.title}/>


                    ))}
                </GridList>
                {/*<div className={classes.overlay}></div>*/}
                <div className={classes.next}><NavigateNextIcon onClick={rightClick} style={{fontSize: 30}}/></div>
                <div className={classes.back}><ArrowBackIosIcon onClick={leftClick} style={{fontSize: 30}}/></div>
            </div>

            <br/><br/><br/>
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {tvShowDummyData.map((item) => (
                        <Item key={item.id} imgSrc={item.imgSrc} title={item.title}/>
                    ))}
                </GridList>
                <div className={classes.overlay}></div>
            </div>
        </div>
    );
}

export default SingleLineGridList;

