 (function () {
            var navEl = document.querySelector('nav.menu')
                , revealer = new RevealFx(navEl)
                , closeCtrl = navEl.querySelector('.btn--close');
            document.querySelector('.btn--menu').addEventListener('click', function () {
                revealer.reveal({
                    bgcolor: '#000'
                    , duration: 400
                    , easing: 'easeInOutCubic'
                    , onCover: function (contentEl, revealerEl) {
                        navEl.classList.add('menu--open');
                        contentEl.style.opacity = 1;
                    }
                    , onComplete: function () {
                        closeCtrl.addEventListener('click', closeMenu);
                    }
                });
            });

            function closeMenu() {
                closeCtrl.removeEventListener('click', closeMenu);
                navEl.classList.remove('menu--open');
                revealer.reveal({
                    bgcolor: '#000'
                    , duration: 400
                    , easing: 'easeInOutCubic'
                    , onCover: function (contentEl, revealerEl) {
                        navEl.classList.remove('menu--open');
                        contentEl.style.opacity = 0;
                    }
                });
            }
        })();