export function ScrollAnimation():any {
  return window.addEventListener('scroll', () => {
      const element = document.querySelectorAll('.animate');
      element.forEach( (element) => {
          const isInView = element.getBoundingClientRect().top <= window.innerHeight / 2;
          element.classList.remove('show');
          if (isInView) {
            element.classList.add('show');
          } 
      })
  });
}