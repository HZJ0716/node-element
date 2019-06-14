# node.js与element-ui实现简易后台搭建

# 技术栈

## 【前端】<br>
* vue-cli:项目使用vue-cli脚手架搭建<br>
* vue-router:项目路由搭建实现页面跳转交互<br>
* element-ui:第三方UI库显示布局样式的快速搭建<br>
## 【后端】<br>
* node.js:使用node编写对应的RESTFUL api接口对数据进行操作<br>
* express:node的框架使用<br>
* CORS:使用CORS实现跨域<br>
# 页面信息
信息添加页:使用element-ui`Container 布局容器`、`表单Form`以及`Message 消息提示`完成前端样式与布局，使用`axios`发送添加的数据信息，后端使用node.js编写相应的api接口完成表单提交。<br><br>
信息展示页:使用element-ui`Container 布局容器`、`表单Form`,使用`axios`发送数据获取请求，后端使用node.js编写相应的api接口完成数据查询。<br><br>
信息查询页:使用element-ui`Container 布局容器`、`表单Form`,使用`axios`发送数据查询请求，后端使用node.js编写相应的api接口完成数据查询。<br><br>
信息修改页:使用element-ui`Container 布局容器`、`表单Form`,使用`axios`进行数据更新，后端使用node.js编写相应的api接口完成数据更新。<br><br>
分页操作:使用element-ui组件的`Pagination 分页`以及组件自带的`Events 事件`与后台相关接口的数据集查询完成分页。

# 安装与运行
npm install //安装依赖

npm run dev //服务端运行 访问 http://localhost:8080

cd server  //切换文件夹

node server.js  //服务器运行node server.js

npm run build  //项目打包 
