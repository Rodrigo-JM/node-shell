process.stdout.write('prompt > ');

const global = {
    pwd:  require('./pwd.js'),
    ls: require('./ls.js')
}

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    
    if (global[cmd] !== undefined) {
        if (typeof global[cmd] === 'function') {
            global[cmd]();
        } 

        process.stdout.write(global[cmd]);
    } else {
        process.stdout.write('You typed: ' + cmd);
    }
    
    process.stdout.write('\nprompt > ');
})


