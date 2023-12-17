$(document).ready(function () {
    $(".userdescriptiontext").hide()
    $(".userdescription").click(function () {
        $(".userdescriptiontext").toggle(1000)
    })
    const idpar = new URLSearchParams(location.search).get('id');
    $.ajax(`https://my-json-server.typicode.com/van2011/test/users/${idpar}`, {
        dataType: "json",
        data: { limit: 127 },
        success: function (result) {
            $('.kvadratkvadrat').append(`
            <div class="kvadrat">
            <div class="ititle itext">${result.name}</div>
            <div class="ititle itext">${result.sirname}</div>
            <img class="ipng itext"
                src="${result.photo_url}" />
            <div class="descriptiontext">${result.descriptiontext}</div>
            </div>
        `)
        }
    })
    $.ajax(`https://my-json-server.typicode.com/van2011/test/products?author_id=${idpar}`, {
        dataType: "json",
        data: { limit: 127 },
        success: function (result) {
            result.forEach(result => {

                $('.kub').append(`
            <div class="kvadrat">
    
            <div class="ititle itext">${result.name}</div>
            <img class="ipng itext"
                src="${result.photo_url}" />

            <div class="descriptiontext">${result.descriptiontext}</div>
        </div>
                
        `)
            });

        }


    })

})


