
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

// Aguarda o DOM estar pronto
document.addEventListener('DOMContentLoaded', function() {
  fbq('init', '1135845045063318');
  fbq('track', 'PageView');
});

// Para SPAs como Framer - dispara em mudanças de URL
let currentUrl = location.href;
new MutationObserver(() => {
  if (location.href !== currentUrl) {
    currentUrl = location.href;
    if (typeof fbq !== 'undefined') {
      fbq('track', 'PageView');
    }
  }
}).observe(document, {subtree: true, childList: true});
