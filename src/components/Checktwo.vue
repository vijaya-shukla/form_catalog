<template>
    <div>
        <div id="checkboxes">
                <div class="listcheck">
                       <div><li><input type="checkbox" value="c++" v-model="checkboxtwo"> C++</li></div>
                        <div><b>CHECKTWO</b></div>
                        <div><input type="checkbox" value="sql"> SQL</div>
                        <div><input type="checkbox" value="database"> Database</div>
                        <div><input type="checkbox" value="cpp"> C++</div>
                        <div><b>CHECKTWO</b></div>
                        <div><input type="checkbox" value="php"> PHP</div>
                        <div><input type="checkbox" value="AngularJS"> AngularJS</div>
                        <div><input type="checkbox" value="ExpressJS"> ExpressJS</div>
                        <div><input type="checkbox" value="Ruby"> Ruby</div>
                        <div><b>CHECKTWO</b></div>
                        <div><input type="checkbox" value="Git"> Git</div>
                        <div><input type="checkbox" value="Sublime"> Sublime</div>
                        <div><input type="checkbox" value="c"> C</div>
                        <div><b>CHECKTWO</b></div>
                        <div><input type="checkbox" value="MySQL"> MySQL</div>
                        <div><input type="checkbox" value="Assembly"> Assembly</div>
                        <div><b>CHECKTWO</b></div>
                        <div><input type="checkbox" value="Visual"> Visual Basic</div>
                        <div><input type="checkbox" value="Heroku"> Heroku</div>
                        <div><input type="checkbox" value="Javascript"> Javascript</div>
                        <div><b>CHECKTWO</b></div>

                </div>
            </div>
                <button @click="addContact()">Save</button>

    </div>
</template>
<script>
export default{
  data () {
    return {
      checkboxtwo: []
    }
  },
  methods: {
    addContact () {
      const array = []
      array.push(...this.checkboxtwo)
      localStorage.setItem('checktwo', JSON.stringify(array))
    }
  }
}
</script>
<style scoped>
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
    gap:30px;
    /* width: calc(100% + 12px);
    margin: -12px 0 0 -12px; */

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
button{
  margin-left:320px;
  background-color:rgba(238, 143, 20, 0.911);
    /* margin-left:590px; */

}
</style>
