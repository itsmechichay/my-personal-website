/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

    document.querySelectorAll(".nav_list").forEach(item => {
      item.addEventListener("click", function (e) {
        if (window.innerWidth <= 900) {
          e.stopPropagation(); // Prevents triggering parent clicks
          this.classList.toggle("active"); // Toggles submenu visibility
        }
      });
    });


/* ----- CHANGE ACTIVE LINK ----- */
    const sections = document.querySelectorAll('section[id]');
    const circle = document.querySelector(".circle"); // Select the circle element
    
    function scrollActive() {
        const scrollY = window.scrollY;
    
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 50,
                sectionId = current.getAttribute('id');
    
            const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
    
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Add active-link class
                link.classList.add('active-link');
    
                // Update circle position
                const rect = link.getBoundingClientRect();
                const navMenuRect = document.querySelector('.nav-menu').getBoundingClientRect();
                circle.style.left = `${rect.left - navMenuRect.left + rect.width / 2 - circle.offsetWidth / 2}px`;
    
            } else {
                // Remove active-link class
                link.classList.remove('active-link');
            }
        });
    }
    
    // Immediately call scrollActive() when the script is loaded
    scrollActive();
    
    // Bind scrollActive to the scroll event
    window.addEventListener('scroll', scrollActive);



/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : [
        "imagining the future of technology.",
        "crafting tomorrow's tech solutions today.",
        "exploring the limitless possibilities of tech.",
      ],
      loop : true,
      typeSpeed : 40, 
      backSpeed : 30,
      backDelay : 3000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
   })

  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  sr.reveal('.section', {delay: 100})
  sr.reveal('h3',{delay: 0})

  const sr1 = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true     
})

  sr1.reveal('.contact-button',{delay: 100})
  sr.reveal('.project-box',{interval: 200})
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})  
  srLeft.reveal('.contact-info',{delay: 100})

  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.cert-info',{delay: 100})
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})



  
  // const sections = document.querySelectorAll('section[id]')

  // function scrollActive() {
  //   const scrollY = window.scrollY;

  //   sections.forEach(current =>{
  //     const sectionHeight = current.offsetHeight,
  //         sectionTop = current.offsetTop - 50,
  //       sectionId = current.getAttribute('id')

  //     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

  //         document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  //     }  else {

  //       document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  //     }
  //   })
  // }
  

  // copy to clipboard

  function CopyMe(TextToCopy) {
    var TempText = document.createElement("input");
    TempText.value = TextToCopy;
    document.body.appendChild(TempText);
    TempText.select();
    
    document.execCommand("copy");
    document.body.removeChild(TempText);
    
    Swal.fire({
        title: 'Text Copied!',
        text: 'Copied the text: ' + TempText.value,
        icon: 'success',
        timer: 2000, // Auto close after 2 seconds
        showConfirmButton: false
    });
  }


// window.addEventListener('scroll', scrollActive)

  // const content = document.getElementById('content');

  // window.onload = function() {
  //   content.style.zoom = 0.9; // Set zoom to 90% on page load
  // };

  // cursor design

var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
  cursor.style.top = e.clientY + "px";
});


// PARTICLES BG 

particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 160,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#bcbcbc"
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#e0cdb6"
          },
          "polygon": {
              "nb_sides": 5
          },
          "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
          }
      },
      "opacity": {
          "value": 1,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 1,
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
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
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
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          },
          "onclick": {
              "enable": true,
              "mode": "repulse"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
          },
          "repulse": {
              "distance": 400,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
});

