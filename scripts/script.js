// Place nav bar at the top of the screen after scrolling a certain distance
if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
  let observer = new IntersectionObserver(entries => {
    if (entries[0].boundingClientRect.y < 0) {
      document.body.classList.add("nav-not-at-bottom");
    } else {
      document.body.classList.remove("nav-not-at-bottom");
    }
  });
  observer.observe(document.querySelector("#top-of-site-anchor"));
}

// Listeners to close nav menu on click
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbar')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false})
navLinks.forEach((l) => {
  l.addEventListener('click', () => { bsCollapse.toggle() })
});