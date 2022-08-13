"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42079],{58008:(e,t,a)=>{a.r(t),a.d(t,{data:()=>r});const r={key:"v-714f4ff8",path:"/devices/EMIZB-132.html",title:"Develco EMIZB-132 control via MQTT",lang:"en-US",frontmatter:{title:"Develco EMIZB-132 control via MQTT",description:"Integrate your Develco EMIZB-132 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-03-20T17:24:57.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Configuring interface mode",slug:"configuring-interface-mode",children:[]},{level:3,title:"Not getting measurements",slug:"not-getting-measurements",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Current (numeric)",slug:"current-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Current_phase_b (numeric)",slug:"current-phase-b-numeric",children:[]},{level:3,title:"Voltage_phase_b (numeric)",slug:"voltage-phase-b-numeric",children:[]},{level:3,title:"Current_phase_c (numeric)",slug:"current-phase-c-numeric",children:[]},{level:3,title:"Voltage_phase_c (numeric)",slug:"voltage-phase-c-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/EMIZB-132.md",git:{updatedTime:1660397732e3}}},13154:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(66252);const o=(0,r.uE)('<h1 id="develco-emizb-132" tabindex="-1"><a class="header-anchor" href="#develco-emizb-132" aria-hidden="true">#</a> Develco EMIZB-132</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>EMIZB-132</td></tr><tr><td>Vendor</td><td>Develco</td></tr><tr><td>Description</td><td>Wattle AMS HAN power-meter sensor</td></tr><tr><td>Exposes</td><td>power, energy, current, voltage, current_phase_b, voltage_phase_b, current_phase_c, voltage_phase_c, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/EMIZB-132.jpg" alt="Develco EMIZB-132"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="configuring-interface-mode" tabindex="-1"><a class="header-anchor" href="#configuring-interface-mode" aria-hidden="true">#</a> Configuring interface mode</h3><p>In order to get measurements, after pairing the device you need to configure the interface mode.</p><p>To do this send to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> payload <code>{&quot;interface_mode&quot;: &quot;INTERFACE_MODE&quot;}</code>.</p><p>Possible values for <code>INTERFACE_MODE</code> are:</p><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code>norwegian_han</code></td><td>Norwegian HAN</td></tr><tr><td><code>norwegian_han_extra_load</code></td><td>Norwegian HAN – Enable extra load. This is need to enable Adion meter communication</td></tr><tr><td><code>aidon_meter</code></td><td>Aidon Meter supporting Norwegian HAN HW interface. SW protocol is Aidon Manufacture Specific</td></tr><tr><td><code>kaifa_and_kamstrup</code></td><td>Kaifa meter and Kamstrup meters running old firmware</td></tr></tbody></table><p>Example of payload: <code>{&quot;interface_mode&quot;: &quot;norwegian_han_extra_load&quot;}</code></p><h3 id="not-getting-measurements" tabindex="-1"><a class="header-anchor" href="#not-getting-measurements" aria-hidden="true">#</a> Not getting measurements</h3><p>In case you are not getting any measurements, it could be that your firmware is too old. You can ask Wattle for a replacement.</p><p>Related issues:</p><ul><li>https://github.com/Koenkk/zigbee-herdsman-converters/issues/974#issuecomment-590450035</li><li>https://github.com/dresden-elektronik/deconz-rest-plugin/issues/2127#issuecomment-587949747</li></ul><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',14),i=(0,r.Uk)("This device supports OTA updates, for more information see "),n=(0,r.Uk)("OTA updates"),d=(0,r.Uk)("."),c=(0,r._)("h2",{id:"options",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,r.Uk)(" Options")],-1),s=(0,r.Uk)("How to use device type specific configuration"),u=(0,r.uE)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-b-numeric" aria-hidden="true">#</a> Current_phase_b (numeric)</h3><p>Instantaneous measured electrical current on phase B. Value can be found in the published state on the <code>current_phase_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-b-numeric" aria-hidden="true">#</a> Voltage_phase_b (numeric)</h3><p>Measured electrical potential value on phase B. Value can be found in the published state on the <code>voltage_phase_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-c-numeric" aria-hidden="true">#</a> Current_phase_c (numeric)</h3><p>Instantaneous measured electrical current on phase C. Value can be found in the published state on the <code>current_phase_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-c-numeric" aria-hidden="true">#</a> Voltage_phase_c (numeric)</h3><p>Measured electrical potential value on phase C. Value can be found in the published state on the <code>voltage_phase_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),l={},h=(0,a(83744).Z)(l,[["render",function(e,t){const a=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[o,(0,r._)("p",null,[i,(0,r.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,r.w5)((()=>[n])),_:1}),d]),c,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.w5)((()=>[s])),_:1})])]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,r]of t)e[a]=r;return e}}}]);