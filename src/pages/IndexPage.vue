<template>
  <q-page >
 <!-- class="column flex-center" -->
    <q-bar>
      <q-btn dense flat />
          <q-btn @click="fetch_DATA()" color="white" text-color="black" label="DATA" />
      <q-space />

    </q-bar>



<div style="max-width:700px">


      




<div class="FlexContainer text-center">
<div class="FlexContainerItem">

<div class="container bg-grey-2 q-mb-sm q-pa-sm" v-for="(match,index) in (data_PL.matches)" :key="index">
   <div class="item20">({{return_standing(match.homeTeam.id,data_PL_standings)}})  {{match.homeTeam.tla}}</div>
   <div class="item10"><q-avatar size="sm"><img :src="match.homeTeam.crest"></q-avatar></div>
   <div class="item10 text-center">-</div>
   <div class="item10"><q-avatar size="sm"><img :src="match.awayTeam.crest"></q-avatar></div>
   <div class="item20 text-right">{{match.awayTeam.tla}} ({{return_standing(match.awayTeam.id,data_PL_standings)}})</div>

   <div class="item50 tiny">{{return_form(match.homeTeam.id,data_PL_standings)}}</div> 
   <div class="item50 text-right tiny">{{return_form(match.awayTeam.id,data_PL_standings)}}</div> 
</div>
</div>

<div class="FlexContainerItem">
<div class="container bg-grey-2 q-mb-sm q-pa-sm" v-for="(match,index) in (data_ELC.matches)" :key="index">
   <div class="item20">({{return_standing(match.homeTeam.id,data_ELC_standings)}})  {{match.homeTeam.tla}}</div>
   <div class="item10"><q-avatar size="sm"><img :src="match.homeTeam.crest"></q-avatar></div>
   <div class="item10 text-center">-</div>
   <div class="item10"><q-avatar size="sm"><img :src="match.awayTeam.crest"></q-avatar></div>
   <div class="item20 text-right">{{match.awayTeam.tla}} ({{return_standing(match.awayTeam.id,data_ELC_standings)}})</div>

   <div class="item50 tiny text-left">
   <!-- {{return_form(match.homeTeam.id,data_ELC_standings)}} -->

<div v-for="(dat,index) in return_form_split(match.homeTeam.id,data_ELC_standings).length" :key="index" >
val {{dat.val}}
</div>


    <q-icon size="xs" :name="return_form_badge_icon(return_form(match.homeTeam.id,data_ELC_standings),0)" :color="return_form_badge_colour(return_form(match.homeTeam.id,data_ELC_standings),0)" />
       <q-icon size="xs" :name="return_form_badge_icon(return_form(match.homeTeam.id,data_ELC_standings),0)" :color="return_form_badge_colour(return_form(match.homeTeam.id,data_ELC_standings),2)" />
     <!--  <q-icon size="xs" :name="return_form_badge_icon(return_form(match.homeTeam.id,data_ELC_standings),0)" :color="return_form_badge_colour(return_form(match.homeTeam.id,data_ELC_standings),4)" /> -->
   {{return_form(match.homeTeam.id,data_ELC_standings)}}
   </div> 
   <div class="item50 text-right tiny">{{return_form(match.awayTeam.id,data_ELC_standings)}}</div> 
</div>
</div>

</div>
<!-- end main container  -->
</div>
  </q-page>
</template>

<script> 
import { ref } from 'vue';
import { onMounted } from 'vue'
import axios from 'axios';
import { date } from 'quasar'
import { useDataStore } from '../stores/store_data';

export default {
// PROPS / COMPS / EMITS

setup() {
  const myStore = useDataStore()
  const data_PL = ref([])
  const data_ELC = ref([])
  const data_PL_standings = ref([])
  const data_ELC_standings = ref([])

onMounted(() => {

  data_PL_standings.value = myStore.data_pl_standing
  data_ELC_standings.value = myStore.data_elc_standing



}) // END MOUNTED 


function fetch_DATA() {
console.log(data_PL_standings.value)

    data_PL.value = myStore.data_pl_matches
    data_ELC.value = myStore.data_elc_matches
} // END FETCH EPL

function return_standing(id, jData) {
    if (!jData) {return}
    for (var i = 0; i < jData.standings[0].table.length; i++) {
        if (jData.standings[0].table[i].team.id == id) 
        {return jData.standings[0].table[i].position}
    }
} // END RETURN STANDING
function return_form(id, jData) {
    if (!jData) {return}
    for (var i = 0; i < jData.standings[0].table.length; i++) {
        if (jData.standings[0].table[i].team.id == id) 
        {return jData.standings[0].table[i].form}
    }
} // END RETURN STANDING





return {
    data_PL, data_ELC,
    fetch_DATA, 
    data_PL_standings, data_ELC_standings,
    return_standing, return_form, 


return_form_split(id,dataForm) {
    var dat = return_form(id,dataForm)
    console.log(dat.split(","))
    return dat.split(",");
},

return_form_badge_icon(form,char) {
  if (form.charAt(char)=='W') {return 'check_box'}
  else if (form.charAt(char)=='L') {return 'cancel_presentation'}
  else {return 'compare_arrows'}
},
return_form_badge_colour(form,char) {
  if (form.charAt(char)=='W') {return 'green-8'}
  else if (form.charAt(char)=='L') {return 'red-8'}
  else {return 'blue-8'}
},


  return_dt(dt) {
    return date.formatDate(dt, 'MMM-DD')
  },
  return_time(dt) {
    return date.formatDate(dt, 'HH:mm')
  },

} // END RETURN
} // END SET UP
} // END EXPORT



</script>

<style>

.tiny {
  font-size:.8em;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item10 {
  flex: 0 10%;
}
.item20 {
  flex: 0 20%;
}
.item50 {
  flex: 0 50%;
}
.item100 {
  flex: 0 100%;
}

.FlexContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
   
    overflow: auto;
    flex-direction: row;
}

.FlexContainerItem {
    width: 340px;
    margin: 2px;
}


</style>
