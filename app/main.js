require.config({
    baseUrl: './dest/',
    paths: {
        opt: './moudle'
    }
});
require(['opt'], function(opt) {
    opt.boultNext();
    opt.boultPrev();
    opt.auto();
})