import React from 'react';
import {CssBaseline} from "@mui/material";
import Profile from "./components/Profile";
import Home from "./components/Home";

const App = (props) => {
    return (
        <>
            <CssBaseline />
            <Home/>
        </>
    );
};

export default App;