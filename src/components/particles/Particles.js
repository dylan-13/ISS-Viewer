import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './Particles.css';

class ParticlesContainer extends Component {
render() {
    return ( 
        <Particles 
            params={{
                "particles": {
                  "number": {
                    "value": 600,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#96272F"
                  },
                  "shape": {
                    "type": "star",
                    "stroke": {
                      "width": 0.5,
                      "color": "#BCBCC4"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                  },
                  "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 2,
                      "opacity_min": 0,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 4,
                      "size_min": 0.3,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 50,
                    "color": "#ffffff",
                    "opacity": 1.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 600
                    }
                  }
                },
                "retina_detect": true
                  }} />
    )
}
}

export default ParticlesContainer;