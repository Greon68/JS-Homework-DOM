// ДЗ DOM

document.addEventListener("DOMContentLoaded", () => {
  let holes = document.querySelectorAll("div.hole");
  // console.log(holes);

  // Поиск индекса элемента , отображающего картинку
  function getIndex() {
    for (let i = 0; i < 16; i++) {
      if (holes[i].classList.contains("hole_has-goblin")) {
        // console.log(` Предыдущая лунка ${i}`);
        return i;
      }
    }
  }

  // Удаляем картинку из лунки:

  const deleteGoblin = () => (holes[getIndex()].className = "hole");

  // Задаём индекс элемента для следующего показа картинки .
  // Он не должен совпадать с предыдущим
  function nextIndex() {
    let previousIndex = getIndex();
    let index = Math.floor(Math.random() * 16);
    // До тех пор , пока оба индекса совпадают,
    // меняем значение индекса следующей лунки
    while (previousIndex == index) {
      index = Math.floor(Math.random() * 16);
    }
    // console.log(`Cледующая лунка- ${index}`)
    return index;
  }

  // Добавляем картинку в лунку

  const addGoblin = () => holes[nextIndex()].classList.add("hole_has-goblin");

  //  Меняем разположение картинки каждые 0.5 секунды
  setInterval(() => {
    console.log(` Предыдущая лунка ${getIndex()}, cледующая - ${nextIndex()}`);
    deleteGoblin();
    addGoblin();
  }, 500);
});
