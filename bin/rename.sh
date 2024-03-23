sed -i "" "s/^.*@author.*$/ * @author JavaInterview/g" `grep -rl "@author"  --include="*.java" ./`

