# Docker
## 安装
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
