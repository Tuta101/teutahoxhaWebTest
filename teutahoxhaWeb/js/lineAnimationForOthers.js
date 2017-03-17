 (function () {
            var lineMaker = new LineMaker({
                lines: [
                    {
                        top: 0
                        , left: '50vw'
                        , width: 1
                        , height: '100%'
                        , color: '#ccc'
                        , hidden: true
                        , animation: {
                            duration: 1500
                            , easing: 'easeInOutSine'
                            , delay: 0
                            , direction: 'TopBottom'
                        }
                    }
                    , {
                        top: 0
                        , left: '75vw'
                        , width: 1
                        , height: '100%'
                        , color: '#ccc'
                        , hidden: true
                        , animation: {
                            duration: 1500
                            , easing: 'easeInOutSine'
                            , delay: 0
                            , direction: 'TopBottom'
                        }
                    }
                    , {
                        top: '20em'
                        , left: 0
                        , width: '100%'
                        , height: 1
                        , color: '#ccc'
                        , hidden: true
                        , animation: {
                            duration: 1500
                            , easing: 'easeInOutExpo'
                            , delay: 200
                            , direction: 'LeftRight'
                        }
                    }
				]
            });
            setTimeout(function () {
                lineMaker.animateLinesIn();
            }, 0);
        })();


  var $animation_elements = $('.animation-element');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);
            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);
                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                    $element.addClass('in-view');
                }
                else {
                    $element.removeClass('in-view');
                }
            });
        }
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');