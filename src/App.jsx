import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div>
      <header className="fixed top-0 left-0 w-full z-20">
        <Header />
      </header>
      <main className="flex-grow pt-16 pb-16 overflow-auto mt-15 mb-20 mx-0 left-0 right-0">
        <Outlet />
      </main>
      <footer className="fixed bottom-0 left-0 w-full z-20">
        <Footer />
      </footer>
    </div>
  ) : null;
}

export default App;
