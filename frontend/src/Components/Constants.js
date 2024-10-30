import Header from "./Header";
import { Outlet } from "react-router-dom";
import { createContext } from "react";
import { useState, useContext } from "react";
import UserContext from "./createContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";


export const WithLevelData = (SmallCards) => {
  return (props) => (
    <div className="relative">
      <label className="absolute bg-black text-white m-1 p-1 rounded-md shadow-md">
        Promoted
      </label>
      <SmallCards {...props} />
    </div>
  );
};

export const Container = () => {
  const [contextName, changeContextName] = useState("This is Context");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: contextName, changeContextName }}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow p-4 flex flex-wrap justify-center">
            <Outlet />
          </main>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
