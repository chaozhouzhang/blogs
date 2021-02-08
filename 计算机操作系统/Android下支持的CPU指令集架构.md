 对于CPU来说，不同的架构并不意味着一定互不兼容；Android共支持七种不同类型的CPU架构，其兼容特点可总结如下：
armeabi设备只兼容armeabi；
armeabi-v7a设备兼容armeabi-v7a、armeabi；
arm64-v8a设备兼容arm64-v8a、armeabi-v7a、armeabi；
X86设备兼容X86、armeabi；
X86_64设备兼容X86_64、X86、armeabi；
mips64设备兼容mips64、mips；
mips只兼容mips；





### **一，ABI简介**

不同的Android 手机使用不同的CPU，而不同的CPU 支持不同的指令集。CPU 与指令集的每种组合都有专属的应用二进制接口，即ABI。ABI 可以非常精确地定义应用的机器代码在运行时如何与系统交互。但必须为app要使用的每个CPU 架构指定ABI。

> 典型的ABI 包含以下信息：
> 机器代码应使用的CPU 指令集。
> 运行时内存存储和加载的字节顺序。
> 可执行二进制文件（例如程序和共享库）的格式，以及它们支持的内容类型。
> 在代码与系统之间传递数据的各种规范。这些规范包括对齐限制，以及系统调用函数时如何使用堆栈和寄存器。
> 运行时可用于机器代码的函数符号列表- 通常来自非常具体的库集。

不同的ABI类型一般有自己支持指令集；

### **二，CPU架构和ABI关系**

Android系统目前支持以下七种不同的CPU架构：ARMv5，ARMv7 (从2010年起)，ARMv8(2011年11月)，x86 (从2011年起)，MIPS (从2012年起)，MIPS64和x86_64 (从2014年起)，每一种都关联着一个相应的ABI。
应用程序二进制接口（Application Binary Interface）定义了二进制文件（尤其是.so文件）如何运行在相应的系统平台上，从使用的指令集，内存对齐到可用的系统函数库。在Android系统上，每一个CPU架构对应一个ABI：armeabi，armeabi-v7a，arm64-v8a，x86，mips，mips64，x86_64。

### **三，主流API类型**

armeabi-v7a: 第7代及以上的 ARM 处理器。2011年15月以后的生产的大部分Android设备都使用它.
arm64-v8a: 第8代、64位ARM处理器，很少设备，三星 Galaxy S6是其中之一。
armeabi: 第5代、第6代的ARM处理器，早期的手机用的比较多。
x86: 平板、模拟器用得比较多。
x86_64: 64位的平板。
Android应用支持的ABI取决于APK中位于lib/ABI目录中的.so文件，其中ABI可能是上面说过的七种ABI中的一种。

### **四，市场占有率**

mips / mips64: 极少用于手机可以忽略
x86 / x86_64: x86 架构的手机都会包含由 Intel 提供的称为 Houdini 的指令集动态转码工具，实现对 arm .so的兼容，再考虑 x86 1% 以下的市场占有率，x86 相关的两个 .so 也是可以忽略的
armeabi: ARM v5 这是相当老旧的一个版本，缺少对浮点数计算的硬件支持，在需要大量计算时有性能瓶颈
armeabi-v7a: ARM v7 目前主流版本
arm64-v8a: 64位支持

### **五，兼容性使用**

如果应用只包含了 armeabi，那么在所有Android设备都可以运行；
如果应用只包含了 armeabi-v7a，除armeabi架构的设备外都可以运行；

### **六，.so库使用及适配**

.so库的正确使用姿势其实就两句话：

为了减小 apk 体积，可以只保留 armeabi 和 armeabi-v7a 两个文件夹，并保证这两个文件夹中 .so 数量一致且一一对应；
对只提供armeabi ABI类型的第三方 .so，原样复制一份到 armeabi-v7a 文件夹

### **七，其他**

armeabi
注意：此ABI已在NDK r17中移除。