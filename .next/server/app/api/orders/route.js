/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/orders/route";
exports.ids = ["app/api/orders/route"];
exports.modules = {

/***/ "(rsc)/./app/DB/db.js":
/*!**********************!*\
  !*** ./app/DB/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n\nconst db = mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool({\n    host: 'localhost',\n    port: 3306,\n    user: 'root',\n    password: '',\n    database: 'truns_gruz'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvREIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUM7QUFFNUIsTUFBTUMsS0FBS0Qsc0RBQWdCLENBQUM7SUFDakNHLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLFVBQVU7SUFDVkMsVUFBVTtBQUNaLEdBQUciLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWlsYW5hXFxPbmVEcml2ZVxcRGVza3RvcFxc0LrRg9GA0YHQsNGHXFx0cnVuc19ncnV6XFxhcHBcXERCXFxkYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgcG9ydDogMzMwNixcclxuICB1c2VyOiAncm9vdCcsXHJcbiAgcGFzc3dvcmQ6ICcnLFxyXG4gIGRhdGFiYXNlOiAndHJ1bnNfZ3J1eicsXHJcbn0pO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJteXNxbCIsImRiIiwiY3JlYXRlUG9vbCIsImhvc3QiLCJwb3J0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/DB/db.js\n");

/***/ }),

/***/ "(rsc)/./app/api/orders/route.js":
/*!*********************************!*\
  !*** ./app/api/orders/route.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _DB_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DB/db */ \"(rsc)/./app/DB/db.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const userId = searchParams.get('userId');\n    try {\n        const [orders] = await _DB_db__WEBPACK_IMPORTED_MODULE_0__.db.query('SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC', [\n            userId\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(orders);\n    } catch (error) {\n        console.error('Ошибка получения заказов:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: 'Ошибка сервера'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL29yZGVycy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFDVTtBQUVwQyxlQUFlRSxJQUFJQyxHQUFHO0lBQzNCLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsSUFBSUcsR0FBRztJQUN4QyxNQUFNQyxTQUFTSCxhQUFhSSxHQUFHLENBQUM7SUFFaEMsSUFBSTtRQUNGLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLE1BQU1ULHNDQUFFQSxDQUFDVSxLQUFLLENBQzdCLG1FQUNBO1lBQUNIO1NBQU87UUFFVixPQUFPTixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDRjtJQUMzQixFQUFFLE9BQU9HLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsT0FBT1gscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWlCLEdBQUc7WUFBRUUsUUFBUTtRQUFJO0lBQ3RFO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWlsYW5hXFxPbmVEcml2ZVxcRGVza3RvcFxc0LrRg9GA0YHQsNGHXFx0cnVuc19ncnV6XFxhcHBcXGFwaVxcb3JkZXJzXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uL0RCL2RiJztcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEpIHtcclxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcclxuICBjb25zdCB1c2VySWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCd1c2VySWQnKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IFtvcmRlcnNdID0gYXdhaXQgZGIucXVlcnkoXHJcbiAgICAgICdTRUxFQ1QgKiBGUk9NIG9yZGVycyBXSEVSRSB1c2VyX2lkID0gPyBPUkRFUiBCWSBjcmVhdGVkX2F0IERFU0MnLFxyXG4gICAgICBbdXNlcklkXVxyXG4gICAgKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihvcmRlcnMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LAg0L/QvtC70YPRh9C10L3QuNGPINC30LDQutCw0LfQvtCyOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAn0J7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwJyB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZGIiLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJyZXEiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJ1c2VySWQiLCJnZXQiLCJvcmRlcnMiLCJxdWVyeSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/orders/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$":
/*!****************************************************!*\
  !*** ./node_modules/mysql2/lib/ sync ^cardinal.*$ ***!
  \****************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.js&appDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.js&appDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Milana_OneDrive_Desktop_truns_gruz_app_api_orders_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/orders/route.js */ \"(rsc)/./app/api/orders/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/orders/route\",\n        pathname: \"/api/orders\",\n        filename: \"route\",\n        bundlePath: \"app/api/orders/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Milana\\\\OneDrive\\\\Desktop\\\\курсач\\\\truns_gruz\\\\app\\\\api\\\\orders\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Milana_OneDrive_Desktop_truns_gruz_app_api_orders_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZvcmRlcnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm9yZGVycyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm9yZGVycyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNaWxhbmElNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUMlRDAlQkElRDElODMlRDElODAlRDElODElRDAlQjAlRDElODclNUN0cnVuc19ncnV6JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNNaWxhbmElNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUMlRDAlQkElRDElODMlRDElODAlRDElODElRDAlQjAlRDElODclNUN0cnVuc19ncnV6JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNvQztBQUNqSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTWlsYW5hXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxc0LrRg9GA0YHQsNGHXFxcXHRydW5zX2dydXpcXFxcYXBwXFxcXGFwaVxcXFxvcmRlcnNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL29yZGVycy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL29yZGVyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvb3JkZXJzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcTWlsYW5hXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxc0LrRg9GA0YHQsNGHXFxcXHRydW5zX2dydXpcXFxcYXBwXFxcXGFwaVxcXFxvcmRlcnNcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.js&appDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/lru-cache","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.js&appDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();