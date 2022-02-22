<template>
    <div>
        <div><Navbar/></div>
        <div class="divsidcen">
          <div class="sidenav">
            <ol>
              <li><button @click="activeTab = 'Quesone'" class="libutton" ><b>Question #1</b></button></li>
              <li><button @click="activeTab = 'Questwo'" class="libutton" :disabled="questwo"><b>Question #2</b></button></li>
              <li> <button @click="activeTab = 'Questhree'" class="libutton" :disabled="questhree"><b>Question #3</b></button></li>
              <li><button @click="activeTab = 'Quesfour'" class="libutton" :disabled="quesfour"><b>Question #4</b></button></li>
            </ol>
          </div>
        <div class="center">
          <Quesone v-if="activeTab === 'Quesone'" @updatestep="callonupdatestep" :passprop="questwo" @enablequesone="enablequesone"/>
         <Questwo v-if="activeTab === 'Questwo'" @updatestep="callonupdatestep" :passprop="questhree" @enablequestwo="enablequestwo"/>
         <Questhree v-if="activeTab === 'Questhree'" @updatestep="callonupdatestep" :passprop="quesfour" @enablequesthree="enablequesthree"/>
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
      activeTab: 'Quesone',
      questwo: true,
      questhree: true,
      quesfour: true
    }
  },
  components: {
    Navbar,
    Quesone,
    Questwo,
    Questhree,
    Quesfour
  },
  computed: {
    // questwo () {
    //   if (localStorage.getItem('QuestionOne') !== '') {
    //     return false
    //   } else {
    //     return true
    //   }
    // },
    dabc () {
      if (localStorage.getItem('QuestionOne')) { return false } else {
        return true
      }
    },
    enablethree () {
      if (!this.questwo) { return false } else {
        return true
      }
    },
    abcde () {
      if (localStorage.getItem('QuestionThree')) { return false } else {
        return true
      }
    }
  },
  created () {
    localStorage.getItem('QuestionOne')
    localStorage.getItem('QuestionTwo')
    localStorage.getItem('QuestionThree')
    localStorage.getItem('QuestionFour')
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
    // questhree () {
    //   localStorage.getItem('QuestionTwo')
    // },
    // quesfour () {
    //   localStorage.getItem('QuestionThree')
    // },
    submit () {
      if (localStorage.getItem('email') && localStorage.getItem('aboutYou')) { swal('', 'Thank You for filling these details', 'success') } else {
        swal('', 'Fill all the details', 'error')
      }
    },
    enablequesone (obj) {
      console.log('obj', obj)
      // this.questwo = false
      // obj.storeprop = 'false'
      this.questwo = obj.storeprop
    },
    enablequestwo (obj) {
      this.questhree = obj.storepropthree
    },
    enablequesthree (obj) {
      this.quesfour = obj.storepropfour
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
  margin-bottom: 10px;
}
.someclass {
pointer-events: none;
}
.libutton{
  border:none;
  background-color: none;
  font-size:15px;
  cursor: pointer;
}
button.libutton{
  background-color: none;
}
.disabled {

pointer-events: none

}
</style>
