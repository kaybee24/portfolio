const projectContainers = document.querySelectorAll('.project-container');
const nextBtn = document.querySelectorAll('.next-btn');
const preBtn = document.querySelectorAll('.pre-btn');

projectContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})