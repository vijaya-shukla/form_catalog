<template>
    <div>
        <div><Navbar/></div>
        <div class="center"></div>
        <button class="prevbutton" @click="prev()">Previous</button>
        <button class="submit" @click="submit()">Submit</button>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default{
  components: {
    Navbar
  },
  methods: {
    prev () {
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
   border: 2px solid black;
  padding: 10px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
</style>
