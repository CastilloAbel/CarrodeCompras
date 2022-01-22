import { useState, useEffect, useReducer } from "react"
import "./App.css"
const ButtonCompra = ({id, productos, sumar, dispatch, name, key})=>{
  return(
    <button
      id={id} 
      className={"button"}
      onClick={()=>{
        sumar(()=>productos + 1)
        dispatch({type: name})
      }
    }
      >Añadir al Carro
    </button>
  )
}
const Compra = ({id, className, price, name, productos, sumar, dispatch, key})=>{
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
const Carro = ({productos, sumar, dispatch, state, click, setClick})=>{
  return (
    <div id="button-cont">
      <Aviso cant={productos}></Aviso>
      <button 
        className={"button"}
       id={"compra"}
       onClick={()=>setClick(!click)}
       >Ver Carro

       </button>
    </div>
    
  )
}
const Menu = (state, click, setClick, productos)=>{
  const [lechuga, tomate, arveja] = [...state.state]
  return(
    <div id={"men"}>
      <ul
      id={"lista"}
      >
        <li className="pro"><p className="n">Lechuga</p>   
          <img
            id={`i${lechuga.name}`}
          ></img>
          <span className="espan">{lechuga.cant}</span>
        </li>
        <li className="pro"><p className="n">Tomate</p>   
          <img
            id={`i${tomate.name}`}
          ></img>
        <span className="espan"> {tomate.cant}</span>
        </li>
        <li className="pro"><p className="n">Arveja</p> 
          <img
            id={`i${arveja.name}`}
          ></img>
          <span className="espan">{arveja.cant}</span>
        </li>
      </ul>
    </div>
  )
}
const Navbar = ({productos, sumar, dispatch, state, click, setClick})=>{
  return (
    <div className="barra">
      <Titulo name={"Tienda"}></Titulo>
      <Carro 
        productos={productos}
        sumar={sumar} 
        dispatch={dispatch}
        click={click}
        setClick={setClick}
        >

        </Carro>
      <Menu 
      state={state}
      click={click}
      setClick={setClick}
      productos={productos}
      >

      </Menu>
    </div>
  )
}
// const initial = {
//   verdura: "",
//   img: "",
//   cant: 0
// }

const initial =[
{
  name:"lechuga",
  img: "lechuga.jpg",
  cant: 0
},
{
  name:"tomate",
  img: "tomate.jpg",
  cant: 0
},
{
  name:"arveja",
  img: "arbeja.jpg",
  cant: 0
}]
// const state = {verdura: string}
// action ={type:string, payload: any}
// 
const reducer = (state, action)=>{
switch (action.type){
  case "lechuga":
    return [{...state[0], cant: state[0].cant+1}, state[1], state[2]]
  case "tomate":
    return [state[0], {...state[1], cant: state[1].cant+1}, state[2]]
  case "arveja":
    return [state[0], state[1], {...state[2], cant: state[2].cant+1}]
  default:
    return state
}
}
const App = ()=>{
  const [productos, setProductos] = useState(0)
  const [click, setClick] = useState(false)
  const [state, dispatch] = useReducer(reducer, initial)
  useEffect(()=>{
  }, [productos])
  useEffect(()=>{
    if (!click) document.getElementById("men").style.opacity = 0
    else document.getElementById("men").style.opacity = 1
  }, [click])
  useEffect(()=>{

  }, [state])
  return (
    <div 
    className={"conteiner"}
    >
      <Navbar 
        productos={productos} 
        sumar={setProductos}
        dispatch={dispatch}
        state={state}
        click={click}
        setClick={setClick}
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