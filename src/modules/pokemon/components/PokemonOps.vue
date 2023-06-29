<template>
  <div class="container">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
    display: grid;
    justify-content: center;
    margin-right: 60px;
}

ul {
  list-style-type: none;
}

li {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
  width: 200px;
  cursor: pointer;
  text-align: center;
}

li:hover {
  background-color: red;
}
</style>
