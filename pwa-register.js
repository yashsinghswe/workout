// Remember the last selected page, week, day, and weight-table view locally.
(() => {
  const stateKey = 'yash-strength-navigation-v1';
  const names = ['page', 'week', 'day', 'lift', 'row'];

  function restoreNavigation() {
    try {
      const saved = JSON.parse(localStorage.getItem(stateKey) || '{}');
      for (const name of names) {
        const id = saved[name];
        if (!id) continue;
        const input = document.getElementById(id);
        if (input && input.type === 'radio' && input.name === name) input.checked = true;
      }
    } catch (error) {
      console.warn('Yash Strength navigation restore failed:', error);
    }
  }

  function saveNavigation() {
    try {
      const state = {};
      for (const name of names) {
        const selected = document.querySelector(`input[name="${name}"]:checked`);
        if (selected) state[name] = selected.id;
      }
      localStorage.setItem(stateKey, JSON.stringify(state));
    } catch (error) {
      console.warn('Yash Strength navigation save failed:', error);
    }
  }

  restoreNavigation();
  for (const name of names) {
    document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
      input.addEventListener('change', saveNavigation);
    });
  }
})();

// Register the offline service worker.
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { scope: './' })
      .catch((error) => console.warn('Yash Strength offline setup failed:', error));
  });
}
