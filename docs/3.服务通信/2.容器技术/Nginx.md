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
```bash
# 之前的启动都是后台，停止了容器，容器还是可以查到。
# 一般用来测试，用完就删除容器，但保留镜像
liming@liming-virtual-machine:~$ sudo docker run -it --rm tomcat:9.0
Unable to find image 'tomcat:9.0' locally
9.0: Pulling from library/tomcat
0e29546d541c: Pull complete 
9b829c73b52b: Pull complete 
cb5b7ae36172: Pull complete 
6494e4811622: Pull complete 
668f6fcc5fa5: Pull complete 
dc120c3e0290: Pull complete 
8f7c0eebb7b1: Pull complete 
77b694f83996: Pull complete 
7662046c36cb: Pull complete 
b93639122cb4: Pull complete 
Digest: sha256:cd96d4f7d3f5fc4d3bc1622ec678207087b8215d55021a607ecaefba80b403ea
Status: Downloaded newer image for tomcat:9.0
Using CATALINA_BASE:   /usr/local/tomcat
Using CATALINA_HOME:   /usr/local/tomcat
Using CATALINA_TMPDIR: /usr/local/tomcat/temp
Using JRE_HOME:        /usr/local/openjdk-11
Using CLASSPATH:       /usr/local/tomcat/bin/bootstrap.jar:/usr/local/tomcat/bin/tomcat-juli.jar
Using CATALINA_OPTS:   
NOTE: Picked up JDK_JAVA_OPTIONS:  --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.io=ALL-UNNAMED --add-opens=java.base/java.util=ALL-UNNAMED --add-opens=java.base/java.util.concurrent=ALL-UNNAMED --add-opens=java.rmi/sun.rmi.transport=ALL-UNNAMED
23-May-2024 15:01:38.568 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server version name:   Apache Tomcat/9.0.56
23-May-2024 15:01:38.577 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server built:          Dec 2 2021 14:30:07 UTC
23-May-2024 15:01:38.578 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Server version number: 9.0.56.0
23-May-2024 15:01:38.578 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log OS Name:               Linux
23-May-2024 15:01:38.578 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log OS Version:            6.5.0-35-generic
23-May-2024 15:01:38.579 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Architecture:          amd64
23-May-2024 15:01:38.580 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Java Home:             /usr/local/openjdk-11
23-May-2024 15:01:38.580 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log JVM Version:           11.0.13+8
23-May-2024 15:01:38.581 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log JVM Vendor:            Oracle Corporation
23-May-2024 15:01:38.582 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log CATALINA_BASE:         /usr/local/tomcat
23-May-2024 15:01:38.583 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log CATALINA_HOME:         /usr/local/tomcat
23-May-2024 15:01:38.632 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: --add-opens=java.base/java.lang=ALL-UNNAMED
23-May-2024 15:01:38.633 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: --add-opens=java.base/java.io=ALL-UNNAMED
23-May-2024 15:01:38.635 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: --add-opens=java.base/java.util=ALL-UNNAMED
23-May-2024 15:01:38.641 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: --add-opens=java.base/java.util.concurrent=ALL-UNNAMED
23-May-2024 15:01:38.641 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: --add-opens=java.rmi/sun.rmi.transport=ALL-UNNAMED
23-May-2024 15:01:38.641 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Djava.util.logging.config.file=/usr/local/tomcat/conf/logging.properties
23-May-2024 15:01:38.642 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager
23-May-2024 15:01:38.642 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Djdk.tls.ephemeralDHKeySize=2048
23-May-2024 15:01:38.642 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Djava.protocol.handler.pkgs=org.apache.catalina.webresources
23-May-2024 15:01:38.643 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Dorg.apache.catalina.security.SecurityListener.UMASK=0027
23-May-2024 15:01:38.643 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Dignore.endorsed.dirs=
23-May-2024 15:01:38.644 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Dcatalina.base=/usr/local/tomcat
23-May-2024 15:01:38.644 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Dcatalina.home=/usr/local/tomcat
23-May-2024 15:01:38.644 INFO [main] org.apache.catalina.startup.VersionLoggerListener.log Command line argument: -Djava.io.tmpdir=/usr/local/tomcat/temp
23-May-2024 15:01:38.663 INFO [main] org.apache.catalina.core.AprLifecycleListener.lifecycleEvent Loaded Apache Tomcat Native library [1.2.31] using APR version [1.7.0].
23-May-2024 15:01:38.665 INFO [main] org.apache.catalina.core.AprLifecycleListener.lifecycleEvent APR capabilities: IPv6 [true], sendfile [true], accept filters [false], random [true], UDS [true].
23-May-2024 15:01:38.673 INFO [main] org.apache.catalina.core.AprLifecycleListener.lifecycleEvent APR/OpenSSL configuration: useAprConnector [false], useOpenSSL [true]
23-May-2024 15:01:38.687 INFO [main] org.apache.catalina.core.AprLifecycleListener.initializeSSL OpenSSL successfully initialized [OpenSSL 1.1.1k  25 Mar 2021]
23-May-2024 15:01:39.329 INFO [main] org.apache.coyote.AbstractProtocol.init Initializing ProtocolHandler ["http-nio-8080"]
23-May-2024 15:01:39.400 INFO [main] org.apache.catalina.startup.Catalina.load Server initialization in [1158] milliseconds
23-May-2024 15:01:39.544 INFO [main] org.apache.catalina.core.StandardService.startInternal Starting service [Catalina]
23-May-2024 15:01:39.545 INFO [main] org.apache.catalina.core.StandardEngine.startInternal Starting Servlet engine: [Apache Tomcat/9.0.56]
23-May-2024 15:01:39.569 INFO [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["http-nio-8080"]
23-May-2024 15:01:39.608 INFO [main] org.apache.catalina.startup.Catalina.start Server startup in [206] milliseconds
# Ctrl + C
liming@liming-virtual-machine:~$ sudo docker images
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
hello-world   latest    d2c94e258dcb   12 months ago   13.3kB
nginx         latest    605c77e624dd   2 years ago     141MB  
tomcat        9.0       b8e65a4d736d   2 years ago     680MB  <----
mysql         latest    3218b38490ce   2 years ago     516MB
ubuntu        latest    ba6acccedd29   2 years ago     72.8MB
liming@liming-virtual-machine:~$ sudo docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES



```


### ES+Kibana


