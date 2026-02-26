import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds premium timing

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <RouterProvider router={router} />;
}