const setTheme = theme => {
   localStorage.setItem('theme', theme);
   document.body.id = theme;
}
document.body.id = localStorage.getItem('theme') || 'default';