import{_ as u}from"./nuxt-link.O0B2tOti.js";import{_ as r,o as i,c as d,a as e,d as n,s as m,b as o,w as l}from"./entry.DOH859EV.js";const p={name:"Nav",data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen}}},f={class:"navbar"},g=e("i",{class:"fa fa-bars"},null,-1);function x(v,t,M,b,_,s){const a=u;return i(),d("div",null,[e("nav",f,[e("div",{class:"navbar-toggle",onClick:t[0]||(t[0]=(...c)=>s.toggleMenu&&s.toggleMenu(...c))},[g,n(" menu ")]),e("ul",{class:m({active:_.isMenuOpen})},[e("li",null,[o(a,{to:"/"},{default:l(()=>[n("Home")]),_:1})]),e("li",null,[o(a,{to:"/about"},{default:l(()=>[n("About")]),_:1})])],2)])])}const N=r(p,[["render",x]]);export{N as _};
