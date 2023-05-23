import { createBrowserRouter, RouterProvider } from "react-router-dom";


import RootLayout from "./Pages/Root";
import LotionPage from "./Pages/LotionPage";
import CurrentPage from "./Pages/CurrentPage";
import OilPage from "./Pages/OilPage";
import InjectionPage from "./Pages/InjectionPage";
import PerfumePage from "./Pages/PerfumePage";


const router = createBrowserRouter([
  {path:'/', 
  element: <RootLayout />,
  children: [
    {path: '/', element: <CurrentPage />},
    {path: '/oil', element: <OilPage />},
    {path: '/injection', element: <InjectionPage />},
    {path: '/fragnance', element: <PerfumePage />},
    {path: '/lotion', element: <LotionPage />},


  ]},
  
])


function App() {
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
