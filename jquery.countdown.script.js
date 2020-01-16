jQuery(document).ready(function($) {

			// для всех элементов, которые имеют атрибут data-timer, выполняем следующее действие
			$("[data-timer]").each(function () {

				// текущий элемент, обернутый в jquery
				var $this = $(this);
				
				// Получаем описание таймера
				var timerDescription = $this.prop('title');
				// Если у элемента есть title - прибавляем к нему двоеточие и пробел
				if (timerDescription != false) {
					timerDescription = timerDescription+': ';
				};

				// получили строку, разбили ее по ","
				var dateArr = $this.data("timer").split(",");

				// элементы массива - строки, а для new Date нужны числа
				dateArr = $.map(dateArr, function (elem) {
					return parseInt(elem);
				});

				// в html пишем "человеческие" месяцы, здесь преобразуем к js-месяцам
				dateArr[1]--;


				// конструируем даты
				var date = new Date(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4], dateArr[5]);

				// инициализируем таймер
				$this.countdown({
					// Берём дату из заранее заготовленной
					until: date,

					// Определяем шаблон вывода
					//layout:'{desc}<span>{d<}{dn} {dl} {d>}'+ 
					//'{hn} {hl}: {mn} {ml}: {sn} {sl}</span>',

					layout:'{desc}<span>{dn} : {hn} : {mn} : {sn}</span>',

					// Определяем описание
					description: timerDescription 

					// Ну и про язык не забываем
				}, $.countdown.regional['ru']);

			});
		});