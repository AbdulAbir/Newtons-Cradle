class sling 
{

    constructor(bodyA,pointB)
    {
         var option = {

        bodyA: bodyA ,   
        pointB: pointB ,
        length:220,
        stiffness:1,
        angularStiffness:1
        
    }
     
     this.pointB = pointB
     this.pointX = bodyA.x;
     this.pointY = bodyA.y - 250;
     this.Sling = Constraint.create(option)
     World.add(world,this.Sling)
    }

    display()
    {
        if(this.Sling.bodyA)
        {
          var pointA = this.Sling.bodyA.position;
          var pointB = this.pointB;
          push();
        
          strokeWeight(3.5)
          stroke("#fff")
          line(pointB.x,pointB.y,pointA.x,pointA.y);
          pop();
        }
    }

   
}