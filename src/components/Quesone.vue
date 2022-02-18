<template>
    <div>
        <div><h2> Question #1</h2></div>
          <div><textarea id="ask" cols="80" rows="5" v-model="quesonedata"></textarea></div>
          <button @click="submit()">Submit</button>
          <!-- <button @click="next()">Next</button> -->
    </div>
</template>
<script>
import swal from 'sweetalert'
export default{
  data () {
    return {
      quesonedata: null
    }
  },
  methods: {
    submit () {
      if (localStorage.getItem('QuestionOne')) {
        swal('', 'cannot enter twice', 'error')
      } else {
        localStorage.setItem('QuestionOne', this.quesonedata)
        this.$emit('updatestep', 1)
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
