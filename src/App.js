import { useState ,useEffect } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([])

  const fetchData = async () =>{
  await  fetch('https://jsonplaceholder.typicode.com/posts')

  .then((response) => response.json())

  .then((json) => {console.log(json)
    setData(json)
  });

  }



useEffect(()=>{
  fetchData();
  console.log("data:",data)
},[])


 // fetchData();
// console.log("data:",data)
  return (
    <div className="main">

    <div className="container">

      <h1 className="heading">Naga Mojo Jhal Is Onn...</h1>

    <p className="paragraph">Contain No Sugar And Are Flavoured Instead With Low-Calorine Sweetness</p>

      <div className='tags'>

      <span>Speed Dehydration</span>

      <span>Electrolytes</span>

      <span>Supply Carbohydrate</span>

      <span>Fruits Pulp</span>

       </div>

    <div className="rating">  Ratting </div>

    <button  className='cart'> ADD TO CART</button>

    </div>

   <div className='parallax'> Hero parallax for urmi</div>

    </div>

     )
  }

export default App;


