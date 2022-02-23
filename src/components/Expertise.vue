<template>
    <div>
        <div><Navbar/></div>
        <div class="divsidcen">
          <div class="sidenav">
            <div @click="activeTab = 'Checkone'" class="abc">Computer Software</div>
            <div @click="activeTab = 'Checktwo'" class="abc">Computer Science</div>
            <div @click="activeTab = 'Checkthree'" class="abc">Engineering</div>
          </div>
        <div class="center">
         <Checkone v-if="activeTab === 'Checkone'" @onGetCategory="onGetCategory"/>
         <Checktwo v-if="activeTab === 'Checktwo'" @onGetCategorytwo="onGetCategorytwo"/>
         <Checkthree v-if="activeTab === 'Checkthree'" @onGetCategoryThree="onGetCategoryThree"/>
        </div>
    </div>

        <button class="prevbutton" @click="prev()">Previous</button>
    <button class="nextbutton" @click="next()">Next</button>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Checkone from '@/components/Checkone.vue'
import Checktwo from '@/components/Checktwo.vue'
import Checkthree from '@/components/Checkthree.vue'
import swal from 'sweetalert'
export default{
  data () {
    return {
      activeTab: 'Checkone',
      hello: [],
      arrayfortwo: [],
      arrayforthree: []
      // newCheck: []
    }
  },
  components: {
    Navbar,
    Checkone,
    Checktwo,
    Checkthree
  },
  created () {
    // this.checkedbox = JSON.parse(localStorage.getItem('checkOne'))
    console.log('hiiiiiii', localStorage.getItem('checkOne'))
    this.hello = JSON.parse(localStorage.getItem('checkOne'))
    this.arrayfortwo = JSON.parse(localStorage.getItem('checkTwo'))
    // this.arrayforthree = JSON.parse(localStorage.getItem('checkThree'))
    // console.log('helllllooooooo', this.newCheck.split(','), 'hhahha')
  },
  methods: {
    onGetCategory (categ) {
      this.hello = categ
      console.log('hello category', this.hello)
      localStorage.setItem('checkOne', JSON.stringify(this.hello))
    },
    prev () {
      this.$router.push('/profile')
    },
    next () {
      if (localStorage.getItem('checkOne') == null) {
        swal('', 'Check some items', 'error')
      } else {
        // localStorage.setItem('quentinTarantino', JSON.stringify())
        this.$router.push('/interview')
      }
    },
    onGetCategorytwo (categTwo) {
      this.arrayfortwo = categTwo
      console.log('hello category for two', this.arrayfortwo)
      localStorage.setItem('checkTwo', JSON.stringify(this.arrayfortwo))
    },
    onGetCategoryThree (categThree) {
      this.arrayforthree = categThree
      console.log('hello category for three', this.arrayforthree)
      localStorage.setItem('checkThree', JSON.stringify(this.arrayforthree))
    }
    // save (obj) {
    //   let array = []
    //   // debugger
    //   if (obj.number === 1) {
    //     debugger
    //     this.checkedbox = obj.check
    //     array = this.checkedbox
    //     localStorage.setItem('checkOne', JSON.stringify(array))
    //   }
    // },
    // savetwo (obj) {
    //   let array = []
    //   if (obj.number === 1) {
    //     // debugger
    //     this.checkedbox = obj.Checktwo
    //     array = this.checkedbox
    //     localStorage.setItem('checkone', JSON.stringify(array))
    //   }
    // }
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
    height:480px;
    display: flex;
    justify-content: space-between;
    margin-left: 90px;
}
#checkboxes label {
  float: left;
}
#checkboxes div {
  margin: 0;
  list-style: none;
  float: left;
}
.listcheck{
    height: 450px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.listcheck>* {
        flex: 0 1 50px;
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
  /* margin-left:325px; */
    height:40px;
    width:80px;
    border:none;
    background-color:rgba(238, 143, 20, 0.911);
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
.abc{
  height:40px;
  width:150px;
  border-radius: 15px;
  border:1px solid black;
  background-color: rgba(238, 143, 20, 0.911);
  margin-bottom:5px;
  cursor: pointer;
  padding-top: 10px;
}

</style>
