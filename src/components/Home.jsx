import React from 'react';
import {Container, Grid, makeStyles} from "@mui/material";
import Profile from "./Profile";
import {blue} from "@mui/material/colors";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import ParticleBackground from "./ParticleBackground";

const Home = (props) => {
    return (
        <div style={{
            backgroundColor: "rgb(25, 20, 40)",
            minHeight: "100vh",
            padding: 0,
            margin: 0
        }}>
            <Parallax pages={3}>
                <ParallaxLayer offset={0} speed={5} >
                    <ParticleBackground/>
                </ParallaxLayer>
                <ParallaxLayer  offset={0} speed={1}>
                    <Grid container direction={"row"} alignItems={"center"} justifyContent={"center"} sx={{
                        minHeight: 400,
                    }}>
                        <Grid item xs={12} md={8} sx={{
                        }}>
                            <Profile/>
                        </Grid>
                    </Grid>
                </ParallaxLayer>
            </Parallax>

        </div>
    );
};

export default Home;