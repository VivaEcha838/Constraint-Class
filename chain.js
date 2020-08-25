class Chain{
    constructor(bodyA,bodyB){
        var options ={
         bodyA : bodyA,       
        bodyB : bodyB,
        stiffness : 0.03,
        length : 20
         }
       this.chain = Constraint.create(options);
       World.add(world,this.chain); 
    }
    display(){
        var pos = this.chain.bodyA.position;
        var posi = this.chain.bodyB.position;

        strokeWeight(4);
        line(pos.x,pos.y,posi.x,posi.y);
        
    }
}