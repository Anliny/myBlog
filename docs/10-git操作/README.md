# GIT 命令
```
创建分支
git branch dev(分支名)

查看分支
git branch -v

切换分支
git checkout dev(创建的分支名)

合并代码到当前分支（这个时候本地分支就有了代码）
git merge master(要合并代码的分支名)

创建远程分支和推送代码
git push origin dev(本地分支名，将创建的本地分支的代码推送到创建的远程分支代码上)

```
## 修改分支名造成的问题
**git 异常： 执行 git pull 出现 Your configuration specifies to merge with the ref 'refs/heads/xxx' ， but no such ref was fetched**
```
出现此类问题，你可以执行一下 git status，
会发现 On branch xxx Your branch is based on 'origin/yyy',
but the upstream is gone. (use "git branch --unset-upstream" to fixup),
可以根据提示执行该命令，
然后再执行 git push --set-upstream origin xxx 即可。
```
> 回头解释一下： 出现此类问题是由于你修改了本地分支 xxx -> yyy，然后你又修改了远程的 xxx -> yyy，由于配置文件进行了配置，则此时本地的 yyy 也会将代码提交到远程的 xxx 中，但是远程的 xxx 已经被你修改掉了，不存在了，所以才会出现这个提交错误。解决办法就是解绑然后重新绑定新的远程分支即可。

## 合并git的某次提交
```
git cherry-pick 某次提交的commit ID

假如当前分支为dev ，已经提交的分支为dev2，在Dev2上面有提交的提交ID为262a920021446a9df26339ea86a456880a3e53f9，现在需要把该分支合并到dev

git cherry-pick 262a920021446a9df26339ea86a456880a3e53f9
```



