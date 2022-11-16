<template>
<div>
<div>
      <p class="task_list">{{ listLength }} items left</p>
</div>
<div>
    <p >ALl</p>
    <p @click="active">Active</p>
    <p @click="completed">Completed</p>
</div>
    </div>
</template>

<script>
export default {
    props:['listLength', 'all', 'active','completed'],

}

</script>