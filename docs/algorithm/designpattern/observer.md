---
title: 观察者模式
date: 2022-05-23 21:41:19
permalink: /pages/cdfd31/
categories: 
  - algorithm
  - designpattern
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---


## 概念
定义了对象之间的一对多依赖，这样一来，当一个对象改变状态时，它的所有依赖者都会收到通知并自动更新。


## 思想
类图

![](../../../media/pictures/designpattern/observer_1.png)

    Subject：主题接口，对象使用此接口注册为观察者，或者把自己从观察者中删除。
    ConcreteSubjectA，ConcreteSubjectB：具体的主题。一个具体的主题总是实现主题接口，具体接口还实现了notifyObservers( )方法，此方法用于在状态改变时更新所有当前观察者。
    Observer：观察者接口，所有潜在的观察者都必须实现这个接口，当主题状态改变的时候，notify( )方法会被调用。
    ConcreteObserverA，ConcreteObserverB：具体的观察者。观察者必须注册具体的主题，以便接受更新。
观察者模式简单实现

观察者模式这种发布-订阅的形式我们可以拿微信公众号来举例，假设微信用户就是观察者，微信公众号是被观察者，有多个的微信用户关注了程序猿这个公众号，当这个公众号更新时就会通知这些订阅的微信用户。好了我们来看看用代码如何实现：

抽象观察者（Observer）里面定义了一个更新的方法：

    public interface Observer {
        public void update(String message);
    }

具体观察者（ConcrereObserver）微信用户是观察者，里面实现了更新的方法：

    public class WeixinUser implements Observer {
        // 微信用户名
        private String name;
        public WeixinUser(String name) {
            this.name = name;
        }
        @Override
        public void update(String message) {
            System.out.println(name + "-" + message);
        }
    
    }

抽象被观察者（Subject）抽象主题，提供了addObserver、deleteObserver、notifyObservers三个方法：

    public interface Subject {
    
        //添加观察者
        void addObserver(Observer observer);
        //删除观察者
        void deleteObserver(Observer observer);
        //通知所有的观察者有更新
        void notifyObservers(String message);
    
    }


具体被观察者（ConcreteSubject）微信公众号是具体主题（具体被观察者），里面存储了订阅该公众号的微信用户，并实现了抽象主题中的方法：

    public class WeixinSubject implements Subject {
    
        private List<Observer> observerList = new ArrayList<>();
    
        @Override
        public void addObserver(Observer observer) {
            observerList.add(observer);
        }
    
        @Override
        public void deleteObserver(Observer observer) {
            observerList.remove(observer);
        }
    
        @Override
        public void notifyObservers(String message) {
            for (Observer observer : observerList) {
                observer.update(message);
            }
        }
    }

客户端调用
    
    public class Client {
        public static void main(String[] args) {
            WeixinSubject mSubscriptionSubject=new WeixinSubject ();
            //创建微信用户
            WeixinUser user1=new WeixinUser("杨影枫");
            WeixinUser user2=new WeixinUser("月眉儿");
            WeixinUser user3=new WeixinUser("紫轩");
            //订阅公众号
            mSubscriptionSubject.addObserver(user1);
            mSubscriptionSubject.addObserver(user2);
            mSubscriptionSubject.addObserver(user3);
            //公众号更新发出消息给订阅的微信用户
            mSubscriptionSubject.notifyObservers("刘望舒的专栏更新了");
        }
    }

输出结果

    杨影枫-刘望舒的专栏更新了
    月眉儿-刘望舒的专栏更新了
    紫轩-刘望舒的专栏更新了

使用观察者模式的场景和优缺点

    使用场景
    
    关联行为场景，需要注意的是，关联行为是可拆分的，而不是“组合”关系。
    
    事件多级触发场景。
    
    跨系统的消息交换场景，如消息队列、事件总线的处理机制。
    
    优点
    
    解除耦合，让耦合的双方都依赖于抽象，从而使得各自的变换都不会影响另一边的变换。
    
    缺点
    
    在应用观察者模式时需要考虑一下开发效率和运行效率的问题，程序中包括一个被观察者、多个观察者，开发、调试等内容会比较复杂，而且在Java中消息的通知一般是顺序执行，那么一个观察者卡顿，会影响整体的执行效率，在这种情况下，一般会采用异步实现。

