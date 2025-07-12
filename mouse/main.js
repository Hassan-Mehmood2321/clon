const cursor = document.querySelector(".cursor");
const light = document.querySelector(".light-bg");

document.addEventListener("mousemove", (e) => {
  // Cursor follow
  gsap.to(cursor, {
    x: e.clientX - 10,
    y: e.clientY - 10,
    duration: 0.2,
    ease: "power2.out"
  });

  // Light background follow
  gsap.to(light, {
    x: e.clientX - 75,
    y: e.clientY - 75,
    duration: 0.5,
    ease: "sine.out"
  });
});
