# 图片上传预览
## 核心API ： FileReader (浏览器)
- IE 10/11 partial support
- [caniuse](https://caniuse.com/#search=FileReader)
- [MDN介绍](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)
## 属性
- FileReader.error 只读
- FileReader.readyState 只读

| 常量名  | 值  | 描述                  |
| ------- | --- | --------------------- |
| EMPTY   | 0   | 还没有加载任何数据.   |
| LOADING | 1   | 数据正在被加载.       |
| DONE    | 2   | 已完成全部的读取请求. |

## 事件
- FileReader.onloadstart
  - 该事件在读取操作开始时触发。
- FileReader.onprogress
  - 该事件在读取Blob时触发。
- FileReader.onloadend
  - 该事件在读取操作结束时（要么成功，要么失败）触发。
- FileReader.onload
  - 该事件在读取操作完成时触发。
- FileReader.onerror
  - 该事件在读取操作发生错误时触发。
- FileReader.onabort
  - 该事件在读取操作被中断时触发。

## 方法
- FileReader.abort()
  - 中止读取操作。在返回时，readyState属性为DONE。
- FileReader.readAsArrayBuffer()
  - 一旦完成, result 属性中保存的将是被读取文件的 ArrayBuffer 数据对象.
- FileReader.readAsBinaryString() 
  - 一旦完成，result属性中将包含所读取文件的原始二进制数据。
- FileReader.readAsDataURL()  (图片转 base64)
  - 一旦完成，result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容。
- FileReader.readAsText()
  - 一旦完成，result属性中将包含一个字符串以表示所读取的文件内容。

## demo
```html
<input type="file" name="file" id="file">
<img src="" alt="" class="preview">
```
```javascript
$(function(){
    $('#file').on('change',function(e) {
      // console.log(e);
      // console.log(e.target.files);
      // console.log(e.target.files[0]);
      
      var reader = new FileReader();
      // reader.readAsDataURL(e.target.files[0]);
      // reader.readAsBinaryString(e.target.files[0]);
      reader.readAsText(e.target.files[0])
      reader.onload = function(e) {
        console.log(e.target.result);
        $('.preview').attr('src',e.target.result)
      }
    })
  })
```

# text