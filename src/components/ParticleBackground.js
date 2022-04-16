import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = (props) => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    }
    const particlesLoaded = (container) => {
        console.log(container);
    }
    return (
        <div style={{
            // top: 0,
            // left: 0,
            // bottom: 0,
            // right: 0,
            // padding: 0,
            // margin: 0,
            //maxHeight: '100vh'
        }}>
        <Particles
            style={{
                minHeight: '100vh',
            }}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "rgb(25, 20, 40)",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 600,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
                fullScreen: { enable: false }
            }}
        />
        </div>
    );
};

export default ParticleBackground;