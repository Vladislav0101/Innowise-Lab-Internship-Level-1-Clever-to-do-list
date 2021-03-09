import Vue from "vue";
import VueRouter from "vue-router";
import Registration from "@/Components/Auth/Registration";
import SignIn from "@/Components/Auth/SignIn";
import Main from "@/Components/Main/Main";
import CreateTask from "@/Components/CreateTask/CreateTask";
import routes from "./routes";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "main",
      path: routes.root,
      component: Main
    },
    {
      name: "registration",
      path: routes.routes.registration,
      component: Registration
    },
    {
      name: "sign",
      path: routes.routes.sign,
      component: SignIn
    },
    {
      name: "create",
      path: routes.routes.create,
      component: CreateTask
    }
  ]
});
