# Athena Keyboard

本键盘为本站当前首款支持小屏幕的产品。以下将简要介绍当前自定义小屏幕动图的方法。

屏幕显示分辨率为128x128。

固件源码地址: https://github.com/openkbd/vial-qmk-v6/tree/ava/keyboards/ydkb/athena1800

## 转换GIF为UF2格式，写入键盘

这里给了一个简单的在线工具，https://openkbd.github.io/tools/athena/

上传后要框选需要裁剪显示的区域，这是一个正方形区域。如果上传的图就是方形，一般直接确认裁剪即可。

确认裁剪后，如果原图总帧数较大，那么可以选择起始帧和结束帧。如果本身平均间隔时间小，还可以进一步勾上帧率减半。只要最终预览结果里，平均间隔在100ms内，作为动图，流畅度是可用的。

再下载对应的GIFx，

|GIFx??30%|描述|
|---|---|
|GIF0_CapsLock|用于显示大小写状态，大小写开启时，显示GIF0。最大31帧。|
|GIF1_Typing|与其他GIFx不同的是，GIF1在键盘空闲时默认速度播放，在打字时3倍速播放。最大31帧。|
|GIF2 - GIF5|用于循环播放的动图。最大63帧。|

下载的文件为 `原文件名_gifx.uf2`，uf2是用于烧录到键盘内置存储里的一种格式。

键盘进入刷机模式后(可以直接使用快捷键 <kbd>LShift+RShift+LCtrl+B</kbd>，更多方法见:[RP2040 BootROM](/qmk/bootloader/rp2040-bootrom.md))。

进入刷机模式后，电脑会显示出一个名为 `RPI-RP2` 的 磁盘设备，之后只需要把要烧录的文件(UF2格式)通过拖动或者复制粘贴，放入这个磁盘里即可。

注意每次只能烧录一个文件，文件越大，烧录所需要的时间越长。如果要烧录多个UF2，则待一个完成后，重新进入刷机模式，再烧录新的UF2。

动图的资源，可以推荐看一下[Steam创意工坊: Wallpaper Engine](https://steamcommunity.com/workshop/browse/?appid=431960&browsesort=trend&section=readytouseitems)，这里大部分预览图都是GIF格式的。

## 屏幕切换快捷键

键盘可切换显示GIF1到GIF5:
- 全局快捷键 <kbd>LShift+RShift+G</kbd>。
- 键盘的默认自定义按键，<key>Fn</key> + <key>++=</key>。

键盘的屏幕可关闭。可使用以下方法开关小屏幕:e
- 全局快捷键， <kbd>LShift+RShift+字母O</kbd>
- 键盘的默认自定义按键，<kbd>Fn+字母O</kbd>


## 额外补充说明

除了使用本站提供的工具转换gif外，也可以使用qmk的官方命令行，先将gif转为qgf格式，再把qgf转为uf2格式。这部分因为要安装qmk的运行环境，所以会复杂一些，可以参考qmk的官方文档。

Athena一共存放了6个图片，它们的qgf文件的大小有如下限制。

|保存地址??30%|内容|大小限制|
|---|---|---|
|0x10400000|GIF0_大小写|1MByte|
|0x10500000|GIF1_动态打字|1MByte|
|0x10600000|GIF2|2MByte|
|0x10800000|GIF3|2MByte|
|0x10A00000|GIF4|2MByte|
|0x10C00000|GIF5|2MByte|
