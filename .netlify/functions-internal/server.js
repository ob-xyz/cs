var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/style/global/global.css
var global_default = "/build/_assets/global-7TIJBPVC.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png"
  },
  {
    rel: "stylesheet",
    href: global_default
  }
], meta = () => ({
  charset: "utf-8",
  title: "Chris Signore - PC Party of Canada",
  description: "Hey! My name is Chris Signore, and I'm moving Full Speed Ahead with the Progressive Conservative Party of Canada.",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react3 = require("react");

// public/img/pc.png
var pc_default = "/build/_assets/pc-AG572O57.png";

// app/routes/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Index() {
  return (0, import_react3.useEffect)(() => {
    let script = document.createElement("script");
    return script.src = "https://js.hcaptcha.com/1/api.js", script.async = !0, script.defer = !0, document.body.appendChild(script), () => {
      document.body.removeChild(script);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: pc_default }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "inner-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Bigger, Better, Eh." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 26,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
          "Hey! I'm ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "Chris Signore" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 27,
            columnNumber: 22
          }, this),
          ", and between me and you, Canada's not big enough. So I'm building a Bigger, Better Canada with the Progressive Conservative Party of Canada \u{1F1E8}\u{1F1E6}"
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 27,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Unwelcomed Tariffs have already begun impacting the lives of 400,000 regular everyday working Canadians. And really, we could have 1 big Canadian economy instead of 13." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 28,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "And it begins with you joining me to build Bigger, Better, Eh. My 3 step plan to a bigger, better Canada:" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 29,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
          "- bigger, better ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "Jobs" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 30,
            columnNumber: 31
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 30,
            columnNumber: 42
          }, this),
          "- bigger, better ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "GDP" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 31,
            columnNumber: 28
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 31,
            columnNumber: 38
          }, this),
          "- bigger, better ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "Canada" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 32,
            columnNumber: 28
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 32,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Wanna build a bigger, better Canada with me? Subscribe to my free weekly newsletter." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { method: "post", action: "https://app.jeffamzn.com/subscription/form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { className: "email", type: "email", name: "email", required: !0, placeholder: "Email" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 36,
          columnNumber: 14
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { className: "submit", type: "submit", value: "Subscribe" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 37,
          columnNumber: 14
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-captcha", "data-sitekey": "db0e76a6-3d84-4378-abe6-88526faac9d2" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { id: "3a575", type: "hidden", name: "l", checked: !0, value: "3a575627-dc5a-4d06-b627-05ca13da2e85" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "hidden", name: "nonce" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-GJQ4CWLM.js", imports: ["/build/_shared/chunk-XXWHB5H2.js", "/build/_shared/chunk-SBNNL67F.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ROPTOPEC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-B66AIQNK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "6b4244f7", hmr: void 0, url: "/build/manifest-6B4244F7.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
