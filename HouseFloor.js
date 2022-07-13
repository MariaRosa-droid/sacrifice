class Floor{
    constructor(image, scale, x, y, wall1, wall2, wall3, wall4){
        this.image=image;
        this.scale=scale
        this.sprite=createSprite(x, y);
        this.x=x
        this.y=y
        this.sprite.addImage(this.image);
        this.sprite.scale=this.scale;
        this.wall1=wall1;                
        this.wall2=wall2;            
        this.wall3=wall3;           
        this.wall4=wall4;            
        this.wall1=createSprite(this.x+100, this.y, 20,20);
        this.wall2=createSprite(this.x-100, this.y, 20,20);
        this.wall3=createSprite(this.x, this.y+100, 20,20);
        this.wall4=createSprite(this.x, this.y-100, 20,20);
    }
}