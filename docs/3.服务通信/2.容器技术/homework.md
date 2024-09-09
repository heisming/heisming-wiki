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
说明：有了镜像才可以创建容器，linux：下载一个ubuntu镜像来测试学习
```bash
# 下载ubuntu镜像命令
docker pull ubuntu
```
新建容器并启动
```bash
docker run 

# 参数说
--name="Name"  # 容器名字，用区分
-d             # 后台方式运行
-it            # 使用交互方式运行，进入容器查看内容
-p             # 指定容器的端口 -p 8080:8080
    -p ip:主机端口：容器端口
    -p 主机端口：容器端口（常用）
    -p 容器端口
    容器端口
-P             # 随机指定端口

# 测试：启动并进入容器
liming@liming-virtual-machine:~$ docker run -it ubuntu /bin/bash
root@d62a9d781ac5:/# 
root@d62a9d781ac5:/# ls # 查看容器内的ubuntu，基础版本，很多命令不完善
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
```
列出所有的运行中的容器
```bash
# docker ps 命令
-a # 列出当前正在运行的容器，带出历史运行过的容器
-n=? # 显示最近创建的容器
-q # 只显示容器的编号
liming@liming-virtual-machine:~$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

liming@liming-virtual-machine:~$ docker ps -a
CONTAINER ID   IMAGE         COMMAND       CREATED          STATUS                       PORTS     NAMES
d62a9d781ac5   ubuntu        "/bin/bash"   10 minutes ago   Exited (127) 8 minutes ago             nervous_goldberg
7661fd7bb9b6   hello-world   "/hello"      6 days ago       Exited (0) 6 days ago                  distracted_khayyam

liming@liming-virtual-machine:~$ sudo docker ps -a -n=1
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS                        PORTS     NAMES
d62a9d781ac5   ubuntu    "/bin/bash"   12 minutes ago   Exited (127) 10 minutes ago             nervous_goldberg

```
退出容器
```bash
exit # 直接容器停止并退出

Ctrl + P + Q # 容器不停止退出

liming@liming-virtual-machine:~$ sudo docker run -it ubuntu /bin/bash
root@c7b53ca53a14:/# 
# Ctrl + P + Q
liming@liming-virtual-machine:~$ 
liming@liming-virtual-machine:~$ sudo docker ps
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS          PORTS     NAMES
c7b53ca53a14   ubuntu    "/bin/bash"   18 seconds ago   Up 17 seconds             compassionate_blackwell
```
删除容器
```bash
docker rm 容器id # 删除指定的容器，不能删除正在运行的容器，如果要强制删除 rm -f
docker rm -f $(docker ps -aq) # 删除所有的容器
docker ps -a -q|xargs docker rm # 删除所有的容器
```
启动和停止容器的操作
```bash
docker start 容器id # 启动容器
docker restart 容器id # 重启容器
docker stop 容器id # 停止当前正在运行的容器
docker kill 容器id # 强制终止当前容器
```
#### 常用的其它命令
后台启动容器
```bash
# 命令 docker run -d 镜像名
liming@liming-virtual-machine:~$ docker run -d ubuntu
e3b33ead40a79b9a6890a471827b0b9dcf59c417580334b9efd36cc199e180b1
# 问题docker ps, 发现ubuntu停止了
liming@liming-virtual-machine:~$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

# 常见的坑，docker 容器使用后台运行，就必须要有一个前台进程，docker检测没有就会自动停止
# ngnix：容器启动后，发现没有提供服务，就会立刻停止，就没有程序了
```
查看日志
```bash
Usage:  docker logs [OPTIONS] CONTAINER-ID
Options:
      --details        Show extra details provided to logs
  -f, --follow         Follow log output
      --since string   Show logs since timestamp (e.g. "2013-01-02T13:23:37Z") or relative (e.g. "42m" for 42 minutes)
  -n, --tail string    Number of lines to show from the end of the logs (default "all")
  -t, --timestamps     Show timestamps
      --until string   Show logs before a timestamp (e.g. "2013-01-02T13:23:37Z") or relative (e.g. "42m" for 42 minutes)

liming@liming-virtual-machine:~$ sudo docker logs -t c7b53ca53a14
2024-05-14T14:35:09.193818659Z root@c7b53ca53a14:/# exit

liming@liming-virtual-machine:~$ sudo docker logs -n --tail c7b53ca53a14
root@c7b53ca53a14:/# exit
```
查看容器中进程信息
```bash
liming@liming-virtual-machine:~$ sudo docker top c7b53ca53a14
Error response from daemon: container c7b53ca53a141dcfbc2bd41a7d5136db3e5b929765c13bb93aba097b0d2ba065 is not running
# 提示没有运行
liming@liming-virtual-machine:~$ sudo docker run -it ubuntu /bin/bash
root@0d67609f92b2:/# 
# Ctrl + P + Q (重复执行了3次...)
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS          PORTS     NAMES
c0a90380aa84   ubuntu    "/bin/bash"   43 seconds ago   Up 41 seconds             practical_curie
e64cc95701f9   ubuntu    "/bin/bash"   48 seconds ago   Up 46 seconds             recursing_jang
0d67609f92b2   ubuntu    "/bin/bash"   58 seconds ago   Up 57 seconds             infallible_montalcini
# 查看到了
liming@liming-virtual-machine:~$ sudo docker top 0d67609f92b2
UID         PID       PPID       C        STIME          TTY          TIME            CMD
root       27274      27253      0        20:34          pts/0        00:00:00      /bin/bash
# UID用户ID，PID是进程ID，PPID是父进程ID。
```

