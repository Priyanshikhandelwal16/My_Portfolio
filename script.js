document.addEventListener("DOMContentLoaded", () => {
    const shape1 = document.querySelector(".shape1");
    const shape2 = document.querySelector(".shape2");
    
    function animateShapes() {
        shape1.animate([
            { transform: "translateX(0px)" },
            { transform: "translateX(20px)" },
            { transform: "translateX(0px)" }
        ], {
            duration: 1500,
            iterations: Infinity
        });
        
        // shape2.animate([
        //     { transform: "translateY(0px)" },
        //     { transform: "translateY(30px)" },
        //     { transform: "translateY(0px)" }
        // ], {
        //     duration: 1500,
        //     iterations: Infinity
        // });
    }
    
    animateShapes();

    
    const webContent = document.getElementById("web-content");
    const roles = ["Frontend Developer", "Web Designer", "UI/UX Lover", "Creative Coder"];
    let index = 0;

    function rotateText() {
        webContent.textContent = roles[index];
        index = (index + 1) % roles.length; // loop back
    }

    setInterval(rotateText, 1000); // Change every 2 seconds

    const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

gsap.registerPlugin(ScrollTrigger);

  gsap.from(".about-left", {
    scrollTrigger: {
      trigger: ".about-left",
      start: "top 80%",
    },
    x: -50,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });

//   gsap.from(".skill", {
//     scrollTrigger: {
//       trigger: ".about-right",
//       start: "top 85%"
//     },
//     y: 30,
//     opacity: 0,
//     stagger: 0.1,
//     duration: 1,
//     ease: "power2.out"
//   });


  gsap.from(".contact-btn", {
    scrollTrigger: {
      trigger: ".contact-btn",
      start: "top 90%"
    },
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: "back"
  });

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    emailjs.sendForm('priyanshikh16@gmail.com', 'template_3o5i6w6', this)
      .then(function () {
        document.getElementById('response-msg').textContent = 'Message sent successfully!';
        document.getElementById('response-msg').style.color = 'green';
        document.getElementById('contact-form').reset();
      }, function (error) {
        document.getElementById('response-msg').textContent = 'Failed to send. Please try again.';
        document.getElementById('response-msg').style.color = 'red';
        console.error('EmailJS Error:', error);
      });
  });

});
