const listings = document.querySelectorAll('.plot-listing');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
});
listings.forEach(el => observer.observe(el));
