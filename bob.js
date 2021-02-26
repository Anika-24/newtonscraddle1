class Bob{
    constructor(x,y){
        var options ={
            isStatic:false,
           'restitution':0.8,
            'friction':0.3,
            'density':0.5,

        }
      /*  this.x = x;
        this.y = y;
        this.r = r;*/
        this.body = Bodies.circle(x,y,30,options);
        World.add(world,this.body);


    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("pink");
        rectMode(CENTER);
        ellipse(0,0,60);
        pop();
        

        
    }
}