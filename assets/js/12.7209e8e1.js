(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1087:function(n,t,e){n.exports=e.p+"assets/img/dfa1.5692774b.png"},1088:function(n,t,e){n.exports=e.p+"assets/img/dfa2.96af82e2.png"},1089:function(n,t,e){n.exports=e.p+"assets/img/dfa3.0168ebb4.png"},1090:function(n,t,e){n.exports=e.p+"assets/img/dfa4.1af59700.png"},1091:function(n,t,e){n.exports=e.p+"assets/img/dfa5.7005e11d.png"},1092:function(n,t,e){n.exports=e.p+"assets/img/dfa6.a3a54d73.png"},1093:function(n,t,e){n.exports=e.p+"assets/img/dfa7.1a5f3b3b.png"},1094:function(n,t,e){n.exports=e.p+"assets/img/trie1.88d219a0.png"},2156:function(n,t,e){"use strict";e.r(t);var a=e(12),i=Object(a.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[n._v("#")]),n._v(" 解答")]),n._v(" "),a("h2",{attrs:{id:"dfa算法简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dfa算法简介"}},[n._v("#")]),n._v(" DFA算法简介")]),n._v(" "),a("p",[n._v("在实现文字过滤的算法中，DFA是唯一比较好的实现算法。DFA即Deterministic Finite Automaton，也就是确定有穷自动机，它是是通过event和当前的state得到下一个state，即event+state=nextstate。下图展示了其状态的转换")]),n._v(" "),a("p",[a("img",{attrs:{src:e(1087),alt:""}})]),n._v(" "),a("p",[n._v("DFA，全称 Deterministic Finite Automaton")]),n._v(" "),a("p",[n._v("即确定有穷自动机：从一个状态通过一系列的事件转换到另一个状态，即 state -> event\n-> state。")]),n._v(" "),a("p",[n._v("确定：状态以及引起状态转换的事件都是可确定的，不存在“意外”。")]),n._v(" "),a("p",[n._v("有穷：状态以及事件的数量都是可穷举的。")]),n._v(" "),a("p",[n._v("我们可以将每个文本片段作为状态，例如“匹配关键词”可拆分为“匹”、“匹配”、“匹配关”、“匹配关键”和“匹配关键词”五个文本片段。")]),n._v(" "),a("p",[a("img",{attrs:{src:e(1088),alt:""}})]),n._v(" "),a("p",[n._v("【过程】：")]),n._v(" "),a("p",[n._v("初始状态为空，当触发事件“匹”时转换到状态“匹”；")]),n._v(" "),a("p",[n._v("触发事件“配”，转换到状态“匹配”；")]),n._v(" "),a("p",[n._v("依次类推，直到转换为最后一个状态“匹配关键词”。")]),n._v(" "),a("p",[n._v("再让我们考虑多个关键词的情况，例如“匹配算法”、“匹配关键词”以及“信息抽取”。")]),n._v(" "),a("p",[a("img",{attrs:{src:e(1089),alt:""}})]),n._v(" "),a("p",[n._v("在实现敏感词过滤的算法中，我们必须要减少运算，而DFA在DFA算法中几乎没有什么计算，有的只是状态的转换。")]),n._v(" "),a("h2",{attrs:{id:"java实现dfa算法实现敏感词过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java实现dfa算法实现敏感词过滤"}},[n._v("#")]),n._v(" Java实现DFA算法实现敏感词过滤")]),n._v(" "),a("p",[a("strong",[n._v("测试方法")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('package algorithm.string.dfa;\n \nimport java.util.HashSet;\nimport java.util.List;\nimport java.util.Set;\n \npublic class Main {\n \n    public static void main(String[] args) {\n \n        Set<String> set=new HashSet<>();\n        set.add("大中华");\n        set.add("大中华帝国");\n        set.add("大汉民族");\n        set.add("日本人");\n        set.add("日本鬼子");\n        \n        DFAUtil dfa=new DFAUtil();\n        dfa.createDFAHashMap(set);\n        Set<String> result=dfa.getSensitiveWordByDFAMap("大中华帝国和日本人",1);\n        System.out.println("敏感词有"+result.size()+"个");\n        for(String string:result){\n            System.out.println("违背敏感词："+string);\n        }\n        \n        \n    }\n \n}\n')])])]),a("p",[a("strong",[n._v("创建DFAMap")])]),n._v(" "),a("p",[n._v("在Java中实现敏感词过滤的关键就是DFA算法的实现。首先我们对上图进行剖析。在这过程中我们认为下面这种结构会更加清晰明了。")]),n._v(" "),a("p",[a("img",{attrs:{src:e(1090),alt:""}})]),n._v(" "),a("p",[n._v("同时这里没有状态转换，没有动作，有的只是Query（查找）。我们可以认为，通过S query U、V，通过U query V、P，通过V query U P。通过这样的转变我们可以将状态的转换转变为使用Java集合的查找。")]),n._v(" "),a("p",[n._v("诚然，加入在我们的敏感词库中存在如下几个敏感词：日本人、日本鬼子、毛.泽.东。那么我需要构建成一个什么样的结构呢？")]),n._v(" "),a("p",[n._v("首先：query 日 ---\x3e {本}、query 本 ---\x3e{人、鬼子}、query 人 ---\x3e{null}、query 鬼 ---\x3e {子}。形如下结构：")]),n._v(" "),a("p",[a("img",{attrs:{src:e(1091),alt:""}})]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("     下面我们在对这图进行扩展：\n")])])]),a("p",[a("img",{attrs:{src:e(1092),alt:""}})]),n._v(" "),a("p",[n._v("这样我们就将我们的敏感词库构建成了一个类似与一颗一颗的树，这样我们判断一个词是否为敏感词时就大大减少了检索的匹配范围。比如我们要判断日本人，根据第一个字我们就可以确认需要检索的是那棵树，然后再在这棵树中进行检索。")]),n._v(" "),a("p",[n._v("但是如何来判断一个敏感词已经结束了呢？利用标识位来判断。")]),n._v(" "),a("p",[n._v("所以对于这个关键是如何来构建一棵棵这样的敏感词树。下面我已Java中的HashMap为例来实现DFA算法。具体过程如下：")]),n._v(" "),a("p",[n._v("日本人，日本鬼子为例")]),n._v(" "),a("p",[n._v("1、在hashMap中查询“日”看其是否在hashMap中存在，如果不存在，则证明已“日”开头的敏感词还不存在，则我们直接构建这样的一棵树。跳至3。")]),n._v(" "),a("p",[n._v('2、如果在hashMap中查找到了，表明存在以“日”开头的敏感词，设置hashMap = hashMap.get("日")，跳至1，依次匹配“本”、“人”。')]),n._v(" "),a("p",[n._v("3、判断该字是否为该词中的最后一个字。若是表示敏感词结束，设置标志位isEnd = 1，否则设置标志位isEnd = 0；")]),n._v(" "),a("p",[a("img",{attrs:{src:e(1093),alt:""}})]),n._v(" "),a("p",[n._v("程序实现如下：")]),n._v(" "),a("p",[n._v("注意：本文的编写和代码的编写参考了https://blog.csdn.net/chenssy/article/details/26961957")]),n._v(" "),a("p",[n._v("但是在代码上对它进行了改进，修复了几个bug")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('/*{日=\n * \t{本=\n * \t\t{人={isEnd=1}, \n * \t\t鬼=\n * \t\t\t{子={isEnd=1}, \n * \t\t\tisEnd=0}, \n * \t\tisEnd=0}, \n * \tisEnd=0}, \n * \n * 大=\n * \t{汉=\n * \t\t{民={isEnd=0, \n * \t\t\t族={isEnd=1}}, \n * \t\tisEnd=0}, \n * \tisEnd=0, \n * \t中={isEnd=0, \n * \t\t华={isEnd=1, \n * \t\t\t帝={isEnd=0, \n * \t\t\t\t国={isEnd=1}}}}}}*/\n\n/**set作为敏感词，创建出对应的dfa的Map，以供检验敏感词\n * @param set\n */\npublic void createDFAHashMap(Set<String> set){\n\tHashMap<String, Object> nowMap;\n\t//根据set的大小，创建map的大小\n\tdfaMap=new HashMap<>(set.size());\n\t//对set里的字符串进行循环\n\tfor(String key:set){\n\t\t//对每个字符串最初，nowMap就是dfaMap\n\t\tnowMap=dfaMap;\t\t\t\n\t\tfor(int i=0;i<key.length();i++){\n\t\t\t//一个个字符循环\n\t\t\tString nowChar=String.valueOf(key.charAt(i));\n\t\t\t//根据nowChar得到nowMap里面对应的value\n\t\t\tHashMap<String, Object> map=(HashMap<String, Object>)nowMap.get(nowChar);\n\t\t\t//如果map为空，则说明nowMap里面没有以nowChar开头的东西，则创建一个新的hashmap，\n\t\t\t//以nowChar为key，新的map为value，放入nowMap\n\t\t\tif(map==null){\n\t\t\t\tmap=new HashMap<String,Object>();\n\t\t\t\tnowMap.put(nowChar, map);\n\t\t\t}\t\t\n\t\t\t//nowMap=map，就是nowChar对应的对象\n\t\t\tnowMap=map;\n\t\t\t//最后在nowMap里设置isEnd\n\t\t\t//如果nowMap里面已经有isEnd，并且为1，说明以前已经有关键字了，就不再设置isEnd\n\t\t\t//因为如果没有这一步，大中华和大中华帝国，先设置大中华\n\t\t\t//在大中华帝国设置的时候，华对应的map有isEnd=1，如果这时对它覆盖，就会isEnd=0，导致大中华这个关键字失效\n\t\t\tif(nowMap.containsKey("isEnd")&&nowMap.get("isEnd").equals("1")){\n\t\t\t\tcontinue;\n\t\t\t}\t\t\t\t\n\t\t\tif(i!=key.length()-1){\n\t\t\t\tnowMap.put("isEnd", "0");\n\t\t\t}\n\t\t\telse{\n\t\t\t\tnowMap.put("isEnd", "1");\n\t\t\t}\t\t\t\t\t\t\t\t\n\t\t}\t\t\t\t\t\t\n\t}\n\tSystem.out.println(dfaMap);\n}\n')])])]),a("p",[n._v("得到的结果是")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('{\n  "日": {\n    "本": {\n      "人": {\n        "isEnd": 1\n      },\n      "鬼": {\n        "子": {\n          "isEnd": 1\n        },\n        "isEnd": 0\n      },\n      "isEnd": 0\n    },\n    "isEnd": 0\n  },\n  "大": {\n    "汉": {\n      "民": {\n        "isEnd": 0,\n        "族": {\n          "isEnd": 1\n        }\n      },\n      "isEnd": 0\n    },\n    "isEnd": 0,\n    "中": {\n      "isEnd": 0,\n      "华": {\n        "isEnd": 1,\n        "帝": {\n          "isEnd": 0,\n          "国": {\n            "isEnd": 1\n          }\n        }\n      }\n    }\n  }\n}\n')])])]),a("p",[n._v("具体可以看上面的注释")]),n._v(" "),a("p",[a("strong",[n._v("根据DFAMap进行检验")])]),n._v(" "),a("p",[n._v("敏感词库我们一个简单的方法给实现了，那么如何实现检索呢？检索过程无非就是hashMap的get实现，找到就证明该词为敏感词，否则不为敏感词。过程如下：假如我们匹配“中国人民万岁”。")]),n._v(" "),a("p",[n._v('1、第一个字“中”，我们在hashMap中可以找到。得到一个新的map = hashMap.get("")。')]),n._v(" "),a("p",[n._v("2、如果map == null，则不是敏感词。否则跳至3")]),n._v(" "),a("p",[n._v("3、获取map中的isEnd，通过isEnd是否等于1来判断该词是否为最后一个。如果isEnd == 1表示该词为敏感词，更新resultLength否则跳至1。")]),n._v(" "),a("p",[n._v("通过这个步骤我们可以判断“中国人民”为敏感词，但是如果我们输入“中国女人”则不是敏感词了。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('HashMap<String, Object> dfaMap;\n\npublic static final int minMatchType=1;\n\npublic static final int maxMatchType=2;\n\n/** 用创建的dfaMap，根据matchType检验字符串string是否包含敏感词，返回包含所有对于敏感词的set\n * @param string 要检查是否有敏感词在内的字符串\n * @param matchType 检查类型，如大中华帝国牛逼对应大中华和大中华帝国两个关键字，1为最小检查，会检查出大中华，2位最大，会检查出大中华帝国\t\n * @return\n */\npublic Set<String> getSensitiveWordByDFAMap(String string,int matchType){\n\tSet<String> set=new HashSet<>();\n\tfor(int i=0;i<string.length();i++){\n\t\t//matchType是针对同一个begin的后面，在同一个begin匹配最长的还是最短的敏感词\n\t\tint length=getSensitiveLengthByDFAMap(string,i,matchType);\n\t\tif(length>0){\n\t\t\tset.add(string.substring(i,i+length));\n\t\t\t//这个对应的是一个敏感词内部的关键字（不包括首部），如果加上，大中华帝国，对应大中华和中华两个敏感词，只会对应大中华而不是两个\n\t\t\t//i=i+length-1;//减1的原因，是因为for会自增\n\t\t}\n\t}\t\t\n\treturn set;\n}\n\n/**如果存在，则返回敏感词字符的长度，不存在返回0\n * @param string\n * @param beginIndex\n * @param matchType  1：最小匹配规则，2：最大匹配规则\n * @return\n */\npublic int getSensitiveLengthByDFAMap(String string,int beginIndex,int matchType){\n\t//当前匹配的长度\n\tint nowLength=0;\n\t//最终匹配敏感词的长度，因为匹配规则2，如果大中华帝，对应大中华，大中华帝国，在华的时候，nowLength=3，因为是最后一个字，将nowLenth赋给resultLength\n\t//然后在帝的时候，now=4，result=3，然后不匹配，resultLength就是上一次最大匹配的敏感词的长度\n\tint resultLength=0;\n\tHashMap<String, Object> nowMap=dfaMap;\n\tfor(int i=beginIndex;i<string.length();i++){\n\t\tString nowChar=String.valueOf(string.charAt(i));\n\t\t//根据nowChar得到对应的map，并赋值给nowMap\n\t\tnowMap=(HashMap<String, Object>)nowMap.get(nowChar);\n\t\t//nowMap里面没有这个char，说明不匹配，直接返回\n\t\tif(nowMap==null){\n\t\t\tbreak;\n\t\t}\n\t\telse{\n\t\t\tnowLength++;\n\t\t\t//如果现在是最后一个，更新resultLength\n\t\t\tif("1".equals(nowMap.get("isEnd"))){\n\t\t\t\tresultLength=nowLength;\n\t\t\t\t//如果匹配模式是最小，直接匹配到，退出\n\t\t\t\t//匹配模式是最大，则继续匹配，resultLength保留上一次匹配到的length\n\t\t\t\tif(matchType==minMatchType){\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\t\t\n\treturn resultLength;\n}\n')])])]),a("p",[n._v("这里的改进是")]),n._v(" "),a("p",[n._v("取消了i的直接增加")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("//这个对应的是一个敏感词内部的关键字（不包括首部），如果加上，大中华帝国，对应大中华和中华两个敏感词，只会对应大中华而不是两个\n//i=i+length-1;//减1的原因，是因为for会自增\n")])])]),a("p",[n._v("加入了resultLength")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("//最终匹配敏感词的长度，因为匹配规则2，如果大中华帝，对应大中华，大中华帝国，在华的时候，nowLength=3，因为是最后一个字，将nowLenth赋给resultLength\n//然后在帝的时候，now=4，result=3，然后不匹配，resultLength就是上一次最大匹配的敏感词的长度\nint resultLength=0;\n")])])]),a("p",[n._v("这里面字符串为 大中华帝国和日本人")]),n._v(" "),a("p",[n._v("如果最小匹配，对应")]),n._v(" "),a("p",[n._v("敏感词有2个")]),n._v(" "),a("ul",[a("li",[n._v("违背敏感词：大中华")]),n._v(" "),a("li",[n._v("违背敏感词：日本人")])]),n._v(" "),a("p",[n._v("最大匹配，对应")]),n._v(" "),a("p",[n._v("敏感词有2个")]),n._v(" "),a("ul",[a("li",[n._v("违背敏感词：大中华帝国")]),n._v(" "),a("li",[n._v("违背敏感词：日本人")])]),n._v(" "),a("p",[n._v("完整代码")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('package algorithm.string.dfa;\n \nimport java.util.HashMap;\nimport java.util.HashSet;\nimport java.util.List;\nimport java.util.Set;\n \npublic class DFAUtil {\n    \n    HashMap<String, Object> dfaMap;\n    \n    public static final int minMatchType=1;\n    \n    public static final int maxMatchType=2;\n    \n    /*{日=\n     * \t{本=\n     * \t\t{人={isEnd=1}, \n     * \t\t鬼=\n     * \t\t\t{子={isEnd=1}, \n     * \t\t\tisEnd=0}, \n     * \t\tisEnd=0}, \n     * \tisEnd=0}, \n     * \n     * 大=\n     * \t{汉=\n     * \t\t{民={isEnd=0, \n     * \t\t\t族={isEnd=1}}, \n     * \t\tisEnd=0}, \n     * \tisEnd=0, \n     * \t中={isEnd=0, \n     * \t\t华={isEnd=1, \n     * \t\t\t帝={isEnd=0, \n     * \t\t\t\t国={isEnd=1}}}}}}*/\t\n    /**set作为敏感词，创建出对应的dfa的Map，以供检验敏感词\n     * @param set\n     */\n    public void createDFAHashMap(Set<String> set){\n        HashMap<String, Object> nowMap;\n        //根据set的大小，创建map的大小\n        dfaMap=new HashMap<>(set.size());\n        //对set里的字符串进行循环\n        for(String key:set){\n            //对每个字符串最初，nowMap就是dfaMap\n            nowMap=dfaMap;\t\t\t\n            for(int i=0;i<key.length();i++){\n                //一个个字符循环\n                String nowChar=String.valueOf(key.charAt(i));\n                //根据nowChar得到nowMap里面对应的value\n                HashMap<String, Object> map=(HashMap<String, Object>)nowMap.get(nowChar);\n                //如果map为空，则说明nowMap里面没有以nowChar开头的东西，则创建一个新的hashmap，\n                //以nowChar为key，新的map为value，放入nowMap\n                if(map==null){\n                    map=new HashMap<String,Object>();\n                    nowMap.put(nowChar, map);\n                }\t\t\n                //nowMap=map，就是nowChar对应的对象\n                nowMap=map;\n                //最后在nowMap里设置isEnd\n                //如果nowMap里面已经有isEnd，并且为1，说明以前已经有关键字了，就不再设置isEnd\n                //因为如果没有这一步，大中华和大中华帝国，先设置大中华\n                //在大中华帝国设置的时候，华对应的map有isEnd=1，如果这时对它覆盖，就会isEnd=0，导致大中华这个关键字失效\n                if(nowMap.containsKey("isEnd")&&nowMap.get("isEnd").equals("1")){\n                    continue;\n                }\t\t\t\t\n                if(i!=key.length()-1){\n                    nowMap.put("isEnd", "0");\n                }\n                else{\n                    nowMap.put("isEnd", "1");\n                }\t\t\t\t\t\t\t\t\n            }\t\t\t\t\t\t\n        }\n        System.out.println(dfaMap);\n    }\n    \n    \n    /** 用创建的dfaMap，根据matchType检验字符串string是否包含敏感词，返回包含所有对于敏感词的set\n     * @param string 要检查是否有敏感词在内的字符串\n     * @param matchType 检查类型，如大中华帝国牛逼对应大中华和大中华帝国两个关键字，1为最小检查，会检查出大中华，2位最大，会检查出大中华帝国\t\n     * @return\n     */\n    public Set<String> getSensitiveWordByDFAMap(String string,int matchType){\n        Set<String> set=new HashSet<>();\n        for(int i=0;i<string.length();i++){\n            //matchType是针对同一个begin的后面，在同一个begin匹配最长的还是最短的敏感词\n            int length=getSensitiveLengthByDFAMap(string,i,matchType);\n            if(length>0){\n                set.add(string.substring(i,i+length));\n                //这个对应的是一个敏感词内部的关键字（不包括首部），如果加上，大中华帝国，对应大中华和中华两个敏感词，只会对应大中华而不是两个\n                //i=i+length-1;//减1的原因，是因为for会自增\n            }\n        }\t\t\n        return set;\n    }\n    \n    /**如果存在，则返回敏感词字符的长度，不存在返回0\n     * @param string\n     * @param beginIndex\n     * @param matchType  1：最小匹配规则，2：最大匹配规则\n     * @return\n     */\n    public int getSensitiveLengthByDFAMap(String string,int beginIndex,int matchType){\n        //当前匹配的长度\n        int nowLength=0;\n        //最终匹配敏感词的长度，因为匹配规则2，如果大中华帝，对应大中华，大中华帝国，在华的时候，nowLength=3，因为是最后一个字，将nowLenth赋给resultLength\n        //然后在帝的时候，now=4，result=3，然后不匹配，resultLength就是上一次最大匹配的敏感词的长度\n        int resultLength=0;\n        HashMap<String, Object> nowMap=dfaMap;\n        for(int i=beginIndex;i<string.length();i++){\n            String nowChar=String.valueOf(string.charAt(i));\n            //根据nowChar得到对应的map，并赋值给nowMap\n            nowMap=(HashMap<String, Object>)nowMap.get(nowChar);\n            //nowMap里面没有这个char，说明不匹配，直接返回\n            if(nowMap==null){\n                break;\n            }\n            else{\n                nowLength++;\n                //如果现在是最后一个，更新resultLength\n                if("1".equals(nowMap.get("isEnd"))){\n                    resultLength=nowLength;\n                    //如果匹配模式是最小，直接匹配到，退出\n                    //匹配模式是最大，则继续匹配，resultLength保留上一次匹配到的length\n                    if(matchType==minMatchType){\n                        break;\n                    }\n                }\n            }\n        }\t\t\n        return resultLength;\n    }\n}\n')])])]),a("p",[n._v("与前缀树的类似与不同")]),n._v(" "),a("p",[a("strong",[n._v("类似")])]),n._v(" "),a("p",[n._v("思路类似，都是一个个节点，每个节点包含通往下一群节点的容器。")]),n._v(" "),a("p",[n._v("不同")]),n._v(" "),a("p",[a("strong",[n._v("前缀树：")])]),n._v(" "),a("p",[n._v("这种java实现的下一个节点的容器是new TreeNode[26]，同时还有path（经过这个节点的数量），end（以这个节点结尾的数量），倾向于查找字符串的个数和前缀的个数")]),n._v(" "),a("p",[a("strong",[n._v("dfa：")])]),n._v(" "),a("p",[n._v("java实现的容器是Map<String,Object>，没有path，只有key=isEnd，倾向于查询这个字符串中是否包含敏感词")]),n._v(" "),a("p",[n._v("其实两者本来是一个源头，只是为了不同的目的，从而node的构造不同")]),n._v(" "),a("p",[a("strong",[n._v("复杂度")])]),n._v(" "),a("p",[n._v("n个敏感词，敏感词的平均长度是k，被查询字符串长度O(m)")]),n._v(" "),a("p",[n._v("时间复杂度  创建dfaMap，O(nk)，，查询是否有敏感词，O(mk)")]),n._v(" "),a("p",[n._v("空间复杂度  O(nk)")]),n._v(" "),a("h2",{attrs:{id:"trie前缀树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trie前缀树"}},[n._v("#")]),n._v(" Trie前缀树")]),n._v(" "),a("h2",{attrs:{id:"前缀树的概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前缀树的概述"}},[n._v("#")]),n._v(" 前缀树的概述")]),n._v(" "),a("p",[n._v("前缀树又名字典树，单词查找树，Trie树，是一种多路树形结构，是哈希树的变种，和hash效率有一拼，是一种用于快速检索的多叉树结构。")]),n._v(" "),a("p",[n._v("典型应用是用于统计和排序大量的字符串（但不仅限于字符串），所以经常被搜索引擎系统用于文本词频统计。它的优点是：最大限度地减少无谓的字符串比较，查询效率比哈希表高。")]),n._v(" "),a("p",[n._v("Trie的核心思想是空间换时间。利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的。")]),n._v(" "),a("p",[n._v("Trie树也有它的缺点，Trie树的内存消耗非常大。")]),n._v(" "),a("p",[n._v("性质：不同字符串的相同前缀只保存一份。")]),n._v(" "),a("p",[n._v("操作：查找，插入，删除。")]),n._v(" "),a("p",[n._v("举个栗子：给出一组单词，inn, int, at, age, adv,ant, 我们可以得到下面的Trie：")]),n._v(" "),a("p",[a("img",{attrs:{src:e(1094),alt:""}})]),n._v(" "),a("p",[n._v("从上面可以发现一些Trie树的特性：")]),n._v(" "),a("p",[n._v("1）根节点不包含字符，除根节点外的每一个子节点都包含一个字符。")]),n._v(" "),a("p",[n._v("2）从根节点到某一节点的路径上的字符连接起来，就是该节点对应的字符串。")]),n._v(" "),a("p",[n._v("3）每个节点的所有子节点包含的字符都不相同。")]),n._v(" "),a("p",[n._v("4）每条边对应一个字母。每个节点对应一项前缀。叶节点对应最长前缀，即单词本身。")]),n._v(" "),a("p",[n._v('单词inn与单词int有共同的前缀“in”, 因此他们共享左边的一条分支，root->i->in。同理，ate, age, adv, 和ant共享前缀"a"，所以他们共享从根节点到节点"a"的边。')]),n._v(" "),a("p",[n._v("查询操纵非常简单。比如要查找int，顺着路径i -> in -> int就找到了。")]),n._v(" "),a("p",[n._v("搭建Trie的基本算法也很简单，无非是逐一把每则单词的每个字母插入Trie。插入前先看前缀是否存在。如果存在，就共享，否则创建对应的节点和边。比如要插入单词add，就有下面几步：")]),n._v(" "),a("p",[n._v('考察前缀"a"，发现边a已经存在。于是顺着边a走到节点a。')]),n._v(" "),a("p",[n._v('考察剩下的字符串"dd"的前缀"d"，发现从节点a出发，已经有边d存在。于是顺着边d走到节点ad')]),n._v(" "),a("p",[n._v('考察最后一个字符"d"，这下从节点ad出发没有边d了，于是创建节点ad的子节点add，并把边ad->add标记为d。')]),n._v(" "),a("p",[a("strong",[n._v("前缀树的应用场景")])]),n._v(" "),a("p",[a("strong",[n._v("（1）字符串的快速检索")])]),n._v(" "),a("p",[n._v("字典树的查询时间复杂度是O(logL)，L是字符串的长度。所以效率还是比较高的。字典树的效率比hash表高。")]),n._v(" "),a("p",[n._v("hash表：")]),n._v(" "),a("p",[n._v("通过hash函数把所有的单词分别hash成key值，查询的时候直接通过hash函数即可，都知道hash表的效率是非常高的为O(1)，当然这是对于如果我们hash函数选取的好，计算量少，且冲突少，那单词查询速度肯定是非常快的。那如果hash函数的计算量相对大呢，且冲突律高呢？这些都是要考虑的因素。")]),n._v(" "),a("p",[n._v("还有就是hash表不支持动态查询，什么叫动态查询，当我们要查询单词apple时，hash表必须等待用户把单词apple输入完毕才能hash查询。当你输入到appl时肯定不可能hash吧。")]),n._v(" "),a("p",[n._v("字典树（tries树）：")]),n._v(" "),a("p",[n._v("对于单词查询这种，还是用字典树比较好，但也是有前提的，空间大小允许，字典树的空间相比较hash还是比较浪费的，毕竟hash可以用bit数组。")]),n._v(" "),a("p",[a("strong",[n._v("（2）字符串排序")])]),n._v(" "),a("p",[n._v("从上图我们很容易看出单词是排序的，先遍历字母序在前面。")]),n._v(" "),a("p",[n._v("减少了没必要的公共子串。")]),n._v(" "),a("p",[a("strong",[n._v("（3）最长公共前缀")])]),n._v(" "),a("p",[n._v("inn和int的最长公共前缀是in，遍历字典树到字母n时，此时这些单词的公共前缀是in。")]),n._v(" "),a("p",[a("strong",[n._v("（4）自动匹配前缀显示后缀")])]),n._v(" "),a("p",[n._v("我们使用辞典或者是搜索引擎的时候，输入appl，后面会自动显示一堆前缀是appl的东东吧。")]),n._v(" "),a("p",[n._v("那么有可能是通过字典树实现的，前面也说了字典树可以找到公共前缀，我们只需要把剩余的后缀遍历显示出来即可。")]),n._v(" "),a("p",[a("strong",[n._v("前缀树的java实现")])]),n._v(" "),a("p",[n._v("节点")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('package datastructure.tree.trietree;\n \nimport java.util.Arrays;\n \npublic class TreeNode {\n    \n    //经过这个节点的字符串的个数（以这个节点为前缀的字符串的个数）\n    public int path;\n    //以这个节点结束的字符串的个数（有多少个字符串有这条路径的char组成）\n    public int end;\n    //对应着小写的a-z的26个字母（如果要更多可以使用hashmap<char,Node>\n    public TreeNode[] next;\n    \n    public TreeNode(){\n        path=0;\n        end=0;\n        next=new TreeNode[26];\n    }\n \n    @Override\n    public String toString() {\n        return "TreeNode [path=" + path + ", end=" + end + ", next=" + Arrays.toString(next) + "]";\n    }\n \n    \n}\n')])])]),a("p",[a("strong",[n._v("前缀树（增加，查询字符串数量，查询前缀数量）")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("package datastructure.tree.trietree;\n \npublic class TrieTree {\n    \n    public TreeNode root;\n    \n    public TrieTree(){\n        root=new TreeNode();\n    }\n    \n \n    /**在前缀树中插入字符串\n     * 这种++的方法，导致，一个node，有多少个end，就有多少个相同的字符串\n     * 一个node，有多少个path，就有多少个字符串经过（root的path代表有多少个字符串）（字符串末尾的node的path也会++）\n     * @param string 被插入的字符串（以前插入过的也可以插入）\n     */\n    public void insertString(String string){\n        if(string==null||string.length()==0){\n            return;\n        }\n        int length=string.length();\n        TreeNode nowNode=root;\n        for(int i=0;i<length;i++){\n            char now=string.charAt(i);\n            int index=now-'a';\n            //index为字符now所处的位置\n            if(nowNode.next[index]==null){\n                nowNode.next[index]=new TreeNode();\n            }\n            //先对当前node的path++，再转移到下一个node\n            nowNode.path++;\n            nowNode=nowNode.next[index];\n            \n        }\n        //在最后的node，path和end++\n        nowNode.path++;\n        nowNode.end++;\t\t\t\t\n    }\n    \n \n    /**返回这个前缀树总共插入了多少个字符串\n     * @return\n     */\n    public int size(){\n        return root.path;\n    }\n    \n    \n    /**前缀树查询总共插入这个字符串多少次，如果没插入过，则返回0\n     * @param string\n     * @return\n     */\n    public int getStringNum(String string){\n        if(string==null||string.length()==0){\n            return 0;\n        }\n        int length=string.length();\n        TreeNode nowNode=root;\n        for(int i=0;i<length;i++){\n            char now=string.charAt(i);\n            int index=now-'a';\n            //如果没有这个节点，说明不存在，直接返回0\n            if(nowNode.next[index]==null){\n                return 0;\n            }\n            nowNode=nowNode.next[index];\n        }\t\t\n        //此时nowNode已经处于最后一个节点\n        return nowNode.end; \n    }\n \n    /**前缀树查询以这个字符串为前缀的字符串总共多少个（包括以他为结尾的）\n     * @param string 前缀\n     * @return\n     */\n    public int getPrefixNum(String string){\n        if(string==null||string.length()==0){\n            return 0;\n        }\n        int length=string.length();\n        TreeNode nowNode=root;\n        for(int i=0;i<length;i++){\n            char now=string.charAt(i);\n            int index=now-'a';\n            //如果没有这个节点，说明前缀不存在，直接返回0\n            if(nowNode.next[index]==null){\n                return 0;\n            }\n            nowNode=nowNode.next[index];\n        }\t\t\n        //此时nowNode已经处于前缀的最后一个节点\n        return nowNode.path; \n    }\n}\n")])])]),a("p",[n._v("测试")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('package datastructure.tree.trietree;\n \npublic class Main {\n \n    public static void main(String[] args) {\n        TrieTree tree=new TrieTree();\n        tree.insertString("aa");\n        tree.insertString("aa");\n        tree.insertString("ab");\n        tree.insertString("ba");\n        //System.out.println(tree.root);\n        //System.out.println(tree.size());\n        //System.out.println(tree.getStringNum("aa"));\n        //System.out.println(tree.getStringNum("ab"));\n        //System.out.println(tree.getStringNum("ac"));\n        System.out.println(tree.getPrefixNum("a"));\n        System.out.println(tree.getPrefixNum("b"));\n        System.out.println(tree.getPrefixNum("c"));\n    }\n \n}\n')])])]),a("p",[a("strong",[n._v("与DFA查询敏感词的类似与不同")])]),n._v(" "),a("p",[a("strong",[n._v("类似")])]),n._v(" "),a("p",[n._v("思路类似，都是一个个节点，每个节点包含通往下一群节点的容器。")]),n._v(" "),a("p",[a("strong",[n._v("不同")])]),n._v(" "),a("p",[a("strong",[n._v("前缀树：")])]),n._v(" "),a("p",[n._v("这种java实现的下一个节点的容器是new TreeNode[26]，同时还有path（经过这个节点的数量），end（以这个节点结尾的数量），倾向于查找字符串的个数和前缀的个数")]),n._v(" "),a("p",[a("strong",[n._v("dfa：")])]),n._v(" "),a("p",[n._v("java实现的容器是Map<String,Object>，没有path，只有key=isEnd，倾向于查询这个字符串中是否包含敏感词")]),n._v(" "),a("p",[n._v("其实两者本来是一个源头，只是为了不同的目的，从而node的构造不同")])])}),[],!1,null,null,null);t.default=i.exports}}]);