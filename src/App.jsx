// On importe le composant qui contient toute la logique
// et l'affichage de la liste de cases à cocher.
import CheckboxList from "./components/CheckboxList";

// On importe le fichier CSS principal de l'application.
import "./App.css";

function App() {
  return (
    // La balise <main> représente le contenu principal de la page.
    // La classe "app" permet d'appliquer les styles définis dans App.css.
    <main className="app">
      {/* On affiche ici le composant CheckboxList. */}
      <CheckboxList />
    </main>
  );
}

// On exporte App pour pouvoir l'utiliser dans main.jsx.
export default App;

