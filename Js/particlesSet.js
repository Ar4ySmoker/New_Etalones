particlesJS("particles-js-1", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#181B20",
    },
    shape: {
      type: "image",
      stroke: {
        width: 100,
        color: "#181B20",
      },
      polygon: {
        nb_sides: 1,
      },
      image: {
        src: "../img/forParticle/document.png",
        width: 200,
        height: 200,
      },
    },
    opacity: {
      value: 0.1,
      random: false,
      anim: {
        enable: false,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 250,
      color: "#000000",
      opacity: 0.8,
      width: 3,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
      random: false,
      straight: true,
      out_mode: "right",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: false,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 3,
        },
      },
      bubble: {
        distance: 200,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});
particlesJS("particles-js-2", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#181B20",
    },
    shape: {
      type: "image",
      stroke: {
        width: 100,
        color: "#181B20",
      },
      polygon: {
        nb_sides: 2,
      },
      image: {
        src: "../img/forParticle/train.png",
        width: 200,
        height: 200,
      },
    },
    opacity: {
      value: 0.1,
      random: true,
      anim: {
        enable: false,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "right",
      random: false,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 500,
        rotateY: 300,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "bubble",
      },
      resize: false,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 3,
        },
      },
      bubble: {
        distance: 200,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.2,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});
