import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tongquan3cx from "../views/Tongquan3cx.vue";
import Giacloud from "../views/Giacloud.vue";
import Tinhnang from "../views/Tinhnang.vue";
import Dauso from "../views/Dauso.vue";
import Tinhnangghiam from "../views/Tinhnangghiam.vue";
import Giadauso from "../views/Giadauso.vue";
import Smsbrandname from "../views/Smsbrandname.vue";
import Giasmsbrandname from "../views/Giasmsbrandname.vue";
import Thietbi from "../views/Thietbi.vue";
import Tintuc from "../views/Tintuc.vue";





Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tongquan3cx",
    name: "Tongquan3cx",
    component: Tongquan3cx,
  },
  {
    path: "/giacloud",
    name: "Giacloud",
    component: Giacloud,
  },
  {
    path: "/tinhnang",
    name: "Tinhnang",
    component: Tinhnang,
  },
  {
    path: "/dauso",
    name: "Dauso",
    component: Dauso,
  },
  {
    path: "/tinh-nang-ghi-am",
    name: "Tinhnangghiam",
    component: Tinhnangghiam,
  },
  {
    path: "/gia-dau-so",
    name: "Giadauso",
    component: Giadauso,
  },
  {
    path: "/sms-brandname",
    name: "Smsbrandname",
    component: Smsbrandname,
  },
  {
    path: "/gia-sms-brandname",
    name: "Giasmsbrandname",
    component: Giasmsbrandname,
  },
  {
    path: "/thiet-bi",
    name: "Thietbi",
    component: Thietbi,
  },
  {
    path: "/tin-tuc",
    name: "Tintuc",
    component: Tintuc,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
