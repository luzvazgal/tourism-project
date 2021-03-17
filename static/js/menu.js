//iframe_obj = d3.select('#external_page').append('iframe').attr('height', screen.width).attr('width', screen.height)
iframe_obj = d3.select('#external_page').append('iframe').attr('height', screen.height).attr('width', screen.width)

function load_page(page_name){

    iframe_obj.attr('src', page_name) 
}




