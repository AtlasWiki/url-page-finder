// Note: this only grabs all files inside the current webpage
// Paste this and execute in your browser's console to use

console.log(`%c╭━━╮╱╭╮╱╭╮╱╭━━┳╮╱╱╱╱╱╱╱╱╱╭╮╭╮╱╱╭╮╱╱╱╭╮╭━━┳╮╱╱╱╭━╮╭━━┳╮╱╱╱╭╮
┃╭╮┣┳╋╋━┫┣╮┃━━╋╋━━┳━┳╮╭━╮┃┃┣╋━┳┫┣┳━┳╯┃┃━┳╋╋╮╭━┫━┫┃━┳╋╋━┳┳╯┣━┳┳╮
┃╰╯┃┃┃┃━┫━┫┣━━┃┃┃┃┃╋┃╰┫┻┫┃╰┫┃┃┃┃━┫┻┫╋┃┃╭╯┃┃╰┫┻╋━┃┃╭╯┃┃┃┃┃╋┃┻┫╭╯
╰━╮┣━┻┻━┻┻╯╰━━┻┻┻┻┫╭┻━┻━╯╰━┻┻┻━┻┻┻━┻━╯╰╯╱╰┻━┻━┻━╯╰╯╱╰┻┻━┻━┻━┻╯
╱╱╰╯╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰╯` + '\n\n', 'font-family:sans-serif; color:#EEB0EE; background:#450C5B;' )

var files_list = document.querySelectorAll('link').length;

for (let i = 0; i < files_list; i++) {
    console.log('%c[' + i + ']', 'background: black; color: #87EEF3; font-weight:bold;', 'linked file:   ' + document.querySelectorAll('link')[i].getAttribute('href')); 
}
