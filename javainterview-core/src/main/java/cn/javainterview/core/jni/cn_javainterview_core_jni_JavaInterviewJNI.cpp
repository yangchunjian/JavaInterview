#include<stdio.h>
#include<stdlib.h>
#include<iostream>//预处理
#include<string> //引入string
using namespace std;//命名空间


#include "cn_javainterview_core_jni_JavaInterviewJNI.h"
std::string jstring2str(JNIEnv* env, jstring jstr)
{
    char*   rtn   =   NULL;
    jclass   clsstring   =   env->FindClass("java/lang/String");
    jstring   strencode   =   env->NewStringUTF("UTF-8");
    jmethodID   mid   =   env->GetMethodID(clsstring,   "getBytes",   "(Ljava/lang/String;)[B");
    jbyteArray   barr=   (jbyteArray)env->CallObjectMethod(jstr,mid,strencode);
    jsize   alen   =   env->GetArrayLength(barr);
    jbyte*   ba   =   env->GetByteArrayElements(barr,JNI_FALSE);
    if(alen   >   0)
    {
        rtn   =   (char*)malloc(alen+1);
        memcpy(rtn,ba,alen);
        rtn[alen]=0;
    }
    env->ReleaseByteArrayElements(barr,ba,0);
    std::string stemp(rtn);
    free(rtn);
    return   stemp;
}

JNIEXPORT void JNICALL Java_cn_javainterview_core_jni_JavaInterviewJNI_print
  (JNIEnv* env, jobject, jstring i)
{
      std::string input = jstring2str(env,i);
      printf("%s",input.c_str());

}

