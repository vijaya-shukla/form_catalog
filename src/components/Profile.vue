<template>
    <div>
        <div><Navbar/></div>
        <div class="center">
           <div>
                <label>About You</label><textarea id="ask" cols="25" rows="5" placeholder="write a short bio" v-model="aboutyou"></textarea>
            </div>
            <div>Teaching Experience<textarea id="ask" cols="25" rows="5" placeholder="tell us about your teaching experience" v-model="teachingarea"></textarea></div>
            <div>
            <div class="work">
                <div>
                    <label>Work History</label>
                </div>
                <div>
                <div
                    v-for="(input, index) in addwork"
                    :key="`phoneInput-${index}`"
                    class="input wrapper flex items-center"
                >
                <input id="ask" type="text" required placeholder="Company" v-model="input.work">
                <div>
                      Active From<input type="date" id="ask" name="Active From">Active To<input type="date" id="ask" name="Active to">
                </div>
                </div>
            </div>
                </div>
                <div class="addano">
                    Add Another
                    <div>
                        <svg
                         @click="addField(input, addwork)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="ml-2 cursor-pointer"
            cursor="pointer"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="green"
              d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
            />
          </svg>
                    </div>
                </div>
            <!-- </div> -->
            <div class="work">
                <div>
                <label>Education</label>
                </div>
                <div>
                <div
                    v-for="(input, index) in addedu"
                    :key="`phoneInput-${index}`"
                    class="input wrapper flex items-center"
                >
            <input id="ask" type="text" required placeholder="School">
                <div>
                      Enrolled<input type="date" id="ask" name="Active From">Graduated<input type="date" id="ask" name="Active to">
                </div>
                </div>
                </div>
            </div>

            <div class="addano">
                    Add Another
                    <div>
                        <svg
                        @click="addField(input, addedu)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="ml-2 cursor-pointer"
            cursor="pointer"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="green"
              d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
            />
          </svg>
                    </div>
                </div>

    </div>
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
      aboutyou: null,
      teachingarea: null,
      workhistory: null,
      addwork: [{ work: '', activeFrom: '', activeTo: '' }],
      addeducation: [{ ed: '' }],
      addanotherjob: false,
      addanotherschool: false
    }
  },
  components: {
    Navbar
  },
  methods: {
    addField (value, fieldType) {
      fieldType.push({ value: '' })
    },
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
    }
  }
}
</script>
<style scoped>
.center {
  margin: auto;
  margin-top: 40px;
  width: 50%;
  /* border: 2px solid black; */
  padding: 10px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
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
</style>
