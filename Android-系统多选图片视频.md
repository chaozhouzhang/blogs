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

