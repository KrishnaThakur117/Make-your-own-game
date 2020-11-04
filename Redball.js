class RedBall{
    constructor(x,y,width,height){
        var options = {
           /* 'restitution':0.8,
           'friction':1.0,
           'density':1.0*/
           isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;   
        this.image = loadImage("redball.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rect(0,0,this.width,this.height);
        image(this.image,0,0,this.width, this.height);
        pop();
    }
}