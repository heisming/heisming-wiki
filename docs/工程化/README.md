# 前端工程化
>将前端开发的流程`规范化、标准化`，包括开发流程，技术选型、代码规范、构建发布等，用于提升前端工程师的开发效率和代码质量。

| 开发流程 | 技术选型 | 代码规范 | 构建发布 |
| ---- | ---- | ---- | ---- |
| 需求分析 <br> 版本控制 <br> 版本控制 <br> 缺陷管理 <br> 文档管理 <br> 自动化 <br> 性能测试 <br> 发布部署 <br> ...|UI框架 <br>- iView <br> - Ant <br> - Element <br> - Mint  <br> - Cube <br> JS框架 <br> - MVVM <br> Template| 标准：<br> Standard <br> - airbnb <br> - Prettier <br> 公司：<br> - 谷歌/百度 <br> - 腾讯/美团 <br> - 饿了么 <br> 模块化|  Jenkins <br> Webpack <br> Vite  <br>  Gulp <br> Yarn <br> Docker <br> Rancher <br> Kubernetes <br> Harbor <br> ECS <br> ... |

## WHY
- 复杂度高：前端项目的多功能、多页面、多状态、多系统
- 规模大：团队开发，多人协作，代码质量管理
- 要求高：页面性能优化（CDN/异步加载/请求合并），CSS兼容性、单页面应用、服务端渲染...

## HOW
- 从业务着手
  - 简单的单页面应用，使用gulp打包+同步工具实现开发全流程
- 从复杂度考虑
  - 框架最终要服务于我们的项目，而非累死累活的去维护框架
  - jenkenis CI工具
  - git/gitlab 版本控制
  - webpack 构建
  - RVA 开发框架

- 从已知向未知扩展
  - 不同的技术有不同的适应点，选择合适的才是最好的
  - 考虑
    - 前后端技术是否更好的融合
    - 前后端分离，接口安全性
    - vue或react是否适合制作静态页面
    - PHP是否更好的集合

