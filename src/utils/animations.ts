// Definimos los tipos de animaciones permitidas para mayor seguridad
type AnimationType =
  | "fade"
  | "slide"
  | "flip"
  | "left-right"
  | "right-left"
  | "up"
  | "down";

export const initAnimations = () => {
  const observerOptions: IntersectionObserverInit = {
    root: null,
    // '0px 0px -10% 0px' hace que el elemento deba entrar al menos 10%
    // dentro de la pantalla para activarse, evitando el borde extremo.
    rootMargin: "0px 0px -20px 0px",
    // threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Añadimos la clase 'animate-in' para disparar el CSS
        entry.target.classList.add("animate-in");
        // Si quieres que solo se anime una vez, dejamos de observar
        // observer.unobserve(entry.target);
      } else {
        // Solo removemos si NO tiene un atributo de "animar una sola vez"
        if (!entry.target.hasAttribute("data-animation-once")) {
          entry.target.classList.remove("animate-in");
        }
      }
    });
  }, observerOptions);

  // Buscamos todos los elementos con el atributo data-animation
  const animatedElements = document.querySelectorAll("[data-animation]");
  animatedElements.forEach((el) => observer.observe(el));
};
