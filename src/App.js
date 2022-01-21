import "./App.css"
const ButtonCompra = ({id})=>{
  return(
    <button id={id} className={"button"}>Añadir al Carro</button>
  )
}
const Compra = ({id, className, price, name})=>{
  return(
      <div id={id} className={className}>
            <p className={`${className}-name`}>{name}</p>
            <img id={`img-${id}`} className={`${className}-${id}`}></img>
            <p className={`${className}-price`}>{price}</p>
            <ButtonCompra id={`button-${id}`}></ButtonCompra>
          </div>
  )
}
const Titulo = ({name})=>{
  return (
    <h1 id={"name"}>{name}</h1>
  )
}
const Catalogo = ()=>{
  return (
    <div>
      <div className={"catalogo"}>
          <Compra id={"lechuga"} className={"product"} name={"Lechuga"} price={"1500"}></Compra>
          <Compra id={"tomate"} className={"product"}  name={"Tomate"} price={"1000"}></Compra>
          <Compra id={"arveja"} className={"product"}  name={"Arveja"} price={"2500"}></Compra>
      </div>
    </div>
  )
}
const Aviso = () =>{
  return (
    <span id={"sum"}>5</span>
  )
}
const Carro = ()=>{
  return (
    <div>
      <Aviso></Aviso>
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
const Navbar = ()=>{
  return (
    <div className="barra">
      <Titulo name={"Tienda"}></Titulo>
      <Carro></Carro>
      <Menu></Menu>
    </div>
  )
}
const App = ()=>{
  return (
    <div className={"conteiner"}>
      <Navbar></Navbar>
      <Catalogo></Catalogo>
    </div>
  )
}
export default App