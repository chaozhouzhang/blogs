ABI 和支持的指令集。

| ABI                                                          | 支持的指令集                           | 备注                     |
| :----------------------------------------------------------- | :------------------------------------- | :----------------------- |
| [`armeabi-v7a`](https://developer.android.com/ndk/guides/abis?hl=zh_cn#v7a) | armeabiThumb-2VFPv3-D16                | 与 ARMv5/v6 设备不兼容。 |
| [`arm64-v8a`](https://developer.android.com/ndk/guides/abis?hl=zh_cn#arm64-v8a) | AArch64                                |                          |
| [`x86`](https://developer.android.com/ndk/guides/abis?hl=zh_cn#x86) | x86 (IA-32)MMXSSE/2/3SSSE3             | 不支持 MOVBE 或 SSE4。   |
| [`x86_64`](https://developer.android.com/ndk/guides/abis?hl=zh_cn#86-64) | x86-64MMXSSE/2/3SSSE3SSE4.1、4.2POPCNT |                          |





一般so库只支持arm，不支持x86，因为x86的时长份额很少，并且是越来越少的趋势，x86大部分都是在PC上使用，而且手机上的有些第三方so库也不支持x86，所以app不支持x86，舍弃这一小部分手机。