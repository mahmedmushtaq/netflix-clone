import React from "react";
import {BrowserRouter,Switch} from "react-router-dom";
import {ThemeProvider} from "@material-ui/core";
import theme from "../themes/theme";
import {TopBar} from "../components";
import {Home, TvShows, SeriesPage, Movies, ComingSoon, Login, SignUp,PlayerPage, ForgotPassword, ProductionPage} from "../pages";
import RoutesWithLayout from "./RoutesWithLayout";




export default props=>{
    return(
        <div>
            <ThemeProvider theme={ theme}>
                <BrowserRouter>
                <TopBar/>
                <div style={{paddingTop:80,}}>

                       <Switch>
                           <RoutesWithLayout exact path={"/tv-shows"} component={TvShows}/>
                           <RoutesWithLayout exact path={"/coming-soon"} component={ComingSoon}/>
                           <RoutesWithLayout exact path={"/movies"} component={Movies}/>
                           <RoutesWithLayout exact path={"/series/:slug"} component={SeriesPage}/>
                           <RoutesWithLayout exact path={"/production-by/:slug"} component={ProductionPage}/>
                           <RoutesWithLayout exact path={"/play/:slug"} component={PlayerPage}/>

                           <RoutesWithLayout exact path={"/login"} component={Login}/>
                           <RoutesWithLayout exact path={"/forgot-password"} component={ForgotPassword}/>
                           <RoutesWithLayout exact path={"/sign-up"} component={SignUp}/>
                           <RoutesWithLayout path={"/"} component={Home}/>
                       </Switch>

                </div>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    )
}
