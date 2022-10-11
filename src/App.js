import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main>Hello world!</Main>,
      children: [
        {
          path: "/home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/topics",
          element: <Topics>Hello topics!</Topics>,
        },
        {
          path: "/statistics",
          element: <Statistics>Hello world!</Statistics>,
        },
        {
          path: "/blog",
          element: <Blog>Hello blogs!</Blog>,
        },
      ],
    },
    {
      path: "*",
      element: <h1>No founded any data</h1>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
       
    </div>
  );
}

export default App;
