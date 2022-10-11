<template>
  <div>
    <h1>Create an event</h1>
    <form  @submit.prevent="sendForm">
      <BaseSelect 
      :options="categories"
      label="Select a category"
      v-model="event.category"
      />
      <!-- <label>Select a category</label>
      <select >
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >{{ option }}</option>
      </select> -->

      <fieldset>
        <legend>Name & describe your event</legend>
        <BaseInput
          label="Title"
          type="text"
          v-model="event.title"
        />
  
        <BaseInput
          label="Description"
          type="text"
          v-model="event.description"
        />
  
      </fieldset>
      
      
      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput
          label="Location"
          type="text"
          v-model="event.location"
          error="This input has an error"
  
        />
      </fieldset>
      
      

      <fieldset>
        <legend>Pets</legend>
        <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup
            v-model="event.pets"
            name="pets"
            :options="petOption" 
            :vertical="false"
          />
          
        </div>
      </fieldset>
      

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckBox 
            label="Catering"
            v-model="event.extras.catering"
          />
        </div>

        <div>
          <BaseCheckBox
          label="Live music"
          v-model="event.extras.music"
          />
        </div>
      </fieldset>

      

      <button class="button -fill-gradient" type="submit"  >Submit</button>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';
import BaseInput1 from '@/components/BaseInput.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseCheckBox from '@/components/BaseCheckBox.vue';
import BaseRadio from '@/components/BaseRadio.vue';
import BaseRadioGroup from '@/components/BaseRadioGroup.vue';
import axios from 'axios'
export default {
    data() {
        return {
            categories: [
                "sustainability",
                "nature",
                "animal welfare",
                "housing",
                "education",
                "food",
                "community"
            ],
            event: {
                category: "",
                title: "",
                description: "",
                location: "",
                pets: 1,
                extras: {
                    catering: false,
                    music: false
                }
            },
            petOption:[
              {label:'yes',value:1},
              {label:'No',value:0}
            ]
        };
    },
    components: { BaseInput, BaseInput1, BaseSelect, BaseCheckBox, BaseRadio, BaseRadioGroup },
    methods:{
      sendForm(){
        axios.post(
          'https://my-json-server.typicode.com/RawanHeshamFetoh/DBjson/events',
          this.event
        )
        .then((res)=>{
          console.log(res)
        })
        .catch((errorr)=>{
          console.log(errorr)
        })
      }
    }
}
</script>
<style scoped>
  fieldset{
    padding: 0;
    margin: 0;
    border: none;
  }
  legand{
    margin-top: 20px;
    font-weight: 700;
    font-size: 28px;
  }
</style>
