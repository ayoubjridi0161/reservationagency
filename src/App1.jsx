//import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
//import SearchResult from './Pages/SearchResult';
//import HotelBox from './components/HotelBox';
import SearchResult from './Pages/SearchResult';
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
                path : "/hotels/?keyword=:keyword",
                element : <SearchResult />
            },
            {
                path : "hotels",
                element : <HotelsPage />,


            },
            {
                path : "hotels/?id=:hotelID",
                element : <HotelDetails/>
            }

            
            
        ]
    }
]);
const App = () => {
  
    return (
        <RouterProvider router ={router}/>
  );
};

export default App;