# ZMK NKRO

ZMK目前没有支持在NKRO和6KRO之间切换，它的NKRO需要在编译固件时预设。而为了保证最大的兼容性，默认提供下载的固件，都使用的是6KRO。

6KRO是指任意6键(修饰键不计算在内)无冲，这已经能满足绝大多数使用场景了。

如果有需要使用NKRO的，ZMK官方的参考说明: https://zmk.dev/docs/config/system#hid

实际操作时，只需要在 config\boards\shields\klink_kbd\boards\klink.conf 文件里面加一行

```
CONFIG_ZMK_HID_REPORT_TYPE_NKRO=y
```

NKRO的固件，蓝牙需要删除重新配对才能用。同理，如果这后要切换回6KRO的固件，也要删除了重新配对。