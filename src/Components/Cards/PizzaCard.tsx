  import Card from "./Cards"
  import { useContext } from "react"
  import { PizzaContext } from "../GlobalPizza/GlobalPizza"

  const PizzaCard = () => {
    const pizzor = useContext(PizzaContext)

    const standardPizza = pizzor.filter((pizza)=> pizza.type ==="standard")
    const kebabPizza = pizzor.filter((pizza)=> pizza.type ==="kebab")
    const kycklingPizza = pizzor.filter((pizza)=> pizza.type ==="kyckling")

    return (
      <>
  
      <div className="overflow-auto h-96 w-fit gap-4 mt-6">
      <div className="standardpizza ">
        <h1 className="font-bold">Pizza Klass 1</h1>
      {standardPizza.map((pizza)=>{
        return( 
          <Card name={pizza.name} ingredients={pizza.ingredients} price={pizza.price}/>
        )})}
      </div>
      <div className="kebabpizza ">
        <h1 className="font-bold">Pizza Klass 2</h1>
      {kebabPizza.map((pizza)=>{
        return(  
          <Card name={pizza.name} ingredients={pizza.ingredients} price={pizza.price}/>
        )})}
      </div>
      <div className="kycklingpizza">
        <h1 className="font-bold">Pizza Klass 33</h1>
      {kycklingPizza.map((pizza)=>{
        return(  
          <Card name={pizza.name} ingredients={pizza.ingredients} price={pizza.price}/>
        )})}
      </div>
      </div>
      
      
      
      </>
    )

  }
  export default PizzaCard;