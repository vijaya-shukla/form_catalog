<template>
    <div>
        <div id="checkboxes">
                <div class="listcheck">
                    <div v-for="item in items" :key="item.id">
                          <li><input type="checkbox" v-model="item.checked" @click="addContact(item.text, item.id)"> {{item.text}}</li>
                        </div>
                </div>
            </div>
                <!-- <button @click="addContact()">Save</button> -->

    </div>
</template>
<script>
export default{
  props: ['source'],
  data () {
    return {
      checkboxtwo: [],
      flag: true,
      items: [
        {id: 0, text: 'Python', checked: false},
        {id: 1, text: 'Arrays', checked: false},
        {id: 2, text: 'Java', checked: false},
        {id: 3, text: 'c++', checked: false},
        {id: 4, text: 'Php', checked: false},
        {id: 5, text: 'HTML', checked: false},
        {id: 6, text: 'CSS', checked: false},
        {id: 7, text: 'Machine language', checked: false},
        {id: 8, text: 'Git', checked: false},
        {id: 9, text: 'High level language', checked: false},
        {id: 10, text: 'C', checked: false},
        {id: 11, text: 'MySQL', checked: false},
        {id: 12, text: 'C#', checked: false},
        {id: 13, text: 'Visual Basic', checked: false},
        {id: 14, text: 'procedural', checked: false},
        {id: 15, text: 'functional', checked: false}

      ]
    }
  },
  created () {
    if (localStorage.getItem('checkTwo')) {
      this.checkboxtwo = JSON.parse(localStorage.getItem('checkTwo'))
      for (let i = 0; i < this.checkboxtwo.length; i++) {
        for (let j = 0; j < this.items.length; j++) {
          if (this.items[j].text === this.checkboxtwo[i]) {
            this.items[j].checked = true
          }
        }
      }
    }
    console.log('getting', localStorage.getItem('checkOne'))
  },
  methods: {
    addContact (itemName, itemId) {
    //   this.$emit('savetwo', {checkboxtwo: this.checkboxtwo, number: 1})
    //   const array = []
    //   array.push(...this.checkboxtwo)
    //   localStorage.setItem('checktwo', JSON.stringify(array))
      for (let i = 0; i <= this.checkboxtwo.length - 1; i++) {
        if (this.checkboxtwo[i] === itemName) {
          var newArray = this.checkboxtwo.filter((item) => item !== itemName)
          this.checkboxtwo = newArray
          this.flag = false
        }
      }
      if (this.flag === true) {
        this.checkboxtwo.push(itemName)
      }
      this.flag = true
      console.log(this.checkboxtwo, 'finalfortwo')
      this.$emit('onGetCategorytwo', this.checkboxtwo)
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
  padding-left: 100px;
    height: 450px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap:30px;
    align-items: flex-start;
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
