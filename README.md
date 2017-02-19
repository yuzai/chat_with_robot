# chat_with_robot
a robot talker
## 简介
这个项目主要是练习ajax通信，界面是模仿微信的聊天界面，机器人的回复数据来自于[聚合数据](https://www.juhe.cn/docs/api/id/112)，demo is [here](http://blog.xiaoboma.com/chat_with_robot/)

## 技术栈
jQuery,bootstrap,nodejs

## 技术难题
跨域问题，聚合数据的访问属于跨域，刚开始是通过jQuery的jsonp方法解决，但是后来聚合数据的服务器端不支持callback,所以我采用了架设中间服务器的方法来完成跨域的访问，中间服务器和本页面的跨域问题采用cors的方法解决，从而完成跨域通信，中间服务器架设在Herku,服务器的页面在[这里](https://robotser.herokuapp.com/)
