$(function () {
    console.log('here');
    // $.get('http://192.168.100.77:8000/get-products', loadCallback);
    $.get('data/get-products.json', loadCallback);
    var productList = [];

    function loadCallback(data) {
        productList = data;
        data.forEach(function (element) {
            element.imgSource = 'images/htcu11.png';
        });
        initAutocomplete();
    }

    function initAutocomplete() {
        var $select = $('#input-tags').selectize({
            persist: false,
            openOnFocus: false,
            maxItems: 1,
            valueField: 'id',
            searchField: ['nume_produs', 'caracteristics'],
            options: productList,
            render: {
                option: function (data, escape) {
                    return '<div class="option">' +
                        '       <img class="imgSource" src="' + escape(data.imgSource) + '" />' +
                        '       <span class="content">' +
                    '               <span class="title">' + escape(data.nume_produs) + ' </span>' +
                    '               <div class="description">' + escape(data.caracteristics) + '</div>' +
                    '           </span>' +
                    '       </div>';
                },
                item: function (data, escape) {
                    return '<div class="item">' + escape(data.nume_produs) + '</div>';
                }
            },
            onItemAdd: function(value, $item){
               var productName = $item.html();
               console.log("Redirect to: " + productName);
           }
        });
    }


});