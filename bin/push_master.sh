#!/bin/bash

echo -e "\033[32mCheckout to v3-master\033[0m"
git checkout v3-master

echo -e "\033[32mMerge v3-dev branch\033[0m"
git merge v3-dev -m 'Prepare release'

echo -e "\033[32mPush to origin v3-master\033[0m"
git push origin v3-master
echo -e "\033[32mPush to osc v3-master\033[0m"
git push osc v3-master
