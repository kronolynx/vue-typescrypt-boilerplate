// import Vue from 'vue'
import Vue from "vue"
import Router from "vue-router"
import Home from "../components/sections/Home.vue"
import Counter from "../components/sections/Counter.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/counter",
      name: "Counter",
      component: Counter
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
})
