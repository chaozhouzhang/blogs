在我们应用的线上反馈中，收集到了一些如下到crash。只出现在Android 8.0的手机中。并没有找到任何其他有用的错误信息。

```
Exception: java.lang.IndexOutOfBoundsException: setSpan (-1 ... -1) starts before 0



       at android.text.SpannableStringBuilder.checkRange(SpannableStringBuilder.java:1314)



       at android.text.SpannableStringBuilder.setSpan(SpannableStringBuilder.java:680)



       at android.text.SpannableStringBuilder.setSpan(SpannableStringBuilder.java:672)



       at android.view.accessibility.AccessibilityNodeInfo.setText(AccessibilityNodeInfo.java:2474)



       at android.widget.TextView.onInitializeAccessibilityNodeInfoInternal(TextView.java:10378)



       at android.view.View.onInitializeAccessibilityNodeInfo(View.java:7307)



       at android.view.View.createAccessibilityNodeInfoInternal(View.java:7266)



       at android.view.View.createAccessibilityNodeInfo(View.java:7251)



       at android.view.AccessibilityInteractionController$AccessibilityNodePrefetcher.prefetchDescendantsOfRealNode(AccessibilityInteractionController.java:981)



       at android.view.AccessibilityInteractionController$AccessibilityNodePrefetcher.prefetchDescendantsOfRealNode(AccessibilityInteractionController.java:1004)



       at android.view.AccessibilityInteractionController$AccessibilityNodePrefetcher.prefetchDescendantsOfRealNode(AccessibilityInteractionController.java:1004)



       at android.view.AccessibilityInteractionController$AccessibilityNodePrefetcher.prefetchAccessibilityNodeInfos(AccessibilityInteractionController.java:806)



       at android.view.AccessibilityInteractionController.findAccessibilityNodeInfoByAccessibilityIdUiThread(AccessibilityInteractionController.java:170)



       at android.view.AccessibilityInteractionController.-wrap1(Unknown Source)



       at android.view.AccessibilityInteractionController$PrivateHandler.handleMessage(AccessibilityInteractionController.java:1149)



       at android.os.Handler.dispatchMessage(Handler.java:105)



       at android.os.Looper.loop(Looper.java:166)



       at android.app.ActivityThread.main(ActivityThread.java:6565)



       at java.lang.reflect.Method.invoke(Method.java)



       at com.android.internal.os.Zygote$MethodAndArgsCaller.run(Zygote.java:240)



       at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:767)
```

在对日志进行分析我们可以发现，他是涉及到了Android的无障碍相关的功能。而且是给文本设置ClickableSpan的时候出现的。在进行一系列的尝试后，我发现，如下的代码

```
 SpannableString ss = new SpannableString("123");



 ss.setSpan(new ClickableSpan(),1,1, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);



 tv.setText(ss);
```

在正常的Android 8.0的使用中，并不会出现什么问题，但是如果手机开启了无障碍中的TalkBack功能的话，那么这段代码就必定会出现上述的crash。也就是说，在设置ClickableSpan的时候，如果设置的endIndex == startIndex 那么就会出现crash，，但是在正常的使用中，是可以进行这样的设置的，虽然没有什么显示效果，但是并不会出现任何crash。所以，如果你也出现了类似的问题，就需要检查一下相关代码了。