"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[53017],{99407:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-140f6cd8",path:"/devices/AV2010_14.html",title:"SMaBiT (Bitron Video) AV2010/14 control via MQTT",lang:"en-US",frontmatter:{title:"SMaBiT (Bitron Video) AV2010/14 control via MQTT",description:"Integrate your SMaBiT (Bitron Video) AV2010/14 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-09-30T19:53:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/AV2010_14.md",git:{updatedTime:1660397732e3}}},34128:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var a=i(66252);const o=(0,a.uE)('<h1 id="smabit-bitron-video-av2010-14" tabindex="-1"><a class="header-anchor" href="#smabit-bitron-video-av2010-14" aria-hidden="true">#</a> SMaBiT (Bitron Video) AV2010/14</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>AV2010/14</td></tr><tr><td>Vendor</td><td>SMaBiT (Bitron Video)</td></tr><tr><td>Description</td><td>Curtain motion detector</td></tr><tr><td>Exposes</td><td>occupancy, battery_low, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/AV2010-14.jpg" alt="SMaBiT (Bitron Video) AV2010/14"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the SMaBiT AV2010/14 sensor to Zigbee2MQTT by holding it close to the coordinator and pressing the indicator light/button at the front for about 10 seconds. The indicator light/button will flash red once to indicate it is in pairing mode. The SMaBiT AV2010/22 sensor should now be visible in the Zigbee2MQTT Devices overview.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',6),d=(0,a.Uk)("How to use device type specific configuration"),r=(0,a.uE)('<ul><li><code>occupancy_timeout</code>: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),n={},c=(0,i(83744).Z)(n,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[d])),_:1})])]),r],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);