<template>
    <div>
        <div id="checkboxes">
                <div class="listcheck">
                        <div v-for="item in items" :key="item.id">
                            <div>
                                <li><input type="checkbox" v-model="item.checked" @click="addContact(item.text, item.id)">{{item.text}}</li>
                            </div>
                        </div>
                </div>
            </div>
    </div>
</template>
<script>
export default{
  data () {
    return {
      items: [
        {id: 0, text: 'C++', checked: false},
        {id: 1, text: 'SQL', checked: false},
        {id: 2, text: 'Database', checked: false},
        {id: 3, text: 'c++', checked: false},
        {id: 4, text: 'Php', checked: false},
        {id: 5, text: 'AngularJs', checked: false},
        {id: 6, text: 'ExpressJs', checked: false},
        {id: 7, text: 'Ruby', checked: false},
        {id: 8, text: 'Git', checked: false},
        {id: 9, text: 'Sublime', checked: false},
        {id: 10, text: 'C', checked: false},
        {id: 11, text: 'MySQL', checked: false},
        {id: 12, text: 'Assembly', checked: false},
        {id: 13, text: 'Visual Basic', checked: false},
        {id: 14, text: 'Heroku', checked: false},
        {id: 15, text: 'JavaScript', checked: false}

      ],
      checkedbox: [],
      flag: true
    }
  },
  created () {
    if (localStorage.getItem('checkOne')) {
      this.checkedbox = JSON.parse(localStorage.getItem('checkOne'))
      for (let i = 0; i < this.checkedbox.length; i++) {
        for (let j = 0; j < this.items.length; j++) {
          if (this.items[j].text === this.checkedbox[i]) {
            this.items[j].checked = true
          }
        }
      }
    }
    console.log('getting', localStorage.getItem('checkOne'))
  },
  methods: {
    addContact (itemName, itemId) {
      for (let i = 0; i <= this.checkedbox.length - 1; i++) {
        if (this.checkedbox[i] === itemName) {
          var newArray = this.checkedbox.filter((item) => item !== itemName)
          this.checkedbox = newArray
          this.flag = false
        }
      }
      if (this.flag === true) {
        this.checkedbox.push(itemName)
      }
      this.flag = true
      console.log(this.checkedbox, 'final')
      this.$emit('onGetCategory', this.checkedbox)
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
    gap:60px;
    align-items: flex-start;

}
li{
  display:block;
}
input[type=checkbox]{
  vertical-align: middle;
  position: relative;
  bottom: 1px;
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
