import React, { useState } from 'react';

function CakeContainer() {
  const [totus, setTodus] = useState("");
  const [text, setText] = useState([]);  

  const handle = () => {
    if (totus.trim() === "") return;
    setText([...text, totus]);
    setTodus("");
  };

const dele=(i)=>{setText(text.filter((e)=>e.id!==i))}

  return (
    <div>
      <input
        type="text"
        placeholder="enter new list"
        value={totus}
        onChange={(e) => setTodus(e.target.value)}
      />
      <button onClick={handle}>send</button>

      <ul>
        {text.map((item, index) => (
          <li key={index}>
            {item} <button onClick={()=>dele(item.id)}>dele</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CakeContainer;
