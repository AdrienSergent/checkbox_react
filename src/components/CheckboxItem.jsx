function CheckboxItem({ item, onChange }) {
  return (
    <label className="checkbox-item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onChange(item.id)}
      />
      <span>{item.label}</span>
    </label>
  );
}

export default CheckboxItem;
