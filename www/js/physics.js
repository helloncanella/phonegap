var Engine, Render, World, Bodies, Composites, engine;
var width, height;

var Physics = {

    init: function(canvasId) {
        // module aliases
        Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Composites = Matter.Composites;

        // create an engine
        engine = Engine.create();

        width = $(window).innerWidth();
        height = $(window).innerHeight();

        // create a renderer
        var render = Render.create({
            element: document.body,
            canvas: document.getElementById('canvas'),
            engine: engine,
            options: {
                wireframes: false,
                width: width,
                height: height
            }
        });


        this.addBodies();

        // run the engine
        Engine.run(engine);

        // run the renderer
        Render.run(render);
    },

    addBodies:function(){

        World.clear(engine.world)

        var boxWidth = width * 0.04

        var stack = Composites.stack(40, 40, 10, 10, 0, 0, function(x, y) {
            return Bodies.rectangle(x, y, boxWidth, boxWidth)
        })

        var supports = Composites.stack(40, 40, 5, 4, 0, 0, function(x, y) {
            return Bodies.rectangle(x, y, boxWidth, boxWidth)
        })

        var suport1 = Bodies.rectangle(width / 2, height / 10, width * 5 / 10, 10, {
            angle: Math.PI * 0.05,
            isStatic: true
        })

        var suport2 = Bodies.rectangle(width / 2, height * 3 / 10, width * 4 / 10, 10, {
            angle: -Math.PI * 0.05,
            isStatic: true
        })

        var suport3 = Bodies.rectangle(width * 7 / 10, height * 5 / 10, width * 5 / 10, 10, {
            angle: Math.PI * 0.05,
            isStatic: true
        })

        var suport4 = Bodies.rectangle(width * 1 / 4, height * 7 / 10, width * 5 / 10, 10, {
            angle: Math.PI * 0.05,
            isStatic: true
        })

        var ground = Bodies.rectangle(width/2, height, width, 10, {
            isStatic: true
        });

        // add all of the bodies to the world
        World.add(engine.world, [stack, ground, suport1, suport2, suport3, suport4]);


    }

}