    $('.menu .button').click(function () {
        var hasShowed = false;
        for(var i = 0;i < $('.lvl').length;i++){
            if($('.lvl:eq('+i+')').css('left') == '0px'){
                hasShowed = true;
            }
        }
        if(hasShowed) {
            $('.lvl').animate({
                'left':'-300px'
            },500);
        }else {
            $('.level-1').animate({
                'left':'0px'
            });
        }
    });
    $('.item').click(function () {
        if(!$(this).hasClass('to-start') && !$(this).hasClass('to-back')) {
            var level;
            for(var i = 1;i <= 3;i++){
                if($(this).parent().hasClass('level-'+i)){
                    level = i;
                    break;
                }
            }
            if(level != 3){
                $('.level-'+level).animate({
                    'left':'-300px',
                });
                $('.level-'+(level+1)).animate({
                    'left':'0px',
                });
            }
        }

    });
    $('.to-start').click(function () {
        var level;
        for(var i = 1;i <= 3;i++){
            if($(this).parent().hasClass('level-'+i)){
                level = i;
                break;
            }
        }
        $('.level-'+level).animate({
            'left':'-300px',
        });
        $('.level-1').animate({
            'left':'0px'
        },500);
    });
    $('.to-back').click(function () {
        var level;
        for(var i = 1;i <= 3;i++){
            if($(this).parent().hasClass('level-'+i)){
                level = i;
                break;
            }
        }
        $('.level-'+level).animate({
            'left':'-300px',
        });
        $('.level-'+(level - 1)).animate({
            'left':'0px'
        },500);
    });