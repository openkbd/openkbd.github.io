# 电量显示与充电

一般不用经常关注剩余电量，只要在提醒低电量时，找时间充上电。或者日常偶尔插 USB 使用时充电。

> [!yddh] 提醒
- 电量的百分比只是根据电池电压来估算的，非精确数据。有时可能没有充电，显示剩余电量也变大了。

## 电量显示

现在大部分设备，配置上蓝牙后，都会直接显示剩余电量信息。

如果是低电量了，键盘本身会闪红色指示灯。且Windows系统上，低电量时系统也会弹出通知提醒。


## 充电注意

键盘上一般都保留了一个物理开关，它的作用是电池开关。简单说，打开时，连接电池；关闭时，断开电池。

因此，要给电池充电，是需要开关保持打开状态。

> [!ydda] 注意：建议使用电脑USB口充电
> - 大功率充电器不会提高充电速度，大部分ZMK的键盘，充电电流限制为200到300ma。
> - 做了过压和过流保护，因为大部分USB充电插头，插入键盘是安全的。
> - 如果USB电压输入过低，可能电池无法充满到100%，这时请更换一个接口再尝试。

在充电过程中，充电IC会有一定的发热，这是正常现象。

充到电脑端显示电量为100%了，即可认为已经充满。

> [!yddh] 充电小知识：
> - 充电IC都具有简单的智能管理，当充满电后，会自动停止充电。
> - 停止充电后，如果继续插着线，并不会使用电池的电。
> - 如果长期插电使用，建议在电池开关置于关闭状态。
