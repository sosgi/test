System.register([], function (_export) {
    var reg;

    _export("start", start);

    _export("stop", stop);

    function start(ctx) {
        reg = ctx.services.register("sosgi.test", "Test");
    }

    function stop(ctx) {
        if (reg) {
            reg.unregister();
        }
    }

    return {
        setters: [],
        execute: function () {
            "use strict";

            reg = null;
        }
    };
});