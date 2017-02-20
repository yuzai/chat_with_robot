# chat_with_robot
a robot talker
## 简介
这个dev分支主要是对之前的作品进行移动端适配，之前的[页面](https://github.com/yuzai/chat_with_robot/tree/master)主要是采用bootstrap进行响应式布局，最近阅读了手淘的rem适配以及一些移动端的知识，对这个项目进行了改版。

## 技术栈
flexible,sass,zepto,node+heroku部署中间服务器来使得ajax跨域

## 改进
1. 手淘rem修改：利用flexible，动态检测和设置initial-scale,html的font-size，页面中的宽度高度采用rem来进行设置，达到适配移动端页面的效果
2. 采用flex布局，减少js的操控
3. 采用H5,mainfest离线缓存，实现应用的离线访问
4. 抛弃bootstrap,jquery，改用zepto实现一些简单的dom选择（事实上zepto也可以抛弃，只是做了简单的元素选择和事件绑定）
