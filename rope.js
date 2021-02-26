class Rope{
     constructor(bodyA,pointB){
         var options ={
             bodyA:bodyA,
             pointB:pointB,
             length:100,
             stiffness:1,
             
         }
         this.pointB = pointB;
         this.sling = Constraint.create(options);
         World.add(world,this.sling);

 
 
     }
     display(){
          if(this.sling.bodyA){
               var pointA = this.sling.bodyA.position;
               var pointB = this.pointB;
          
         push();
         strokeWeight(2);
         stroke("white");
         line(pointA.x,pointA.y,pointB.x,pointB.y);
         pop();
       }

 
 
     }
 
 }