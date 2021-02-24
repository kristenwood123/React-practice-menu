import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './index.css'

const allCategories = new Set(items.map((item) => item.category))
console.log(allCategories)


function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  const filterItems = (category) => {
    // this filters through the array and checks each item element
    // if the object I clicked on category is 'breakfast' it returns all the item.category that === breakfast and puts it in a NEW array
    if(category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
  <main>
    <section className='menu section'>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </section>
  </main>
  );
}

export default App;
