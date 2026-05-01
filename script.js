// Récupération de l'élément HTML5 <h1>
const targetText = document.querySelector(".target");

targetText.innerHTML = targetText.textContent
  // La méthode split() divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau. La division est effectuée en recherchant un motif.
  .split("")
  // La méthode map() est une méthode itérative. Elle appelle la fonction callbackFn fournie une fois pour chaque élément du tableau et construit un nouveau tableau à partir des résultats.
  .map(
    (letters, i) =>
      `<span style="transition-delay: ${i * 50}ms; filter: hue-rotate(${
        i * 69
      }deg)">${letters}</span>`
  )
  // La méthode join() des instances de Array crée et retourne une nouvelle chaîne de caractères en concaténant tous les éléments de ce tableau, séparés par une chaîne de séparation définie.
  .join("");
