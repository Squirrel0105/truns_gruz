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
exports.id = "app/api/form/route";
exports.ids = ["app/api/form/route"];
exports.modules = {

/***/ "(rsc)/./app/DB/db.js":
/*!**********************!*\
  !*** ./app/DB/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n\nconst db = mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool({\n    host: 'localhost',\n    port: 3306,\n    user: 'root',\n    password: '',\n    database: 'truns_gruz'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvREIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUM7QUFFNUIsTUFBTUMsS0FBS0Qsc0RBQWdCLENBQUM7SUFDakNHLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLFVBQVU7SUFDVkMsVUFBVTtBQUNaLEdBQUciLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWlsYW5hXFxPbmVEcml2ZVxcRGVza3RvcFxc0LrRg9GA0YHQsNGHXFx0cnVuc19ncnV6XFxhcHBcXERCXFxkYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgcG9ydDogMzMwNixcclxuICB1c2VyOiAncm9vdCcsXHJcbiAgcGFzc3dvcmQ6ICcnLFxyXG4gIGRhdGFiYXNlOiAndHJ1bnNfZ3J1eicsXHJcbn0pO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJteXNxbCIsImRiIiwiY3JlYXRlUG9vbCIsImhvc3QiLCJwb3J0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/DB/db.js\n");

/***/ }),

/***/ "(rsc)/./app/api/form/route.js":
/*!*******************************!*\
  !*** ./app/api/form/route.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _DB_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DB/db */ \"(rsc)/./app/DB/db.js\");\n\n\nasync function POST(req) {\n    try {\n        const data = await req.json();\n        const { pickupAddress, deliveryAddress, transportType, loaders, phone, userId, totalPrice } = data;\n        await _DB_db__WEBPACK_IMPORTED_MODULE_1__.db.query(\"INSERT INTO orders (pickup_address, delivery_address, transport_type, loaders, phone, user_id, total_price) VALUES (?, ?, ?, ?, ?, ?, ?)\", [\n            pickupAddress,\n            deliveryAddress,\n            transportType,\n            loaders,\n            phone,\n            userId,\n            totalPrice\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Заявка успешно сохранена\"\n        });\n    } catch (error) {\n        console.error(\"Ошибка при сохранении заказа:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Ошибка при сохранении\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Zvcm0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ1Y7QUFFMUIsZUFBZUUsS0FBS0MsR0FBRztJQUM1QixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCLE1BQU0sRUFDSkMsYUFBYSxFQUNiQyxlQUFlLEVBQ2ZDLGFBQWEsRUFDYkMsT0FBTyxFQUNQQyxLQUFLLEVBQ0xDLE1BQU0sRUFDTkMsVUFBVSxFQUNYLEdBQUdSO1FBRUosTUFBTUgsc0NBQUVBLENBQUNZLEtBQUssQ0FDWiw0SUFDQTtZQUNFUDtZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztTQUNEO1FBR0gsT0FBT1oscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFUyxTQUFTO1FBQTJCO0lBQ2pFLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxPQUFPZixxREFBWUEsQ0FBQ0ssSUFBSSxDQUN0QjtZQUFFVSxPQUFPO1FBQXdCLEdBQ2pDO1lBQUVFLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1pbGFuYVxcT25lRHJpdmVcXERlc2t0b3BcXNC60YPRgNGB0LDRh1xcdHJ1bnNfZ3J1elxcYXBwXFxhcGlcXGZvcm1cXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi9EQi9kYlwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBwaWNrdXBBZGRyZXNzLFxyXG4gICAgICBkZWxpdmVyeUFkZHJlc3MsXHJcbiAgICAgIHRyYW5zcG9ydFR5cGUsXHJcbiAgICAgIGxvYWRlcnMsXHJcbiAgICAgIHBob25lLFxyXG4gICAgICB1c2VySWQsXHJcbiAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICB9ID0gZGF0YTtcclxuXHJcbiAgICBhd2FpdCBkYi5xdWVyeShcclxuICAgICAgXCJJTlNFUlQgSU5UTyBvcmRlcnMgKHBpY2t1cF9hZGRyZXNzLCBkZWxpdmVyeV9hZGRyZXNzLCB0cmFuc3BvcnRfdHlwZSwgbG9hZGVycywgcGhvbmUsIHVzZXJfaWQsIHRvdGFsX3ByaWNlKSBWQUxVRVMgKD8sID8sID8sID8sID8sID8sID8pXCIsXHJcbiAgICAgIFtcclxuICAgICAgICBwaWNrdXBBZGRyZXNzLFxyXG4gICAgICAgIGRlbGl2ZXJ5QWRkcmVzcyxcclxuICAgICAgICB0cmFuc3BvcnRUeXBlLFxyXG4gICAgICAgIGxvYWRlcnMsXHJcbiAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgIF1cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCLQl9Cw0Y/QstC60LAg0YPRgdC/0LXRiNC90L4g0YHQvtGF0YDQsNC90LXQvdCwXCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLQntGI0LjQsdC60LAg0L/RgNC4INGB0L7RhdGA0LDQvdC10L3QuNC4INC30LDQutCw0LfQsDpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiBcItCe0YjQuNCx0LrQsCDQv9GA0Lgg0YHQvtGF0YDQsNC90LXQvdC40LhcIiB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJkYiIsIlBPU1QiLCJyZXEiLCJkYXRhIiwianNvbiIsInBpY2t1cEFkZHJlc3MiLCJkZWxpdmVyeUFkZHJlc3MiLCJ0cmFuc3BvcnRUeXBlIiwibG9hZGVycyIsInBob25lIiwidXNlcklkIiwidG90YWxQcmljZSIsInF1ZXJ5IiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/form/route.js\n");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fform%2Froute&page=%2Fapi%2Fform%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fform%2Froute.js&appDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fform%2Froute&page=%2Fapi%2Fform%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fform%2Froute.js&appDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Milana_OneDrive_Desktop_truns_gruz_app_api_form_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/form/route.js */ \"(rsc)/./app/api/form/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/form/route\",\n        pathname: \"/api/form\",\n        filename: \"route\",\n        bundlePath: \"app/api/form/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Milana\\\\OneDrive\\\\Desktop\\\\курсач\\\\truns_gruz\\\\app\\\\api\\\\form\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Milana_OneDrive_Desktop_truns_gruz_app_api_form_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZmb3JtJTJGcm91dGUmcGFnZT0lMkZhcGklMkZmb3JtJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZm9ybSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNaWxhbmElNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUMlRDAlQkElRDElODMlRDElODAlRDElODElRDAlQjAlRDElODclNUN0cnVuc19ncnV6JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNNaWxhbmElNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUMlRDAlQkElRDElODMlRDElODAlRDElODElRDAlQjAlRDElODclNUN0cnVuc19ncnV6JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNrQztBQUMvRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTWlsYW5hXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxc0LrRg9GA0YHQsNGHXFxcXHRydW5zX2dydXpcXFxcYXBwXFxcXGFwaVxcXFxmb3JtXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9mb3JtL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZm9ybVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZm9ybS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXE1pbGFuYVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXNC60YPRgNGB0LDRh1xcXFx0cnVuc19ncnV6XFxcXGFwcFxcXFxhcGlcXFxcZm9ybVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fform%2Froute&page=%2Fapi%2Fform%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fform%2Froute.js&appDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/lru-cache","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fform%2Froute&page=%2Fapi%2Fform%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fform%2Froute.js&appDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMilana%5COneDrive%5CDesktop%5C%D0%BA%D1%83%D1%80%D1%81%D0%B0%D1%87%5Ctruns_gruz&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();