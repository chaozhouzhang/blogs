在计算机科学中，是一种用于[二进制文件](https://baike.baidu.com/item/二进制文件/996661)、[可执行文件](https://baike.baidu.com/item/可执行文件)、[目标代码](https://baike.baidu.com/item/目标代码/9407934)、共享库和核心转储格式文件。

是UNIX系统实验室（[USL](https://baike.baidu.com/item/USL)）作为应用程序二进制接口（Application Binary Interface，[ABI](https://baike.baidu.com/item/ABI)）而开发和发布的，也是[Linux](https://baike.baidu.com/item/Linux/27050)的主要可执行文件格式。

1999年，被86open项目选为[x86架构](https://baike.baidu.com/item/x86架构/7470217)上的类[Unix操作系统](https://baike.baidu.com/item/Unix操作系统)的二进制文件标准格式，用来取代[COFF](https://baike.baidu.com/item/COFF)。因其可扩展性与灵活性，也可应用在其它处理器、计算机系统架构的操作系统上。





- 中文名

  可执行与可链接格式

- 外文名

  Executable and Linkable Format

- 常用扩展名

  o，so，elf，prx

- 开发者

  Unix系统实验室

- 类  型

  文件格式

- 领  域

  计算机科学

ELF文件由4部分组成，分别是ELF头（ELF header）、程序头表（Program header table）、节（Section）和节头表（Section header table）。实际上，一个文件中不一定包含全部内容，而且它们的位置也未必如同所示这样安排，只有ELF头的位置是固定的，其余各部分的位置、大小等信息由ELF头中的各项值来决定。