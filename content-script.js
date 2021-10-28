var s = document.createElement('script');
s.src = chrome.runtime.getURL('inject-script.js');
(document.head || document.documentElement).appendChild(s);
