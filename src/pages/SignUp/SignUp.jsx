import React from "react";
import {Grid,Typography,Button} from "@material-ui/core";
import designStyle from "../login/desgin";
import language from "../../others/languagesupport";
import {Link} from "react-router-dom";



export default props=>{
    const classes = designStyle();
    return(
        <Grid container className={classes.root} justify={"center"}>
            <Grid item className={classes.registerContainer} >
                <Grid container   direction={"column"} justify={"center"} alignItems={"center"}>
                    <Grid item >
                        <Typography variant={"h2"} >{language.sign_up}</Typography>
                    </Grid>
                    <Grid item>
                        <div className={classes.divider}></div>
                    </Grid>
                    <br/><br/>

                    <Grid item>
                        <input type={"text"} placeholder={language.full_name}  className={classes.input}/>

                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <input type={"email"} placeholder={language.email}  className={classes.input}/>

                    </Grid>


                    <Grid item className={classes.gridItem}>
                        <input type={"password"} placeholder={language.password}  className={classes.input}/>
                    </Grid>


                    <Grid item style={{width:'100%'}} className={classes.gridItem}>
                        <Button variant={"contained"} fullWidth color={"primary"}>{language.sign_up}</Button>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Button variant={"outlined"} component={Link} to={"/login"} fullWidth color={"secondary"}>{language.already_have}</Button>
                    </Grid>





                </Grid>
            </Grid>
        </Grid>
    )
}
