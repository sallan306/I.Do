import React from "react";
import ParticlesReact from "react-particles-js";

export function Particles(props) {
  return (
    <div
      className="canvasWrapper"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -100,
        pointerEvents: "none"
      }}
    >
      <ParticlesReact
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1803.4120608655228
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 3,
                color: props.secondary
              },
              polygon: {
                nb_sides: 4
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            polygon: {
              enable: true,
              type: "inside",
              move: {
                radius: 10
              },
              url: "svg.svg"
            },
            opacity: {
              value: 0.4008530152163807,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 1.5,
              random: true,
              anim: {
                enable: false,
                speed: 100,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 0,
              color: "#ffffff",
              opacity: 0.3687847739990702,
              width: 0.6413648243462091
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: false,
                mode: "repulse"
              },
              onclick: {
                enable: false,
                mode: "bubble"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
    </div>
  );
}
