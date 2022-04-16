import React, {useRef} from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import { useSpring, animated } from 'react-spring'
import {blue} from "@mui/material/colors";
import ReactRotatingText from "react-rotating-text/lib/ReactRotatingText";
import ParticleBackground from "./ParticleBackground";

const Profile = (props) => {
    const skills = ['Software engineer', 'Machine learning lover', 'IOT enthusiast', 'Music Producer']
    return (
        <div>
            <Typography variant={"h2"} color={"white"} fontWeight={100}>
                Hi, I'm Luca
            </Typography>
            <Typography variant={"h5"} color={"white"} fontWeight={100}>
                <ReactRotatingText items={skills} />
            </Typography>
        </div>
    )
}

export default Profile;