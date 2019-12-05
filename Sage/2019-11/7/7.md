### 常用Vector

## Vector1
	
       数字值，也可称为“value”。
	
## Vector2

	该结构既可以表示为一个 二维的位置坐标 ，也可以表示一个向量。
	
	官网文档链接：https://docs.unity3d.com/ScriptReference/Vector2.html
	
	列出几个常用属性
	- Vector2.down
	
		public static Vector2 down; Vector2（0，-1）的简写。也就是 Y 轴的负方向。
	  
	- Vector2.left
	
		public static Vector2 left; Vector2（-1，0）的简写。也就是 X 轴的负方向。
	
	- Vector2.one
	
		public static Vector2 one; Vector2(1, 1)的简写。
	
	- Vector2.right
	
		public static Vector2 right; Vector2（1,0）的简写。
	
	- Vector2.up
	
		public static Vector2 up; Vector2（0,1）的简写。
	  
	- Vector2.zero
	
		public static Vector2 zero; Vector2（0,0）的简写。
	  
	- Vector2.Equals
	
		public bool Equals(object other);
		
		如果给定的向量恰好等于这个向量，则返回true。 就是两个向量的 x和 y 轴都是一样的，就是相等的。
		
		有时候可能向量是浮点数， 对于本质上相等 (但不完全相等)的浮点数向量，这可能返回false。可以使用==操作符来测试两个向量是否近似相等。
	
	- Vector2.Normalize
	
		public void Normalize();
		
		令这个向量的大小为1。
		
		调用该操作之后， 向量的方向还是不变的， 但是长度为1
		
		请注意，该函数将改变当前向量。如果希望保持当前向量不变，请使用 normalized 变量.
		
		如果这个向量太小而不能使用该操作，将会返回一个零向量。
	
	- Vector2.Set
	
		public void Set(float newX, float newY);
		
		设置现有 Vector2 的x和y分量。

    - Vector2.ToString
	
		public string ToString(); 
		
        public string ToString(string format);
		
        把该向量转换为一个字符串， 然后利用 Debug.Log 输出
	
	- Vector2.Distance
	
		public static float Distance(Vector2 a, Vector2 b);
		
        返回a和b之间的距离。
		
        Vector2.Distance(a,b) 等同于 (a-b).magnitude

	- Vector2.Lerp
	
		public static Vector2 Lerp(Vector2 a, Vector2 b, float t);
		
		其中参数 a 为插值的起始向量,参数 b 为插值的结束向量,参数 t 为插值系数。此方法用于求从参数 a 到参数 b 的插值向量。
		
		参数 t 被限制在[0,1]范围内。
		
        When t = 0 returns a. 
        
		When t = 1 return b. 
        
		When t = 0.5 returns the midpoint of a and b.

	- Vector2.MoveTowards
		
		public static Vector2 MoveTowards(Vector2 current, Vector2 target, float maxDistanceDelta);
        
		其中参数 curren t为移动起始点坐标,参数target为移动目标点,参数maxDistance Delta为移动的参考系数。
        
		这与Vector2.Lerp基本相同，都是此用于返回两个向量的插值,但是该操作的最大插值不能超过maxDistancebelta

