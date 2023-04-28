// Header animations

// nav bar animation

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {

    //Animate Links
    navLinks.classList.toggle("open");

    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


// home page text animation

// Hello,
gsap.to('.text1', {
    x: '20%', rotate: 1, duration: 0.85, scrollTrigger: {
        trigger: '.text0',
        scrub: true,
        start: 'top 20%'
    }
})

// Pratham
gsap.to('.text3', {
    x: '20%', rotate: -1, duration: 0.85, scrollTrigger: {
        trigger: '.text2',
        scrub: true,
        start: 'top 40%'
    }
})

// My name is
gsap.to('.text2', {
    x: '-20%', rotate: -1, duration: 0.85, scrollTrigger: {
        trigger: '.text1',
        scrub: true,
        start: 'top 10%'
    }
})

// Garg
gsap.to('.text4', {
    x: '-20%', rotate: -1, duration: 0.85, scrollTrigger: {
        trigger: '.text3',
        scrub: true,
        start: 'top 10%'
    }
})


// sliding header animation on scroll for all section

window.addEventListener('scroll', () => {
    let page = this;
    let pageTop = this.scrollY;
    let pageHeight = this.outerHeight / 2;

    let frames = document.querySelectorAll('.scrollAnim');
    frames.forEach(frame => {
        let frameTop = frame.offsetTop;
        let frameHeight = frame.offsetHeight;

        if (pageTop >= frameTop - pageHeight &&
            pageTop < frameTop + frameHeight / 2) {
            frame.classList.add('anim');
        } else {
            frame.classList.remove('anim');
        }
    });
});


// go back to top animation
document.querySelector('#back').addEventListener('click', () => {
    gsap.to(window, { duration: .2, scrollTo: 'body' });

})