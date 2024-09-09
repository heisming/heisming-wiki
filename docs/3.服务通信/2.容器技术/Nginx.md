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
# 启动容器服务
liming@liming-virtual-machine:~$ sudo docker run -d -p 3355:8080 --name tomcat01 tomcat:9.0
833a58dd8aa88c598260dcdc8418e05a3e440f59b487302c2146e5778d3a9b96
liming@liming-virtual-machine:~$ sudo docker ps
CONTAINER ID   IMAGE        COMMAND             CREATED              STATUS              PORTS                                       NAMES
833a58dd8aa8   tomcat:9.0   "catalina.sh run"   About a minute ago   Up About a minute   0.0.0.0:3355->8080/tcp, :::3355->8080/tcp   tomcat01
# 打开防火墙
liming@liming-virtual-machine:~$ sudo ufw allow 3355
防火墙规则已更新
规则已更新(v6)

liming@liming-virtual-machine:~$ sudo service docker restart

liming@liming-virtual-machine:~$ sudo docker start tomcat01
tomcat01

# localhost:3355是404，因为目录没有默认的配置文件

# 进入容器
liming@liming-virtual-machine:~$ sudo docker exec -it tomcat01 /bin/bash
root@833a58dd8aa8:/usr/local/tomcat# cd webapps
root@833a58dd8aa8:/usr/local/tomcat# ls
# 空的
# 发现问题， 1.linux命令少了。 2. 没有webapps。阿里云镜像的原因，默认是最小的镜像，所有不必要的都剔除掉。
# 保证最小可运行环境
root@833a58dd8aa8:/usr/local/tomcat# cd webapps.dist
root@833a58dd8aa8:/usr/local/tomcat/webapps.dist# ls
ROOT  docs  examples  host-manager  manager
root@833a58dd8aa8:/usr/local/tomcat/webapps.dist# cd ..
root@833a58dd8aa8:/usr/local/tomcat# cp -r webapps.dist/* webapps
root@833a58dd8aa8:/usr/local/tomcat# cd webapps
root@833a58dd8aa8:/usr/local/tomcat/webapps# ls
ROOT  docs  examples  host-manager  manager
# localhost:3355 访问就有tomcat页面了
```

### ES+Kibana

> es 暴露的端口很多！
> es 十分的耗内存
> es 的数据一般需要放置到安全
```bash
# --net somenetwork  网络配置（暂时不用）
# -p 9200:9200  9200 是es的端口， 9300 是kibana的端口

# $ docker run -d --name elasticsearch --net somenetwork -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:tag
# 启动 elasticsearch
liming@liming-virtual-machine:~$ docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.6.2
Unable to find image 'elasticsearch:7.6.2' locally
7.6.2: Pulling from library/elasticsearch
ab5ef0e58194: Pull complete 
c4d1ca5c8a25: Pull complete 
941a3cc8e7b8: Pull complete 
43ec483d9618: Pull complete 
c486fd200684: Pull complete 
1b960df074b2: Pull complete 
1719d48d6823: Pull complete 
Digest: sha256:1b09dbd93085a1e7bca34830e77d2981521a7210e11f11eda997add1c12711fa
Status: Downloaded newer image for elasticsearch:7.6.2
b38f70464ddfda4fe59fe28e8f036d525a9cb879d7caa476d3ef67f53628a89b
liming@liming-virtual-machine:~$ sudo docker ps
CONTAINER ID   IMAGE                 COMMAND                   CREATED          STATUS          PORTS                                                                                  NAMES
b38f70464ddf   elasticsearch:7.6.2   "/usr/local/bin/dock…"   38 seconds ago   Up 36 seconds   0.0.0.0:9200->9200/tcp, :::9200->9200/tcp, 0.0.0.0:9300->9300/tcp, :::9300->9300/tcp   elasticsearch

# 测试es是否成功了
liming@liming-virtual-machine:~$ curl localhost:9200
{
  "name" : "b38f70464ddf",
  "cluster_name" : "docker-cluster",
  "cluster_uuid" : "lIelpVMkTPaW94ipju1QXg",
  "version" : {
    "number" : "7.6.2",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "ef48eb35cf30adf4db14086e8aabd07ef6fb113f",
    "build_date" : "2020-03-26T06:34:37.794943Z",
    "build_snapshot" : false,
    "lucene_version" : "8.4.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}

# 查看es的内存占用情况
liming@liming-virtual-machine:~$ sudo docker stats
CONTAINER ID   NAME            CPU %     MEM USAGE / LIMIT     MEM %     NET I/O       BLOCK I/O         PIDS
b38f70464ddf   elasticsearch   3.34%     1.237GiB / 3.778GiB   32.75%    8.26kB / 0B   2.08MB / 1.93MB   43

# es是十分耗内存(1G+)的，所以一般不建议使用docker部署。

liming@liming-virtual-machine:~$ sudo docker stop b38f70464ddf
b38f70464ddf

# 可以增加内存的限制，修改配置文件 -e 环境配置修改
# -e ES_JAVA_OPTS="-Xms64m -Xmx512m"：最小64m，最大512m
liming@liming-virtual-machine:~$ docker run -d --name elasticsearch-min -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms64m -Xmx512m" elasticsearch:7.6.2
41ed0b9db9fc2bc842d628269e12e6b631ebd047066e2ada6a867da05638f624
liming@liming-virtual-machine:~$ sudo docker stats
CONTAINER ID   NAME                CPU %     MEM USAGE / LIMIT   MEM %     NET I/O       BLOCK I/O         PIDS
41ed0b9db9fc   elasticsearch-min   2.15%     364MiB / 3.778GiB   9.41%     3.26kB / 0B   10.5MB / 1.05MB   43
liming@liming-virtual-machine:~$ curl localhost:9200
{
  "name" : "41ed0b9db9fc",
  "cluster_name" : "docker-cluster",
  "cluster_uuid" : "On4ghh1XTg-e6XjfB-nD8A",
  "version" : {
    "number" : "7.6.2",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "ef48eb35cf30adf4db14086e8aabd07ef6fb113f",
    "build_date" : "2020-03-26T06:34:37.794943Z",
    "build_snapshot" : false,
    "lucene_version" : "8.4.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

> 容器之间相互隔离，如何使用kibana连接es?

[端口暴露](../assets/drawio/kibana_es.drawio ':include :type=code')


### 可视化
Portainer是Docker的图形化界面管理工具！
```bash
# 安装(\后一定要换行)
liming@liming-virtual-machine:~$ sudo docker run -d -p 8088:9000 \
 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
Unable to find image 'portainer/portainer:latest' locally
latest: Pulling from portainer/portainer
772227786281: Pull complete 
96fd13befc87: Pull complete 
0bad1d247b5b: Pull complete 
b5d1b01b1d39: Pull complete 
Digest: sha256:47b064434edf437badf7337e516e07f64477485c8ecc663ddabbe824b20c672d
Status: Downloaded newer image for portainer/portainer:latest
1e59cf63ad7f1d4877a43ffccc95e34a45c3d5803d94fcdefe9d335f1815e8fc
```
访问localhost:8088（阿里云打开安全组访问ip:8088）

[8088](./assets/images/localhost8088.png)

输入密码和确认密码，就可以进去了

[8088](./assets/images/portainer_index.png)

> 极少使用，了解即可