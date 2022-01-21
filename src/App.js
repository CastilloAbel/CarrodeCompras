import { useState, useEffect, useReducer } from "react"
import "./App.css"
// const useProductos = inicial=>{
//   const [productos, setProductos] = useState(inicial)
//   const sumar = (productos)=> {

//     setProductos(productos + 1)
//   }
// return [productos, sumar]
// }
const ButtonCompra = ({id, productos, sumar, dispatch, name})=>{
  return(
    <button
      id={id} 
      className={"button"}
      onClick={()=>{
        sumar(productos+1)
        dispatch({type: name})
      }}
      >Añadir al Carro
    </button>
  )
}
const Compra = ({id, className, price, name, productos, sumar, dispatch})=>{
  return(
      <div 
        id={id} 
        className={className}
      >
            <p 
              className={`${className}-name`}
              >
                {name}</p>
            <img 
              id={`img-${id}`} 
              className={`${className}-${id}`}
            >
            </img>
            <p 
            className={`${className}-price`}
            >
              {price}</p>
            <ButtonCompra 
              productos={productos} 
              sumar={sumar} 
              id={`button-${id}`}
              dispatch={dispatch}
              name={id}
              >

            </ButtonCompra>
          </div>
  )
}
const Titulo = ({name})=>{
  return (
    <h1 id={"name"}>{name}</h1>
  )
}
const Catalogo = ({productos, sumar, dispatch})=>{
  return (
    <div>
      <div className={"catalogo"}>
          <Compra 
            dispatch={dispatch} 
            productos={productos} 
            sumar={sumar} 
            id={"lechuga"} 
            className={"product"} 
            name={"Lechuga"} 
            price={"1500"}
            >
          </Compra>
          <Compra 
            dispatch={dispatch} 
            productos={productos} 
            sumar={sumar} id={"tomate"} 
            className={"product"}  
            name={"Tomate"} 
            price={"1000"}
            >
          </Compra>
          <Compra 
            dispatch={dispatch} 
            productos={productos} 
            sumar={sumar} 
            id={"arveja"} 
            className={"product"}  
            name={"Arveja"} 
            price={"2500"}
            >
          </Compra>
      </div>
    </div>
  )
}
const Aviso = ({cant}) =>{
if (cant > 9) return(
  <span id={"sum"}>9+</span>
)
if (cant > 0) return (
    <span id={"sum"}>{cant}</span>
  )
return null
}
const Carro = ({productos, sumar, dispatch})=>{
  return (
    <div id="button-cont">
      <Aviso cant={productos}></Aviso>
      <button 
        className={"button"}
       id={"compra"}
       
       >Ver Carro

       </button>
    </div>
    
  )
}
const Menu = ()=>{
  return(
    <div id="men">

    </div>
  )
}
const Navbar = ({productos, sumar, dispatch, state})=>{
  return (
    <div className="barra">
      <Titulo name={"Tienda"}></Titulo>
      <Carro productos={productos} sumar={sumar} dispatch={dispatch}></Carro>
      <Menu state={state}></Menu>
    </div>
  )
}
const initial = {
  verdura: "",
  img: "",
  cant: 0
}
// const state = {verdura: string}
// action ={type:string, payload: any}
// 
const reducer = (state, action)=>{
switch (action.type){
  case "lechuga":
    return {verdura: "lechuga", img: "lechuga.jpg", cant: 1}
  case "tomate":
    return {verdura: "tomate", img: "tomate.jpg", cant: 1}
  case "arveja":
    return {verdura: "arveja", img: "arbejas.jpg", cant: 1}
  default:
    return state
}
}
const App = ()=>{
  const [productos, setProductos] = useState(0)
  const [state, dispatch] = useReducer(reducer, initial)
  useEffect(()=>{
    console.log("que compraste?")
    console.log(state)
  }, [productos])
  return (
    <div 
    className={"conteiner"}
    >
      <Navbar 
        productos={productos} 
        sumar={setProductos}
        dispatch={dispatch}
        state={state}
        >
      </Navbar>
      <Catalogo 
        productos={productos} 
        sumar={setProductos}
        dispatch={dispatch}
        >
      </Catalogo>
    </div>
  )
}
export default App