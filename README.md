## 后缀计算器

提供在zazu中做简单计算的能力，使用后缀表达式。

## 用法

输入算式可即时求值。

以下列举了一些示例：

示例1：

计算10的阶乘

![case 1](./images/case1.png)

示例2：

计算100以内的奇数和

![case 2](./images/case2.png)

示例3：

一天有多少毫秒

![case 3](./images/case3.png)

## 安装

添加如下配置到配置文件 `~/.zazurc.json`。

```json
{
  "plugins": [
    "pysnow530/zazu-postfix-calculator"
  ]
}
```

安装后重载配置。
