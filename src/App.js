import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';

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
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
    {
      path: "*",
      element: <h1>404 Page Not Found </h1>,
    },
    {
      path: "/quiz/:quizId",
      loader: ({ params }) =>
        fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
      element: <Quiz></Quiz>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
