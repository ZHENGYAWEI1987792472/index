import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello';
import unfind from "@/components/header/404";
import liulan from "@/components/header/liulan";
import register from "@/components/login/register";
import find from "@/components/login/find";
import paymethods from "@/components/myorder/paymethods";
import mycarcount from "@/components/mycar/mycarcount";
import mycar from "@/components/mycar/mycar";
import home from "@/components/homegroup/home";
import logon from "@/components/login/logon";
import datail from "@/components/header/datail";
import seach from "@/components/header/seach";
import groupbuy from "@/components/homegroup/group-buy";
import paysuccess from "@/components/myorder/paysuccess";
import mycarfamily from "@/components/mycarfamily/mycarfamily";
import mycarfamily1 from "@/components/mycarfamily/mycarfamily1";
import mycarfamily2 from "@/components/mycarfamily/mycarfamily2";
import mycarfamily3 from "@/components/mycarfamily/mycarfamily3";
import mycarfamily4 from "@/components/mycarfamily/mycarfamily4";
import mycarfamily5 from "@/components/mycarfamily/mycarfamily5";
import mycarfamily7 from "@/components/mycarfamily/mycarfamily7";
import mycarfamily6 from "@/components/mycarfamily/mycarfamily6";
import mycarfamily8 from "@/components/mycarfamily/mycarfamily8";
import myfamily8children1 from "@/components/myfamily8Children/myfamily8children1";
import myfamily8children2 from "@/components/myfamily8Children/myfamily8children2";
import myfamily8children3 from "@/components/myfamily8Children/myfamily8children3";
import myfamily5children1 from "@/components/myfamily8Children/myfamily5children1";
import myfamily5children2 from "@/components/myfamily8Children/myfamily5children2";
import myfamily1children1 from "@/components/myfamily1Children/myfamily1children1";
import myfamily1children2 from "@/components/myfamily1Children/myfamily1children2";
import myfamily1children3 from "@/components/myfamily1Children/myfamily1children3";
import myfamily1children4 from "@/components/myfamily1Children/myfamily1children4";
import myfamily1children5 from "@/components/myfamily1Children/myfamily1children5";
import myfamily2children1 from "@/components/myfamily2Children/myfamily2children1";
import myfamily2children2 from "@/components/myfamily2Children/myfamily2children2";
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/zyhome',
            component: home
        },
        {
           path : "/zyliulan",
           component : liulan
        },
        {
            path: '/',
            component: home
        },
        {
            path: '/zydetail',
            component: datail
        },

        {
            path: '/zyh',
            component: home
        },
        {
            path: '/zyseach',
            component: seach
        },
        ,
        {
            path: '/zyregister',
            component: register
        },
        {
            path: '/zyreg',
            component: register
        },
        {
            path: '/paymethods',
            component: paymethods
        },
        {
            path: '/lookcarlist',
            component: mycar
        },
        {
            path: '/paysuccess',
            component: paysuccess
        },
        {
            path: '/lookcar',
            component: mycar
        },
        {
            path: '/zygroupbuy',
            component: groupbuy
        },
        {
            path: '/reg',
            component: register
        },
        {
            path: '/logon',
            component: logon
        },
        {
            path: '/zylogon',
            component: logon,
            children: [{
                path: '/',
                component: home
            }]
        },
        {
            path: '/zyfind',
            component: find

        },
        {
            path: '/zymycount',
            component: mycarfamily,
            children: [{
                    path: "/",
                    component: mycarfamily1,
                    children: [{
                            path: "/",
                            component: myfamily1children1
                        },
                        {
                            path: "/zyquanbu",
                            component: myfamily1children1
                        },
                        {
                            path: "/zyweishiyong",
                            component: myfamily1children2
                        },
                        {
                            path: "/zyyiguoqi",
                            component: myfamily1children3
                        },
                        {
                            path: "/zyyituikuan",
                            component: myfamily1children4
                        },
                        {
                            path: "/zydaipinjia",
                            component: myfamily1children5
                        }
                    ]
                },
                {
                    path: "/yworder",
                    component: mycarfamily1,
                    children: [{
                            path: "/",
                            component: myfamily1children1
                        },
                        {
                            path: "/zyquanbu",
                            component: myfamily1children1
                        },
                        {
                            path: "/zyweishiyong",
                            component: myfamily1children2
                        },
                        {
                            path: "/zyyiguoqi",
                            component: myfamily1children3
                        },
                        {
                            path: "/zyyituikuan",
                            component: myfamily1children4
                        },
                        {
                            path: "/zydaipinjia",
                            component: myfamily1children5
                        }
                    ]

                },
                {
                    path: "/ywappraise",
                    component: mycarfamily2,
                    children: [{
                            path: "/",
                            component: myfamily2children1
                        },
                        {
                            path: "/zyping",
                            component: myfamily2children1
                        }, {
                            path: "/zyyipping",
                            component: myfamily2children2
                        }

                    ]
                },
                {
                    path: "/ywgroup",
                    component: mycarfamily3
                },
                {
                    path: "/ywbalance",
                    component: mycarfamily4
                },
                {
                    path: "/ywvoucher",
                    component: mycarfamily6
                },
                {
                    path: "/ywchongzhi",
                    component: mycarfamily5,
                    children: [{
                            path: "/",
                            component: myfamily5children1,
                        },
                        {
                            path: "/ywchong",
                            component: myfamily5children1,
                        },
                        {
                            path: "/ywti",
                            component: myfamily5children2,
                        }
                    ]
                },
                {
                    path: "/ywjifen",
                    component: mycarfamily7
                },
                {
                    path: "/ywaccount",
                    component: mycarfamily8,
                    children: [{
                            path: "/",
                            component: myfamily8children1
                        },
                        {
                            path: "/ywbasemess",
                            component: myfamily8children1
                        }, {
                            path: "/ywemailmess",
                            component: myfamily8children2
                        }, {
                            path: "/yweaddresmess",
                            component: myfamily8children3
                        }
                    ]
                }

            ]
        },
        {
            path: "*",
            component: unfind
        }
    ]
})