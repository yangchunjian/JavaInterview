(window.webpackJsonp=window.webpackJsonp||[]).push([[1024],{2218:function(s,a,e){"use strict";e.r(a);var t=e(12),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("public abstract class InputStream implements Closeable {")])])]),s._v(" "),e("h2",{attrs:{id:"成员变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#成员变量"}},[s._v("#")]),s._v(" 成员变量")]),s._v(" "),e("ol",[e("li",[s._v("缓存量")])]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// MAX_SKIP_BUFFER_SIZE is used to determine the maximum buffer size to")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// use when skipping.")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" MAX_SKIP_BUFFER_SIZE "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"成员方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#成员方法"}},[s._v("#")]),s._v(" 成员方法")]),s._v(" "),e("ol",[e("li",[s._v("read方法")])]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("可用容量")])]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("available")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("skip方法")])]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * Skips over and discards <code>n</code> bytes of data from this input\n     * stream. The <code>skip</code> method may, for a variety of reasons, end\n     * up skipping over some smaller number of bytes, possibly <code>0</code>.\n     * This may result from any of a number of conditions; reaching end of file\n     * before <code>n</code> bytes have been skipped is only one possibility.\n     * The actual number of bytes skipped is returned. If {@code n} is\n     * negative, the {@code skip} method for class {@code InputStream} always\n     * returns 0, and no bytes are skipped. Subclasses may handle the negative\n     * value differently.\n     *\n     * <p> The <code>skip</code> method of this class creates a\n     * byte array and then repeatedly reads into it until <code>n</code> bytes\n     * have been read or the end of the stream has been reached. Subclasses are\n     * encouraged to provide a more efficient implementation of this method.\n     * For instance, the implementation may depend on the ability to seek.\n     *\n     * @param      n   the number of bytes to be skipped.\n     * @return     the actual number of bytes skipped.\n     * @exception  IOException  if the stream does not support seek,\n     *                          or if some other I/O error occurs.\n     */")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("skip")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("h2",{attrs:{id:"内部类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内部类"}},[s._v("#")]),s._v(" 内部类")]),s._v(" "),e("p",[s._v("没有内部类")])])}),[],!1,null,null,null);a.default=n.exports}}]);