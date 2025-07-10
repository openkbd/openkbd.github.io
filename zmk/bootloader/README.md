# Bootloader，刷固件

这里介绍如何不同的Bootloader刷固件的不同方法，同样类型的Bootloader刷固件方式大致是相同的。

目前本站zmk的键盘，使用的Bootloader都是基于 https://github.com/adafruit/Adafruit_nRF52_Bootloader/ 的。

进入刷机模式的方式有多种。

- 键盘上设置按键 RESET，然后长按这个键，进入刷机模式。
- 在电池开关关闭状态，按住Esc不放，插入数据线。

刷机模式下，指示灯会显示绿色呼吸灯模式，电脑上会显示一个名称为KLINK-BOOT的磁盘。如果一段时间无操作，键盘会自动退出刷机模式。

![](assets/bootloader01.png)

要刷新固件，只需要将新固件的 UF2 文件拖到这个磁盘里。