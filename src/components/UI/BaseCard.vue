<template>
     <article class="card">
      <div class="card__inner">

        <slot class="card__body card__body--front">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flearnyourland.com%2Fwp-content%2Fuploads%2F2020%2F05%2FDandelionField.jpg&f=1&nofb=1&ipt=9c8d1e1e3298bcf68b85b90657f0b383db9b94ba0139f1b02833801f9d38ed41&ipo=images" />
          <h2>Dandelion</h2>
        </slot>

        <slot class="card__body card__body--back">
          <div class="card__title">
            <h2>Backside</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur iure ad unde commodi vitae autem debitis, voluptas quasi minima aspernatur, fuga harum ipsam illum, ex omnis ullam rerum? Necessitatibus!</p>
          </div>
        </slot>

      </div>
    </article>
</template>

