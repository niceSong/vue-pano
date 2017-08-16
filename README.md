# vue-pano

基于 WebGL 的全景漫游 vue 组件，支持移动设备。

![截图](screen.png)



扫描如下二维码或访问 [https://chichou.github.io/vue-pano/](https://chichou.github.io/vue-pano/) 查看演示。

![二维码](qrcode.png)

## 全景图片拍摄和准备

全景图片可使用三脚架固定的相机配合广角镜头拍摄多个角度的照片，然后通过工具后期拼接：然后经过 [Microsoft ICE](http://research.microsoft.com/en-us/um/redmond/projects/ice/) 或 等工具进行拼接等后期处理：[《使用 Microsoft ICE 制作全景照片》](https://blog.chichou.me/microsoft-ice-制作全景照片-af114142745d)

几个可用的拼接工具：

* [Microsoft ICE](http://research.microsoft.com/en-us/um/redmond/projects/ice/) （免费，仅支持 Windows）
* [ppwwyyxx/OpenPano](https://github.com/ppwwyyxx/OpenPano) （开放源代码，跨平台）
* [PTGui](https://www.ptgui.com/) （收费，支持 Mac OSX 和 Windows）
* [Hugin](http://hugin.sourceforge.net/) （开放源代码，跨平台）
* [Auto Stitch](http://matthewalunbrown.com/autostitch/autostitch.html)（提供免费版和专业版，支持 Mac OSX 和 Windows）

此外 Google 的 [PhotoSphere](https://www.google.com/streetview/apps/) 应用可以使用 Android 或 iPhone 手机拍摄全景照片并导出，官方版本的 Android 系统相机集成了这个功能。手持设备因为缺少三脚架，在室内等狭小空间拍摄后拼图效果不理想。市面上还有一些专门的全景相机可以直接拍摄。

![两种纹理的区别](texture.png)

vue-pano 使用立方体投影的纹理。如果您的图片素材是 equirectangular 的投影，那么需要使用 PtGui 等工具进行转换。或使用我的另一个工具 [glskybox](https://github.com/ChiChou/glskybox)。纹理图片在不同方向一共有 6 张，可参考 `example/assets/pano` 目录下的示例。

## vue 组件

库仅导出了一个 Pano 组件。

`import Pano from 'vue-pano'`

### 属性

支持的属性有：

* width, height：宽度和高度
* title: 全景图标题
* bundle：全景图纹理路径
* format：全景图图片扩展名
* debug：调试模式

### 代码示例

```javascript
<script>
import Pano from 'vue-pano'
...

export default {
  components: { Pano }
}
</script>
<template>
  <pano title="茶水间" width="720" height="480" bundle="example/assets/pano/pantry/" format="jpg"></pano>
</template>
```

## TODO

- [ ] 将 bundle 改为 json，单独定义六面的 url
- [ ] 渐进式载入
- [ ] 图片进度条

## 许可

MIT

