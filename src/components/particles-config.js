export const testConfig = {
    fullScreen: {
        enable: false
    },
    interactivity: {
        detect_on: "window",
        events: {
            onHover: {
                enable: true,
                mode: ["bubble", "connect"]
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 100,
                size: 0.4,
                duration: 2,
                opacity: 5,
                speed: 1,
                color: {
                    value: '#000'
                }
            },
            connect: {
                distance: 80,
                lineLinked: {
                    opacity: 0.4
                },
                radius: 100
            }
        }
    },
    particles: {
        color: {
            value: "#000000"
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.88548526,
            straight: false
        },
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 500
            }
        },
        opacity: {
            value: 0
        },
        shape: {
            type: "circle"
        },
        size: {
            random: false,
            value: 5
        }
    },
    retina_detect: true
}
