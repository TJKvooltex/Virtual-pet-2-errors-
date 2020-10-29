class Plinko{
    constructor(x,y,r){
        var options={isStatic:false,
        restitution:1,
        friction:0.5,
     density:1.2 }

     this.x=x;

this.y=y;
this.r=r;

this.body=Bodies.circle(this.x,this.y,this.r,options)
World.add(world,this.body);
    }
display(){
var paperpos = this.body.position;

push();
translate(paperpos.x,paperpos.y);
rectMode(CENTER);
strokeWeight(3);
fill ("white");
ellipse (0,0,40,this.r);
pop ();

}



}

