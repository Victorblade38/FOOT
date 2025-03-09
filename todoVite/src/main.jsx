import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FirebaseProvider } from "./context/FirebaseContext.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {
  App,
  Login,
  Signup,
  Layout,
  ProtectedRoute,
} from "./components/index.js";
import { AuthProvider } from "./context/AuthContext.jsx";
import Welcome from "./components/Welcome.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<ProtectedRoute />}>
        <Route index element={<Navigate to="/Foot" replace />} />

        <Route path="/Foot" element={<App />} />
      </Route>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <FirebaseProvider>
        <RouterProvider router={router} />
      </FirebaseProvider>
    </AuthProvider>
  </StrictMode>
);
