require('dotenv').config();
const readline = require('readline');
const fs = require('fs');

const asciiArt = `
 
▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄    ▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄           
▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌          
▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌ ▐░▌      ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          
▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌▐░▌       ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          
▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌          ▐░▌░▌        ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          
▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌          ▐░░▌         ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌          
▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░▌          ▐░▌░▌        ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          
▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌▐░▌       ▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌       ▐░▌▐░▌          ▐░▌          
▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌      ▐░▌       ▐░▌▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ 
▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀    ▀       ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
                                                                                                                     
 ▄▄▄▄▄▄▄▄▄▄   ▄         ▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄                                                
▐░░░░░░░░░░▌ ▐░▌       ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌                                               
▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌     ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌                                               
▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌                                               
▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌                                               
▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌                                               
▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀      ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀█░█▀▀ ▐░▌       ▐░▌                                               
▐░▌       ▐░▌     ▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌       ▐░▌                                               
▐░█▄▄▄▄▄▄▄█░▌     ▐░▌          ▐░▌       ▐░▌▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌                                               
▐░░░░░░░░░░▌      ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌                                               
 ▀▀▀▀▀▀▀▀▀▀        ▀            ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀                                                
                                                                                                                                                                                                                                    
`;

const phoneSpam = [];

(async () => {
    start()
})();

/* Functions */
function start() {
    console.clear();
    questionPhone();
};

function questionPhone(customMsg) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log(`\x1b[1m\x1b[33m${asciiArt}\x1b[0m`);
    rl.question(customMsg || '\x1b[1m\x1b[37m[?] What is the phone number?\x1b[0m ', async (phoneNumber) => {

        if (!phoneNumber || !Number(phoneNumber) || phoneNumber.length < 10 || phoneSpam.includes(phoneNumber)) {
            if (!phoneNumber || !Number(phoneNumber) || phoneNumber.length < 10) {
                rl.close();
                createLog('Please enter a valid phone number!', 'error');
                return questionPhone();
            } else {
                rl.close();
                createLog('This phone number is already in the list!', 'error');
                return questionPhone();
            };
        };

        createLog('---------------------------------', 'checking');
        createLog(`Starting with Target: ${phoneNumber}`, 'checking');
        createLog('---------------------------------', 'checking');
        phoneSpam.push(phoneNumber);

        fs.readdir('./functions', async (err, files) => {
            if (err) return;
            for (const file of files) {
                const f = require(`./functions/${file}`);
                f.execute(phoneNumber);
                createLog(`Started: ${f.name}`, 'success');

                if (files.indexOf(file) == files.length - 1) {
                    createLog('---------------------------------', 'success');
                    createLog('All started successfully!', 'success');
                    createLog('---------------------------------', 'success');
                    moreOptions();
                };
            };
        });
        rl.close();
    });
};
function moreOptions() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log(`\x1b[1m\x1b[33m${asciiArt}\x1b[0m`);
    rl.question('\x1b[1m\x1b[37m[?] What do you want to do?\x1b[0m ( addphone, listspam ) ', async (text) => {
        if (text.toLocaleLowerCase() == 'addphone') {
            questionPhone('Enter the phone number: ');
        } else if (text.toLocaleLowerCase() == 'listspam') {
            createLog('---------------------------------', 'success');
            createLog('List of spam numbers:', 'success');
            createLog('---------------------------------', 'success');
            createLog(`${phoneSpam.map((phone) => phone).join('\n')}`, 'checking');
            createLog('---------------------------------', 'success');
            moreOptions();
        } else {
            moreOptions();
        };
        rl.close();
    });
};
function createLog(text, type) {
    const types = {
        error: '\x1b[31m[-]', // red
        success: '\x1b[32m[+]', // green
        checking: '\x1b[36m[*]', // cyan
        warning: '\x1b[33m[!]' // yellow
    };
    if (!types[type]) return console.log(`\x1b[1m${text}\x1b[0m`);

    console.log(`\x1b[1m${types[type]} ${text}\x1b[0m`);
};

process.on('unhandledRejection', (err) => {
    console.log(err)
    createLog('Not important | yarinpg', 'error');
});
process.on('uncaughtException', (err) => {
    console.log(err)
    createLog('Not important | yarinpg', 'error');
});