function getRendomValue(min, max){
    return Math.floor(Math.random()*(max-min))+min
}
 let currentRound = 0
const app = Vue.createApp({

    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        }
    },
    computed: {
        monsterBatalBar() {
            return {width: this.monsterHealth + '%'}
            
        },
        playerBatalBar() {
            return {width: this.playerHealth + '%'}
        },
        mayUseSpeacialAttack(){
            return this.currentRound % 3 !==0
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attakValue =getRendomValue(5, 12)
            this.monsterHealth -= attakValue;
            this.attackPlayer()
        },
        attackPlayer() {
            const attakValue =getRendomValue (8, 15)
            this.playerHealth -= attakValue;
        },
        specialAttackMonster(){
            this.currentRound++;
            const attakValue =getRendomValue (10, 25)
            this.monsterHealth -= attakValue
            this.attackPlayer()
        }, 
        healPlayer(){
         const healValue =getRendomValue(5, 12)
         if(this.playerHealth + healValue > 100){
            this.playerHealth= 100;
         }else {
            this.playerHealth += healValue
         }
         this.attackPlayer()

        }
    }


})


app.mount('#game')