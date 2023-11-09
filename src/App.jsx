
import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

let count = 0;

function App() {

  const [myList, setMyList] = useState([])
  const [myItem, setMyItem] = useState()
  const AddItem = () => {
    setMyList([...myList, { id: count++, itemName: myItem }])
 
    console.log(count)
  }
  const deleteItem = (id) => {
    setMyList(myList.filter((x) => x.id != id))
  }
  return (
    <>
      <div className='head-ser'>
        <input type="text"
          value={myItem}
          onChange={(e) => setMyItem(e.target.value)}
          placeholder='Enter Your Item Here ...' />
          <p>{myItem}</p>
        <button onClick={AddItem}>Add Item</button>
        {myList.map((item) => <p key={item.id}>{item.itemName} <button className='del-btn'
         onClick={() => deleteItem(item.id)}>X</button></p>)}
      </div>
    </>
  )
}

export default App;
