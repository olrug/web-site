import '../styles/PhotoStyle.css';
import { updatePageHistory } from './historyFunction';
import $ from 'jquery';

export default {
  name: "PhotoComponent",
  mounted() {
    updatePageHistory();

    const photos = [
      require("../assets/photoalbum/patrick_1.jpg"),
      require("../assets/photoalbum/patrick_2.jpg"),
      require("../assets/photoalbum/patrick_3.jpg"),
      require("../assets/photoalbum/patrick_4.jpg"),
      require("../assets/photoalbum/patrick_5.jpg"),
      require("../assets/photoalbum/patrick_6.jpg"),
      require("../assets/photoalbum/patrick_7.jpg"),
      require("../assets/photoalbum/patrick_8.jpg"),
      require("../assets/photoalbum/patrick_9.jpg"),
      require("../assets/photoalbum/patrick_10.jpg"),
      require("../assets/photoalbum/patrick_11.jpg"),
      require("../assets/photoalbum/patrick_12.jpg"),
      require("../assets/photoalbum/patrick_13.jpg"),
      require("../assets/photoalbum/patrick_14.jpg"),
      require("../assets/photoalbum/patrick_15.jpg")
    ];

    const titles = [
      "Первый Патрик Бэйтмэн!",
      "Второй Патрик Бэйтмэн!",
      "Третий Патрик Бэйтмэн!",
      "Четвертый Патрик Бэйтмэн!",
      "Пятый Патрик Бэйтмэн!",
      "Шестой Патрик Бэйтмэн!",
      "Седьмой Патрик Бэйтмэн!",
      "Восьмой Патрик Бэйтмэн!",
      "Девятый Патрик Бэйтмэн!",
      "Десятый Патрик Бэйтмэн!",
      "Одинадцатый Патрик Бэйтмэн!",
      "Двенадцатый Патрик Бэйтмэн!",
      "Тринадцатый Патрик Бэйтмэн!",
      "Четырнадцатый Патрик Бэйтмэн!",
      "Пятнадцатый Патрик Бэйтмэн!",
    ];

    const photoContainer = $('#photoContainer');

    for (let i = 0; i < photos.length; i++) {
      if (i % 3 === 0) {
        const row = $('<div class="row"></div>');
        photoContainer.append(row);
      }

      const photoDiv = $('<div></div>');
      const img = $('<img>');
      const caption = $('<p></p>');

      img.attr('src', photos[i]);
      img.attr('title', titles[i]);
      caption.text(`Патрик - ${i + 1}`);

      photoDiv.append(img);
      photoDiv.append(caption);

      const currentRow = photoContainer.children().last();
      currentRow.append(photoDiv);
    }

    const popup = $('.PhotoWrap .pop-up');
    const popupImage = $('.PhotoWrap .pop-up img');
    const closeButton = $('.PhotoWrap .pop-up span');
    const leftButton = $('.PhotoWrap .pop-up .button-left');
    const rightButton = $('.PhotoWrap .pop-up .button-right');
    let currentImageIndex = 0;

    const openPopup = (index) => {
      popup.css('display', 'block');
      popupImage.attr('src', photos[index]);
      currentImageIndex = index;
    };

    const closePopup = () => {
      popup.css('display', 'none');
    };

    const showPreviousImage = () => {
      if (currentImageIndex === 0) {
        currentImageIndex = photos.length - 1;
      } else {
        currentImageIndex--;
      }
      popupImage.fadeOut(200, function() {
        popupImage.attr('src', photos[currentImageIndex]);
        popupImage.fadeIn(200);
      });
    };

    const showNextImage = () => {
      if (currentImageIndex === photos.length - 1) {
        currentImageIndex = 0;
      } else {
        currentImageIndex++;
      }
      popupImage.fadeOut(200, function() {
        popupImage.attr('src', photos[currentImageIndex]);
        popupImage.fadeIn(200);
      });
    };

    $('.PhotoWrap .lol img').on('click', function() {
      const index = $(this).index();
      openPopup(index);
    });

    closeButton.on('click', closePopup);
    leftButton.on('click', showPreviousImage);
    rightButton.on('click', showNextImage);
  }
};