module.exports = {

"[project]/src/components/ServiceCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ServiceCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ServiceCard({ id, title, description, image, category, price, provider, rating, reviewsCount }) {
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // استخدام صورة احتياطية عند فشل تحميل الصورة الأصلية
    const handleImageError = ()=>{
        setImageError(true);
    };
    // توليد صورة احتياطية مع نص وخلفية ملونة
    const generatePlaceholder = (title, category)=>{
        // تحديد لون الخلفية بناءً على الفئة
        const colors = {
            'توليد صور': 'from-pink-500 to-rose-500',
            'كتابة محتوى': 'from-blue-500 to-indigo-500',
            'الذكاء الاصطناعي': 'from-purple-500 to-violet-500',
            'تحليل بيانات': 'from-green-500 to-emerald-500',
            'توليد فيديو': 'from-red-500 to-orange-500',
            'توليد صوت': 'from-yellow-500 to-amber-500',
            'برمجة': 'from-cyan-500 to-blue-500',
            'default': 'from-indigo-500 to-purple-500'
        };
        const gradientColor = colors[category] || colors['default'];
        return `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" class="start" />
            <stop offset="100%" class="end" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
        <text x="50%" y="50%" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">${title}</text>
      </svg>
    `;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 w-full overflow-hidden",
                children: [
                    !imageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: image,
                        alt: title,
                        fill: true,
                        className: "object-cover rounded-t-lg transition-transform group-hover:scale-105",
                        onError: handleImageError
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceCard.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full h-full flex items-center justify-center bg-gradient-to-br ${category === 'توليد صور' ? 'from-pink-500 to-rose-500' : category === 'كتابة محتوى' ? 'from-blue-500 to-indigo-500' : category === 'الذكاء الاصطناعي' ? 'from-purple-500 to-violet-500' : category === 'تحليل بيانات' ? 'from-green-500 to-emerald-500' : category === 'توليد فيديو' ? 'from-red-500 to-orange-500' : category === 'توليد صوت' ? 'from-yellow-500 to-amber-500' : category === 'برمجة' ? 'from-cyan-500 to-blue-500' : 'from-indigo-500 to-purple-500'} rounded-t-lg`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white font-bold text-xl px-4 text-center",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceCard.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceCard.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 right-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
                            children: category
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceCard.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceCard.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServiceCard.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/services/${id}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-medium text-gray-900 line-clamp-1 group-hover:text-indigo-600 transition-colors",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceCard.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceCard.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-gray-500 line-clamp-2",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceCard.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    provider && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/providers/${provider.id}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-8 w-8 rounded-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: provider.image || '/images/avatar.jpg',
                                            alt: provider.name,
                                            fill: true,
                                            className: "object-cover",
                                            onError: (e)=>{
                                                const target = e.target;
                                                target.src = '/images/avatar.jpg';
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceCard.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceCard.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceCard.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mr-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/providers/${provider.id}`,
                                        className: "text-sm font-medium text-gray-900 hover:text-indigo-600",
                                        children: provider.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    rating !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-sm text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mr-1",
                                                children: Array.from({
                                                    length: 5
                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: `h-3.5 w-3.5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`,
                                                        fill: "currentColor",
                                                        viewBox: "0 0 20 20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceCard.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceCard.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    rating,
                                                    " ",
                                                    reviewsCount && `(${reviewsCount})`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServiceCard.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ServiceCard.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServiceCard.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServiceCard.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-medium text-gray-900",
                                children: [
                                    price,
                                    " ر.س"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServiceCard.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/service-request?service=${id}`,
                                className: "inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                children: "طلب الخدمة"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceCard.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ServiceCard.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServiceCard.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServiceCard.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
// دالة لتحويل معرّف التصنيف إلى اسم مقروء
function getCategoryName(category) {
    const categoryNames = {
        'image-generation': 'توليد صور',
        'video-generation': 'توليد فيديو',
        'audio-generation': 'توليد صوت',
        'text-generation': 'توليد نصوص',
        'article-generation': 'كتابة مقالات',
        'static-story': 'قصص ثابتة',
        'animated-story': 'قصص متحركة',
        'research-generation': 'أبحاث',
        'deep-research': 'أبحاث متعمقة',
        'website-app': 'مواقع وتطبيقات',
        'code-generation': 'برمجة وأكواد',
        'model-training': 'تدريب نماذج',
        'comfy-ui': 'Comfy UI'
    };
    return categoryNames[category] || category;
}
// دالة لاختيار الأيقونة المناسبة لكل تصنيف
function getCategoryIcon(category) {
    // استخدام مسارات SVG لأيقونات Hero Icons
    const icons = {
        'image-generation': 'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
        'video-generation': 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z',
        'audio-generation': 'M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z',
        'text-generation': 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
        'article-generation': 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z',
        'research-generation': 'M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.773 4.773zM21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        'website-app': 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
        'code-generation': 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
        'model-training': 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
        'static-story': 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
        'animated-story': 'M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0 .621.504 1.125 1.125 1.125m-1.125 0c0 .621-.504 1.125-1.125 1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5M7.125 14.25v1.5m0-1.5c0-.621.504-1.125 1.125-1.125M7.125 14.25C6.504 14.25 6 14.754 6 15.375v1.5m4.125-3.75C9.504 13.125 9 13.629 9 14.25m0-1.125c0 .621-.504 1.125-1.125 1.125m1.125-1.125v1.5c0 .621.504 1.125 1.125 1.125m-1.125 0c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0c0 .621-.504 1.125-1.125 1.125M13.125 12h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125M13.125 12c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125m0-3.75c.621 0 1.125.504 1.125 1.125M13.125 16.5h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125M13.125 16.5c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125m0-3.75c.621 0 1.125.504 1.125 1.125m0 0c0 .621-.504 1.125-1.125 1.125m-11.25-1.125c0 .621-.504 1.125-1.125 1.125m0-1.125c0-.621.504-1.125 1.125-1.125m0 1.125v1.5c0 .621-.504 1.125-1.125 1.125m12-2.25c.621 0 1.125.504 1.125 1.125m0 1.5c0 .621.504 1.125 1.125 1.125M18 5.625c0 .621.504 1.125 1.125 1.125m0-1.125c0-.621.504-1.125 1.125-1.125m-1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0-.621.504-1.125 1.125-1.125m0 1.125v1.5m-1.125-2.625h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125m0 0c0 .621.504 1.125 1.125 1.125M19.125 7.5h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125M19.125 7.5c.621 0 1.125.504 1.125 1.125m0 0v1.5m-1.125-1.5c0-.621.504-1.125 1.125-1.125m0 1.125c0 .621-.504 1.125-1.125 1.125m-17.25-1.125h1.5M3.375 7.5c-.621 0-1.125.504-1.125 1.125m0-1.125c0-.621.504-1.125 1.125-1.125m-1.125 1.125v1.5m2.625-2.625h1.5c.621 0 1.125.504 1.125 1.125m-4.125 0v1.5m1.125-3.75c.621 0 1.125.504 1.125 1.125M4.5 20.25v1.5m0-1.5c0-.621.504-1.125 1.125-1.125m-1.125 1.125c0 .621-.504 1.125-1.125 1.125M4.5 20.25c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 19.5 6 18.996 6 18.375m0 .75V21m0-2.625c0-.621.504-1.125 1.125-1.125M6 18.375c0 .621-.504 1.125-1.125 1.125M19.125 20.25c.621 0 1.125.504 1.125 1.125m-1.125-1.125c0-.621.504-1.125 1.125-1.125m-1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125M18 20.25v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m0-1.125c0-.621.504-1.125 1.125-1.125m0 1.125v1.5m1.125-3.75h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125M19.125 18c.621 0 1.125.504 1.125 1.125m-9.75-14.25h1.5M9.75 3c-.621 0-1.125.504-1.125 1.125m0-1.125c0-.621.504-1.125 1.125-1.125m-1.125 1.125v1.5m3-2.625h1.5M14.25 3c-.621 0-1.125.504-1.125 1.125m0-1.125c0-.621.504-1.125 1.125-1.125m-1.125 1.125v1.5',
        'deep-research': 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6',
        'comfy-ui': 'M14.25 6.75L17.25 12L14.25 17.25M9.75 17.25L6.75 12L9.75 6.75M12 9l-3 9'
    };
    return icons[category] || icons['image-generation']; // استخدم أيقونة الصور كافتراضية
}
}}),
"[project]/src/components/ServicesGrid.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ServicesGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-ssr] (ecmascript) <export default as MagnifyingGlassIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// قائمة الخدمات الافتراضية
const defaultServices = [
    {
        id: 'service-1',
        title: 'توليد صور احترافية باستخدام Midjourney',
        description: 'إنشاء صور عالية الجودة باستخدام Midjourney مع تخصيص كامل حسب طلبك وتعديلات غير محدودة.',
        image: '/images/services/image-generation.jpg',
        category: 'image-generation',
        price: 150,
        provider: {
            id: 'provider-1',
            name: 'أحمد محمد',
            image: '/images/providers/provider1.jpg'
        },
        rating: 4.9,
        reviewsCount: 127
    },
    {
        id: 'service-2',
        title: 'إنتاج فيديوهات قصيرة بالذكاء الاصطناعي',
        description: 'إنشاء فيديوهات قصيرة مؤثرة باستخدام Runway Gen-2 وتقنيات متقدمة أخرى، مناسبة للإعلانات والمحتوى التسويقي.',
        image: '/images/services/video-generation.jpg',
        category: 'video-generation',
        price: 350,
        provider: {
            id: 'provider-2',
            name: 'سارة أحمد',
            image: '/images/providers/provider2.jpg'
        },
        rating: 4.7,
        reviewsCount: 89
    },
    {
        id: 'service-3',
        title: 'كتابة محتوى إبداعي بواسطة GPT-4',
        description: 'كتابة محتوى متخصص وإبداعي باستخدام أحدث نماذج GPT-4 مع مراعاة قواعد SEO وتحسين الظهور في محركات البحث.',
        image: '/images/services/article-generation.jpg',
        category: 'article-generation',
        price: 120,
        provider: {
            id: 'provider-3',
            name: 'محمد خالد',
            image: '/images/providers/provider3.jpg'
        },
        rating: 4.8,
        reviewsCount: 156
    },
    {
        id: 'service-4',
        title: 'تطوير نماذج مخصصة باستخدام TensorFlow',
        description: 'تطوير وتدريب نماذج ذكاء اصطناعي مخصصة على بياناتك الخاصة لتلبية احتياجات عملك المحددة.',
        image: '/images/services/model-training.jpg',
        category: 'model-training',
        price: 800,
        provider: {
            id: 'provider-4',
            name: 'ليلى عبدالله',
            image: '/images/providers/provider4.jpg'
        },
        rating: 4.6,
        reviewsCount: 42
    },
    {
        id: 'service-5',
        title: 'تطوير واجهات مستخدم بمساعدة الذكاء الاصطناعي',
        description: 'تصميم وتطوير واجهات مستخدم جذابة وسهلة الاستخدام لمواقع الويب والتطبيقات باستخدام الذكاء الاصطناعي.',
        image: '/images/services/website-app.jpg',
        category: 'website-app',
        price: 450,
        provider: {
            id: 'provider-1',
            name: 'أحمد محمد',
            image: '/images/providers/provider1.jpg'
        },
        rating: 4.9,
        reviewsCount: 78
    },
    {
        id: 'service-6',
        title: 'إنشاء قصص متحركة بالذكاء الاصطناعي',
        description: 'إنتاج قصص متحركة كاملة مع رسومات وأصوات باستخدام أحدث تقنيات الذكاء الاصطناعي، مناسبة للأطفال والتعليم.',
        image: '/images/services/animated-story.jpg',
        category: 'animated-story',
        price: 280,
        provider: {
            id: 'provider-2',
            name: 'سارة أحمد',
            image: '/images/providers/provider2.jpg'
        },
        rating: 4.8,
        reviewsCount: 63
    },
    {
        id: 'service-7',
        title: 'توليد أصوات واقعية بالذكاء الاصطناعي',
        description: 'إنشاء أصوات بشرية واقعية للإعلانات والدورات التعليمية والمحتوى الصوتي باستخدام ElevenLabs وتقنيات متقدمة.',
        image: '/images/services/audio-generation.jpg',
        category: 'audio-generation',
        price: 190,
        provider: {
            id: 'provider-3',
            name: 'محمد خالد',
            image: '/images/providers/provider3.jpg'
        },
        rating: 4.7,
        reviewsCount: 51
    },
    {
        id: 'service-8',
        title: 'برمجة تطبيقات وأكواد مخصصة بمساعدة AI',
        description: 'تطوير برمجيات وأكواد مخصصة بمساعدة الذكاء الاصطناعي للتطبيقات ومواقع الويب والأنظمة المختلفة.',
        image: '/images/services/code-generation.jpg',
        category: 'code-generation',
        price: 500,
        provider: {
            id: 'provider-4',
            name: 'ليلى عبدالله',
            image: '/images/providers/provider4.jpg'
        },
        rating: 4.5,
        reviewsCount: 37
    },
    {
        id: 'service-9',
        title: 'إنشاء قصص مصورة ثابتة',
        description: 'إنتاج قصص مصورة ثابتة بتصميمات مميزة ومحتوى إبداعي، مثالية للكتب الإلكترونية والمحتوى التعليمي.',
        image: '/images/services/static-story.jpg',
        category: 'static-story',
        price: 200,
        provider: {
            id: 'provider-1',
            name: 'أحمد محمد',
            image: '/images/providers/provider1.jpg'
        },
        rating: 4.6,
        reviewsCount: 45
    },
    {
        id: 'service-10',
        title: 'تطوير سير عمل مخصصة باستخدام Comfy UI',
        description: 'إنشاء وتطوير مسارات عمل مخصصة لتوليد الصور والمحتوى باستخدام Comfy UI لاحتياجاتك الخاصة.',
        image: '/images/services/comfy-ui.jpg',
        category: 'comfy-ui',
        price: 250,
        provider: {
            id: 'provider-3',
            name: 'محمد خالد',
            image: '/images/providers/provider3.jpg'
        },
        rating: 4.8,
        reviewsCount: 32
    },
    {
        id: 'service-11',
        title: 'كتابة أبحاث أكاديمية شاملة',
        description: 'كتابة أبحاث أكاديمية شاملة ومراجع علمية باستخدام نماذج مخصصة للبحث العلمي مع التوثيق الكامل.',
        image: '/images/services/research-generation.jpg',
        category: 'research-generation',
        price: 400,
        provider: {
            id: 'provider-2',
            name: 'سارة أحمد',
            image: '/images/providers/provider2.jpg'
        },
        rating: 4.9,
        reviewsCount: 41
    },
    {
        id: 'service-12',
        title: 'تحليل وأبحاث متعمقة في مجال متخصص',
        description: 'إجراء أبحاث متعمقة وتحليل شامل في مجالات متخصصة بمساعدة الذكاء الاصطناعي ونماذج مدربة خصيصاً.',
        image: '/images/services/deep-research.jpg',
        category: 'deep-research',
        price: 550,
        provider: {
            id: 'provider-4',
            name: 'ليلى عبدالله',
            image: '/images/providers/provider4.jpg'
        },
        rating: 4.7,
        reviewsCount: 28
    }
];
// تعريف الفئات المتاحة للتصفية
const categories = [
    {
        id: 'all',
        name: 'جميع الخدمات'
    },
    {
        id: 'image-generation',
        name: 'توليد صور'
    },
    {
        id: 'video-generation',
        name: 'توليد فيديو'
    },
    {
        id: 'audio-generation',
        name: 'توليد صوت'
    },
    {
        id: 'article-generation',
        name: 'كتابة محتوى'
    },
    {
        id: 'research-generation',
        name: 'أبحاث'
    },
    {
        id: 'website-app',
        name: 'مواقع وتطبيقات'
    },
    {
        id: 'code-generation',
        name: 'برمجة'
    },
    {
        id: 'model-training',
        name: 'تدريب نماذج'
    }
];
function ServicesGrid({ initialServices, title = 'خدماتنا', showSearch = true, showCategories = true, selectedCategory = 'all', maxItems }) {
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialServices || defaultServices);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(selectedCategory);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // محاكاة جلب البيانات من واجهة برمجة التطبيقات
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchServices = async ()=>{
            setIsLoading(true);
            try {
                // في تطبيق حقيقي، سنقوم بإرسال طلب إلى واجهة برمجة التطبيقات
                // const response = await fetch('/api/services', {
                //   method: 'GET',
                //   headers: {
                //     'Content-Type': 'application/json',
                //   },
                // });
                // if (!response.ok) {
                //   throw new Error('فشل في جلب الخدمات');
                // }
                // const data = await response.json();
                // setServices(data.services);
                // محاكاة تأخير الشبكة
                setTimeout(()=>{
                    setServices(initialServices || defaultServices);
                    setIsLoading(false);
                }, 800);
            } catch (error) {
                console.error('خطأ في جلب الخدمات:', error);
                setIsLoading(false);
            }
        };
        fetchServices();
    }, [
        initialServices
    ]);
    // تصفية الخدمات حسب الفئة والبحث
    const filteredServices = services.filter((service)=>{
        const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || service.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    // لعرض عدد محدد من الخدمات إذا تم تحديد ذلك
    const displayedServices = maxItems ? filteredServices.slice(0, maxItems) : filteredServices;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-4",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesGrid.tsx",
                        lineNumber: 293,
                        columnNumber: 19
                    }, this),
                    showSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative max-w-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlassIcon$3e$__["MagnifyingGlassIcon"], {
                                        className: "h-5 w-5 text-gray-400",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServicesGrid.tsx",
                                        lineNumber: 299,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicesGrid.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "ابحث عن خدمة...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicesGrid.tsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServicesGrid.tsx",
                            lineNumber: 297,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesGrid.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this),
                    showCategories && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-6",
                        children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCategory(category.id),
                                className: `px-4 py-2 text-sm font-medium rounded-full ${activeCategory === category.id ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                children: category.name
                            }, category.id, false, {
                                fileName: "[project]/src/components/ServicesGrid.tsx",
                                lineNumber: 315,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesGrid.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServicesGrid.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-500 border-r-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesGrid.tsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-4 text-gray-600",
                        children: "جاري تحميل الخدمات..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesGrid.tsx",
                        lineNumber: 334,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServicesGrid.tsx",
                lineNumber: 332,
                columnNumber: 9
            }, this) : displayedServices.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                children: displayedServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: service.id,
                        title: service.title,
                        description: service.description,
                        image: service.image,
                        category: service.category,
                        price: service.price,
                        provider: service.provider,
                        rating: service.rating,
                        reviewsCount: service.reviewsCount
                    }, service.id, false, {
                        fileName: "[project]/src/components/ServicesGrid.tsx",
                        lineNumber: 339,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ServicesGrid.tsx",
                lineNumber: 337,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12 bg-gray-50 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "لم يتم العثور على خدمات مطابقة للبحث"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesGrid.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSearchQuery('');
                            setActiveCategory('all');
                        },
                        className: "mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700",
                        children: "عرض جميع الخدمات"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesGrid.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServicesGrid.tsx",
                lineNumber: 354,
                columnNumber: 9
            }, this),
            maxItems && filteredServices.length > maxItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/services",
                    className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200",
                    children: [
                        "عرض جميع الخدمات (",
                        filteredServices.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServicesGrid.tsx",
                    lineNumber: 370,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ServicesGrid.tsx",
                lineNumber: 369,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServicesGrid.tsx",
        lineNumber: 291,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/services/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ServicesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-ssr] (ecmascript) <export default as ArrowLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicesGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServicesGrid.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
// تصنيفات الخدمات الرئيسية والفرعية
const serviceCategories = [
    {
        id: 'writing',
        name: 'كتابة وتحرير المحتوى',
        icon: '/images/services/writing.png',
        description: 'إنشاء مقالات، أبحاث، قصص، تغريدات، نصوص إعلانية باستخدام GPT-4 وClaude AI',
        subcategories: [
            {
                id: 'articles',
                name: 'مقالات'
            },
            {
                id: 'research',
                name: 'أبحاث'
            },
            {
                id: 'stories',
                name: 'قصص'
            },
            {
                id: 'tweets',
                name: 'تغريدات'
            },
            {
                id: 'ads',
                name: 'نصوص إعلانية'
            }
        ],
        aiTools: [
            'GPT-4',
            'Claude AI',
            'Bard'
        ]
    },
    {
        id: 'graphics',
        name: 'تصميم الجرافيك والهوية البصرية',
        icon: '/images/services/graphics.png',
        description: 'توليد الشعارات، تصميمات السوشيال ميديا، تحرير الصور وتحسين الجودة',
        subcategories: [
            {
                id: 'logos',
                name: 'شعارات'
            },
            {
                id: 'social_media',
                name: 'تصميمات السوشيال ميديا'
            },
            {
                id: 'photo_editing',
                name: 'تحرير الصور'
            },
            {
                id: 'image_enhancement',
                name: 'تحسين جودة الصور'
            },
            {
                id: 'brand_identity',
                name: 'الهوية البصرية'
            }
        ],
        aiTools: [
            'DALL·E',
            'Midjourney',
            'Stable Diffusion',
            'Runway ML'
        ]
    },
    {
        id: 'development',
        name: 'برمجة وتطوير المواقع والتطبيقات',
        icon: '/images/services/development.png',
        description: 'توليد الأكواد البرمجية، تحسينها، وتصحيح الأخطاء',
        subcategories: [
            {
                id: 'web_dev',
                name: 'تطوير المواقع'
            },
            {
                id: 'app_dev',
                name: 'تطوير التطبيقات'
            },
            {
                id: 'code_generation',
                name: 'توليد الأكواد'
            },
            {
                id: 'code_optimization',
                name: 'تحسين الأكواد'
            },
            {
                id: 'bug_fixing',
                name: 'تصحيح الأخطاء'
            }
        ],
        aiTools: [
            'GitHub Copilot',
            'Codeium',
            'Tabnine',
            'GPT-4'
        ]
    },
    {
        id: 'data_analysis',
        name: 'تحليل البيانات وإنشاء التقارير',
        icon: '/images/services/data.png',
        description: 'استخراج البيانات، إنشاء التقارير الذكية، وتحليل الاتجاهات',
        subcategories: [
            {
                id: 'data_extraction',
                name: 'استخراج البيانات'
            },
            {
                id: 'reports',
                name: 'إنشاء التقارير'
            },
            {
                id: 'trend_analysis',
                name: 'تحليل الاتجاهات'
            },
            {
                id: 'data_visualization',
                name: 'تصور البيانات'
            },
            {
                id: 'predictive_analysis',
                name: 'التحليل التنبؤي'
            }
        ],
        aiTools: [
            'Python AI',
            'Code Interpreter',
            'Tableau AI',
            'Power BI AI'
        ]
    },
    {
        id: 'seo',
        name: 'تحسين محركات البحث (SEO)',
        icon: '/images/services/seo.png',
        description: 'تحليل الكلمات المفتاحية، تحسين المحتوى، وإنشاء تقارير SEO',
        subcategories: [
            {
                id: 'keyword_research',
                name: 'تحليل الكلمات المفتاحية'
            },
            {
                id: 'content_optimization',
                name: 'تحسين المحتوى'
            },
            {
                id: 'seo_reports',
                name: 'تقارير SEO'
            },
            {
                id: 'competitor_analysis',
                name: 'تحليل المنافسين'
            },
            {
                id: 'backlink_strategy',
                name: 'استراتيجية الروابط الخلفية'
            }
        ],
        aiTools: [
            'Surfer SEO AI',
            'MarketMuse',
            'Frase',
            'SEMrush AI'
        ]
    },
    {
        id: 'video',
        name: 'إنتاج الفيديو والمونتاج',
        icon: '/images/services/video.png',
        description: 'إنشاء مقاطع فيديو تلقائيًا من النصوص، تحرير الفيديوهات وتحسينها',
        subcategories: [
            {
                id: 'vertical',
                name: 'طولي (تيك توك - شورتس - ريلز)'
            },
            {
                id: 'horizontal',
                name: 'عرضي (يوتيوب)'
            },
            {
                id: 'square',
                name: 'مربع (سناب)'
            },
            {
                id: 'short',
                name: 'قصير (5 ثوانٍ)'
            },
            {
                id: 'long',
                name: 'طويل'
            }
        ],
        aiTools: [
            'Runway ML',
            'Synthesia',
            'Descript',
            'D-ID'
        ]
    },
    {
        id: '3d',
        name: 'توليد نماذج ثلاثية الأبعاد (3D)',
        icon: '/images/services/3d.png',
        description: 'إنشاء مجسمات ثلاثية الأبعاد باستخدام تقنيات الذكاء الاصطناعي الحديثة',
        subcategories: [
            {
                id: '3d_models',
                name: 'نماذج ثلاثية الأبعاد'
            },
            {
                id: '3d_characters',
                name: 'شخصيات ثلاثية الأبعاد'
            },
            {
                id: '3d_environments',
                name: 'بيئات ثلاثية الأبعاد'
            },
            {
                id: '3d_assets',
                name: 'أصول ثلاثية الأبعاد'
            },
            {
                id: '3d_animations',
                name: 'رسوم متحركة ثلاثية الأبعاد'
            }
        ],
        aiTools: [
            'Stable Diffusion 3D',
            'Spline AI',
            'Meshy',
            'Dream3D'
        ]
    },
    {
        id: 'audio',
        name: 'خدمات الصوت والتحويل النصي',
        icon: '/images/services/audio.png',
        description: 'تحويل النص إلى صوت والعكس، تحسين جودة الصوت، وإزالة الضوضاء',
        subcategories: [
            {
                id: 'text_to_speech',
                name: 'تحويل النص إلى صوت'
            },
            {
                id: 'speech_to_text',
                name: 'تحويل الصوت إلى نص'
            },
            {
                id: 'audio_enhancement',
                name: 'تحسين جودة الصوت'
            },
            {
                id: 'noise_removal',
                name: 'إزالة الضوضاء'
            },
            {
                id: 'voice_cloning',
                name: 'استنساخ الصوت'
            }
        ],
        aiTools: [
            'Whisper AI',
            'Speechify',
            'Descript',
            'ElevenLabs'
        ]
    },
    {
        id: 'python',
        name: 'خدمات Python',
        icon: '/images/services/python.png',
        description: 'تطوير وتحليل البيانات والذكاء الاصطناعي باستخدام لغة بايثون',
        subcategories: [
            {
                id: 'data_analysis_python',
                name: 'تحليل البيانات'
            },
            {
                id: 'ai_development',
                name: 'تطوير الذكاء الاصطناعي'
            },
            {
                id: 'automation',
                name: 'أتمتة العمليات'
            },
            {
                id: 'machine_learning',
                name: 'التعلم الآلي'
            },
            {
                id: 'data_scraping',
                name: 'استخراج البيانات من الويب'
            }
        ],
        aiTools: [
            'Python AI',
            'GPT-4',
            'Jupyter AI',
            'PyTorch'
        ]
    },
    {
        id: 'images',
        name: 'خدمات الصور',
        icon: '/images/services/images.png',
        description: 'توليد وتحرير الصور باستخدام أحدث تقنيات الذكاء الاصطناعي',
        subcategories: [
            {
                id: 'general_images',
                name: 'صور عامة'
            },
            {
                id: 'architectural',
                name: 'صور معمارية'
            },
            {
                id: 'portrait',
                name: 'صور شخصية'
            },
            {
                id: 'visual_effects',
                name: 'مؤثرات بصرية'
            },
            {
                id: 'style_transfer',
                name: 'تحويل الصور إلى نمط معين'
            }
        ],
        aiTools: [
            'DALL·E',
            'Midjourney',
            'Stable Diffusion',
            'Leonardo AI'
        ]
    }
];
function ServicesPage() {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // فلترة الخدمات حسب البحث
    const filteredCategories = serviceCategories.filter((category)=>{
        const matchesSearch = searchTerm === '' || category.name.includes(searchTerm) || category.description.includes(searchTerm) || category.subcategories.some((sub)=>sub.name.includes(searchTerm));
        return matchesSearch;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white py-12 sm:py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex mb-4",
                            "aria-label": "Breadcrumb",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "inline-flex items-center space-x-1 md:space-x-3 space-x-reverse rtl:space-x-reverse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "inline-flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600",
                                            children: "الرئيسية"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__["ArrowLeftIcon"], {
                                                    className: "w-3 h-3 text-gray-400 mx-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-1 text-sm font-medium text-gray-500 md:mr-2",
                                                    children: "الخدمات"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-gray-900 mb-4",
                                    children: "خدمات الذكاء الاصطناعي"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                                    children: "استكشف مجموعة واسعة من خدمات الذكاء الاصطناعي الإبداعية والاحترافية"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-indigo-50 rounded-lg p-6 mb-10 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-indigo-900 mb-2",
                            children: "كيف تختار الخدمة المناسبة؟"
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-indigo-700 mb-4",
                            children: "اختر الفئة التي تهمك، استعرض الخدمات المتاحة، وتصفح تفاصيل كل خدمة والمراجعات. عند اختيار الخدمة المناسبة، يمكنك طلبها مباشرة."
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-4 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/blog/ai-services-guide",
                                    className: "inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors",
                                    children: "دليل اختيار الخدمات"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/faq",
                                    className: "inline-flex items-center px-4 py-2 bg-white border border-indigo-200 hover:bg-indigo-50 text-indigo-700 text-sm font-medium rounded-md shadow-sm transition-colors",
                                    children: "الأسئلة الشائعة"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicesGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "جميع الخدمات",
                    showSearch: true,
                    showCategories: true
                }, void 0, false, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 221,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 bg-gray-50 rounded-xl p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-900 mb-2",
                                    children: "هل تريد خدمة مخصصة؟"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 max-w-2xl mx-auto",
                                    children: "إذا لم تجد الخدمة التي تبحث عنها، يمكنك إنشاء طلب مخصص وسيتواصل معك مزودو الخدمة المناسبون"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row justify-center items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-6 shadow-md border border-gray-100 flex-1 max-w-md text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-900 mb-3",
                                            children: "طلب خدمة مخصصة"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4",
                                            children: "حدد متطلباتك بالتفصيل وسنساعدك في العثور على مزود الخدمة المناسب"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/custom-request",
                                            className: "inline-flex items-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors",
                                            children: "إنشاء طلب مخصص"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-6 shadow-md border border-gray-100 flex-1 max-w-md text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-900 mb-3",
                                            children: "انضم كمزود خدمة"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4",
                                            children: "هل لديك مهارات في الذكاء الاصطناعي؟ انضم إلينا كمزود خدمة واكسب المزيد"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/signup?role=provider",
                                            className: "inline-flex items-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors",
                                            children: "سجل كمزود خدمة"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function ArrowLeftIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    }));
}
const ForwardRef = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(ArrowLeftIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}}),
"[project]/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-ssr] (ecmascript) <export default as ArrowLeftIcon>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ArrowLeftIcon": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function MagnifyingGlassIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    }));
}
const ForwardRef = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(MagnifyingGlassIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}}),
"[project]/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-ssr] (ecmascript) <export default as MagnifyingGlassIcon>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MagnifyingGlassIcon": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MagnifyingGlassIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_9386d62f._.js.map