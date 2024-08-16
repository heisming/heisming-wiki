# 自建镜像站

## CloudFlare

> 此文阅读，前提有一定的网络知识和docker基础

[官方网站](https://www.cloudflare-cn.com/)

1. 邮箱注册账号
2. 添加`.xyz`域名([NameSilo](https://www.namesilo.com/)$2.49购入），并修改为CloudFlare指定的DNS地址
3. 创建Work，并将`work.js`文件修改为[CF-Workers-docker](https://github.com/dearxjoe/CF-Workers-docker.io)，github网址中的JS脚本
4. 保存部署后，将之前添加的域名自定义到works
5. 将`daemon.json`文件的配置域名修改为`.xyz`的work中自定义域名然后重启服务
```
$ sudo vim /etc/docker/daemon.json
$ sudo systemctl daemon-reload
$ sudo systemctl restart docker
```


