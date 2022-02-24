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
         <div v-for="(workobj, indx) in addwork" :key="indx+'work'">
             <div>
                 <input id="askco" type="text" required placeholder="Company" v-model="workobj.work">
             <br><br>
             </div>
          <div style='margin-left:150px;float:left;'> <span class="text"> Active From</span><input type="date" id="ask" name="Active From" v-model="workobj.activeFrom"><span class="text"> Active To</span><input type="date" id="ask" name="Active to" v-model="workobj.activeTo"></div>
          <br><br>
          </div>
          <div style='margin-left:120px' @click="addField(addwork)"> + Add another</div>
          <br><br>
          <div class="text textstyle">Education:</div>
          <div  v-for="(input, index) in addeducation" :key="`${index}-edu`">
              <input id="asked" type="text" required placeholder="Education" v-model="addeducation[index].education">
          <br><br>
          <div style='margin-left:150px;float:left;'><span class="text">Enrolled</span><input type="date" id="ask" name="Enrolled" v-model="addeducation[index].enrolled"><span class="text"> Graduated</span><input type="date" id="ask" name="Graduated" v-model="addeducation[index].graduated"></div>
          <br><br>
          </div>
          <div style='margin-left:120px' @click="addFields(addeducation)"> + Add another</div>
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
      addworkone: [],
      // eslint-disable-next-line standard/object-curly-even-spacing
      addeducation: [{education: '', graduated: '', enrolled: '' }],
      addeducationone: [],
      addanotherjob: false,
      addanotherschool: false,
      work: null,
      h: []
    }
  },
  created () {
    this.aboutYou = localStorage.getItem('aboutYou')
    this.teachingExperience = localStorage.getItem('teachingExperience')
    if (localStorage.getItem('addWork') !== null) {
      this.addwork = JSON.parse(localStorage.getItem('addWork'))
    }
    if (localStorage.getItem('addEducation') !== null) {
      this.addeducation = JSON.parse(localStorage.getItem('addEducation'))
    }
  },
  components: {
    Navbar
  },
  methods: {
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
      for (let i = 0; i < this.addwork.length; i++) {
        if (this.addwork[i].activeTo < this.addwork[i].activeFrom) {
          console.log('Hi')
          swal({
            text: 'Active To date should not be less than Active from date'
          })
          return
        }
      }
      for (let i = 0; i < this.addeducation.length; i++) {
        if (this.addeducation[i].graduated < this.addeducation[i].enrolled) {
          console.log('Hi')
          swal({
            text: 'The graduated date must not be earlier than the enrolled date.'
          })
          return
        }
      }
      localStorage.setItem('aboutYou', this.aboutYou)
      localStorage.setItem('teachingExperience', this.teachingExperience)
      localStorage.setItem('addWork', JSON.stringify(this.addwork))
      localStorage.setItem('addEducation', JSON.stringify(this.addeducation))
      this.$router.push('/expertise')
    },
    addField () {
      const index = this.addwork.length - 1
      if (!this.addwork[index].work || !this.addwork[index].activeFrom || !this.addwork[index].activeTo) {
        this.addanotherjob = false
      } else {
        this.addanotherjob = true
        const obj = {}
        obj['work'] = ''
        obj['activeFrom'] = ''
        obj['activeTo'] = ''
        this.addwork.push(obj)
        console.log(this.addwork)
      }
    },
    addFields () {
      const index = this.addeducation.length - 1
      if (!this.addeducation[index].education || !this.addeducation[index].enrolled || !this.addeducation[index].graduated) {
        this.addanotherschool = false
      } else {
        this.addanotherschool = true
        const obj = {}
        obj['education'] = ''
        obj['enrolled'] = ''
        obj['graduated'] = ''
        this.addeducation.push(obj)
        console.log(this.addeducation)
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
  height: 520px;
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
