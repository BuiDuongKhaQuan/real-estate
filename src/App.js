import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Fragment } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRouters } from "./routers/router";

function App() {
  const renderRoute = (route, index, Layout) => {
    const Page = route.component;
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Layout>
            <Page />
          </Layout>
        }
      />
    );
  };
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          {publicRouters.map((route, index) => {
            const Layout =
              route.layout ||
              (route.layout === null ? Fragment : DefaultLayout);
            return renderRoute(route, index, Layout);
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
