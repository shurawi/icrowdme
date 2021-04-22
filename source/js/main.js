//toggles state in advantages block's description
var btnSmp = document.querySelector('.advantages__link--smp');
var btnTrs = document.querySelector('.advantages__link--trs');
var btnClb = document.querySelector('.advantages__link--clb');
var advHead = document.querySelector('.advantages__head');

btnSmp.addEventListener ("click", function () {
  btnSmp.classList.add('advantages__link--active');
  btnTrs.classList.remove('advantages__link--active');
  btnClb.classList.remove('advantages__link--active');
  advHead.style.color = '#26a6d1';
})

btnTrs.addEventListener ("click", function () {
  btnTrs.classList.add('advantages__link--active');
  btnClb.classList.remove('advantages__link--active');
  btnSmp.classList.remove('advantages__link--active');
  advHead.style.color = '#add136';
})

btnClb.addEventListener ("click", function () {
  btnClb.classList.add('advantages__link--active');
  btnSmp.classList.remove('advantages__link--active');
  btnTrs.classList.remove('advantages__link--active');
  advHead.style.color = '#959595';
})
