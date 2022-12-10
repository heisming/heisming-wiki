# Git

### 痛点1：开发一半发现想把自己的项目上传GIT仓库

#### 方法1：移动复制文件

首先在github上新建一个仓库

1.首先把代码SSH方式克隆到本地

```shell
git clone git@github.com:heisming/helloworld.git
```

2.然后复制自己项目的所有文件到刚刚克隆下来的仓库中

3.然后Push到远程仓库上去

```shell
git push -u origin main
```



#### 方法2：强行合并两个仓库

第二种方法就是先将本地的项目初始化为一个git仓库，然后再强行合并本地仓库和远程仓库，由于这两个仓库是完全不同的两个仓库，所以直接pull都会报错，需要在pull的时候加上`–allow-unrelated-histories`才可以pull成功。此方法适用于本地项目已经是一个git仓库的情况。


具体步骤如下：

1、新建git仓库，将本地项目设置为一个git仓库。如果本地项目已经是一个git仓库了，请跳过这一步。在项目根目录下：

```shell
git init
```

2、把当前目录下的已有文件全部加到刚刚新建的git仓库中：

```shell
git add .
```

3、保存刚刚加入的文件，并书写保存信息：

```shell
git commit -m 'push current files'
```

4、将本地仓库与远程仓库关联起来：

```shell
git remote add origin git@github.com:heisming/helloworld.git
```

5、pull远程仓库的内容，更新本地仓库，使用–allow-unrelated-histories忽略本地仓库和远程仓库的无关性，强行合并（关键）

```shell
git pull origin main --allow-unrelated-histories
```

6、把本地仓库的内容push到远程仓库：

```shell
git push -u origin main
```

## 痛点2：一台电脑同时提交gitlab和github
> 仓库地址前面的可以自定义名称
```shell
git remote add gitlab-origin 'gitlab仓库地址'
git remote add gitee-origin 'gitee仓库地址'
git remote add github-origin 'github仓库地址'
```

## Git基本(指针)

### 发展阶段

**`本地版本控制` => `集中式版本控制(svn)`  => `分布式版本控制软件（git）`**

### Git三大区域

`工作区(coding)` =添加=> `暂存区(暂时存放未提交的内容)` =提交=>  `Git仓库：本地仓库（本地版本库）`=推送=`远程仓库（远程版本库）`

- 工作区
  - 项目目录，写代码的地方
  - 新增、删除、修改文件内容
- 暂存区
  - 暂时存放未提交的内容
  - 只要工作区的文件有变动，就需要将工作区的变动添加到暂存区
- Git仓库/版本库
  - Git仓库= 本地昂库 + 远程仓库
  - 将暂存区内容提交到本地仓库，生成一个版本
  - 如有需要，将本地仓库中的版本推送至远程仓库



### 生成版本

- 全局配置个人信息（仅配置一次）

  ```sh
  git config --global user.name 'username'
  git config --global user.email 'email@email.com'
  ```

- 常用的Git命令

  ```sh
  初始化仓库
  git init
  工作区内容 添加到 暂存区
  git add .
  查看当前文件状态：红色 => 与暂存区不同，绿色 => 可以提交 
  git status
  暂存区内容 提交到 本地仓库
  git commit -m 'commit info'
  ```



### 版本重置

```sh
查看commit id
git log --oneline
  7c5910c (HEAD -> main) 开发底部
  0412389 修改了title
  92a7511 修改index.html
重置本地仓库
git reset --soft 0412389(commit id)
or
重置本地仓库和暂存区（默认）
git reset --mixed 92a7511
or
重置本地仓库、暂存区和工作目录（会覆盖原有代码）
git reset --hard  92a7511
查看状态
git status
查看历史所有记录，包括所有版本
git reflog
查看提交记录，不包括“丢弃”的版本
git log
```



### .gitignore

`.gitignore`文件：用于指定哪些文件不需要Git管理

```.gitignore
# 注释
# 要忽略的指定文件
test.html
# 忽略所有文件名file的文件
file.*
# 忽略所有.py的文件
*.py
# 取反,不忽略test.tmp文件，让Git管理起来
!test.tmp
# 忽略 node_modules目录下所有文件
node_modules/
# Git管理的是文件，空目录自动被忽略
# Numerous always-ignore extensions
*.bak
*.patch
*.diff
*.err
# temp file for git conflict merging
*.orig
*.log
*.rej
*.swo
*.swp
*.zip
*.vi
*~
*.sass-cache
*.tmp.html
*.dump
# OS or Editor folders
.DS_Store
._*
.cache
.project
.settings
.tmproj
*.esproj
*.sublime-project
*.sublime-workspace
nbproject
thumbs.db
*.iml
# Folders to ignore
.hg
.svn
.CVS
.idea
node_modules/
jscoverage_lib/
bower_components/
dist/ 
```



