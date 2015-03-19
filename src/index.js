
var reg = null;
export function start(ctx) {
    reg = ctx.services.register('sosgi.test', 'Test');
}

export function stop(ctx) {
    if(reg){
        reg.unregister();
    }
}