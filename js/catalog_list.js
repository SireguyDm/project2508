$(document).ready(function () {

    $('.catalog-select').click(function (catalog_menu) {

        var menu_list = $(this).next('.catalog-select-list');
        var row = $(this).next('.catalog-select-list').children('.catalog-select-list-row');
        
        var count_rows = row.length;
        var rows_hight = row.css('height');
        
        count_rows = Number.parseInt(count_rows);
        rows_hight = Number.parseInt(rows_hight);
        
        var list_height = 8 + count_rows * rows_hight;
        
        menu_list.css('bottom', '-' + list_height + 'px');
        
        /////////////    Переворот кнопки и раскрытие списка ///////////////
        
        if (menu_list.css('display') == 'none') {
            
            $('.catalog-list-item').css('pointer-events', 'none');
            $(this).parent('.catalog-list-item').css('pointer-events', 'painted');
            
            menu_list.css('display', 'block');
            $(this).children('img').addClass('catalog-menu-img-active');
        } else {
            
            $('.catalog-list-item').css('pointer-events', 'painted');
            
            menu_list.css('display', 'none');
            $(this).children('img').removeClass('catalog-menu-img-active');
        }
        
        
        
        
        /////////////////    Замента текста на выбранный /////////////////////

        $(this).next('.catalog-select-list').children('.catalog-select-list-row').click(function () {
            
            if ($(this).hasClass('catalog-size') == true){
                $(this).parent().prev('.catalog-select').children('p').text('Размер: '+$(this).text());
            } else {
                $(this).parent().prev('.catalog-select').children('p').text($(this).text());
            }
            
            menu_list.css('display', 'none');
            
            $(this).parent().prev().children('img').removeClass('catalog-menu-img-active');
            
            $('.catalog-list-item').css('pointer-events', 'painted');
            
            
            
            
            ////////////       проблема         ////////////////
            
            var category_text = $('#category_text').text();
//            var i = '';
//            console.log(i);
            console.log('Категория : ' + category_text);
            

            
            
        });
        
        /////////////////    Hover элементов списка  /////////////////////
        
        $('.catalog-select-list-row').mouseenter(function () {
            $(this).addClass('catalog-select-list-row-hover');
        });
        $('.catalog-select-list-row').mouseleave(function () {
            $(this).removeClass('catalog-select-list-row-hover');
        });
        
        
    });
    
});