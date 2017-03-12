var app = new PIXI.Application();
document.body.appendChild(app.view);

PIXI.loader
    .add('../assets/images/bird.json')
    .load(onAssetsLoaded);

function onAssetsLoaded()
{
    // create an array of textures from an image path
    var frames = [];

    for (var i = 0; i < 8; i++) {
        frames.push(PIXI.Texture.fromFrame('bird'+ i +'.png'));
    }

    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
    var anim = new PIXI.extras.AnimatedSprite(frames);

    /*
     * An AnimatedSprite inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    anim.x = app.renderer.width / 2;
    anim.y = app.renderer.height / 2;
    anim.anchor.set(0.5);
    anim.animationSpeed = 0.2;
    anim.play();

    app.stage.addChild(anim);
}