## Vector3

	该结构既可以表示为一个三维的位置坐标 ，也可以表示一个向量。
	
	官网文档链接：https://docs.unity3d.com/ScriptReference/Vector3.html
	
	列出几个常用属性
	
	- normalized：单位化向量

		public Vector3 normalized{ get; }

		此属性用来获取Vector3实例的单位向量，即返回向量的方向与原方向相同，而模长变为1。

		此属性和实例方法Normalized( )的区别：

		设A、C均为Vector3实例，则：

		执行代码C=A.normalized后只是将向量A的单位向量赋给向量C，而向量A自身未变

		执行代码A=Normalize()便会将向量A进行单位化处理，使得原向量A变成了单位向量

		执行代码C=Vector3.Normalize(A)的结果与执行代码C=A.normalized的相同，即只是将A的单位向量赋给了向量C，而向量A未被改变，因此编
		
		程中常用代码C=A.normalized代替。

	- sqrMagnitude：模长平方

		public float sqrMagnitude{ get; }

		此属性用于返回Vector3实例模长的平方值，由于计算开方值比较消耗资源，在非必要情况下，可以考虑用

		sqrMagnitude代替属性magnitude，例如比较两个向量长度的大小

	- Scale：向量放缩

		public void Scale(Vector3 scale);

		此方法可以对Vector3实例按参照向量scale进行放缩，注意与静态方法Scale(a:Vector3，b:Vector3)的区别：

		实例方法直接更改实例的值，静态方法将值赋给新的实例


	- Angle：求两个向量夹角

		public static float Angle(Vector3 from, Vector3 to );

		返回向量from和to的夹角，单位为角度，返回值的范围为[0,180]，且当from和to至少一个为Vector.zero时，返回值为90

	- ClampMagnitude：向量长度

		public static Vector3 ClampMagnitude(Vector3 vector，float maxLength);

		此方法用于返回向量vector3的一个同方向向量，其模长受maxLength的限制

		返回向量的方向和vector方向相同

		当maxLength大于vector的模长时，返回向量与vector相同

		当maxLength小于vector的模长时，返回向量的模长等于maxLength，但方向与vector相同

	- Lerp：向量插值

		public static Vector3 Lerp(Vector3 from, Vector3 to, float t);

		此方法用于返回一个参数from到to的线性插值向量

		C=Vector3.Lerp(A，B，t)

		当t<=0时，向量C=A；

		当t>=1时，向量C=B；

	- MoveTowards：向量插值

		public static Vector3 MoveTowards(Vector3 current, Vector3 target, float maxDistanceDelta);

		此方法用于返回一个从参数current到参数target的插值向量。

		C=Vector3.MoveTowards(A,B,sp);

		向量C为：C=A+K*(B-A)

		其中K=sp>(dx^2+dy^2+dz^2)^(1/2)?1：sp/(dx^2+dy^2+dz^2)^(1/2)

	- OrthoNormalize：两个坐标轴的正交化

		public static void OrthoNormalize(ref Vector3 normal, ref Vector3 tangent);

		此方法用于对向量normal进行单位化处理，并对向量tangent进行正交化处理

		Vector3.OrthoNormalize(ref v1, ref v2);

		v1、v2变换为v3、v4

		v3=v1.normalized

		4与v3垂直，且v4模长为1

	- OrthoNormalize：3个坐标轴的正交化

		public static void OrthoNormalize(ref Vector3 normal, ref Vector3 tangent，ref Vecotor3 binormal );

		此方法用于对向量normal进行单位化处理，并对向量tangent和binormal进行正交化处理

		向量binormal垂直于向量normal和tangent组成的平面，且向量binormal变换前后的夹角小于90度，即执行OrthoNormalize之后，bi'normal的方向可能垂直于由normal和tangent组成的平面的正面也可能是负面，到底垂直于哪个面由初始binormal的方向决定

	- Project：投影向量

		public static Vector3 Project(Vector3 vector，Vector3 onNormal);

		此方法用于返回向量vector在向量onNormal上的投影向量

		projects=Vector3.Project（from_T.position，to_T.position）；

		projects为from_T在to_T方向上的投影向量，另外，向量to_T无需为单位向量

	- Reflect：反射向量

		public static Vector3 Reflect（Vector3 inDirection，Vector3 inNormal）;

		其中，参数inDirection为入射向量，参数inNormal为镜面向量

		此方法用于返回向量inDi'rection的反射向量

		参数inNormal向量必须为单位向量，否则入射角和反射角不相等

		当inNormal取反时，反射向量不受影响

		入射向量、反射向量和镜面向量共面

	 - RotateTowards：球形插值

		public static Vector3 RotateTowards（Vector3 ccurrent, Vector3 target, float maxRadiansDelta，

		float maxMagnitudeDelta）;

		其中参数current到target的球形旋转插值向量，此方法可控制插值向量的角度和模长

	- Scale：向量放缩

		public static Vector3 Scale(Vector3 a, Vector3 b);

		此方法用于返回向量a和b的乘积，注意和实例方法a.Scale(b)的区别

## Vector4

	常用于角度赋值计算，欧拉角。

### Shader中的Vector

	- Vector1
	
		 数字值，也可称为“value”，还提供属性版本，值可以与Append节点一起用于创建拥有多个分量的向量，值还可以与向量/颜色相乘。
	
	- Vector2
	
		 具有两个分量/值的向量，通常与UV坐标一起使用，将Vector2添加到UV坐标会转换UV坐标，将UV坐标与Vector2相乘会缩放UV。
		 
	- Vector3
	
		 具有三个分量/值的向量，通常用作颜色、位置或方向。
		 
		 典型的三维数据有：空间位置坐标、RGB颜色、法线信息、法线贴图。
		 
	- Vector4
	
		 具有四个分量/值的向量，通常用作具有Alpha通道的颜色，或用作在第四个通道中有一些额外数据的位置，检视器中有两个参数可供曝光：
		 
		 Color和Vector4参数。
		 
		 典型的四维数据有：RGBA颜色
		 
