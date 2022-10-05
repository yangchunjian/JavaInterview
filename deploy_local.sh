#!/usr/bin/env sh

## 确保脚本抛出遇到的错误
set -e
export NODE_OPTIONS=--max_old_space_size=8192
## 生成静态文件
npm run docs:build

## 进入生成的文件夹
## cp CNAME docs/.vuepress/dist/
cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'

## 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yangchunjian/JavaInterview.git master:gh-pages


cd -

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:yangchunjian/JavaInterview.git master:master
git push -f git@github.com:yangchunjian/JavaInterview.git main:main