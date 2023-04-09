  $(function(){
    $('.humbergerMenu').on('click', function(){
      $('.humbergerMenuBtn').toggleClass('active');
      $('.nav').toggleClass('open');
      $('.headerLogo h2,.headerLogo p').toggleClass('change');
      $('.headerLogo').toggleClass('fixed');
    });


    $(window).scroll(function (){
      $('.topSectionBoxContent1').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('move');
          };
      });
      $('.topSectionBoxContent2').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200){
          $(this).addClass('move');
        };
      });
      $('.secondSectionBoxContent').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200){
          $(this).addClass('move');
        };
      }); 
      $('.secondSectionBoxContentRev').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200){
          $(this).addClass('move');
        };
      }); 
    });

    window.addEventListener('load', () => {
      const elem = document.querySelector('.p-swiper-container');
      if (elem === null) return;
      const swiperParams = {
        loop: true, // ループさせる
        effect: 'fade', // フェードのエフェクト
        autoplay: {
          delay: 4000, // ４秒後に次の画像へ
          disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
        },
        speed: 2000, // ２秒かけながら次の画像へ移動
        allowTouchMove: false, // マウスでのスワイプを禁止
        navigation: {
          // 左右のページ送りを有効にする
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          // 円形のページネーションを有効にする
          el: '.swiper-pagination',
          clickable: true, // クリックを有効にする
        },
      };
      const swiper = new Swiper('.p-swiper-container', swiperParams);
    });
  }); 
