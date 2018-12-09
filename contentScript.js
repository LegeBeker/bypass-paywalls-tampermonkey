window.localStorage.clear();

if (location.hostname.endsWith('rep.repubblica.it')) {
  if (location.href.includes('/pwa/')) {
    location.href = location.href.replace('/pwa/', '/ws/detail/');
  }

  if (location.href.includes('/ws/detail/')) {
    const paywall = document.getElementsByClassName('paywall');
    if (paywall && paywall.length > 0) {
      paywall[0].toggleAttribute('amp-access-hide');
    }
  }
}
