class Ground{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=width
		this.h=height
		this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.body);

	}
	display(){ var pos =this.body.position; rectMode(CENTER); fill("white"); rect(pos.x, pos.y, this.w,this.h); }


}
