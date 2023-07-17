#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'javainterview.cn' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg="deploy token"
  echo "start" ${msg} ${GITHUB_TOKEN}
  githubUrl=git@github.com:yangchunjian/JavaInterview.git
#  githubUrl=https://${GITHUB_TOKEN}@github.com/yangchunjian/JavaInterview.git
else
  msg='来自github actions的自动部署'
  echo "start" ${msg} ${GITHUB_TOKEN}
  githubUrl=https://yangchunjian:${GITHUB_TOKEN}@github.com/yangchunjian/JavaInterview.git
fi
git config --global user.name "yangchunjian"
git config --global user.email "1091938307@qq.com"

git checkout main

git init
git add -A
git commit -m "${msg}"
echo "start githubURL" ${githubUrl}
git push -f $githubUrl main:gh-pages # 推送到github
cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
