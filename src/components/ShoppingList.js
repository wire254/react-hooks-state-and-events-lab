import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState(items)
  const [filterBy, setFilterBy] = useState("All")
  
  const listItems = selectedCategory.filter((food) => {
      if (filterBy === "All") { 
         return true
      }else{   
         return food.category === filterBy
      }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={e => setFilterBy(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {listItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
