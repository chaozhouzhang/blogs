> 之所以提到CPU架构的问题，其实是iOS开发使用的静态库与动态库与之紧密相连。在运行项目的时候，Xcode需要分析当前运行平台的CPU架构，然后确定所使用的静态库是否支持这个CPU架构。如果不支持就会报错。

### 什么是CPU架构？

CPU架构是CPU厂商给属于同一系列的CPU产品定的一个规范，主要目的是为了区分不同类型CPU的重要标示。
目前市面上的CPU分类主要分有两大阵营，一个是intel、AMD为首的复杂指令集CPU，另一个是以IBM、ARM为首的精简指令集CPU。
两个不同品牌的CPU，其产品的架构也不相同，例如，Intel、AMD的CPU是X86架构的，而IBM公司的CPU是PowerPC架构，ARM公司是ARM架构。
通常，我们知道电脑的CPU架构有X86（32位）和X64（64位）等，但是手机的主流CPU架构是ARM架构，因为采用ARM架构的CPU是一种微处理器，这种处理器功耗低，体积小，更适合手机使用，iPhone的CPU也是如此。

### iOS默认指令集

模拟器：
**i386：**iphone5/iphone5c以下的模拟器
**x86_64：**iPhone5s以上的模拟器
真机：
**armv6：**iPhone、iPhone2、iPhone3G、iPod Touch(第一代)、iPod Touch(第二代)
**armv7：**iPhone3Gs、iPhone4、iPhone4s、iPad、iPad 2
**armv7s：**iPhone5、iPhone5c
**arm64：**iPhone5s、iPhone6、iPhone6p、iPhone6s、iPhone6sp、iPhone7、iPhone7p、iPhone8、iPhone8p、iPhoneX
**arm64e：**iPhone XS、iPhone XS Max、iPhone XR
即：
模拟器32位处理器需要i386架构
模拟器64位处理器需要x86_64架构
真机32位处理器需要armv7，或者armv7s架构
真机64位处理器需要arm64，或者arm64e架构

### 有关指令集使用特点

1. 上述arm处理器指令集，在原则上它们都是向下兼容的。比如iPhone6s的CPU默认指令集是arm64，但是也同时支持armv7s等以前版本的指令集，只是效率变低了而已。
2. xcode模拟器其实是在电脑上的，所以iOS模拟器并没有使用arm指集。它编译运行使用的是x86指令集(或者i386)。而在真机上使用的才是arm类型的指令集。
3. 在Xcode中设置二进制包所支持的指令集，对于编译后的二进制包的大小影响显著，设置支持的指令集个数越少，安装包也越小。

### 实际开发中的选择

Xcode中指令集相关选项（target-Build Settings-Architectures）

 

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8yNDg1NjQ2LWUzNDE0NmQwZGI3OGU2NjUucG5nP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXB8aW1hZ2VWaWV3Mi8yL3cvNzU1L2Zvcm1hdC93ZWJw?x-oss-process=image/format,png)

Architectures

- Architectures:
  指定工程可支持的全部指令集类型
  默认为: Standard architectures - $(ARCHS_STANDARD) ,
- Valid Architectures：
  限制可能被支持的指令集的范围，也就是Xcode编译出来的二进制包类型最终从这些类型产生，而编译出哪种指令集的包，将由Architectures与Valid Architectures的交集来确定
- Build Active Architecture Only：
  指定是否只对当前连接设备所支持的指令集编译
  设置为Yes时，编译速度更快，因为它只编译为支持当前CPU架构的版本；而设置为no时，会编译所有的版本。
  所以，一般Debug的时候设置为Yes，Release的时候设置为No。

### 举例

将Architectures支持arm指令集设置为：armv7,armv7s，对应的Valid Architectures的支持的指令集设置为：armv7s,arm64，那么此时，Xcode生成二进制包所支持的指令集只有armv7s
iPhone5s的CPU架构为arm64，由于可以向下兼容，所以可以运行armv7s指令集工程，但是这会降低iPhone5s的性能。

### 拓展

**32位与64位系统的区别：**

1. CPU一次处理数据的能力是32位还是64位
2. 内存寻址方面，最大寻址空间不同，32位系统最大寻址空间232,大约为4G，也就是说32位系统的处理器最大只支持到4G内存，而64位系统最大支持的内存高达数亿位（264）

**名词解释：**
**x86(86_32):** Intel 8086、80186、80286、80386（32位）、80486、80586等一系列指令集（架构）的泛称，支持16位、32位和64位的架构都有。实际上由于32位x86处理器的统治性地位，术语“x86”几乎表示32位的架构，即x86=x86_32，一般意义上的32位处理器
**x64(x86_64):** 一般意义上的64位处理器
**i386: **指Intel 80386，是第一个32位的x86架构的处理器
**AMD64:** AMD公司生产的第一代64位CPU

 