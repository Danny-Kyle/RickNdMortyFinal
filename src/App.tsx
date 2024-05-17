import {  RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx';
import PageContext, {PageContextState} from './page/lib/PageContext.ts';
import { useState } from 'react';

const App: React.FC = () =>{  
  const [currentPage, setCurrentPage] = useState(1);

  const contextValue: PageContextState = {
    currentPage,
    setCurrentPage,
  };
 
  return (
    <PageContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </PageContext.Provider>
  );
}

export default App;
