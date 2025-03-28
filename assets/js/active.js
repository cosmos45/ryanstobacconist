/*global jQuery */
(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        /*================================
         Responsive Menu JS / Slicknav
        ==================================*/
        $("#mainmenu-wrap .mainmenu").slicknav({
            label: '<i class="dl-icon-menu1"></i>',
            prependTo: '.header-right-area, .minicart-button-content',
            closedSymbol: '+',
            openedSymbol: '-',
            removeClasses: true
        });

        /*===============================
            Off Canvas Main Menu JS
        ==================================*/
        $(".offcanvas-mainmenu-wrapper .mainmenu").slicknav({
            label: '',
            duration: 500,
            prependTo: '.offcanvas-mainmenu-wrapper',
            closedSymbol: '+',
            openedSymbol: '-',
            removeClasses: true
        });

        /*=============================
          Home Slider Active JS
        ==============================*/
        const sliderId = $("#slider-active-wrap");

        sliderId.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnHover: false,
            fade: true,
            speed: 1000,
            dots: true,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
        });
        // Start Slider Animation
        sliderId.on('afterChange', function () {
            $(".slider-img").addClass('fadeInLeft');
            $(".slider-img").removeClass('fadeOutLeft');

            $(".slider-txt .dailog").addClass('fadeInLeftBig');
            $(".slider-txt .dailog").removeClass('fadeOutLeftBig');

            $(".slider-txt h2, .slider-txt .price").addClass('slideInLeft');
            $(".slider-txt h2, .slider-txt .price").removeClass('slideOutLeft');

            $(".slider-txt .btn, .animate-images").addClass('fadeInUp');
            $(".slider-txt .btn, .animate-images").removeClass('fadeOutDown');
        });
        sliderId.on('beforeChange', function () {
            $(".slider-img").removeClass('fadeInLeft');
            $(".slider-img").addClass('fadeOutLeft');

            $(".slider-txt .dailog").removeClass('fadeInLeftBig');
            $(".slider-txt .dailog").addClass('fadeOutLeftBig');

            $(".slider-txt h2, .slider-txt .price").removeClass('slideInLeft');
            $(".slider-txt h2, .slider-txt .price").addClass('slideOutLeft');

            $(".slider-txt .btn, .animate-images").removeClass('fadeInUp');
            $(".slider-txt .btn, .animate-images").addClass('fadeOutDown');
        });

        /*=============================
            Home1 Product Carousel
        ==============================*/
        const productCarouselId = $(".product-carousel-wrap");
        productCarouselId.slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            fade: false,
            speed: 1000,
            dots: true,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                }
            ]
        });

        /*=============================
            Home6 Product Carousel
        ==============================*/
        const productCenterCarousel = $(".product-centerCarousel-active");
        productCenterCarousel.slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            fade: false,
            speed: 1000,
            centerMode: true,
            centerPadding: '100px',
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '40px',
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: '50px',
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: '70px',
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        centerPadding: '50px',
                    }
                }
            ]
        });

        /*=============================
            Home10 Product Carousel
        ==============================*/
        const productSlideCarouselId = $(".product-slide-carousel-wrap");
        productSlideCarouselId.slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            fade: false,
            speed: 1000,
            dots: true,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1499,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        });

        /*================================
            Newsletter Form JS
        ==================================*/
        const subscribeUrl = $(".mc-form").attr('action');
        $('#mc-form, #mc-form2').ajaxChimp({
            language: 'en',
            url: subscribeUrl,
            callback: mailChimpResponse
        });

        function mailChimpResponse(resp) {
            if (resp.result === 'success') {
                $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
                $('.mailchimp-error').fadeOut(400);
                $("#mc-form, #mc-form2").trigger('reset');
            } else if (resp.result === 'error') {
                $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
            }
        }

        /*=============================
        Product Filter // Home2
        ==============================*/
        const grid = $(".product-category-filter-wrap"),
            filterName = $(".product-filter-menu li");
        filterName.on('click', function () {
            const filterValue = $(this).attr('data-filter');
            grid.isotope({
                filter: filterValue
            });

            filterName.removeClass('active');
            $(this).addClass('active');
        });

        /*==================================
        Product Filter Layout 2 // Home3
        ===================================*/
        const gridlayout2 = $(".product-category-filter-wrap.selected-category"),
            filterNamelayout2 = $(".product-filter-menu.layout-two li");
        filterNamelayout2.on('click', function () {
            const filterValue = $(this).attr('data-filter');
            gridlayout2.isotope({
                filter: filterValue
            });

            filterName.removeClass('active');
            $(this).addClass('active');
        });

        /*==================================
            Category Slider Banner JS
        ===================================*/
        $(".slider-category-active").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            fade: false,
            speed: 1000,
            dots: true,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        /*==================================
        Testimonial Active JS
        ===================================*/
        $(".testimonial-content-wrapper").slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: false,
            dots: false,
            arrows: false
        });


        /*==================================
            Quick View Product Thumbnail JS
        ===================================*/
        $('.quciview-product-thumb-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
            fade: false
        });


        /*==================================
            Single Product Thumbnail JS
        ===================================*/
        $('.product-thumb-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product-thumbnail-nav, .vertical-tab-nav'
        });

        // Horizontal Nav Style
        $('.product-thumbnail-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product-thumb-carousel',
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: 0,
            variableWidth: false,
            focusOnSelect: true
        });

        // Vertical Nav Style
        $('.vertical-tab-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product-thumb-carousel',
            dots: false,
            arrows: false,
            focusOnSelect: true,
            vertical: true
        });

        /*================================
            Single Product Sticky
        ==================================*/
        const docWidth = $(document).width();
        if (768 <= docWidth) {
            $('#product-sticky-sidebar').stickySidebar({
                topSpacing: 100,
                bottomSpacing: -10
            });
        }

        /*==================================
        Sale Products Countdown
        ===================================*/
        $(".sale-countdown").each(function (index, element) {
            const $element = $(element),
                $date = $element.data('date');

            $element.countdown($date, function (event) {
                const $this = $(this).html(event.strftime(''

                    + '<div class="countdown-item"><span class="countdown-time">%D</span><span class="countdown-label">Days</span></div>'
                    + '<div class="countdown-item"><span class="countdown-time">%H</span><span class="countdown-label">Hours</span></div>'
                    + '<div class="countdown-item"><span class="countdown-time">%M</span><span class="countdown-label">Mins</span></div>'
                    + '<div class="countdown-item"><span class="countdown-time">%S</span><span class="countdown-label">Secs</span></div>'));
            });
        });

        /*=============================
	        Mfp Modal Active JS
        ==============================*/
        $(".modalActive").magnificPopup({
            type: 'inline',
            midClick: true,
            mainClass: 'veeraModal',
            preloader: false
        });

        /*=============================
            Search Box Modal Popup
        ==============================*/
        $(".animate-modal-popup").on('click', function () {
            $(".modalSearchBox").addClass('modalOpen');
            $('body').css('overflow', 'hidden');
        });
        $(".modaloverlay").on('click', function () {
            $(".modalSearchBox").removeClass('modalOpen');
            $('body').css('overflow', 'auto');
        });

        /*=============================
	        Product Quantity
        ==============================*/
        var proQty = $(".pro-qty");
        proQty.append('<a href="#" class="inc qty-btn">+</a>');
        proQty.append('<a href="#" class= "dec qty-btn">-</a>');
        $('.qty-btn').on('click', function (e) {
            e.preventDefault();
            var $button = $(this);
            var oldValue = $button.parent().find('input').val();
            if ($button.hasClass('inc')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent().find('input').val(newVal);
        });

        /*================================
            Contact Page Map JS
        ==================================*/
        const map_id = $('#map_content');
        if (map_id.length > 0) {
            const $lat = map_id.data('lat'),
                $lng = map_id.data('lng'),
                $zoom = map_id.data('zoom'),
                $maptitle = map_id.data('maptitle'),
                $mapaddress = map_id.data('mapaddress'),
                mymap = L.map('map_content').setView([$lat, $lng], $zoom);

            L.tileLayer.grayscale('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map',
                maxZoom: 18,
                id: 'mapbox.streets',
                scrollWheelZoom: false,
                accessToken: 'pk.eyJ1Ijoic2hha2lsYWhtbWVlZCIsImEiOiJjamk4anF6NDgwMGd5M3BwM2c4eHU5dmIzIn0.yBLGUAB8kV1I1yGGonxzzg'
            }).addTo(mymap);

            const marker = L.marker([$lat, $lng]).addTo(mymap);
            marker.bindPopup('<b>' + $maptitle + '</b><br>' + $mapaddress).openPopup();
            mymap.scrollWheelZoom.disable();
        }
        //Map Js end

        /*=============================
	        Nice Select Js
        ==============================*/
        $('select').niceSelect();

        /*=============================
        Tooltip JS
        ==============================*/
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })

        /*==================================
            Single Product Zoom
        ===================================*/
        $('.product-thumb-large-view .product-thumb-item').zoom();

        // Button LightGallery JS
        const productThumb = $(".product-thumb-large-view .product-thumb-item img"),
            imageSrcLength = productThumb.length,
            images = [];
        for (let i = 0; i < imageSrcLength; i++) {
            images[i] = {"src": productThumb[i].src};
        }

        $('.btn-zoom-popup').on('click', function () {
            $(this).lightGallery({
                thumbnail: false,
                dynamic: true,
                autoplayControls: false,
                download: false,
                actualSize: false,
                share: false,
                hash: false,
                index: 0,
                dynamicEl: images
            });
        });

        /*==================================
            Video Popup Active Js
        ===================================*/
        $('.btn-video-popup').magnificPopup({
            type: 'iframe',
            mainClass: 'video-popup',
            closeMarkup: '<button type="button" class="mfp-close">&#215;</button>'
        });

        /*================================
           Skill Area JS
        ==================================*/
        const skills = $('.skillbar');
        skills.each(function () {
            $(this).appear(function () {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 1500);

                $(this).find('.skill-percent').html('<span>' + $(this).attr('data-percent') + '</span>');
            });
        });


        /*===== Filter Option Item Show =====*/
        $(".filter-option").on('click', function () {
            $(".product-filter-item-wrapper").slideToggle();
            $(this).toggleClass('arrow-rotate');
        });

        /*===============================
           Product View Mode Change
        ==================================*/
        const viewItemClick = $(".product-view-mode li"),
            productWrapper = $(".shop-page-products-wrapper .products-wrapper");

        viewItemClick.each(function (index, elem) {
            const element = $(elem),
                viewStyle = element.data('viewmode');

            viewItemClick.on('click', function () {
                const viewMode = $(this).data('viewmode');
                productWrapper.removeClass(viewStyle).addClass(viewMode);
                viewItemClick.removeClass('active');
                $(this).addClass('active')
            });
        });

        /*=============================
	        Checkout Page Checkbox
        ==============================*/
        $("#create_pwd").on("change", function () {
            $(".account-create").slideToggle("100");
        });

        $("#ship_to_different").on("change", function () {
            $(".ship-to-different").slideToggle("100");
        });

        /*=============================
	        Payment Method Accordion
        ==============================*/
        $('input[name="paymentmethod"]').on('click', function () {
            const $value = $(this).attr('value');
            $('.payment-method-details').slideUp();
            $('[data-method="' + $value + '"]').slideDown();
        });

        /*=============================
	        Animation On Scroll JS
        ==============================*/
        AOS.init({
            disable: 'mobile',
            once: true,
            offset: 200,
            duration: 1000,
        });

        /*=============================
	        Price Range Slider JS
        ==============================*/

        const rangeSlider = $(".price-range"),
            amount = $("#amount"),
            minPrice = rangeSlider.data('min'),
            maxPrice = rangeSlider.data('max');
        rangeSlider.slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [minPrice, maxPrice],
            slide: function (event, ui) {
                amount.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amount.val(" $" + rangeSlider.slider("values", 0) +
            " - $" + rangeSlider.slider("values", 1));

        /*=====================================
            Instagram Feed Carousel JS
        ======================================*/

        const instafeedCarousel = () => {
            const instagramFeed = $(".instagram-carousel");
            instagramFeed.imagesLoaded(function () {
                instagramFeed.slick({
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
                    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        }
                    ]
                });
            })
        }

        /*=====================================
            Instafeed JS
        ======================================*/
        if ($('#instafeed').length) {
            let feed = new Instafeed({
                limit: 15,
                target: 'instafeed',
                success: function () {
                    instafeedCarousel();
                },
                accessToken: 'IGQVJWRlI0cGpSWm44eW9qSklnV1hIclZArNi1zbW5xZAVZAZAYXVoYUo0TUtwNDNMQ2o5VzBxRDNTa1lNSHVzVHBWSEtSZAFR3NmlkSWlxZAlUwN2RBRjc2YWVwYWR4QldENFRLUDlCanpCNTBTOS1VMXh6LQZDZD',
            });
            feed.run()
        }

        // All Window Scroll Function
        $(window).scroll(function () {
            /*=============================
               Header Fix
            ==============================*/
            const stickyClass = $(".sticky-header"),
                fixedHeaderSticky = $(".sticky-header.fixed-top"),
                windowPosition = $(window).scrollTop();

            if (windowPosition > 0) {
                stickyClass.addClass('headerUp');
            } else {
                stickyClass.removeClass('headerUp');
            }
            if (!fixedHeaderSticky) {
                if (windowPosition > 450) {
                    stickyClass.addClass('fixedHeader');
                } else {
                    stickyClass.removeClass('fixedHeader');
                }
            } else {
                if (windowPosition > 200) {
                    stickyClass.addClass('fixedHeader');
                } else {
                    stickyClass.removeClass('fixedHeader');
                }
            }
        });

    }); //Ready Function End

    jQuery(window).on('load', function () {
        /*=============================
              Preloader JS
        ==============================*/
        $("body").removeClass('preloader-active');

        /*===============================================
            Masonry Active Js
        ======================================================*/
        $(".product-category-filter-wrap,.masonry-category").isotope();
        $(".product-category-filter-wrap.selected-category").isotope({
            filter: '.new-prod'
        });

        /*=============================
            Parallax Bg JS
        ==============================*/
        let parallaxActive = '.parallaxBg',
            myParaxify;
        if (parallaxActive.length) {
            myParaxify = paraxify(parallaxActive, {
                speed: 5,
                boost: 1
            });
        }
    }); //window load End
}(jQuery));