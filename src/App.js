import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [earlier, now] = useState(0);
  function handleClick() {
    // alert('ORDER HAS BEEN PLACED');
    now(earlier + 1);
  }
  return (
    <div className="mainback">
      <h1>Hello ankur</h1>
      <p>
        Start editing to see some magic happen :). my mobile number is {All}
      </p>
      <Mybutton earlier={earlier} onClick={handleClick} />
      <Mybutton earlier={earlier} onClick={handleClick} />
    </div>
  );
}

function Mybutton({earlier,onClick}) {
 
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'red',
        color: 'white',
        fontWeight: '900',
        margin: '10px',
        padding: '10px',
        border: 'none',
      }}
    >
      {earlier}
    </button>
  );
}

const products = [
  {
    name: 'Dell keyboard',
    price: '1300 /-',
    id: '1',
    new: true,
  },
  {
    name: 'USB hub',
    price: '350 /-',
    id: '2',
    new: false,
  },
  {
    name: 'charger',
    price: '150 /-',
    id: '2',
    new: false,
  },
];

const All = products.map((product) => (
  <div>
    <div
      style={{ backgroundColor: product.new ? 'grey' : 'black' }}
      key={product.id}
      className="oneProduct"
    >
      <br />
      <div className="list">{product.name}</div>
      <div className="list">{product.price}</div>
    </div>
  </div>
));
