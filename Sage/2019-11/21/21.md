### Unity Shader Input基础类

## Constant

	创建一个无理数常量，可选的有PI（圆周率π）、TAU（2π）、PHI（黄金分割1.618）、E（常数e，2.718）、SQRT2（根号2，2^0.5）
	
## Integer

	创建一个整数常量，类型是Vector 1。通过右键菜单可以转换为一个Integer模式的Vector1属性。
	
## Slider

	创建一个使用滑条作为输入的Vector1常量。通过右键菜单可以转换为一个Slider模式的Vector1属性。
	
## Time

	可以获取Unity中的时间值。
	
	- Time 即代码中的Time.time
	
	- Sine Time sin(Time.time)
	
	- Cosine Time cos(Time.time)
	
	- Delta Time Time.deltaTime
	
	- Smooth Delta Time.smoothDeltaTime
	
## Boolean

	创建一个布尔值常量。
	
## Color

	创建一个颜色常量，可选正常颜色或HDR颜色。
	
## Bitangent Vector

	获取mesh的双切线向量。可选的空间有Object, View, World, Tangent。
	
## Normal Vector

	获取mesh的法线向量。可选的空间有Object, View, World, Tangent。
	
## Position

	获取mesh的顶点或片段的位置。可选的空间有Object, View, World, Tangent。

## Screen Position

	获取mesh的顶点或片段在屏幕空间的位置。
	
## Tangent Vector

	获取mesh的顶点或片段的切线向量。可选的空间有Object, View, World, Tangent。

## View Direction

	获取mesh的顶点或片段的视角方向向量。从顶点或片段到相机的方向。可选的空间有Object, View, World, Tangent。