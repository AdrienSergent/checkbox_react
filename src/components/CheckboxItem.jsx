// Le composant reçoit deux props :
// - item : l'objet représentant la case à cocher ;
// - onChange : la fonction à appeler quand la case change.
function CheckboxItem({ item, onChange }) {
  return (
    // Le label permet de cliquer sur le texte
    // pour cocher ou décocher la case.
    <label className="checkbox-item">
      <input
        // On indique qu'il s'agit d'une case à cocher.
        type="checkbox"

        // La case est cochée si item.checked vaut true.
        checked={item.checked}

        // Quand l'utilisateur clique sur la case,
        // on appelle la fonction reçue en props
        // avec l'identifiant de l'élément concerné.
        onChange={() => onChange(item.id)}
      />

      {/* On affiche le texte de l'élément. */}
      <span>{item.label}</span>
    </label>
  );
}

// On exporte le composant pour pouvoir l'utiliser
// dans CheckboxList.jsx.
export default CheckboxItem;
