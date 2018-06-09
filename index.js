async function magic(message, type, options) {
    var newshowtype;
    var newtopline;
    var newbottomline;

    if (!options) {
        var newshowtype = true;
        var newtopline = false;
        var newbottomline = false;
    } else {
        if (options.showtype == false) var newshowtype = false;
        else var newshowtype = true;

        if (options.topline == true) var newtopline = true;
        else var newtopline = false;

        if (options.bottomline == true) var newbottomline = true;
        else var newbottomline = false;
    }

    var realtype = type.toUpperCase(); var newtype;
    var color; if (realtype == 'DEBUG') { var color = '6'; var newtype = realtype; } else if (realtype == 'ERROR') { var color = 5; var newtype = realtype; } else if (realtype == 'INFO') { var color = 4; var newtype = realtype; } else if (realtype == 'WARN') { var color = 3; var newtype = realtype; } else if (realtype == 'SUCCESS') { var color = 2; var newtype = realtype; } else if (realtype == 'FATAL') { var color = 1; var newtype = realtype; } else { var color = 7; var newtype = 'UNKNOWN' }
    if (newtopline == true) process.stdout.write('\n');
    if (newshowtype == true) process.stdout.write('\033[1;4' + color + 'm' + newtype + ':' + '\033[0m\033[3' + color + 'm ' + message + '\033[0m\n');
    else process.stdout.write('\033[3' + color + 'm' + message + '\033[0m\n');
    if (newbottomline == true) process.stdout.write('\n');
}

exports.log = async (message, type, options) => {
    var newtype;
    var newshowtype;
    var newtopline;
    var newbottomline;
    if (type == 'blue') { var newtype = 'info'; var newshowtype = false; } else if (type == 'cyan') { var newtype = 'debug'; var newshowtype = false; } else if (type == 'green') { var newtype = 'success'; var newshowtype = false; } else if (type == 'yellow') { var newtype = 'warn'; var newshowtype = false; } else if (type == 'magenta' || type == 'pink') { var newtype = 'error'; var newshowtype = false; } else if (type == 'red') { var newtype = 'fatal'; var newshowtype = false; } else { 
        var newtype = type;
        if (!options) {
            var newshowtype = true;
            var newtopline = false;
            var newbottomline = false;
        } else {
            if (options.showtype == false) var newshowtype = false;
            else var newshowtype = true;
        }
    }

    if (options) {
        if (options.topline == true) var newtopline = true;
        else var newtopline = false;

        if (options.bottomline == true) var newbottomline = true;
        else var newbottomline = false;
    }

    magic(message, newtype, { showtype: newshowtype, topline: newtopline, bottomline: newbottomline});
}

exports.custom = async (message, type, color) => {
    var newcolor;

    if (color == 'red' || color == 1) var newcolor = 1;
    else if (color == 'green' || color == 2) var newcolor = 2;
    else if (color == 'yellow' || color == 3) var newcolor = 3;
    else if (color == 'blue' || color == 4) var newcolor = 4;
    else if (color == 'magenta' || color == 'pink' || color == 5) var newcolor = 5;
    else if (color == 'cyan' || color == 6) var newcolor = 6;
    else if (color == 'black' || color == 0) var newcolor = 0;
    else var newcolor = 7;

    process.stdout.write('\033[1;4' + newcolor + 'm' + type + ':' + '\033[0m\033[3' + newcolor + 'm ' + message + '\033[0m\n');
}

exports.info = async (message, options) => { var type = 'info'; magic(message, type, options); }
exports.debug = async (message, options) => { var type = 'debug'; magic(message, type, options); }
exports.success = async (message, options) => { var type = 'success'; magic(message, type, options); }
exports.warn = async (message, options) => { var type = 'warn'; magic(message, type, options); }
exports.error = async (message, options) => { var type = 'error'; magic(message, type, options); }
exports.fatal = async (message, options) => { var type = 'fatal'; magic(message, type, options); }

exports.blue = async (message, options) => { var type = 'info'; magic(message, type, { showtype: false }); }
exports.cyan = async (message, options) => { var type = 'debug'; magic(message, type, { showtype: false }); }
exports.green = async (message, options) => { var type = 'success'; magic(message, type, { showtype: false }); }
exports.yellow = async (message, options) => { var type = 'warn'; magic(message, type, { showtype: false }); }
exports.magenta = async (message, options) => { var type = 'error'; magic(message, type, { showtype: false }); }
exports.red = async (message, options) => { var type = 'fatal'; magic(message, type, { showtype: false }); }