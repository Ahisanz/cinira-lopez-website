
const nav = document.querySelector('.nav');
const navButtons = document.querySelectorAll('.nav-list__button');
const videos = document.querySelectorAll('.videos-list__item');

window.addEventListener('scroll', () => {
    let value = window.scrollY

    nav.style.top = "calc( " + value * 0.5 + "px)";
})



navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // e.preventDefault();
        let position = e.target.parentNode.dataset.position;
        
        videos.forEach(video => {
            video.childNodes[0].pause();
            video.childNodes[0].muted = true;
            video.childNodes[0].style.zIndex = '1';
            video.style.height = '164px';
        })

        let videoItem = videos[position].childNodes[0];

        videoItem.play();
        videoItem.muted = false;
        videoItem.style.zIndex = '999999';
        videoItem.parentNode.style.height = '100%';
        nav.style.opacity = '0.3';

    })
})



// const videoItems = document.querySelectorAll('.videos-list__item')
// const navItems = document.querySelectorAll('.nav-list__item');


// const observer = new IntersectionObserver((entry) => {
//     let i = entry[0].target.dataset.position -1

//     if(entry[0].intersectionRatio > 0){
//         navItems.forEach(navItem => {
//             navItem.classList.remove('hide')
//         })
//         navItems[i].classList.add('hide')
        
//     } else {
//         return
//     }
// })
// videoItems.forEach((item) => {
//     observer.observe(item)
// })
