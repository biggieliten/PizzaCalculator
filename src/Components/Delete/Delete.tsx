import { useContext } from "react"
import { PizzaContext } from "../GlobalPizza/GlobalPizza"
import {Pizza} from "../../pizzaTypes"




export const Delete = (pizzaId: string) => {
const {modifiedDispatch} = useContext(PizzaContext)
    modifiedDispatch({type: "REMOVE_PIZZA", payload: pizzaId})


}