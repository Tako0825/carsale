export default {
    path: "/login",
    meta: { auto: true, title: "登录界面"},
    name: "login",
    component: () => import("@/layouts/login/IndexPage.vue"),
}