Android中的观察者模式
以RecyclerView和RecyclerView.Adapter.notifyDataSetChanged( )为例。

在使用RecyclerView的时候，我们在每次更新了RecyclerView的数据后通常调用notifyDataSetChanged()方法来更新我们的视图，那么我们就从这里开始，一步步跟进到源码看看RecyclerView的观察者模式是怎么实现的

     //RecyclerView的内部类
     public static abstract class Adapter<VH extends ViewHolder> {
     
       //注释0处，mObservable是被观察者，AdapterDataObservable继承了java内置的Observable类
       private final AdapterDataObservable mObservable = new AdapterDataObservable();
       
       //是否有观察者
       public final boolean hasObservers() {
            return mObservable.hasObservers();
       }
       
       //注册观察者
        public void registerAdapterDataObserver(AdapterDataObserver observer) {
            mObservable.registerObserver(observer);
        }
        
        //删除观察者
        public void unregisterAdapterDataObserver(AdapterDataObserver observer) {
            mObservable.unregisterObserver(observer);
        }
        
        //notifyDataSetChanged()方法
        public final void notifyDataSetChanged() {
             //注释1处，调用每一个观察者的onChanged( )方法
             mObservable.notifyChanged();
        }    
      ....
      //其他方法省略   
    }

注释0处，mObservable是被观察者，AdapterDataObservable继承了java内置的Observable类。

在注释1处，Adapter的notifyDataSetChanged()方法中，会调用mObservable的notifyChanged方法，内部会调用每一个观察者的onChanged( )方法。

    public void notifyChanged() {
        for (int i = mObservers.size() - 1; i >= 0; i--) {
            mObservers.get(i).onChanged();
        }
    }

当我们给RecyclerView设置适配器的时候

    public void setAdapter(Adapter adapter) {
          setLayoutFrozen(false);
          //内部会调用这个方法
          setAdapterInternal(adapter, false, true);
          requestLayout();
    }

    private void setAdapterInternal(Adapter adapter, boolean compatibleWithPrevious,
                boolean removeAndRecycleViews) {
        // ...
        if (adapter != null) {
            //adapter会注册一个观察者mObserver
            adapter.registerAdapterDataObserver(mObserver);
            adapter.onAttachedToRecyclerView(this);
        }
       //...
    }

这个mObserver是一个RecyclerView的一个变量。

    private final RecyclerViewDataObserver mObserver = new RecyclerViewDataObserver();


Adapter的registerAdapterDataObserver方法。

    public void registerAdapterDataObserver(@NonNull AdapterDataObserver observer) {
        //内部调用Observable的registerObserver方法，把观察者加入到观察者集合中
        mObservable.registerObserver(observer);
    }

Observable的registerObserver方法。

    public void registerObserver(T observer) {
        if (observer == null) {
            throw new IllegalArgumentException("The observer is null.");
        }
        synchronized(mObservers) {
            if (mObservers.contains(observer)) {
                throw new IllegalStateException("Observer " + observer + " is already registered.");
            }
            mObservers.add(observer);
        }
    }

    private class RecyclerViewDataObserver extends AdapterDataObserver {
         //...
        @Override
        public void onChanged() {
            assertNotInLayoutOrScroll(null);
            mState.mStructureChanged = true;
            setDataSetChangedAfterLayout();
            if (!mAdapterHelper.hasPendingUpdates()) {
                //重新布局,视图就会更新。
                requestLayout();
            }
        }
        //...
    }

梳理一下流程：当给RecyclerView设置适配器的Adapter时候,RecyclerView会向Adapter注册一个观察者RecyclerViewDataObserver mObserver。当我们的数据发生变化调用Adapter的notifyDataSetChanged( )方法的时候，会调用每一个观察者的onChanged( )方法。在onChanged( )方法中会调用requestLayout()方法会导致RecyclerView重新布局从而达到更新视图的作用。


