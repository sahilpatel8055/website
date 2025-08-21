
document.addEventListener('DOMContentLoaded', function(){
  const slider = document.querySelector('.slider');
  if(!slider) return;
  const track = slider.querySelector('.slides');
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const prev = slider.querySelector('.arrow.prev');
  const next = slider.querySelector('.arrow.next');
  const dotsWrap = slider.querySelector('.dots');
  let index = 0;

  slides.forEach((_,i)=>{
    const d = document.createElement('span');
    d.className = 'dot' + (i===0?' active':'');
    d.addEventListener('click',()=>go(i));
    dotsWrap.appendChild(d);
  });

  function updateDots(){
    dotsWrap.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active', i===index));
  }
  function go(i){
    index = (i + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (index*100) + '%)';
    updateDots();
  }
  if(prev) prev.addEventListener('click',()=>go(index-1));
  if(next) next.addEventListener('click',()=>go(index+1));
  setInterval(()=>go(index+1), 5000);
});
