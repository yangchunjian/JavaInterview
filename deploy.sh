#!/usr/bin/env sh

## 确保脚本抛出遇到的错误
set -e

## 生成静态文件
npm run docs:build

## 进入生成的文件夹
## cp CNAME docs/.vuepress/dist/
cd docs/.vuepress/dist


# deploy to github
echo 'javainterview.cn' > CNAME

git config --global user.name "yangchunjian"
git config --global user.email "1091938307@qq.com"


git init
git add -A
git commit -m 'deploy'

## 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yangchunjian/JavaInterview.git main:gh-pages # 推送到github


cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
