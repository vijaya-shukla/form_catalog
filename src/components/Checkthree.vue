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
      checkboxthree: [],
      flag: true,
      items: [
        {id: 0, text: 'MATLAB', checked: false},
        {id: 1, text: 'Swift', checked: false},
        {id: 2, text: 'TypeScript', checked: false},
        {id: 3, text: 'C#', checked: false},
        {id: 4, text: 'Objective-C', checked: false},
        {id: 5, text: 'Python', checked: false},
        {id: 6, text: 'Go', checked: false},
        {id: 7, text: 'A.NET', checked: false},
        {id: 8, text: 'DataFlex', checked: false},
        {id: 9, text: 'Bash', checked: false},
        {id: 10, text: 'Ballerina', checked: false},
        {id: 11, text: 'Darwin', checked: false},
        {id: 12, text: 'R', checked: false},
        {id: 13, text: 'Haskell', checked: false},
        {id: 14, text: 'Perl', checked: false},
        {id: 15, text: 'Clojure', checked: false}

      ]
    }
  },
  created () {
    if (localStorage.getItem('checkThree')) {
      this.checkboxthree = JSON.parse(localStorage.getItem('checkThree'))
      for (let i = 0; i < this.checkboxthree.length; i++) {
        for (let j = 0; j < this.items.length; j++) {
          if (this.items[j].text === this.checkboxthree[i]) {
            this.items[j].checked = true
          }
        }
      }
    }
    console.log('getting three', localStorage.getItem('checkThree'))
  },
  methods: {
    addContact (itemName, itemId) {
      for (let i = 0; i <= this.checkboxthree.length - 1; i++) {
        if (this.checkboxthree[i] === itemName) {
          var newArray = this.checkboxthree.filter((item) => item !== itemName)
          this.checkboxthree = newArray
          this.flag = false
        }
      }
      if (this.flag === true) {
        this.checkboxthree.push(itemName)
      }
      this.flag = true
      console.log(this.checkboxthree, 'three')
      this.$emit('onGetCategoryThree', this.checkboxthree)
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
