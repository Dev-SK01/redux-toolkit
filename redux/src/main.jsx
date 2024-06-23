import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { store } from "./components/redux/store.js"; // importing store
import { Provider } from "react-redux";
import { fetchPosts } from "./components/slices/asyncThunkSlice.js";
import { fetchData } from "./components/slices/entityAdapterSlice.js";
store.dispatch(fetchPosts());
store.dispatch(fetchData());
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>  {/* provides the store across the app component */}
      <App />
    </Provider>
  </React.StrictMode>
);