查看镜像元数据
```bash
liming@liming-virtual-machine:~$ sudo docker inspect 0d67609f92b2
[
    {
        "Id": "0d67609f92b2f350903c1b79807d8bc3c829e49ce70e64eaf7d27e2fdec258c5",
        "Created": "2024-05-15T12:34:33.457732544Z",
        "Path": "/bin/bash", # 控制台
        "Args": [], # 传递的参数
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 27274,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2024-05-15T12:34:33.908709165Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:ba6acccedd2923aee4c2acc6a23780b14ed4b8a5fa4e14e252a23b846df9b6c1", # 镜像源
        "ResolvConfPath": "/var/lib/docker/containers/0d67609f92b2f350903c1b79807d8bc3c829e49ce70e64eaf7d27e2fdec258c5/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/0d67609f92b2f350903c1b79807d8bc3c829e49ce70e64eaf7d27e2fdec258c5/hostname",
        "HostsPath": "/var/lib/docker/containers/0d67609f92b2f350903c1b79807d8bc3c829e49ce70e64eaf7d27e2fdec258c5/hosts",
        "LogPath": "/var/lib/docker/containers/0d67609f92b2f350903c1b79807d8bc3c829e49ce70e64eaf7d27e2fdec258c5/0d67609f92b2f350903c1b79807d8bc3c829e49ce70e64eaf7d27e2fdec258c5-json.log",
        "Name": "/infallible_montalcini",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "docker-default",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "bridge",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "ConsoleSize": [
                34,
                205
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "private",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": [],
            "BlkioDeviceWriteBps": [],
            "BlkioDeviceReadIOps": [],
            "BlkioDeviceWriteIOps": [],
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": null,
            "PidsLimit": null,
            "Ulimits": [],
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware",
                "/sys/devices/virtual/powercap"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/66a2fa0c08628f88a4399915d9ef110cf16d5b2facb001c9ed20072f575f2349-init/diff:/var/lib/docker/overlay2/62902bbae3b4111016a5625788da0ae0a0b6a90f54273be6b945090b32128cdd/diff",
                "MergedDir": "/var/lib/docker/overlay2/66a2fa0c08628f88a4399915d9ef110cf16d5b2facb001c9ed20072f575f2349/merged",
                "UpperDir": "/var/lib/docker/overlay2/66a2fa0c08628f88a4399915d9ef110cf16d5b2facb001c9ed20072f575f2349/diff",
                "WorkDir": "/var/lib/docker/overlay2/66a2fa0c08628f88a4399915d9ef110cf16d5b2facb001c9ed20072f575f2349/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [], # 挂载
        "Config": {
            "Hostname": "0d67609f92b2",
            "Domainname": "",
            "User": "",
            "AttachStdin": true,
            "AttachStdout": true,
            "AttachStderr": true,
            "Tty": true,
            "OpenStdin": true,
            "StdinOnce": true,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": [
                "/bin/bash"
            ],
            "Image": "ubuntu",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {}
        },
        "NetworkSettings": { # 网络
            "Bridge": "",
            "SandboxID": "5d4e8551da726314ab4727bb4cf8539c16fc79e0a5e435c752a1a68142f8e804",
            "SandboxKey": "/var/run/docker/netns/5d4e8551da72",
            "Ports": {},
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "83d9ceb57ffde90d68ce43c9d731eed0d552be540dc76b4288ad8d4a66b92ce5",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:11:00:02",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "MacAddress": "02:42:ac:11:00:02",
                    "NetworkID": "a8eaeb1a39e39eb146500a0f6358248347c8f73498a1725b3d485cd95a57d6c2",
                    "EndpointID": "83d9ceb57ffde90d68ce43c9d731eed0d552be540dc76b4288ad8d4a66b92ce5",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "DriverOpts": null,
                    "DNSNames": null
                }
            }
        }
    }
]

```