### 分支

只在`main`分支上保留完全稳定的代码

在dev分支上做开发，最终合并到main分支上

在hotfix分支上做紧急修复，最终合并到main分支上

- 只有main分支时
  - `C1` == `C2` == `C3`  == ... ==main==>

- 有多个分支（main是主分支，必须提交一次才能创建新分支）
  - `C1`  == ... ==main==>
  - `C2`  ==  `C3` == ... ==创建dev==>
- 切换分支命令： `git branch main`
- 如果main分支出现了问题需要修复，那么就创建hotfix分支
  - `C4`  ==  `C5` == ... ==创建hotfix==>
  - 切换到main分支上，将hotfix和main分支代码进行合并
    - `git merge`



#### 创建和切换

```sh
git init
create new file index.html
git add .
git status
git commit -m '初始化index.html'
git log --oneline
查看分支
git branch -V
创建分支
git branch dev
git branch -V
切换分支
git checkout/switch dev
查看分支
git branch
修改index.html文件内容
git add .
git commit -m 'add title'
git log --oneline
继续修改index.html文件内容
git add .
git commit -m 'add body'
git log --oneline
突然，项目出现紧急情况,切换到main分支上进行创建分支修复
git checkout main
git log --oneline
创建紧急修复分支
git branch hotfix
进入分支
git checkout hotfix
修改index.html文件内容<title>heisming</title>
git status
git add .
git commit -m '修复title代码'
git log --oneline
git checkout main
git log --oneline
```

#### 合并和删除

- 合并分支时，先切换到最终要合并到的分支，再合并
- 合并分支时可能产生冲突
  - 在两个不同的分支中，对同一个文件的同一个部分进行了不同的修改
  - 产生了冲突，需要人为解决后再提交一次

```sh
git checkout main
合并分支
git merge hotfix
git log --oneline
查看分支
git branch -V
删除分支
git branch -D hotfix

git checkout dev
修改index.html代码<title>ming</title>
git status

git add .
git commit -m '再次开发底部修改title'
git log --oneline
git checkout main
git log --oneline
git merge dev
出现冲突，手动选择合并内容
  Auto-merging index.html
  Automatic merge failed; fix conflicts and then commit the result
git status
git add .
git commit -m '合并完成'
git log --oneline --graph

git checkout dev
git merge main
git log --oneline --graph
```



### 远程仓库

