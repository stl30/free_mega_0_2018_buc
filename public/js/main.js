$(function () {
    window.storeData;
    var productList = [];
    $.get('http://192.168.100.77:8000/get-products', loadProductListCallback);
    // $.get('data/get-products.json', loadProductListCallback);
    initEvents();
    function initEvents() {
        $('#showMap').on('click', function () {
            $('#mapDetails').show();
            $(document).trigger("renderMap");
        });
    }

    function loadProductListCallback(data) {
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
                        '           </span>' +
                        '       </div>';
                },
                item: function (data, escape) {
                    return '<div class="item">' + escape(data.nume_produs) + '</div>';
                }
            },
            onItemAdd: function (value, $item) {
                var productName = $item.html();
                console.log("Redirect to: " + productName);
                showProduct(productName);
            }
        });
    }

    function showProduct(productName) {
        $('#productTitle').html(productName);
        // $.get('data/get-product-details.json', loadProductDetailsCallback);
        $.get('http://192.168.100.77:8000/get-product-details/' + encodeURI(productName), loadProductDetailsCallback);
    }

    function displayDetails(productVariant){
        // debugger;
        $('#productVariant').html(productVariant.name);
        $('#productDescription').html(productVariant.caracteristics);
        $('#productScreenSize').html(productVariant.screen_size);
        $('#productMemory').html(productVariant.memory);
        $('#productCamera').html(productVariant.camera);
    }

    function loadProductDetailsCallback(data) {
        console.log('stores for phone',  data[0].stores);
        window.storeData = null;
        window.storeData = data[0].stores;

        displayDetails(data[0]);


        $('#variantList').html('');

        for (var i = 0; i < data.length; i++) {
            $('#variantList').append('<li data-index="' + i + '">' + data[i].name + '</li>');
        }

        $("#variantList li").click(function () {
            var selectedIndex = $(this).data('index');
            displayDetails(data[selectedIndex]);
        });

        $('#productDetails').show();
    }

});