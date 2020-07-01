import React from "react";
import {Grid} from "@material-ui/core";
import {Route} from "react-router-dom";
import PropTypes from "prop-types";

const RoutesWithLayout = props=>{
    const {component} = props;
    return(
        <Route {...props} render={(matchProps)=><component {...matchProps}/> }/>
    )
}

RoutesWithLayout.propTypes = {
    component: PropTypes.any.isRequired,
    path: PropTypes.string.isRequired,
};

export default RoutesWithLayout;
