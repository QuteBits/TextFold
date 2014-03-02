$(function() {
    $('span').each( function(){
        $(this).css('display', 'none');
        $(this).addClass('half_hidden');
        $(this).addClass('fold');
        $(this).wrap('<span>');
        $(this).before('<span class="open_layer fold">&nbsp;</span>');
    });

    bindings();    
    
    $('#text').before('<div class="show_all">SHOW ALL</div>');
    $('.show_all').click( function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text('SHOW ALL');
            $('.half_hidden').click();
        } else {
            $(this).addClass('active');
            $(this).text('HIDE ALL');
            $('.open_layer').click();
        }
    });
});

function bindings() {
    $('.open_layer').unbind();
    $('.half_hidden').unbind();
    
    $('.open_layer').click( function(){
      $(this).css('display', 'none');
      $(this).parent().find('.half_hidden').css('display', 'inline');  
    });

    $('.half_hidden').click( function(){
      $(this).css('display', 'none');
      $(this).parent().find('.open_layer').css('display', 'inline');  
    });
}