"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[74047],{37626:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-2b3cb550",path:"/devices/HS2AQ-EM.html",title:"HEIMAN HS2AQ-EM control via MQTT",lang:"en-US",frontmatter:{title:"HEIMAN HS2AQ-EM control via MQTT",description:"Integrate your HEIMAN HS2AQ-EM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-09-30T20:52:56.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Pm25 (numeric)",slug:"pm25-numeric",children:[]},{level:3,title:"Hcho (numeric)",slug:"hcho-numeric",children:[]},{level:3,title:"Voc (numeric)",slug:"voc-numeric",children:[]},{level:3,title:"Aqi (numeric)",slug:"aqi-numeric",children:[]},{level:3,title:"Pm10 (numeric)",slug:"pm10-numeric",children:[]},{level:3,title:"Battery_state (enum)",slug:"battery-state-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HS2AQ-EM.md",git:{updatedTime:1660397732e3}}},2032:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var a=i(66252);const r=(0,a.uE)('<h1 id="heiman-hs2aq-em" tabindex="-1"><a class="header-anchor" href="#heiman-hs2aq-em" aria-hidden="true">#</a> HEIMAN HS2AQ-EM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HS2AQ-EM</td></tr><tr><td>Vendor</td><td>HEIMAN</td></tr><tr><td>Description</td><td>Air quality monitor</td></tr><tr><td>Exposes</td><td>battery, temperature, humidity, pm25, hcho, voc, aqi, pm10, battery_state, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/HS2AQ-EM.jpg" alt="HEIMAN HS2AQ-EM"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),o=(0,a.Uk)("How to use device type specific configuration"),d=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="pm25-numeric" tabindex="-1"><a class="header-anchor" href="#pm25-numeric" aria-hidden="true">#</a> Pm25 (numeric)</h3><p>Measured PM2.5 (particulate matter) concentration. Value can be found in the published state on the <code>pm25</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>µg/m³</code>.</p><h3 id="hcho-numeric" tabindex="-1"><a class="header-anchor" href="#hcho-numeric" aria-hidden="true">#</a> Hcho (numeric)</h3><p>Measured Hcho value. Value can be found in the published state on the <code>hcho</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mg/m³</code>.</p><h3 id="voc-numeric" tabindex="-1"><a class="header-anchor" href="#voc-numeric" aria-hidden="true">#</a> Voc (numeric)</h3><p>Measured VOC value. Value can be found in the published state on the <code>voc</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppb</code>.</p><h3 id="aqi-numeric" tabindex="-1"><a class="header-anchor" href="#aqi-numeric" aria-hidden="true">#</a> Aqi (numeric)</h3><p>Air quality index. Value can be found in the published state on the <code>aqi</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="pm10-numeric" tabindex="-1"><a class="header-anchor" href="#pm10-numeric" aria-hidden="true">#</a> Pm10 (numeric)</h3><p>Measured PM10 (particulate matter) concentration. Value can be found in the published state on the <code>pm10</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>µg/m³</code>.</p><h3 id="battery-state-enum" tabindex="-1"><a class="header-anchor" href="#battery-state-enum" aria-hidden="true">#</a> Battery_state (enum)</h3><p>Value can be found in the published state on the <code>battery_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_charging</code>, <code>charging</code>, <code>charged</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),c={},n=(0,i(83744).Z)(c,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[o])),_:1})])]),d],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);