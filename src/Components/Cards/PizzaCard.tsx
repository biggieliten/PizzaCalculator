/* import Card from "./Cards";

function PizzaCard() {
  

    return (
      <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold text-2xl">Välj en pizza</h1>
      <div className="overflow-auto h-96 w-fit">
    <h1 className="font-bold text-2xl">Kebab</h1>
      <div className='flex flex-wrap gap-2 my-1'>
      <Card title = {"Pizza"} content = {"Ingredienser"} price = {50} imageUrl="\img\kebab.jpeg" />
      <Card title = {"Pizza"} content = {"Ingredienser"} price = {50} imageUrl="\img\kebab.jpeg" />
      </div>
      <div className='flex gap-2 my-1'>
      <Card title = {"Pizza"} content = {"Ingredienser"} price = {50} imageUrl="public\img\kebab.jpeg" />
      <Card title = {"Pizza"} content = {"Ingredienser"} price = {50} imageUrl="public\img\kebab.jpeg" />
      </div>


      <h1 className="font-bold text-2xl">Kyckling</h1>
      <div className='flex gap-2 mt-10'>
      <Card title = {"Pizza"} content = {"Ingredienser"} price = {50} imageUrl="public\img\kebab.jpeg" />
      <Card title = {"Pizza"} content = {"Ingredienser"} price = {50} imageUrl="public\img\kebab.jpeg" />
      </div>
      <div className='flex gap-2 my-1'>
      <Card title = {"Pizza"} content = {"Ingredienser"} price = {50} imageUrl="public\img\kebab.jpeg" />
      <Card title = {"Pizza"} content = {"Ingredienser"} price = {50} imageUrl="public\img\kebab.jpeg" />
      </div>
      
      <h1 className="font-bold text-2xl">Vegan</h1>
      <div className='flex gap-2 mt-10'>
      <Card title = {"Pizza"} content = {"Ingredienser"} price = {50} imageUrl="public\img\kebab.jpeg" />
      <Card title = {"Pizza"} content = {"Ingredienser"} price = {50} imageUrl="public\img\kebab.jpeg" />
      </div>
      <div className='flex gap-2 my-1'>
      <Card title = {"Pizza"} content = {"Ingredienser"} price = {50} imageUrl="public\img\kebab.jpeg" />
      <Card title = {"Pizza"} content = {"Ingredienser"} price = {50} imageUrl="public\img\kebab.jpeg" />
      </div>


      </div>
      </div>
      </>)
    ;
  }
  
  export default PizzaCard; */

  import pizza from "../../pizza.json"
  import Card from "./Cards"

  const PizzaCard = () => {
    const pizzor = pizza.pizzor

    return (
      <>
      
      
      {pizzor.map((pizza)=>{
        return <Card name={pizza.name} ingredients={pizza.ingredients}/>
      })}
      
      
      
      </>
    )

  }
  export default PizzaCard;