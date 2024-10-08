
const toggleTheme = () => {
  const theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
};

document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);