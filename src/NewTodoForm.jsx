import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);

    // clears the input field
    setNewItem("");
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        {/* everytime input changes, re render the component by calling setNewItem */}
        <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
