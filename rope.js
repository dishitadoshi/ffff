class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
    var options ={
     bodyA : body1,
     bodyB : body2,
     //stiffness : 0.01,
     //length : 20  
     pointB:{x:this.offsetX,y:this.offsetY}
    }
    //this.pointB = pointB
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    
    }

    fly(){
        this.objecct3.bodyA = null;
    }
display(){
    if(this.rope.bodyA){
   var pointA = this.rope.bodyA.position;
   var pointB = this.rope.bodyB.position
   strokeWeight(3);
   line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
}
}
}