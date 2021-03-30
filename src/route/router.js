import Vue from "vue";
import VueRouter from "vue-router";
import Registration from "@/pages/Registration";
import SignIn from "@/pages/SignIn";
import Main from "@/pages/Main";
import CreateTask from "@/pages/CreateTask";
import routes from "./routes";
import store from "../store/index";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "main",
      path: routes.root,
      component: Main,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "registration",
      path: routes.registration,
      component: Registration,
      meta: {
        requiresAuth: false
      }
    },
    {
      name: "sign",
      path: routes.sign,
      component: SignIn,
      meta: {
        requiresAuth: false
      }
    },
    {
      name: "create",
      path: routes.create,
      component: CreateTask,
      meta: {
        requiresAuth: true
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  let user = store.state.user.user;
  const isRequiresAuth = to.meta.requiresAuth;
  if (isRequiresAuth && !user) {
    next({ path: routes.sign });
  } else if (!isRequiresAuth && user) {
    next({ path: routes.root });
  } else {
    next();
  }
});

export default router;
