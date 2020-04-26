<template>
  <div class="container">
    <div class="row">
      <div class="column column-50">
        <svg id="svg" />
      </div>
      <div class="column">
        <form id="app">
          <fieldset>
            <div>
              <input
                type="checkbox"
                id="displayTraceRegulateur"
                v-model="displayTraceRegulateur"
                v-on:change="displayTraceRegulateurValueChangeHandler"/>
              <label class="label-inline" for="displayTraceRegulateur">Afficher le tracé régulateur</label>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>
