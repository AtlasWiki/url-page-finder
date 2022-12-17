// credentials to AtlasWiki
// paste this in javascript console to use
console.log()


// adds in jquery library and loads it for 4 second before execution
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
setTimeout(main, 4000)

function main() {
    // jquery to grab href and src attributes in a list
    href = $('[href]');
    src= $('[src]');

    // grab individual href values from the list
    console.log("\n\n" + `%c
    
    ██╗░░██╗██████╗░███████╗███████╗
    ██║░░██║██╔══██╗██╔════╝██╔════╝
    ███████║██████╔╝█████╗░░█████╗░░
    ██╔══██║██╔══██╗██╔══╝░░██╔══╝░░
    ██║░░██║██║░░██║███████╗██║░░░░░
    ╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝░░░░░`,'color:#649AB3;' + "\n\n\n");
    console.log('%c===========================================================================================================================================================\n\ncurrent website/webpage: ' + document.URL + "\n\n=============================================================================================================================================================\n\n", ' color:#65B383');
    for (let i = 0; i < href.length; i++) {
        console.log('%c[' + (i + 1) + ']', 'background: black; color: #87EEF3; font-weight:bold;', href[i].getAttribute('href'));
    };

    // grab individual src values from the list
    console.log("\n\n" + `%c
   
    ░██████╗██████╗░░█████╗░
    ██╔════╝██╔══██╗██╔══██╗
    ╚█████╗░██████╔╝██║░░╚═╝
    ░╚═══██╗██╔══██╗██║░░██╗
    ██████╔╝██║░░██║╚█████╔╝
    ╚═════╝░╚═╝░░╚═╝░╚════╝░`, 'color:#C22744' + "\n\n\n")
    console.log('%c===========================================================================================================================================================\n\ncurrent website/webpage: ' + document.URL + "\n\n=============================================================================================================================================================\n\n", ' color:#65B383');
    for (let i = 0; i < src.length; i++) {
        console.log('%c[' + (i + 1) + ']', 'background: black; color: #87EEF3; font-weight:bold;', src[i].getAttribute('src'));
    };
    jq.remove();
}
