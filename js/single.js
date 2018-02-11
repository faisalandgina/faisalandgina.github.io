
jQuery(document).ready(function() {

    smoothScroll.init({
        selector: 'a[href*="#"]:not([href="#"])'
        ,selectorHeader: '.wedsite-menubar-inner'
        ,speed: 500 // Integer. How fast to complete the scroll in milliseconds
        ,easing: 'easeInOutCubic' // Easing pattern to use
        ,offset: 0 // Integer. How far to offset the scrolling anchor location in pixels
    });

    var pswpElement = document.querySelectorAll('.pswp')[0];

    $(document).on('click','.pswp .read-more', function() {
        $(this).siblings('span').addClass('show');
        $(this).hide();
    });

    $(".keypeopleitem").click(function(e) {
        var self = $(this);
        var $target = self.find(".keypeopleitemdescription");
        // Makes links clickable
        if (e.target.nodeName == "A") {
            return;
        }
        $('.keypeopleitemdescription.open', self.$elem).not($target).removeClass('open');
        $target.toggleClass('open');
        self.toggleClass('arrowup');
        self.siblings().removeClass('arrowup');
        self.parent().siblings().find('.keypeopleitem').removeClass('arrowup');
        return false;
    });


    /* welcome box */
   /* $('.weddingapp-content-welcome-message-container').on('click', function(e) {
        e.preventDefault();
        var height = $(this).find('.weddingapp-content-welcome-message-text').text().length;
        if ($(this).hasClass('active')) {
            $(this).find('.weddingapp-content-welcome-message-text').fadeOut(200);
            $(this).removeClass('active');
            $(this).height(50);
            $(this).find('.weddingapp-content-welcome-message').height(50);
        } else {
            height *= 2;
            if (height < 100) height = 100;
            $(this).addClass('active');
            $(this).height(height);
            $(this).find('.weddingapp-content-welcome-message').height(height);
            $(this).find('.weddingapp-content-welcome-message-text').fadeIn();
        }
    });*/
       
       /* welcome box */
       $('.weddingapp-content-welcome-message-container.has-content').on('click', function(e) {
           e.preventDefault();
          // var height = $(this).find('.weddingapp-content-welcome-message-text').text().length;
           if ($(this).hasClass('active')) {
               $(this).find('.weddingapp-content-welcome-message-text').fadeOut(200);
               $(this).removeClass('active');
               //$(this).height(50);
               //$(this).find('.weddingapp-content-welcome-message').height(50);
           } else {
               //height *= 2;
               //if (height < 100) height = 100;
               $(this).addClass('active');
              // $(this).height(height);
               //$(this).find('.weddingapp-content-welcome-message').height(height);
               $(this).find('.weddingapp-content-welcome-message-text').fadeIn();
           }
       });

    /* events */
    $('.weddingapp-content-events-event-title, .weddingapp-content-events-event-details-icon').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var $event_wrap = $(this).closest('.weddingapp-content-events-event');
        var $event_item = $event_wrap.find('.weddingapp-content-events-event-details-container');
        var $span = $event_wrap.find('.weddingapp-content-events-event-details-icon');
        if ($event_item.hasClass('open')) {
            $event_item.removeClass("open");
        } else {
            $event_item.addClass("open");
        }
        if ($span.hasClass('arrowup')) {
            $span.removeClass('arrowup');
        } else {
            $span.addClass('arrowup');
        }

    });
    
    /* stories */
    $('.weddingapp-content-couple-polaroid').featherlightGallery({
        gallery: {
    		fadeIn: 300,
    		fadeOut: 300,
    	},
    	openSpeed:    300,
    	closeSpeed:   300,
        previousIcon: '',
        nextIcon: '',
        afterOpen: function(event){
            $('body').css('overflow','hidden');
        },
        afterClose: function(event){
            $('body').css('overflow','auto');
        }
    });



    /* welcome box animation */
    /* taken from appy v1 */
    // var self = this;
    // var elem_height = $('.weddingapp-content-welcome-message-text', self.$elem).height() - $('.weddingapp-content-welcome-message-title', self.$elem).height() - 5;
    // var anim_lock = false;
    // var $anim_element = $('.weddingapp-content-welcome-message-container-overlay', self.$elem);
    // var $content_element = $('.weddingapp-content-welcome-message-container-overlay-content', self.$elem);
    // // Constants
    // var contraction_x = 10;
    // var fade_duration = 150;
    // var anim_duration = 1000;
    // function position_popout_box_members(){
    //     // Repositions popout box elements
    //     var pos_offset = $('.weddingapp-content-welcome-message', self.$elem).offset();
    //     var width = $('.weddingapp-content-welcome-message', self.$elem).width() - contraction_x;
    //     var height = 1; // Multiplied by 160 in matrix3d scale factor
    //     var rel_offset = $('.weddingapp-content-welcome-photoframe', self.$elem).offset();
    //     $anim_element.css({ position: 'absolute',
    //         top: (pos_offset.top - rel_offset.top),
    //         left: (pos_offset.left - rel_offset.left + (contraction_x / 2)),
    //         width: width,
    //         height: height,
    //     });
    //     var bounding_rect = $anim_element.get()[0].getBoundingClientRect()
    //     var dialog_width = bounding_rect.width;
    //     var dialog_position = $anim_element.position();
    //     if (dialog_width > screen.width){
    //         // Support for narrow devices
    //         dialog_position.left += (dialog_width - screen.width) / 2;
    //         dialog_width = screen.width;
    //     }
    //     var content_position_style = $.extend({position:'absolute', width: dialog_width, height: bounding_rect.height}, dialog_position);
    //     $content_element.css(content_position_style);
    //     setTimeout(function(){$content_element.css(content_position_style);}, 100); // Fix for Safari missing layout params
    //
    // }
    // $(window).on("orientationchange",function(){
    //     position_popout_box_members();
    // });
    // function weddingapp_vendor_css(property, value){
    //     // Generates vendor-specific css
    //     var output = {};
    //     output[property] = value;
    //     output['-webkit-' + property] = value;
    //     output['-moz-' + property] = value;
    //     output['-ms-' + property] = value;
    //     output['-o-' + property] = value;
    //     return output;
    // }
    // function toggle_popout_box(){
    //     if (anim_lock){return;}
    //     anim_lock = true;
    //     // Set position relative to current position of elem (this prevents complex css to mirror device support)
    //     var anim_class = 'weddingapp-content-welcome-message-popout';
    //     var anim_reverse_class = 'weddingapp-content-welcome-message-popout-reverse';
    //     position_popout_box_members();
    //     $anim_element.css(weddingapp_vendor_css('animation-duration', (anim_duration / 1000) + 's'));
    //     if ($anim_element.hasClass(anim_class)){
    //         $anim_element.addClass(anim_reverse_class);
    //         setTimeout(function(){
    //             $anim_element.removeClass(anim_reverse_class).removeClass(anim_class);
    //             // On close
    //             anim_lock = false;
    //             $anim_element.hide();
    //         }, anim_duration);
    //         // Before close
    //         $content_element.children().fadeOut(fade_duration, function(){$content_element.hide();});
    //     } else {
    //         $anim_element.show().addClass(anim_class);
    //         setTimeout(function(){
    //             // On open
    //             position_popout_box_members();
    //             setTimeout(function(){
    //                 position_popout_box_members();
    //             }, 100); // Delay to ensure bounding client rect has been calculated in the rendering engine
    //             $content_element.show().children().hide().fadeIn(fade_duration);
    //             anim_lock = false;
    //         }, anim_duration);
    //         // Before open
    //     }
    // }
    // $('.weddingapp-content-welcome-message-container-overlay-content-close', self.$elem).click(function(){
    //     toggle_popout_box();
    // });
    // //$('.weddingapp-content-welcome-message', self.$elem).on('welcome-message-click', function() {
    //     $('.weddingapp-content-welcome-message', self.$elem).click(function(){
    //         // Determine whether to pop-out or raise the text card
    //         if (elem_height > 40){
    //             toggle_popout_box();
    //         } else {
    //             $(this).toggleClass('weddingapp-content-welcome-message-expander');
    //             if ($(this).hasClass('weddingapp-content-welcome-message-expander')){
    //                 $(this).css('margin-top', -elem_height - 20);
    //             } else {
    //                 $(this).css('margin-top', '');
    //             }
    //             $('.weddingapp-content-welcome-message-arrow', self.$elem).toggleClass('weddingapp-content-welcome-message-arrow-opened');
    //         }
    //     });
    // //});

    /* slideshow stuff 
    var mouseUsed = false;
    var galleryInit = function(gallery, opts) {
        function transitionManager() {
            // Create var to store slide index
            var currentSlide = opts.index;
            // Listen for photoswipe change event to re-apply transition class
            gallery.listen('beforeChange', function() {
                // Only apply transition class if difference between last and next slide is < 2
                // If difference > 1, it means we are at the loop seam.
                var transition = Math.abs(gallery.getCurrentIndex()-currentSlide) < 2;
                // Apply transition class depending on above
                $('.pswp__container').toggleClass('pswp__container_transition', transition);
                // Update currentSlide
                currentSlide = gallery.getCurrentIndex();
            });
        }
        // Only apply transition manager functionality if mouse
        if(mouseUsed) {
            transitionManager();
        } else {
            gallery.listen('mouseUsed', function(){
                mouseUsed = true;
                transitionManager();
            });
        }
    };*/

});
