<template>
    <div>
        <div><Navbar/></div>
        <div class="center">
            <div class="text"><label>Name <sup style="color:red;">*</sup></label><input id="one" type="text" required placeholder="Name" v-model="name"></div>
            <div class="text">Email <sup style="color:red;">*</sup><input id="two" type="text" placeholder="Email" required v-model="email" @input="isEmailValid">
           <div>
               <sub v-show="wrongEmail" style="color:red">Incorrect email address <br> Ex:abc@gmail.com</sub>
               </div>
            </div>
            <div class="text">What are you?<input class="univstudent" value="University Student" type="radio" name="radio" v-model="unipro"/>University Student <input type="radio" value="Professional" name="radio" v-model="unipro"/>Professional</div>
            <div class="text">University <sup style="color:red;">*</sup><input id="two" type="text" required placeholder="University" v-model="university"></div>
            <div class="text">Major <sup style="color:red;">*</sup><input id="two" type="text" required placeholder="Major" v-model="major"></div>
                <div id= "text1" class="selectdiv">
                Graduation Date <sup style="color:red;">*</sup><input type="date" id="two" placeholder="Graduation Date" v-model="graddate">
                </div>
            <div id="text1">Do You have a tax id? <span> <input type="radio" value="I have a tax ID" name="I have a tax ID" v-model="taxvalue"/>I have a tax id</span> <span><input type="radio" value="I don't have a tax ID" name="I don't have a tax ID" v-model="taxvalue"/>I don't have a tax id</span></div>
            <div id="text1">Mobile <sup style="color:red;">*</sup><input id="two" type="text" required="" placeholder="Mobile" v-model="value" @input="acceptNumber"></div>

        </div>
        <button class="nextbutton" @click="next()">Next</button>
        <!-- <div class="form-group center">
            <label for="Name">Name</label> <input id="one" type="text" required placeholder="Name">
        </div> -->
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import swal from 'sweetalert'
// eslint-disable-next-line no-useless-escape
const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export default{
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
    // this.radiovalue = localStorage.getItem('radio')
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
      var x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
      this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
    },
    // validateEmail () {
    //   // eslint-disable-next-line no-useless-escape
    //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
    //     this.msg['email'] = 'Please enter a valid email address'
    //   } else {
    //     this.msg['email'] = ''
    //   }
    // },
    next () {
      console.log(this.tax)
      if (this.name === null ||
        this.email === null ||
        this.value === null ||
        this.university === null ||
        this.major === null ||
        this.graddate === null) {
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
.center{
    margin: auto;
    margin-top:40px;
    width: 50%;
    /* border: 2px solid black; */
    padding: 10px;
    height:450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.text{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    font-weight: bold;
}
#text1{
  font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    font-weight: bold;
}
#one{
    margin-left: 30px;
}
#two{
    margin-left: 30px;
}
.univstudent{
    margin-left: 15px;
}
.nextbutton{
    margin-left:500px;
    height:40px;
    width:80px;
    border:none;
    background-color:rgba(238, 143, 20, 0.911);
    border-radius: 25px;
    cursor: pointer;
}
</style>
