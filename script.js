const themes = Array.from(document.querySelectorAll('button'), btn => btn.id);

const changeTheme = selected => {
   for (let theme of themes) document.body.classList.remove(theme);

   localStorage.setItem('theme', selected);
   document.body.classList.add(selected);
}
document.body.classList.add( localStorage.getItem('theme') || 'default' );