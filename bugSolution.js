```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran with count:', count);
    const cleanup = () => {
      console.log('Cleanup function ran');
    };
    return cleanup; // Return the cleanup function
  }, [count]); // Correctly adding count to the dependency array
  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
```