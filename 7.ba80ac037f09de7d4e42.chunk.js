webpackJsonp([7],{a2vl:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("WT6e"),_=function(){},a=u("zI1e"),t=u("rAqG"),o=u("c6Yh"),r=u("bZRR"),i=u("bfOx"),c=u("Xjw4"),g=function(){this.docs="import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { GalleryModule } from  '@ngx-gallery/core';\nimport { LightboxModule } from  '@ngx-gallery/lightbox';\nimport { GallerizeModule } from  '@ngx-gallery/gallerize';\n\n@NgModule({\n imports: [\n    BrowserAnimationsModule,\n    GalleryModule.forRoot(galleryConfig?),\n    GalleryLightbox.forRoot(lightboxConfig?),\n    GallerizeModule\n ]\n})",this.example='<div class="grid" gallerize innerHtml="{{htmlThatHasImages}}"></div>\n\x3c!-- OR --\x3e\n<div class="grid" gallerize="galleryId" forClass="lightbox-img">\n  <img class="lightbox-img" *ngFor="let item of items" src="{{item.src}}">\n</div>'},s=e._3({encapsulation:0,styles:[[""]],data:{}});function d(l){return e._28(2,[(l()(),e._5(0,0,null,null,12,"section",[],null,null,null,null,null)),(l()(),e._5(1,0,null,null,1,"h2",[["class","colorful"]],null,null,null,null,null)),(l()(),e._26(-1,null,["Installation"])),(l()(),e._5(3,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e._26(-1,null,["NPM"])),(l()(),e._5(5,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e._5(6,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e._26(-1,null,["$ npm install --save @ngx-gallery/core @ngx-gallery/lightbox @ngx-gallery/gallerize @angular/cdk"])),(l()(),e._5(8,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e._26(-1,null,["YARN"])),(l()(),e._5(10,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e._5(11,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e._26(-1,null,["$ yarn add @ngx-gallery/core @ngx-gallery/lightbox @ngx-gallery/gallerize @angular/cdk"])),(l()(),e._5(13,0,null,null,47,"section",[],null,null,null,null,null)),(l()(),e._5(14,0,null,null,1,"h2",[["class","colorful"]],null,null,null,null,null)),(l()(),e._26(-1,null,["Usage"])),(l()(),e._5(16,0,null,null,7,"div",[["class","usage-title"]],null,null,null,null,null)),(l()(),e._5(17,0,null,null,1,"span",[["class","section-number"]],null,null,null,null,null)),(l()(),e._26(-1,null,["1"])),(l()(),e._5(19,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e._26(-1,null,["Import "])),(l()(),e._5(21,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e._26(-1,null,["GalleryModule"])),(l()(),e._26(-1,null,[" in the root module"])),(l()(),e._5(24,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),e._5(25,0,null,null,1,"code",[["highlight",""]],null,null,null,null,null)),e._4(26,212992,null,0,r.a,[e.k,e.C,r.d],{highlight:[0,"highlight"],setCode:[1,"setCode"]},null),(l()(),e._5(27,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e._5(28,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e._5(29,0,null,null,6,"div",[["class","usage-title"]],null,null,null,null,null)),(l()(),e._5(30,0,null,null,1,"span",[["class","section-number"]],null,null,null,null,null)),(l()(),e._26(-1,null,["2"])),(l()(),e._5(32,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e._26(-1,null,["Import gallery styles "])),(l()(),e._5(34,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e._26(-1,null,["src/styles.scss"])),(l()(),e._5(36,0,null,null,3,"pre",[],null,null,null,null,null)),(l()(),e._5(37,0,null,null,2,"code",[["highlight",""]],null,null,null,null,null)),e._4(38,212992,null,0,r.a,[e.k,e.C,r.d],{highlight:[0,"highlight"]},null),(l()(),e._26(-1,null,["\n@import '~@ngx-gallery/core/styles/gallery';\n@import '~@ngx-gallery/core/styles/lightbox';\n    "])),(l()(),e._5(40,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e._5(41,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e._5(42,0,null,null,7,"div",[["class","usage-title"]],null,null,null,null,null)),(l()(),e._5(43,0,null,null,1,"span",[["class","section-number"]],null,null,null,null,null)),(l()(),e._26(-1,null,["3"])),(l()(),e._5(45,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e._26(-1,null,["Add "])),(l()(),e._5(47,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e._26(-1,null,["[gallerize]"])),(l()(),e._26(-1,null,[" on images container"])),(l()(),e._5(50,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),e._5(51,0,null,null,4,"pre",[],null,null,null,null,null)),(l()(),e._26(-1,null,["      "])),(l()(),e._5(53,0,null,null,1,"code",[["highlight",""]],null,null,null,null,null)),e._4(54,212992,null,0,r.a,[e.k,e.C,r.d],{highlight:[0,"highlight"],setCode:[1,"setCode"]},null),(l()(),e._26(-1,null,["\n    "])),(l()(),e._5(56,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e._26(-1,null,["See "])),(l()(),e._5(58,0,null,null,2,"a",[["routerLink","/auto-detect"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var _=!0;return"click"===n&&(_=!1!==e._17(l,59).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&_),_},null,null)),e._4(59,671744,null,0,i.n,[i.l,i.a,c.h],{routerLink:[0,"routerLink"]},null),(l()(),e._26(-1,null,["Auto-detect Example"]))],function(l,n){var u=n.component;l(n,26,0,"",u.docs),l(n,38,0,""),l(n,54,0,"",u.example),l(n,59,0,"/auto-detect")},function(l,n){l(n,58,0,e._17(n,59).target,e._17(n,59).href)})}var h=e._1("app-doc-gallerize",g,function(l){return e._28(0,[(l()(),e._5(0,0,null,null,1,"app-doc-gallerize",[],null,null,null,d,s)),e._4(1,49152,null,0,g,[],null,null)],null,null)},{},{},[]),b=u("XHgV"),m=u("Uo70"),p=u("9Sd6"),f=u("U/+3"),y=u("z7Rf"),x=u("ItHS"),j=u("OE0E"),k=u("1T37"),v=u("+j5Y"),z=u("8tOD"),C=u("NzW3"),M=u("TBIh"),A=u("704W"),G=u("j06o"),w=u("gsbp"),I=u("bkcK"),R=u("kJ/S"),O=u("+76Z"),q=u("vfax"),H=u("J/GH"),L=u("Sxl6"),N=u("RsmO"),S=u("+XD5"),B=u("GgCX"),E=u("zskB"),K=u("fAE3");u.d(n,"DocGallerizeModuleNgFactory",function(){return T});var T=e._2(_,[],function(l){return e._13([e._14(512,e.j,e.Y,[[8,[a.a,t.e,t.c,t.d,t.f,o.a,h]],[3,e.j],e.w]),e._14(4608,c.m,c.l,[e.t,[2,c.w]]),e._14(4608,b.a,b.a,[]),e._14(4608,m.c,m.c,[]),e._14(6144,p.b,null,[c.d]),e._14(4608,p.c,p.c,[[2,p.b]]),e._14(4608,f.i,f.i,[b.a]),e._14(4608,f.h,f.h,[f.i,e.y,c.d]),e._14(136192,f.d,f.b,[[3,f.d],c.d]),e._14(5120,f.l,f.k,[[3,f.l],[2,f.j],c.d]),e._14(5120,f.g,f.e,[[3,f.g],e.y,b.a]),e._14(5120,y.d,y.a,[[3,y.d],[2,x.c],j.c,[2,c.d]]),e._14(5120,k.d,k.b,[[3,k.d],e.y,b.a]),e._14(5120,k.g,k.f,[[3,k.g],b.a,e.y]),e._14(4608,v.g,v.g,[k.d,k.g,e.y,c.d]),e._14(5120,v.c,v.h,[[3,v.c],c.d]),e._14(4608,v.f,v.f,[k.g,c.d]),e._14(5120,v.d,v.k,[[3,v.d],c.d]),e._14(4608,v.a,v.a,[v.g,v.c,e.j,v.f,v.d,e.g,e.q,e.y,c.d]),e._14(5120,v.i,v.j,[v.a]),e._14(5120,z.c,z.d,[v.a]),e._14(4608,z.e,z.e,[v.a,e.q,[2,c.g],[2,z.b],z.c,[3,z.e],v.c]),e._14(5120,C.d,C.e,[[3,C.d],[2,C.c],[2,C.k],[2,C.b]]),e._14(5120,C.h,C.v,[[3,C.h],C.d]),e._14(5120,C.m,C.w,[[3,C.m],e.y,e.A,c.d]),e._14(4608,C.n,C.n,[C.h,C.m]),e._14(5120,C.p,C.o,[[3,C.p],C.m,C.h]),e._14(5120,C.t,C.r,[[3,C.t]]),e._14(4608,C.s,C.s,[[2,C.t],[2,C.q],e.A,[2,C.l]]),e._14(5120,e.b,function(l,n){return[C.u(l,n)]},[c.d,e.A]),e._14(512,c.c,c.c,[]),e._14(512,i.o,i.o,[[2,i.t],[2,i.l]]),e._14(512,b.b,b.b,[]),e._14(512,M.d,M.d,[]),e._14(512,A.b,A.b,[]),e._14(512,p.a,p.a,[]),e._14(256,m.d,!0,[]),e._14(512,m.g,m.g,[[2,m.d]]),e._14(512,G.b,G.b,[]),e._14(512,m.j,m.j,[]),e._14(512,f.a,f.a,[]),e._14(512,w.c,w.c,[]),e._14(512,y.c,y.c,[]),e._14(512,I.g,I.g,[]),e._14(512,k.c,k.c,[]),e._14(512,v.e,v.e,[]),e._14(512,z.i,z.i,[]),e._14(512,R.h,R.h,[]),e._14(512,O.a,O.a,[]),e._14(512,q.a,q.a,[]),e._14(512,r.b,r.b,[]),e._14(512,C.j,C.j,[]),e._14(512,H.b,H.b,[]),e._14(512,L.a,L.a,[]),e._14(512,N.a,N.a,[[2,C.q],e.A]),e._14(512,S.b,S.b,[]),e._14(512,B.c,B.c,[]),e._14(512,E.b,E.b,[]),e._14(512,K.a,K.a,[]),e._14(512,_,_,[]),e._14(256,R.a,!1,[]),e._14(1024,i.j,function(){return[[{path:"",component:g}]]},[])])})}});