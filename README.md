# quick.logs
Quick.logs is a small and simple npm package to make your console look more beautiful. It is aimed at users new to coding for a simpler approach than other packages like `colors`, which need extended code.

### Installation
```
npm i quick.logs --save
```
Make sure the package name is plural, otherwise you will download a different package.

### Basic Examples

#### If something happened successfully...

```js
const quick = require('quick.logs');

quick.success('Hooray! Everything worked successfully.');
```

#### If an error occurred...

```js
const quick = require('quick.logs');

myFunction().catch(e => quick.error(e));
// .error() only logs in magenta text. If you would like to use red text, use .fatal() instead.
```

#### Get a reminder...

```js
const quick = require('quick.logs');

quick.info('The server IP is 123.45.678.90, remember that!');
```

### Color Examples

#### Say something in cyan text...

```js
const quick = require('quick.logs');

quick.cyan('Hello world!');
```


## Methods

#### Pre-Prepared Prefixes:
```js
.debug('message', { options });
.success('message', { options });
.warn('message', { options });
.error('message', { options });
.fatal('message', { options });
.info('message', { options });

// options is an object. All parameters are optional. Here is a list of them:
/*

showtype: boolean?	( Default is true. Should the prefix (e.g. DEBUG: ...) show? )
topline: boolean? ( Default is false. Should there be an extra line above the text? )
bottomline: boolean? ( Default is false. Should there be an extra line below the text? )

*/
```

#### Single-Colored Messages:
```js
.cyan('message', { options });
.green('message', { options });
.yellow('message', { options });
.pink('message', { options }); // Alternatively you can use .magenta()
.red('message', { options });

// options is an object. All parameters are optional. Here is a list of them:
/*

topline: boolean? ( Default is false. Should there be an extra line above the text? )
bottomline: boolean? ( Default is false. Should there be an extra line below the text? )

*/
```

#### Using .log()
```js
.log('message', 'type', { options });

// Type can be any one of these: 
/*

debug / cyan
success / green
warn / warning / yellow
error / pink / magenta
fatal / red
info / blue

*/

// options is an object. All parameters are optional. Here is a list of them:
/*

showtype: boolean?	( Default is true. Should the prefix (e.g. DEBUG: ...) show? )
topline: boolean? ( Default is false. Should there be an extra line above the text? )
bottomline: boolean? ( Default is false. Should there be an extra line below the text? )

*/
```

#### Using .custom()

```js
.custom('message', 'prefix', color);

// This function doesn't have any options attributes... yet.
// Color can be any one of these:
/*

'cyan' / 6
'green' / 2
'yellow' / 3
'pink' / 'magenta' / 5
'red' / 1
'blue' / 4

*/
```

## Limitations
### Temporary
- Bold, Italic, and Underline styles.
- Doesn't support promises
- Might overlap some messages sent with console.log() or process.stdout.write()

### Permanent
- Doesn't support multiple colors. Use `colors` or `chalk` instead.

## Changelog
#### Version 2.0.1
- Actually remembered to update the readme

#### Version 2.0.0
- No longer requires a dependency
- No longer need to write unneeded optional parameters
- Complete rewrite with more efficient code
- Now supports async/await
- Now includes functions without prefixes by default
- Support for custom prefixes and colors
