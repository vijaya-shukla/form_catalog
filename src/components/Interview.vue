<template>
    <div>
        <div><Navbar/></div>
        <div class="divsidcen">
          <div class="sidenav">
            <ol>
              <li @click="activeTab = 'Quesone'"><b>Question #1</b></li>
              <li @click="activeTab = 'Questwo'"><b>Question #2</b></li>
              <li @click="activeTab = 'Questhree'"><b>Question #3</b></li>
              <li @click="activeTab = 'Quesfour'"><b>Question #4</b></li>
            </ol>
          </div>
        <div class="center">
          <Quesone v-if="activeTab === 'Quesone'" @updatestep="callonupdatestep"/>
         <Questwo v-if="activeTab === 'Questwo'" @updatestep="callonupdatestep"/>
         <Questhree v-if="activeTab === 'Questhree'" @updatestep="callonupdatestep"/>
         <Quesfour v-if="activeTab === 'Quesfour'"/>
        </div>
        </div>
        <button class="prevbutton" @click="prev()">Previous</button>
        <button class="submit" @click="submit()">Submit</button>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Quesone from '@/components/Quesone.vue'
import Questwo from '@/components/Questwo.vue'
import Questhree from '@/components/Questhree.vue'
import Quesfour from '@/components/Quesfour.vue'
import swal from 'sweetalert'
export default{
  data () {
    return {
      activeTab: 'Quesone'
    }
  },
  components: {
    Navbar,
    Quesone,
    Questwo,
    Questhree,
    Quesfour
  },
  methods: {
    prev () {
      this.$router.push('/expertise')
    },
    callonupdatestep (stepnumber) {
      if (stepnumber === 1) {
        this.activeTab = 'Questwo'
      } else if (stepnumber === 2) {
        this.activeTab = 'Questhree'
      } else if (stepnumber === 3) {
        this.activeTab = 'Quesfour'
      } else {

      }
    },
    questtwo () {
      localStorage.getItem('QuestionOne')
    },
    questhree () {
      localStorage.getItem('QuestionTwo')
    },
    quesfour () {
      localStorage.getItem('QuestionThree')
    },
    submit () {
      if (localStorage.getItem('email') && localStorage.getItem('aboutYou')) { swal('', 'Thank You for filling these details', 'success') } else {
        swal('', 'Fill all the details', 'error')
      }
    }
  }
}
</script>
<style scoped>
.center {
  margin: auto;
  margin-top: 40px;
  margin-left:60px;
  width: 50%;
   /* border: 2px solid black; */
  padding: 10px;
  height: 450px;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  overflow: scroll;
}
.prevbutton{
    height:40px;
    width:80px;
    border:none;
    background-color:rgba(238, 143, 20, 0.911);
    border-radius: 25px;
    cursor: pointer;
    margin-left:20px;
}
.submit{
    margin-left:500px;
    height:40px;
    width:80px;
    border:none;
    background-color:rgb(46, 179, 46);
    border-radius: 25px;
    cursor: pointer;
}
.divsidcen{
  display: flex;
}
.sidenav{
margin-left:150px;
  margin-top: 40px;

}
li{
  cursor: pointer;
}
</style>
