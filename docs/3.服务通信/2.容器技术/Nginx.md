# Docker安装Nginx、Tomcat、ES+Kibana

## Nginx
[官方文档](https://hub.docker.com/_/nginx)
```bash
liming@liming-virtual-machine:~$ sudo docker search nginx
NAME                   DESCRIPTION                                      STARS     OFFICIAL
nginx                  Official build of Nginx.                         19857     [OK]
unit                   Official build of NGINX Unit: Universal Web …    29        [OK]
nginx/nginx-ingress    NGINX and  NGINX Plus Ingress Controllers fo…    90   
...
liming@liming-virtual-machine:~$ sudo docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
a2abf6c4d29d: Pull complete 
a9edb18cadd1: Pull complete 
589b7251471a: Pull complete 
186b1aaa4aa6: Pull complete 
b4df32aa5a72: Pull complete 
a0bcbecc962e: Pull complete 
Digest: sha256:0d17b565c37bcbd895e9d92315a05c1c3c9a29f762b011a10c54a66cd53c9b31
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
liming@liming-virtual-machine:~$ sudo docker images
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
hello-world   latest    d2c94e258dcb   12 months ago   13.3kB
nginx         latest    605c77e624dd   2 years ago     141MB
mysql         latest    3218b38490ce   2 years ago     516MB
ubuntu        latest    ba6acccedd29   2 years ago     72.8MB
# 后台运行镜像，名称为nginx01 端口从80映射到外部的3344
# -d 后台运行， --name 给容器命名， -p 宿主机端口，容器内部端口
liming@liming-virtual-machine:~$ sudo docker run -d --name nginx01 -p 3344:80 nginx
d204870addabfd6b2faea296ced061aa72d6d224e2178c52f219549fccdce784
liming@liming-virtual-machine:~$ sudo docker ps
CONTAINER ID   IMAGE     COMMAND                   CREATED         STATUS         PORTS                                   NAMES
d204870addab   nginx     "/docker-entrypoint.…"   7 seconds ago   Up 6 seconds   0.0.0.0:3344->80/tcp, :::3344->80/tcp   nginx01
# 访问 
liming@liming-virtual-machine:~$ curl localhost:3344
curl: (56) Recv failure: 连接被对方重置
# liming@liming-virtual-machine:~$ sudo ufw allow 3344  
# 解决方案
liming@liming-virtual-machine:~$ sudo service docker restart
liming@liming-virtual-machine:~$ sudo docker start nginx01
liming@liming-virtual-machine:~$ curl localhost:3344
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>

# 进入nginx
liming@liming-virtual-machine:~$ sudo docker exec -it nginx01 /bin/bash
# 找配置文件
root@d204870addab:/# whereis nginx
nginx: /usr/sbin/nginx /usr/lib/nginx /etc/nginx /usr/share/nginx
root@d204870addab:/# cd /etc/nginx 
root@d204870addab:/etc/nginx# ls
conf.d	fastcgi_params	mime.types  modules  nginx.conf  scgi_params  uwsgi_params
root@d204870addab:/etc/nginx# exit
exit
# 停止服务，就无法访问了
liming@liming-virtual-machine:~$ sudo docker stop d204870addab
d204870addab
```
端口暴露的概念
[端口暴露](../assets/drawio/nginx.drawio ':include :type=code')

> 思考：每次改动nginx配置文件，都需要进入容器内部改动十分玛法，可以在容器外部听一个映射路径，达到容器外部修改文件，容器内部就可以自动修改。 -v 数据卷技术

## Tomcat



### ES+Kibana


