
import { useState } from 'react'
import { ProductsTable } from './ProductsTable'
import { SearchBar } from './SearchBar'
  const Produits = [
    {
      category: "fruits",
       price: "$1",
       stocked: true,
       name:"apple",
    },
    {
      category: "fruits",
       price: "$1",
       stocked: true,
       name:"DragonFruits",
    },
    {
      category: "fruits",
       price: "$2",
       stocked: false,
       name:"PassionFruits",
    },
    {
      category: "vegetables",
       price: "$2",
       stocked: true,
       name:"Spinach",
    },
    {
      category: "vegetables",
       price: "$4",
       stocked: false,
       name:"Pumpkins",
    },
    {
      category: "vegetables",
       price: "$1",
       stocked: true,
       name:"peace",
    },
  ]
  const inputAttributes = {
    padding: 8,
    width: 250,
    borderRadius: 5,
    backgroundColor: "#F2F2F2",
  }

function App() {
  const [showStocked, setShowStocked] = useState(false);
  const [search, setSearch] = useState("");
  return  <>
  <div className='mb-3 col-lg-6 col-md-8 col-8'>
  <SearchBar search={search} onSetSearch={setSearch} showStocked={showStocked} onshowStocked={setShowStocked}/>
  </div>
  <div className='mb-3 col-lg-6 col-md-8 col-8'>
  <ProductsTable products={Produits}/>  
  </div>
  </>
}


export default App