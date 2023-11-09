import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = items.filter((item) => {
    switch (selectedCategory) {
      case "Produce":
        return item.category === "Produce";
      case "Dairy":
        return item.category === "Dairy";
      case "Dessert":
        return item.category === "Dessert";
      default:
        return true; // Show all items when "All" is selected
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
