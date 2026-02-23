import { RouterProvider } from "react-router";
import { router } from "./routes";
import Admin from "./app/pages/Admin";

export default function App() {
  return <RouterProvider router={router} />;
}
