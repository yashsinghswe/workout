// The workout plan's navigation remains CSS-only.
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { scope: './' })
      .catch((error) => console.warn('Yash Strength offline setup failed:', error));
  });
}
