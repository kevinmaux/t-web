<template>
  <section class="container">
    <div>
      <router-link :to="{name: 'home'}">
        <h1 class="title">
          T-WEB
        </h1>
      </router-link>
      <h2 class="subtitle">
        Crime
      </h2>
      <div class="fields">
        <ul>
          <li>
            <b class="label">reporting area </b>
            <input
              v-model="REPORTINGAREA"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="20" >
          </li>
          <li>
            <b class="label">Incident type description</b>
            <input
              v-model="INCIDENT_TYPE_DESCRIPTION"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="200" >
          </li>
          <li>
            <b class="label">Reported area</b>
            <input
              v-model="REPTDISTRICT"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label">From date</b>
            <input
              v-model="FROMDATE"
              :readonly="perm > 3"
              class="input"
              type="date" >
          </li>
          <li>
            <b class="label">To date</b>
            <input
              v-model="TODATE"
              :readonly="perm > 3"
              class="input"
              type="date" >
          </li>
          <li>
            <b class="label">Street name</b>
            <input
              v-model="STREETNAME"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label">Cross street name</b>
            <input
              v-model="XSTREETNAME"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label">Weapon type</b>
            <input
              v-model="WEAPONTYPE"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label">Building type</b>
            <input
              v-model="BUILDINGTYPE"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label">Place of entry</b>
            <input
              v-model="PLACEOFENTRY"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label">Number of suspect</b>
            <input
              v-model="PERPETRATORSNOS"
              :readonly="perm > 3"
              class="input"
              type="number"
              min="0"
              max="32767" >
          </li>
          <li>
            <b class="label">Suspect transport informations</b>
            <input
              v-model="SUSPECTTRANSPORTATION"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label">Victim activity</b>
            <input
              v-model="VICTIMACTIVITY"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="300" >
          </li>
          <li>
            <b class="label">Unusual actions</b>
            <input
              v-model="UNUSUALACTIONS"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="300" >
          </li>
          <li>
            <b class="label">Weather</b>
            <input
              v-model="WEATHER"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b>Neighborhood</b>
            <input
              v-model="NEIGHBORHOOD"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="100" >
          </li>
          <li class="label">
            <b>Visibility</b>
            <input
              v-model="LIGHTING"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label">Clearance status</b>
            <input
              v-model="CLEARANCESTATUSDESC"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label">Main crime codes</b>
            <input
              v-model="MAIN_CRIMECODE"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="15" >
          </li>
          <li>
            <b class="label">Robbery type</b>
            <select 
              v-model="ROBBERY_TYPE" 
              :disabled="perm > 3"
              class="select">

              <option value="Street">Street</option>
              <option value="Commercial">Commercial</option>
              <option value="Bank">Bank</option>
              <option value="Other">Other</option>
            </select>
          </li>
          <li>
            <b class="label">Robbery attempt</b>
            <input
              v-model="ROBBERY_ATTEM"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="10" >
          </li>
          <li>
            <b class="label">Burglary time</b>
            <select 
              v-model="BURGLARY_TIME" 
              :disabled="perm > 3" 
              class="select">
              <option value="Day">Day</option>
              <option value="Night">Night</option>
            </select>
          </li>
          <li>
            <b class="label">Domestic</b>
            <input 
              v-model="DOMESTIC"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="10" >
          </li>
          <li>
            <b class="label">Weapon type</b>
            <select 
              v-model="WEAPON_TYPE" 
              :disabled="perm > 3" 
              class="select">
              <option value="Gun">Gun</option>
              <option value="Knife">Knife</option>
              <option value="Other">Other</option>
              <option value="Unarmed">Unarmed</option>
            </select>
          </li>
          <li>
            <b class="label">Shift</b>
            <select 
              v-model="SHIFT" 
              :disabled="perm > 3" 
              class="select">
              <option value="Day">Day</option>
              <option value="First">First</option>
              <option value="Last">Last</option>
            </select>
          </li>
          <li>
            <b class="label">Day week</b>
            <select 
              v-model="DAY_WEEK" 
              :disabled="perm > 3" 
              class="select">
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
            <b class="label">UCR</b>
            <select 
              v-model="UCRPART" 
              :disabled="perm > 3" 
              class="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>
          <li>
            <b class="label">X coordinate</b>
            <input
              v-model="X"
              :readonly="perm > 3"
              class="input"
              type="number"
              step="0.00000001" >
          </li>
          <li>
            <b class="label">Y coordinate</b>
            <input
              v-model="Y"
              :readonly="perm > 3"
              class="input"
              type="number"
              step="0.00000001" >
          </li>
          <li>
            <b class="label">Reporting area geocoded</b>
            <input
              v-model="GREPORTING"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="50" >
          </li>
          <li>
            <b class="label">Sector geocoded location</b>
            <input
              v-model="GSECTOR"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="50" >
          </li>
          <li>
            <b class="label">Beat geocoded location</b>
            <input
              v-model="GBEAT"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="40" >
          </li>
          <li>
            <b class="label">District geocoded location</b>
            <input
              v-model="GDISTRICT"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="10" >
          </li>
          <li>
            <b class="label">District geocoded location pre 2009</b>
            <input
              v-model="GDISTRICT_PRE2009"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="10" >
          </li>
          <li>
            <b class="label">Computed Crime Code</b>
            <input
              v-model="COMPUTEDCRIMECODE"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="20" >
          </li>
          <li>
            <b class="label">Crime description</b>
            <input
              v-model="COMPUTEDCRIMECODEDESC"
              :readonly="perm > 3"
              class="input"
              type="text"
              maxlength="255" >
          </li>
          <li v-if="perm <= 3 && perm > 0">
            <button
              id="saveEdit"
              class="button"
              @click="save">Save
            </button>
          </li>
          <li v-if="perm <= 2 && perm > 0 && $route.query['id']">
            <button
              id="deleteEdit"
              class="button"
              @click="remove">Delete
            </button>
          </li>
        </ul>
      </div>
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
          if (newData[key]) this[key.toUpperCase()] = newData[key]
        }
      },
      get: function() {
        var keys = {
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
        var data = {}
        for (var key in keys) {
          data[key] = this[key]
        }
        return data
      }
    }
  },
  created: function() {
    if (!this.$store.state.perm || this.$store.state.perm <= 0)
      this.$router.push('identification')
    if (this.$route.query['id']) this.getData()
  },
  methods: {
    async save() {
      var newData = {}
      var sendData = {}
      var url = ''
      var token = this.$store.state.token
      for (var key in this.data) {
        if (this.data[key]) newData[key.toLowerCase()] = this.data[key]
      }
      if (this.$route.query['id']) {
        sendData = {
          token: token,
          compnos: this.$route.query['id'],
          data: newData
        }
        url = 'http://aetherion.fr:10005/update'
      } else {
        sendData = { token: token, data: newData }
        url = 'http://aetherion.fr:10005/insert'
      }
      const data = await axios({
        method: 'post',
        url: url,
        data: sendData
      })
      if (data.data.state === 'error') {
        alert(data.data.data)
      } else {
        if (this.$route.query['id']) {
          alert('Updated')
        } else {
          alert('Inserted - ' + data.data.data.compnos)
        }
        this.$router.push({
          path: 'crime',
          query: { id: data.data.data.compnos }
        })
      }
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
        if (this.$store.state.perm <= 0) this.$router.push('identification')
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
