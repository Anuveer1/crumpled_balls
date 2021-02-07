class Bin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.binWidth=200;
		this.binHeight=100;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.binWidth, this.wallThickness, {isStatic:true})
		this.lWallBody=Bodies.rectangle(this.x-this.binWidth/2, this.y-this.binHeight/2, this.wallThickness, this.binHeight, {isStatic:true})
		Matter.Body.setAngle(this.lWallBody, this.angle);
		

		this.rWallBody=Bodies.rectangle(this.x+this.binWidth/2, this.y-this.binHeight/2, this.wallThickness, this.binHeight, {isStatic:true})
		Matter.Body.setAngle(this.rWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.lWallBody)
		World.add(world, this.rWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.lWallBody.position;
			var posRight=this.rWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill("white")
			stroke("white")
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.binHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke("white")
			angleMode(RADIANS)
			fill("white")
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.binHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke("white")
			angleMode(RADIANS)
			fill("white")
			rect(0,0,this.binWidth, this.wallThickness);
			pop()
			
	}

}