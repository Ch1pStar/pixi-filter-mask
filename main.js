let renderer, s,
    w,
    h,
    stage;

const init = () => {
    renderer = PIXI.autoDetectRenderer(1280, 800, {
        view: document.getElementById('stage'),
        backgroundColor: 0xff0055,
        antialias: true
    });

    s = new PIXI.Container();

    update();
};

const loaded = () => {
    stage = new lib.main();
    stage.name = 'stage';
    s.addChild(stage);

};

const update = () => {
    requestAnimationFrame(update);

    renderer.render(s);
};

document.addEventListener('DOMContentLoaded', init);