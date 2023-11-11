  function ToggleMenu(){
      const iconhome = document.getElementById('iconhome');
      const navbarlubna = document.getElementById('navbarlubna');
  
      iconhome.classList.toggle('active');
      navbarlubna.classList.toggle('active');
  }
//   document.onclick = function(e){
//     if(e.target.id !== 'navbarlubna' && e.target.id !== 'iconhome')
//         {
//             iconhome.classList.remove('active');
//             navbarlubna.classList.remove('active');
//         }
//     }