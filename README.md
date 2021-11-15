## 其他

webpack chain

> https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans

## IDE

配置 jsconfig.json , tsconfig.json 文件，实现 js 和 ts 代码的智能跳转和提示

### WebStorm

搜索 ESLint , 勾选 Automatic ESLint 和 Run eslint -- fix on save

Languages & Frameworks | JavaScript | prettier `{**/*,*}.{js,vue,ts,tsx,html,css,less,md,json}`

Languages & Frameworks | Stylelint Sheets | Stylelint

### VSCode

安装 eslint , prettier, volar 插件

## 环境

[构建加速](https://help.aliyun.com/document_detail/202442.html)

- 重置前端依赖环境，cd 到项目目录，删除前端依赖相关文件

  ```bash
  rm -rf node_modules package-lock.json yarn.lock && npm cache clean --force
  ```

- 初始化前端环境 ** 有些系统 nvm 命令需要手动添加到 bash，所以下面命令会找不到 nvm 报错中断，请查看 nvm 安装文档 **
  ```bash
  curl -o- https://raw.fastgit.org/nvm-sh/nvm/master/install.sh | bash && export NVM_NODEJS_ORG_MIRROR="https://npmmirror.com/mirrors/node/" && nvm i lts/gallium && nvm use lts/gallium  && npm config list && npm install -g yarn npm pm2 @vue/cli @quasar/cli
  ```
  - nvm i lts/gallium --reinstall-packages-from=node
    ```bash
    curl -o- https://raw.fastgit.org/nvm-sh/nvm/master/install.sh | bash && export NVM_NODEJS_ORG_MIRROR="https://npmmirror.com/mirrors/node/" && nvm i lts/gallium --reinstall-packages-from=node && nvm use lts/gallium  && npm config list && npm install -g yarn npm pm2 @vue/cli @quasar/cli
    ```
- 安装项目依赖包

  `npm i`

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload
$ npm run dev

# build for production and launch server
$ npm run build

```
