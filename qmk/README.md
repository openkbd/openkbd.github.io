# QMK

本站主要使用QMK-VIAL构建固件。支持 ydkb.io/ava 在线改键。

也支持Vial改键，Vial的官方说明见: https://get.vial.today/manual/

同时固件会支持VIA，要使用VIA需要手动导入JSON。

在VIAL的基础上有一定的修改，对部分功能按键进行了修改。本文也将对修改过的一些内容，做补充介绍。

```mindmap
QMK
  Key Press
    常规104键盘上能见到的按键
    多媒体键和系统键
    修饰键加按键的组合如Win+Shift+S
    仅多个修饰键同时如Hyper(Ctrl+Shift+Cmd+Opt)
    鼠标模拟键
  层切换
    Layer Momentary
    Layer To
    Layer Toggle
  TAP-KEY
    Layer-Tap(HP) & Layer-Tap(TP) 
    Mod-Tap(HP) & Mod-Tap(TP)
```
