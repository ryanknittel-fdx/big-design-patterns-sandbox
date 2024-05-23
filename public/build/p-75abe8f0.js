import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-e5037904.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.17.1 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-551d7421.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["bc-side-nav",[[1,"bc-side-nav",{"ariaStoreName":[1,"aria-store-name"],"storeName":[1,"store-name"],"ariaStoreType":[1,"aria-store-type"],"storeType":[1,"store-type"],"footerItems":[16],"logoImgUrl":[1,"logo-img-url"],"logoImgUrlCollapsed":[1,"logo-img-url-collapsed"],"logoLabel":[1,"logo-label"],"collapsed":[1540],"searchQuery":[1025,"search-query"],"searchPlaceholderLabel":[1,"search-placeholder-label"],"searchToggleLabel":[1,"search-toggle-label"],"searchFieldsetLabel":[1,"search-fieldset-label"],"searchAriaLabel":[1,"search-aria-label"],"searchClearLabel":[1,"search-clear-label"],"searchValue":[1537,"search-value"],"searchPanelHeaderLabel":[1,"search-panel-header-label"],"extensionPanelHeaderLabel":[1025,"extension-panel-header-label"],"row":[4],"menuItems":[16],"expandLabel":[1,"expand-label"],"mobileExpanded":[32],"extensionActive":[32],"searchActive":[32],"toggleMobileMenu":[64],"toggleExtensionPanel":[64]}]]],["bc-cp",[[1,"bc-cp",{"sidenavCollapsed":[32]},[[0,"bcSidenavToggle","bcSidenavToggleHandler"]]]]],["bc-main",[[1,"bc-main"]]],["bc-progress-circle",[[0,"bc-progress-circle",{"percent":[2],"size":[1],"error":[4]}]]],["bc-container",[[1,"bc-container",{"darkMode":[4,"dark-mode"]},[[0,"bcHandshake","bcHandshakeHandler"]]]]],["bc-flex",[[1,"bc-flex",{"row":[4],"column":[4],"inline":[4],"alignContent":[1,"align-content"],"alignItems":[1,"align-items"],"justifyContent":[1,"justify-content"],"wrap":[1],"gap":[1],"alignContentTablet":[1,"align-content-tablet"],"alignItemsTablet":[1,"align-items-tablet"],"justifyContentTablet":[1,"justify-content-tablet"],"wrapTablet":[1,"wrap-tablet"],"gapTablet":[1,"gap-tablet"],"alignContentMobile":[1,"align-content-mobile"],"alignItemsMobile":[1,"align-items-mobile"],"justifyContentMobile":[1,"justify-content-mobile"],"wrapMobile":[1,"wrap-mobile"],"gapMobile":[1,"gap-mobile"]}]]],["bc-flex-item",[[1,"bc-flex-item",{"order":[2],"flex":[1],"alignSelf":[1,"align-self"],"orderTablet":[2,"order-tablet"],"flexTablet":[1,"flex-tablet"],"alignSelfTablet":[1,"align-self-tablet"],"orderMobile":[2,"order-mobile"],"flexMobile":[1,"flex-mobile"],"alignSelfMobile":[1,"align-self-mobile"]}]]],["bc-component",[[4,"bc-component",{"darkMode":[4,"dark-mode"]}]]],["bc-badge",[[1,"bc-badge",{"label":[1],"variant":[1],"status":[1]}]]],["bc-icon",[[1,"bc-icon",{"icon":[1],"label":[1],"size":[1],"pxSize":[2,"px-size"],"color":[1],"cssColor":[1,"css-color"]}]]],["bc-logo",[[1,"bc-logo",{"collapsed":[4],"imgUrl":[1,"img-url"],"imgUrlCollapsed":[1,"img-url-collapsed"],"imgLabel":[1,"img-label"],"link":[1]}]]]], options);
});
