

# FLV 格式解析

FLV是由一个FLV Header 和 若干tag(Video Tag, Audio Tag, Script Tag三种，分别代表视频流，音频流和脚本流)组成的二进制文件。 



## FLV Header:

```
    文件类型: 固定为 "FLV" (3 bytes)
    版本信息: 一般为0x01   (1 byte)
    流信息:  0000 0101 此flv文件包含视音频, 0000 0001 此flv文件包含视频 0000 0100 包含音频  (1 byte)
    头长度:  FLV文件头长度,一般为 3+1+1+4=9 bytes  (4bytes)
```



## FLV Body:

Body由一系列pre tag length 和 tag组成。

```
        +-----------------------------------------------------------------------+
        | Pre Tag Length | Tag Header | Tag Data | .... | Pre Tag Length |  ... |
        +-----------------------------------------------------------------------+
        Pre Tag Length: 前一个tag的长度 4 bytes
        Tag Header:     1 + 3 + 3 +1 + 3 = 11 bytes
```



### Tag:

​    tag header (11 bytes) 

```
    +----------------------------------------------------------------------------------------+
    | Tag Type(1 byte) | Tag Data Length(3 bytes) | Timestap(3 bytes) | TimestapExt(1 byte)  | 
    +----------------------------------------------------------------------------------------+
    |  StreamID(3 bytes) |
    +--------------------+  
```





```
        Tag Type:           Tag 类型        1 byte
        0x08    			音频
        0x09    			视频
        0x12    			脚本
        Tag Data Length:    Tag Data 长度   3 bytes
        Timestamp:          时间戳(单位ms)   3 bytes
        TimestampExt:       扩展时间戳       1 byte
        StreamID:           流ID 总是0      3 bytes
   		tag data
        tag data如果是音频数据，第一个byte记录audio信息：
        前4bits表示音频格式（全部格式请看官方文档）:
```

下面两个bits表示samplerate：

```
hex	comment
0	未压缩
1	ADPCM
2	MP3
4	Nellymoser 16-kHz mono
5	Nellymoser 8-kHz mono
10	AAC
```

下面两个bits表示samplerate：

```
hex	comment
0	snd8Bit
1	snd16Bit
```

下面1bit表示类型：

```
hex	comment
0	sndMomo
1	sndStereo
```

之后是数据。

如果是视频数据，第一个byte记录video信息： 

```
hex	comment
1	keyframe
2	inner frame
3	disposable inner frame （h.263 only）
4	generated keyframe
```

后4bits表示解码器ID：

```
hex	comment
2	seronson h.263
3	screen video
4	On2 VP6
5	On2 VP6 with alpha channel
6	Screen video version 2
7	AVC (h.264)
```

