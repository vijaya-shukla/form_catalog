<template>
    <div>
        <div><h2>Question #2</h2></div>
          <div><textarea id="ask" cols="80" rows="5" v-model="questwodata"></textarea></div>
          <button @click="submit()">Submit</button>
    </div>
</template>
<script>
import swal from 'sweetalert'
export default{
  props: ['questhree'],
  data () {
    return {
      questwodata: null,
      storepropthree: this.questhree
    }
  },
  methods: {
    submit () {
      if (localStorage.getItem('QuestionTwo')) {
        swal('', 'cannot enter twice', 'error')
      } else if (!localStorage.getItem('QuestionOne')) {
        swal('', 'Enter Questions Above', 'error')
      } else {
        localStorage.setItem('QuestionTwo', this.questwodata)
        this.$emit('enablequestwo', {storepropthree: false})
        this.$emit('updatestep', 2)
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
