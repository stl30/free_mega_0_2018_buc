$(function() {
    console.log('here');
    // $.get('http://192.168.100.77:8000/get-products', loadCallback);
    $.get('data/get-products.json', loadCallback);
    var productList = [];

    function loadCallback(data){
        productList = data;
        initAutocomplete();
    }

    function initAutocomplete(){
        $('#input-tags').selectize({
            persist: false,
            maxItems: 1,
            valueField: 'id',
            searchField: ['nume_produs', 'caracteristics'],
            options: productList,
            render: {
                option: function(data, escape) {
                    return '<div class="option">' +
                        '<span class="title">' + escape(data.nume_produs) + ' </span>' +
                        '<span class="url">' + escape(data.caracteristics) + '</span>' +
                        '</div>';
                },
                item: function(data, escape) {
                    return '<div class="item">' + escape(data.nume_produs) + '</div>';
                }
            }
        });
    }


});