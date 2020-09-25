const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo(".lod", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.to(".loading", { y: "-100%", duration: 1.5, delay: 2 });
