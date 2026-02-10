import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, protectedRoutes } from "./router/router.link";
import { useAppSelector } from "./core/data/redux/hooks";

export default function App() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.element}
        />
      ))}
      {protectedRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={user ? route.element : <Navigate to="/login" replace />}
        />
      ))}
      <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
