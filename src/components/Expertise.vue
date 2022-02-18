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
         <Checkone v-if="activeTab === 'Checkone'" :source="checkedbox" @save="save"/>
         <Checktwo v-if="activeTab === 'Checktwo'"/>
         <Checkthree v-if="activeTab === 'Checkthree'"/>
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
      checkedbox: []
    }
  },
  components: {
    Navbar,
    Checkone,
    Checktwo,
    Checkthree
  },
  methods: {
    prev () {
      this.$router.push('/profile')
    },
    next () {
      if (localStorage.getItem('checkone') === null || localStorage.getItem('checkone') === null) {
        swal('', 'Check some items', 'error')
      } else {
        // localStorage.setItem('quentinTarantino', JSON.stringify())
        this.$router.push('/interview')
      }
    },
    save (obj) {
      if (obj.number === 1) {
        const array = []
        this.checkedbox.push(...obj.check)
        array.push(...this.checkedbox)
        localStorage.setItem('checkone', JSON.stringify(array))
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
