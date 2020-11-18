$(document).ready(function () {

    // mult-img
    $(document).on('change', '#mult-img', function (event) {

        for (var i = 0; i < event.target.files.length; i++) {
            $('.mult-img-result').append(
                '<div class="img-uploaded uploaded-image"><i class="fas fa-times remove-appendedd"></i><img src="' +
                URL.createObjectURL(event.target.files[i]) +
                '" alt=""></div>'
            );
        }
    });
    $(document).on('click', '.remove-appendedd', function () {
        $(this).parent().remove();
    });
    //upload images
    $(function () {
        var imagesPreview = function (input, placeToInsertImagePreview) {
            $('.gallery').empty();
            if (input.files) {
                var filesAmount = input.files.length;
                for (i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        var image = document.createElement('img');
                        image.setAttribute('src', event.target.result);
                        var body = document.createElement('div');
                        var button = document.createElement('button');
                        var input = document.createElement('input');
                        input.setAttribute('name', 'images[]');
                        input.setAttribute('type', 'hidden');
                        button.setAttribute('class', 'close');
                        button.innerHTML = '<i class="fa fa-camera-retro"></i>';
                        body.appendChild(image);
                        body.appendChild(input);
                        body.appendChild(button);
                        body.setAttribute('class', 'images');
                        console.log(body);
                        $('.gallery').append(body);
                        ($($.parseHTML(body)).appendTo(placeToInsertImagePreview));
                    }
                    reader.readAsDataURL(input.files[i]);
                }
            }
        };
        $(document).on('click', '.close', function (event) {
            event.preventDefault();
            $(this).parent().remove();
        });
        $('#gallery-photo-add').on('change', function () {
            imagesPreview(this, 'div.gallery');
        });
    });
    //js
    // Viewing the uploaded image in a file input
    $(document).on("change", ".file-input", function () {
        let input = $(this),
            uploadedImage = input.siblings(".uploaded-image"),
            placeHolder = input.siblings(".placeholder"),
            fileName = input.parent().find(".file-name"),
            plus = input.siblings("i.fas.fa-camera");
        if (input.val() === "") {
            fileName.empty();
            uploadedImage.empty();
            placeHolder.removeClass("active");
            plus.fadeIn(100);
        } else {
            plus.fadeOut(100);
            fileName.text(input.val().replace("C:\\fakepath\\", ""));
            uploadedImage.empty();
            uploadedImage.append('<img src="' + URL.createObjectURL(event.target.files[0]) + '">');
        }
    });
    $(document).on("click", ".file-name", function () {
        $(this).siblings(".file-input").click();
    });

    $(document).on("click", ".uploaded-image", function () {
        $(this).addClass("active");
    });
    $("body").on("click", function () {
        $('.uploaded-image').removeClass("active");
    });

    $('.eye').click(function () {
        $(this).toggleClass('active');
        $(this).toggleClass('fa-eye-slash');
        if ($(this).hasClass('active')) {
            $(this).parent().find('input').attr('type', 'text');
        } else {
            $(this).parent().find('input').attr('type', 'password');
        }
    });
    $('.open-map').click(function () {
        $('.map').slideToggle();
    });
    $('.over-nav').fadeOut();
    $('.open-nav').click(function () {
        $('header nav .nav').toggleClass('show-nav');
        $(this).toggleClass('fa-times');
        $('.over-nav').fadeToggle();
    });
    $('header nav ul a').click(function () {
        $('header nav .nav').removeClass('show-nav');
        $('.open-nav').removeClass('fa-times');
        $('.over-nav').fadeOut();
    });
    $('.over-nav').click(function () {
        $('header nav .nav').removeClass('show-nav');
        $(this).fadeOut();
        $('.open-nav').removeClass('fa-times');
    });

    $("#owl-main").owlCarousel({
        navigation: !0,
        slideSpeed: 300,
        rtl: true,
        paginationSpeed: 400,
        dots: !1,
        items: 1,
        loop: !0,
        nav: !0,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i  class="fa fa-arrow-right" aria-hidden="true"></i>'],
        autoplayTimeout: 3000,
        itemsDesktop: !1,
        itemsDesktopSmall: !1,
        itemsTablet: !1,
        itemsMobile: !1
    });
     // Start Testamonial
     $('#owl-clients').owlCarousel({
        center: true,
        items: 3,
        dots:true,
        loop: true,
        margin: 10,
        navText: false,
        responsive: {
            320: {
                items: 1
            },

            768: {
                items: 3
            }
        }

    });
});
//loader
$(window).on('load', function () {
    $("#preloader_6").fadeOut(2000, function () {
        $("body").fadeIn(1000)
    });
});