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
虚拟机技术


## Docker安装
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
