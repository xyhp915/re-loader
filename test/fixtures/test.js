let foobar = 'original value'

// #if IS_DEV
foobar = 'i am changed .'
// #endif

module.exports = foobar
