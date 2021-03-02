import Vue from "vue";
import VueRouter from "vue-router";
import Registration from "@/Components/Auth/Registration";
import SignIn from "@/Components/Auth/SignIn";
import Main from "@/Components/Main/Main";
import CreateTask from "@/Components/CreateTask/CreateTask";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "main",
      path: "/",
      component: Main
    },
    {
      name: "registration",
      path: "/registration",
      component: Registration
    },
    {
      name: "sign",
      path: "/sign-in",
      component: SignIn
    },
    {
      name: "create",
      path: "/create",
      component: CreateTask
    }
  ]
});
