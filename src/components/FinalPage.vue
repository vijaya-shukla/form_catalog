<template>
  <div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <br />
        <div class="form-card">
          <div class="side">
            <label class="fieldlabels">Name: </label>
            <!-- <span>{{namefinal}}</span> -->
          </div>
          <div class="side">
            <label class="control-label requiredField" for="email">
              Email :
            </label>
            <span></span>
          </div>
          <div class="side">
            <label class="fieldlabels">Mobile:</label>
            <span></span>
          </div>
          <!-- <div class="way"></div> -->
          <div class="sides">
            <label class="fieldlabels">University: </label>
            <span></span>
          </div>
          <div class="side">
            <label class="fieldlabels">Major: </label>
            <span></span>
          </div>
          <div class="sid">
            <label class="fieldlabels">Graduation Date: </label>
          </div>
          <div class="side"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// export default
// {
//   data () {
//     eslint-disable-next-line no-labels
//     namefinal:localStorage.getItem('name')
//   }
// }
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.form-card {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: left;
  padding: 50px;
  align-items: center;
  width: 50%;
    margin-left:250px;
    background-color: rgba(238, 143, 20, 0.911);
}
.form-card label {
  text-align: left;
}
html {
  height: 100%;
}
.side {
  display: flex;
  margin-bottom: 20px;
}
.sides {
  display: flex;
  margin-bottom: 20px;
  margin-right: 30px;
}
.sid {
  display: flex;
  margin-bottom: 20px;
  margin-right: 80px;
}
/* .button{
  background-color: #673ab7;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width:100px;
  color: white;
} */

.buttons {
  display: flex;
  justify-content: space-around;
}
.button {
  background-color: #673ab7;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100px;
  color: white;
}
.container-fluid {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.purple-text {
  color: #673ab7;
  font-weight: normal;
}

.way {
  margin-left: -140px;
  display: flex;
  margin-bottom: 20px;
}
</style>
