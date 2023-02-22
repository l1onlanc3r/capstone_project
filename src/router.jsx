import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AuthLayout from './layouts/authLayout';
import BaseLayout from './layouts/baseLayout';
import MainLayout from './layouts/mainLayout';
import QuizLayout from './layouts/quizLayout';
import Quiz from './pages/Quiz';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Landing />} />
      <Route path="home" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="quiz" element={<QuizLayout />}>
        <Route index element={<Quiz />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

/*
<Route path="/" element={<BaseLayout />}>
      <Route path="dashboard" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
*/
