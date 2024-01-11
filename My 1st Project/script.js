// toggle icon navabr

//scroll sectiions
window.onscroll = () =>{
    // sticky header

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);
}