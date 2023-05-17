
  // добавление пробелов в номере карты
const cardNumberInput = document.getElementById('cardNumber');
      
        function formatCardNumber() {
          const cardNumber = cardNumberInput.value.replace(/\D/g, ''); // удаляем все символы, кроме цифр
          const cardNumberFormatted = cardNumber.replace(/(\d{4})/g, '$1 '); // добавляем пробел после каждой четвёртой цифры
          cardNumberInput.value = cardNumberFormatted.trim(); // удаляем лишние пробелы в начале и конце
        }

        cardNumberInput.addEventListener('input', formatCardNumber);



      // Изменение формата ввода срока действия
        const expiryDateInput = document.getElementById('expiryDate');
      
        function formatExpiryDate() {
          let expiryDate1 = expiryDateInput.value.replace(/\D/g, ''); // удаляем все символы, кроме цифр
          const month = expiryDate1.substring(0, 2); // извлекаем месяц из строки
          const year = expiryDate1.substring(2, 4); // извлекаем год из строки
          const currentYear = new Date().getFullYear().toString().substring(2, 4); // текущий год
          const minYear = parseInt(currentYear) + 10; // минимальный год
          const maxYear = parseInt(currentYear) - 1; // максимальный год
          const currentDate = new Date(); // текущая дата
          const expiryDate = new Date('20' + year, month - 1, 1); // дата, введенная пользователем

            if (month > 12) {
                console.log('Меньше 13');
                expiryDateInput.value = "";
                return;
            } 

            if (year > currentYear + 10 ) {
                console.log('Меньше 2033');
                expiryDateInput.value = "";
                return;
            } 

          expiryDateInput.value = month + (year.length ? '/' + year : ''); // форматируем дату в нужный вид
        }
      
        expiryDateInput.addEventListener('input', formatExpiryDate);        