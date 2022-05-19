<template>
  <div>
    <div @click="characterItemClick(index)">
      <b-button v-b-toggle.accordion-2 block variant="info">
        Hello world
      </b-button>
      <div :data-character-id="index" class="bg-gray-100 p-6 hidden">
        <p>Hello</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    characterItemClick(characterIndex) {
      const characterInfoElement = document.querySelectorAll(
        '[data-character-id="' + characterIndex + '"]'
      )[0]
      if (characterInfoElement.classList.contains('block')) {
        characterInfoElement.classList.remove('block')
        characterInfoElement.classList.add('hidden')
      } else {
        characterInfoElement.classList.remove('hidden')
        characterInfoElement.classList.add('block')
      }
    },
  },
}
</script>
