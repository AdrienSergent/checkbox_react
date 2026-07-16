import { useState } from "react";
import CheckboxItem from "./CheckboxItem";

const initialItems = [
  { id: 1, label: "Item 1", checked: false },
  { id: 2, label: "Item 2", checked: false },
  { id: 3, label: "Item 3", checked: false },
  { id: 4, label: "Item 4", checked: false },
];

function CheckboxList() {
  const [items, setItems] = useState(initialItems);

  const allSelected = items.every((item) => item.checked);

  function handleSelectAll() {
    setItems(
      items.map((item) => ({
        ...item,
        checked: !allSelected,
      })),
    );
  }

  function handleItemChange(id) {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, checked: !item.checked }
          : item,
      ),
    );
  }

  return (
    <section className="checkbox-container">
      <h1>Sélection multiple</h1>

      <label className="checkbox-item select-all">
        <input
          type="checkbox"
          checked={allSelected}
          onChange={handleSelectAll}
        />
        <span>Tout sélectionner</span>
      </label>

      <div className="separator" />

      <div className="items-list">
        {items.map((item) => (
          <CheckboxItem
            key={item.id}
            item={item}
            onChange={handleItemChange}
          />
        ))}
      </div>
    </section>
  );
}

export default CheckboxList;
