const animationHide = [
    { opacity: 1 },
    { opacity: 0 },

]
const animationVisible = [
    { opacity: 0 },
    { opacity: 1 },

]
const time = {
    duration: 1000,
    iterations: 1
}
let flag = false;
const button = document.getElementsByClassName('collapsible__button')[0];
const content = document.getElementsByClassName('collapsible__content')[0];
const actionHidden = document.getElementsByClassName('collapsible__action--hidden')[0];
const actionVisible = document.getElementsByClassName('collapsible__action--visible')[0];
actionHidden.style.display = 'none';
button.addEventListener('click', () => {
    button.disabled = true;
    flag = !flag;
    if (flag) {
        animation = content.animate(
            animationHide,
            time
        )

    } else {
        animation = content.animate(
            animationVisible,
            time
        )
    }
    animation.onfinish = () => {
        actionHidden.style.display = flag ? 'block' : 'none';
        actionVisible.style.display = !flag ? 'block' : 'none';
        content.style.opacity = flag ? '0' : '1';
        button.disabled = false;
    }
})
