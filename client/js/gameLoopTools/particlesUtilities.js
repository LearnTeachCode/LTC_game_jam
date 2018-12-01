const particlesUtilities = {};
particlesUtilities.create = (particles, player) => {
    let emitterX = player.sprite.x + config.default.particles.offsetX;
    let emitterY = player.sprite.y + config.default.particles.offsetY;
    particles.emitter = game.add.emitter(emitterX, emitterY, 200);

    particles.emitter.makeParticles(config.default.particles.key);

    particles.emitter.setRotation(0, 100);
    particles.emitter.setAlpha(1, 1);
    particles.emitter.setScale(0.3, 0, 0.3, 0, 3000);
    particles.emitter.gravity = 200;

    //	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms
    //	The 5000 value is the lifespan of each particle before it's killed
    particles.emitter.start(false, 1000, 100);
};

particlesUtilities.update = (particles, player) => {
    var px = player.sprite.body.velocity.x;
    var py = player.sprite.body.velocity.y;

    px *= -1;
    py *= -1;

    particles.emitter.minParticleSpeed.set(px, py);
    particles.emitter.maxParticleSpeed.set(px, py);

    particles.emitter.emitX = player.sprite.x + config.default.particles.offsetX;
    particles.emitter.emitY = player.sprite.y + config.default.particles.offsetY;

    // emitter.forEachExists(game.world.wrap, game.world);
    game.world.wrap(player.sprite, 64);
};