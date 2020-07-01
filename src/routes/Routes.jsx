import React from "react";
import {BrowserRouter,Switch} from "react-router-dom";
import {ThemeProvider} from "@material-ui/core";
import theme from "../themes/theme";
import {TopBar} from "../components";
import {Home} from "../pages";
import RoutesWithLayout from "./RoutesWithLayout";
import HorizontalScrollbar from "../pages/HorizontalScrollbar";

export default props=>{
    return(
        <div>
            <ThemeProvider theme={ theme}>
                <TopBar/>
                <div style={{paddingTop:80,}}>
                   <BrowserRouter>
                       <Switch>
                           <RoutesWithLayout path={"/"} component={HorizontalScrollbar}/>
                       </Switch>
                   </BrowserRouter>
                </div>
            </ThemeProvider>
        </div>
    )
}
