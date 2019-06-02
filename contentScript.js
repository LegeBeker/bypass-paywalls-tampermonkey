window.localStorage.clear();

if (location.hostname.endsWith('rep.repubblica.it')) {
  if (location.href.includes('/pwa/')) {
    location.href = location.href.replace('/pwa/', '/ws/detail/');
  }

  if (location.href.includes('/ws/detail/')) {
    const paywall = document.querySelector('.paywall[subscriptions-section="content"]');
    if (paywall) {
      paywall.removeAttribute('subscriptions-section');
      const preview = document.querySelector('div[subscriptions-section="content-not-granted"]');
      if (preview) {
        preview.remove();
      }
    }
  }
}

if (window.location.href.indexOf("americanbanker.com") !== -1) {
  const paywall = document.getElementsByClassName(
    "embargo-content"
  );
  if (paywall && paywall.length>0 ) {
    paywall[0].className = "";
  }
}

if (window.location.href.indexOf('telegraaf.nl') !== -1) {
  const paywall = document.getElementById('TEMPRORARY_METERING_ID');
  if (paywall) {
    window.location.reload(1);
  }
}

if (window.location.href.indexOf('ed.nl') !== -1) {
  const paywall = document.querySelector('.article__component.article__component--paywall-module-notification');
  if (paywall) {
    paywall.remove();
    paywall = null;
  }
}