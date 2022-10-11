import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main>Hello world!</Main>,
      children: [
        {
          path: "/home",
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
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Header></Header>
    </div>
  );
}

export default App;
