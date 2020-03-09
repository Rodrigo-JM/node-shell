process.stdout.write('prompt > ');
const global = {
    pwd:  require('./pwdTESTTEST/pwdTEST/pwd.js')
}

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (global[cmd] !== undefined) {
        process.stdout.write(global[cmd]);
    } else {
        process.stdout.write('You typed: ' + cmd);
    }
    
    process.stdout.write('\nprompt > ');
})


