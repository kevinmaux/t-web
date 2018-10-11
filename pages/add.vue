<template>
  <section class="container">
    <div>
      <router-link :to="{name: 'index'}">
        <h1 class="title">
          T-WEB
        </h1>
      </router-link>
    </div>
    <div class="fields">
      <ul>
        <li>
          <b>reporting area </b>
          <input
            v-model="REPORTINGAREA"
            :readonly="perm > 3"
            type="text"
            maxlength="20" >
        </li>
        <li>
          <b>Incident type description</b>
          <input
            v-model="INCIDENT_TYPE_DESCRIPTION"
            :readonly="perm > 3"
            type="text"
            maxlength="200" >
        </li>
        <li>
          <b>Reported area</b>
          <input
            v-model="REPTDISTRICT"
            :readonly="perm > 3"
            type="text"
            maxlength="100" >
        </li>
        <li>
          <b>From date</b>
          <input
            v-model="FROMDATE"
            :readonly="perm > 3"
            type="date" >
        </li>
        <li>
          <b>To date</b>
          <input
            v-model="TODATE"
            :readonly="perm > 3"
            type="date" >
        </li>
        <li>
          <b>Street name</b>
          <input
            v-model="STREETNAME"
            :readonly="perm > 3"
            type="text"
            maxlength="100" >
        </li>
        <li>
          <b>Cross street name</b>
          <input
            v-model="XSTREETNAME"
            :readonly="perm > 3"
            type="text"
            maxlength="100" >
        </li>
        <li>
          <b>Weapon type</b>
          <input
            v-model="WEAPONTYPE"
            :readonly="perm > 3"
            type="text"
            maxlength="100" >
        </li>
        <li>
          <b>Building type</b>
          <input
            v-model="BUILDINGTYPE"
            :readonly="perm > 3"
            type="text"
            maxlength="100" >
        </li>
        <li>
          <b>Place of entry</b>
          <input
            v-model="PLACEOFENTRY"
            :readonly="perm > 3"
            type="text"
            maxlength="100" >
        </li>
        <li>
          <b>Number of suspect</b>
          <input
            v-model="PERPETRATORSNOS"
            :readonly="perm > 3"
            type="number"
            min="0"
            max="32767" >
        </li>
        <li>
          <b>Suspect transport informations</b>
          <input
            v-model="SUSPECTTRANSPORTATION"
            :readonly="perm > 3"
            type="text"
            maxlength="100" >
        </li>
        <li>
          <b>Victim activity</b>
          <input
            v-model="VICTIMACTIVITY"
            :readonly="perm > 3"
            type="text"
            maxlength="300" >
        </li>
        <li>
          <b>Unusual actions</b>
          <input
            v-model="UNUSUALACTIONS"
            :readonly="perm > 3"
            type="text"
            maxlength="300" >
        </li>
        <li>
          <b>Weather</b>
          <input
            v-model="WEATHER"
            :readonly="perm > 3"
            type="text"
            maxlength="100" >
        </li>
        <li>
          <b>Neighborhood</b>
          <input
            v-model="NEIGHBORHOOD"
            :readonly="perm > 3"
            type="text"
            maxlength="100" >
        </li>
        <li>
          <b>Visibility</b>
          <input
            v-model="LIGHTING"
            :readonly="perm > 3"
            type="text"
            maxlength="100" >
        </li>
        <li>
          <b>Clearance status</b>
          <input
            v-model="CLEARANCESTATUSDESC"
            :readonly="perm > 3"
            type="text"
            maxlength="100" >
        </li>
        <li>
          <b>Main crime codes</b>
          <input
            v-model="MAIN_CRIMECODE"
            :readonly="perm > 3"
            type="text"
            maxlength="15" >
        </li>
        <li>
          <b>Robbery type</b>
          <select 
            v-model="ROBBERY_TYPE" 
            :disabled="perm > 3">
            <option value="Street">Street</option>
            <option value="Commercial">Commercial</option>
            <option value="Bank">Bank</option>
            <option value="Other">Other</option>
          </select>
        </li>
        <li>
          <b>Robbery attempt</b>
          <input
            v-model="ROBBERY_ATTEM"
            :readonly="perm > 3"
            type="text"
            maxlength="10" >
        </li>
        <li>
          <b>Burglary time</b>
          <select 
            v-model="BURGLARY_TIME" 
            :disabled="perm > 3">
            <option value="Day">Day</option>
            <option value="Night">Night</option>
          </select>
        </li>
        <li>
          <b>Domestic</b>
          <input 
            v-model="DOMESTIC"
            :readonly="perm > 3"
            type="text"
            maxlength="10" >
        </li>
        <li>
          <b>Weapon type</b>
          <select 
            v-model="WEAPON_TYPE" 
            :disabled="perm > 3">
            <option value="Gun">Gun</option>
            <option value="Knife">Knife</option>
            <option value="Other">Other</option>
            <option value="Unarmed">Unarmed</option>
          </select>
        </li>
        <li>
          <b>Shift</b>
          <select 
            v-model="SHIFT" 
            :disabled="perm > 3">
            <option value="Day">Day</option>
            <option value="First">First</option>
            <option value="Last">Last</option>
          </select>
        </li>
        <li>
          <b>Day week</b>
          <select 
            v-model="DAY_WEEK" 
            :disabled="perm > 3">
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </li>
        <li>
          <b>UCR</b>
          <select 
            v-model="UCRPART" 
            :disabled="perm > 3">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>
        <li>
          <b>X coordinate</b>
          <input
            v-model="X"
            :readonly="perm > 3"
            type="number"
            step="0.00000001" >
        </li>
        <li>
          <b>Y coordinate</b>
          <input
            v-model="Y"
            :readonly="perm > 3"
            type="number"
            step="0.00000001" >
        </li>
        <li>
          <b>Reporting area geocoded</b>
          <input
            v-model="GREPORTING"
            :readonly="perm > 3"
            type="text"
            maxlength="50" >
        </li>
        <li>
          <b>Sector geocoded location</b>
          <input
            v-model="GSECTOR"
            :readonly="perm > 3"
            type="text"
            maxlength="50" >
        </li>
        <li>
          <b>Beat geocoded location</b>
          <input
            v-model="GBEAT"
            :readonly="perm > 3"
            type="text"
            maxlength="40" >
        </li>
        <li>
          <b>District geocoded location</b>
          <input
            v-model="GDISTRICT"
            :readonly="perm > 3"
            type="text"
            maxlength="10" >
        </li>
        <li>
          <b>District geocoded location pre 2009</b>
          <input
            v-model="GDISTRICT_PRE2009"
            :readonly="perm > 3"
            type="text"
            maxlength="10" >
        </li>
        <li>
          <b>Computed Crime Code</b>
          <input
            v-model="COMPUTEDCRIMECODE"
            :readonly="perm > 3"
            type="text"
            maxlength="20" >
        </li>
        <li>
          <b>Crime description</b>
          <input
            v-model="COMPUTEDCRIMECODEDESC"
            :readonly="perm > 3"
            type="text"
            maxlength="255" >
        </li>
        <li v-if="perm <= 3 && perm > 0">
          <button
            id="saveEdit"
            class="button is-large"
            @click="save">Save
          </button>
        </li>
        <li>
          <button
            id="deleteEdit"
            class="button is-large"
            @click="remove">Delete
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      REPORTINGAREA: '',
      INCIDENT_TYPE_DESCRIPTION: '',
      REPTDISTRICT: '',
      FROMDATE: '',
      TODATE: '',
      STREETNAME: '',
      XSTREETNAME: '',
      WEAPONTYPE: '',
      BUILDINGTYPE: '',
      PLACEOFENTRY: '',
      PERPETRATORSNOS: 0,
      SUSPECTTRANSPORTATION: '',
      VICTIMACTIVITY: '',
      UNUSUALACTIONS: '',
      WEATHER: '',
      NEIGHBORHOOD: '',
      LIGHTING: '',
      CLEARANCESTATUSDESC: '',
      MAIN_CRIMECODE: '',
      ROBBERY_TYPE: '',
      ROBBERY_ATTEM: '',
      BURGLARY_TIME: '',
      DOMESTIC: '',
      WEAPON_TYPE: '',
      SHIFT: '',
      DAY_WEEK: '',
      UCRPART: '',
      X: 0.0,
      Y: 0.0,
      GREPORTING: '',
      GSECTOR: '',
      GBEAT: '',
      GDISTRICT: '',
      GDISTRICT_PRE2009: '',
      COMPUTEDCRIMECODE: '',
      COMPUTEDCRIMECODEDESC: ''
    }
  },
  computed: {
    ...mapState({
      token: state => state.token,
      perm: state => state.perm
    }),
    data: {
      set: function(newData) {
        for (var key in newData) {
          this[key.toUpperCase()] = newData[key]
        }
      },
      get: function() {
        return this.data()
      }
    }
  },
  created: function() {
    if (this.$store.state.perm <= 0) this.$router.push('index')
    if (this.$route.query['id']) this.getData()
  },
  methods: {
    save() {
      alert('save')
    },
    async remove() {
      var id = parseInt(this.$route.query['id'])
      var token = this.$store.state.token
      const data = await axios({
        method: 'post',
        url: 'http://aetherion.fr:10005/delete',
        data: {
          token: token,
          compnos: id
        }
      })
      if (data.data.state === 'error') {
        alert(data.data.data)
      } else {
        alert('Deleted')
        this.$router.push('home')
      }
    },
    async getData() {
      var id = parseInt(this.$route.query['id'])
      var token = this.$store.state.token
      const data = await axios({
        method: 'post',
        url: 'http://aetherion.fr:10005/search',
        data: {
          token: token,
          filters: {
            compnos: id
          }
        }
      })
      if (data.data.state === 'error') {
        if (this.$store.state.perm <= 0) this.$router.push('index')
        alert(data.data.data)
      } else {
        this.data = data.data.data[0]
      }
    }
  }
}
</script>

<style>
</style>
