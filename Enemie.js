class Enemie{
    constructor(x, y, velocityX, velocityY){
        this.velocityX=velocityX
        this.velocityY=velocityY
        //this.image=image;
        this.sprite=createSprite(x, y, 10, 10);
        //this.sprite.addImage(this.image);
        //this.collide(prota);
        prota.collide(this.sprite);
        this.x=x;
        this.y=y;
    }
    follow(){
        if(prota.x<this.sprite.x){
            this.sprite.velocityX=-this.velocityX
            console.log("follow")
        }
        if(prota.x>this.sprite.x){
            this.sprite.velocityX=this.velocityX
            console.log("follow")
        }
        if(prota.x===this.sprite.x){
            this.sprite.velocityX=0
            console.log("follow")
        }
        if(prota.y<this.sprite.y){
            this.sprite.velocityY=-this.velocityY
            console.log("follow")
        }
        if(prota.y>this.sprite.y){
            this.sprite.velocityY=this.velocityY
            console.log("follow")
        }
        if(prota.y===this.sprite.y){
            this.sprite.velocityY=0
            console.log("follow")
        }

    }



}