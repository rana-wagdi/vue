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
            logMessage:[],
        }
    },
    computed: {
        monsterBatalBar() {
        if (this.monsterHealth <= 0) {
            return {width: '0%'}
        }
            return {width: this.monsterHealth + '%'}
            
        },
        playerBatalBar() {
           if (this.playerHealth <= 0) {
            return {width: '0%'}
        }
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
    startGame() {
          this.playerHealth= 100,
            this.monsterHealth = 100,
            this.currentRound = 0,
            this.winner = null,
            this.logMessage = []
    },
        attackMonster() {
            this.currentRound++;
            const attakValue =getRendomValue(5, 12)
            this.monsterHealth -= attakValue;
            this.addLogMessage('player', 'attack', attakValue)
            this.attackPlayer()
        },
        attackPlayer() {
            const attakValue =getRendomValue (8, 15)
            this.playerHealth -= attakValue;
            this.addLogMessage('monster', 'attack', attakValue)
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
            this.addLogMessage('player', 'heal',healValue)

        },
        surrender(){
          return  this.winner= 'monster'
        },
        addLogMessage(who, what, value){
            this.logMessage.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
        
    }


})


app.mount('#game')