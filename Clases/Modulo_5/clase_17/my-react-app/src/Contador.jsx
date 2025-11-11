import React, { useState } from 'react';
    
function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor actual: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>

    </div>
  );
}

export default Contador;