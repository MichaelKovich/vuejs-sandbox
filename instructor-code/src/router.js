import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "./components/HelloWorld";
import Catch from "./components/Catch";
import Jedi from "./components/Jedi";
import Detail from "./components/Detail";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: HelloWorld
    },
    {
      path: "/jedi",
      component: Jedi
    },
    {
      path: "/detail/:name",
      component: Detail
    },
    {
      path: "*",
      component: Catch
    }
  ]
});

export default router;
