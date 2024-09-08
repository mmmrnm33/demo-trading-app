import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import TradePage from "./pages/TradePage/TradePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Header>
        <HomePage />
      </Header>
    ),
  },
  {
    path: "/trade/:coinId",
    element: (
      <Header>
        <TradePage />
      </Header>
    ),
  },
]);
