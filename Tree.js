class Tree{
    constructor(image, x, y){
        this.image=image;
        this.sprite=createSprite(x, y);
        this.sprite.addImage(this.image);
        //this.collide(prota);
        prota.collide(this.sprite);
        this.x=x;
        this.y=y;
    }
}