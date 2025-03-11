import { useState } from "react"
import Nav from "./Navigation/Nav"
import Product from "./Products/Product"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import data from './db/data'
function App() {
  const [selectCategory,setSelectedCategory] =useState(null);

  const [query,setQuery] =useState("");

  const handleInputChange = e =>{
    setQuery(e.target.value)
  }

  const filteredItems = data.filter(data => data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1))
  
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filteredData(data, selectCategory, query);
  return (
    <>
    <Sidebar handleChange={handleChange}/>
    <Nav query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick} />
    <Product result={result}/>
    </>
  )
}

export default App
