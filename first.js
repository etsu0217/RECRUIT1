$(function(){
  const ttl = document.querySelector('.home_message--ttl');

  if (ttl) {
    setTimeout(() => ttl.classList.add('show'), 1000);
  }
});

/* RECRUITMENT を1文字ずつ360度回転させながら順番に表示 */
$(function(){
  const sub = document.querySelector('.hero-subtitle');
  if (!sub) return;

  const text = sub.textContent.trim();
  sub.textContent = '';

  // タイトル（赤線＋NEW GRADUATE...）が出そろってから開始
  const startDelay = 2.4; // 秒
  const step = 0.09;      // 文字ごとの間隔（秒）

  [...text].forEach((ch, i) => {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = ch;
    span.style.animationDelay = (startDelay + i * step) + 's';
    sub.appendChild(span);
  });
});

/* ハンバーガーメニューの開閉 */
$(function(){
  const burger = document.querySelector('.hamburger');
  if (!burger) return;

  burger.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  // メニュー内のリンクを押したら閉じる
  document.querySelectorAll('.menu-box a').forEach(a => {
    a.addEventListener('click', () => document.body.classList.remove('nav-open'));
  });
});

$(function(){

  $('.news_list').slick({

    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,

    arrows: false,
    dots: false,

    fade: true,

    speed: 700,

    infinite: true,

    pauseOnHover: false

  });

});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelectorAll('.parallax').forEach(el => {
    const speed = parseInt(el.dataset.y);

    el.style.transform =
      `translateY(${scrollY * speed / 1000}px)`;
  });
});

window.addEventListener('scroll', () => {

  const people = document.querySelector('.people_right');

  if (!people) return;

  const rect = people.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.8) {
    document.querySelector('.deco05').classList.add('show');
    document.querySelector('.deco06').classList.add('show');
  }

});

$(function(){

  $('.interview-slider').slick({
    slidesToShow: 3.78,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,

    arrows: false,
    dots: true,

    infinite: true,
    speed: 600,

    pauseOnHover: false,
    accessibility: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});

$('.slides').slick({
  arrows:false,
  dots:true,
  autoplay:true,
  autoplaySpeed:4000,
  fade:true,
  speed:1000,
  pauseOnHover:false
});;

/* 左スライドショーの固定は CSS の position: sticky で行うため、
   スクロールによる位置切り替えの JS は不要になりました。 */