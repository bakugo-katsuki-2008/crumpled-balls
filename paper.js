class paper{
    constructor(x, y, r){
        var options = {
            isStatic : false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.image = loadImage("paper.png");
        this.radius = r;
        World.add(world, this.body);
        
    }

 
display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    /*ellipseMode(RADIUS)
    strokeWeight(3);
    fill(255,0,255)*/
    //ellipse(0,0,this.radius,this.radius);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
    }
    
    }
