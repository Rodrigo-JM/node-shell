process.stdout.write('prompt > ');

const global = {
    pwd:  require('./pwd.js'),
    ls: require('./ls.js'),
    cat: require('./cat.js')
}
process.stdin.on('data', (data) => {
    const [cmd, ...funcArguments] = data.toString().trim().split(' ');
    
    if (global[cmd] !== undefined) {
        if (typeof global[cmd] === 'function') {
            let funcs = [...funcArguments]
            
            if (funcs) {
                funcs.forEach(arg => {
                    global[cmd](arg);
                })
            } else {
                global[cmd]();
            }  
        } 
        else{
            process.stdout.write(global[cmd]);
        }
    } 
    else {
        
        process.stdout.write('You typed: ' + cmd);
    }
    
    process.stdout.write('\nprompt > ');
})


