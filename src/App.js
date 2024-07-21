import { Container } from "react-bootstrap";
import UpperNavBar from "./components/UpperNavBar";
import Header from "./components/Header";
import Category from "./Category";
import CardItem from "./CardItem";
import { items } from "./data";
import { useState } from "react";


function App() {
  const [itemsData,setitemsData]=useState(items);
  const allCats=['الكل',...new Set( items.map((i)=>i.category))]
  const filterByCat=(cat)=>{
    if(cat=='الكل')
      {
      return  setitemsData(items)
      }
   const filteredData= items.filter((c)=>{
      return c.category==cat
    })
    setitemsData(filteredData)
  }

  const filterByWord=(w)=>{
    if(w!=="")
      {
        const searchData= items.filter((c)=>{
          return c.title==w
        })
        setitemsData(searchData)
      }
  
  }

  return (
    <div className="color-body font">
     <UpperNavBar search={filterByWord}></UpperNavBar>
    <Container>
<Header></Header>
<Category allCats={allCats} func={filterByCat}></Category>
<CardItem itemsData={itemsData}></CardItem>
    </Container>

    </div>
  );
}

export default App;
