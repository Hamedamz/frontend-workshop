const btn = document.getElementById('menuBtn');

function toggleSidebar() {
  document.body.classList.toggle('collapsed-sidebar');
}

btn.addEventListener('click', toggleSidebar);


const mediaQuery = matchMedia('(min-width: 768px)');

function handleChanges(e) {
  const isCollapsed = document.body.classList.contains('collapsed-sidebar');

  if(e.matches) {
    // open sidebar
    if (isCollapsed) {
      document.body.classList.remove('collapsed-sidebar');
    }
  } else {
    if (!isCollapsed) {
      document.body.classList.add('collapsed-sidebar');
    }
  }
}

mediaQuery.addEventListener('change', handleChanges)

// initial check
handleChanges(mediaQuery)
