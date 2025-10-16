export function scrollToSection(id: string) {
  const elt = document.getElementById(id);
  if (!elt) {
    console.warn("Element with id " + id + " not found.");
    return;
  }

  elt?.scrollIntoView({
    behavior: "smooth",
  });
}
