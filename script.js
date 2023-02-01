const toggleBtn = document.getElementById('toggle-btn');
const closeBtn = document.getElementById('close-btn');
const mainDiv = document.getElementById('main-div');
const leftDiv = document.getElementById('left-div');
const asideNav = document.getElementById('aside-nav');

// display configuration links
toggleBtn.addEventListener('click', ()=>{
    const asideNav = document.getElementById('aside-nav');
    asideNav.classList.remove('d-none');
    mainDiv.classList.add('row');
    leftDiv.classList.add('col-9');
    asideNav.classList.add('col-3');
})

// hide configuration links 
closeBtn.addEventListener('click', ()=>{
    const asideNav = document.getElementById('aside-nav');
    asideNav.classList.add('d-none');
    mainDiv.classList.remove('row');
    leftDiv.classList.remove('col-9');
    asideNav.classList.remove('col-3');
})