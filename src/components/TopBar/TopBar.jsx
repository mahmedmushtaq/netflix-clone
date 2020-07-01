import React from "react";
import {AppBar,Toolbar,
    Typography,Grid,Button,Hidden,SwipeableDrawer,List,ListItem,ListItemText,useMediaQuery,ListItemIcon} from "@material-ui/core";
import {makeStyles,useTheme} from "@material-ui/styles";
import language from "../../others/language";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import MovieIcon from '@material-ui/icons/Movie';
import TimerIcon from '@material-ui/icons/Timer';
import LanguageIcon from '@material-ui/icons/Language';





const useStyles = makeStyles(theme=>({
    title:{
        flexGrow:1,
    },
    appBar:{
        [theme.breakpoints.down("sm")]:{
           padding:10,
        }
    },
    root:{
        position:'fixed',
        width:'100%',
        top:0,
        [theme.breakpoints.down("sm")]:{

        }

    },
    topbarItem:{
        margin:"0 10px",
        fontSize:16,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}))

const appBarItems = [
    {title:language.tv_shows, id: "1",icon:<LiveTvIcon style={{color:'white'}}/>},
    {title:language.movies, id: "2",icon:<MovieIcon style={{color:'white'}}/>},
    {title:language.comingSoon, id: "3",icon:<TimerIcon style={{color:'white'}}/>},
    {title:language.languageSupport, id: "4",icon:<LanguageIcon style={{color:'white'}}/>},
]

export default props=>{
    const classes = useStyles();

    const [drawer, setDrawer] = React.useState(false);

    const toggleDrawer = ()=>{
        setDrawer(!drawer);
    }


    return(
        <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" style={{ backgroundColor:'black'}}>
            <Toolbar>


                <Typography variant="h5" color={"primary"} style={{fontWeight:800,}} className={classes.title}>
                      NETFLIX
                </Typography>
                <Hidden smDown>

                {
                    appBarItems.map(item=>(
                         <Typography key={item.id} variant={"h6"} className={classes.topbarItem}>{item.title}</Typography>
                    ))
                }
                </Hidden>



                <Button color="inherit" variant={"contained"} color={"primary"} className={classes.topbarItem}>Login</Button>



                <Hidden mdUp>

                    <React.Fragment key={"top"} >
                        <FormatListBulletedIcon onClick={toggleDrawer}/>
                        <SwipeableDrawer
                            anchor={"top"}
                            open={drawer}
                            onClose={toggleDrawer}


                        >

                            <Grid container direction={"column"} >
                            <List  style={{backgroundColor:'black'}}>
                                {appBarItems.map((item,i) => (


                                        <Grid item key={item.id} container alignItems={"center"}  style={{borderBottom: ((i+1) == appBarItems.length) ? undefined :"1px solid white",padding:'0 10px'}}>
                                            <Grid item>
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                            </Grid>
                                          <Grid item>
                                              <ListItem button key={item.id}
                                                        style={{}}>
                                                  <ListItemText style={{color:'white'}} primary={item.title} />

                                              </ListItem>
                                          </Grid>
                                        </Grid>

                                ))}
                            </List>
                                    </Grid>

                        </SwipeableDrawer>
                    </React.Fragment>

                </Hidden>


            </Toolbar>
        </AppBar>
        </div>
    )
}
