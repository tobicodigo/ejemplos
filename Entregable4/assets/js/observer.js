
  const observerOptions = {
       root: null,
       threshold: 0,
       rootMargin: '0px 0px -50px 0px'
   };

const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
	           console.log("intersecting")
               entry.target.classList.add('in-view');
               observer.unobserve(entry.target);
           }
       });
   }, observerOptions);
   


window.addEventListener('DOMContentLoaded', (event) => {
	console.log("DomContentLoaded")
const allSections = Array.from(document.getElementsByTagName('section'));
   for (let section of allSections) {
     const children = section.getElementsByClassName('fade-delay');
     for (let count = 0; count < children.length; count++) {
        children[count].setAttribute('style', 'transition-delay: ' + count * 0.5 + 's');
    }
    console.log("observe:",section)
  observer.observe(section);
}
});




