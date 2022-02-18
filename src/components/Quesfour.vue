<template>
    <div>
        <div><h2>Question #4</h2></div>
          <div><textarea id="ask" cols="80" rows="5" v-model="quesfourdata"></textarea></div>
          <button @click="submit()">Submit</button>
    </div>
</template>
<script>
import swal from 'sweetalert'
export default{
  data () {
    return {
      quesfourdata: null
    }
  },
  methods: {
    submit () {
      if (localStorage.getItem('QuestionFour')) {
        swal('', 'Cannot enter twice', 'error')
      } else if (!localStorage.getItem('QuestionThree')) {
        swal('', 'Enter Questions Above', 'error')
      } else {
        localStorage.setItem('QuestionFour', this.quesfourdata)
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
