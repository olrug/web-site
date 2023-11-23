import '../styles/PhotoStyle.css';
import { updatePageHistory } from './historyFunction';


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

    const photoContainer = document.getElementById("photoContainer");

    for (let i = 0; i < photos.length; i++) {
      if (i % 3 === 0) {
        const row = document.createElement("div");
        row.classList.add("row");
        photoContainer.appendChild(row);
      }

      const photoDiv = document.createElement("div");
      const img = document.createElement("img");
      const caption = document.createElement("p");

      img.src = photos[i];
      img.title = titles[i];
      caption.textContent = `Патрик - ${i + 1}`;

      photoDiv.appendChild(img);
      photoDiv.appendChild(caption);

      const currentRow = photoContainer.lastElementChild;
      currentRow.appendChild(photoDiv);
    }

    const popup = document.querySelector('.PhotoWrap .pop-up');
    const popupImage = document.querySelector('.PhotoWrap .pop-up img');
    const closeButton = document.querySelector('.PhotoWrap .pop-up span');
    const leftButton = document.querySelector('.PhotoWrap .pop-up .button-left');
    const rightButton = document.querySelector('.PhotoWrap .pop-up .button-right');
    let currentImageIndex = 0;

    const openPopup = (index) => {
      popup.style.display = 'block';
      popupImage.src = photos[index];
      currentImageIndex = index;
    };

    const closePopup = () => {
      popup.style.display = 'none';
    };

    const showPreviousImage = () => {
      if (currentImageIndex === 0) {
        currentImageIndex = photos.length - 1;
      } else {
        currentImageIndex--;
      }
      popupImage.src = photos[currentImageIndex];
    };

    const showNextImage = () => {
      if (currentImageIndex === photos.length - 1) {
        currentImageIndex = 0;
      } else {
        currentImageIndex++;
      }
      popupImage.src = photos[currentImageIndex];
    };

    document.querySelectorAll('.PhotoWrap .lol img').forEach((img, index) => {
      img.onclick = () => {
        openPopup(index);
      };
    });

    closeButton.onclick = () => {
     closePopup();
    };

    leftButton.onclick = () => {
      showPreviousImage();
    };

    rightButton.onclick = () => {
      showNextImage();
    };
  },
  
};