//create the class for red color box
class Particlered 
{
  //create the constructor function
    constructor(x,y,width,height) 
    {
      var options = 
      {
          //isStatic:true
          friction:1.0,
          restitution:0.8,
          //density:1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height; 
      World.add(world, this.body);
    }

    //create the display function
    display()
    {
      var pos =this.body.position;
      //ellipseMode(CENTER);
      fill("red");
    rect(pos.x, pos.y, this.width,this.height);
    }
  };