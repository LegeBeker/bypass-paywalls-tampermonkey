window.localStorage.clear();

if (location.hostname.endsWith('rep.repubblica.it')) {
  if (location.href.includes('/pwa/')) {
    location.href = location.href.replace('/pwa/', '/ws/detail/');
  }

  if (location.href.includes('/ws/detail/')) {
    const paywall = document.querySelector('.paywall[amp-access-hide]');
    if (paywall) {
      paywall.removeAttribute('amp-access-hide');
    }
  }
}
