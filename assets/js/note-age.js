(() => {
  const format = new Intl.RelativeTimeFormat(document.documentElement.lang || 'en');
  const units = [
    ['year', 365 * 86400],
    ['month', 30 * 86400],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
  ];
  const now = Date.now();

  for (const age of document.querySelectorAll('.note-age')) {
    const time = age.parentElement.querySelector('time');
    const seconds = (Date.parse(time.dateTime) - now) / 1000;
    if (!Number.isFinite(seconds)) continue;

    const [unit, size] = units.find(([, size]) => Math.abs(seconds) >= size) || ['second', 1];
    age.textContent = ` (${format.format(Math.trunc(seconds / size), unit)})`;
  }
})();
