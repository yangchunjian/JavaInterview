#!/bin/bash

# 更改文件名前缀,去掉文件名前缀leetcode-
#cd ./docs/28.算法/11.力扣/
##rename 's/^leetcode_//' ../docs/28.算法/11.力扣/*
#for file in leetcode-*; do
#  mv "$file" "${file#leetcode-}"
#done
counter=10
cd /Users/mac/IdeaProjects/own/JavaInterview/docs/31.数据库/12.elasticsearch/
#cd ./docs/24.面试/14.hf/
#rename 's/^leetcode_//' ../docs/28.算法/11.力扣/*
for file in *; do
  mv "$file" "${counter}.${file}"
    ((counter++))
done

