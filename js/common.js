var Common = {
	init: function() {
        Common.menu();
        Common.main();
	},
    menu: function() {
//        $('.nav_mob').on('click',function(e){
//            e.preventDefault();
//            $(this).toggleClass('open');
//        })
    },
	main: function() {
        
        
//        $('.aside_nav_head').on('click',function(e){
//            e.preventDefault();
//            $(this).toggleClass('open').next().stop().slideToggle();
//        })
//        $('.map span').on('click',function(e){
//            e.preventDefault();
//            $(this).toggleClass('open').parent().next().stop().slideToggle();
//        })
//            
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            items:1,
        });
        
    },
};

$(function() {
	Common.init();
});