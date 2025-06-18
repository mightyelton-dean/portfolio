const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".animate-on-scroll").forEach((element) => {
  observer.observe(element);
});
var Typed = new Typed(".typing-text", {
  strings: [
    "website creator",
    "video editor",
    "programmer",
    "web designer(ui/ux)",
    "ethnical hacker",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
