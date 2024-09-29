let text = document.querySelector('.text');
let leaf = document.querySelector('.leaf');
let hill1 = document.querySelector('.hill1');
let hill4 = document.querySelector('.hill4');
let hill5 = document.querySelector('.hill5');


window.addEventListener("scroll", () => {
    let value = window.scrollY;

    // Calculate maximum scroll value based on the content
    let maxScroll = document.body.scrollHeight - window.innerHeight;

    // Enforcing limits on scroll value
    if (value <= maxScroll) {
        
        // Apply transformations with limits
        text.style.marginTop = value * 2.5 + 'px'; 
        leaf.style.top = Math.max(value * -1.5, -200) + 'px'; 
        leaf.style.left = Math.min(value * 1.5, 300) + 'px'; 
        hill5.style.left = Math.min(value * 1.5, 300) + 'px'; 
        hill4.style.left = Math.max(value * -1.5, -300) + 'px'; 
        hill1.style.top = Math.min(value * 1, 100) + 'px'; 
    }
});