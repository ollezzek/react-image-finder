import React, { Component } from 'react';
//import Spinner from "react-loader-spinner";
import { CircleLoader } from 'react-spinners';
export default class Loader extends Component {

    render() {
        return(
            <CircleLoader className = "Loader" type="Puff" color="#00BFFF" />
        )
    }
}