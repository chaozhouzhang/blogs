跳转到系统选择器，进行图片的多选：

```kotlin
    override fun onClick(v: View?) {
        when (v?.id) {
            R.id.btn_choose_pic -> {
                val intent = Intent()
                intent.type = "image/*"
                intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true)
                intent.action = Intent.ACTION_GET_CONTENT
                startActivityForResult(
                    Intent.createChooser(intent, "Select Picture"),
                    REQUEST_CODE_IMAGE
                )
            }
        }
    }
```

返回选择结果：

```kotlin
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        val uri: Uri
        val fileList: MutableList<String> = ArrayList()
        if (requestCode === REQUEST_CODE_IMAGE && data != null) {
            val imageNames: ClipData? = data.clipData
            if (imageNames != null) {
                Toast.makeText(this, "多選", Toast.LENGTH_LONG).show()
                for (i in 0 until imageNames.itemCount) {
                    val imageUri: Uri = imageNames.getItemAt(i).uri
                    fileList.add(imageUri.toString())
                    println(imageUri)
                }
                uri = imageNames.getItemAt(0).uri
                iv_pic.setImageURI(uri)
            } else {
                Toast.makeText(this, "單選", Toast.LENGTH_LONG).show()
                uri = data.data!!
                fileList.add(uri.toString())
                iv_pic.setImageURI(uri)
            }
        } else {
            Toast.makeText(this, "沒有選擇", Toast.LENGTH_LONG).show()
        }
    }
```

