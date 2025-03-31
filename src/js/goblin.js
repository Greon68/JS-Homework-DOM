'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let btnStart = document.querySelector('.btn-start')
    // console.log(btnStart)

    // создаем игру :
    function createGame(){

        console.log('Игра запущена')

        // создаём поле игры
        let holeGame = document.createElement('div')
        holeGame.className= "hole-game";
        btnStart.after(holeGame);

        // создаём лунки:
        for (let i=0; i<16; i++){
        let hole = document.createElement('div');
        hole.className = "hole";
        // hole.textContent= `${i}`;
        holeGame.append(hole);
        };

        // Добавляем кнопку останова игры
        const btnStop = document.createElement('button');
        btnStop.className = 'btn-stop';
        btnStop.textContent = "Стоп-игра";
        holeGame.append(btnStop);
     
        //    Создаём гоблина
    
        let holes = document.querySelectorAll("div.hole");
        // console.log(holes);

        // Гоблин в нулевой лунке
        // holes[0].classList.add('hole_has-goblin');

        // Располагаем гоблина в одной из 16 лунок рандомно
        holes[Math.floor(Math.random() * 16)].classList.add('hole_has-goblin');
      
        // Запускаем гоблина 
        // Поиск индекса элемента , отображающего картинку
        function getIndex() {
            for (let i = 0; i < 16; i++){
                if (holes[i].classList.contains( 'hole_has-goblin' )){
                    // console.log(` Предыдущая лунка ${i}`);
                    return i               
                }        
            }      
        }
    
        
        // Удаляем картинку из лунки:

        const deleteGoblin = () => holes[getIndex()].className = 'hole';
   
        // Задаём индекс элемента для следующего показа картинки .
        // Он не должен совпадать с предыдущим
        function nextIndex() {
            let previousIndex = getIndex();
            let index = Math.floor( Math.random() * 16 );
            // До тех пор , пока оба индекса совпадают, 
            // меняем значение индекса следующей лунки
            while(previousIndex == index) {
                index = Math.floor( Math.random() * 16 );
            };
            // console.log(`Cледующая лунка- ${index}`)
            return index       
        }
    

    
    
        // Добавляем картинку в лунку 
        const addGoblin = () => holes[nextIndex()].classList.add("hole_has-goblin");
               
        //  Меняем разположение картинки каждую 1 секунду
        setInterval ( ()=> {
            // console.log(` Предыдущая лунка ${getIndex()}, cледующая - ${nextIndex()}`)
            deleteGoblin();
            addGoblin();       
        },1000 )
      
        // Удаление игры
        const stopGame = () => {
            holeGame.remove() ;  
            console.log('Игра остановлена')}

        // Реакция кнопки btnStop на клик 
        btnStop.addEventListener('click', stopGame)
    }

    // Запускаем игру нажатием кнопки "Играем"
    btnStart.addEventListener('click', createGame)

})

