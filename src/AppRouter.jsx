import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import TradePage from "./pages/TradePage/TradePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

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
  {
    path: "/signup",
    element: (
      <Header>
        <SignupPage />
      </Header>
    ),
  },
  {
    path: "/login",
    element: (
      <Header>
        <LoginPage />
      </Header>
    ),
  },
]);
