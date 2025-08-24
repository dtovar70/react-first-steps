import { useState } from "react";
import './ItemCounter.css';

interface Props {
    name: string;
    quantity?: number;
}

const ItemCounter = ({name, quantity = 1}: Props) => {

  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSubtract = () => {
    setCount(count -1);
    if(count <= 0){
      setCount(0);
    }
  }

  return (
    <section className="item-row">
        <span 
          className="item-name"
          style={{
            color: count === 0 ? 'red' : 'black',
            fontWeight: count === 0 ? 'bold' : 'normal'
          }}
          >
          {name}
        </span>
        <button
          onClick={handleAdd}
        >+1</button>
        <span>{count}</span>
        <button
          onClick={handleSubtract}
        >-1</button>
    </section>
  )
}

export default ItemCounter