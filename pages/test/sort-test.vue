<template>
  <!-- <div id="app">
    <h2>My Recipes:</h2>
    
  <div id="sort-bar">
    <select name="sortBy" id="select" v-model="sortBy">
      <option value="alphabetically">Alphabetically</option>
      <option value="cookingTime">Cooking Time</option>
    </select>
    <button v-on:click="ascending = !ascending" class="sort-button">
      <i v-if="ascending" class="fa fa-sort-up"></i>
      <i v-else class="fa fa-sort-down"></i>
    </button>
    <input type="number" v-model="maxCookingTime" id="cooking-time-input"></input>
    <input type="text" v-model="searchValue" placeholder="Search Recipe" id="search-input"></input>
    <i class="fa fa-search"></i>
  </div>
    
  <div id="recipe-container">
    <div class="card" v-for="recipe in filteredRecipes" :key="recipe.title">
      <img :src="recipe.img" class="recipe-image"></img>
      <div class="content">
        <h1 class="recipe-title">
          {{ recipe.title }}
        </h1>
        <p>
          {{ recipe.description }}
        </p>
        <span class="ingredient-span">

          <h3 class="ingredient-title">
            Ingredients:
          </h3>
          <ol class="ingredient-list">
            <li v-for="(ingredient) in recipe.ingredients">- {{ ingredient }}</li>
          </ol>
        </span>

        <h3>
          Cooking Time:
        </h3>
        <p>
          {{recipe.cookingTime}} minutes
        </p>

      </div>

    </div>
  </div>
  </div> -->
  <div></div>
</template>

<script>
// export default {
//   data() {
//     return {
//       ascending: true,
//       sortBy: 'alphabetically',
//       searchValue: '',
//       maxCookingTime: null,
//     recipes: [
//     {title: 'Pizza', description: 'Yummy pizza for those lazy days', ingredients: ['Dough', 'Tomato Paste', 'Cheese', 'Bell Pepper', 'Onion'], cookingTime: 60, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
//     {title: 'Burritos', description: 'Healthy yet very tasty burritos', ingredients: ['Burritos', 'Kidney beans', 'Onion', 'Tomato', 'Bell Pepper'], cookingTime: 30, img: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
//     {title: 'Tomato Soup', description: 'A tasty tomato soup for the cold winter', ingredients: ['Tomatoes', 'Onion', 'Oregano'], cookingTime: 45, img: 'https://images.unsplash.com/photo-1553881781-4c55163dc5fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
//     {title: 'Ice Cream', description: 'Just because... Ice Cream', ingredients: ['Whole milk', 'Cream', 'Eggs', 'Sugar'], cookingTime: 120, img: 'https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1321&q=80'},
//     ]
//     };
//   },
//   computed: {
//   filteredRecipes() {
//     let tempRecipes = this.recipes

//     // Process search input
//     if (this.searchValue != '' && this.searchValue) {
//         tempRecipes = tempRecipes.filter((item) => {
//           return item.title
//             .toUpperCase()
//             .includes(this.searchValue.toUpperCase())
//         })
//       }

//       // Filter out by cooking time
//       if (this.maxCookingTime)
//       tempRecipes = tempRecipes.filter((item) => {
//         return (item.cookingTime <= this.maxCookingTime)
//       })

//     // Sort by alphabetical order
//         tempRecipes = tempRecipes.sort((a, b) => {
//             if (this.sortBy == 'alphabetically') {
//                 let fa = a.title.toLowerCase(), fb = b.title.toLowerCase()

//               if (fa < fb) {
//                 return -1
//               }
//               if (fa > fb) {
//                 return 1
//               }
//               return 0

//               // Sort by cooking time
//             } else if (this.sortBy == 'cookingTime') {
//               return a.cookingTime - b.cookingTime
//         }
//         })

//         // Show sorted array in descending or ascending order
//         if (!this.ascending) {
//         	tempRecipes.reverse()
//         }

//         return tempRecipes
//   }
// }
// };
</script>

//
<style lang="scss">
// body {
//   background: #20262E;
//   padding: 20px;
//   font-family: Helvetica;
// }

// #app {
//   background: #fff;
//   border-radius: 4px;
//   padding: 20px;
//   transition: all 0.2s;
// }
// h2 {
//   font-weight: bold;
//   margin-bottom: 15px;
// }

// h3 {
//   font-weight: 600;
//   font-size: 16px;
// }

// #recipe-container {
//   display: flex;
//   flex-wrap: wrap;
// }

// .card {
//   border-radius: 5px;
//   box-shadow: rgba(0, 0, 0, 0.3) 0 5px 10px;
//   margin: 10px;
//   width: 40%;
// }

// .content {
//   padding: 30px;
// }

// .recipte-title {
//   font-size: 18px;
//   font-weight: 600;
// }

// .ingredient-title {
//   font-size: 16px;
//   font-weight: 600;
//   margin-top: 20px;
// }

// .recipe-image {
//   width: 100%;
//   max-height: 200px;
//   padding: -10px -10px;;
// }

// #sort-bar {
//   width: 80%;
//   margin-left: 10px;
//   background-color: #f2e0c1;
//   display: flex;
//   flex-wrap: wrap;
//   padding: 10px;
// }

// .sort-button {
//   background-color: rgba(0,0,0,0);
//   border: none;
//   height: 100%;
//   width: 50px;
//   &:hover {
//     background-color: rgba(0,0,0, 0.2);
//     cursor: pointer;
//   }
// }

//   #sort-label {
//     font-size: 12px;
//   }

// #ascending-icon {
//   height: 100%;
//   width: 30px;
// }

// #select {
//   background-color: rgba(0,0,0, 0);
//   border: none;
// }

//   #cooking-time-input {
//     width: 30px;
//     margin-right: 10px;
//   }

//   #search-input {
//     margin-right: 10px;
//   }
//
</style>
