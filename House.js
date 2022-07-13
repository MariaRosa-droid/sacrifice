class House{
    constructor(image, x, y){
        this.image=image;
        this.sprite=createSprite(x, y);
        this.sprite.addImage(this.image);
        this.x=x;
        this.y=y;
    }
}