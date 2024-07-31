import { Route, Routes } from "react-router-dom";
import routeConstants from "../constants/routeConstants";
import LayoutContainer from "../layout/LayoutContainer";
import Home from "../screens/HomeScreen";
import PageNotFound from "../screens/PageNotFoundScreen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routeConstants.ROOT} element={<LayoutContainer />}>
        <Route path={routeConstants.HOME} element={<Home />} />
        <Route
          path={routeConstants.PAGE_NOT_FOUND}
          element={<PageNotFound />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;