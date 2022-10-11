    <template>
        <div>
        <h1>Create an Event</h1>
        <form @submit="submit">
            <BaseSelect
            label="Select a category"
            :options="categories"
            v-model="category"
            :error="errors.category"
            />
    
            <h3>Name & describe your event</h3>
            <BaseInput
            label="Title"
            type="text"
            v-model="title"
            :error="errors.title"
            />
    
            <BaseInput
            label="Description"
            type="text"
            v-model="description"
            :error="errors.description"
            />
    
            <h3>Where is your event?</h3>
            <BaseInput
            label="Location"
            type="text"
            v-model="location"
            :error="errors.location"
            />
    
            <h3>Are pets allowed?</h3>
            <BaseRadioGroup
            name="pets"
            :options="[
                { value: 1, label: 'Yes' },
                { value: 0, label: 'No' }
            ]"
            v-model="pets"
            :error="errors.pets"
            />
            <h3>Extras</h3>
            <div>
                <BaseCheckBox
                label="Catering"
                v-model="catering"
                :error="errors.catering"
                />
            </div>
    
            <div>
                <BaseCheckBox
                    label="Live music"
                    v-model="liveMusic"
                    :error="errors.liveMusic"
                />
            </div>
    
            <div>
            <BaseButton
                type="submit"
                class="-fill-gradient"
                something="else"
            >
                Submit
            </BaseButton>
            </div>
        </form>
        </div>
    </template>

<script>
import { useField, useForm } from 'vee-validate'
import { string , required, boolean ,number, object} from 'yup'

    export default {
        data() {
            return {
                categories: [
                    'sustainability',
                    'nature',
                    'animal welfare',
                    'housing',
                    'education',
                    'food',
                    'community'
                ]

            }
        },
        setup(){
            /*  without yup
                const required=value=>{
                const requiredMessage="This field is required"
                if(value===undefined || value===null) return requiredMessage
                if (! String(value).length)return requiredMessage
                return true
            }
            
            const minValue=(number,value)=>{
                if( String(value).length < number) return 'please type at least'+number+'characters'
                return true
            }
            const anyThing=()=>{
                return true
            }

            const validationSchema={
                category:required,
                title:value=>{
                    const req =required(value)
                    if (req !== true) return req

                    const min =minValue(3,value)
                    if (min !== true) return min
                    return true
                },
                description:required,
                location:undefined,
                pets:anyThing,
                catering:anyThing,
                liveMusic:anyThing
            }*/

            const validationSchema=object({
                category:string().required(),
                title:string().required('A cool title is required').min(3),
                description:string().required(),
                location:string(),
                pets:number(),
                catering:boolean(),
                liveMusic:boolean()
            })

            const {handleSubmit,errors}=useForm({
                validationSchema,
                initialValues:{
                    pets:1,
                    catering:false,
                    liveMusic:false
                }
            })

            const submit=handleSubmit(values=>{
                console.log('submit',values)
            })

            const {value:category}=useField('category')
            const {value:title}=useField('title')
            const {value:description}=useField('description')
            const {value:location}=useField('location')
            const {value:pets}=useField('pets')
            const {value:catering}=useField('catering')
            const {value:liveMusic}=useField('liveMusic')

            return{
                category,
                title,
                description,
                location,
                pets,
                catering,
                liveMusic,
                errors,submit
            }

            
        }
    }

</script>
    