//iframe_obj = d3.select('#external_page').append('iframe').attr('height', screen.width).attr('width', screen.height)
d3.select('#external_page').attr('height', screen.height).attr('width', screen.width)

function load_page(page_name){

    d3.select('#external_page').attr('src', page_name) 
}




