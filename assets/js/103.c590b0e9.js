(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{763:function(e,t,a){"use strict";a.r(t);var r=a(10),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[e._v("#")]),e._v(" 概念")]),e._v(" "),a("p",[e._v("定义一系列的算法,把每一个算法封装起来, 并且使它们可相互替换")]),e._v(" "),a("h2",{attrs:{id:"思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思想"}},[e._v("#")]),e._v(" 思想")]),e._v(" "),a("p",[e._v("策略模式把"),a("code",[e._v("对象本身")]),e._v("和"),a("code",[e._v("运算规则")]),e._v("区分开来。分为三个部分：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("抽象策略类(Strategy):策略的抽象\n具体策略类(ConcreteStrategy):具体的策略实现\n具体应用入口类：\n")])])]),a("h2",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[e._v("#")]),e._v(" 实现")]),e._v(" "),a("p",[e._v("第一步： 定义抽象策略类")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public interface  TravelStrategy {\n    void goHome();\n}\n")])])]),a("p",[e._v("第二步： 实现具体策略类")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('// 步行\npublic class FirstTravelStrategy implements TravelStrategy {\n    @Override\n    public void goHome() {\n        System.out.println("我是步行回家的...");\n    }\n}\n\n// 火车\npublic class TwoTravelStrategy implements TravelStrategy {\n    @Override\n    public void goHome() {\n        System.out.println("我是火车回家的...");\n    }\n}\n\n// 飞机\npublic class ThreeTravelStrategy implements TravelStrategy {\n    @Override\n    public void goHome() {\n        System.out.println("我是飞机回家的...");\n    }\n}\n')])])]),a("p",[e._v("第三步：具体应用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public class GoHome {\n    TravelStrategy travelStrategy;\n    public void setTravelStrategy(TravelStrategy travelStrategy) {\n        this.travelStrategy = travelStrategy;\n    }\n    public void goHome() {\n        travelStrategy.goHome();\n    }\n    public static void main(String args) {\n        GoHome goHome = new GoHome();\n        // 步行\n//        goHome.setTravelStrategy(new FirstTravelStrategy());\n        // 火车\n//        goHome.setTravelStrategy(new TwoTravelStrategy());\n        // 飞机\n        goHome.setTravelStrategy(new ThreeTravelStrategy());\n\n        goHome.goHome();\n    }\n}\n")])])]),a("p",[e._v("Spring实现策略模式\n除了以上三步，Spring可以添加一个工厂类，用工厂创建需要执行的策略类，应用Spring依赖注入，省去我们自己创建策略类的过程。")]),e._v(" "),a("p",[e._v("修改如下：")]),e._v(" "),a("p",[e._v("之前第二步加上注解：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('// 步行\n@Service("walk")\npublic class FirstTravelStrategy implements TravelStrategy {\n    @Override\n    public void goHome() {\n        System.out.println("我是步行回家的...");\n    }\n}\n')])])]),a("p",[e._v("其他俩个同上，加上注解并添加名称"),a("code",[e._v("@Service(“train”)")]),e._v("，"),a("code",[e._v("@Service(“plane”)")])]),e._v(" "),a("p",[e._v("添加工厂类：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("@Service\npublic class TravelStrategyFactory {\n\n// spring容器启动会讲对应TravelStrategy下策略类都加载到此map中\n    @Autowired\n    Map<String, TravelStrategy> bases = new ConcurrentHashMap<>();\n\n    public TravelStrategy getTravelStrategy(String type) {\n        TravelStrategy travelStrategy = bases.get(type);\n        return travelStrategy;\n    }\n\n}\n")])])]),a("p",[e._v("最终应用类：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('public class GoHome {\n    @Autowired\n    TravelStrategyFactory travelStrategyFactory;\n\n    TravelStrategy travelStrategy;\n    public void setTravelStrategy(String type) {\n        this.travelStrategy = travelStrategyFactory.getTravelStrategy(type);\n    }\n    public void goHome() {\n        travelStrategy.goHome();\n    }\n    public static void main(String args) {\n        GoHome goHome = new GoHome();\n        // 步行\n        //goHome.setTravelStrategy("wale");\n        // 火车\n        //goHome.setTravelStrategy("train");\n        // 飞机\n        goHome.setTravelStrategy("plane");\n\n        goHome.goHome();\n    }\n}\n')])])]),a("h2",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[e._v("#")]),e._v(" 优缺点")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("优点：算法可以自由切换，避免使用多重条件判断\n缺点：策略类会增多，所有策略类都需要对外暴露\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);