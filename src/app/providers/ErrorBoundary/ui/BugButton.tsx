import { useEffect, useState } from "react";


//Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    } 
  }, [error]);

  const throwError = () => setError(true);

  return (
    <button onClick={throwError}>Throw error</button>
  )
};