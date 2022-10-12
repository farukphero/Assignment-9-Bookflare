import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="lg:w-2/4 m-auto mt-6">
        <h1 className="bg-purple-300 p-4 text-2xl mb-5 rounded">
          <b>Question:1:</b> What is the purpose of react router?
        </h1>
        <p className="p-5 bg-gray-300 rounded">
          React Router is a standard library system built on top of the React
          and used to create routing in the React application using React Router
          Package. It provides the synchronous URL on the browser with data that
          will be displayed on the web page. ReactJS Router is mainly used for
          developing Single Page Web Applications. React Router is used to
          define multiple routes in the application. When a user types a
          specific URL into the browser, and if this URL path matches any
          'route' inside the router file, the user will be redirected to that
          particular route.
        </p>
      </div>
      <div className="lg:w-2/4 m-auto mt-5">
        <h1 className="bg-purple-300 p-4 text-2xl mb-5 rounded">
          <b>Question:2:</b> How does context api work?
        </h1>
        <p className="p-5 bg-gray-300 rounded">
          Context API is a new feature added in version 16.3 of React that
          allows one to share state across the entire app (or part of it)
          lightly and with ease. The React Context API is a way for a React app
          to effectively produce global variables that can be passed around.
          This is the alternative to "prop drilling" or moving props from
          grandparent to child to parent, and so on. Context is also touted as
          an easier, lighter approach to state management using Redux.
        </p>
      </div>
      <div className="lg:w-2/4 m-auto mt-5">
        <h1 className="bg-purple-300 p-4 text-2xl mb-5 rounded">
          <b>Question:3:</b> What is the useRef hook?
        </h1>
        <p className="p-5 bg-gray-300 rounded">
          The useRef Hook allows to persist values between renders. It can be
          used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
          <br />
          If we tried to count how many times our application renders using the
          useState Hook, we would be caught in an infinite loop since this Hook
          itself causes a re-render. To avoid this, we can use the useRef Hook.
        </p>
      </div>
    </div>
  );
};

export default Blog;