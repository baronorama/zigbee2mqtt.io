"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38178],{93219:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-46483aef",path:"/devices/ZBMINI.html",title:"SONOFF ZBMINI control via MQTT",lang:"en-US",frontmatter:{title:"SONOFF ZBMINI control via MQTT",description:"Integrate your SONOFF ZBMINI via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-12-01T19:02:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device stuck",slug:"device-stuck",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZBMINI.md",git:{updatedTime:1660397732e3}}},49247:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});const a=(0,i(66252).uE)('<h1 id="sonoff-zbmini" tabindex="-1"><a class="header-anchor" href="#sonoff-zbmini" aria-hidden="true">#</a> SONOFF ZBMINI</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZBMINI</td></tr><tr><td>Vendor</td><td>SONOFF</td></tr><tr><td>Description</td><td>Zigbee two way smart switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZBMINI.jpg" alt="SONOFF ZBMINI"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-stuck" tabindex="-1"><a class="header-anchor" href="#device-stuck" aria-hidden="true">#</a> Device stuck</h3><p>In case of switching the coordinators a device may stuck in error state which is indicated by slowly blinking light (about 1 flash per second). To switch a device to a pairing mode power it off for 10 sec. After power on it enters pairing mode automatically.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),o={},d=(0,i(83744).Z)(o,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);