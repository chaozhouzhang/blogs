1、限制两行的EditText

解决：使用StaticLayout进行限制

```kotlin
        var staticLayout: StaticLayout
        val builder = StringBuilder()
        mBinding.etLiveTitle.filters = arrayOf(InputFilter { source, start, end, dest, dstart, dend ->
            val layout = mBinding.etLiveTitle.layout
            builder.clear()
            builder.append(dest)
            builder.append(source)
            staticLayout = StaticLayout(builder,layout.paint,layout.width,layout.alignment,
                    layout.spacingMultiplier, layout.spacingAdd, false)
            if (staticLayout.lineCount >2){
                return@InputFilter ""
            }else{
                return@InputFilter source
            }
        })
```

2、UI根据iOS 750px x 1334px iPhone6 4.7英寸设计

相当于Android的720px x 1280px xhdpi 320的dpi 1dp=2px

此时需要下载的切图需要是设计切图的1.5倍，也就是xxhdpi

3、