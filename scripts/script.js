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