[GitHub](#Git使用API)：远程仓库服务器、代码托管平台、全球最大的同性交友网站

Gitee：国内版的GitHub，访问速度比GitHub快

```sh
配置远程地址别名
git remote add origin https://gitee.com/heisming/demo.git
检查
git remote -v
克隆远程仓库项目
git clone https://gitee.com/heisming/demo.git
推送main分支内容至远程仓库
git push origin main(or --all)
git log --oneline

拉取分支代码
git pull origin main
git log --oneline
git status
```

GitLab：一个开源项目，可用于搭建自己的远程仓库



### Git常用命令

熟练掌握Git常用命令



#### 单人开发时使用Git

- 每天开始工作的时候，都应该从远程仓库拉取新的代码
- 每天工作完都应该把代码推送到远程仓库



#### 多人协作开发时使用Git(配合GitHub或Gitee)

##### 团队内协作开发

- 每天开始工作的时候，都应该从远程仓库拉取新的代码
- 每天工作完都应该把代码推送到远程仓库
- 每一次推送前需要先拉取

A同事

```sh
git add .
git commit -m 'a is done'
忘了push
git push origin dev
新建一个index.js
git add .
git commit -m 'index.js is created'
git log --oneline
git push origin dev
报错，所以得先拉取B同事开发完的代码再进行push
git pull origin dev
git push origin dev
```

B同事（new）

```sh
克隆远程服务器的项目
git clone https://gitee.com/heisming/helloworld/demo.git
git branch -v
git checkout dev
git log --oneline
如果A同事忘了push导致代码不一致，需要再次拉取
git pull origin --all
我开发完了
git add .
git commit -m 'B is done'
git log --oneline
git push origin dev
```



##### 跨团队协作开发

> 一般用来维护开源项目

1. 把想贡献代码的仓库fork到自己的远程仓库
2. 在自己的远程仓库做提交
3. 完成后通过Pull Request向对方贡献代码（需对方审核）

A是正式工，ming是外援工

- 先将A的项目地址发送给B，然后B将A的[项目地址](https://gitee.com/heisming/helloworld)访问过后`fork`下来

- ming

  - ```sh
    找到fork后的项目地址
    git clone https://gitee.com/ming/helloworld/demo.git
    git branch -v
    git checkout dev
    修改需要修改的代码
    git status
    git add .
    git commit -m '解决了'
    git remote -v
    git pull origin dev
    git push origin dev
    发起一个+Pull Request请求
    ```

- A进行代码审核和测试然后进行最后合并

  - ```sh
    拉取完继续开发
    git pull origin dev
    ```



## Git使用API

1、安装Git（参考如下作者文章）

> https://blog.csdn.net/mukes/article/details/115693833

2、登录github并创建自己的代码仓库

> https://github.com/

3、写代码并提交commit

创建`.gitignore`文件并写上忽略文件全名

4、复制线上目录到本地

```shell
git clone git@github.com:heisming/helloworld.git
```

5、初始化上传信息（配置用户名和邮箱）

```shell
git config --global user.email "976236190@qq.com"
git config --global user.name "HEISMING"
```

### 开始基础操作

初始化git仓库

```shell
git init 
```

提交暂存区

```shell
git add .
```

提交到远程仓库

```shell
git commit -m "first commit"
```

查看当前的项目有哪些改动

```sh
git status
```



### 第一次使用

打开你的github仓库中的Repositories，复制命令

```shell
git remote add origin https://github.com/heisming/helloworld.git
```

如果出现错误：error: remote origin already exists.

解决方法：`git remote -v`查看是否重复 

- origin  https://github.com/heisming/helloworld.git (fetch)
- origin  https://github.com/heisming/helloworld.git (push)

1、先输入$`git remote rm origin`(删除关联的origin的远程库)

2、再输入$ `git remote add origin git@github.com:(github名)/(git项目名).git` 就不会报错了！

3、如果输入$ `git remote rm origin` 还是报错的话，error: Could not remove config section 'remote.origin'. 我们需要修改gitconfig文件的内容

4、找到你的`github`的安装路径，我的是`C:\Users\heisming\AppData\Local\GitHub\PortableGit_ca477551eeb4aea0e4ae9fcd3358bd96720bb5c8\etc`

5、找到一个名为`gitconfig`的文件，打开它把里面的[remote "origin"]那一行删掉就好了！



### ★秘钥配置（就不用输入密码和其他了key了）

> https://blog.csdn.net/lsyz0021/article/details/52064829
>
> 秘钥失败的问题：https://blog.csdn.net/weixin_42469936/article/details/105854741
>
> 秘钥迁移的问题：https://blog.csdn.net/lvshuocool/article/details/101050950



### 修改分支

```shell
git branch -M main
```

### 上传

```shell
git push -u origin main
```

### 查看状态

```shell
git status
```

```shell
 On branch main
        Your branch is up to date with 'origin/main'.

        Changes not staged for commit:
          (use "git add <file>..." to update what will be committed)
          (use "git restore <file>..." to discard changes in working directory)
                modified:   index.js // 这里表示项目被改动的地方

        no changes added to commit (use "git add" and/or "git commit -a")
```

### 查看历史记录

```shell
git log
```

```
commit b58cba7d64efbf347d0e5e29215f3336b2065870 (HEAD -> main, origin/main)
        Author: HEISMING <976236190@qq.com>
        Date:   Sun Aug 29 09:07:17 2021 +0800

      first commit
```

### 查看单个人的历史记录

```shell
git log --author='HEISMING'
```



### 修改项目文件如何操作

1、 查看修改的文件名

```shell
git status
```

红色部分为修改未加入modified: xxx.xxx



2、修改的文件名

```sh
git add 修改的文件.XXX
git status 查看
```

绿色部分为修改已加入未提交modified: xxx.xx

3、 提交

```sh
git commit
```



### 手动删除不需要的文件

1、 查看修改的文件名

```sh
git status
```

红色部分为修改未加入delete: xxx.xxx



2、执行`git add .`

`git status`查看文件

3、提交`git commit -m "delete commit"`

`git log`查看



### 命令行删除文件

```sh
1、git rm xxx.xx
2、git stauts
    deleted xxx.xx
3、git add .
4、git commit -m "cmd delete file"
5、git log
```



### 手动重命名

```sh
0、手动修改文件名后
1、git status
   deleted demo.xx
   123.xxx
2、git add 123.xx
   git rm demo.xx
3、git status
     renamed: demo.xx -> 123.xx
4、git commit -m "hand rename"
   git log
```



### 命令重命名

```sh
1、git mv demo.xx 123.xx
2、git status
    renamed: demo.xx -> 123.xx
3、git commit -m "cmd rename"
4、git status
    git log
```



### 移动文件

```sh
1、git mv demo.xx folder
    git status
     renamed: demo.xx -> folder/demo.xx
2、git commit -m "move folder"
```



### 移动并重命名

```sh
1、git mv demo.xx folder/home.xx
  git status
    renamed: demo.xx -> folder/home.xx
  git commit -m "move and rename flie"
2、git log
```



### 查看文件前后变化

```sh
1、git log --pretty=oneline xxx/xxx.xx
   commit key: b58cba7d64efbf347d0e5e29215f3336b2065870 => 复制
   git show b58cba7d64efbf347d0e5e29215f3336b2065870
2、git log -p xxx/xxx.xx
```



### 一键还原

```sh
1、查看不同（部分）
  git diff
2、回到上一次提交状态
  git status
  git checkout -- xxx/xxx.xx
  git status
```



### 文件追踪

```sh
1、文件改动过后没有git add xxx.xx操作是可以使用 git checkout -- xxx.xx回退
2、撤销文件追踪：git reset HEAD xxx/xxx.xx
  git checkout -- xxx.xx就可以了
```



## 想让项目回到上一版本时如何进行操作

```sh
前提、whlle(5--){
       git add .
       git commit -m 'number 1~5'
    }
      git reset --hard HEAD^^  ^ => 回退一个版本
      git log 查看commit key
    或者
      git reset --hard b58cba (commit key前n位)
```



## 想让某一文件回到指定版本时如何进行操作

```sh
git checkout b58cba (commit key前n位) -- xxx.xx
git add .
git commit -m 'changed'
```



## 想要修改内容之后推送上传至远程仓库如何操作

```sh
git add.
git commit -m 'xxx'
git log
git push (-u origin main)
```



## 版本加独特标签，做所有版本标签管理时如何进行操作

### 创建标签

```sh
git tag v1.0
```

### 检查标签

```sh
git tag
```

### 获取 commit key

```sh
git log
```

### 增加标签到版本

```sh
git tag v0.5 b58cba (commit key前n位)
```

### 查看是否成功

```sh
git log
```

### 删除标签

```sh
git tag -d v0.5
```

### 标签推送至仓库

```sh
git push origin v1.0
```



## 想要切换、删除分支时如何进行操作

```sh
创建分支
  git branch xxxx
查看分支
  git branch
切换分支
  git checkout xxx
删除分支(非当前分支)
  git branch -d xxx
创建并切换
  git checkout -b xxx
commit状态无法删除(-D强制删除)
  git branch -D xxx
```



## 如何正确合并分支

分支代码合并到另一个分支

先切换到需要合并的主分支

```sh
git merge xxx
```

## 当合并分支有冲突时如何正确合并分支

```sh
 1、两个以上的人操作相同的代码块(忽略某一个分支,保留当前分支)
      git merage --abort
 2、手动删除自动注释，并手动调整正确代码并保存
      git add .
      git commit 
        Merge branch 'dev'
        Confilicts:
            xxxx.xx
      
      :wq退出
```

## 不同人想要查看版本路线如何进行操作

```sh
1、git log --oneline
2、git log --oneline --graph
```

## 不同人想要删除不想要的分支如何操作

```sh
1、拉取所有远程仓库分支
  git fetch
2、查看所有分支
  git branch -av
3、删除分支
  git push origin --delete xxx

问题 ：OpenSSL SSL_read: Connection was reset, errno 10054
```



## 不同人修改了不同文件如何处理

不同分支push不相同文件名修改了不同的代码会报错，需要merge代码

```sh
1、拉取所有远程仓库分支
  git fecht
2、查看远程仓库。为了找到修改的文件，并复制文件名
  git branch -av
3、合并代码
  git merge xxx/xxx.xx
4、对代码修改合并
  插入 => insert
  ESC
  修改完成后 => :wq
5、git push
```



## 不同人修改了相同文件如何处理

```sh
1、HEISMING先初始提交代码
    2、克隆代码，打开cmd，找到远程分支仓库的地址旁绿色的Code按钮，点开复制链接
       git clone https://github.com/heisming/helloworld.git
    3、配置信息
       git config --add --local user.name 'xiaomu'
       git config --add --local user.email 'xiaomu@qq.com'
    4、查看是否成功配置
       git config --local --list
    5、查看远程分支
      git branch -av
    6、创建并切换分支
      git checkout -b name xxx/xxx/xxx
    7、小慕修改的代码
      git add .
      git commit -m 'xx'
      git push
    8、HEISMING操作
      git fecth
      git branch -av
      git checkout -b name xxx/xxx/xxx
      修改代码
      git add .
      git commit -m 'xx'
      git push
```



## 操作未切换分支新建代码错误

```sh
git stash
git status
切换新建分支
git checkout -b feature-logout
git stash pop
git add .
git commit -m 'xxx'
```

## 谷歌浏览器插件

```
1、百度并安装谷歌访问助手
2、安装Octotree、Enhanced GitHub
```

## 一些文章
https://mp.weixin.qq.com/s/tat5fQLFl7D7dQ9GTs8LEQ