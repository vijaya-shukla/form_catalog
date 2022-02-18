<template>
    <div>
        <div id="checkboxes">
                <div class="listcheck">
                       <div><li><input type="checkbox"> C++</li></div>
                        <div>CHECKTHREE</div>
                        <div><input type="checkbox"> SQL</div>
                        <div><input type="checkbox"> Database</div>
                        <div><input type="checkbox"> C++</div>
                        <div>CHECKTHREE</div>
                        <div><input type="checkbox"> PHP</div>
                        <div><input type="checkbox"> AngularJS</div>
                        <div><input type="checkbox"> ExpressJS</div>
                        <div><input type="checkbox"> Ruby</div>
                        <div>CHECKTHREE</div>
                        <div><input type="checkbox"> Git</div>
                        <div><input type="checkbox"> Sublime</div>
                        <div><input type="checkbox"> C</div>
                        <div>CHECKTHREE</div>
                        <div><input type="checkbox"> MySQL</div>
                        <div><input type="checkbox"> Assembly</div>
                        <div>CHECKTHREE</div>
                        <div><input type="checkbox"> Visual Basic</div>
                        <div><input type="checkbox"> Heroku</div>
                        <div><input type="checkbox"> Javascript</div>
                        <div>CHECKTHREE</div>

                </div>
            </div>
                <button @click="addContact()">Save</button>

    </div>
</template>
<script>
export default{
  data () {
    return {
      checkboxthree: []
    }
  },
  methods: {
    addContact () {
      const array = []
      array.push(...this.checkboxthree)
      localStorage.setItem('checkthree', JSON.stringify(array))
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
