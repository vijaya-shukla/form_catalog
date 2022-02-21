<template>
    <div>
        <div id="checkboxes">
                <div class="listcheck">
                        <div v-for="item in items" :key="item.id">
                          <li><input type="checkbox" v-model="check" :value="item.text"> {{item.text}}</li>
                        </div>
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
      check: this.source,
      items: [
        {id: 0, text: 'C++'},
        {id: 1, text: 'SQL'},
        {id: 2, text: 'Database'},
        {id: 3, text: 'c++'},
        {id: 4, text: 'Php'},
        {id: 5, text: 'AngularJs'},
        {id: 6, text: 'ExpressJs'},
        {id: 7, text: 'Ruby'},
        {id: 8, text: 'Git'},
        {id: 9, text: 'Sublime'},
        {id: 10, text: 'C'},
        {id: 11, text: 'MySQL'},
        {id: 12, text: 'Assembly'},
        {id: 13, text: 'Visual Basic'},
        {id: 14, text: 'Heroku'},
        {id: 15, text: 'JavaScript'}

      ]
      // checkedbox: []
    }
  },
  methods: {
    addContact () {
      this.$emit('save', {check: this.check, number: 1})
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
