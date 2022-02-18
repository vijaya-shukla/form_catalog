<template>
    <div>
        <div id="checkboxes">
                <div class="listcheck">
                       <div><li><input type="checkbox" id="c++" value="c++" v-model="check"> C++</li></div>
                        <div><b>Programming</b></div>
                        <div><input type="checkbox" id="sql" value="sql" v-model="check" > SQL</div>
                        <div><input type="checkbox" id="database" value="database" v-model="check"> Database</div>
                        <div><input type="checkbox" id="cp" value="cp" v-model="check"> C++</div>
                        <div><b>Programming</b></div>
                        <div><input type="checkbox" id="php" value="php" v-model="check"> PHP</div>
                        <div><input type="checkbox" id="angularjs" value="angularjs" v-model="check"> AngularJS</div>
                        <div><input type="checkbox" id="expressjs" value="expressjs" v-model="check"> ExpressJS</div>
                        <div><input type="checkbox"> Ruby</div>
                        <div><b>Programming</b></div>
                        <div><input type="checkbox" id="git" value="git" v-model="check"> Git</div>
                        <div><input type="checkbox" id="sublime" value="sublime" v-model="check"> Sublime</div>
                        <div><input type="checkbox" id="c" value="c" v-model="check"> C</div>
                        <div><b>Programming</b></div>
                        <div><input type="checkbox" id="mysql" value="mysql" v-model="check"> MySQL</div>
                        <div><input type="checkbox" id="assembly" value="assembly" v-model="check"> Assembly</div>
                        <div><b>Language</b></div>
                        <div><input type="checkbox" id="visual" value="visual" v-model="check"> Visual Basic</div>
                        <div><input type="checkbox" id="heroku" value="heroku" v-model="check"> Heroku</div>
                        <div><input type="checkbox" id="javascript" value="javascript" v-model="check"> Javascript</div>
                        <div><b>Programming</b></div>

                </div>
            </div>
                <!-- <div>checked: {{checkedbox}}</div> -->
                <button @click="addContact()">Save</button>

    </div>
</template>
<script>
export default{
  props: ['source'],
  data () {
    return {
      check: this.source
      // checkedbox: []
    }
  },
  methods: {
    addContact () {
      this.$emit('save', {check: this.check, number: 1})
      // const array = []
      // array.push(...this.checkedbox)
      // localStorage.setItem('checkone', JSON.stringify(array))
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
    gap:60px;

}
.listcheck>* {
        flex: 0 0 5px;
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
