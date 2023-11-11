  function ToggleMenu(){
      const imgshaff = document.getElementById('imgshaff');
      const iconhome = document.getElementById('iconhome');
      const navbarlubna = document.getElementById('navbarlubna');
      const mounth = document.getElementById('mounth');
      const bersahabat = document.getElementById('bersahabat');

      mounth.classList.toggle('active');
      bersahabat.classList.toggle('active');
      imgshaff.classList.toggle('active');
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