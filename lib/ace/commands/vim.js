define(function(require, exports, module) {

var canon = require("pilot/canon");

canon.addCommand({
    name: "useblockcursor",
    exec: function(env, args, request) { env.editor.session.setBlockCursor(true); }
});
canon.addCommand({
    name: "usenormalcursor",
    exec: function(env, args, request) { env.editor.session.setBlockCursor(false); }
});
canon.addCommand({
    name: "onstatechange",
    exec: function(env, args, request) {
        console.log('onstatechange', state);
        env.editor.session.setBlockCursor(state === 'start');
    }
});
