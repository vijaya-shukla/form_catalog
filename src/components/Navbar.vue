<template>
    <div class="navbar">
        <div>
        <button @click="gopersonal()">1</button>
        <p>Personal</p>
        </div>
        <hr class="horizontal"/>
        <div>
        <button @click="goprofile()">2</button>
        <p>Profile</p>
        </div>
        <hr class="horizontal"/>
        <div>
        <button @click="goexpertise()">3</button>
        <p>Expertise</p>
        </div>
        <hr class="horizontal"/>
        <div>
        <button @click="gointerview()">4</button>
        <p>Interview</p>
        </div>
    </div>
</template>
<script>
import swal from 'sweetalert'
export default{
  methods: {
    gopersonal () {
      this.$router.push('/personal')
    },
    goprofile () {
      if (localStorage.getItem('email') === true) {
        this.$router.push('/profile')
      } else {
        swal('', 'Fill the required details', 'warning')
      }
    },
    goexpertise () {
      if (localStorage.getItem('aboutYou') === true) {
        this.$router.push('/expertise')
      } else {
        swal('', 'Fill the required details', 'warning')
      }
    },
    gointerview () {
      if (localStorage.getItem('checkone') == null) {
        this.$router.push('/interview')
      } else {
        swal('', 'Fill the required details', 'warning')
      }
    }
  }
}
</script>

<style scoped>
.navbar{
    display:flex;
    justify-content: space-between;
    padding-left:100px;
    padding-right:100px;
}
.navbar>div>button{
    border-radius: 50%;
}
button{
    font-size:20px;
    padding: 22px 26px;
    border: 1px solid rgba(238, 143, 20, 0.911);
    background-color: white;
    color:rgba(238, 143, 20, 0.911);
    cursor: pointer;
}
/* button:hover{
    background-color:rgba(238, 143, 20, 0.911);
    color:white;
} */
button:focus{
    background-color:rgba(238, 143, 20, 0.911);
    color:white;
}
.horizontal{
  display: block;
  width:30%;
  border: 0;
  border-top: 4px dotted grey;}
</style>
