var slideout = new Slideout({
	'panel': document.getElementById('panel'),
	'menu': document.getElementById('menu'),
	'padding': 768,
	'tolerance': 70,
	'touch': false
  });

$(document).ready(function() {
	// Header phone
	$('#units').click(function(){
		$('.tel__list').toggleClass('active');
		$(this).toggleClass('active');
	});

	// Sticky header
	$(window).scroll(function() {
		if ($(this).scrollTop() > 180) {
			$('#header').css({top: '-100px'});
		} else {
			$('#header').css({top: '0px'});
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 210) {
			$('#header').addClass('sticky').css({top: 0});
			$('.header_logo_wrap').removeClass('col-lg-3').addClass('col-lg-1');
			$('.header_search_wrap').removeClass('col-lg-7').addClass('col-lg-8');
		} else {
			$('#header').removeClass('sticky');
			$('.header_logo_wrap').removeClass('col-lg-1').addClass('col-lg-3');
			$('.header_search_wrap').removeClass('col-lg-8').addClass('col-lg-7');
		}
	});

	// Sticky header menu
    $('.hamburger').click(function() {
    	$('.header-inner__btn').toggleClass('active');
    	$('.header-inner__overlay').toggleClass('active');
    	if($('.header-inner__btn').hasClass('active')){
    		$('body').css({
    			'overflow-y': 'hidden'
    		});
    	} else {
    		$('body').css({
    			'overflow-y': 'auto'
    		});
    	}
    })
    $('.header-inner__overlay').click(function(){
    	$('.header-inner__btn').removeClass('active');
    	$('.header-inner__overlay').removeClass('active');
    	$('body').css({
    		'overflow-y': 'auto'
    	});
    });

	// Slider
	$('.car__slider').slick({
		vertical: true,
		prevArrow: '<button type="button" class="car__prevArrow"><span></span></button>',
		nextArrow: '<button type="button" class="car__nextArrow"><span></span></button>'
	});

	 $('.slider-for').slick({
	 	lazyLoad: 'ondemand',
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
	  	asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		lazyLoad: 'ondemand',
		vertical: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	asNavFor: '.slider-for',
	  	dots: false,
	  	centerMode: true,
	  	focusOnSelect: true,
	  	prevArrow: '<button type="button" class="slider__prevArrow"><span></span></button>',
		nextArrow: '<button type="button" class="slider__nextArrow"><span></span></button>'
	});
	$('.car__control_wrap').slick({
		infinite: false,
		slidesToScroll: 1,
		slidesToShow: 9,
		prevArrow: '<button type="button" class="details__prevArrow"><span></span></button>',
		nextArrow: '<button type="button" class="details__nextArrow"><span></span></button>'
	});
	$('.cars_slider').slick({
		infinite: false,
		slidesToScroll: 1,
		slidesToShow: 5,
		variableWidth: true,
		prevArrow: '<button type="button" class="details__prevArrow details_arrow_product"><span></span></button>',
		nextArrow: '<button type="button" class="details__nextArrow details_arrow_product"><span></span></button>',
		responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 2
		      }
		  },
		  {
			breakpoint: 800,
			settings: {
			  slidesToShow: 1
			}
		  }
	  	]
	});

	$('.slider-cg').slick({
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
		]
	})

	$('.banner__list').slick({
		infinite: false,
		slidesToScroll: 1,
		slidesToShow: 5,
		variableWidth: true,
		prevArrow: '<button type="button" class="banner__prevArrow details_arrow_product"><span></span></button>',
		nextArrow: '<button type="button" class="banner__nextArrow details_arrow_product"><span></span></button>'
	});


	// Accordion
	$('.accordion').accordionjs({
        activeIndex: false,
        closeAble: true,
        closeOther: true
    });

    // Input mask
	$('.phone').mask('+7(999) 999 99 99');


    // Tabs
    $('.tabs_item').not(":first").hide();
    $('.tabs_btn button.tabs_check').click(function() {
    	$('.tabs_btn button.tabs_check').removeClass('active').eq($(this).index()).addClass('active');
    	$('.tabs_item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');

    // Range slider
    $(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 1000,
		skin: "round",
		hide_min_max: true,
		hide_from_to: true,
		onStart: function (data) {
    		$('.slide-from').text(data.from);
    		$('.slide-to').text(data.to);
        },
        onChange: function (data) {
    		$('.slide-from').text(data.from);
    		$('.slide-to').text(data.to);
        },
    });

    $('.category__details_title, .card__details_title').matchHeight();

	$('.car__slide, .category__list li, .card__details_item, .income__list > li').each(function(){
	 	let exclink = $(this).find('a').attr('href');
	 	$(this).css({
                "cursor": "pointer"
            }).click(function() {
                window.location.href = exclink;
            });
	});

	const elems = $('.sidebar_acc_body > li');
	elems.on('change', function(e) {
		e = $(e.target);
		elems.removeClass('active');
		if( e.prop('checked') ) {
			e.parents('li').addClass('active');
		} else {
			const checked = elems.find('input:checked');
      		$(checked[checked.length - 1]).parents('li').addClass('active');
		}
	});

	//

			    //Accordion
				var Accordion = function(el, multiple) {
					this.el = el || {};
					this.multiple = multiple || false;

					// Variables privadas
					var links = this.el.find('.link');
					// Evento
					links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
				}

				Accordion.prototype.dropdown = function(e) {
					var $el = e.data.el;
						$this = $(this),
						$next = $this.next();

					$next.slideToggle();
					$this.parent().toggleClass('open');

					if (!e.data.multiple) {
						$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
					};
				}

				var accordion = new Accordion($('.accordion'), false);

				// Subaccordion
				var Accordion = function(el, multiple) {
					this.el = el || {};
					this.multiple = multiple || false;

					// Variables privadas
					var links = this.el.find('.sublink');
					// Evento
					links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
				}

				Accordion.prototype.dropdown = function(e) {
					var $el = e.data.el;
						$this = $(this),
						$next = $this.next();

					$next.slideToggle();
					$this.parent().toggleClass('open');

					if (!e.data.multiple) {
						$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
					};
				}

				var accordion = new Accordion($('.subaccordion'), false);

				$('.sublink').click(function () {
				});


				//Modal - window - profile

				$(".data__btn").click(function(e) {
					e.preventDefault();
					$(".data").css({"display":"none"});
					$(".data-edit").css({"display":"block"});
				});

				$(".close").click(function(e) {
					e.preventDefault();
					$(".data-edit").css({"display":"none"});
					$(".data").css({"display":"block"});
				});


				///////////////



				// arcticmodal
				$('#order_call, #order_call_mobile').on('click', function(){
					$('#exampleModal').arcticmodal();
				  });

				  $('#order_call-next').on('click', function(){
					$('#exampleModal').arcticmodal();
				  });

				  $('#login, #login-from-mobile-menu').on('click', function(){
					$('#exampleModal2').arcticmodal();
				  });

				  $('#enter').on('click', function(){
					$('#exampleModal2').arcticmodal();
					$('#exampleModal3').arcticmodal('close');
				  });

				  $('#register').on('click', function(){
					$('#exampleModal3').arcticmodal();
				  });

				  $('#forgot').on('click', function(){
					$('#exampleModal4').arcticmodal();
				  });

				  $('#register, #forgot').on('click', function(){
					$("#exampleModal2").arcticmodal('close');
				  });




	// =================================================================================




	     // Toggle button
		document.querySelector('.toggle-button').addEventListener('click', function() {
			slideout.toggle();
		});

			//=======================================================================
			// СОЗДАНИЕ МЕНЮ ИСХОДЯ ИЗ ИМЕЮЩИХСЯ НА СТРАНИЦЕ УЗЛОВ                 //
			// ======================================================================

		    // количество открытий меню
			var timesMenuWasOpened = 0

			// МЕНЮ СОЗДАЁТСЯ ПРИ КЛИКЕ НА .menu-mobile
			$('.menu-mobile').on('click', function(){
				// если меню было откыто больше чем 1 раз, перерисовка и добавление элементов не происходит
				if(timesMenuWasOpened < 1){

				// клонирует выбранные дочерние элементы #header

				// клонирует логотип
				$('#header .header_logo_wrap').clone().appendTo('#menu .content-mobile-container')
				// клонирует бургер
				$('#header .menu-mobile').clone().appendTo('#menu .content-mobile-container')

				// клонирует иконку звонка
				$('#header .header__call-wrapper').clone().appendTo('#menu .content-mobile-container')
				// заменяет id у иконки звонка (для вызова модального окна)
				$('#menu  #order_call').removeAttr('id', 'order_call').attr('id', 'order_call_mobile')

				// привязка данного id к открытию модального окна по клику.
				// поскольку привязка в других частях кода привязывает только
				// id у уже существующих элементов, это приходится делать здесь
				$('#order_call_mobile').on('click', () => $('#exampleModal').arcticmodal())

				// клонирует иконку корзины
				$('#header .header__basket-wrapper').clone().appendTo('#menu .content-mobile-container')

				// клонирует иконку лог-ин`а
				$('#header .header__login-wrapper').clone().appendTo('#menu .content-mobile-container')

				// $('.offer-wrap__item-e').each(function(){
				// 	$(this).clone().appendTo('.new-entrance')
				// 	$('.new-entrance .offer-wrap__item').removeClass('col-5')
				// 	$('.new-entrance .offer-wrap__item').removeClass('offset-1')
				// })

				// создаёт аккордионы с адресами и телефонами
				// информацию берёт из элементов хедера ".tel-item"
				// в аттрибудет href = tel: записывает то же значение, что указано внтри
				// элемента
				$('.tel__item').each(function( index ) {
					$('.submenu_info>.subaccordion').append(`
					<li>
						<div class="sublink">${$(this).find('.place').text()}
							<span class="arrow-down second"></span>
						</div>
						<div class="submenu">
							<ul>
								<li class="d-flex subaccordion">
									<div class="info-left">
									<img src="img/phone-call2.png" alt="Phone">
										<a href=\"tel:+7${$(this).find('.phone-number').text()}\">
											+7 ${$(this).find('.phone-number').text()}
										</a>
									</div>
								<div class="info-right">
									<span>${$(this).find('.tel__time').text()}</span>
									<span>${$(this).find('.tel__time').text()}</span>
								</div>
								</li>
								<li class="subaccordion">
									<div class="info-left">
										<img src="img/way.png" alt="Адресс">
										Улица Ленина, дом 1
									</div>
								</li>
								<li class="d-flex subaccordion">
									<div class="info-left">
										<strong>GPS:</strong> 59.812057, 30.399848
						   			</div>
						  			<div class="info-right">
							  			<a href="#">Найти на карте</a>
						  			</div>
								</li>
							</ul>
						</div>
					</li>
				`);

				})
				// делает каждый из созданных айтемов экземпляром класса Accordion
				var accordionMob = new Accordion($('.subaccordion'), false);

				// создаёт каталог выбора запчастей по узлам

				// данный метод создаёт верхний уровень аккордионов
				// названия и картинки берёт из дочерних элементов классов ".detail-category"
				// данные классы добавил я и внутрь дочерними элементами к каждому положил соответствующую
				// картинку с классом ".details-category__img", и скрыл её с помощью display:none
				$('.details-category').each(function( index ){
					// создаёт столько экземпляров node-search, сколько существует элементов
					// .details-category
					// каждому экземпляру добавляет класс, оканчивающийся на значение index+1
					// т.е, начиная с 1
					$('.node-search').append(`
						<div class="col-6">
							<div class="node">
								<a href="#" class=\"node__btn node__btn_${index+1}\">
								<img src=\"${$(this).find('.details-category__img').attr('src')}\" class="node__img" alt="Узел">
								<h2 class="node__title">${$(this).find('.details-category__name').text()}</h2>
							</a>
						</div>
					</div>
					`)

					// присваивает каждому эземпляру по клику отображение своего
					// окна с поиском деталей по буквам
					$(`.node__btn_${index+1}`).click(function() {
						$(".node-search").css({"display":"none"});

						// на данный момент на странице имеется, только одно такое окно
						// с id #elemUnit1
						// чтобы добавить окно поиска для следующей категории деталей
						// нужно просто создать список наподобии #elemUnit1,
						// но присвоить ему id "elemUnit2" , "3" и так далее
						$(`#alpha-wrap-${index+1}`).css({"display":"block"});
					});

					// для каждого из окон поиска деталей создаёт внутреннюю структуру.
					// буквы и айтемы берёт из окон соответственно порядковому номеру id
					// так, для первого .node-btn берёт информацию из #elemUnit1
						$('.alpha-wraps').append(`
							<div class="alpha-wrap" id=\"alpha-wrap-${index+1}\">
							<h2 class="alpha-wrap__head">
								${$(this).find('.details-category__name').text()}
								<span class="alpha-close"></span>
							</h2>

							<ul class="alpha-list">
								${
									// создаёт самовызывающуюся функцию, которая создаёт
									// заглавные буквы для каждого раздела поиска деталей
									// а так же другую самовызывающуюся фунцию, создающую
									// айтемы под каждой из букв раздела
									(function makeList() {
										let template = '';

									 (function printCharacters(){

										// массив для заглавных букв раздела
										let sumOfCharacters = [];

										// перебирает все id #elemUnit[номер], начиная с
										// elemUnit1 и забирает из них заглавные буквы каталога
										// и айтемы под заглавными буквами каталога
										// возвращает готовый html темплейт и встраивает в страницу
										$(`#elemUnit${index+1} .unit__details`).each(function(){
											// запоминаем локальный контекст для дальнейшего обращения к
											// this в функциях уровнем ниже
											let localThis = $(this)
											// на каждой итерации формируем и добавляем новый html шаблон
											// элементов списка поиска деталей в массив
											sumOfCharacters.push(`
												<li class="alpha-list__item">
													<span>${localThis.find('span').text()}</span>
													<ul class="category">
														${
															// добавляем под каждую буквы соответствующее число айтемов
															(function printItems(){
																// массив html-шаблонов каждого айтема под конкретной буквой
																let sumOfItems = [];

																	$(localThis).find('a').each(function(){
																		sumOfItems.push(`
																			<li class="category__item">
																				<a href="#" class="category__btn">
																					${$(this).text()}
																				</a>
																 			</li>
																		`)

																	})

																	// встаиваем все айтемы под букву
																	return sumOfItems.map((x) => x)

															})()
														}
													</ul>
												</li>
											`)
										})
										// возвращаем готовый побуквенный список поиска на каждой итерации
										// итераций столько, сколько присутствует .details-category
										return sumOfCharacters.map((x) =>{
											let xR = x.replace(/,/g, '');
											template += xR
											return xR
										})
									})()
									return template
									})()
								}
							</ul>

							<ul class="alphabet__menu">
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">Б</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">В</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">Г</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">З</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn part-active">К</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">М</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">Н</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">П</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">Р</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">С</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">Т</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">Ф</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">Ц</a>
								</li>
								<li class="alphabet__item">
									<a href="#" class="alphabet__btn">Ш</a>
								</li>
							</ul>
						</div>
						`)

					$(".alpha-wrap__head").click(function() {
						$(`#alpha-wrap-${index+1}`).css({"display":"none"});
						$(".node-search").css({"display":"flex"});
					});

				})



				// добавляет специальный класс для закрытия меню продублированной
				// кнопке-бургер
				$('#menu .menu-toggle').addClass('close-btn')

						//  меню закрывается по клику на бургер
						  $('.close-btn').on('click', function(){
							slideout.close();
						  });
			}
			// увеличиваем количество открытий меню на одно
			timesMenuWasOpened++;
		 })

    $('.details-category, .submenu-inner__item').click(function() {

        $(this).siblings().removeClass('active');
        if( $(this).hasClass('active') ) {
        	$(this).removeClass('active');
        } else {
        	$(this).addClass('active');
        }

        return false;
	});

	$('.header__nav .nav__list .nav__item:first-child').mouseleave(function() {

        $('.details-category, .submenu-inner__item').each(function(){
         $(this).removeClass('active');
        });

 });

    $('body').on('click',function(){ $('.details-category, .submenu-inner__item').removeClass('active'); });



    		function translateAutoBrandItems() {
    		if (window.matchMedia('(max-width: 767px)').matches) {

    			$('.main__block .auto__item').each(function(index){
			 		if(index % 2 === 0){
				  		$(this).addClass('col-6 pl-3 pr-2').appendTo('.main .offer-wrap__menu')
			 		}
			 		else{
						$(this).addClass('col-6 pl-2 pr-3').appendTo('.main .offer-wrap__menu')
			 		}
		 		})
    		}

    		else {
    			$('.main .offer-wrap__menu .auto__item').each(function(index){
    				$(this).appendTo('.main__block .auto__list').removeClass('col-6 pl-2 pr-3 pl-3 pr-2')
    			})
    		}
		}

		// прикручиваем event listener и инициализируем фукнцию
		// если мы находимся на странице "index.html"
		if($('.is-main').length){
			translateAutoBrandItems()
			$(window).on('resize', translateAutoBrandItems)
		}

		function translateSidebar(item, destinationParent) {
			$(item).each(function(index){
				let localThis = $(this)
				$(destinationParent).each(function(i){
					if (i === index) {
						localThis.appendTo($(this))
					}
				})
			})
		}

		function translateSidebar_MEDIA(){

			if (window.matchMedia('(max-width: 767px)').matches) {
				translateSidebar('.cross .sidebar .sidebar_acc_body', '.filter-wrap-position')
				$('.sort_container').addClass('pt-3').appendTo('.subaccordion-cg .sort')
				// $('.cross__prise-and-avail-wrap').appendTo('.cross__item_img')
			}
			else{
				translateSidebar('.filter-wrap-position .sidebar_acc_body', '.cross .sidebar .accordion_item')
			}
		}

		// прикручиваем event listener и инициализируем фукнцию
		// если мы находимся на странице "crossgroup.html"
		if ($('.cross').length) {
			new Accordion($('.cross .subaccordion-cg'), false);
			translateSidebar_MEDIA()
			$(window).on('resize', translateSidebar_MEDIA)
		}
});
