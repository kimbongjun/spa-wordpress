webpackHotUpdate("bongjour",{

/***/ "./packages/mars-theme/src/components/slider.js":
/*!******************************************************!*\
  !*** ./packages/mars-theme/src/components/slider.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _frontity_hooks_use_in_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/hooks/use-in-view */ \"./node_modules/@frontity/hooks/use-in-view.ts\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.esm.js\");\n/* harmony import */ var _assets_css_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/css/swiper-bundle.min.css */ \"./packages/mars-theme/src/assets/css/swiper-bundle.min.css\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading-skeleton */ \"./node_modules/react-loading-skeleton/lib/index.js\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__);\n// install Swiper components\nswiper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_2__[\"Navigation\"],swiper__WEBPACK_IMPORTED_MODULE_2__[\"Pagination\"],swiper__WEBPACK_IMPORTED_MODULE_2__[\"Scrollbar\"],swiper__WEBPACK_IMPORTED_MODULE_2__[\"A11y\"]]);var Slider=()=>{var[loading,setLoading]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);var[users,setUsers]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{Object(frontity__WEBPACK_IMPORTED_MODULE_6__[\"fetch\"])(\"https://design.classys.com/wp-json/acf/v2/options/slide\").then(response=>response.json()).then(users=>{setUsers(users);setLoading(false);});},[]);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"Global\"],{styles:/*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_assets_css_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\";label:Slider;\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3Jrc3BhY2VcXExPQ0FMLVdPUkRQUkVTU1xcZnJvbnRpdHlcXGJvbmdqb3VyXFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxzbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JzQiIsImZpbGUiOiJEOlxcd29ya3NwYWNlXFxMT0NBTC1XT1JEUFJFU1NcXGZyb250aXR5XFxib25nam91clxccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUluVmlldyBmcm9tIFwiQGZyb250aXR5L2hvb2tzL3VzZS1pbi12aWV3XCI7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeSB9IGZyb20gXCJzd2lwZXJcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IHN3aXBlckNzcyBmcm9tIFwiLi4vYXNzZXRzL2Nzcy9zd2lwZXItYnVuZGxlLm1pbi5jc3NcIjtcclxuaW1wb3J0IHsgR2xvYmFsLCBjc3MsIGNvbm5lY3QsIHN0eWxlZCwgZmV0Y2ggfSBmcm9tIFwiZnJvbnRpdHlcIjtcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XHJcbi8vIGluc3RhbGwgU3dpcGVyIGNvbXBvbmVudHNcclxuU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb24sIFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeV0pO1xyXG5cclxuY29uc3QgU2xpZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCJodHRwczovL2Rlc2lnbi5jbGFzc3lzLmNvbS93cC1qc29uL2FjZi92Mi9vcHRpb25zL3NsaWRlXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgICBzZXRVc2Vycyh1c2Vycyk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2Nzcyhzd2lwZXJDc3MpfSAvPlxyXG4gICAgICA8U3dpcGVyXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICBuYXZpZ2F0aW9uXHJcbiAgICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cclxuICAgICAgICBzY3JvbGxiYXI9e3sgZHJhZ2dhYmxlOiB0cnVlIH19XHJcbiAgICAgICAgb25Td2lwZXI9eyhzd2lwZXIpID0+IGNvbnNvbGUubG9nKHN3aXBlcil9XHJcbiAgICAgICAgb25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coXCJzbGlkZSBjaGFuZ2VcIil9XHJcbiAgICAgID5cclxuICAgICAgICB7dXNlcnMuc2xpZGUubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJzd2lwZXItc2xpZGVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0udXJsfSAvPlxyXG4gICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Td2lwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChTbGlkZXIpO1xyXG4iXX0= */\"))}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__[\"Swiper\"],{slidesPerView:1,navigation:true,pagination:{clickable:true},scrollbar:{draggable:true},onSwiper:swiper=>console.log(swiper),onSlideChange:()=>console.log(\"slide change\")},users.slide.map((item,i)=>Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(swiper_react__WEBPACK_IMPORTED_MODULE_3__[\"SwiperSlide\"],{key:item.id,className:\"swiper-slide\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"img\",{src:item.url})))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(Slider));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3NsaWRlci5qcz84MmZmIl0sIm5hbWVzIjpbIlN3aXBlckNvcmUiLCJ1c2UiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsIlNjcm9sbGJhciIsIkExMXkiLCJTbGlkZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwidXNlcnMiLCJzZXRVc2VycyIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNzcyIsInN3aXBlckNzcyIsImNsaWNrYWJsZSIsImRyYWdnYWJsZSIsInN3aXBlciIsImNvbnNvbGUiLCJsb2ciLCJzbGlkZSIsIm1hcCIsIml0ZW0iLCJpIiwiaWQiLCJ1cmwiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0FBLDhDQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDQyxpREFBRCxDQUFhQyxpREFBYixDQUF5QkMsZ0RBQXpCLENBQW9DQywyQ0FBcEMsQ0FBZixFQUVBLEdBQU1DLE9BQU0sQ0FBRyxJQUFNLENBQ25CLEdBQU0sQ0FBQ0MsT0FBRCxDQUFVQyxVQUFWLEVBQXdCQyxzREFBUSxDQUFDLElBQUQsQ0FBdEMsQ0FDQSxHQUFNLENBQUNDLEtBQUQsQ0FBUUMsUUFBUixFQUFvQkYsc0RBQVEsQ0FBQyxFQUFELENBQWxDLENBRUFHLHVEQUFTLENBQUMsSUFBTSxDQUNkQyxzREFBSyxDQUFDLHlEQUFELENBQUwsQ0FDR0MsSUFESCxDQUNTQyxRQUFELEVBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUR0QixFQUVHRixJQUZILENBRVNKLEtBQUQsRUFBVyxDQUNmQyxRQUFRLENBQUNELEtBQUQsQ0FBUixDQUNBRixVQUFVLENBQUMsS0FBRCxDQUFWLENBQ0QsQ0FMSCxFQU1ELENBUFEsQ0FPTixFQVBNLENBQVQsQ0FRQSxNQUNFLHNIQUNFLDBEQUFDLG9EQUFELEVBQVEsTUFBTSxjQUFFUyx5REFBRyxDQUFDQyx5RUFBRCwrL0VBQW5CLEVBREYsQ0FFRSwwREFBQyxtREFBRCxFQUNFLGFBQWEsQ0FBRSxDQURqQixDQUVFLFVBQVUsS0FGWixDQUdFLFVBQVUsQ0FBRSxDQUFFQyxTQUFTLENBQUUsSUFBYixDQUhkLENBSUUsU0FBUyxDQUFFLENBQUVDLFNBQVMsQ0FBRSxJQUFiLENBSmIsQ0FLRSxRQUFRLENBQUdDLE1BQUQsRUFBWUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosQ0FMeEIsQ0FNRSxhQUFhLENBQUUsSUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixDQU52QixFQVFHYixLQUFLLENBQUNjLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixDQUFDQyxJQUFELENBQU9DLENBQVAsR0FDZiwwREFBQyx3REFBRCxFQUFhLEdBQUcsQ0FBRUQsSUFBSSxDQUFDRSxFQUF2QixDQUEyQixTQUFTLENBQUMsY0FBckMsRUFDRSxpRUFBSyxHQUFHLENBQUVGLElBQUksQ0FBQ0csR0FBZixFQURGLENBREQsQ0FSSCxDQUZGLENBREYsQ0FtQkQsQ0EvQkQsQ0FpQ2VDLHVIQUFPLENBQUN4QixNQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9zbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlSW5WaWV3IGZyb20gXCJAZnJvbnRpdHkvaG9va3MvdXNlLWluLXZpZXdcIjtcclxuaW1wb3J0IFN3aXBlckNvcmUsIHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5IH0gZnJvbSBcInN3aXBlclwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgc3dpcGVyQ3NzIGZyb20gXCIuLi9hc3NldHMvY3NzL3N3aXBlci1idW5kbGUubWluLmNzc1wiO1xyXG5pbXBvcnQgeyBHbG9iYWwsIGNzcywgY29ubmVjdCwgc3R5bGVkLCBmZXRjaCB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcInJlYWN0LWxvYWRpbmctc2tlbGV0b25cIjtcclxuLy8gaW5zdGFsbCBTd2lwZXIgY29tcG9uZW50c1xyXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5XSk7XHJcblxyXG5jb25zdCBTbGlkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcImh0dHBzOi8vZGVzaWduLmNsYXNzeXMuY29tL3dwLWpzb24vYWNmL3YyL29wdGlvbnMvc2xpZGVcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICAgIHNldFVzZXJzKHVzZXJzKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsIHN0eWxlcz17Y3NzKHN3aXBlckNzcyl9IC8+XHJcbiAgICAgIDxTd2lwZXJcclxuICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxyXG4gICAgICAgIG5hdmlnYXRpb25cclxuICAgICAgICBwYWdpbmF0aW9uPXt7IGNsaWNrYWJsZTogdHJ1ZSB9fVxyXG4gICAgICAgIHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cclxuICAgICAgICBvblN3aXBlcj17KHN3aXBlcikgPT4gY29uc29sZS5sb2coc3dpcGVyKX1cclxuICAgICAgICBvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZyhcInNsaWRlIGNoYW5nZVwiKX1cclxuICAgICAgPlxyXG4gICAgICAgIHt1c2Vycy5zbGlkZS5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cInN3aXBlci1zbGlkZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbS51cmx9IC8+XHJcbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N3aXBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFNsaWRlcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/slider.js\n");

/***/ })

})