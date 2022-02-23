<template>
    <div>
        <div><h2>Question #3</h2></div>
          <div><textarea id="ask" cols="80" rows="5" v-model="questhreedata"></textarea></div>
          <button @click="submit()">Submit</button>
    </div>
</template>
<script>
import swal from 'sweetalert'
export default{
  props: ['quesfour'],
  data () {
    return {
      questhreedata: null,
      storepropfour: this.quesfour,
      qThree: null
    }
  },
  created () {
    this.qThree = localStorage.getItem('QuestionThree')
  },
  methods: {
    submit () {
      if (localStorage.getItem('QuestionThree')) {
        swal('', 'cannot enter twice', 'error')
      } else if (!localStorage.getItem('QuestionTwo')) {
        swal('', 'Enter Questions Above', 'error')
      } else {
        localStorage.setItem('QuestionThree', this.questhreedata)
        this.$emit('enablequesthree', {storepropfour: false})
        this.$emit('updatestep', 3)
        swal('', 'Question added', 'success')
      }
    }
  }
}
</script>
<style scoped>
button{
    height:30px;
    width:60px;
    border:none;
    background-color:rgba(238, 143, 20, 0.911);
    cursor: pointer;
}
</style>
