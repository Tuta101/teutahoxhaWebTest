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



 (function () {
            var lineMaker = new LineMaker({
                position: 'fixed'
                , lines: [
                    {
                        top: '25%'
                        , left: 0
                        , width: '100%'
                        , height: 2
                        , color: '#000'
                        , hidden: true
                        , animation: {
                            duration: 1000
                            , easing: 'easeInOutExpo'
                            , delay: 0
                            , direction: 'LeftRight'
                        }
                    },

                    {
                        top: '75%'
                        , left: 0
                        , width: '100%'
                        , height: 2
                        , color: '#000'
                        , hidden: true
                        , animation: {
                            duration: 1000
                            , easing: 'easeInOutExpo'
                            , delay: 100
                            , direction: 'RightLeft'
                        }
                    },

                    {
                        top: 0
                        , left: '80%'
                        , width: 2
                        , height: '100%'
                        , color: '#000'
                        , hidden: true
                        , animation: {
                            duration: 1000
                            , easing: 'easeInOutExpo'
                            , delay: 200
                            , direction: 'BottomTop'
                        }
                    },

                    {
                        top: 0
                        , left: '20%'
                        , width: 2
                        , height: '100%'
                        , color: '#000'
                        , hidden: true
                        , animation: {
                            duration: 1000
                            , easing: 'easeInOutExpo'
                            , delay: 300
                            , direction: 'TopBottom'
                        }
                    }
				]
            });
            setTimeout(function () {
                lineMaker.animateLineOut(0);
                lineMaker.animateLineOut(1);
                lineMaker.animateLineOut(2);
                lineMaker.animateLineOut(3);
            }, 2000);
            setTimeout(function () {
                lineMaker.createLine({
                    top: '40vh'
                    , left: '0vw'
                    , width: '100vw'
                    , height: 6
                    , color: '#ffcdd0'
                    , hidden: true
                    , animation: {
                        duration: 1000
                        , easing: 'easeInOutExpo'
                        , delay: 300
                        , direction: 'LeftRight'
                    }
                });
                lineMaker.animateLineIn(4);
            }, 1000);
            setTimeout(function () {
                lineMaker.createLine({
                    top: '80vh'
                    , left: '0vw'
                    , width: '100vw'
                    , height: 126
                    , color: '#ffcdd0'
                    , hidden: true
                    , animation: {
                        duration: 1000
                        , easing: 'easeInOutExpo'
                        , delay: 300
                        , direction: 'LeftRight'
                    }
                });
                lineMaker.animateLineIn(5);
            }, 2000);
        })();