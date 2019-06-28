$(document).ready(function() {
    var window_height = $(document).height();
    var header_height = $("header").height();
    var conteiner_height = window_height - header_height;
    
    $(".box").height(conteiner_height / 3).width(conteiner_height / 3);
})

let a = [1,2,3,4,5,6,7,8,9].sort(function() {
    return .5 - Math.random();
  });

for (let i = 1; i <= a.length; i++) {
    $(`.box:nth-of-type(${i})`).text(a[i-1]);
}