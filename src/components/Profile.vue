<template>
    <div>
        <div><Navbar/></div>
        <div class="center">
            <form action="#" id='testform' name='testform' >

         <div class="text textstyle">About You:</div>
         <textarea id="askay" cols="25" rows="5" placeholder="write a short bio" v-model="aboutYou"></textarea>
         <br><br>

         <div class="text textstyle">Teaching Experience:</div>
         <textarea id="askte" cols="25" rows="5" placeholder="tell us about your teaching experience" v-model="teachingExperience"></textarea>
         <br><br>

         <div class="text textstyle">Work History:</div>
         <div v-for="(input, index) in addwork" :key="`${index}`">
             <div>
                 <input id="askco" type="text" required placeholder="Company" v-model="addwork[index].work">
             <br><br>
             </div>
          <div style='margin-left:150px;float:left;'> <span class="text"> Active From</span><input type="date" id="ask" name="Active From" v-model="addwork[index].activeFrom"><span class="text"> Active To</span><input type="date" id="ask" name="Active to" v-model="addwork[index].activeTo"></div>
          <br><br>
          <div style='margin-left:120px' @click="addField(addwork)"> + Add another</div>
        </div>
          <br><br>
          <div class="text textstyle">Education:</div>
          <div  v-for="(input, index) in addeducation" :key="`${index}`">
              <input id="asked" type="text" required placeholder="Education" v-model="addeducation[index].education">
          <br><br>
          <div style='margin-left:150px;float:left;'><span class="text">Enrolled</span><input type="date" id="ask" name="Active From" v-model="addeducation[index].enrolled"><span class="text"> Graduated</span><input type="date" id="ask" name="Active to" v-model="addeducation[index].graduated"></div>
          <br><br>
          <div style='margin-left:120px' @click="addFields(addeducation)"> + Add another</div>
          </div>
      </form>
        </div>
    <button class="prevbutton" @click="prev()">Previous</button>
    <button class="nextbutton" @click="next()">Next</button>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import swal from 'sweetalert'
export default {
  data () {
    return {
      aboutYou: null,
      teachingExperience: null,
      activeFrom: null,
      activeTo: null,
      education: null,
      enrolled: null,
      graduated: null,
      addwork: [{ work: '', activeFrom: '', activeTo: '' }],
      addeducation: [{ ed: '' }],
      addanotherjob: false,
      addanotherschool: false,
      i: 0,
      j: 0,
      h: []
    }
  },
  created () {
    this.aboutYou = localStorage.getItem('aboutYou')
    this.teachingExperience = localStorage.getItem('teachingExperience')
    let n = this.$route.params.j
    for (let t = 0; t <= n; t++) {
      console.log('education' + t, localStorage.getItem('education' + t))
      this.addeducation[t].education = localStorage.getItem('education' + t)
      this.addeducation[t].enrolled = localStorage.getItem('enrolled' + t)
      this.addeducation[t].graduated = localStorage.getItem('graduated' + t)
      console.log('hi' + this.addeducation[1].graduated)
    }
  },
  mounted () {
    let m = this.$route.params.i
    console.log('m' + m)
    for (let l = 0; l <= m; l++) {
      console.log('work' + l, localStorage.getItem('work' + l))
      this.addwork[l].work = localStorage.getItem('work' + l)
      this.addwork[l].activeFrom = localStorage.getItem('active From' + l)
      this.addwork[l].activeTo = localStorage.getItem('active To' + l)
      console.log('hiii' + this.addwork[1].activeTo)
    }
  },
  components: {
    Navbar
  },
  methods: {
    // addField (value, fieldType) {
    //   fieldType.push({ value: '' })
    // },
    prev () {
      this.$router.push('/personal')
    },
    next () {
      if (
        this.aboutYou === null ||
        this.teachingExperience === null ||
        this.addwork.work === '' ||
        this.addwork.activeFrom === null ||
        this.addwork.activeTo === null ||
        this.addeducation.education === '' ||
        this.addeducation.enrolled === null ||
        this.addeducation.graduated === null
      ) {
        swal({
          text: 'Please fill all the details',
          icon: 'warning'
        })
        return
      }
      if (this.addwork.activeTo < this.addwork.activeFrom) {
        console.log('Hi')
        swal({
          text: 'Active To date should not be less than Active from date'
        })
        return
      }
      if (this.addeducation.graduated < this.addeducation.enrolled) {
        swal({
          text: 'The graduated date must not be earlier than the enrolled date.'
        })
        return
      }
      localStorage.setItem('aboutYou', this.aboutYou)
      localStorage.setItem('teachingExperience', this.teachingExperience)
      localStorage.setItem('workHistory', this.addwork.workHistory)
      localStorage.setItem('activeFrom', this.addwork.activeFrom)
      localStorage.setItem('activeTo', this.addwork.activeTo)
      localStorage.setItem('education', this.addeducation.education)
      localStorage.setItem('enrolled', this.addeducation.enrolled)
      localStorage.setItem('graduated', this.addeducation.graduated)
      this.$router.push('/expertise')
    },
    addField (fieldType) {
      const index = fieldType.length - 1
      if (!fieldType[index].work || !fieldType[index].activeFrom || !fieldType[index].activeTo) {
        this.addanotherjob = false
      } else {
        this.addanotherjob = true
        const obj = {}
        obj['work'] = ''
        obj['activeFrom'] = ''
        obj['activeTo'] = ''
        fieldType.push(obj)
        console.log(fieldType)
        this.i = this.i + 1
      }
    },
    addFields (fieldType) {
      const index = fieldType.length - 1
      if (!fieldType[index].education || !fieldType[index].enrolled || !fieldType[index].graduated) {
        this.addanotherschool = false
      } else {
        this.addanotherschool = true
        const obj = {}
        obj['education'] = ''
        obj['enrolled'] = ''
        obj['graduated'] = ''
        fieldType.push(obj)
        console.log(fieldType)
        this.j = this.j + 1
      }
    }
  }
}
</script>
<style scoped>
.center {
  width: 50%;
  margin-top:40px;
  margin-left:346px;
  overflow:scroll;
  height: 500px;
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
.work{
    display: flex;
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
.prevbutton{
    height:40px;
    width:80px;
    border:none;
    background-color:rgba(238, 143, 20, 0.911);
    border-radius: 25px;
    cursor: pointer;
}
.text{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    font-weight: bold;
}
#askay{
    margin-left: 80px;
}
#asked{
    margin-left:20px;
}
.textstyle{
margin-left:120px;
float:left;
}
</style>
