#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
export NODE_OPTIONS=--max_old_space_size=10240
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
#git push -f $githubUrl master:gh-pages # 推送到github
git push -f $githubUrl main:gh-pages # 推送到github

# deploy to coding
# echo 'masongsong.cn' > CNAME  # 自定义域名
## echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件
#
# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于gitee仓库`Settings/Secrets`设置的私密环境变量
#   codingUrl=git@e.coding.net:mss-blog/mss-blog/blog.git
# else
#   codingUrl=https://mss-blog:${CODING_TOKEN}@e.coding.net/mss-blog/blog.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding
#
#
cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
