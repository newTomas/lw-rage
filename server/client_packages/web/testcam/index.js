// Rize RP. GGame Studio. 15.10.2017
// Test camera tool client package

let testcam = require('web/testcam/testcam.js')
let keyboard = require('keyboard.js');

let cambinder = {
    key: 115, // F4
    run: testCam
}

keyboard.bindAction(cambinder);
testcam.init();

var toggle = false;
function testCam(start=[0, 0, 0], stop=[1337, 1448, 228]) {
    toggle = !toggle;
    const cam = mp.cameras.new('default', new mp.Vector3(0, 0, 75), new mp.Vector3(), 90.0);
    cam.setActive(toggle);
    mp.game.cam.renderScriptCams(toggle, false, 0, true, false);
    if (toggle) {
        testcam.interpolateCam(cam, [new mp.Vector3(start[0], start[1], start[2]), new mp.Vector3(stop[0], stop[1], stop[2])], 1);
    }
}

mp.events.add("camtool:start", testCam);