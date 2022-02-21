<template>
    <div>
        <div id="checkboxes">
                <div class="listcheck">
                    <div v-for="item in items" :key="item.id">
                          <li><input type="checkbox" v-model="checkboxtwo" :value="item.text"> {{item.text}}</li>
                        </div>
                </div>
            </div>
                <button @click="addContact()">Save</button>

    </div>
</template>
<script>
export default{
  props: ['source'],
  data () {
    return {
      checkboxtwo: this.source,
      items: [
        {id: 0, text: 'Python'},
        {id: 1, text: 'Arrays'},
        {id: 2, text: 'Java'},
        {id: 3, text: 'c++'},
        {id: 4, text: 'Php'},
        {id: 5, text: 'HTML'},
        {id: 6, text: 'CSS'},
        {id: 7, text: 'Machine language'},
        {id: 8, text: 'Git'},
        {id: 9, text: 'High level language'},
        {id: 10, text: 'C'},
        {id: 11, text: 'MySQL'},
        {id: 12, text: 'C#'},
        {id: 13, text: 'Visual Basic'},
        {id: 14, text: 'procedural'},
        {id: 15, text: 'functional'}

      ]
    }
  },
  methods: {
    addContact () {
      this.$emit('save', {checkboxtwo: this.checkboxtwo, number: 2})
    //   const array = []
    //   array.push(...this.checkboxtwo)
    //   localStorage.setItem('checktwo', JSON.stringify(array))
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
