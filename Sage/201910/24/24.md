## Shader Graph的使用流程

- 1.创建一个新的Lightweight RP项目，或者在已有项目中在packmanager中手动安装ShaderGraph和Render Pipeline相关的包。
- 2.创建设置SRP（可编程渲染管线）
	- 1).菜单栏Assets > Create > Rendering > Lightingweight Pipeline Asset，会创建出来一个文件，这是渲染管线的配置文件。
	- 2).在菜单栏 Edit > Project Settings > Graphics中设置刚才的SRP文件。
- 3.创建ShaderGraph文件
	- 通过菜单栏 Create > Shader > XXX Graph 可以创建ShaderGraph文件，会在Project创建一个graph文件。
	- PBR Graph PBR图
	- Sub Graph 子图，用于创建一些可复用的节点
	- Unlit Graph 不受光照的图
- 4.双击graph文件即可打开ShaderGraph窗口。
	- ShaderGraph的图是以节点和连线组成的，默认创建出来会有一个Master Node（主节点）。你可以通过把其他节点连接到Master Node来创造你想要的效果。
- 5.创建一个新的材质material，使用创建的shader替换默认的shader，在场景中使用这个材质即可。

## shader中常用的相关节点和参数

- 1.添加节点
	- 添加纹理和其他复杂的交互操作，只要在面板空白处右键点击并选择“Create Node”。
- 2.连接节点
	- 通过拖拽对应的值即可创建连线。
- 1.Master（可以理解为最终的输出，有且只有一个）
	- PBR Master 基于物理渲染的主节点。
		- Albedo 	反照率 	放材质的地方，或者也可以输入一个颜色
		- Normal 	法线 	放法线的地方
		- Emission 	发光 	定义材质的发光值
		- Metallic 	金属 	增加金属质感（要把下面的workflow切换到Metallic模式才有这个选项）
		- Specular 	镜面 	增加玻璃质感（要把下面的workflow切换到Specular模式才有这个选项）
		- Smoothness 	平滑 	配上镜面就得到一颗玻璃球
		- Occlusion 	遮挡贴图？ 	遮挡贴图用于提供关于模型的哪些区域应该接收高或低间接光照的信息
		- Alpha 	α通道 	定义给材质的阿尔法通道图
		- Alpha Clip Threshold 	α剪辑阈值 	alpha值低于此值的点将被丢弃。需要节点连接。预期范围0 - 1。

	- Unlit Master 不反光的主节点（用这个材质图片导进去没有色差）
		- color 	丢材质的地方，或者可以输入一个颜色
		- Alpha 	α通道，定义给材质的阿尔法通道图
		- Alpha Clip Threshold 	α剪辑阈值，alpha值低于此值的点将被丢弃。需要节点连接。预期范围0 - 1。
- 2.Math数学变换节点
- 3.Texture 2D 纹理节点