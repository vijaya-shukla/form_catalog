<template>
    <div>
        <div><Navbar/></div>
        <div class="center">
            <div id="checkboxes">
                <div class="listcheck">
                       <div><li><input type="checkbox"> C++</li></div>
                        <div>Programming</div>
                        <div><input type="checkbox"> SQL</div>
                        <div><input type="checkbox"> Database</div>
                        <div><input type="checkbox"> C++</div>
                        <div>Programming</div>
                        <div><input type="checkbox"> PHP</div>
                        <div><input type="checkbox"> AngularJS</div>
                        <div><input type="checkbox"> ExpressJS</div>
                        <div><input type="checkbox"> Ruby</div>
                        <div>Programming</div>
                        <div><input type="checkbox"> Git</div>
                        <div><input type="checkbox"> Sublime</div>
                        <div><input type="checkbox"> C</div>
                        <div>Programming</div>
                        <div><input type="checkbox"> MySQL</div>
                        <div><input type="checkbox"> Assembly</div>
                        <div>Language</div>
                        <div><input type="checkbox"> Visual Basic</div>
                        <div><input type="checkbox"> Heroku</div>
                        <div><input type="checkbox"> Javascript</div>
                        <div>Programming</div>

                </div>
            </div>
        </div>
        <button class="prevbutton" @click="prev()">Previous</button>
    <button class="nextbutton" @click="next()">Next</button>
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
      this.$router.push('/profile')
    },
    next () {
      this.$router.push('/interview')
    }
  }
}
</script>
<style scoped>
.center{
    margin: auto;
    margin-top:40px;
    width: 50%;
    border: 2px solid black;
    padding: 10px;
    height:450px;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
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
    height:40px;
    width:80px;
    border:none;
    background-color:rgba(238, 143, 20, 0.911);
    border-radius: 25px;
    cursor: pointer;
}
</style>
