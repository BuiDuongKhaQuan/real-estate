import routes from "~/config/router";
import Apartment from "~/pages/Apartment";
import Home from "~/pages/Home";
import Resort from "~/pages/Resort";
import Transfer from "~/pages/Transfer";

const publicRouters = [
  { path: routes.home, component: Home },
  { path: routes.apartment, component: Apartment },
  { path: routes.resort, component: Resort },
  { path: routes.transfer, component: Transfer },
];

export { publicRouters };
