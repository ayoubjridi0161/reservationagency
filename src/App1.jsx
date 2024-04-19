//import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Layout from './Layout';
//import Home from './Pages/Home';
import { lazy,Suspense } from 'react';
import Loader2 from './utils/Loader2';
//import SearchResult from './Pages/SearchResult';
//import HotelBox from './components/HotelBox';
import AboutUs from './Pages/AboutUs';
import SearchResult from './Pages/SearchResult';
import { QueryClient, QueryClientProvider} from 'react-query'
import Contact from './Pages/Contact';
//import { HotelsPage } from './Pages/HotelsPage';
const HotelsPage = lazy(() => delayForDemo(import('./Pages/HotelsPage')));
//alert(Object.keys(HotelsPage));
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2500);
    }).then(() => promise);
  }
//import { HotelDetails } from './Pages/HotelDetails';
const Home = lazy(() => delayForDemo(import('./Pages/Home')));
const HotelDetails = lazy(() => import('./Pages/HotelDetails'));
import HotelContainer from './components/HotelContainer';
import Pay from './Pages/Pay';
import Loader from './utils/Loader';
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
                path : "aboutus",
                element : <AboutUs />
            },
            {
                path : "contact",
                element : <Contact />
            },
            {
                path : "/search/:keyword",
                element : <SearchResult />
            },
            {
                path : "hotels",
                element : <HotelsPage />
                


            },
            {
                path : "hotels/:id/checkout",
                element : <Pay />
            }
            ,
            {
                path : "hotels/:id/",
                element : <HotelDetails/>,
                children: [
                    {
                        path: "Checkout",
                        element: <Pay />
                    }
                ]
            }

            
            
        ]
    }
]);
const App = () => {
    const queryClient = new QueryClient();
  
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loader2/>} >
        <RouterProvider router ={router}/>
            </Suspense>
        </QueryClientProvider>
  );
};

export default App;