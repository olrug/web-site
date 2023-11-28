import '../styles/InterestsStyle.css';
import { updatePageHistory } from './historyFunction';
import $ from 'jquery';

function createInterests(...interests) {
  const sidebar = $('.panel');
  const content = $('.interests-content');

  for (let { id, name, items } of interests) {
    const interestSidebarTitle = $('<h2></h2>').html(`${name}<a href="#${id}"></a>`);

    const interestSidebarItem = $('<ul></ul>');
    for (let [index, item] of items.entries()) {
      const itemSidebarLi = $('<li></li>').html(`<a href="#${id}${index}">${item}</a>`);
      interestSidebarItem.append(itemSidebarLi);
    }

    sidebar.append(interestSidebarTitle, interestSidebarItem);

    const interestContent = $('<h1></h1>').text(name);
    interestContent.attr('id', id);
    content.append(interestContent);

    for (let [index, item] of items.entries()) {
      const itemContent = $('<p></p>').text(item);
      itemContent.attr('id', id + index);
      content.append(itemContent);
    }
  }
}

export default {
  name: 'InterestComponent',
  mounted() {
    updatePageHistory();

    const hobbies = {
      id: "hobby",
      name: "Мои хобби",
      items: ["Игра на гитаре", "Баскетбол", "Волейбол"],
    };
    const books = {
      id: "book",
      name: "Мои любимые книги",
      items: ["Пауло Коэльо - Алхимик", "Чак Палланик - Удушье", "Брет Истон Эллис - Американский психопат"],
    };
    const music = {
      id: "music",
      name: "Моя любимая музыка",
      items: ["Mad Season - Lifeless Dead", "Alice in Chains - Swing on This", "Pantera - Cowboys from Hell","Soundgarden - Spoonman"],
    };
    const films = {
      id: "films",
      name: "Мои любимые фильмы",
      items: ["Интерстеллар", "Опенгеймер", "Барби"],
    };
      
    createInterests(hobbies, books, music, films);
  },
};