/*
Descrizione: Rifare l’esercizio dello slider come fatto assieme in classe.
Bonus:
Applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
Se clicco sul singolo dot, cambia immagine
*/

Vue.config.devtools = true;

const app = new Vue(
    {
        el:'#app',
        data:{
            contentImg: [
                './img/img1.jpg',
                './img/img2.jpg',
                './img/img3.jpg',
                './img/img4.jpg',
                './img/img5.jpg',
                './img/img6.jpg',
            ],
        },

    }
)