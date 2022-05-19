function getRandomValue(min, max){
   return Math.floor(Math.random() * (max - min)) + min
}

Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            specialooldown:0,
            healCooldown:0,
            winner: null,
            logMessages:[]
        }
    },
    computed:{
        playerHealthBarStyle(){
            return { width: `${this.playerHealth < 0 ? 0 : this.playerHealth}%` }
        },
        mosterHealthBarStyle(){
            return { width: `${this.monsterHealth < 0 ? 0 : this.monsterHealth}%` }
        }
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw'
            }
            else if(value <= 0){
                this.winner = 'monster'
            } 
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw'
            }
            else if(value <= 0){
                this.winner = 'player'
            } 
        }
    },
    methods:{
        playerSimpleAttack(){
            const playerDamage = getRandomValue(2, 12)
            this.monsterHealth -= playerDamage
            this.mosterSimpleAttack()
            this.addLogMessage('player', 'attacks', playerDamage)
            if(this.specialooldown > 0){
                this.specialooldown -= 1
            }
            if(this.healCooldown > 0){
                this.healCooldown -= 1
            }

        },
        mosterSimpleAttack(){
            const monsterDamage = getRandomValue(6, 17)
            this.addLogMessage('monster', 'attacks', monsterDamage)
            this.playerHealth -= monsterDamage
        },
        playerSpecialAttack(){
            const playerDamage = getRandomValue(8, 23)
            this.monsterHealth -= playerDamage
            this.addLogMessage('player', 'brutaly attacks', playerDamage)
            this.mosterSimpleAttack()
            this.specialooldown = 3;
            if(this.healCooldown > 0){
                this.healCooldown -= 1
            }
        },
        playerHeal(){
            const playerHealing = getRandomValue(12, 22)
            this.playerHealth += playerHealing
            this.addLogMessage('player', 'heals', playerHealing)
            if(this.playerHealth > 100){
                this.playerHealth = 100
            }
            this.mosterSimpleAttack()
            this.healCooldown = 3;
            if(this.specialooldown > 0){
                this.specialooldown -= 1
            }
        },

        restart(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.specialooldown = 0
            this.healCooldown = 0;
            this.logMessages=[];
        },

        surrender(){
            this.winner = 'monster'
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
       
    }
}).mount('#game')