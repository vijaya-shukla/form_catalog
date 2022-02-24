<template>
  <div>
    <form action="#" id='testform' name='testform'>
        <div class="text textstyle">Name: <span class="kuch">{{name}}</span></div>
         <br><br>
         <div class="text textstyle">Email: <span>{{email}}</span></div>
         <br><br>
         <div class="text textstyle">Mobile: <span>{{mobile}}</span></div>
         <br><br>
         <div class="text textstyle">University: <span>{{university}}</span></div>
         <br><br>
         <div class="text textstyle">Graduation Date: : <span>{{graduationDate}}</span></div>
         <br><br>
         <div class="text textstyle">
             Interests:
             <span v-for="item in checkBoxOne" :key="item.id">
                 {{item}},
            </span>
            <span v-for="item in checkBoxTwo" :key="item.id">
                 {{item}},
            </span>
            <span v-for="item in checkBoxThree" :key="item.id">
                 {{item}},
            </span>
         </div>
         <br><br>
         <div class="text textstyle">About You: <span>{{aboutYou}}</span></div>
         <br><br>
      </form>
      <div class="exitbutton" @click="abc()">Exit
          </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      checkBoxOne: [],
      checkBoxTwo: [],
      checkBoxThree: []
    }
  },
  created () {
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')
    this.mobile = localStorage.getItem('mobile')
    this.university = localStorage.getItem('university')
    this.major = localStorage.getItem('major')
    this.graduationDate = localStorage.getItem('graduationDate')
    this.aboutYou = localStorage.getItem('aboutYou')
    this.teachingExperience = localStorage.getItem('teachingExperience')
    this.checkBoxOne = JSON.parse(localStorage.getItem('checkOne'))
    this.checkBoxTwo = JSON.parse(localStorage.getItem('checkTwo'))
    this.checkBoxThree = JSON.parse(localStorage.getItem('checkThree'))
  },
  methods: {
    abc () {
      localStorage.clear()
      this.$router.push('/personal')
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
form{
    margin-top:160px;
    background-color: rgba(238, 143, 20, 0.911);
    width:50%;
    height: 470px;
    padding-top:20px;
  margin-left:350px;
  border-radius: 15px;

}
form>div{
    text-align: left;
    padding-left: 150px;
    font-size:17px;
}
.text{
    font-weight: bold;
}
.text>span{
    font-weight: normal;
}
.exitbutton{
    height:30px;
    width:80px;
    margin-top:20px;
    border:none;
    border-radius: 15px;
    background-color:grey;
    cursor: pointer;
    color:white;
    padding-top: 10px;
    float: right;
    margin-right:100px;
}
</style>
