var btnSmp = document.querySelector('.advantages__btn--smp');
var btnTrs = document.querySelector('.advantages__btn--trs');
var btnClb = document.querySelector('.advantages__btn--clb');

btnSmp.addEventListener ("click", function () {
  btnSmp.classList.add('advantages__btn--active');
  btnTrs.classList.remove('advantages__btn--active');
  btnClb.classList.remove('advantages__btn--active');
})

btnTrs.addEventListener ("click", function () {
  btnTrs.classList.add('advantages__btn--active');
  btnClb.classList.remove('advantages__btn--active');
  btnSmp.classList.remove('advantages__btn--active');
})

btnClb.addEventListener ("click", function () {
  btnClb.classList.add('advantages__btn--active');
  btnSmp.classList.remove('advantages__btn--active');
  btnTrs.classList.remove('advantages__btn--active');
})
