<template>
  <div>
    <!-- <div class="d-flex justify-center">
      <v-btn text @click="$router.push({name:'home'})">Abbruch</v-btn>
    </div>-->

    <div>
      <div v-for="(card, index) in 3" :key="index">
        <transition
          v-if="index==menu"
          appear
          appear-active-class="animated fadeInUp"
          name="custom-classes-transition"
          :enter-active-class="isNext ? 'animated fadeInUp' : 'animated fadeInDown'"
          :leave-active-class="isNext ? 'animated fadeOutUp' : 'animated fadeOutDown'"
          mode="out-in"
        >
          <v-card class="customrow" outlined>
            <div>
              <v-card-title>Form {{index+1}}/3</v-card-title>
              <vue-form-generator
                class="px-3"
                :schema="schemas[Object.keys(schemas)[index]]"
                :model="model"
                :options="formOptions"
              ></vue-form-generator>

              <div id="tr-footer"></div>
            </div>
          </v-card>
        </transition>


      </div>
      <div class="d-flex justify-center align-center" style="height:90vh" v-if="menu==3">
        <h1>Super geschafft!!</h1>
      </div>
    </div>

    <div class="d-flex justify-center align-center bottom_nav">
      <button @click="prev" class="prev">Zurück</button>
      <v-progress-circular v-if="menu>=3" class="nmt-5" :size="50" :value="progress"><v-icon class="green--text">mdi-check</v-icon></v-progress-circular>
      <v-progress-circular v-else class="nmt-5" :size="50" :value="progress">{{ progressDiscret }}</v-progress-circular>
      <button v-if="menu==3" @click="generatePDF" class="next">Gen</button>
      <button v-else @click="next" class="next">Weiter</button>
    </div>
  </div>
</template>

<script>
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";
export default {
  components: { "vue-form-generator": VueFormGenerator.component },
  data() {
    return {
      menu: 0,
      isNext: true,
      forms: {},
      model: {},
      schemas: {
        schema0: {
          fields: [
            {
              type: "input",
              inputType: "text",
              label: "ID (disabled text field nur ein Test)",
              model: "id",
              readonly: true,
              disabled: true
            },
            {
              type: "input",
              inputType: "text",
              label: "Name",
              model: "name",
              placeholder: "Name",
              featured: true,
              required: true
            },
            {
              type: "input",
              inputType: "text",
              label: "Vorname",
              model: "vorname",
              placeholder: "Vorname",
              featured: true,
              required: true
            },

            {
              type: "select",
              label: "Test Select",
              model: "select",
              values: ["Ruslan", "Serhat", "Passives Einkommen"]
            },
            {
              type: "input",
              inputType: "email",
              label: "E-mail",
              model: "email",
              placeholder: "User's e-mail address"
            }
          ]
        },

        schema1: {
          fields: [
            {
              type: "input",
              inputType: "text",
              label: "ID (disabled text field nur ein Test)",
              model: "id",
              readonly: true,
              disabled: true
            }
          ]
        },
        schema2: {
          fields: [
            {
              type: "input",
              inputType: "text",
              label: "Restliche Formulare hier",
              model: "id",
              readonly: true,
              disabled: true
            }
          ]
        }
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    };
  },
  computed: {
    progress() {
      return (this.menu / 3) * 100;
    },
    progressDiscret() {
      return this.menu + 1 + "/" + 3;
    }
  },
  methods: {
    generatePDF(){
    
    },
    next() {
      this.isNext = true;
      this.menu = this.menu + 1;
    },
    prev() {
      this.isNext = false;
      this.menu = this.menu - 1;
    }
  }
};
</script>

<style >
.v-application .error {
  background-color: rgba(0, 0, 0, 0) !important;
}
fieldset {
  border: none !important;
}
.bottom_nav {
  overflow: hidden;
  position: fixed;
  bottom: 0;
  padding-bottom: 20px;
  width: 100%;
  background: white;
  border-top: solid 1px lightgray;
}

#tr-footer {
  height: 100px;
  width: 100%;
  background: transparent;
}
.customrow {
  /* Slide Position */
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  width: 90vh;
}

.prev {
  right: Calc(50% + 65px);
}
.next {
  right: Calc(50% - 145px);
}
.next,
.prev {
  position: absolute;
  bottom: 0px;
  width: 70px;
  text-align: center;
  padding: 7px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px dashed #ff5722;
  background-color: white;
  color: #ff5722;
  box-shadow: 1px 1px 1px 0px #9e9e9e;
  margin-bottom: 20px;
}
</style>