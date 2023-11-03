<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="55" height="55">
    <h1>Homepage</h1>

    <p ref="custom_p_ref">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add age</button>
    <input type="text" v-model="name">
    
    <h4>Computed function with Search</h4>
    <input type="text" v-model="search">
    <button @click="stopWatchFunctionClick">Stop Watching</button>
    <p>Search Term ---  {{ search }}</p>
    <div v-for="name, idx in matchingNamesList" :key="idx">{{name}}</div>

  </div>
</template>

<script>

//*************Composition Api************
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  setup(props) {
    console.log(this)

    const custom_p_ref = ref(null) //this to Template Refs in `setup` function
    console.log(custom_p_ref, custom_p_ref.value)

    let name = ref('mario') // amra `ref` use kore ekn variable ta ke `Reactive` kore fela jay
    let age = ref(22)

    const handleClick = () => {
      console.log(custom_p_ref, custom_p_ref.value)
      custom_p_ref.value.classList.add('test')
      custom_p_ref.value.textContent = 'hello, Ninja Hattori'
      name.value = 'Hattori'
      age.value = 58
    }

    //******* Computed *******

    const search = ref('')
    const names_list = ref(['mario', 'akash', 'hattori', 'goku', 'vegeta', 'ramos'])

    const matchingNamesList = computed(() => {
      return names_list.value.filter((name) => name.includes(search.value))
    })

    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran:', search.value)
    })


    const stopWatchFunctionClick = () => {
      console.log('Stopped Watching')
      stopWatch()
      stopEffect()
    }
    
    // Variables+Function gulao Must RETURN kora lagbe naile `ref` property kaaj korbe nah...
    return { name, age, handleClick, custom_p_ref, search, names_list, matchingNamesList, stopWatchFunctionClick }
  }
}
</script>