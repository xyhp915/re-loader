# re-loader

A webpack loader .

## Installation

```
npm install --save-dev re-loader
```

## Define macro pre-processor

use `defines` options to remove macro blocks

### Options
```javascript
{
    defines: {
        IS_SKIP: false,
        IS_REMOVE: true,
    }
}
```

### input
```javascript
// #if IS_SKIP
console.log('!Skip!')
// #endif
// #if IS_REMOVE
console.log('!Remove!')
// #endif
```

### output
```javascript
// #if IS_SKIP
console.log('!Skip!')
// #endif
```

