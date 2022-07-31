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
            winner: null,
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
    watch: {
        playerHealth(value){
            if (value <= 0 && this.monsterHealth <= 0){
                
                this.winner = 'draw'
            } else if (value <= 0){
                this.winner = 'monster'
            }
        },
        monsterHealth(value){
            if (value <= 0 && this.playerHealth <=0){
              this.width = 'draw'
            } else if (value <= 0){
                this.winner = 'player'
            }
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
        //  this.attackPlayer() 

        }
    }


})


app.mount('#game')