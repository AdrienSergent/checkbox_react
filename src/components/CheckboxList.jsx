// On importe useState pour gérer l'état des cases à cocher.
import { useState } from "react";

// On importe le composant chargé d'afficher une case individuelle.
import CheckboxItem from "./CheckboxItem";

// Tableau contenant les éléments affichés au chargement.
// Chaque élément possède :
// - un identifiant unique ;
// - un texte à afficher ;
// - un booléen indiquant s'il est coché.
const initialItems = [
  { id: 1, label: "Item 1", checked: false },
  { id: 2, label: "Item 2", checked: false },
  { id: 3, label: "Item 3", checked: false },
  { id: 4, label: "Item 4", checked: false },
];

function CheckboxList() {
  // items contient la liste actuelle des éléments.
  // setItems permet de remplacer cette liste par une nouvelle version.
  const [items, setItems] = useState(initialItems);

  // every() vérifie si tous les éléments ont checked à true.
  // Si toutes les cases sont cochées, allSelected vaut true.
  const allSelected = items.every((item) => item.checked);

  // Cette fonction est appelée lorsqu'on clique sur
  // la case "Tout sélectionner".
  function handleSelectAll() {
    // map() crée un nouveau tableau à partir de l'ancien.
    setItems(
      items.map((item) => ({
        // On recopie toutes les propriétés de l'élément.
        ...item,

        // Si toutes les cases sont cochées, on les décoche.
        // Sinon, on les coche toutes.
        checked: !allSelected,
      })),
    );
  }

  // Cette fonction est appelée lorsqu'on clique
  // sur une case individuelle.
  function handleItemChange(id) {
    setItems(
      items.map((item) =>
        // On recherche l'élément dont l'identifiant correspond
        // à celui reçu en paramètre.
        item.id === id
          ? {
              // On recopie l'élément concerné.
              ...item,

              // On inverse uniquement son état checked.
              checked: !item.checked,
            }
          : // Les autres éléments restent inchangés.
            item,
      ),
    );
  }

  return (
    // Section principale contenant toutes les cases à cocher.
    <section className="checkbox-container">
      <h1>Sélection multiple</h1>

      {/* Case permettant de sélectionner ou désélectionner tous les éléments. */}
      <label className="checkbox-item select-all">
        <input
          type="checkbox"

          // Cette case est cochée uniquement si tous les éléments le sont.
          checked={allSelected}

          // Au clic, on exécute handleSelectAll.
          onChange={handleSelectAll}
        />

        <span>Tout sélectionner</span>
      </label>

      {/* Élément visuel séparant la case principale de la liste. */}
      <div className="separator" />

      <div className="items-list">
        {/* On parcourt le tableau items pour créer une case par élément. */}
        {items.map((item) => (
          <CheckboxItem
            // key aide React à identifier chaque élément de la liste.
            key={item.id}

            // On transmet l'objet complet au composant enfant.
            item={item}

            // On transmet également la fonction qui modifiera l'élément.
            onChange={handleItemChange}
          />
        ))}
      </div>
    </section>
  );
}

// On exporte le composant pour pouvoir l'utiliser dans App.jsx.
export default CheckboxList;
