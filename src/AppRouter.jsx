import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header>
        <HomePage />
      </Header>
    ),
  },
]);
