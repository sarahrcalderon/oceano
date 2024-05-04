//SOMENTE BTNS

//BTN Leia mais- HOME
function toggleContent(button) {
  const post = button.parentNode;
  const fullContent = post.querySelector('.full-content');
  if (fullContent.style.display === 'block') {
      fullContent.style.display = 'none';
      button.textContent = 'Leia Mais';
  } else {
      fullContent.style.display = 'block';
      button.textContent = 'Read Less';
  }
}

//BTN Menu Sandwish
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');

  navbarToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
    navbarToggle.classList.toggle('active');
  });
});


//BTN scroll TITULO index
function scrollSmoothTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
}
document.getElementById('btnScroll').addEventListener('click', function() {
    const targetElement = document.getElementById('SubTitulo'); 
    scrollSmoothTo(targetElement);
});

// BTN entrar
document.getElementById('btnEntrar').addEventListener('click', function() {
  window.location.href = 'home.html';
});
  
// BTN Saiba Mais index
const btnVejaMais = document.getElementById('btnVejaMais');
botao.addEventListener('click', function() {
    window.location.href = '';
  });
 
 //BTN footer
  document.getElementById('Navlogo').addEventListener('click', function() {
    window.location.href = 'Navlogo';
  });

//BTN blog HOME
  document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var dateTime = new Date().toLocaleString(); 
    document.getElementById('dateTime').value = dateTime; 
    document.getElementById('dateTimeField').classList.add('show'); 
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Date and Time:', dateTime);
  
});


