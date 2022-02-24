<template>
    <div>
        <div><Navbar/></div>
        <div class="center">
            <form action="#" id='testform' name='testform' >

         <div class="text textstyle">Name:<sup style="color:red;">*</sup></div>
         <input id="nameid" type="text" required placeholder="Name" v-model="name">
         <br><br>

         <div class="text textstyle">Email:<sup style="color:red;">*</sup></div>
         <input id="emailid" type="text" placeholder="Email" required v-model="email" @input="isEmailValid">
         <div class="subemail">
               <sub v-show="wrongEmail" style="color:red">Incorrect email address <br> Ex:abc@gmail.com</sub>
        </div>
         <br><br>
         <div class="text textstyle">What are you?</div>
         <input class="nameid" value="University Student" type="radio" name="radio" v-model="unipro">University Student <input type="radio" value="Professional" name="radio" v-model="unipro">Professional
          <br><br>
          <div class="text textstyle">University<sup style="color:red;">*</sup></div>
         <input id="uniid" type="text" required placeholder="University" v-model="university">
          <br><br>
          <div class="text textstyle">Major<sup style="color:red;">*</sup></div>
        <input id="majorid" type="text" required placeholder="Major" v-model="major">
          <br><br>
          <div class="text textstyle">Graduation <sup style="color:red;">*</sup></div>
        <input type="date" id="graid" placeholder="Graduation Date" v-model="graddate">
          <br><br>
          <div class="text textstyle">Do you have tax id?</div>
        <input type="radio" value="I have a tax ID" name="I have a tax ID" v-model="taxvalue"/><span>I have a tax id</span> <span><input type="radio" value="I don't have a tax ID" name="I don't have a tax ID" v-model="taxvalue"/>I don't have a tax id</span>
          <br><br>
          <div class="text textstyle">Mobile <sup style="color:red;">*</sup></div>
          <input id="nameid" type="text" required="" placeholder="Mobile" v-model="value" @input="acceptNumber">
          <br><br>
            </form>
        </div>
        <button class="nextbutton" @click="next()">Next</button>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import swal from 'sweetalert'
const emailRe =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export default {
  data () {
    return {
      name: null,
      email: null,
      university: null,
      major: null,
      graddate: null,
      value: null,
      taxvalue: null,
      unipro: null,
      wrongEmail: null
    }
  },
  created () {
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')
    this.unipro = localStorage.getItem('univerradio')
    this.value = localStorage.getItem('mobile')
    this.university = localStorage.getItem('university')
    this.major = localStorage.getItem('major')
    this.taxvalue = localStorage.getItem('taxid')
    this.graddate = localStorage.getItem('graduationDate')
  },
  components: {
    Navbar
  },
  methods: {
    isEmailValid () {
      if (emailRe.test(this.email)) {
        this.wrongEmail = false
      } else {
        this.wrongEmail = true
      }
    },
    acceptNumber () {
      var x = this.value
        .replace(/\D/g, '')
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
      this.value = !x[2]
        ? x[1]
        : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
    },
    next () {
      console.log(this.tax)
      if (
        this.name === null ||
        this.email === null ||
        this.value === null ||
        this.university === null ||
        this.major === null ||
        this.graddate === null
      ) {
        swal({
          text: 'Please fill all the required details',
          icon: 'warning'
        })
      } else {
        localStorage.setItem('name', this.name)
        localStorage.setItem('email', this.email)
        localStorage.setItem('mobile', this.value)
        localStorage.setItem('university', this.university)
        localStorage.setItem('major', this.major)
        localStorage.setItem('graduationDate', this.graddate)
        localStorage.setItem('taxid', this.taxvalue)
        localStorage.setItem('univerradio', this.unipro)
        this.$router.push('/profile')
      }
    }
  }
}
</script>

<style scoped>
.center {
  width: 50%;
  margin-top: 40px;
  margin-left: 346px;
  overflow: scroll;
  height: 450px;
  padding-top: 10px;
  /* background-color: rgba(245, 216, 178, 0.911); */
}
.center > div {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  font-weight: bold;
  display: inline;
}
#ask {
  margin-left: 30px;
}
.addano {
  display: flex;
  padding-left: 300px;
  padding-top: 20px;
}
.work {
  display: flex;
}
.nextbutton {
  margin-left: 500px;
  height: 40px;
  width: 80px;
  border: none;
  background-color: rgba(238, 143, 20, 0.911);
  border-radius: 25px;
  cursor: pointer;
}
.prevbutton {
  height: 40px;
  width: 80px;
  border: none;
  background-color: rgba(238, 143, 20, 0.911);
  border-radius: 25px;
  cursor: pointer;
}
.text {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  font-weight: bold;
}
#nameid {
  margin-left: 80px;
}
#asked {
  margin-left: 20px;
}
#emailid{
    margin-left: 80px;
}
.textstyle {
  margin-left: 120px;
  float: left;
}
#uniid{
    margin-left:60px;
}
#majorid{
    margin-left: 95px;
}
#graid{
    margin-left: 50px;
}
.subemail{
    margin-left: 250px;
}
</style>