进入当前正在运行的容器
```bash
# 我们通常容器都是使用后台方式运行的，需要进入容器，修改配置
docker exec -it 容器id bashShell
# 测试
liming@liming-virtual-machine:~$ sudo  docker ps
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS          PORTS     NAMES
c0a90380aa84   ubuntu    "/bin/bash"   10 minutes ago   Up 10 minutes             practical_curie
e64cc95701f9   ubuntu    "/bin/bash"   10 minutes ago   Up 10 minutes             recursing_jang
0d67609f92b2   ubuntu    "/bin/bash"   10 minutes ago   Up 10 minutes             infallible_montalcini
liming@liming-virtual-machine:~$ sudo docker exec -it c0a90380aa84 /bin/bash
root@c0a90380aa84:/# 
root@c0a90380aa84:/# ps -ef
UID          PID    PPID  C STIME TTY          TIME CMD
root           1       0  0 12:34 pts/0    00:00:00 /bin/bash
root          10       0  0 12:45 pts/1    00:00:00 /bin/bash
root          19      10  0 12:45 pts/1    00:00:00 ps -ef

# 方式二
# 新建一个ubuntu容器，进行2秒循环打印 docker is good!；❗谨慎执行
liming@liming-virtual-machine:~$ sudo docker run -d ubuntu /bin/bash -c "while true;do echo docker is good\!;sleep 2;done"
abba2dd31285af78bb646d1826c2947637fad528d2b96605bc36093da0307d24 # 容器ID
liming@liming-virtual-machine:~$ sudo docker ps
CONTAINER ID   IMAGE     COMMAND                   CREATED          STATUS          PORTS     NAMES
abba2dd31285   ubuntu    "/bin/bash -c 'while…"   56 seconds ago   Up 56 seconds             priceless_wilbur
c0a90380aa84   ubuntu    "/bin/bash"               24 minutes ago   Up 24 minutes             practical_curie
e64cc95701f9   ubuntu    "/bin/bash"               24 minutes ago   Up 24 minutes             recursing_jang
0d67609f92b2   ubuntu    "/bin/bash"               24 minutes ago   Up 24 minutes             infallible_montalcini

# 命令
docker attach 容器id
liming@liming-virtual-machine:~$ sudo docker attach abba2dd31285
docker is good!
docker is good!
docker is good!
docker is good!
docker is good!
docker is good!
...
# 正在执行当前的代码

# docker exec 进入容器后开启一个新的终端，可以在里面操作。
# docker attach # 进入容器当前正在执行的终端，不会启动新的进程！
```
从容器内拷贝文件到主机上
```bash
docker cp 容器id:容器内路径 目的的主机路径

# 测试
liming@liming-virtual-machine:~$ sudo docker ps
CONTAINER ID   IMAGE     COMMAND                   CREATED          STATUS          PORTS     NAMES
abba2dd31285   ubuntu    "/bin/bash -c 'while…"   7 minutes ago    Up 7 minutes              priceless_wilbur
c0a90380aa84   ubuntu    "/bin/bash"               30 minutes ago   Up 30 minutes             practical_curie
e64cc95701f9   ubuntu    "/bin/bash"               31 minutes ago   Up 31 minutes             recursing_jang
0d67609f92b2   ubuntu    "/bin/bash"               31 minutes ago   Up 31 minutes             infallible_montalcini
# 进入容器内部正在运行的命令行
liming@liming-virtual-machine:/home$ sudo docker attach c0a90380aa84
root@c0a90380aa84:/# cd /home
root@c0a90380aa84:/home# touch copy.js
root@c0a90380aa84:/home# ls
copy.js
root@c0a90380aa84:/home# exit
# 拷贝文件不需要容器正在运行中，因为容器停止其中的文件也存在
# 拷贝文件到主机
liming@liming-virtual-machine:/home$ sudo docker cp c0a90380aa84:/home/copy.js /home
Successfully copied 1.54kB to /home
liming@liming-virtual-machine:/home$ ls
copy.js  liming  liming.js
```3
#### 命令小结
![docker命令图](https://img-blog.csdnimg.cn/img_convert/06a539a30efc11ba47aa2767e15ce912.png)

## Docker镜像👍👍👍


## 容器数据卷


## DockerFile👍👍👍👍👍


## Docker网络原理

## IDEA整合Docker


## Docker项目

### Docker Compose

### Docker Swarm

### CI/CD Jenkins
