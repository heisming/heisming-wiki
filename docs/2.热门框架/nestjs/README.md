# nestJS

## 脚手架
```bash
npm i -g @nestjs/cli
nest new projectName
```

选择你的包管理工具
```bash
pnpm run start
```
http://localhost:3000
显示hello world就是OK了
服务正常启动之后，接下来我们要开始写下第一个功能【用户模块】。
首先运行如下命令，CLI 会快速帮助我们自动生成一个用户的 UserController
```bash
$ nest g co user
```
不过此命令同时也会生成后缀为 spec 的测试文件，虽然有测试功能非常好，但在快速开发过程中，并非每一个功能都需要自动化测试覆盖，只要保证主要的功能有用例覆盖即可。

如果不需要每一次生成 spec 文件，可以在根目录下的 nest-cli.json 添加如下配置，禁用测试用例生成，后续再使用 CLI 创建 Controller 或者 Service 类型文件的时候，将不会继续生成：
```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  // 这个配置
  "generateOptions": {
    "spec": false
  }
}
```

## 第一个 CURD
在小试牛刀之后，下面我们要开始借助 CLI 的能力快速生成 CURD 模块：

- 生成一个模块 (nest g mo) 来组织代码，使其保持清晰的界限（Module）。
- 生成一个控制器 (nest g co) 来定义CRUD路径（Controller）。
- 生成一个服务 (nest g s) 来表示/隔离业务逻辑（Service）。
- 生成一个实体类/接口来代表资源数据类型（Entity）。

可以看出一个最简单的 CURD 涉及的模块也会非常多（至少需要以上四个模块才能完成一个基础的 CURD 功能），并且要运行多个命令才能得到想要的结果，所幸 Nest CLI 已经集成了这样的功能来帮助我们减少重复的工作量：
```bash
# user(module name)
nest g resource user
```
> 之前我们已经生成 user 的 controller 文件，所以在使用此条命令之前需要将之前生成的 user 目录全部删除，同时删除 app.module.ts 中的 UserController 引入。
