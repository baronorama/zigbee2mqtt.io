"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84068],{55197:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-662b9d72",path:"/devices/EZ200.html",title:"Evanell EZ200 control via MQTT",lang:"en-US",frontmatter:{title:"Evanell EZ200 control via MQTT",description:"Integrate your Evanell EZ200 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-01-31T17:42:44.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/EZ200.md",git:{updatedTime:1660397732e3}}},40059:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const d=(0,o(66252).uE)('<h1 id="evanell-ez200" tabindex="-1"><a class="header-anchor" href="#evanell-ez200" aria-hidden="true">#</a> Evanell EZ200</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>EZ200</td></tr><tr><td>Vendor</td><td>Evanell</td></tr><tr><td>Description</td><td>Thermostatic radiator valve</td></tr><tr><td>Exposes</td><td>lock (state), battery, climate (current_heating_setpoint, local_temperature, system_mode), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/EZ200.jpg" alt="Evanell EZ200"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>auto</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),i={},a=(0,o(83744).Z)(i,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);