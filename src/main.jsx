import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistedStore = persistStore(store);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
]); //*this is the place where we add our configuration like what route will do what

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <RouterProvider router={appRouter} />
    </PersistGate>
  </Provider>
);
