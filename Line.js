class line{
    constructor(x,y,width,height){
        var options = {
            "restitution" : 0.8,
            "friction" : 0,
            "density" : 1.0
        }
        this.body = Bodies.rectangle(x,y,height,width,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
        
    }
}