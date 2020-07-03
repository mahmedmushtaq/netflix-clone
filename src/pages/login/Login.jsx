import React from "react";
import {Grid,Typography,Button} from "@material-ui/core";
import designStyle from "./desgin";
import {Link} from "react-router-dom";
import language from "../../others/en";



export default props=>{
    const classes = designStyle();
    return(
        <Grid container className={classes.root} justify={"center"}>
            <Grid item className={classes.registerContainer} >
                <Grid container   direction={"column"} justify={"center"} alignItems={"center"}>
                    <Grid item >
                        <Typography variant={"h2"} >{language.login}</Typography>
                    </Grid>
                    <Grid item>
                        <div className={classes.divider}></div>
                    </Grid>
                            <br/><br/>
                    <Grid item>
                       <input type={"email"} placeholder={language.email}  className={classes.input}/>

                    </Grid>


                    <Grid item className={classes.gridItem}>
                        <input type={"password"} placeholder={language.password}  className={classes.input}/>
                    </Grid>


                   <Grid item style={{width:'100%'}} className={classes.gridItem}>
                       <Button variant={"contained"}  fullWidth color={"primary"}>{language.login}</Button>
                   </Grid>

                    <Grid item className={classes.gridItem}>
                        <Button variant={"outlined"} component={Link} to={"/sign-up"} fullWidth color={"secondary"}>{language.require_a_new_one}</Button>
                    </Grid>

                    <Grid item>
                        <Typography variant={"h6"}  component={Link} to={"/forgot-password"} className={"a-white"} style={{fontSize:12}}>{language.forgot_password}</Typography>
                    </Grid>



            </Grid>
            </Grid>
        </Grid>
    )
}
