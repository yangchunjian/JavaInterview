
## 解答

说道Lombok，可能会鲜为人知。但是在实际的开发中，它起到了很大的作用，话不多说，直入正题：

## 一、Lombok是什么

    现在看一下Lombok官方对其进行的解释：Lombok官网：https://projectlombok.org

![](../../../media/pictures/principle/lo1.png)


第一句话，Lombok项目是一种自动接通你的编辑器和构建工具的一个Java库。接着，不用再一次写额外的getter或者equals方法。翻译到这里其实就可以，后面是对Lombok早期应用的介绍。通过这两句话不难理解lombok其实就是帮助我们编写getter或者equals方法的一个“工具”。其实他的魅力并不在于帮助我们简单的编写对应的getter或者更多的方法，还有一点在于，当我们的字段发生改变时，lombok也会对相应的getter方法进行改变。

## 二、为什么要在自己的项目中使用Lombok

要回答这个问题，仅仅知道什么是Lombok是不够的。在讲解原理之前我想再提一点 ，这也是为什么要使用Lombok的关键所在：根据Lombok的使用规则，如果想要使用Lombok就需要删除在项目中（JavaBean）存在的已经生成的getter方法setter方法以及equals和hash方法，当然Lombok也提供了对打印日志的处理。这样在使用Lombok以后就会大大减少项目中的代码量，同时由于Lombok有自动修改的功能，这也提供了项目中代码的执行效率。

综上所述，使用Lombok的两点主要原因就是：

（1）、简化冗余的JavaBean代码；

（2）、大大提高JavaBean中方法的执行效率；

## 三、如何使用LomBok

在Lombok的官网中，有一个install选项，我们点开它会看到多种安装方式：

![](../../../media/pictures/principle/lo2.png)

大家可以根据自己的项目需求来选择使用哪种方式，这里以Maven为例：

点击Maven会看到一组坐标：

![](../../../media/pictures/principle/lo3.png)

根据它的提示我们将这一组坐标添加到我们的pom文件中：

![](../../../media/pictures/principle/lo4.png)

添加进去以后点击import change，等待Idea把jar包下载完就可以在项目中使用了。

## 四、Lombok实现原理

Lombok实现了JSR 269 API规范，javac在Java6开始支持这一规范，只要程序实现了该API，就能在javac运行的时候得到调用，那么Lombok在编译时使用的就是javac，具体流程如下：

![](../../../media/pictures/principle/lo5.png)

首先是项目的源代码文件，在经过编译处理以后，lombok会使用自己的抽象语法树去进行注解的匹配，如果在项目中的某一个类中使用了lombok中的注解，那么注解编译器就会自动去匹配项目中的注解对应到在lombok语法树中的注解文件，并经过自动编译匹配来生成对应类中的getter或者setter方法，达到简化代码的目的。执行顺序就如上图的叠放顺序。

## 五、Lombok注解详解

Lombok主要常用的注解有：@Data,@getter,@setter,@NoArgsConstructor,@AllArgsConstructor,@ToString,@EqualsAndHashCode,@Slf4j,@Log4j。我们一个一个来看：

@Data注解：在JavaBean或类JavaBean中使用，这个注解包含范围最广，它包含getter、setter、NoArgsConstructor注解，即当使用当前注解时，会自动生成包含的所有方法；

@getter注解：在JavaBean或类JavaBean中使用，使用此注解会生成对应的getter方法；

@setter注解：在JavaBean或类JavaBean中使用，使用此注解会生成对应的setter方法；

@NoArgsConstructor注解：在JavaBean或类JavaBean中使用，使用此注解会生成对应的无参构造方法；

@AllArgsConstructor注解：在JavaBean或类JavaBean中使用，使用此注解会生成对应的有参构造方法；

@ToString注解：在JavaBean或类JavaBean中使用，使用此注解会自动重写对应的toStirng方法；

@EqualsAndHashCode注解：在JavaBean或类JavaBean中使用，使用此注解会自动重写对应的equals方法和hashCode方法；

@Slf4j：在需要打印日志的类中使用，当项目中使用了slf4j打印日志框架时使用该注解，会简化日志的打印流程，只需调用info方法即可；

@Log4j：在需要打印日志的类中使用，当项目中使用了log4j打印日志框架时使用该注解，会简化日志的打印流程，只需调用info方法即可；

在使用以上注解需要处理参数时，处理方法如下（以@ToString注解为例，其他注解同@ToString注解）：

@ToString(exclude="column")

意义：排除column列所对应的元素，即在生成toString方法时不包含column参数；

@ToString(exclude={"column1","column2"})

意义：排除多个column列所对应的元素，其中间用英文状态下的逗号进行分割，即在生成toString方法时不包含多个column参数；

@ToString(of="column")

意义：只生成包含column列所对应的元素的参数的toString方法，即在生成toString方法时只包含column参数；；

@ToString(of={"column1","column2"})

意义：只生成包含多个column列所对应的元素的参数的toString方法，其中间用英文状态下的逗号进行分割，即在生成toString方法时只包含多个column参数；

## 六、使用Lombok可能需要注意的地方

（1）、当你的IDE是Idea时，要注意你的Idea是支持Lombok的，如果不支持请更换2017版本尝试。

（2）、在使用Lombok时，你的编辑器可能会报错，这时请在你的IDE中安装Lombok插件（如果使用的Idea则直接搜索Lombok插件，选择星级最高的，直接安装就是，其他Ide类同）。

（3）、参数的处理往往都是根据项目需求来进行，请妥善处理参数。

（4）、如果你无法访问Lombok官网，你可以从这篇博文中将Maven坐标照着自己打进去，或者你也可以访问Maven的中央仓库搜索Lombok，将Maven坐标复制进去即可。

