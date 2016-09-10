var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);

world.createEntity({
    name: "player",
    shape: "circle",
    radius: 1,
    image: "pig.png",
    imageStretchToFit: true,
    density: 5,
    x: 2,
    onKeyDown: function(e) {
        this.applyImpulse(150, 45);
    }
});

world.createEntity({
    name: "ground",
    shape: "square",
    type: "static",
    color: "rgb(0,100,0)",
    width: 20,
    height: .5,
    y: 12
});

var block = {
    name: "block",
    shape: "square",
    color: "brown",
    width: .5,
    height: 4,
    onImpact: function(entity, force) {
        if (entity.name() === "player") {
            this.color("black");
        }
    }
};

world.createEntity(block, {
    x: 15,
    y:10
});
world.createEntity(block, {
    x: 13,
    y:10
});

world.createEntity(block, {
    x: 18,
    y:10
});

world.createEntity(block, {
    x: 15.5,
    y: 7,
    width: 6,
    height: .5
});