<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link to="/ResourceResult">Home</router-link>
                </li>
            </ul>
        </nav>
        <img class="leaves" src="../img/Leaves.png" alt=""/>
    </header>
</template>


<style scoped>
header {
  position: relative;
  width: 100%;
  height: 5rem;
  background-color: #4E8934;
  z-index: 5;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}

.leaves{
  width: 100%;
  margin: -15px 0;
}
</style>