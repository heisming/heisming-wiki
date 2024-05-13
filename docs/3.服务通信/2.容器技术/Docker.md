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
Docker是内核级别的虚拟化，一个物理机上可以运行很多的容器实例！服务器性能最大化利用率。

## Docker安装

### 基本组成
![S](https://img1.baidu.com/it/u=2312201922,3744937701&fm=253&fmt=auto&app=138&f=PNG?w=550&h=287)

**镜像(image)**：一个模板，通过这个模板来创建容器服务 tomcat镜像===> run ==> tomcat01容器(提供服务器)，通过这个镜像可以创建多个容器（最终服务运行或者项目运行就是在容器中的）。
**容器(container)**：利用容器技术，可以独立运行一个或者一组应用，通过镜像来创建的。启动，停止，删除，基本命令（简易Linux系统）！
**仓库(repository)**：存储镜像的地方，分为公有仓库（国内阿里云。华为云等等）和私有仓库。

### 环境
#### 操作系统
Liunx：Ubantu 20.04
```Bash
# 系统内核版本
heisming@heisming:~$ uname -r
# 5.13.0-39-generic
6.5.0-28-generic
# 系统版本
heisming@heisming:~$ cat /etc/os-release 
# NAME="Ubuntu"
# VERSION="20.04.6 LTS (Focal Fossa)"
# ID=ubuntu
# ID_LIKE=debian
# PRETTY_NAME="Ubuntu 20.04.6 LTS"
# VERSION_ID="20.04" 
# HOME_URL="https://www.ubuntu.com/"
# SUPPORT_URL="https://help.ubuntu.com/"
# BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
# PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
# VERSION_CODENAME=focal
# UBUNTU_CODENAME=focal
PRETTY_NAME="Ubuntu 22.04.4 LTS"
NAME="Ubuntu"
VERSION_ID="22.04"
VERSION="22.04.4 LTS (Jammy Jellyfish)"
VERSION_CODENAME=jammy
ID=ubuntu
ID_LIKE=debian
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
UBUNTU_CODENAME=jammy
```

#### 安装
[安装官网](https://docs.docker.com/engine/install/ubuntu/)
```bash
### 0.卸载旧版本和冲突
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
### 1.设置Docker的 apt 存储库。
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

### 2.安装Docker包
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

### 3.运行命令行检查Docker Engine是否安装成功  hello-world Image。
liming@liming-virtual-machine:~$ sudo docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
c1ec31eb5944: Pull complete 
Digest: sha256:a26bff933ddc26d5cdf7faa98b4ae1e3ec20c4985e6f87ac0973052224d24302
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

# 查看docker是否启动
liming@liming-virtual-machine:~$ sudo docker version 
Client: Docker Engine - Community
 Version:           26.1.1
 API version:       1.45
 Go version:        go1.21.9
 Git commit:        4cf5afa
 Built:             Tue Apr 30 11:47:53 2024
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          26.1.1
  API version:      1.45 (minimum version 1.24)
  Go version:       go1.21.9
  Git commit:       ac2de55
  Built:            Tue Apr 30 11:47:53 2024
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.31
  GitCommit:        e377cd56a71523140ca6ae87e30244719194a521
 runc:
  Version:          1.1.12
  GitCommit:        v1.1.12-0-g51d5e94
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0

# 查看 hello-world 镜像
liming@liming-virtual-machine:~$ sudo docker images
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
hello-world   latest    d2c94e258dcb   12 months ago   13.3kB

```
#### 卸载Docker引擎
```bash
# 卸载Docker Engine、CLI、containd和Docker Compose包:
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras

# 不会自动删除主机上的映像、容器、卷或自定义配置文件。需要手动删除所有镜像、容器和卷。
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd

# 必须手动删除任何已编辑的配置文件。
```
#### 镜像加速
[加速器地址](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)：https://bow9383g.mirror.aliyuncs.com
```BASH

# 安装1.10.0以上版本的Docker客户端
# 配置镜像加速器
# 可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器
liming@liming-virtual-machine:~$ sudo mkdir -p /etc/docker
liming@liming-virtual-machine:~$ sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://bow9383g.mirror.aliyuncs.com"]
}
EOF
liming@liming-virtual-machine:~$ sudo systemctl daemon-reload
liming@liming-virtual-machine:~$ sudo systemctl restart docker
```
#### 复盘HelloWorld启动流程
[Run的运行流程分析图](../assets/drawio/findImage.drawio ':include :type=code')

#### 底层原理
**Docker如何工作？**
C/S结构系统，守护进程运行在主机上。通过Socket从C端访问，DS接收到DC的指令，就会执行这个命令！

<!-- [模拟环境](../assets/drawio/dockerModel.drawio ':include :type=code') -->
![模拟环境](https://img-blog.csdnimg.cn/ef9f3be8f9ff459a8a764f2f72763b9d.png)

**Docker为什么比VM快？**
- Docker有着比虚拟机更少的抽象层
![抽象层](https://pic2.zhimg.com/v2-e34ed29488f0c5ab693d85c50e175e59_r.jpg)
- Docker是利用的宿主机的内核，VM是需要GuestOS
- 新建一个容器的时候，Docker是不需要像虚拟机一样重新加载一个操作系统内核，可以避免引导。虚拟机是加载GuestOS，分钟级别；Docker是利用宿主机的操作系统，省略复杂过程，秒级启动！

| - | Docker容器|LXC|VM|
|----|----|----|---|
|虚拟化类型|OS虚拟化|OS虚拟化|硬件虚拟化|
|性能|=物理机性能|=物理机性能|5%-20%损耗|
|隔离性|NS隔离|NS隔离|强|
|QoS|Cgroup弱|Cgroup弱|强|
|安全性|中|差|强|
|GuestOS|只支持Linux|只支持Linux|全部|
|可迁移性|强|弱|强|

## Docker命令
帮助命令: https://docs.docker.com/reference/cli/docker/
```bash
docker version # 显示版本信息
docker info #显示系统信息，包括镜像和容器数量
docker 命令 --help #万金油
```

### 镜像命令
[`docker images`](https://docs.docker.com/reference/cli/docker/image/ls/)：查看本地主机上所有镜像 

```bash
liming@liming-virtual-machine:~$ sudo docker images
[sudo] liming 的密码： 
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
hello-world   latest    d2c94e258dcb   12 months ago   13.3kB

# 解释
REPOSITORY 镜像的仓库源
TAG 镜像的标签
IMAGE ID 镜像的ID
CREATED 镜像的创建时间
SIZE 镜像的大小

# 可选项
Options:
  -a, --all             #默认列出所有镜像
  -q, --quiet           #只显示镜像的ID
```

`docker search`：搜索镜像
```bash
liming@liming-virtual-machine:~$ sudo docker search mysql
NAME                            DESCRIPTION                                      STARS     OFFICIAL
mysql                           MySQL is a widely used, open-source relation…   15066     [OK]
mariadb                         MariaDB Server is a high performing open sou…   5747      [OK]
# ...

# 可选项 --help
Options:
  -f, --filter filter   Filter output based on conditions provided
      --format string   Pretty-print search using a Go template
      --limit int       Max number of search results
      --no-trunc        Don't truncate output

# 通过搜索来过滤 --filter=STARS=3000
liming@liming-virtual-machine:~$ sudo docker search mysql --filter=STARS=3000
NAME      DESCRIPTION                                      STARS     OFFICIAL
mysql     MySQL is a widely used, open-source relation…   15066     [OK]
mariadb   MariaDB Server is a high performing open sou…   5747      [OK]

```
`docker pull`：下载镜像
```bash
liming@liming-virtual-machine:~$ sudo docker pull mysql
Using default tag: latest #如果不写tag,默认就是latest
latest: Pulling from library/mysql
72a69066d2fe: Pull complete  # 分层下载，docker image的核心，联合文件系统
93619dbc5b36: Pull complete 
99da31dd6142: Pull complete 
626033c43d70: Pull complete 
37d5d7efb64e: Pull complete 
ac563158d721: Pull complete 
d2ba16033dad: Pull complete 
688ba7d5c01a: Pull complete 
00e060b6d11d: Pull complete 
1c04857f594f: Pull complete 
4d7cfa90e6ea: Pull complete 
e0431212d27d: Pull complete 
Digest: sha256:e9027fe4d91c0153429607251656806cc784e914937271037f7738bd5b8e7709 # 签名
Status: Downloaded newer image for mysql:latest 
docker.io/library/mysql:latest # 真实地址

# 等价 docker pull mysql === docker pull docker.io/library/mysql:latest

# 指定版本下载
liming@liming-virtual-machine:~$ sudo docker pull mysql:5.7
5.7: Pulling from library/mysql
72a69066d2fe: Already exists # 联合文件系统
93619dbc5b36: Already exists 
99da31dd6142: Already exists 
626033c43d70: Already exists 
37d5d7efb64e: Already exists 
ac563158d721: Already exists 
d2ba16033dad: Already exists 
0ceb82207cd7: Pull complete 
37f2405cae96: Pull complete 
e2482e017e53: Pull complete 
70deed891d42: Pull complete 
Digest: sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94
Status: Downloaded newer image for mysql:5.7
docker.io/library/mysql:5.7
```
`docker rmi`：删除镜像
```bash
# 删除指定的容器
docker rmi -f 容器ID
# 删除多个的容器
docker rmi -f 容器ID 容器ID 容器ID 
liming@liming-virtual-machine:~$ sudo docker rmi -f c20987f18b13 
Untagged: mysql:5.7
Untagged: mysql@sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94
Deleted: sha256:c20987f18b130f9d144c9828df630417e2a9523148930dc3963e9d0dab302a76
Deleted: sha256:6567396b065ee734fb2dbb80c8923324a778426dfd01969f091f1ab2d52c7989
Deleted: sha256:0910f12649d514b471f1583a16f672ab67e3d29d9833a15dc2df50dd5536e40f
Deleted: sha256:6682af2fb40555c448b84711c7302d0f86fc716bbe9c7dc7dbd739ef9d757150
Deleted: sha256:5c062c3ac20f576d24454e74781511a5f96739f289edaadf2de934d06e910b92
# 删除全部容器（未成功）
sudo docker rmi -f $(docker images -aq)
```

### 容器命令


## Docker镜像👍👍👍


## 容器数据卷


## DockerFile👍👍👍👍👍


## Docker网络原理

## IDEA整合Docker


## Docker项目

### Docker Compose

### Docker Swarm

### CI/CD Jenkins
