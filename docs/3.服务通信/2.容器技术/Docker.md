# Docker

## Docker概述
为什么会有Docker?
> 发布构建项目时可以复制环境安装打包，方便项目运维，并进行一键打包部署。
> 隔离是Docker的核心思想，打包装箱，箱子之间互相隔离。可以将服务器利用率到最高！
> （一个容器就是一个轻量化的虚拟机）

### Docker历史

> 基于GO语言开发，开源项目。

从2013年开始，Docker每个月都会更新一个新版本，容器技术出来之前都是使用的虚拟化技术。
- VM: linux centos原生镜像（相当于一台电脑）隔离，需要开启多个虚拟机。 占用内存GB，分级启动。
- Docker: 镜像（最小核心的环境）隔离，占用内存MB，秒级启动。

[docker文档](https://docs.docker.com/)
[docker仓库](https://hub.docker.com/)

### Docker能力
虚拟机技术：资源占用多，冗余步骤多，启动很慢。
容器化技术：不是一个模拟的完整的操作系统。

比较Docker和虚拟机技术的不同：
- 传统虚拟机：虚拟出一条硬件，运行一个完整的操作系统，然后再这个系统上安装和运行软件。
- 容器内的应用直接运行在宿主机的内容，容器是没有自己的内核的，也没有虚拟我们的硬件，所以轻便。
- 每个容器间是互相隔离，每个容器内都有一个属于自己的文件系统，互不影响。

DevOps(开发、运维)：
**应用更快速的交付和部署**
传统：一堆帮助文档，安装程序
Docker：打包镜像发布测试一键运行
**更便捷的升级和扩缩容，更简单的系统运维**
项目打包为一个镜像，扩展 服务器A，B
**更简单的系统运维**
容器化之后，开发测试环境高度一致
**更高效的计算资源利用**
Docker是内核级别的虚拟化，一个物理机上可以运行很多的容器实例！服务器性能最大化利用。

## Docker安装

### 基本组成
![S](https://img1.baidu.com/it/u=2312201922,3744937701&fm=253&fmt=auto&app=138&f=PNG?w=550&h=287)

**镜像(image)**：一个模板，通过这个模板来创建容器服务 tomcat镜像===> run ==> tomcat01容器(提供服务器)，通过这个镜像可以创建多个容器（最终服务运行或者项目运行就是在容器中的）。
**容器(container)**：利用容器技术，可以独立运行一个或者一组应用，通过镜像来创建的。启动，停止，删除，基本命令（简易Linux系统）！
**仓库(repository)**：存储镜像的地方，分为公有仓库（国内阿里云。华为云等等）和私有仓库。

### 环境
Liunx：Ubantu 20.04


```bash
# 查看系统版本
[root@VM-16-9-centos etc]# cat /proc/version
Linux version 3.10.0-1160.31.1.el7.x86_64 (mockbuild@kbuilder.bsys.centos.org) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC) ) #1 SMP Thu Jun 10 13:32:12 UTC 2021
# 查看Docker版本
docker --version

# https://github.com/docker/docker-install
[root@VM-16-9-centos etc]# curl -fsSL https://get.docker.com -o get-docker.sh
[root@VM-16-9-centos etc]# sh get-docker.sh
[root@VM-16-9-centos etc]# docker --version
Docker version 20.10.17, build 100c701
```

## Docker命令

## Docker镜像👍👍👍

## 容器数据卷

## DockerFile👍👍👍👍👍

## Docker网络原理

## IDEA整合Docker


## Docker项目

### Docker Compose

### Docker Swarm

### CI/CD Jenkins
