$(function() {
    console.log('here');
    $('#input-tags').selectize({
        persist: false,
        maxItems: 1,
        valueField: 'id',
        searchField: ['title', 'description'],
        options: [
            {id: 1, title: 'DIY', description: 'https://diy.org'},
            {id: 2, title: 'Google', description: 'http://google.com'},
            {id: 3, title: 'Yahoo', description: 'http://yahoo.com'},
        ],
        render: {
            option: function(data, escape) {
                return '<div class="option">' +
                    '<span class="title">' + escape(data.title) + ' </span>' +
                    '<span class="url">' + escape(data.description) + '</span>' +
                    '</div>';
            },
            item: function(data, escape) {
                return '<div class="item">' + escape(data.title) + '</div>';
            }
        }
    });
});