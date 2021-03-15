class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.transparency =255
  }
  display(){
    console.log(this.body.speed)
    
    if(this.body.speed<3){
      super.display()
    }else{
    World.remove(world,this.body)
    push()
    this.transparency= this.transparency-5
    tint(255,this.transparency)
    
    pop()
    }
    
    }
};
