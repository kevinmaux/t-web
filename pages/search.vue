<template>
  <section class="container">
    <div>
      <router-link :to="{name: 'home'}">
        <h1 class="title">
          T-WEB
        </h1>
        <h2 class="subtitle">
          Search
        </h2>
      </router-link>
      <div>
        <ul>
          <li class="is-expanded">
            <b class="label is-inline">Compnos</b>
            <input
              v-model="COMPNOS"
              class="input is-inline"
              type="number"
              min="0"
              max="2147483647">
          </li>
          <li>
            <b class="label is-inline">Reporting area </b>
            <input
              v-model="REPORTINGAREA"
              class="input is-inline"
              type="text"
              maxlength="20" >
          </li>
          <li>
            <b class="label is-inline">Incident type description</b>
            <input
              v-model="INCIDENT_TYPE_DESCRIPTION"
              class="input is-inline"
              type="text"
              maxlength="200" >
          </li>
          <li>
            <b class="label is-inline">Reported area</b>
            <input
              v-model="REPTDISTRICT"
              class="input is-inline"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label is-inline">From date</b>
            <input
              v-model="FROMDATE"
              class="input is-inline"
              type="date" >
          </li>
          <li>
            <b class="label is-inline">To date</b>
            <input
              v-model="TODATE"
              class="input is-inline"
              type="date" >
          </li>
          <li>
            <b class="label is-inline">Street name</b>
            <input
              v-model="STREETNAME"
              class="input is-inline"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label is-inline">Cross street name</b>
            <input
              v-model="XSTREETNAME"
              class="input is-inline"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label is-inline">Weapon type</b>
            <input
              v-model="WEAPONTYPE"
              class="input is-inline"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label is-inline">Building type</b>
            <input
              v-model="BUILDINGTYPE"
              class="input is-inline"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label is-inline">Place of entry</b>
            <input
              v-model="PLACEOFENTRY"
              class="input is-inline"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label is-inline">Number of suspect</b>
            <input
              v-model="PERPETRATORSNOS"
              class="input is-inline"
              type="number"
              min="0"
              max="32767" >
          </li>
          <li>
            <b class="label is-inline">Suspect transport informations</b>
            <input
              v-model="SUSPECTTRANSPORTATION"
              class="input is-inline"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label is-inline">Victim activity</b>
            <input
              v-model="VICTIMACTIVITY"
              class="input is-inline"
              type="text"
              maxlength="300" >
          </li>
          <li>
            <b class="label is-inline">Unusual actions</b>
            <input
              v-model="UNUSUALACTIONS"
              class="input is-inline"
              type="text"
              maxlength="300" >
          </li>
          <li>
            <b class="label is-inline">Weather</b>
            <input
              v-model="WEATHER"
              class="input is-inline"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label is-inline">Neighborhood</b>
            <input
              v-model="NEIGHBORHOOD"
              class="input is-inline"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label is-inline">Visibility</b>
            <input
              v-model="LIGHTING"
              class="input is-inline"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label is-inline">Clearance status</b>
            <input
              v-model="CLEARANCESTATUSDESC"
              class="input is-inline"
              type="text"
              maxlength="100" >
          </li>
          <li>
            <b class="label is-inline">Main crime codes</b>
            <input
              v-model="MAIN_CRIMECODE"
              class="input is-inline"
              type="text"
              maxlength="15" >
          </li>
          <li>
            <b class="label is-inline">Robbery type</b>
            <select
              v-model="ROBBERY_TYPE"
              class="select is-inline">

              <option value="Street">Street</option>
              <option value="Commercial">Commercial</option>
              <option value="Bank">Bank</option>
              <option value="Other">Other</option>
            </select>
          </li>
          <li>
            <b class="label is-inline">Robbery attempt</b>
            <input
              v-model="ROBBERY_ATTEM"
              class="input is-inline"
              type="text"
              maxlength="10" >
          </li>
          <li>
            <b class="label is-inline">Burglary time</b>
            <select
              v-model="BURGLARY_TIME"
              class="select is-inline">
              <option value="Day">Day</option>
              <option value="Night">Night</option>
            </select>
          </li>
          <li>
            <b class="label is-inline">Domestic</b>
            <input
              v-model="DOMESTIC"
              class="input"
              type="text"
              maxlength="10" >
          </li>
          <li>
            <b class="label is-inline">Weapon type</b>
            <select
              v-model="WEAPON_TYPE"
              class="select">
              <option value="Gun">Gun</option>
              <option value="Knife">Knife</option>
              <option value="Other">Other</option>
              <option value="Unarmed">Unarmed</option>
            </select>
          </li>
          <li>
            <b class="label is-inline">Shift</b>
            <select
              v-model="SHIFT"
              class="select">
              <option value="Day">Day</option>
              <option value="First">First</option>
              <option value="Last">Last</option>
            </select>
          </li>
          <li>
            <b class="label is-inline">Day week</b>
            <select
              v-model="DAY_WEEK"
              class="select is-inline">
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
            <b class="label is-inline">UCR</b>
            <select
              v-model="UCRPART"
              class="select is-inline">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>
          <li>
            <b class="label is-inline">X coordinate</b>
            <input
              v-model="X"
              class="input"
              type="number"
              step="0.00000001" >
          </li>
          <li>
            <b class="label is-inline">Y coordinate</b>
            <input
              v-model="Y"
              class="input is-inline"
              type="number"
              step="0.00000001" >
          </li>
          <li>
            <b class="label is-inline">Reporting area geocoded</b>
            <input
              v-model="GREPORTING"
              class="input is-inline"
              type="text"
              maxlength="50" >
          </li>
          <li>
            <b class="label is-inline">Sector geocoded location</b>
            <input
              v-model="GSECTOR"
              class="input is-inline"
              type="text"
              maxlength="50" >
          </li>
          <li>
            <b class="label is-inline">Beat geocoded location</b>
            <input
              v-model="GBEAT"
              class="input is-inline"
              type="text"
              maxlength="40" >
          </li>
          <li>
            <b class="label is-inline">District geocoded location</b>
            <input
              v-model="GDISTRICT"
              class="input is-inline"
              type="text"
              maxlength="10" >
          </li>
          <li>
            <b class="label is-inline">District geocoded location pre 2009</b>
            <input
              v-model="GDISTRICT_PRE2009"
              class="input is-inline"
              type="text"
              maxlength="10" >
          </li>
          <li>
            <b class="label is-inline">Computed Crime Code</b>
            <input
              v-model="COMPUTEDCRIMECODE"
              class="input is-inline"
              type="text"
              maxlength="20" >
          </li>
          <li>
            <b class="label is-inline">Crime description</b>
            <input
              v-model="COMPUTEDCRIMECODEDESC"
              class="input is-inline"
              type="text"
              maxlength="255" >
          </li>
          <li>
            <button
              id="saveEdit"
              class="button"
              @click="search">Search
            </button>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li 
            v-for="(item, index) in searchList"
            :key="index">
            <router-link
              :to="{
                path: 'crime',
                query: { id: item['compnos'] }}">
              <b class="label">
                {{ item['compnos'] }} - {{ item['incident_type_description'] }}
              </b>
            </router-link>
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
      COMPNOS: null,
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
      PERPETRATORSNOS: null,
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
      X: null,
      Y: null,
      GREPORTING: '',
      GSECTOR: '',
      GBEAT: '',
      GDISTRICT: '',
      GDISTRICT_PRE2009: '',
      COMPUTEDCRIMECODE: '',
      COMPUTEDCRIMECODEDESC: '',
      searchList: []
    }
  },
  computed: {
    ...mapState({
      token: state => state.token,
      perm: state => state.perm
    }),

    searchItem: {
      set: function(newData) {
        for (var key in newData) {
          this['searchList'][key] = []
          this['searchList'][key]['compnos'] = newData[key]['compnos']
          this['searchList'][key]['incident_type_description'] =
            newData[key]['incident_type_description']
        }
      },
      get: function() {
        return this['searchList']
      }
    },
    data: {
      set: function(newData) {
        for (var key in newData) {
          if (newData[key]) this[key.toUpperCase()] = newData[key]
        }
      },
      get: function() {
        var keys = {
          COMPNOS: 0,
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
          X: 0,
          Y: 0,
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
          if (this[key])
            if (keys[key] === 0) data[key.toLowerCase()] = parseInt(this[key])
            else data[key.toLowerCase()] = this[key]
        }
        return data
      }
    }
  },
  created: function() {
    if (!this.$store.state.perm || this.$store.state.perm <= 0)
      this.$router.push('identification')
  },
  methods: {
    async search() {
      var token = this.$store.state.token
      const data = await axios({
        method: 'post',
        url: 'http://aetherion.fr:10005/search',
        data: {
          token: token,
          filters: this.data
        }
      })
      if (data.data.state === 'error') {
        if (this.$store.state.perm <= 0) this.$router.push('identification')
        alert(data.data.data)
      } else {
        var searchTemp = []
        for (var key in data.data.data) {
          searchTemp[key] = []
          searchTemp[key]['compnos'] = data.data.data[key]['compnos']
          if (data.data.data[key]['incident_type_description']) {
            searchTemp[key]['incident_type_description'] =
              data.data.data[key]['incident_type_description']
          } else {
            searchTemp[key]['incident_type_description'] = 'Unknown'
          }
        }
        this.searchList = searchTemp
      }
    }
  }
}
</script>

<style>
</style>
