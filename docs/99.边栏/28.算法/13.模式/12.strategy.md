---
title: 策略模式
category: Java
author: JavaInterview.cn
categories: 
  - algorithm
tags: 
  - Java
  - 设计模式
  - 策略模式
date: 2022-04-25 23:18:00
permalink: /pages/39b756/
tag: 
  text: java
titleTag: Java
---


## 概念
定义一系列的算法,把每一个算法封装起来, 并且使它们可相互替换


## 思想
策略模式把`对象本身`和`运算规则`区分开来。分为三个部分：
    
    抽象策略类(Strategy):策略的抽象
    具体策略类(ConcreteStrategy):具体的策略实现
    具体应用入口类：

## 实现

第一步： 定义抽象策略类

    public interface  TravelStrategy {
        void goHome();
    }

第二步： 实现具体策略类

    // 步行
    public class FirstTravelStrategy implements TravelStrategy {
        @Override
        public void goHome() {
            System.out.println("我是步行回家的...");
        }
    }
    
    // 火车
    public class TwoTravelStrategy implements TravelStrategy {
        @Override
        public void goHome() {
            System.out.println("我是火车回家的...");
        }
    }
    
    // 飞机
    public class ThreeTravelStrategy implements TravelStrategy {
        @Override
        public void goHome() {
            System.out.println("我是飞机回家的...");
        }
    }
    
第三步：具体应用

    public class GoHome {
        TravelStrategy travelStrategy;
        public void setTravelStrategy(TravelStrategy travelStrategy) {
            this.travelStrategy = travelStrategy;
        }
        public void goHome() {
            travelStrategy.goHome();
        }
        public static void main(String args) {
            GoHome goHome = new GoHome();
            // 步行
    //        goHome.setTravelStrategy(new FirstTravelStrategy());
            // 火车
    //        goHome.setTravelStrategy(new TwoTravelStrategy());
            // 飞机
            goHome.setTravelStrategy(new ThreeTravelStrategy());
    
            goHome.goHome();
        }
    }

Spring实现策略模式
除了以上三步，Spring可以添加一个工厂类，用工厂创建需要执行的策略类，应用Spring依赖注入，省去我们自己创建策略类的过程。

修改如下：

之前第二步加上注解：

    // 步行
    @Service("walk")
    public class FirstTravelStrategy implements TravelStrategy {
        @Override
        public void goHome() {
            System.out.println("我是步行回家的...");
        }
    }

其他俩个同上，加上注解并添加名称`@Service(“train”)`，`@Service(“plane”)`

添加工厂类：

    @Service
    public class TravelStrategyFactory {
    
    // spring容器启动会讲对应TravelStrategy下策略类都加载到此map中
        @Autowired
        Map<String, TravelStrategy> bases = new ConcurrentHashMap<>();
    
        public TravelStrategy getTravelStrategy(String type) {
            TravelStrategy travelStrategy = bases.get(type);
            return travelStrategy;
        }
    
    }

最终应用类：

    public class GoHome {
        @Autowired
        TravelStrategyFactory travelStrategyFactory;
    
        TravelStrategy travelStrategy;
        public void setTravelStrategy(String type) {
            this.travelStrategy = travelStrategyFactory.getTravelStrategy(type);
        }
        public void goHome() {
            travelStrategy.goHome();
        }
        public static void main(String args) {
            GoHome goHome = new GoHome();
            // 步行
            //goHome.setTravelStrategy("wale");
            // 火车
            //goHome.setTravelStrategy("train");
            // 飞机
            goHome.setTravelStrategy("plane");
    
            goHome.goHome();
        }
    }

## 优缺点

    优点：算法可以自由切换，避免使用多重条件判断
    缺点：策略类会增多，所有策略类都需要对外暴露
