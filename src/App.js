import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Cart/Quiz/Quiz';
import Rechart from './components/Rechart/Rechart';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main>Hello world!</Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/topics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
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
    {
      path: "/quiz/:quizId",
      loader: ({ params }) =>
        // console.log(params),
        fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
      element: <Quiz>No founded any data</Quiz>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
