import '../styles/InterestsStyle.css'

function createInterests(...interests) {
  const sidebar = document.querySelector('.panel');
  const content = document.querySelector('.interests-content');

  for (let { id, name, items } of interests) {
      const interestSidebarTitle = document.createElement('h2');
      interestSidebarTitle.innerHTML = `${name}<a href="#${id}"></a>`;

      const interestSidebarItem = document.createElement('ul');
      for (let [index, item] of items.entries()) {
          const itemSidebarLi = document.createElement('li');
          itemSidebarLi.innerHTML = `<a href="#${id}${index}">${item}</a>`;
          interestSidebarItem.append(itemSidebarLi);
      }

      sidebar.append(interestSidebarTitle, interestSidebarItem);
      
  
      const interestContent = document.createElement('h1');
      interestContent.textContent = name;
      interestContent.id = id;
      content.append(interestContent);

      for (let [index, item] of items.entries()) {
          const itemContent = document.createElement('p');
          itemContent.textContent = item;
          itemContent.id = id + index;
          content.append(itemContent);
      }
  }
}

export default {
  name: 'InterestComponent',
  mounted() {
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