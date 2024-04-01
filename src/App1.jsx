//import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
//import SearchResult from './Pages/SearchResult';
//import HotelBox from './components/HotelBox';
import SearchResult from './Pages/SearchResult';
import { QueryClient, QueryClientProvider} from 'react-query'

import { HotelsPage } from './Pages/HotelsPage';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { HotelDetails } from './Pages/HotelDetails';
import HotelContainer from './components/HotelContainer';
const router = createBrowserRouter([
    {
        path: '/hotels/prototype',
        element : <HotelContainer/>
    },
    {
        path: '/',
        element : <Home/>
    },
    {
        path: "/",
        element: <Layout />,
        children : [
            {
                path : "/hotels/search/:keyword",
                element : <SearchResult />
            },
            {
                path : "hotels",
                element : <HotelsPage />,


            },
            {
                path : "hotels/:id",
                element : <HotelDetails/>
            }

            
            
        ]
    }
]);
const App = () => {
    const queryClient = new QueryClient();
  
    return (
        <QueryClientProvider client={queryClient}>
        <RouterProvider router ={router}/>
        </QueryClientProvider>
  );
};

export default App;