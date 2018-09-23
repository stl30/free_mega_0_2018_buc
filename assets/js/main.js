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
        var imageList = ['assets/images/htcu11.png', 'assets/images/iphone.png', 'assets/images/samsung.png',
            'assets/images/huawei.png', 'assets/images/lg.png'];
        data.forEach(function (element) {
            var randomIndex = Math.floor(Math.random() * imageList.length);
            element.imgSource = imageList[randomIndex] ;
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

    function displayDetails(productVariant) {
        trackProductAcess(productVariant.id);

        $('#productVariant').html(productVariant.name);
        $('#productDescription').html(productVariant.caracteristics);
        $('#productScreenSize').html(productVariant.screen_size);
        $('#productMemory').html(productVariant.memory);
        $('#productCamera').html(productVariant.camera);
        $('#productManufacturer').html(productVariant.producator);
    }

    function updateStores(data){
        $.each(data, function(i, store){
            var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
            var dayOfMonth = days[moment().day()];
            
            data[i]['open'] = store[dayOfMonth].split(' - ')[0];
            data[i]['close'] = store[dayOfMonth].split(' - ')[1];
        })
        return data;
    }
    function refreshClosingDay(data){
        var now = moment();
        $.each(data, function(i, store){
            var regex = /^[0-9]{1,2}:[0-9]{2}$/;
            var message = 'inchis astazi'
            var shopStatus = 'closed';

            var found = store.open.match(regex)
            if(found){
                var storeOpenHours = store.open.split(':');
                var storeCloseHours = store.close.split(':');
                var now = moment();
                // now.hour(3);
                var open = moment();
                open.hour(storeOpenHours[0]);
                open.minute(storeOpenHours[1]);
                open.second(0);
                
                var close = moment();
                close.hour(storeCloseHours[0]);
                close.minute(storeCloseHours[1]);
                close.second(0);
                if(now < open){
                    message = 'deschide in ';
                    
                    var diff = open.diff(now);
                    
                    var h = parseInt(open.diff(now, 'hours'));
                    var m = parseInt(open.diff(now, 'minutes') % 60);
                    if(h > 0)
                        message += h + ' ore si ';
                        
                    if(m == 1)
                        message += ' 1 minut';
                    else
                        message += m + ' minute';
                } else if(now > open && now < close){
                    shopStatus = 'opened';
                    var message = 'inchide in ';
                    
                    var h = parseInt(close.diff(now, 'hours'));
                    var m = parseInt(close.diff(now, 'minutes') % 60);
                    if(h > 0)
                        message += h + ' ore si '
                        
                    if(m == 1)
                        message += ' 1 minut';
                    else
                        message += m + ' minute';
                } else {
                    var message = 'inchis astazi';
                }
            } else {
                // inchis astazi
                var shopStatus = 'closed';
            }
            data[i]['message'] = message
            data[i]['shopStatus'] = shopStatus
        })
        return data;
    }

    function loadProductDetailsCallback(data) {
        console.log('stores for phone', data[0].stores);
        window.storeData = null

        window.storeData = data[0].stores;
        window.storeData = updateStores(window.storeData);
        window.storeData = refreshClosingDay(window.storeData);
        
        console.log(window.storeData);
        

        displayDetails(data[0]);


        $('#variantList').html('');

        for (var i = 0; i < data.length; i++) {
            $('#variantList').append('<option value="' + i + '">' + data[i].name + '</option>');
        }

        $("#variantList").off('change');
        $("#variantList").on('change', function () {
            var selectedIndex = parseInt($(this).val());
            displayDetails(data[selectedIndex]);
        });

        $('#productDetails').show();

        $("html, body").animate({ scrollTop: $('#productDetails').offset().top }, 700);
    }

    function trackProductAcess(productId){
        $.get('http://192.168.100.77:8000/reports/view-product-tracking/' + productId);
    }

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

});