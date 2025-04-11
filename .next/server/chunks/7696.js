"use strict";
exports.id = 7696;
exports.ids = [7696];
exports.modules = {

/***/ 79089:
/***/ ((module) => {


var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === "object";
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) {
        return deepmerge;
    }
    var customMerge = options.customMerge(key);
    return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key) // and also unsafe if they're nonenumerable.
    );
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
    }
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
            return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
    }
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;


/***/ }),

/***/ 77696:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  plainTextSelectors: () => (/* binding */ plainTextSelectors),
  render: () => (/* binding */ node_render),
  renderAsync: () => (/* binding */ renderAsync)
});

;// CONCATENATED MODULE: ./node_modules/domelementtype/lib/esm/index.js
/** Types of elements found in htmlparser2's DOM */ var esm_ElementType;
(function(ElementType) {
    /** Type for the root element of a document */ ElementType["Root"] = "root";
    /** Type for Text */ ElementType["Text"] = "text";
    /** Type for <? ... ?> */ ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */ ElementType["Comment"] = "comment";
    /** Type for <script> tags */ ElementType["Script"] = "script";
    /** Type for <style> tags */ ElementType["Style"] = "style";
    /** Type for Any tag */ ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */ ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */ ElementType["Doctype"] = "doctype";
})(esm_ElementType || (esm_ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */ function esm_isTag(elem) {
    return elem.type === esm_ElementType.Tag || elem.type === esm_ElementType.Script || elem.type === esm_ElementType.Style;
}
// Exports for backwards compatibility
/** Type for the root element of a document */ const Root = esm_ElementType.Root;
/** Type for Text */ const Text = esm_ElementType.Text;
/** Type for <? ... ?> */ const Directive = esm_ElementType.Directive;
/** Type for <!-- ... --> */ const Comment = esm_ElementType.Comment;
/** Type for <script> tags */ const Script = esm_ElementType.Script;
/** Type for <style> tags */ const Style = esm_ElementType.Style;
/** Type for Any tag */ const Tag = esm_ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */ const CDATA = esm_ElementType.CDATA;
/** Type for <!doctype ...> */ const Doctype = esm_ElementType.Doctype;

;// CONCATENATED MODULE: ./node_modules/domhandler/lib/esm/node.js

/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */ class Node {
    constructor(){
        /** Parent of the node */ this.parent = null;
        /** Previous sibling */ this.prev = null;
        /** Next sibling */ this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */ this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */ this.endIndex = null;
    }
    // Read-write aliases for properties
    /**
     * Same as {@link parent}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get parentNode() {
        return this.parent;
    }
    set parentNode(parent) {
        this.parent = parent;
    }
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get previousSibling() {
        return this.prev;
    }
    set previousSibling(prev) {
        this.prev = prev;
    }
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get nextSibling() {
        return this.next;
    }
    set nextSibling(next) {
        this.next = next;
    }
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */ cloneNode(recursive = false) {
        return cloneNode(this, recursive);
    }
}
/**
 * A node that contains some data.
 */ class DataNode extends Node {
    /**
     * @param data The content of the data node
     */ constructor(data){
        super();
        this.data = data;
    }
    /**
     * Same as {@link data}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get nodeValue() {
        return this.data;
    }
    set nodeValue(data) {
        this.data = data;
    }
}
/**
 * Text within the document.
 */ class node_Text extends DataNode {
    constructor(){
        super(...arguments);
        this.type = esm_ElementType.Text;
    }
    get nodeType() {
        return 3;
    }
}
/**
 * Comments within the document.
 */ class node_Comment extends DataNode {
    constructor(){
        super(...arguments);
        this.type = esm_ElementType.Comment;
    }
    get nodeType() {
        return 8;
    }
}
/**
 * Processing instructions, including doc types.
 */ class ProcessingInstruction extends DataNode {
    constructor(name, data){
        super(data);
        this.name = name;
        this.type = esm_ElementType.Directive;
    }
    get nodeType() {
        return 1;
    }
}
/**
 * A `Node` that can have children.
 */ class NodeWithChildren extends Node {
    /**
     * @param children Children of the node. Only certain node types can have children.
     */ constructor(children){
        super();
        this.children = children;
    }
    // Aliases
    /** First child of the node. */ get firstChild() {
        var _a;
        return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
    }
    /** Last child of the node. */ get lastChild() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get childNodes() {
        return this.children;
    }
    set childNodes(children) {
        this.children = children;
    }
}
class node_CDATA extends NodeWithChildren {
    constructor(){
        super(...arguments);
        this.type = esm_ElementType.CDATA;
    }
    get nodeType() {
        return 4;
    }
}
/**
 * The root node of the document.
 */ class Document extends NodeWithChildren {
    constructor(){
        super(...arguments);
        this.type = esm_ElementType.Root;
    }
    get nodeType() {
        return 9;
    }
}
/**
 * An element within the DOM.
 */ class Element extends NodeWithChildren {
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */ constructor(name, attribs, children = [], type = name === "script" ? esm_ElementType.Script : name === "style" ? esm_ElementType.Style : esm_ElementType.Tag){
        super(children);
        this.name = name;
        this.attribs = attribs;
        this.type = type;
    }
    get nodeType() {
        return 1;
    }
    // DOM Level 1 aliases
    /**
     * Same as {@link name}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get tagName() {
        return this.name;
    }
    set tagName(name) {
        this.name = name;
    }
    get attributes() {
        return Object.keys(this.attribs).map((name)=>{
            var _a, _b;
            return {
                name,
                value: this.attribs[name],
                namespace: (_a = this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
            };
        });
    }
}
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */ function node_isTag(node) {
    return esm_isTag(node);
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */ function node_isCDATA(node) {
    return node.type === esm_ElementType.CDATA;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */ function node_isText(node) {
    return node.type === esm_ElementType.Text;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */ function node_isComment(node) {
    return node.type === esm_ElementType.Comment;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */ function isDirective(node) {
    return node.type === esm_ElementType.Directive;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */ function isDocument(node) {
    return node.type === esm_ElementType.Root;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */ function node_hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */ function cloneNode(node, recursive = false) {
    let result;
    if (node_isText(node)) {
        result = new node_Text(node.data);
    } else if (node_isComment(node)) {
        result = new node_Comment(node.data);
    } else if (node_isTag(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Element(node.name, {
            ...node.attribs
        }, children);
        children.forEach((child)=>child.parent = clone);
        if (node.namespace != null) {
            clone.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone["x-attribsNamespace"] = {
                ...node["x-attribsNamespace"]
            };
        }
        if (node["x-attribsPrefix"]) {
            clone["x-attribsPrefix"] = {
                ...node["x-attribsPrefix"]
            };
        }
        result = clone;
    } else if (node_isCDATA(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new node_CDATA(children);
        children.forEach((child)=>child.parent = clone);
        result = clone;
    } else if (isDocument(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Document(children);
        children.forEach((child)=>child.parent = clone);
        if (node["x-mode"]) {
            clone["x-mode"] = node["x-mode"];
        }
        result = clone;
    } else if (isDirective(node)) {
        const instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    } else {
        throw new Error(`Not implemented yet: ${node.type}`);
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
function cloneChildren(childs) {
    const children = childs.map((child)=>cloneNode(child, true));
    for(let i = 1; i < children.length; i++){
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}

;// CONCATENATED MODULE: ./node_modules/domhandler/lib/esm/index.js



// Default options
const defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
};
class esm_DomHandler {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */ constructor(callback, options, elementCB){
        /** The elements of the DOM */ this.dom = [];
        /** The root element for the DOM */ this.root = new Document(this.dom);
        /** Indicated whether parsing has been completed. */ this.done = false;
        /** Stack of open tags. */ this.tagStack = [
            this.root
        ];
        /** A data node that is still being written to. */ this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */ this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    onparserinit(parser) {
        this.parser = parser;
    }
    // Resets the handler back to starting state
    onreset() {
        this.dom = [];
        this.root = new Document(this.dom);
        this.done = false;
        this.tagStack = [
            this.root
        ];
        this.lastNode = null;
        this.parser = null;
    }
    // Signals the handler that parsing is done
    onend() {
        if (this.done) return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    }
    onerror(error) {
        this.handleCallback(error);
    }
    onclosetag() {
        this.lastNode = null;
        const elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB) this.elementCB(elem);
    }
    onopentag(name, attribs) {
        const type = this.options.xmlMode ? esm_ElementType.Tag : undefined;
        const element = new Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    }
    ontext(data) {
        const { lastNode } = this;
        if (lastNode && lastNode.type === esm_ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        } else {
            const node = new node_Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    }
    oncomment(data) {
        if (this.lastNode && this.lastNode.type === esm_ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        const node = new node_Comment(data);
        this.addNode(node);
        this.lastNode = node;
    }
    oncommentend() {
        this.lastNode = null;
    }
    oncdatastart() {
        const text = new node_Text("");
        const node = new node_CDATA([
            text
        ]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    }
    oncdataend() {
        this.lastNode = null;
    }
    onprocessinginstruction(name, data) {
        const node = new ProcessingInstruction(name, data);
        this.addNode(node);
    }
    handleCallback(error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        } else if (error) {
            throw error;
        }
    }
    addNode(node) {
        const parent = this.tagStack[this.tagStack.length - 1];
        const previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    }
}
/* harmony default export */ const esm = ((/* unused pure expression or super */ null && (esm_DomHandler)));

;// CONCATENATED MODULE: ./node_modules/leac/lib/leac.mjs
const e = /\n/g;
function n(n) {
    const o = [
        ...n.matchAll(e)
    ].map((e)=>e.index || 0);
    o.unshift(-1);
    const s = t(o, 0, o.length);
    return (e)=>r(s, e);
}
function t(e, n, r) {
    if (r - n == 1) return {
        offset: e[n],
        index: n + 1
    };
    const o = Math.ceil((n + r) / 2), s = t(e, n, o), l = t(e, o, r);
    return {
        offset: s.offset,
        low: s,
        high: l
    };
}
function r(e, n) {
    return function(e) {
        return Object.prototype.hasOwnProperty.call(e, "index");
    }(e) ? {
        line: e.index,
        column: n - e.offset
    } : r(e.high.offset < n ? e.high : e.low, n);
}
function o(e, t = "", r = {}) {
    const o = "string" != typeof t ? t : r, l = "string" == typeof t ? t : "", c = e.map(s), f = !!o.lineNumbers;
    return function(e, t = 0) {
        const r = f ? n(e) : ()=>({
                line: 0,
                column: 0
            });
        let o = t;
        const s = [];
        e: for(; o < e.length;){
            let n = !1;
            for (const t of c){
                t.regex.lastIndex = o;
                const c = t.regex.exec(e);
                if (c && c[0].length > 0) {
                    if (!t.discard) {
                        const e = r(o), n = "string" == typeof t.replace ? c[0].replace(new RegExp(t.regex.source, t.regex.flags), t.replace) : c[0];
                        s.push({
                            state: l,
                            name: t.name,
                            text: n,
                            offset: o,
                            len: c[0].length,
                            line: e.line,
                            column: e.column
                        });
                    }
                    if (o = t.regex.lastIndex, n = !0, t.push) {
                        const n = t.push(e, o);
                        s.push(...n.tokens), o = n.offset;
                    }
                    if (t.pop) break e;
                    break;
                }
            }
            if (!n) break;
        }
        return {
            tokens: s,
            offset: o,
            complete: e.length <= o
        };
    };
}
function s(e, n) {
    return {
        ...e,
        regex: l(e, n)
    };
}
function l(e, n) {
    if (0 === e.name.length) throw new Error(`Rule #${n} has empty name, which is not allowed.`);
    if (function(e) {
        return Object.prototype.hasOwnProperty.call(e, "regex");
    }(e)) return function(e) {
        if (e.global) throw new Error(`Regular expression /${e.source}/${e.flags} contains the global flag, which is not allowed.`);
        return e.sticky ? e : new RegExp(e.source, e.flags + "y");
    }(e.regex);
    if (function(e) {
        return Object.prototype.hasOwnProperty.call(e, "str");
    }(e)) {
        if (0 === e.str.length) throw new Error(`Rule #${n} ("${e.name}") has empty "str" property, which is not allowed.`);
        return new RegExp(c(e.str), "y");
    }
    return new RegExp(c(e.name), "y");
}
function c(e) {
    return e.replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g, "\\$&");
}


;// CONCATENATED MODULE: ./node_modules/peberminta/lib/core.mjs

function emit(value) {
    return (data, i)=>({
            matched: true,
            position: i,
            value: value
        });
}
function make(f) {
    return (data, i)=>({
            matched: true,
            position: i,
            value: f(data, i)
        });
}
function action(f) {
    return (data, i)=>{
        f(data, i);
        return {
            matched: true,
            position: i,
            value: null
        };
    };
}
function fail(data, i) {
    return {
        matched: false
    };
}
function error(message) {
    return (data, i)=>{
        throw new Error(message instanceof Function ? message(data, i) : message);
    };
}
function token(onToken, onEnd) {
    return (data, i)=>{
        let position = i;
        let value = undefined;
        if (i < data.tokens.length) {
            value = onToken(data.tokens[i], data, i);
            if (value !== undefined) {
                position++;
            }
        } else {
            onEnd?.(data, i);
        }
        return value === undefined ? {
            matched: false
        } : {
            matched: true,
            position: position,
            value: value
        };
    };
}
function any(data, i) {
    return i < data.tokens.length ? {
        matched: true,
        position: i + 1,
        value: data.tokens[i]
    } : {
        matched: false
    };
}
function satisfy(test) {
    return (data, i)=>i < data.tokens.length && test(data.tokens[i], data, i) ? {
            matched: true,
            position: i + 1,
            value: data.tokens[i]
        } : {
            matched: false
        };
}
function mapInner(r, f) {
    return r.matched ? {
        matched: true,
        position: r.position,
        value: f(r.value, r.position)
    } : r;
}
function mapOuter(r, f) {
    return r.matched ? f(r) : r;
}
function map(p, mapper) {
    return (data, i)=>mapInner(p(data, i), (v, j)=>mapper(v, data, i, j));
}
function map1(p, mapper) {
    return (data, i)=>mapOuter(p(data, i), (m)=>mapper(m, data, i));
}
function peek(p, f) {
    return (data, i)=>{
        const r = p(data, i);
        f(r, data, i);
        return r;
    };
}
function core_option(p, def) {
    return (data, i)=>{
        const r = p(data, i);
        return r.matched ? r : {
            matched: true,
            position: i,
            value: def
        };
    };
}
function not(p) {
    return (data, i)=>{
        const r = p(data, i);
        return r.matched ? {
            matched: false
        } : {
            matched: true,
            position: i,
            value: true
        };
    };
}
function choice(...ps) {
    return (data, i)=>{
        for (const p of ps){
            const result = p(data, i);
            if (result.matched) {
                return result;
            }
        }
        return {
            matched: false
        };
    };
}
function otherwise(pa, pb) {
    return (data, i)=>{
        const r1 = pa(data, i);
        return r1.matched ? r1 : pb(data, i);
    };
}
function longest(...ps) {
    return (data, i)=>{
        let match = undefined;
        for (const p of ps){
            const result = p(data, i);
            if (result.matched && (!match || match.position < result.position)) {
                match = result;
            }
        }
        return match || {
            matched: false
        };
    };
}
function takeWhile(p, test) {
    return (data, i)=>{
        const values = [];
        let success = true;
        do {
            const r = p(data, i);
            if (r.matched && test(r.value, values.length + 1, data, i, r.position)) {
                values.push(r.value);
                i = r.position;
            } else {
                success = false;
            }
        }while (success);
        return {
            matched: true,
            position: i,
            value: values
        };
    };
}
function takeUntil(p, test) {
    return takeWhile(p, (value, n, data, i, j)=>!test(value, n, data, i, j));
}
function takeWhileP(pValue, pTest) {
    return takeWhile(pValue, (value, n, data, i)=>pTest(data, i).matched);
}
function takeUntilP(pValue, pTest) {
    return takeWhile(pValue, (value, n, data, i)=>!pTest(data, i).matched);
}
function many(p) {
    return takeWhile(p, ()=>true);
}
function many1(p) {
    return ab(p, many(p), (head, tail)=>[
            head,
            ...tail
        ]);
}
function ab(pa, pb, join) {
    return (data, i)=>mapOuter(pa(data, i), (ma)=>mapInner(pb(data, ma.position), (vb, j)=>join(ma.value, vb, data, i, j)));
}
function left(pa, pb) {
    return ab(pa, pb, (va)=>va);
}
function right(pa, pb) {
    return ab(pa, pb, (va, vb)=>vb);
}
function abc(pa, pb, pc, join) {
    return (data, i)=>mapOuter(pa(data, i), (ma)=>mapOuter(pb(data, ma.position), (mb)=>mapInner(pc(data, mb.position), (vc, j)=>join(ma.value, mb.value, vc, data, i, j))));
}
function middle(pa, pb, pc) {
    return abc(pa, pb, pc, (ra, rb)=>rb);
}
function core_all(...ps) {
    return (data, i)=>{
        const result = [];
        let position = i;
        for (const p of ps){
            const r1 = p(data, position);
            if (r1.matched) {
                result.push(r1.value);
                position = r1.position;
            } else {
                return {
                    matched: false
                };
            }
        }
        return {
            matched: true,
            position: position,
            value: result
        };
    };
}
function skip(...ps) {
    return map(core_all(...ps), ()=>null);
}
function flatten(...ps) {
    return flatten1(core_all(...ps));
}
function flatten1(p) {
    return map(p, (vs)=>vs.flatMap((v)=>v));
}
function sepBy1(pValue, pSep) {
    return ab(pValue, many(right(pSep, pValue)), (head, tail)=>[
            head,
            ...tail
        ]);
}
function sepBy(pValue, pSep) {
    return otherwise(sepBy1(pValue, pSep), emit([]));
}
function chainReduce(acc, f) {
    return (data, i)=>{
        let loop = true;
        let acc1 = acc;
        let pos = i;
        do {
            const r = f(acc1, data, pos)(data, pos);
            if (r.matched) {
                acc1 = r.value;
                pos = r.position;
            } else {
                loop = false;
            }
        }while (loop);
        return {
            matched: true,
            position: pos,
            value: acc1
        };
    };
}
function reduceLeft(acc, p, reducer) {
    return chainReduce(acc, (acc)=>map(p, (v, data, i, j)=>reducer(acc, v, data, i, j)));
}
function reduceRight(p, acc, reducer) {
    return map(many(p), (vs, data, i, j)=>vs.reduceRight((acc, v)=>reducer(v, acc, data, i, j), acc));
}
function leftAssoc1(pLeft, pOper) {
    return chain(pLeft, (v0)=>reduceLeft(v0, pOper, (acc, f)=>f(acc)));
}
function rightAssoc1(pOper, pRight) {
    return ab(reduceRight(pOper, (y)=>y, (f, acc)=>(y)=>f(acc(y))), pRight, (f, v)=>f(v));
}
function leftAssoc2(pLeft, pOper, pRight) {
    return chain(pLeft, (v0)=>reduceLeft(v0, ab(pOper, pRight, (f, y)=>[
                f,
                y
            ]), (acc, [f, y])=>f(acc, y)));
}
function rightAssoc2(pLeft, pOper, pRight) {
    return ab(reduceRight(ab(pLeft, pOper, (x, f)=>[
            x,
            f
        ]), (y)=>y, ([x, f], acc)=>(y)=>f(x, acc(y))), pRight, (f, v)=>f(v));
}
function condition(cond, pTrue, pFalse) {
    return (data, i)=>cond(data, i) ? pTrue(data, i) : pFalse(data, i);
}
function decide(p) {
    return (data, i)=>mapOuter(p(data, i), (m1)=>m1.value(data, m1.position));
}
function chain(p, f) {
    return (data, i)=>mapOuter(p(data, i), (m1)=>f(m1.value, data, i, m1.position)(data, m1.position));
}
function ahead(p) {
    return (data, i)=>mapOuter(p(data, i), (m1)=>({
                matched: true,
                position: i,
                value: m1.value
            }));
}
function recursive(f) {
    return function(data, i) {
        return f()(data, i);
    };
}
function start(data, i) {
    return i !== 0 ? {
        matched: false
    } : {
        matched: true,
        position: i,
        value: true
    };
}
function end(data, i) {
    return i < data.tokens.length ? {
        matched: false
    } : {
        matched: true,
        position: i,
        value: true
    };
}
function remainingTokensNumber(data, i) {
    return data.tokens.length - i;
}
function parserPosition(data, i, formatToken, contextTokens = 3) {
    const len = data.tokens.length;
    const lowIndex = clamp(0, i - contextTokens, len - contextTokens);
    const highIndex = clamp(contextTokens, i + 1 + contextTokens, len);
    const tokensSlice = data.tokens.slice(lowIndex, highIndex);
    const lines = [];
    const indexWidth = String(highIndex - 1).length + 1;
    if (i < 0) {
        lines.push(`${String(i).padStart(indexWidth)} >>`);
    }
    if (0 < lowIndex) {
        lines.push("...".padStart(indexWidth + 6));
    }
    for(let j = 0; j < tokensSlice.length; j++){
        const index = lowIndex + j;
        lines.push(`${String(index).padStart(indexWidth)} ${index === i ? ">" : " "} ${escapeWhitespace(formatToken(tokensSlice[j]))}`);
    }
    if (highIndex < len) {
        lines.push("...".padStart(indexWidth + 6));
    }
    if (len <= i) {
        lines.push(`${String(i).padStart(indexWidth)} >>`);
    }
    return lines.join("\n");
}
function parse(parser, tokens, options, formatToken = JSON.stringify) {
    const data = {
        tokens: tokens,
        options: options
    };
    const result = parser(data, 0);
    if (!result.matched) {
        throw new Error("No match");
    }
    if (result.position < data.tokens.length) {
        throw new Error(`Partial match. Parsing stopped at:\n${parserPosition(data, result.position, formatToken)}`);
    }
    return result.value;
}
function tryParse(parser, tokens, options) {
    const result = parser({
        tokens: tokens,
        options: options
    }, 0);
    return result.matched ? result.value : undefined;
}
function match(matcher, tokens, options) {
    const result = matcher({
        tokens: tokens,
        options: options
    }, 0);
    return result.value;
}


;// CONCATENATED MODULE: ./node_modules/parseley/lib/parseley.mjs


var ast = /*#__PURE__*/ Object.freeze({
    __proto__: null
});
const ws = `(?:[ \\t\\r\\n\\f]*)`;
const nl = `(?:\\n|\\r\\n|\\r|\\f)`;
const nonascii = `[^\\x00-\\x7F]`;
const unicode = `(?:\\\\[0-9a-f]{1,6}(?:\\r\\n|[ \\n\\r\\t\\f])?)`;
const parseley_escape = `(?:\\\\[^\\n\\r\\f0-9a-f])`;
const nmstart = `(?:[_a-z]|${nonascii}|${unicode}|${parseley_escape})`;
const nmchar = `(?:[_a-z0-9-]|${nonascii}|${unicode}|${parseley_escape})`;
const parseley_name = `(?:${nmchar}+)`;
const ident = `(?:[-]?${nmstart}${nmchar}*)`;
const string1 = `'([^\\n\\r\\f\\\\']|\\\\${nl}|${nonascii}|${unicode}|${parseley_escape})*'`;
const string2 = `"([^\\n\\r\\f\\\\"]|\\\\${nl}|${nonascii}|${unicode}|${parseley_escape})*"`;
const lexSelector = o([
    {
        name: "ws",
        regex: new RegExp(ws)
    },
    {
        name: "hash",
        regex: new RegExp(`#${parseley_name}`, "i")
    },
    {
        name: "ident",
        regex: new RegExp(ident, "i")
    },
    {
        name: "str1",
        regex: new RegExp(string1, "i")
    },
    {
        name: "str2",
        regex: new RegExp(string2, "i")
    },
    {
        name: "*"
    },
    {
        name: "."
    },
    {
        name: ","
    },
    {
        name: "["
    },
    {
        name: "]"
    },
    {
        name: "="
    },
    {
        name: ">"
    },
    {
        name: "|"
    },
    {
        name: "+"
    },
    {
        name: "~"
    },
    {
        name: "^"
    },
    {
        name: "$"
    }
]);
const lexEscapedString = o([
    {
        name: "unicode",
        regex: new RegExp(unicode, "i")
    },
    {
        name: "escape",
        regex: new RegExp(parseley_escape, "i")
    },
    {
        name: "any",
        regex: new RegExp("[\\s\\S]", "i")
    }
]);
function sumSpec([a0, a1, a2], [b0, b1, b2]) {
    return [
        a0 + b0,
        a1 + b1,
        a2 + b2
    ];
}
function sumAllSpec(ss) {
    return ss.reduce(sumSpec, [
        0,
        0,
        0
    ]);
}
const unicodeEscapedSequence_ = token((t)=>t.name === "unicode" ? String.fromCodePoint(parseInt(t.text.slice(1), 16)) : undefined);
const escapedSequence_ = token((t)=>t.name === "escape" ? t.text.slice(1) : undefined);
const anyChar_ = token((t)=>t.name === "any" ? t.text : undefined);
const escapedString_ = map(many(choice(unicodeEscapedSequence_, escapedSequence_, anyChar_)), (cs)=>cs.join(""));
function parseley_unescape(escapedString) {
    const lexerResult = lexEscapedString(escapedString);
    const result = escapedString_({
        tokens: lexerResult.tokens,
        options: undefined
    }, 0);
    return result.value;
}
function literal(name) {
    return token((t)=>t.name === name ? true : undefined);
}
const whitespace_ = token((t)=>t.name === "ws" ? null : undefined);
const optionalWhitespace_ = core_option(whitespace_, null);
function optionallySpaced(parser) {
    return middle(optionalWhitespace_, parser, optionalWhitespace_);
}
const identifier_ = token((t)=>t.name === "ident" ? parseley_unescape(t.text) : undefined);
const hashId_ = token((t)=>t.name === "hash" ? parseley_unescape(t.text.slice(1)) : undefined);
const string_ = token((t)=>t.name.startsWith("str") ? parseley_unescape(t.text.slice(1, -1)) : undefined);
const namespace_ = left(core_option(identifier_, ""), literal("|"));
const qualifiedName_ = otherwise(ab(namespace_, identifier_, (ns, name)=>({
        name: name,
        namespace: ns
    })), map(identifier_, (name)=>({
        name: name,
        namespace: null
    })));
const uniSelector_ = otherwise(ab(namespace_, literal("*"), (ns)=>({
        type: "universal",
        namespace: ns,
        specificity: [
            0,
            0,
            0
        ]
    })), map(literal("*"), ()=>({
        type: "universal",
        namespace: null,
        specificity: [
            0,
            0,
            0
        ]
    })));
const tagSelector_ = map(qualifiedName_, ({ name, namespace })=>({
        type: "tag",
        name: name,
        namespace: namespace,
        specificity: [
            0,
            0,
            1
        ]
    }));
const classSelector_ = ab(literal("."), identifier_, (fullstop, name)=>({
        type: "class",
        name: name,
        specificity: [
            0,
            1,
            0
        ]
    }));
const idSelector_ = map(hashId_, (name)=>({
        type: "id",
        name: name,
        specificity: [
            1,
            0,
            0
        ]
    }));
const attrModifier_ = token((t)=>{
    if (t.name === "ident") {
        if (t.text === "i" || t.text === "I") {
            return "i";
        }
        if (t.text === "s" || t.text === "S") {
            return "s";
        }
    }
    return undefined;
});
const attrValue_ = otherwise(ab(string_, core_option(right(optionalWhitespace_, attrModifier_), null), (v, mod)=>({
        value: v,
        modifier: mod
    })), ab(identifier_, core_option(right(whitespace_, attrModifier_), null), (v, mod)=>({
        value: v,
        modifier: mod
    })));
const attrMatcher_ = choice(map(literal("="), ()=>"="), ab(literal("~"), literal("="), ()=>"~="), ab(literal("|"), literal("="), ()=>"|="), ab(literal("^"), literal("="), ()=>"^="), ab(literal("$"), literal("="), ()=>"$="), ab(literal("*"), literal("="), ()=>"*="));
const attrPresenceSelector_ = abc(literal("["), optionallySpaced(qualifiedName_), literal("]"), (lbr, { name, namespace })=>({
        type: "attrPresence",
        name: name,
        namespace: namespace,
        specificity: [
            0,
            1,
            0
        ]
    }));
const attrValueSelector_ = middle(literal("["), abc(optionallySpaced(qualifiedName_), attrMatcher_, optionallySpaced(attrValue_), ({ name, namespace }, matcher, { value, modifier })=>({
        type: "attrValue",
        name: name,
        namespace: namespace,
        matcher: matcher,
        value: value,
        modifier: modifier,
        specificity: [
            0,
            1,
            0
        ]
    })), literal("]"));
const attrSelector_ = otherwise(attrPresenceSelector_, attrValueSelector_);
const typeSelector_ = otherwise(uniSelector_, tagSelector_);
const subclassSelector_ = choice(idSelector_, classSelector_, attrSelector_);
const compoundSelector_ = map(otherwise(flatten(typeSelector_, many(subclassSelector_)), many1(subclassSelector_)), (ss)=>{
    return {
        type: "compound",
        list: ss,
        specificity: sumAllSpec(ss.map((s)=>s.specificity))
    };
});
const combinator_ = choice(map(literal(">"), ()=>">"), map(literal("+"), ()=>"+"), map(literal("~"), ()=>"~"), ab(literal("|"), literal("|"), ()=>"||"));
const combinatorSeparator_ = otherwise(optionallySpaced(combinator_), map(whitespace_, ()=>" "));
const complexSelector_ = leftAssoc2(compoundSelector_, map(combinatorSeparator_, (c)=>(left, right)=>({
            type: "compound",
            list: [
                ...right.list,
                {
                    type: "combinator",
                    combinator: c,
                    left: left,
                    specificity: left.specificity
                }
            ],
            specificity: sumSpec(left.specificity, right.specificity)
        })), compoundSelector_);
const listSelector_ = leftAssoc2(map(complexSelector_, (s)=>({
        type: "list",
        list: [
            s
        ]
    })), map(optionallySpaced(literal(",")), ()=>(acc, next)=>({
            type: "list",
            list: [
                ...acc.list,
                next
            ]
        })), complexSelector_);
function parse_(parser, str) {
    if (!(typeof str === "string" || str instanceof String)) {
        throw new Error("Expected a selector string. Actual input is not a string!");
    }
    const lexerResult = lexSelector(str);
    if (!lexerResult.complete) {
        throw new Error(`The input "${str}" was only partially tokenized, stopped at offset ${lexerResult.offset}!\n` + prettyPrintPosition(str, lexerResult.offset));
    }
    const result = optionallySpaced(parser)({
        tokens: lexerResult.tokens,
        options: undefined
    }, 0);
    if (!result.matched) {
        throw new Error(`No match for "${str}" input!`);
    }
    if (result.position < lexerResult.tokens.length) {
        const token = lexerResult.tokens[result.position];
        throw new Error(`The input "${str}" was only partially parsed, stopped at offset ${token.offset}!\n` + prettyPrintPosition(str, token.offset, token.len));
    }
    return result.value;
}
function prettyPrintPosition(str, offset, len = 1) {
    return `${str.replace(/(\t)|(\r)|(\n)/g, (m, t, r)=>t ? "␉" : r ? "␍" : "␊")}\n${"".padEnd(offset)}${"^".repeat(len)}`;
}
function parseley_parse(str) {
    return parse_(listSelector_, str);
}
function parse1(str) {
    return parse_(complexSelector_, str);
}
function serialize(selector) {
    if (!selector.type) {
        throw new Error("This is not an AST node.");
    }
    switch(selector.type){
        case "universal":
            return _serNs(selector.namespace) + "*";
        case "tag":
            return _serNs(selector.namespace) + _serIdent(selector.name);
        case "class":
            return "." + _serIdent(selector.name);
        case "id":
            return "#" + _serIdent(selector.name);
        case "attrPresence":
            return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}]`;
        case "attrValue":
            return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}${selector.matcher}"${_serStr(selector.value)}"${selector.modifier ? selector.modifier : ""}]`;
        case "combinator":
            return serialize(selector.left) + selector.combinator;
        case "compound":
            return selector.list.reduce((acc, node)=>{
                if (node.type === "combinator") {
                    return serialize(node) + acc;
                } else {
                    return acc + serialize(node);
                }
            }, "");
        case "list":
            return selector.list.map(serialize).join(",");
    }
}
function _serNs(ns) {
    return ns || ns === "" ? _serIdent(ns) + "|" : "";
}
function _codePoint(char) {
    return `\\${char.codePointAt(0).toString(16)} `;
}
function _serIdent(str) {
    return str.replace(/(^[0-9])|(^-[0-9])|(^-$)|([-0-9a-zA-Z_]|[^\x00-\x7F])|(\x00)|([\x01-\x1f]|\x7f)|([\s\S])/g, (m, d1, d2, hy, safe, nl, ctrl, other)=>d1 ? _codePoint(d1) : d2 ? "-" + _codePoint(d2.slice(1)) : hy ? "\\-" : safe ? safe : nl ? "�" : ctrl ? _codePoint(ctrl) : "\\" + other);
}
function _serStr(str) {
    return str.replace(/(")|(\\)|(\x00)|([\x01-\x1f]|\x7f)/g, (m, dq, bs, nl, ctrl)=>dq ? '\\"' : bs ? "\\\\" : nl ? "�" : _codePoint(ctrl));
}
function normalize(selector) {
    if (!selector.type) {
        throw new Error("This is not an AST node.");
    }
    switch(selector.type){
        case "compound":
            {
                selector.list.forEach(normalize);
                selector.list.sort((a, b)=>_compareArrays(_getSelectorPriority(a), _getSelectorPriority(b)));
                break;
            }
        case "combinator":
            {
                normalize(selector.left);
                break;
            }
        case "list":
            {
                selector.list.forEach(normalize);
                selector.list.sort((a, b)=>serialize(a) < serialize(b) ? -1 : 1);
                break;
            }
    }
    return selector;
}
function _getSelectorPriority(selector) {
    switch(selector.type){
        case "universal":
            return [
                1
            ];
        case "tag":
            return [
                1
            ];
        case "id":
            return [
                2
            ];
        case "class":
            return [
                3,
                selector.name
            ];
        case "attrPresence":
            return [
                4,
                serialize(selector)
            ];
        case "attrValue":
            return [
                5,
                serialize(selector)
            ];
        case "combinator":
            return [
                15,
                serialize(selector)
            ];
    }
}
function compareSelectors(a, b) {
    return _compareArrays(a.specificity, b.specificity);
}
function compareSpecificity(a, b) {
    return _compareArrays(a, b);
}
function _compareArrays(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        throw new Error("Arguments must be arrays.");
    }
    const shorter = a.length < b.length ? a.length : b.length;
    for(let i = 0; i < shorter; i++){
        if (a[i] === b[i]) {
            continue;
        }
        return a[i] < b[i] ? -1 : 1;
    }
    return a.length - b.length;
}


;// CONCATENATED MODULE: ./node_modules/selderee/lib/selderee.mjs


var Ast = /*#__PURE__*/ Object.freeze({
    __proto__: null
});
var Types = /*#__PURE__*/ Object.freeze({
    __proto__: null
});
const treeify = (nodes)=>"▽\n" + treeifyArray(nodes, thinLines);
const thinLines = [
    [
        "├─",
        "│ "
    ],
    [
        "└─",
        "  "
    ]
];
const heavyLines = [
    [
        "┠─",
        "┃ "
    ],
    [
        "┖─",
        "  "
    ]
];
const doubleLines = [
    [
        "╟─",
        "║ "
    ],
    [
        "╙─",
        "  "
    ]
];
function treeifyArray(nodes, tpl = heavyLines) {
    return prefixItems(tpl, nodes.map((n)=>treeifyNode(n)));
}
function treeifyNode(node) {
    switch(node.type){
        case "terminal":
            {
                const vctr = node.valueContainer;
                return `◁ #${vctr.index} ${JSON.stringify(vctr.specificity)} ${vctr.value}`;
            }
        case "tagName":
            return `◻ Tag name\n${treeifyArray(node.variants, doubleLines)}`;
        case "attrValue":
            return `▣ Attr value: ${node.name}\n${treeifyArray(node.matchers, doubleLines)}`;
        case "attrPresence":
            return `◨ Attr presence: ${node.name}\n${treeifyArray(node.cont)}`;
        case "pushElement":
            return `◉ Push element: ${node.combinator}\n${treeifyArray(node.cont, thinLines)}`;
        case "popElement":
            return `◌ Pop element\n${treeifyArray(node.cont, thinLines)}`;
        case "variant":
            return `◇ = ${node.value}\n${treeifyArray(node.cont)}`;
        case "matcher":
            return `◈ ${node.matcher} "${node.value}"${node.modifier || ""}\n${treeifyArray(node.cont)}`;
    }
}
function prefixItems(tpl, items) {
    return items.map((item, i, { length })=>prefixItem(tpl, item, i === length - 1)).join("\n");
}
function prefixItem(tpl, item, tail = true) {
    const tpl1 = tpl[tail ? 1 : 0];
    return tpl1[0] + item.split("\n").join("\n" + tpl1[1]);
}
var TreeifyBuilder = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    treeify: treeify
});
class DecisionTree {
    constructor(input){
        this.branches = weave(toAstTerminalPairs(input));
    }
    build(builder) {
        return builder(this.branches);
    }
}
function toAstTerminalPairs(array) {
    const len = array.length;
    const results = new Array(len);
    for(let i = 0; i < len; i++){
        const [selectorString, val] = array[i];
        const ast = preprocess(parse1(selectorString));
        results[i] = {
            ast: ast,
            terminal: {
                type: "terminal",
                valueContainer: {
                    index: i,
                    value: val,
                    specificity: ast.specificity
                }
            }
        };
    }
    return results;
}
function preprocess(ast) {
    reduceSelectorVariants(ast);
    normalize(ast);
    return ast;
}
function reduceSelectorVariants(ast) {
    const newList = [];
    ast.list.forEach((sel)=>{
        switch(sel.type){
            case "class":
                newList.push({
                    matcher: "~=",
                    modifier: null,
                    name: "class",
                    namespace: null,
                    specificity: sel.specificity,
                    type: "attrValue",
                    value: sel.name
                });
                break;
            case "id":
                newList.push({
                    matcher: "=",
                    modifier: null,
                    name: "id",
                    namespace: null,
                    specificity: sel.specificity,
                    type: "attrValue",
                    value: sel.name
                });
                break;
            case "combinator":
                reduceSelectorVariants(sel.left);
                newList.push(sel);
                break;
            case "universal":
                break;
            default:
                newList.push(sel);
                break;
        }
    });
    ast.list = newList;
}
function weave(items) {
    const branches = [];
    while(items.length){
        const topKind = findTopKey(items, (sel)=>true, getSelectorKind);
        const { matches, nonmatches, empty } = breakByKind(items, topKind);
        items = nonmatches;
        if (matches.length) {
            branches.push(branchOfKind(topKind, matches));
        }
        if (empty.length) {
            branches.push(...terminate(empty));
        }
    }
    return branches;
}
function terminate(items) {
    const results = [];
    for (const item of items){
        const terminal = item.terminal;
        if (terminal.type === "terminal") {
            results.push(terminal);
        } else {
            const { matches, rest } = partition(terminal.cont, (node)=>node.type === "terminal");
            matches.forEach((node)=>results.push(node));
            if (rest.length) {
                terminal.cont = rest;
                results.push(terminal);
            }
        }
    }
    return results;
}
function breakByKind(items, selectedKind) {
    const matches = [];
    const nonmatches = [];
    const empty = [];
    for (const item of items){
        const simpsels = item.ast.list;
        if (simpsels.length) {
            const isMatch = simpsels.some((node)=>getSelectorKind(node) === selectedKind);
            (isMatch ? matches : nonmatches).push(item);
        } else {
            empty.push(item);
        }
    }
    return {
        matches,
        nonmatches,
        empty
    };
}
function getSelectorKind(sel) {
    switch(sel.type){
        case "attrPresence":
            return `attrPresence ${sel.name}`;
        case "attrValue":
            return `attrValue ${sel.name}`;
        case "combinator":
            return `combinator ${sel.combinator}`;
        default:
            return sel.type;
    }
}
function branchOfKind(kind, items) {
    if (kind === "tag") {
        return tagNameBranch(items);
    }
    if (kind.startsWith("attrValue ")) {
        return attrValueBranch(kind.substring(10), items);
    }
    if (kind.startsWith("attrPresence ")) {
        return attrPresenceBranch(kind.substring(13), items);
    }
    if (kind === "combinator >") {
        return combinatorBranch(">", items);
    }
    if (kind === "combinator +") {
        return combinatorBranch("+", items);
    }
    throw new Error(`Unsupported selector kind: ${kind}`);
}
function tagNameBranch(items) {
    const groups = spliceAndGroup(items, (x)=>x.type === "tag", (x)=>x.name);
    const variants = Object.entries(groups).map(([name, group])=>({
            type: "variant",
            value: name,
            cont: weave(group.items)
        }));
    return {
        type: "tagName",
        variants: variants
    };
}
function attrPresenceBranch(name, items) {
    for (const item of items){
        spliceSimpleSelector(item, (x)=>x.type === "attrPresence" && x.name === name);
    }
    return {
        type: "attrPresence",
        name: name,
        cont: weave(items)
    };
}
function attrValueBranch(name, items) {
    const groups = spliceAndGroup(items, (x)=>x.type === "attrValue" && x.name === name, (x)=>`${x.matcher} ${x.modifier || ""} ${x.value}`);
    const matchers = [];
    for (const group of Object.values(groups)){
        const sel = group.oneSimpleSelector;
        const predicate = getAttrPredicate(sel);
        const continuation = weave(group.items);
        matchers.push({
            type: "matcher",
            matcher: sel.matcher,
            modifier: sel.modifier,
            value: sel.value,
            predicate: predicate,
            cont: continuation
        });
    }
    return {
        type: "attrValue",
        name: name,
        matchers: matchers
    };
}
function getAttrPredicate(sel) {
    if (sel.modifier === "i") {
        const expected = sel.value.toLowerCase();
        switch(sel.matcher){
            case "=":
                return (actual)=>expected === actual.toLowerCase();
            case "~=":
                return (actual)=>actual.toLowerCase().split(/[ \t]+/).includes(expected);
            case "^=":
                return (actual)=>actual.toLowerCase().startsWith(expected);
            case "$=":
                return (actual)=>actual.toLowerCase().endsWith(expected);
            case "*=":
                return (actual)=>actual.toLowerCase().includes(expected);
            case "|=":
                return (actual)=>{
                    const lower = actual.toLowerCase();
                    return expected === lower || lower.startsWith(expected) && lower[expected.length] === "-";
                };
        }
    } else {
        const expected = sel.value;
        switch(sel.matcher){
            case "=":
                return (actual)=>expected === actual;
            case "~=":
                return (actual)=>actual.split(/[ \t]+/).includes(expected);
            case "^=":
                return (actual)=>actual.startsWith(expected);
            case "$=":
                return (actual)=>actual.endsWith(expected);
            case "*=":
                return (actual)=>actual.includes(expected);
            case "|=":
                return (actual)=>expected === actual || actual.startsWith(expected) && actual[expected.length] === "-";
        }
    }
}
function combinatorBranch(combinator, items) {
    const groups = spliceAndGroup(items, (x)=>x.type === "combinator" && x.combinator === combinator, (x)=>serialize(x.left));
    const leftItems = [];
    for (const group of Object.values(groups)){
        const rightCont = weave(group.items);
        const leftAst = group.oneSimpleSelector.left;
        leftItems.push({
            ast: leftAst,
            terminal: {
                type: "popElement",
                cont: rightCont
            }
        });
    }
    return {
        type: "pushElement",
        combinator: combinator,
        cont: weave(leftItems)
    };
}
function spliceAndGroup(items, predicate, keyCallback) {
    const groups = {};
    while(items.length){
        const bestKey = findTopKey(items, predicate, keyCallback);
        const bestKeyPredicate = (sel)=>predicate(sel) && keyCallback(sel) === bestKey;
        const hasBestKeyPredicate = (item)=>item.ast.list.some(bestKeyPredicate);
        const { matches, rest } = partition1(items, hasBestKeyPredicate);
        let oneSimpleSelector = null;
        for (const item of matches){
            const splicedNode = spliceSimpleSelector(item, bestKeyPredicate);
            if (!oneSimpleSelector) {
                oneSimpleSelector = splicedNode;
            }
        }
        if (oneSimpleSelector == null) {
            throw new Error("No simple selector is found.");
        }
        groups[bestKey] = {
            oneSimpleSelector: oneSimpleSelector,
            items: matches
        };
        items = rest;
    }
    return groups;
}
function spliceSimpleSelector(item, predicate) {
    const simpsels = item.ast.list;
    const matches = new Array(simpsels.length);
    let firstIndex = -1;
    for(let i = simpsels.length; i-- > 0;){
        if (predicate(simpsels[i])) {
            matches[i] = true;
            firstIndex = i;
        }
    }
    if (firstIndex == -1) {
        throw new Error(`Couldn't find the required simple selector.`);
    }
    const result = simpsels[firstIndex];
    item.ast.list = simpsels.filter((sel, i)=>!matches[i]);
    return result;
}
function findTopKey(items, predicate, keyCallback) {
    const candidates = {};
    for (const item of items){
        const candidates1 = {};
        for (const node of item.ast.list.filter(predicate)){
            candidates1[keyCallback(node)] = true;
        }
        for (const key of Object.keys(candidates1)){
            if (candidates[key]) {
                candidates[key]++;
            } else {
                candidates[key] = 1;
            }
        }
    }
    let topKind = "";
    let topCounter = 0;
    for (const entry of Object.entries(candidates)){
        if (entry[1] > topCounter) {
            topKind = entry[0];
            topCounter = entry[1];
        }
    }
    return topKind;
}
function partition(src, predicate) {
    const matches = [];
    const rest = [];
    for (const x of src){
        if (predicate(x)) {
            matches.push(x);
        } else {
            rest.push(x);
        }
    }
    return {
        matches,
        rest
    };
}
function partition1(src, predicate) {
    const matches = [];
    const rest = [];
    for (const x of src){
        if (predicate(x)) {
            matches.push(x);
        } else {
            rest.push(x);
        }
    }
    return {
        matches,
        rest
    };
}
class Picker {
    constructor(f){
        this.f = f;
    }
    pickAll(el) {
        return this.f(el);
    }
    pick1(el, preferFirst = false) {
        const results = this.f(el);
        const len = results.length;
        if (len === 0) {
            return null;
        }
        if (len === 1) {
            return results[0].value;
        }
        const comparator = preferFirst ? comparatorPreferFirst : comparatorPreferLast;
        let result = results[0];
        for(let i = 1; i < len; i++){
            const next = results[i];
            if (comparator(result, next)) {
                result = next;
            }
        }
        return result.value;
    }
}
function comparatorPreferFirst(acc, next) {
    const diff = compareSpecificity(next.specificity, acc.specificity);
    return diff > 0 || diff === 0 && next.index < acc.index;
}
function comparatorPreferLast(acc, next) {
    const diff = compareSpecificity(next.specificity, acc.specificity);
    return diff > 0 || diff === 0 && next.index > acc.index;
}


;// CONCATENATED MODULE: ./node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.mjs


function hp2Builder(nodes) {
    return new Picker(handleArray(nodes));
}
function handleArray(nodes) {
    const matchers = nodes.map(handleNode);
    return (el, ...tail)=>matchers.flatMap((m)=>m(el, ...tail));
}
function handleNode(node) {
    switch(node.type){
        case "terminal":
            {
                const result = [
                    node.valueContainer
                ];
                return (el, ...tail)=>result;
            }
        case "tagName":
            return handleTagName(node);
        case "attrValue":
            return handleAttrValueName(node);
        case "attrPresence":
            return handleAttrPresenceName(node);
        case "pushElement":
            return handlePushElementNode(node);
        case "popElement":
            return handlePopElementNode(node);
    }
}
function handleTagName(node) {
    const variants = {};
    for (const variant of node.variants){
        variants[variant.value] = handleArray(variant.cont);
    }
    return (el, ...tail)=>{
        const continuation = variants[el.name];
        return continuation ? continuation(el, ...tail) : [];
    };
}
function handleAttrPresenceName(node) {
    const attrName = node.name;
    const continuation = handleArray(node.cont);
    return (el, ...tail)=>Object.prototype.hasOwnProperty.call(el.attribs, attrName) ? continuation(el, ...tail) : [];
}
function handleAttrValueName(node) {
    const callbacks = [];
    for (const matcher of node.matchers){
        const predicate = matcher.predicate;
        const continuation = handleArray(matcher.cont);
        callbacks.push((attr, el, ...tail)=>predicate(attr) ? continuation(el, ...tail) : []);
    }
    const attrName = node.name;
    return (el, ...tail)=>{
        const attr = el.attribs[attrName];
        return attr || attr === "" ? callbacks.flatMap((cb)=>cb(attr, el, ...tail)) : [];
    };
}
function handlePushElementNode(node) {
    const continuation = handleArray(node.cont);
    const leftElementGetter = node.combinator === "+" ? getPrecedingElement : getParentElement;
    return (el, ...tail)=>{
        const next = leftElementGetter(el);
        if (next === null) {
            return [];
        }
        return continuation(next, el, ...tail);
    };
}
const getPrecedingElement = (el)=>{
    const prev = el.prev;
    if (prev === null) {
        return null;
    }
    return node_isTag(prev) ? prev : getPrecedingElement(prev);
};
const getParentElement = (el)=>{
    const parent = el.parent;
    return parent && node_isTag(parent) ? parent : null;
};
function handlePopElementNode(node) {
    const continuation = handleArray(node.cont);
    return (el, next, ...tail)=>continuation(next, ...tail);
}


;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/generated/decode-data-html.js
// Generated using scripts/write-decode-map.ts
/* harmony default export */ const decode_data_html = (new Uint16Array(// prettier-ignore
'ᵁ<\xd5ıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\x00\x00\x00\x00\x00\x00ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig耻\xc6䃆P耻&䀦cute耻\xc1䃁reve;䄂Āiyx}rc耻\xc2䃂;䐐r;쀀\ud835\udd04rave耻\xc0䃀pha;䎑acr;䄀d;橓Āgp\x9d\xa1on;䄄f;쀀\ud835\udd38plyFunction;恡ing耻\xc5䃅Ācs\xbe\xc3r;쀀\ud835\udc9cign;扔ilde耻\xc3䃃ml耻\xc4䃄Ѐaceforsu\xe5\xfb\xfeėĜĢħĪĀcr\xea\xf2kslash;或Ŷ\xf6\xf8;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀\ud835\udd05pf;쀀\ud835\udd39eve;䋘c\xf2ēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻\xa9䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻\xc7䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷\xf2ſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀\ud835\udc9epĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀\ud835\udd07Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\x00\x00\x00͔͂\x00Ѕf;쀀\ud835\udd3bƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegra\xecȹoɴ͹\x00\x00ͻ\xbb͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔e\xe5ˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\x00\x00ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\x00ц\x00ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\x00ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀\ud835\udc9frok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻\xd0䃐cute耻\xc9䃉ƀaiyӒӗӜron;䄚rc耻\xca䃊;䐭ot;䄖r;쀀\ud835\udd08rave耻\xc8䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\x00\x00ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀\ud835\udd3csilon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻\xcb䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀\ud835\udd09lledɓ֗\x00\x00֣mallSquare;旼erySmallSquare;斪Ͱֺ\x00ֿ\x00\x00ׄf;쀀\ud835\udd3dAll;戀riertrf;愱c\xf2׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀\ud835\udd0a;拙pf;쀀\ud835\udd3eeater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀\ud835\udca2;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\x00ڲf;愍izontalLine;攀Āctۃۅ\xf2کrok;䄦mpńېۘownHum\xf0įqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻\xcd䃍Āiyܓܘrc耻\xce䃎;䐘ot;䄰r;愑rave耻\xcc䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lie\xf3ϝǴ݉\x00ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀\ud835\udd40a;䎙cr;愐ilde;䄨ǫޚ\x00ޞcy;䐆l耻\xcf䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀\ud835\udd0dpf;쀀\ud835\udd41ǣ߇\x00ߌr;쀀\ud835\udca5rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀\ud835\udd0epf;쀀\ud835\udd42cr;쀀\ud835\udca6րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\x00ࣃbleBracket;柦nǔࣈ\x00࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ight\xe1Μs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀\ud835\udd0fĀ;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊight\xe1οight\xe1ϊf;쀀\ud835\udd43erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂ\xf2ࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀\ud835\udd10nusPlus;戓pf;쀀\ud835\udd44c\xf2੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘\xeb૙eryThi\xee૙tedĀGL૸ଆreaterGreate\xf2ٳessLes\xf3ੈLine;䀊r;쀀\ud835\udd11ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀\ud835\udca9ilde耻\xd1䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻\xd3䃓Āiy෎ීrc耻\xd4䃔;䐞blac;䅐r;쀀\ud835\udd12rave耻\xd2䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀\ud835\udd46enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀\ud835\udcaaash耻\xd8䃘iŬื฼de耻\xd5䃕es;樷ml耻\xd6䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀\ud835\udd13i;䎦;䎠usMinus;䂱Āipຢອncareplan\xe5ڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀\ud835\udcab;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀\ud835\udd14pf;愚cr;쀀\ud835\udcac؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻\xae䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r\xbbཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\x00စbleBracket;柧nǔည\x00နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀\ud835\udd16ortȀDLRUᄪᄴᄾᅉownArrow\xbbОeftArrow\xbb࢚ightArrow\xbb࿝pArrow;憑gma;䎣allCircle;战pf;쀀\ud835\udd4aɲᅭ\x00\x00ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀\ud835\udcaear;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Th\xe1ྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et\xbbሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻\xde䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀\ud835\udd17Āeiቻ኉ǲኀ\x00ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀\ud835\udd4bipleDot;惛Āctዖዛr;쀀\ud835\udcafrok;䅦ૡዷጎጚጦ\x00ጬጱ\x00\x00\x00\x00\x00ጸጽ፷ᎅ\x00᏿ᐄᐊᐐĀcrዻጁute耻\xda䃚rĀ;oጇገ憟cir;楉rǣጓ\x00጖y;䐎ve;䅬Āiyጞጣrc耻\xdb䃛;䐣blac;䅰r;쀀\ud835\udd18rave耻\xd9䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀\ud835\udd4cЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥own\xe1ϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀\ud835\udcb0ilde;䅨ml耻\xdc䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀\ud835\udd19pf;쀀\ud835\udd4dcr;쀀\ud835\udcb1dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀\ud835\udd1apf;쀀\ud835\udd4ecr;쀀\ud835\udcb2Ȁfiosᓋᓐᓒᓘr;쀀\ud835\udd1b;䎞pf;쀀\ud835\udd4fcr;쀀\ud835\udcb3ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻\xdd䃝Āiyᔉᔍrc;䅶;䐫r;쀀\ud835\udd1cpf;쀀\ud835\udd50cr;쀀\ud835\udcb4ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\x00ᕛoWidt\xe8૙a;䎖r;愨pf;愤cr;쀀\ud835\udcb5௡ᖃᖊᖐ\x00ᖰᖶᖿ\x00\x00\x00\x00ᗆᗛᗫᙟ᙭\x00ᚕ᚛ᚲᚹ\x00ᚾcute耻\xe1䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻\xe2䃢te肻\xb4̆;䐰lig耻\xe6䃦Ā;r\xb2ᖺ;쀀\ud835\udd1erave耻\xe0䃠ĀepᗊᗖĀfpᗏᗔsym;愵\xe8ᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\x00\x00ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e\xbbᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢\xbb\xb9arr;捼Āgpᙣᙧon;䄅f;쀀\ud835\udd52΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒ\xf1ᚃing耻\xe5䃥ƀctyᚡᚦᚨr;쀀\ud835\udcb6;䀪mpĀ;e዁ᚯ\xf1ʈilde耻\xe3䃣ml耻\xe4䃤Āciᛂᛈonin\xf4ɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e\xbbᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰s\xe9ᜌno\xf5ēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀\ud835\udd1fg΀costuvwឍឝឳេ៕៛៞ƀaiuបពរ\xf0ݠrc;旯p\xbb፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\x00\x00ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄e\xe5ᑄ\xe5ᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\x00ᠳƲᠯ\x00ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀\ud835\udd53Ā;tᏋᡣom\xbbᏌtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻\xa6䂦Ȁceioᥑᥖᥚᥠr;쀀\ud835\udcb7mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t\xbb᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\x00᧨ᨑᨕᨲ\x00ᨷᩐ\x00\x00᪴\x00\x00᫁\x00\x00ᬡᬮ᭍᭒\x00᯽\x00ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁\xeeړȀaeiu᧰᧻ᨁᨅǰ᧵\x00᧸s;橍on;䄍dil耻\xe7䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻\xb8ƭptyv;榲t脀\xa2;eᨭᨮ䂢r\xe4Ʋr;쀀\ud835\udd20ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark\xbbᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\x00\x00᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟\xbbཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it\xbb᪼ˬ᫇᫔᫺\x00ᬊonĀ;eᫍᫎ䀺Ā;q\xc7\xc6ɭ᫙\x00\x00᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁\xeeᅠeĀmx᫱᫶ent\xbb᫩e\xf3ɍǧ᫾\x00ᬇĀ;dኻᬂot;橭n\xf4Ɇƀfryᬐᬔᬗ;쀀\ud835\udd54o\xe4ɔ脀\xa9;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀\ud835\udcb8Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\x00\x00᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\x00\x00ᯒre\xe3᭳u\xe3᭵ee;拎edge;拏en耻\xa4䂤earrowĀlrᯮ᯳eft\xbbᮀight\xbbᮽe\xe4ᯝĀciᰁᰇonin\xf4Ƿnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍r\xf2΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸\xf2ᄳhĀ;vᱚᱛ怐\xbbऊūᱡᱧarow;椏a\xe3̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻\xb0䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀\ud835\udd21arĀlrᲳᲵ\xbbࣜ\xbbသʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀\xf7;o᳧ᳰntimes;拇n\xf8᳷cy;䑒cɯᴆ\x00\x00ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀\ud835\udd55ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedg\xe5\xfanƀadhᄮᵝᵧownarrow\xf3ᲃarpoonĀlrᵲᵶef\xf4Ჴigh\xf4ᲶŢᵿᶅkaro\xf7གɯᶊ\x00\x00ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀\ud835\udcb9;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃r\xf2Щa\xf2ྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴo\xf4ᲉĀcsḎḔute耻\xe9䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻\xea䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀\ud835\udd22ƀ;rsṐṑṗ檚ave耻\xe8䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et\xbbẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀\ud835\udd56ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on\xbbớ;䏵ȀcsuvỪỳἋἣĀioữḱrc\xbbḮɩỹ\x00\x00ỻ\xedՈantĀglἂἆtr\xbbṝess\xbbṺƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯o\xf4͒ĀahὉὋ;䎷耻\xf0䃰Āmrὓὗl耻\xeb䃫o;悬ƀcipὡὤὧl;䀡s\xf4ծĀeoὬὴctatio\xeeՙnential\xe5չৡᾒ\x00ᾞ\x00ᾡᾧ\x00\x00ῆῌ\x00ΐ\x00ῦῪ \x00 ⁚llingdotse\xf1Ṅy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\x00\x00᾽g;耀ﬀig;耀ﬄ;쀀\ud835\udd23lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\x00ῳf;쀀\ud835\udd57ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\x00⁐β•‥‧‪‬\x00‮耻\xbd䂽;慓耻\xbc䂼;慕;慙;慛Ƴ‴\x00‶;慔;慖ʴ‾⁁\x00\x00⁃耻\xbe䂾;慗;慜5;慘ƶ⁌\x00⁎;慚;慝8;慞l;恄wn;挢cr;쀀\ud835\udcbbࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lan\xf4٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀\ud835\udd24Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox\xbbℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀\ud835\udd58Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\x00↎pro\xf8₞r;楸qĀlqؿ↖les\xf3₈i\xed٫Āen↣↭rtneqq;쀀≩︀\xc5↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽r\xf2ΠȀilmr⇐⇔⇗⇛rs\xf0ᒄf\xbb․il\xf4کĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it\xbb∊lip;怦con;抹r;쀀\ud835\udd25sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀\ud835\udd59bar;怕ƀclt≯≴≸r;쀀\ud835\udcbdas\xe8⇴rok;䄧Ābp⊂⊇ull;恃hen\xbbᱛૡ⊣\x00⊪\x00⊸⋅⋎\x00⋕⋳\x00\x00⋸⌢⍧⍢⍿\x00⎆⎪⎴cute耻\xed䃭ƀ;iyݱ⊰⊵rc耻\xee䃮;䐸Ācx⊼⊿y;䐵cl耻\xa1䂡ĀfrΟ⋉;쀀\ud835\udd26rave耻\xec䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓in\xe5ގar\xf4ܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝do\xf4⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙er\xf3ᕣ\xe3⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀\ud835\udd5aa;䎹uest耻\xbf䂿Āci⎊⎏r;쀀\ud835\udcbenʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\x00⎼cy;䑖l耻\xef䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀\ud835\udd27ath;䈷pf;쀀\ud835\udd5bǣ⏬\x00⏱r;쀀\ud835\udcbfrcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀\ud835\udd28reen;䄸cy;䑅cy;䑜pf;쀀\ud835\udd5ccr;쀀\ud835\udcc0஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼r\xf2৆\xf2Εail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\x00⒪\x00⒱\x00\x00\x00\x00\x00⒵Ⓔ\x00ⓆⓈⓍ\x00⓹ute;䄺mptyv;榴ra\xeeࡌbda;䎻gƀ;dlࢎⓁⓃ;榑\xe5ࢎ;檅uo耻\xab䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝\xeb≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼\xecࢰ\xe2┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□a\xe9⓶arpoonĀdu▯▴own\xbbњp\xbb०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoon\xf3྘quigarro\xf7⇰hreetimes;拋ƀ;qs▋ও◺lan\xf4বʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋ppro\xf8Ⓠot;拖qĀgq♃♅\xf4উgt\xf2⒌\xf4ছi\xedলƀilr♕࣡♚sht;楼;쀀\ud835\udd29Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖r\xf2◁orne\xf2ᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che\xbb⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox\xbb⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽r\xebࣁgƀlmr⛿✍✔eftĀar০✇ight\xe1৲apsto;柼ight\xe1৽parrowĀlr✥✩ef\xf4⓭ight;憬ƀafl✶✹✽r;榅;쀀\ud835\udd5dus;樭imes;樴š❋❏st;戗\xe1ፎƀ;ef❗❘᠀旊nge\xbb❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇r\xf2ࢨorne\xf2ᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀\ud835\udcc1mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹re\xe5◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀\xc5⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻\xaf䂯Āet⡗⡙;時Ā;e⡞⡟朠se\xbb⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻ow\xeeҌef\xf4ए\xf0Ꮡker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle\xbbᘦr;쀀\ud835\udd2ao;愧ƀcdn⢯⢴⣉ro耻\xb5䂵Ȁ;acdᑤ⢽⣀⣄s\xf4ᚧir;櫰ot肻\xb7Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛\xf2−\xf0ઁĀdp⣩⣮els;抧f;쀀\ud835\udd5eĀct⣸⣽r;쀀\ud835\udcc2pos\xbbᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la\xbb˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉ro\xf8඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\x00⧣p肻\xa0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\x00⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸ui\xf6ୣĀei⩊⩎ar;椨\xed஘istĀ;s஠டr;쀀\ud835\udd2bȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lan\xf4௢i\xed௪Ā;rஶ⪁\xbbஷƀAap⪊⪍⪑r\xf2⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹r\xf2⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro\xf7⫁ightarro\xf7⪐ƀ;qs఻⪺⫪lan\xf4ౕĀ;sౕ⫴\xbbశi\xedౝĀ;rవ⫾iĀ;eచథi\xe4ඐĀpt⬌⬑f;쀀\ud835\udd5f膀\xac;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lle\xec୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳u\xe5ಥĀ;cಘ⭸Ā;eಒ⭽\xf1ಘȀAait⮈⮋⮝⮧r\xf2⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow\xbb⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉u\xe5൅;쀀\ud835\udcc3ortɭ⬅\x00\x00⯖ar\xe1⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭\xe5೸\xe5ഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗ\xf1സȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇ\xecௗlde耻\xf1䃱\xe7ృiangleĀlrⱒⱜeftĀ;eచⱚ\xf1దightĀ;eೋⱥ\xf1೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ⴭ\x00ⴸⵈⵠⵥ⵲ⶄᬇ\x00\x00ⶍⶫ\x00ⷈⷎ\x00ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻\xf3䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻\xf4䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀\ud835\udd2cͯ⵹\x00\x00⵼\x00ⶂn;䋛ave耻\xf2䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨr\xf2᪀Āir⶝ⶠr;榾oss;榻n\xe5๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀\ud835\udd60ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨r\xf2᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f\xbbⷿ耻\xaa䂪耻\xba䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧\xf2⸁ash耻\xf8䃸l;折iŬⸯ⸴de耻\xf5䃵esĀ;aǛ⸺s;樶ml耻\xf6䃶bar;挽ૡ⹞\x00⹽\x00⺀⺝\x00⺢⺹\x00\x00⻋ຜ\x00⼓\x00\x00⼫⾼\x00⿈rȀ;astЃ⹧⹲຅脀\xb6;l⹭⹮䂶le\xecЃɩ⹸\x00\x00⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀\ud835\udd2dƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕ma\xf4੶ne;明ƀ;tv⺿⻀⻈䏀chfork\xbb´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎\xf6⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻\xb1ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀\ud835\udd61nd耻\xa3䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷u\xe5໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾ppro\xf8⽃urlye\xf1໙\xf1໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨i\xedໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺\xf0⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴\xef໻rel;抰Āci⿀⿅r;쀀\ud835\udcc5;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀\ud835\udd2epf;쀀\ud835\udd62rime;恗cr;쀀\ud835\udcc6ƀaeo⿸〉〓tĀei⿾々rnion\xf3ڰnt;樖stĀ;e【】䀿\xf1Ἑ\xf4༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがr\xf2Ⴓ\xf2ϝail;検ar\xf2ᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕i\xe3ᅮmptyv;榳gȀ;del࿑らるろ;榒;榥\xe5࿑uo耻\xbb䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞\xeb≝\xf0✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶al\xf3༞ƀabrョリヮr\xf2៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗\xec࿲\xe2ヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜn\xe5Ⴛar\xf4ྩt;断ƀilrㅩဣㅮsht;楽;쀀\ud835\udd2fĀaoㅷㆆrĀduㅽㅿ\xbbѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭa\xe9トarpoonĀduㆻㆿow\xeeㅾp\xbb႒eftĀah㇊㇐rrow\xf3࿪arpoon\xf3Ցightarrows;應quigarro\xf7ニhreetimes;拌g;䋚ingdotse\xf1ἲƀahm㈍㈐㈓r\xf2࿪a\xf2Ց;怏oustĀ;a㈞㈟掱che\xbb㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾r\xebဃƀafl㉇㉊㉎r;榆;쀀\ud835\udd63us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒ar\xf2㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀\ud835\udcc7Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠re\xe5ㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\x00㍺㎤\x00\x00㏬㏰\x00㐨㑈㑚㒭㒱㓊㓱\x00㘖\x00\x00㘳cute;䅛qu\xef➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\x00㋼;檸on;䅡u\xe5ᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓i\xedሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒\xeb∨Ā;oਸ਼਴t耻\xa7䂧i;䀻war;椩mĀin㍩\xf0nu\xf3\xf1t;朶rĀ;o㍶⁕쀀\ud835\udd30Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\x00\x00㎜i\xe4ᑤara\xec⹯耻\xad䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲ar\xf2ᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetm\xe9㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀\ud835\udd64aĀdr㑍ЂesĀ;u㑔㑕晠it\xbb㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍\xf1ᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝\xf1ᆮƀ;afᅻ㒦ְrť㒫ֱ\xbbᅼar\xf2ᅈȀcemt㒹㒾㓂㓅r;쀀\ud835\udcc8tm\xee\xf1i\xec㐕ar\xe6ᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psilo\xeeỠh\xe9⺯s\xbb⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦ppro\xf8㋺urlye\xf1ᇾ\xf1ᇳƀaes㖂㖈㌛ppro\xf8㌚q\xf1㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻\xb9䂹耻\xb2䂲耻\xb3䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨\xeb∮Ā;oਫ਩war;椪lig耻\xdf䃟௡㙑㙝㙠ዎ㙳㙹\x00㙾㛂\x00\x00\x00\x00\x00㛛㜃\x00㜉㝬\x00\x00\x00㞇ɲ㙖\x00\x00㙛get;挖;䏄r\xeb๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀\ud835\udd31Ȁeiko㚆㚝㚵㚼ǲ㚋\x00㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮ppro\xf8዁im\xbbኬs\xf0ኞĀas㚺㚮\xf0዁rn耻\xfe䃾Ǭ̟㛆⋧es膀\xd7;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀\xe1⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀\ud835\udd65rk;櫚\xe1㍢rime;怴ƀaip㜏㜒㝤d\xe5ቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own\xbbᶻeftĀ;e⠀㜾\xf1म;扜ightĀ;e㊪㝋\xf1ၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀\ud835\udcc9;䑆cy;䑛rok;䅧Āio㞋㞎x\xf4᝷headĀlr㞗㞠eftarro\xf7ࡏightarrow\xbbཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶r\xf2ϭar;楣Ācr㟜㟢ute耻\xfa䃺\xf2ᅐrǣ㟪\x00㟭y;䑞ve;䅭Āiy㟵㟺rc耻\xfb䃻;䑃ƀabh㠃㠆㠋r\xf2Ꭽlac;䅱a\xf2ᏃĀir㠓㠘sht;楾;쀀\ud835\udd32rave耻\xf9䃹š㠧㠱rĀlr㠬㠮\xbbॗ\xbbႃlk;斀Āct㠹㡍ɯ㠿\x00\x00㡊rnĀ;e㡅㡆挜r\xbb㡆op;挏ri;旸Āal㡖㡚cr;䅫肻\xa8͉Āgp㡢㡦on;䅳f;쀀\ud835\udd66̀adhlsuᅋ㡸㡽፲㢑㢠own\xe1ᎳarpoonĀlr㢈㢌ef\xf4㠭igh\xf4㠯iƀ;hl㢙㢚㢜䏅\xbbᏺon\xbb㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\x00\x00㣁rnĀ;e㢼㢽挝r\xbb㢽op;挎ng;䅯ri;旹cr;쀀\ud835\udccaƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨\xbb᠓Āam㣯㣲r\xf2㢨l耻\xfc䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠r\xf2ϷarĀ;v㤦㤧櫨;櫩as\xe8ϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖app\xe1␕othin\xe7ẖƀhir㓫⻈㥙op\xf4⾵Ā;hᎷ㥢\xefㆍĀiu㥩㥭gm\xe1㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟et\xe1㚜iangleĀlr㦪㦯eft\xbbथight\xbbၑy;䐲ash\xbbံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨa\xf2ᑩr;쀀\ud835\udd33tr\xe9㦮suĀbp㧯㧱\xbbജ\xbb൙pf;쀀\ud835\udd67ro\xf0໻tr\xe9㦴Ācu㨆㨋r;쀀\ud835\udccbĀbp㨐㨘nĀEe㦀㨖\xbb㥾nĀEe㦒㨞\xbb㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀\ud835\udd34pf;쀀\ud835\udd68Ā;eᑹ㩦at\xe8ᑹcr;쀀\ud835\udcccૣណ㪇\x00㪋\x00㪐㪛\x00\x00㪝㪨㪫㪯\x00\x00㫃㫎\x00㫘ៜ៟tr\xe9៑r;쀀\ud835\udd35ĀAa㪔㪗r\xf2σr\xf2৶;䎾ĀAa㪡㪤r\xf2θr\xf2৫a\xf0✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀\ud835\udd69im\xe5ឲĀAa㫇㫊r\xf2ώr\xf2ਁĀcq㫒ីr;쀀\ud835\udccdĀpt៖㫜r\xe9។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻\xfd䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻\xa5䂥r;쀀\ud835\udd36cy;䑗pf;쀀\ud835\udd6acr;쀀\ud835\udcceĀcm㬦㬩y;䑎l耻\xff䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡tr\xe6ᕟa;䎶r;쀀\ud835\udd37cy;䐶grarr;懝pf;쀀\ud835\udd6bcr;쀀\ud835\udccfĀjn㮅㮇;怍j;怌'.split("").map((c)=>c.charCodeAt(0)))); //# sourceMappingURL=decode-data-html.js.map

;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/generated/decode-data-xml.js
// Generated using scripts/write-decode-map.ts
/* harmony default export */ const decode_data_xml = (new Uint16Array(// prettier-ignore
"Ȁaglq	\x15\x18\x1bɭ\x0f\x00\x00\x12p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((c)=>c.charCodeAt(0)))); //# sourceMappingURL=decode-data-xml.js.map

;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/decode_codepoint.js
// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
var _a;
const decodeMap = new Map([
    [
        0,
        65533
    ],
    // C1 Unicode control character reference replacements
    [
        128,
        8364
    ],
    [
        130,
        8218
    ],
    [
        131,
        402
    ],
    [
        132,
        8222
    ],
    [
        133,
        8230
    ],
    [
        134,
        8224
    ],
    [
        135,
        8225
    ],
    [
        136,
        710
    ],
    [
        137,
        8240
    ],
    [
        138,
        352
    ],
    [
        139,
        8249
    ],
    [
        140,
        338
    ],
    [
        142,
        381
    ],
    [
        145,
        8216
    ],
    [
        146,
        8217
    ],
    [
        147,
        8220
    ],
    [
        148,
        8221
    ],
    [
        149,
        8226
    ],
    [
        150,
        8211
    ],
    [
        151,
        8212
    ],
    [
        152,
        732
    ],
    [
        153,
        8482
    ],
    [
        154,
        353
    ],
    [
        155,
        8250
    ],
    [
        156,
        339
    ],
    [
        158,
        382
    ],
    [
        159,
        376
    ]
]);
/**
 * Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
 */ const fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
    let output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(codePoint >>> 10 & 0x3ff | 0xd800);
        codePoint = 0xdc00 | codePoint & 0x3ff;
    }
    output += String.fromCharCode(codePoint);
    return output;
};
/**
 * Replace the given code point with a replacement character if it is a
 * surrogate or is outside the valid range. Otherwise return the code
 * point unchanged.
 */ function replaceCodePoint(codePoint) {
    var _a;
    if (codePoint >= 0xd800 && codePoint <= 0xdfff || codePoint > 0x10ffff) {
        return 0xfffd;
    }
    return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}
/**
 * Replace the code point if relevant, then convert it to a string.
 *
 * @deprecated Use `fromCodePoint(replaceCodePoint(codePoint))` instead.
 * @param codePoint The code point to decode.
 * @returns The decoded code point.
 */ function decodeCodePoint(codePoint) {
    return fromCodePoint(replaceCodePoint(codePoint));
} //# sourceMappingURL=decode_codepoint.js.map

;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/decode.js



// Re-export for use by eg. htmlparser2


var CharCodes;
(function(CharCodes) {
    CharCodes[CharCodes["NUM"] = 35] = "NUM";
    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
    CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
    CharCodes[CharCodes["NINE"] = 57] = "NINE";
    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
    CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
    CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
    CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
    CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */ const TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags) {
    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
    return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
    return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
    return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
/**
 * Checks if the given character is a valid end character for an entity in an attribute.
 *
 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
 */ function isEntityInAttributeInvalidEnd(code) {
    return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState) {
    EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
    EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
    EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
    EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
    EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var decode_DecodingMode;
(function(DecodingMode) {
    /** Entities in text nodes that can end with any character. */ DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
    /** Only allow entities terminated with a semicolon. */ DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
    /** Entities in attributes have limitations on ending characters. */ DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})(decode_DecodingMode || (decode_DecodingMode = {}));
/**
 * Token decoder with support of writing partial entities.
 */ class EntityDecoder {
    constructor(/** The tree used to decode entities. */ decodeTree, /**
     * The function that is called when a codepoint is decoded.
     *
     * For multi-byte named entities, this will be called multiple times,
     * with the second codepoint, and the same `consumed` value.
     *
     * @param codepoint The decoded codepoint.
     * @param consumed The number of bytes consumed by the decoder.
     */ emitCodePoint, /** An object that is used to produce errors. */ errors){
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
        /** The current state of the decoder. */ this.state = EntityDecoderState.EntityStart;
        /** Characters that were consumed while parsing an entity. */ this.consumed = 1;
        /**
         * The result of the entity.
         *
         * Either the result index of a numeric entity, or the codepoint of a
         * numeric entity.
         */ this.result = 0;
        /** The current index in the decode tree. */ this.treeIndex = 0;
        /** The number of characters that were consumed in excess. */ this.excess = 1;
        /** The mode in which the decoder is operating. */ this.decodeMode = decode_DecodingMode.Strict;
    }
    /** Resets the instance to make it reusable. */ startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param string The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ write(str, offset) {
        switch(this.state){
            case EntityDecoderState.EntityStart:
                {
                    if (str.charCodeAt(offset) === CharCodes.NUM) {
                        this.state = EntityDecoderState.NumericStart;
                        this.consumed += 1;
                        return this.stateNumericStart(str, offset + 1);
                    }
                    this.state = EntityDecoderState.NamedEntity;
                    return this.stateNamedEntity(str, offset);
                }
            case EntityDecoderState.NumericStart:
                {
                    return this.stateNumericStart(str, offset);
                }
            case EntityDecoderState.NumericDecimal:
                {
                    return this.stateNumericDecimal(str, offset);
                }
            case EntityDecoderState.NumericHex:
                {
                    return this.stateNumericHex(str, offset);
                }
            case EntityDecoderState.NamedEntity:
                {
                    return this.stateNamedEntity(str, offset);
                }
        }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericStart(str, offset) {
        if (offset >= str.length) {
            return -1;
        }
        if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
            this.state = EntityDecoderState.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(str, offset + 1);
        }
        this.state = EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(str, offset);
    }
    addToNumericResult(str, start, end, base) {
        if (start !== end) {
            const digitCount = end - start;
            this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
            this.consumed += digitCount;
        }
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericHex(str, offset) {
        const startIdx = offset;
        while(offset < str.length){
            const char = str.charCodeAt(offset);
            if (isNumber(char) || isHexadecimalCharacter(char)) {
                offset += 1;
            } else {
                this.addToNumericResult(str, startIdx, offset, 16);
                return this.emitNumericEntity(char, 3);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 16);
        return -1;
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNumericDecimal(str, offset) {
        const startIdx = offset;
        while(offset < str.length){
            const char = str.charCodeAt(offset);
            if (isNumber(char)) {
                offset += 1;
            } else {
                this.addToNumericResult(str, startIdx, offset, 10);
                return this.emitNumericEntity(char, 2);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 10);
        return -1;
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */ emitNumericEntity(lastCp, expectedLength) {
        var _a;
        // Ensure we consumed at least one digit.
        if (this.consumed <= expectedLength) {
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
        }
        // Figure out if this is a legit end of the entity
        if (lastCp === CharCodes.SEMI) {
            this.consumed += 1;
        } else if (this.decodeMode === decode_DecodingMode.Strict) {
            return 0;
        }
        this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
        if (this.errors) {
            if (lastCp !== CharCodes.SEMI) {
                this.errors.missingSemicolonAfterCharacterReference();
            }
            this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */ stateNamedEntity(str, offset) {
        const { decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        // The mask is the number of bytes of the value, including the current byte.
        let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        for(; offset < str.length; offset++, this.excess++){
            const char = str.charCodeAt(offset);
            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
            if (this.treeIndex < 0) {
                return this.result === 0 || // If we are parsing an attribute
                this.decodeMode === decode_DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
                (valueLength === 0 || // And there should be no invalid characters.
                isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
            }
            current = decodeTree[this.treeIndex];
            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            // If the branch is a value, store it and continue
            if (valueLength !== 0) {
                // If the entity is terminated by a semicolon, we are done.
                if (char === CharCodes.SEMI) {
                    return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                }
                // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
                if (this.decodeMode !== decode_DecodingMode.Strict) {
                    this.result = this.treeIndex;
                    this.consumed += this.excess;
                    this.excess = 0;
                }
            }
        }
        return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */ emitNotTerminatedNamedEntity() {
        var _a;
        const { result, decodeTree } = this;
        const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, valueLength, this.consumed);
        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
        return this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */ emitNamedEntityData(result, valueLength, consumed) {
        const { decodeTree } = this;
        this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
        if (valueLength === 3) {
            // For multi-byte values, we need to emit the second byte.
            this.emitCodePoint(decodeTree[result + 2], consumed);
        }
        return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */ end() {
        var _a;
        switch(this.state){
            case EntityDecoderState.NamedEntity:
                {
                    // Emit a named entity if we have one.
                    return this.result !== 0 && (this.decodeMode !== decode_DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
                }
            // Otherwise, emit a numeric entity if we have one.
            case EntityDecoderState.NumericDecimal:
                {
                    return this.emitNumericEntity(0, 2);
                }
            case EntityDecoderState.NumericHex:
                {
                    return this.emitNumericEntity(0, 3);
                }
            case EntityDecoderState.NumericStart:
                {
                    (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
                    return 0;
                }
            case EntityDecoderState.EntityStart:
                {
                    // Return 0 if we have no entity.
                    return 0;
                }
        }
    }
}
/**
 * Creates a function that decodes entities in a string.
 *
 * @param decodeTree The decode tree.
 * @returns A function that decodes entities in a string.
 */ function getDecoder(decodeTree) {
    let ret = "";
    const decoder = new EntityDecoder(decodeTree, (str)=>ret += fromCodePoint(str));
    return function decodeWithTrie(str, decodeMode) {
        let lastIndex = 0;
        let offset = 0;
        while((offset = str.indexOf("&", offset)) >= 0){
            ret += str.slice(lastIndex, offset);
            decoder.startEntity(decodeMode);
            const len = decoder.write(str, // Skip the "&"
            offset + 1);
            if (len < 0) {
                lastIndex = offset + decoder.end();
                break;
            }
            lastIndex = offset + len;
            // If `len` is 0, skip the current `&` and continue.
            offset = len === 0 ? lastIndex + 1 : lastIndex;
        }
        const result = ret + str.slice(lastIndex);
        // Make sure we don't keep a reference to the final string.
        ret = "";
        return result;
    };
}
/**
 * Determines the branch of the current node that is taken given the current
 * character. This function is used to traverse the trie.
 *
 * @param decodeTree The trie.
 * @param current The current node.
 * @param nodeIdx The index right after the current node and its value.
 * @param char The current character.
 * @returns The index of the next node, or -1 if no branch is taken.
 */ function determineBranch(decodeTree, current, nodeIdx, char) {
    const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
    const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
    // Case 1: Single branch encoded in jump offset
    if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
    }
    // Case 2: Multiple branches encoded in jump table
    if (jumpOffset) {
        const value = char - jumpOffset;
        return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
    }
    // Case 3: Multiple branches encoded in dictionary
    // Binary search for the character.
    let lo = nodeIdx;
    let hi = lo + branchCount - 1;
    while(lo <= hi){
        const mid = lo + hi >>> 1;
        const midVal = decodeTree[mid];
        if (midVal < char) {
            lo = mid + 1;
        } else if (midVal > char) {
            hi = mid - 1;
        } else {
            return decodeTree[mid + branchCount];
        }
    }
    return -1;
}
const htmlDecoder = getDecoder(decode_data_html);
const xmlDecoder = getDecoder(decode_data_xml);
/**
 * Decodes an HTML string.
 *
 * @param str The string to decode.
 * @param mode The decoding mode.
 * @returns The decoded string.
 */ function decode_decodeHTML(str, mode = decode_DecodingMode.Legacy) {
    return htmlDecoder(str, mode);
}
/**
 * Decodes an HTML string in an attribute.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */ function decodeHTMLAttribute(str) {
    return htmlDecoder(str, decode_DecodingMode.Attribute);
}
/**
 * Decodes an HTML string, requiring all entities to be terminated by a semicolon.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */ function decodeHTMLStrict(str) {
    return htmlDecoder(str, decode_DecodingMode.Strict);
}
/**
 * Decodes an XML string, requiring all entities to be terminated by a semicolon.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */ function decode_decodeXML(str) {
    return xmlDecoder(str, decode_DecodingMode.Strict);
} //# sourceMappingURL=decode.js.map

;// CONCATENATED MODULE: ./node_modules/htmlparser2/lib/esm/Tokenizer.js

var Tokenizer_CharCodes;
(function(CharCodes) {
    CharCodes[CharCodes["Tab"] = 9] = "Tab";
    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
    CharCodes[CharCodes["Space"] = 32] = "Space";
    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
    CharCodes[CharCodes["Number"] = 35] = "Number";
    CharCodes[CharCodes["Amp"] = 38] = "Amp";
    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
    CharCodes[CharCodes["Dash"] = 45] = "Dash";
    CharCodes[CharCodes["Slash"] = 47] = "Slash";
    CharCodes[CharCodes["Zero"] = 48] = "Zero";
    CharCodes[CharCodes["Nine"] = 57] = "Nine";
    CharCodes[CharCodes["Semi"] = 59] = "Semi";
    CharCodes[CharCodes["Lt"] = 60] = "Lt";
    CharCodes[CharCodes["Eq"] = 61] = "Eq";
    CharCodes[CharCodes["Gt"] = 62] = "Gt";
    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(Tokenizer_CharCodes || (Tokenizer_CharCodes = {}));
/** All the states the tokenizer can be in. */ var State;
(function(State) {
    State[State["Text"] = 1] = "Text";
    State[State["BeforeTagName"] = 2] = "BeforeTagName";
    State[State["InTagName"] = 3] = "InTagName";
    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
    State[State["InClosingTagName"] = 6] = "InClosingTagName";
    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
    // Attributes
    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
    State[State["InAttributeName"] = 9] = "InAttributeName";
    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
    // Declarations
    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
    State[State["InDeclaration"] = 16] = "InDeclaration";
    // Processing instructions
    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
    // Comments & CDATA
    State[State["BeforeComment"] = 18] = "BeforeComment";
    State[State["CDATASequence"] = 19] = "CDATASequence";
    State[State["InSpecialComment"] = 20] = "InSpecialComment";
    State[State["InCommentLike"] = 21] = "InCommentLike";
    // Special tags
    State[State["BeforeSpecialS"] = 22] = "BeforeSpecialS";
    State[State["SpecialStartSequence"] = 23] = "SpecialStartSequence";
    State[State["InSpecialTag"] = 24] = "InSpecialTag";
    State[State["BeforeEntity"] = 25] = "BeforeEntity";
    State[State["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
    State[State["InNamedEntity"] = 27] = "InNamedEntity";
    State[State["InNumericEntity"] = 28] = "InNumericEntity";
    State[State["InHexEntity"] = 29] = "InHexEntity";
})(State || (State = {}));
function isWhitespace(c) {
    return c === Tokenizer_CharCodes.Space || c === Tokenizer_CharCodes.NewLine || c === Tokenizer_CharCodes.Tab || c === Tokenizer_CharCodes.FormFeed || c === Tokenizer_CharCodes.CarriageReturn;
}
function isEndOfTagSection(c) {
    return c === Tokenizer_CharCodes.Slash || c === Tokenizer_CharCodes.Gt || isWhitespace(c);
}
function Tokenizer_isNumber(c) {
    return c >= Tokenizer_CharCodes.Zero && c <= Tokenizer_CharCodes.Nine;
}
function isASCIIAlpha(c) {
    return c >= Tokenizer_CharCodes.LowerA && c <= Tokenizer_CharCodes.LowerZ || c >= Tokenizer_CharCodes.UpperA && c <= Tokenizer_CharCodes.UpperZ;
}
function isHexDigit(c) {
    return c >= Tokenizer_CharCodes.UpperA && c <= Tokenizer_CharCodes.UpperF || c >= Tokenizer_CharCodes.LowerA && c <= Tokenizer_CharCodes.LowerF;
}
var QuoteType;
(function(QuoteType) {
    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
    QuoteType[QuoteType["Single"] = 2] = "Single";
    QuoteType[QuoteType["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
/**
 * Sequences used to match longer strings.
 *
 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
 * sequences with an increased offset.
 */ const Sequences = {
    Cdata: new Uint8Array([
        0x43,
        0x44,
        0x41,
        0x54,
        0x41,
        0x5b
    ]),
    CdataEnd: new Uint8Array([
        0x5d,
        0x5d,
        0x3e
    ]),
    CommentEnd: new Uint8Array([
        0x2d,
        0x2d,
        0x3e
    ]),
    ScriptEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x73,
        0x63,
        0x72,
        0x69,
        0x70,
        0x74
    ]),
    StyleEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x73,
        0x74,
        0x79,
        0x6c,
        0x65
    ]),
    TitleEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x74,
        0x69,
        0x74,
        0x6c,
        0x65
    ])
};
class Tokenizer {
    constructor({ xmlMode = false, decodeEntities = true }, cbs){
        this.cbs = cbs;
        /** The current state the tokenizer is in. */ this.state = State.Text;
        /** The read buffer. */ this.buffer = "";
        /** The beginning of the section that is currently being read. */ this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */ this.index = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */ this.baseState = State.Text;
        /** For special parsing behavior inside of script and style tags. */ this.isSpecial = false;
        /** Indicates whether the tokenizer has been paused. */ this.running = true;
        /** The offset of the current buffer. */ this.offset = 0;
        this.currentSequence = undefined;
        this.sequenceIndex = 0;
        this.trieIndex = 0;
        this.trieCurrent = 0;
        /** For named entities, the index of the value. For numeric entities, the code point. */ this.entityResult = 0;
        this.entityExcess = 0;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.entityTrie = xmlMode ? decode_data_xml : decode_data_html;
    }
    reset() {
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.currentSequence = undefined;
        this.running = true;
        this.offset = 0;
    }
    write(chunk) {
        this.offset += this.buffer.length;
        this.buffer = chunk;
        this.parse();
    }
    end() {
        if (this.running) this.finish();
    }
    pause() {
        this.running = false;
    }
    resume() {
        this.running = true;
        if (this.index < this.buffer.length + this.offset) {
            this.parse();
        }
    }
    /**
     * The current index within all of the written data.
     */ getIndex() {
        return this.index;
    }
    /**
     * The start of the current section.
     */ getSectionStart() {
        return this.sectionStart;
    }
    stateText(c) {
        if (c === Tokenizer_CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(Tokenizer_CharCodes.Lt)) {
            if (this.index > this.sectionStart) {
                this.cbs.ontext(this.sectionStart, this.index);
            }
            this.state = State.BeforeTagName;
            this.sectionStart = this.index;
        } else if (this.decodeEntities && c === Tokenizer_CharCodes.Amp) {
            this.state = State.BeforeEntity;
        }
    }
    stateSpecialStartSequence(c) {
        const isEnd = this.sequenceIndex === this.currentSequence.length;
        const isMatch = isEnd ? isEndOfTagSection(c) : (c | 0x20) === this.currentSequence[this.sequenceIndex];
        if (!isMatch) {
            this.isSpecial = false;
        } else if (!isEnd) {
            this.sequenceIndex++;
            return;
        }
        this.sequenceIndex = 0;
        this.state = State.InTagName;
        this.stateInTagName(c);
    }
    /** Look for an end tag. For <title> tags, also decode entities. */ stateInSpecialTag(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (c === Tokenizer_CharCodes.Gt || isWhitespace(c)) {
                const endOfText = this.index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    // Spoof the index so that reported locations match up.
                    const actualIndex = this.index;
                    this.index = endOfText;
                    this.cbs.ontext(this.sectionStart, endOfText);
                    this.index = actualIndex;
                }
                this.isSpecial = false;
                this.sectionStart = endOfText + 2; // Skip over the `</`
                this.stateInClosingTagName(c);
                return; // We are done; skip the rest of the function.
            }
            this.sequenceIndex = 0;
        }
        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
        } else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd) {
                // We have to parse entities in <title> tags.
                if (this.decodeEntities && c === Tokenizer_CharCodes.Amp) {
                    this.state = State.BeforeEntity;
                }
            } else if (this.fastForwardTo(Tokenizer_CharCodes.Lt)) {
                // Outside of <title> tags, we can fast-forward.
                this.sequenceIndex = 1;
            }
        } else {
            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
            this.sequenceIndex = Number(c === Tokenizer_CharCodes.Lt);
        }
    }
    stateCDATASequence(c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
                this.state = State.InCommentLike;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
            }
        } else {
            this.sequenceIndex = 0;
            this.state = State.InDeclaration;
            this.stateInDeclaration(c); // Reconsume the character
        }
    }
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */ fastForwardTo(c) {
        while(++this.index < this.buffer.length + this.offset){
            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
                return true;
            }
        }
        /*
         * We increment the index at the end of the `parse` loop,
         * so set it to `buffer.length - 1` here.
         *
         * TODO: Refactor `parse` to increment index before calling states.
         */ this.index = this.buffer.length + this.offset - 1;
        return false;
    }
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */ stateInCommentLike(c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                if (this.currentSequence === Sequences.CdataEnd) {
                    this.cbs.oncdata(this.sectionStart, this.index, 2);
                } else {
                    this.cbs.oncomment(this.sectionStart, this.index, 2);
                }
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
                this.state = State.Text;
            }
        } else if (this.sequenceIndex === 0) {
            // Fast-forward to the first character of the sequence
            if (this.fastForwardTo(this.currentSequence[0])) {
                this.sequenceIndex = 1;
            }
        } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
            // Allow long sequences, eg. --->, ]]]>
            this.sequenceIndex = 0;
        }
    }
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */ isTagStartChar(c) {
        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    }
    startSpecial(sequence, offset) {
        this.isSpecial = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
        this.state = State.SpecialStartSequence;
    }
    stateBeforeTagName(c) {
        if (c === Tokenizer_CharCodes.ExclamationMark) {
            this.state = State.BeforeDeclaration;
            this.sectionStart = this.index + 1;
        } else if (c === Tokenizer_CharCodes.Questionmark) {
            this.state = State.InProcessingInstruction;
            this.sectionStart = this.index + 1;
        } else if (this.isTagStartChar(c)) {
            const lower = c | 0x20;
            this.sectionStart = this.index;
            if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
                this.startSpecial(Sequences.TitleEnd, 3);
            } else {
                this.state = !this.xmlMode && lower === Sequences.ScriptEnd[2] ? State.BeforeSpecialS : State.InTagName;
            }
        } else if (c === Tokenizer_CharCodes.Slash) {
            this.state = State.BeforeClosingTagName;
        } else {
            this.state = State.Text;
            this.stateText(c);
        }
    }
    stateInTagName(c) {
        if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateBeforeClosingTagName(c) {
        if (isWhitespace(c)) {
        // Ignore
        } else if (c === Tokenizer_CharCodes.Gt) {
            this.state = State.Text;
        } else {
            this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
            this.sectionStart = this.index;
        }
    }
    stateInClosingTagName(c) {
        if (c === Tokenizer_CharCodes.Gt || isWhitespace(c)) {
            this.cbs.onclosetag(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterClosingTagName;
            this.stateAfterClosingTagName(c);
        }
    }
    stateAfterClosingTagName(c) {
        // Skip everything until ">"
        if (c === Tokenizer_CharCodes.Gt || this.fastForwardTo(Tokenizer_CharCodes.Gt)) {
            this.state = State.Text;
            this.baseState = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeAttributeName(c) {
        if (c === Tokenizer_CharCodes.Gt) {
            this.cbs.onopentagend(this.index);
            if (this.isSpecial) {
                this.state = State.InSpecialTag;
                this.sequenceIndex = 0;
            } else {
                this.state = State.Text;
            }
            this.baseState = this.state;
            this.sectionStart = this.index + 1;
        } else if (c === Tokenizer_CharCodes.Slash) {
            this.state = State.InSelfClosingTag;
        } else if (!isWhitespace(c)) {
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateInSelfClosingTag(c) {
        if (c === Tokenizer_CharCodes.Gt) {
            this.cbs.onselfclosingtag(this.index);
            this.state = State.Text;
            this.baseState = State.Text;
            this.sectionStart = this.index + 1;
            this.isSpecial = false; // Reset special state, in case of self-closing special tags
        } else if (!isWhitespace(c)) {
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateInAttributeName(c) {
        if (c === Tokenizer_CharCodes.Eq || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterAttributeName;
            this.stateAfterAttributeName(c);
        }
    }
    stateAfterAttributeName(c) {
        if (c === Tokenizer_CharCodes.Eq) {
            this.state = State.BeforeAttributeValue;
        } else if (c === Tokenizer_CharCodes.Slash || c === Tokenizer_CharCodes.Gt) {
            this.cbs.onattribend(QuoteType.NoValue, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        } else if (!isWhitespace(c)) {
            this.cbs.onattribend(QuoteType.NoValue, this.index);
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateBeforeAttributeValue(c) {
        if (c === Tokenizer_CharCodes.DoubleQuote) {
            this.state = State.InAttributeValueDq;
            this.sectionStart = this.index + 1;
        } else if (c === Tokenizer_CharCodes.SingleQuote) {
            this.state = State.InAttributeValueSq;
            this.sectionStart = this.index + 1;
        } else if (!isWhitespace(c)) {
            this.sectionStart = this.index;
            this.state = State.InAttributeValueNq;
            this.stateInAttributeValueNoQuotes(c); // Reconsume token
        }
    }
    handleInAttributeValue(c, quote) {
        if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(quote === Tokenizer_CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index);
            this.state = State.BeforeAttributeName;
        } else if (this.decodeEntities && c === Tokenizer_CharCodes.Amp) {
            this.baseState = this.state;
            this.state = State.BeforeEntity;
        }
    }
    stateInAttributeValueDoubleQuotes(c) {
        this.handleInAttributeValue(c, Tokenizer_CharCodes.DoubleQuote);
    }
    stateInAttributeValueSingleQuotes(c) {
        this.handleInAttributeValue(c, Tokenizer_CharCodes.SingleQuote);
    }
    stateInAttributeValueNoQuotes(c) {
        if (isWhitespace(c) || c === Tokenizer_CharCodes.Gt) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(QuoteType.Unquoted, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        } else if (this.decodeEntities && c === Tokenizer_CharCodes.Amp) {
            this.baseState = this.state;
            this.state = State.BeforeEntity;
        }
    }
    stateBeforeDeclaration(c) {
        if (c === Tokenizer_CharCodes.OpeningSquareBracket) {
            this.state = State.CDATASequence;
            this.sequenceIndex = 0;
        } else {
            this.state = c === Tokenizer_CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
        }
    }
    stateInDeclaration(c) {
        if (c === Tokenizer_CharCodes.Gt || this.fastForwardTo(Tokenizer_CharCodes.Gt)) {
            this.cbs.ondeclaration(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateInProcessingInstruction(c) {
        if (c === Tokenizer_CharCodes.Gt || this.fastForwardTo(Tokenizer_CharCodes.Gt)) {
            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeComment(c) {
        if (c === Tokenizer_CharCodes.Dash) {
            this.state = State.InCommentLike;
            this.currentSequence = Sequences.CommentEnd;
            // Allow short comments (eg. <!-->)
            this.sequenceIndex = 2;
            this.sectionStart = this.index + 1;
        } else {
            this.state = State.InDeclaration;
        }
    }
    stateInSpecialComment(c) {
        if (c === Tokenizer_CharCodes.Gt || this.fastForwardTo(Tokenizer_CharCodes.Gt)) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeSpecialS(c) {
        const lower = c | 0x20;
        if (lower === Sequences.ScriptEnd[3]) {
            this.startSpecial(Sequences.ScriptEnd, 4);
        } else if (lower === Sequences.StyleEnd[3]) {
            this.startSpecial(Sequences.StyleEnd, 4);
        } else {
            this.state = State.InTagName;
            this.stateInTagName(c); // Consume the token again
        }
    }
    stateBeforeEntity(c) {
        // Start excess with 1 to include the '&'
        this.entityExcess = 1;
        this.entityResult = 0;
        if (c === Tokenizer_CharCodes.Number) {
            this.state = State.BeforeNumericEntity;
        } else if (c === Tokenizer_CharCodes.Amp) {
        // We have two `&` characters in a row. Stay in the current state.
        } else {
            this.trieIndex = 0;
            this.trieCurrent = this.entityTrie[0];
            this.state = State.InNamedEntity;
            this.stateInNamedEntity(c);
        }
    }
    stateInNamedEntity(c) {
        this.entityExcess += 1;
        this.trieIndex = determineBranch(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
        if (this.trieIndex < 0) {
            this.emitNamedEntity();
            this.index--;
            return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        const masked = this.trieCurrent & BinTrieFlags.VALUE_LENGTH;
        // If the branch is a value, store it and continue
        if (masked) {
            // The mask is the number of bytes of the value, including the current byte.
            const valueLength = (masked >> 14) - 1;
            // If we have a legacy entity while parsing strictly, just skip the number of bytes
            if (!this.allowLegacyEntity() && c !== Tokenizer_CharCodes.Semi) {
                this.trieIndex += valueLength;
            } else {
                // Add 1 as we have already incremented the excess
                const entityStart = this.index - this.entityExcess + 1;
                if (entityStart > this.sectionStart) {
                    this.emitPartial(this.sectionStart, entityStart);
                }
                // If this is a surrogate pair, consume the next two bytes
                this.entityResult = this.trieIndex;
                this.trieIndex += valueLength;
                this.entityExcess = 0;
                this.sectionStart = this.index + 1;
                if (valueLength === 0) {
                    this.emitNamedEntity();
                }
            }
        }
    }
    emitNamedEntity() {
        this.state = this.baseState;
        if (this.entityResult === 0) {
            return;
        }
        const valueLength = (this.entityTrie[this.entityResult] & BinTrieFlags.VALUE_LENGTH) >> 14;
        switch(valueLength){
            case 1:
                {
                    this.emitCodePoint(this.entityTrie[this.entityResult] & ~BinTrieFlags.VALUE_LENGTH);
                    break;
                }
            case 2:
                {
                    this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                    break;
                }
            case 3:
                {
                    this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                    this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
                }
        }
    }
    stateBeforeNumericEntity(c) {
        if ((c | 0x20) === Tokenizer_CharCodes.LowerX) {
            this.entityExcess++;
            this.state = State.InHexEntity;
        } else {
            this.state = State.InNumericEntity;
            this.stateInNumericEntity(c);
        }
    }
    emitNumericEntity(strict) {
        const entityStart = this.index - this.entityExcess - 1;
        const numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
        if (numberStart !== this.index) {
            // Emit leading data if any
            if (entityStart > this.sectionStart) {
                this.emitPartial(this.sectionStart, entityStart);
            }
            this.sectionStart = this.index + Number(strict);
            this.emitCodePoint(replaceCodePoint(this.entityResult));
        }
        this.state = this.baseState;
    }
    stateInNumericEntity(c) {
        if (c === Tokenizer_CharCodes.Semi) {
            this.emitNumericEntity(true);
        } else if (Tokenizer_isNumber(c)) {
            this.entityResult = this.entityResult * 10 + (c - Tokenizer_CharCodes.Zero);
            this.entityExcess++;
        } else {
            if (this.allowLegacyEntity()) {
                this.emitNumericEntity(false);
            } else {
                this.state = this.baseState;
            }
            this.index--;
        }
    }
    stateInHexEntity(c) {
        if (c === Tokenizer_CharCodes.Semi) {
            this.emitNumericEntity(true);
        } else if (Tokenizer_isNumber(c)) {
            this.entityResult = this.entityResult * 16 + (c - Tokenizer_CharCodes.Zero);
            this.entityExcess++;
        } else if (isHexDigit(c)) {
            this.entityResult = this.entityResult * 16 + ((c | 0x20) - Tokenizer_CharCodes.LowerA + 10);
            this.entityExcess++;
        } else {
            if (this.allowLegacyEntity()) {
                this.emitNumericEntity(false);
            } else {
                this.state = this.baseState;
            }
            this.index--;
        }
    }
    allowLegacyEntity() {
        return !this.xmlMode && (this.baseState === State.Text || this.baseState === State.InSpecialTag);
    }
    /**
     * Remove data that has already been consumed from the buffer.
     */ cleanup() {
        // If we are inside of text or attributes, emit what we already have.
        if (this.running && this.sectionStart !== this.index) {
            if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
                this.cbs.ontext(this.sectionStart, this.index);
                this.sectionStart = this.index;
            } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
                this.cbs.onattribdata(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
        }
    }
    shouldContinue() {
        return this.index < this.buffer.length + this.offset && this.running;
    }
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */ parse() {
        while(this.shouldContinue()){
            const c = this.buffer.charCodeAt(this.index - this.offset);
            switch(this.state){
                case State.Text:
                    {
                        this.stateText(c);
                        break;
                    }
                case State.SpecialStartSequence:
                    {
                        this.stateSpecialStartSequence(c);
                        break;
                    }
                case State.InSpecialTag:
                    {
                        this.stateInSpecialTag(c);
                        break;
                    }
                case State.CDATASequence:
                    {
                        this.stateCDATASequence(c);
                        break;
                    }
                case State.InAttributeValueDq:
                    {
                        this.stateInAttributeValueDoubleQuotes(c);
                        break;
                    }
                case State.InAttributeName:
                    {
                        this.stateInAttributeName(c);
                        break;
                    }
                case State.InCommentLike:
                    {
                        this.stateInCommentLike(c);
                        break;
                    }
                case State.InSpecialComment:
                    {
                        this.stateInSpecialComment(c);
                        break;
                    }
                case State.BeforeAttributeName:
                    {
                        this.stateBeforeAttributeName(c);
                        break;
                    }
                case State.InTagName:
                    {
                        this.stateInTagName(c);
                        break;
                    }
                case State.InClosingTagName:
                    {
                        this.stateInClosingTagName(c);
                        break;
                    }
                case State.BeforeTagName:
                    {
                        this.stateBeforeTagName(c);
                        break;
                    }
                case State.AfterAttributeName:
                    {
                        this.stateAfterAttributeName(c);
                        break;
                    }
                case State.InAttributeValueSq:
                    {
                        this.stateInAttributeValueSingleQuotes(c);
                        break;
                    }
                case State.BeforeAttributeValue:
                    {
                        this.stateBeforeAttributeValue(c);
                        break;
                    }
                case State.BeforeClosingTagName:
                    {
                        this.stateBeforeClosingTagName(c);
                        break;
                    }
                case State.AfterClosingTagName:
                    {
                        this.stateAfterClosingTagName(c);
                        break;
                    }
                case State.BeforeSpecialS:
                    {
                        this.stateBeforeSpecialS(c);
                        break;
                    }
                case State.InAttributeValueNq:
                    {
                        this.stateInAttributeValueNoQuotes(c);
                        break;
                    }
                case State.InSelfClosingTag:
                    {
                        this.stateInSelfClosingTag(c);
                        break;
                    }
                case State.InDeclaration:
                    {
                        this.stateInDeclaration(c);
                        break;
                    }
                case State.BeforeDeclaration:
                    {
                        this.stateBeforeDeclaration(c);
                        break;
                    }
                case State.BeforeComment:
                    {
                        this.stateBeforeComment(c);
                        break;
                    }
                case State.InProcessingInstruction:
                    {
                        this.stateInProcessingInstruction(c);
                        break;
                    }
                case State.InNamedEntity:
                    {
                        this.stateInNamedEntity(c);
                        break;
                    }
                case State.BeforeEntity:
                    {
                        this.stateBeforeEntity(c);
                        break;
                    }
                case State.InHexEntity:
                    {
                        this.stateInHexEntity(c);
                        break;
                    }
                case State.InNumericEntity:
                    {
                        this.stateInNumericEntity(c);
                        break;
                    }
                default:
                    {
                        // `this._state === State.BeforeNumericEntity`
                        this.stateBeforeNumericEntity(c);
                    }
            }
            this.index++;
        }
        this.cleanup();
    }
    finish() {
        if (this.state === State.InNamedEntity) {
            this.emitNamedEntity();
        }
        // If there is remaining data, emit it in a reasonable way
        if (this.sectionStart < this.index) {
            this.handleTrailingData();
        }
        this.cbs.onend();
    }
    /** Handle any trailing data. */ handleTrailingData() {
        const endIndex = this.buffer.length + this.offset;
        if (this.state === State.InCommentLike) {
            if (this.currentSequence === Sequences.CdataEnd) {
                this.cbs.oncdata(this.sectionStart, endIndex, 0);
            } else {
                this.cbs.oncomment(this.sectionStart, endIndex, 0);
            }
        } else if (this.state === State.InNumericEntity && this.allowLegacyEntity()) {
            this.emitNumericEntity(false);
        // All trailing data will have been consumed
        } else if (this.state === State.InHexEntity && this.allowLegacyEntity()) {
            this.emitNumericEntity(false);
        // All trailing data will have been consumed
        } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) {
        /*
             * If we are currently in an opening or closing tag, us not calling the
             * respective callback signals that the tag should be ignored.
             */ } else {
            this.cbs.ontext(this.sectionStart, endIndex);
        }
    }
    emitPartial(start, endIndex) {
        if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
            this.cbs.onattribdata(start, endIndex);
        } else {
            this.cbs.ontext(start, endIndex);
        }
    }
    emitCodePoint(cp) {
        if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
            this.cbs.onattribentity(cp);
        } else {
            this.cbs.ontextentity(cp);
        }
    }
} //# sourceMappingURL=Tokenizer.js.map

;// CONCATENATED MODULE: ./node_modules/htmlparser2/lib/esm/Parser.js


const formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea"
]);
const pTag = new Set([
    "p"
]);
const tableSectionTags = new Set([
    "thead",
    "tbody"
]);
const ddtTags = new Set([
    "dd",
    "dt"
]);
const rtpTags = new Set([
    "rt",
    "rp"
]);
const openImpliesClose = new Map([
    [
        "tr",
        new Set([
            "tr",
            "th",
            "td"
        ])
    ],
    [
        "th",
        new Set([
            "th"
        ])
    ],
    [
        "td",
        new Set([
            "thead",
            "th",
            "td"
        ])
    ],
    [
        "body",
        new Set([
            "head",
            "link",
            "script"
        ])
    ],
    [
        "li",
        new Set([
            "li"
        ])
    ],
    [
        "p",
        pTag
    ],
    [
        "h1",
        pTag
    ],
    [
        "h2",
        pTag
    ],
    [
        "h3",
        pTag
    ],
    [
        "h4",
        pTag
    ],
    [
        "h5",
        pTag
    ],
    [
        "h6",
        pTag
    ],
    [
        "select",
        formTags
    ],
    [
        "input",
        formTags
    ],
    [
        "output",
        formTags
    ],
    [
        "button",
        formTags
    ],
    [
        "datalist",
        formTags
    ],
    [
        "textarea",
        formTags
    ],
    [
        "option",
        new Set([
            "option"
        ])
    ],
    [
        "optgroup",
        new Set([
            "optgroup",
            "option"
        ])
    ],
    [
        "dd",
        ddtTags
    ],
    [
        "dt",
        ddtTags
    ],
    [
        "address",
        pTag
    ],
    [
        "article",
        pTag
    ],
    [
        "aside",
        pTag
    ],
    [
        "blockquote",
        pTag
    ],
    [
        "details",
        pTag
    ],
    [
        "div",
        pTag
    ],
    [
        "dl",
        pTag
    ],
    [
        "fieldset",
        pTag
    ],
    [
        "figcaption",
        pTag
    ],
    [
        "figure",
        pTag
    ],
    [
        "footer",
        pTag
    ],
    [
        "form",
        pTag
    ],
    [
        "header",
        pTag
    ],
    [
        "hr",
        pTag
    ],
    [
        "main",
        pTag
    ],
    [
        "nav",
        pTag
    ],
    [
        "ol",
        pTag
    ],
    [
        "pre",
        pTag
    ],
    [
        "section",
        pTag
    ],
    [
        "table",
        pTag
    ],
    [
        "ul",
        pTag
    ],
    [
        "rt",
        rtpTags
    ],
    [
        "rp",
        rtpTags
    ],
    [
        "tbody",
        tableSectionTags
    ],
    [
        "tfoot",
        tableSectionTags
    ]
]);
const voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
const foreignContextElements = new Set([
    "math",
    "svg"
]);
const htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title"
]);
const reNameEnd = /\s|\//;
class Parser_Parser {
    constructor(cbs, options = {}){
        var _a, _b, _c, _d, _e;
        this.options = options;
        /** The start index of the last event. */ this.startIndex = 0;
        /** The end index of the last event. */ this.endIndex = 0;
        /**
         * Store the start index of the current open tag,
         * so we can update the start index for attributes.
         */ this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.buffers = [];
        this.bufferOffset = 0;
        /** The index of the last written buffer. Used when resuming after a `pause()`. */ this.writeIndex = 0;
        /** Indicates whether the parser has finished running / `.end` has been called. */ this.ended = false;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
        this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer)(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
    }
    // Tokenizer event handlers
    /** @internal */ ontext(start, endIndex) {
        var _a, _b;
        const data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        this.startIndex = endIndex;
    }
    /** @internal */ ontextentity(cp) {
        var _a, _b;
        /*
         * Entities can be emitted on the character, or directly after.
         * We use the section start here to get accurate indices.
         */ const index = this.tokenizer.getSectionStart();
        this.endIndex = index - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, fromCodePoint(cp));
        this.startIndex = index;
    }
    isVoidElement(name) {
        return !this.options.xmlMode && voidElements.has(name);
    }
    /** @internal */ onopentagname(start, endIndex) {
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.emitOpenTag(name);
    }
    emitOpenTag(name) {
        var _a, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        const impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
        if (impliesClose) {
            while(this.stack.length > 0 && impliesClose.has(this.stack[this.stack.length - 1])){
                const element = this.stack.pop();
                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, true);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) {
                this.foreignContext.push(true);
            } else if (htmlIntegrationElements.has(name)) {
                this.foreignContext.push(false);
            }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
        if (this.cbs.onopentag) this.attribs = {};
    }
    endOpenTag(isImplied) {
        var _a, _b;
        this.startIndex = this.openTagStart;
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
    }
    /** @internal */ onopentagend(endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onclosetag(start, endIndex) {
        var _a, _b, _c, _d, _e, _f;
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
            this.foreignContext.pop();
        }
        if (!this.isVoidElement(name)) {
            const pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this.cbs.onclosetag) {
                    let count = this.stack.length - pos;
                    while(count--){
                        // We know the stack has sufficient elements.
                        this.cbs.onclosetag(this.stack.pop(), count !== 0);
                    }
                } else this.stack.length = pos;
            } else if (!this.options.xmlMode && name === "p") {
                // Implicit open before close
                this.emitOpenTag("p");
                this.closeCurrentTag(true);
            }
        } else if (!this.options.xmlMode && name === "br") {
            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
            (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, "br");
            (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
            (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", false);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onselfclosingtag(endIndex) {
        this.endIndex = endIndex;
        if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
            this.closeCurrentTag(false);
            // Set `startIndex` for next node
            this.startIndex = endIndex + 1;
        } else {
            // Ignore the fact that the tag is self-closing.
            this.onopentagend(endIndex);
        }
    }
    closeCurrentTag(isOpenImplied) {
        var _a, _b;
        const name = this.tagname;
        this.endOpenTag(isOpenImplied);
        // Self-closing tags will be on the top of the stack
        if (this.stack[this.stack.length - 1] === name) {
            // If the opening tag isn't implied, the closing tag has to be implied.
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
            this.stack.pop();
        }
    }
    /** @internal */ onattribname(start, endIndex) {
        this.startIndex = start;
        const name = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
    }
    /** @internal */ onattribdata(start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
    }
    /** @internal */ onattribentity(cp) {
        this.attribvalue += fromCodePoint(cp);
    }
    /** @internal */ onattribend(quote, endIndex) {
        var _a, _b;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === QuoteType.Double ? '"' : quote === QuoteType.Single ? "'" : quote === QuoteType.NoValue ? undefined : null);
        if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
    }
    getInstructionName(value) {
        const index = value.search(reNameEnd);
        let name = index < 0 ? value : value.substr(0, index);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    }
    /** @internal */ ondeclaration(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onprocessinginstruction(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ oncomment(start, endIndex, offset) {
        var _a, _b, _c, _d;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ oncdata(start, endIndex, offset) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex - offset);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        } else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onend() {
        var _a, _b;
        if (this.cbs.onclosetag) {
            // Set the end index for all remaining tags
            this.endIndex = this.startIndex;
            for(let index = this.stack.length; index > 0; this.cbs.onclosetag(this.stack[--index], true));
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */ reset() {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        this.buffers.length = 0;
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
    }
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */ parseComplete(data) {
        this.reset();
        this.end(data);
    }
    getSlice(start, end) {
        while(start - this.bufferOffset >= this.buffers[0].length){
            this.shiftBuffer();
        }
        let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while(end - this.bufferOffset > this.buffers[0].length){
            this.shiftBuffer();
            slice += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return slice;
    }
    shiftBuffer() {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
    }
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */ write(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
            return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
            this.tokenizer.write(chunk);
            this.writeIndex++;
        }
    }
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */ end(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".end() after done!"));
            return;
        }
        if (chunk) this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
    }
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */ pause() {
        this.tokenizer.pause();
    }
    /**
     * Resumes parsing after `pause` was called.
     */ resume() {
        this.tokenizer.resume();
        while(this.tokenizer.running && this.writeIndex < this.buffers.length){
            this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended) this.tokenizer.end();
    }
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */ parseChunk(chunk) {
        this.write(chunk);
    }
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */ done(chunk) {
        this.end(chunk);
    }
} //# sourceMappingURL=Parser.js.map

;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/generated/encode-html.js
// Generated using scripts/write-encode-map.ts
function restoreDiff(arr) {
    for(let i = 1; i < arr.length; i++){
        arr[i][0] += arr[i - 1][0] + 1;
    }
    return arr;
}
// prettier-ignore
/* harmony default export */ const encode_html = (new Map(/* #__PURE__ */ restoreDiff([
    [
        9,
        "&Tab;"
    ],
    [
        0,
        "&NewLine;"
    ],
    [
        22,
        "&excl;"
    ],
    [
        0,
        "&quot;"
    ],
    [
        0,
        "&num;"
    ],
    [
        0,
        "&dollar;"
    ],
    [
        0,
        "&percnt;"
    ],
    [
        0,
        "&amp;"
    ],
    [
        0,
        "&apos;"
    ],
    [
        0,
        "&lpar;"
    ],
    [
        0,
        "&rpar;"
    ],
    [
        0,
        "&ast;"
    ],
    [
        0,
        "&plus;"
    ],
    [
        0,
        "&comma;"
    ],
    [
        1,
        "&period;"
    ],
    [
        0,
        "&sol;"
    ],
    [
        10,
        "&colon;"
    ],
    [
        0,
        "&semi;"
    ],
    [
        0,
        {
            v: "&lt;",
            n: 8402,
            o: "&nvlt;"
        }
    ],
    [
        0,
        {
            v: "&equals;",
            n: 8421,
            o: "&bne;"
        }
    ],
    [
        0,
        {
            v: "&gt;",
            n: 8402,
            o: "&nvgt;"
        }
    ],
    [
        0,
        "&quest;"
    ],
    [
        0,
        "&commat;"
    ],
    [
        26,
        "&lbrack;"
    ],
    [
        0,
        "&bsol;"
    ],
    [
        0,
        "&rbrack;"
    ],
    [
        0,
        "&Hat;"
    ],
    [
        0,
        "&lowbar;"
    ],
    [
        0,
        "&DiacriticalGrave;"
    ],
    [
        5,
        {
            n: 106,
            o: "&fjlig;"
        }
    ],
    [
        20,
        "&lbrace;"
    ],
    [
        0,
        "&verbar;"
    ],
    [
        0,
        "&rbrace;"
    ],
    [
        34,
        "&nbsp;"
    ],
    [
        0,
        "&iexcl;"
    ],
    [
        0,
        "&cent;"
    ],
    [
        0,
        "&pound;"
    ],
    [
        0,
        "&curren;"
    ],
    [
        0,
        "&yen;"
    ],
    [
        0,
        "&brvbar;"
    ],
    [
        0,
        "&sect;"
    ],
    [
        0,
        "&die;"
    ],
    [
        0,
        "&copy;"
    ],
    [
        0,
        "&ordf;"
    ],
    [
        0,
        "&laquo;"
    ],
    [
        0,
        "&not;"
    ],
    [
        0,
        "&shy;"
    ],
    [
        0,
        "&circledR;"
    ],
    [
        0,
        "&macr;"
    ],
    [
        0,
        "&deg;"
    ],
    [
        0,
        "&PlusMinus;"
    ],
    [
        0,
        "&sup2;"
    ],
    [
        0,
        "&sup3;"
    ],
    [
        0,
        "&acute;"
    ],
    [
        0,
        "&micro;"
    ],
    [
        0,
        "&para;"
    ],
    [
        0,
        "&centerdot;"
    ],
    [
        0,
        "&cedil;"
    ],
    [
        0,
        "&sup1;"
    ],
    [
        0,
        "&ordm;"
    ],
    [
        0,
        "&raquo;"
    ],
    [
        0,
        "&frac14;"
    ],
    [
        0,
        "&frac12;"
    ],
    [
        0,
        "&frac34;"
    ],
    [
        0,
        "&iquest;"
    ],
    [
        0,
        "&Agrave;"
    ],
    [
        0,
        "&Aacute;"
    ],
    [
        0,
        "&Acirc;"
    ],
    [
        0,
        "&Atilde;"
    ],
    [
        0,
        "&Auml;"
    ],
    [
        0,
        "&angst;"
    ],
    [
        0,
        "&AElig;"
    ],
    [
        0,
        "&Ccedil;"
    ],
    [
        0,
        "&Egrave;"
    ],
    [
        0,
        "&Eacute;"
    ],
    [
        0,
        "&Ecirc;"
    ],
    [
        0,
        "&Euml;"
    ],
    [
        0,
        "&Igrave;"
    ],
    [
        0,
        "&Iacute;"
    ],
    [
        0,
        "&Icirc;"
    ],
    [
        0,
        "&Iuml;"
    ],
    [
        0,
        "&ETH;"
    ],
    [
        0,
        "&Ntilde;"
    ],
    [
        0,
        "&Ograve;"
    ],
    [
        0,
        "&Oacute;"
    ],
    [
        0,
        "&Ocirc;"
    ],
    [
        0,
        "&Otilde;"
    ],
    [
        0,
        "&Ouml;"
    ],
    [
        0,
        "&times;"
    ],
    [
        0,
        "&Oslash;"
    ],
    [
        0,
        "&Ugrave;"
    ],
    [
        0,
        "&Uacute;"
    ],
    [
        0,
        "&Ucirc;"
    ],
    [
        0,
        "&Uuml;"
    ],
    [
        0,
        "&Yacute;"
    ],
    [
        0,
        "&THORN;"
    ],
    [
        0,
        "&szlig;"
    ],
    [
        0,
        "&agrave;"
    ],
    [
        0,
        "&aacute;"
    ],
    [
        0,
        "&acirc;"
    ],
    [
        0,
        "&atilde;"
    ],
    [
        0,
        "&auml;"
    ],
    [
        0,
        "&aring;"
    ],
    [
        0,
        "&aelig;"
    ],
    [
        0,
        "&ccedil;"
    ],
    [
        0,
        "&egrave;"
    ],
    [
        0,
        "&eacute;"
    ],
    [
        0,
        "&ecirc;"
    ],
    [
        0,
        "&euml;"
    ],
    [
        0,
        "&igrave;"
    ],
    [
        0,
        "&iacute;"
    ],
    [
        0,
        "&icirc;"
    ],
    [
        0,
        "&iuml;"
    ],
    [
        0,
        "&eth;"
    ],
    [
        0,
        "&ntilde;"
    ],
    [
        0,
        "&ograve;"
    ],
    [
        0,
        "&oacute;"
    ],
    [
        0,
        "&ocirc;"
    ],
    [
        0,
        "&otilde;"
    ],
    [
        0,
        "&ouml;"
    ],
    [
        0,
        "&div;"
    ],
    [
        0,
        "&oslash;"
    ],
    [
        0,
        "&ugrave;"
    ],
    [
        0,
        "&uacute;"
    ],
    [
        0,
        "&ucirc;"
    ],
    [
        0,
        "&uuml;"
    ],
    [
        0,
        "&yacute;"
    ],
    [
        0,
        "&thorn;"
    ],
    [
        0,
        "&yuml;"
    ],
    [
        0,
        "&Amacr;"
    ],
    [
        0,
        "&amacr;"
    ],
    [
        0,
        "&Abreve;"
    ],
    [
        0,
        "&abreve;"
    ],
    [
        0,
        "&Aogon;"
    ],
    [
        0,
        "&aogon;"
    ],
    [
        0,
        "&Cacute;"
    ],
    [
        0,
        "&cacute;"
    ],
    [
        0,
        "&Ccirc;"
    ],
    [
        0,
        "&ccirc;"
    ],
    [
        0,
        "&Cdot;"
    ],
    [
        0,
        "&cdot;"
    ],
    [
        0,
        "&Ccaron;"
    ],
    [
        0,
        "&ccaron;"
    ],
    [
        0,
        "&Dcaron;"
    ],
    [
        0,
        "&dcaron;"
    ],
    [
        0,
        "&Dstrok;"
    ],
    [
        0,
        "&dstrok;"
    ],
    [
        0,
        "&Emacr;"
    ],
    [
        0,
        "&emacr;"
    ],
    [
        2,
        "&Edot;"
    ],
    [
        0,
        "&edot;"
    ],
    [
        0,
        "&Eogon;"
    ],
    [
        0,
        "&eogon;"
    ],
    [
        0,
        "&Ecaron;"
    ],
    [
        0,
        "&ecaron;"
    ],
    [
        0,
        "&Gcirc;"
    ],
    [
        0,
        "&gcirc;"
    ],
    [
        0,
        "&Gbreve;"
    ],
    [
        0,
        "&gbreve;"
    ],
    [
        0,
        "&Gdot;"
    ],
    [
        0,
        "&gdot;"
    ],
    [
        0,
        "&Gcedil;"
    ],
    [
        1,
        "&Hcirc;"
    ],
    [
        0,
        "&hcirc;"
    ],
    [
        0,
        "&Hstrok;"
    ],
    [
        0,
        "&hstrok;"
    ],
    [
        0,
        "&Itilde;"
    ],
    [
        0,
        "&itilde;"
    ],
    [
        0,
        "&Imacr;"
    ],
    [
        0,
        "&imacr;"
    ],
    [
        2,
        "&Iogon;"
    ],
    [
        0,
        "&iogon;"
    ],
    [
        0,
        "&Idot;"
    ],
    [
        0,
        "&imath;"
    ],
    [
        0,
        "&IJlig;"
    ],
    [
        0,
        "&ijlig;"
    ],
    [
        0,
        "&Jcirc;"
    ],
    [
        0,
        "&jcirc;"
    ],
    [
        0,
        "&Kcedil;"
    ],
    [
        0,
        "&kcedil;"
    ],
    [
        0,
        "&kgreen;"
    ],
    [
        0,
        "&Lacute;"
    ],
    [
        0,
        "&lacute;"
    ],
    [
        0,
        "&Lcedil;"
    ],
    [
        0,
        "&lcedil;"
    ],
    [
        0,
        "&Lcaron;"
    ],
    [
        0,
        "&lcaron;"
    ],
    [
        0,
        "&Lmidot;"
    ],
    [
        0,
        "&lmidot;"
    ],
    [
        0,
        "&Lstrok;"
    ],
    [
        0,
        "&lstrok;"
    ],
    [
        0,
        "&Nacute;"
    ],
    [
        0,
        "&nacute;"
    ],
    [
        0,
        "&Ncedil;"
    ],
    [
        0,
        "&ncedil;"
    ],
    [
        0,
        "&Ncaron;"
    ],
    [
        0,
        "&ncaron;"
    ],
    [
        0,
        "&napos;"
    ],
    [
        0,
        "&ENG;"
    ],
    [
        0,
        "&eng;"
    ],
    [
        0,
        "&Omacr;"
    ],
    [
        0,
        "&omacr;"
    ],
    [
        2,
        "&Odblac;"
    ],
    [
        0,
        "&odblac;"
    ],
    [
        0,
        "&OElig;"
    ],
    [
        0,
        "&oelig;"
    ],
    [
        0,
        "&Racute;"
    ],
    [
        0,
        "&racute;"
    ],
    [
        0,
        "&Rcedil;"
    ],
    [
        0,
        "&rcedil;"
    ],
    [
        0,
        "&Rcaron;"
    ],
    [
        0,
        "&rcaron;"
    ],
    [
        0,
        "&Sacute;"
    ],
    [
        0,
        "&sacute;"
    ],
    [
        0,
        "&Scirc;"
    ],
    [
        0,
        "&scirc;"
    ],
    [
        0,
        "&Scedil;"
    ],
    [
        0,
        "&scedil;"
    ],
    [
        0,
        "&Scaron;"
    ],
    [
        0,
        "&scaron;"
    ],
    [
        0,
        "&Tcedil;"
    ],
    [
        0,
        "&tcedil;"
    ],
    [
        0,
        "&Tcaron;"
    ],
    [
        0,
        "&tcaron;"
    ],
    [
        0,
        "&Tstrok;"
    ],
    [
        0,
        "&tstrok;"
    ],
    [
        0,
        "&Utilde;"
    ],
    [
        0,
        "&utilde;"
    ],
    [
        0,
        "&Umacr;"
    ],
    [
        0,
        "&umacr;"
    ],
    [
        0,
        "&Ubreve;"
    ],
    [
        0,
        "&ubreve;"
    ],
    [
        0,
        "&Uring;"
    ],
    [
        0,
        "&uring;"
    ],
    [
        0,
        "&Udblac;"
    ],
    [
        0,
        "&udblac;"
    ],
    [
        0,
        "&Uogon;"
    ],
    [
        0,
        "&uogon;"
    ],
    [
        0,
        "&Wcirc;"
    ],
    [
        0,
        "&wcirc;"
    ],
    [
        0,
        "&Ycirc;"
    ],
    [
        0,
        "&ycirc;"
    ],
    [
        0,
        "&Yuml;"
    ],
    [
        0,
        "&Zacute;"
    ],
    [
        0,
        "&zacute;"
    ],
    [
        0,
        "&Zdot;"
    ],
    [
        0,
        "&zdot;"
    ],
    [
        0,
        "&Zcaron;"
    ],
    [
        0,
        "&zcaron;"
    ],
    [
        19,
        "&fnof;"
    ],
    [
        34,
        "&imped;"
    ],
    [
        63,
        "&gacute;"
    ],
    [
        65,
        "&jmath;"
    ],
    [
        142,
        "&circ;"
    ],
    [
        0,
        "&caron;"
    ],
    [
        16,
        "&breve;"
    ],
    [
        0,
        "&DiacriticalDot;"
    ],
    [
        0,
        "&ring;"
    ],
    [
        0,
        "&ogon;"
    ],
    [
        0,
        "&DiacriticalTilde;"
    ],
    [
        0,
        "&dblac;"
    ],
    [
        51,
        "&DownBreve;"
    ],
    [
        127,
        "&Alpha;"
    ],
    [
        0,
        "&Beta;"
    ],
    [
        0,
        "&Gamma;"
    ],
    [
        0,
        "&Delta;"
    ],
    [
        0,
        "&Epsilon;"
    ],
    [
        0,
        "&Zeta;"
    ],
    [
        0,
        "&Eta;"
    ],
    [
        0,
        "&Theta;"
    ],
    [
        0,
        "&Iota;"
    ],
    [
        0,
        "&Kappa;"
    ],
    [
        0,
        "&Lambda;"
    ],
    [
        0,
        "&Mu;"
    ],
    [
        0,
        "&Nu;"
    ],
    [
        0,
        "&Xi;"
    ],
    [
        0,
        "&Omicron;"
    ],
    [
        0,
        "&Pi;"
    ],
    [
        0,
        "&Rho;"
    ],
    [
        1,
        "&Sigma;"
    ],
    [
        0,
        "&Tau;"
    ],
    [
        0,
        "&Upsilon;"
    ],
    [
        0,
        "&Phi;"
    ],
    [
        0,
        "&Chi;"
    ],
    [
        0,
        "&Psi;"
    ],
    [
        0,
        "&ohm;"
    ],
    [
        7,
        "&alpha;"
    ],
    [
        0,
        "&beta;"
    ],
    [
        0,
        "&gamma;"
    ],
    [
        0,
        "&delta;"
    ],
    [
        0,
        "&epsi;"
    ],
    [
        0,
        "&zeta;"
    ],
    [
        0,
        "&eta;"
    ],
    [
        0,
        "&theta;"
    ],
    [
        0,
        "&iota;"
    ],
    [
        0,
        "&kappa;"
    ],
    [
        0,
        "&lambda;"
    ],
    [
        0,
        "&mu;"
    ],
    [
        0,
        "&nu;"
    ],
    [
        0,
        "&xi;"
    ],
    [
        0,
        "&omicron;"
    ],
    [
        0,
        "&pi;"
    ],
    [
        0,
        "&rho;"
    ],
    [
        0,
        "&sigmaf;"
    ],
    [
        0,
        "&sigma;"
    ],
    [
        0,
        "&tau;"
    ],
    [
        0,
        "&upsi;"
    ],
    [
        0,
        "&phi;"
    ],
    [
        0,
        "&chi;"
    ],
    [
        0,
        "&psi;"
    ],
    [
        0,
        "&omega;"
    ],
    [
        7,
        "&thetasym;"
    ],
    [
        0,
        "&Upsi;"
    ],
    [
        2,
        "&phiv;"
    ],
    [
        0,
        "&piv;"
    ],
    [
        5,
        "&Gammad;"
    ],
    [
        0,
        "&digamma;"
    ],
    [
        18,
        "&kappav;"
    ],
    [
        0,
        "&rhov;"
    ],
    [
        3,
        "&epsiv;"
    ],
    [
        0,
        "&backepsilon;"
    ],
    [
        10,
        "&IOcy;"
    ],
    [
        0,
        "&DJcy;"
    ],
    [
        0,
        "&GJcy;"
    ],
    [
        0,
        "&Jukcy;"
    ],
    [
        0,
        "&DScy;"
    ],
    [
        0,
        "&Iukcy;"
    ],
    [
        0,
        "&YIcy;"
    ],
    [
        0,
        "&Jsercy;"
    ],
    [
        0,
        "&LJcy;"
    ],
    [
        0,
        "&NJcy;"
    ],
    [
        0,
        "&TSHcy;"
    ],
    [
        0,
        "&KJcy;"
    ],
    [
        1,
        "&Ubrcy;"
    ],
    [
        0,
        "&DZcy;"
    ],
    [
        0,
        "&Acy;"
    ],
    [
        0,
        "&Bcy;"
    ],
    [
        0,
        "&Vcy;"
    ],
    [
        0,
        "&Gcy;"
    ],
    [
        0,
        "&Dcy;"
    ],
    [
        0,
        "&IEcy;"
    ],
    [
        0,
        "&ZHcy;"
    ],
    [
        0,
        "&Zcy;"
    ],
    [
        0,
        "&Icy;"
    ],
    [
        0,
        "&Jcy;"
    ],
    [
        0,
        "&Kcy;"
    ],
    [
        0,
        "&Lcy;"
    ],
    [
        0,
        "&Mcy;"
    ],
    [
        0,
        "&Ncy;"
    ],
    [
        0,
        "&Ocy;"
    ],
    [
        0,
        "&Pcy;"
    ],
    [
        0,
        "&Rcy;"
    ],
    [
        0,
        "&Scy;"
    ],
    [
        0,
        "&Tcy;"
    ],
    [
        0,
        "&Ucy;"
    ],
    [
        0,
        "&Fcy;"
    ],
    [
        0,
        "&KHcy;"
    ],
    [
        0,
        "&TScy;"
    ],
    [
        0,
        "&CHcy;"
    ],
    [
        0,
        "&SHcy;"
    ],
    [
        0,
        "&SHCHcy;"
    ],
    [
        0,
        "&HARDcy;"
    ],
    [
        0,
        "&Ycy;"
    ],
    [
        0,
        "&SOFTcy;"
    ],
    [
        0,
        "&Ecy;"
    ],
    [
        0,
        "&YUcy;"
    ],
    [
        0,
        "&YAcy;"
    ],
    [
        0,
        "&acy;"
    ],
    [
        0,
        "&bcy;"
    ],
    [
        0,
        "&vcy;"
    ],
    [
        0,
        "&gcy;"
    ],
    [
        0,
        "&dcy;"
    ],
    [
        0,
        "&iecy;"
    ],
    [
        0,
        "&zhcy;"
    ],
    [
        0,
        "&zcy;"
    ],
    [
        0,
        "&icy;"
    ],
    [
        0,
        "&jcy;"
    ],
    [
        0,
        "&kcy;"
    ],
    [
        0,
        "&lcy;"
    ],
    [
        0,
        "&mcy;"
    ],
    [
        0,
        "&ncy;"
    ],
    [
        0,
        "&ocy;"
    ],
    [
        0,
        "&pcy;"
    ],
    [
        0,
        "&rcy;"
    ],
    [
        0,
        "&scy;"
    ],
    [
        0,
        "&tcy;"
    ],
    [
        0,
        "&ucy;"
    ],
    [
        0,
        "&fcy;"
    ],
    [
        0,
        "&khcy;"
    ],
    [
        0,
        "&tscy;"
    ],
    [
        0,
        "&chcy;"
    ],
    [
        0,
        "&shcy;"
    ],
    [
        0,
        "&shchcy;"
    ],
    [
        0,
        "&hardcy;"
    ],
    [
        0,
        "&ycy;"
    ],
    [
        0,
        "&softcy;"
    ],
    [
        0,
        "&ecy;"
    ],
    [
        0,
        "&yucy;"
    ],
    [
        0,
        "&yacy;"
    ],
    [
        1,
        "&iocy;"
    ],
    [
        0,
        "&djcy;"
    ],
    [
        0,
        "&gjcy;"
    ],
    [
        0,
        "&jukcy;"
    ],
    [
        0,
        "&dscy;"
    ],
    [
        0,
        "&iukcy;"
    ],
    [
        0,
        "&yicy;"
    ],
    [
        0,
        "&jsercy;"
    ],
    [
        0,
        "&ljcy;"
    ],
    [
        0,
        "&njcy;"
    ],
    [
        0,
        "&tshcy;"
    ],
    [
        0,
        "&kjcy;"
    ],
    [
        1,
        "&ubrcy;"
    ],
    [
        0,
        "&dzcy;"
    ],
    [
        7074,
        "&ensp;"
    ],
    [
        0,
        "&emsp;"
    ],
    [
        0,
        "&emsp13;"
    ],
    [
        0,
        "&emsp14;"
    ],
    [
        1,
        "&numsp;"
    ],
    [
        0,
        "&puncsp;"
    ],
    [
        0,
        "&ThinSpace;"
    ],
    [
        0,
        "&hairsp;"
    ],
    [
        0,
        "&NegativeMediumSpace;"
    ],
    [
        0,
        "&zwnj;"
    ],
    [
        0,
        "&zwj;"
    ],
    [
        0,
        "&lrm;"
    ],
    [
        0,
        "&rlm;"
    ],
    [
        0,
        "&dash;"
    ],
    [
        2,
        "&ndash;"
    ],
    [
        0,
        "&mdash;"
    ],
    [
        0,
        "&horbar;"
    ],
    [
        0,
        "&Verbar;"
    ],
    [
        1,
        "&lsquo;"
    ],
    [
        0,
        "&CloseCurlyQuote;"
    ],
    [
        0,
        "&lsquor;"
    ],
    [
        1,
        "&ldquo;"
    ],
    [
        0,
        "&CloseCurlyDoubleQuote;"
    ],
    [
        0,
        "&bdquo;"
    ],
    [
        1,
        "&dagger;"
    ],
    [
        0,
        "&Dagger;"
    ],
    [
        0,
        "&bull;"
    ],
    [
        2,
        "&nldr;"
    ],
    [
        0,
        "&hellip;"
    ],
    [
        9,
        "&permil;"
    ],
    [
        0,
        "&pertenk;"
    ],
    [
        0,
        "&prime;"
    ],
    [
        0,
        "&Prime;"
    ],
    [
        0,
        "&tprime;"
    ],
    [
        0,
        "&backprime;"
    ],
    [
        3,
        "&lsaquo;"
    ],
    [
        0,
        "&rsaquo;"
    ],
    [
        3,
        "&oline;"
    ],
    [
        2,
        "&caret;"
    ],
    [
        1,
        "&hybull;"
    ],
    [
        0,
        "&frasl;"
    ],
    [
        10,
        "&bsemi;"
    ],
    [
        7,
        "&qprime;"
    ],
    [
        7,
        {
            v: "&MediumSpace;",
            n: 8202,
            o: "&ThickSpace;"
        }
    ],
    [
        0,
        "&NoBreak;"
    ],
    [
        0,
        "&af;"
    ],
    [
        0,
        "&InvisibleTimes;"
    ],
    [
        0,
        "&ic;"
    ],
    [
        72,
        "&euro;"
    ],
    [
        46,
        "&tdot;"
    ],
    [
        0,
        "&DotDot;"
    ],
    [
        37,
        "&complexes;"
    ],
    [
        2,
        "&incare;"
    ],
    [
        4,
        "&gscr;"
    ],
    [
        0,
        "&hamilt;"
    ],
    [
        0,
        "&Hfr;"
    ],
    [
        0,
        "&Hopf;"
    ],
    [
        0,
        "&planckh;"
    ],
    [
        0,
        "&hbar;"
    ],
    [
        0,
        "&imagline;"
    ],
    [
        0,
        "&Ifr;"
    ],
    [
        0,
        "&lagran;"
    ],
    [
        0,
        "&ell;"
    ],
    [
        1,
        "&naturals;"
    ],
    [
        0,
        "&numero;"
    ],
    [
        0,
        "&copysr;"
    ],
    [
        0,
        "&weierp;"
    ],
    [
        0,
        "&Popf;"
    ],
    [
        0,
        "&Qopf;"
    ],
    [
        0,
        "&realine;"
    ],
    [
        0,
        "&real;"
    ],
    [
        0,
        "&reals;"
    ],
    [
        0,
        "&rx;"
    ],
    [
        3,
        "&trade;"
    ],
    [
        1,
        "&integers;"
    ],
    [
        2,
        "&mho;"
    ],
    [
        0,
        "&zeetrf;"
    ],
    [
        0,
        "&iiota;"
    ],
    [
        2,
        "&bernou;"
    ],
    [
        0,
        "&Cayleys;"
    ],
    [
        1,
        "&escr;"
    ],
    [
        0,
        "&Escr;"
    ],
    [
        0,
        "&Fouriertrf;"
    ],
    [
        1,
        "&Mellintrf;"
    ],
    [
        0,
        "&order;"
    ],
    [
        0,
        "&alefsym;"
    ],
    [
        0,
        "&beth;"
    ],
    [
        0,
        "&gimel;"
    ],
    [
        0,
        "&daleth;"
    ],
    [
        12,
        "&CapitalDifferentialD;"
    ],
    [
        0,
        "&dd;"
    ],
    [
        0,
        "&ee;"
    ],
    [
        0,
        "&ii;"
    ],
    [
        10,
        "&frac13;"
    ],
    [
        0,
        "&frac23;"
    ],
    [
        0,
        "&frac15;"
    ],
    [
        0,
        "&frac25;"
    ],
    [
        0,
        "&frac35;"
    ],
    [
        0,
        "&frac45;"
    ],
    [
        0,
        "&frac16;"
    ],
    [
        0,
        "&frac56;"
    ],
    [
        0,
        "&frac18;"
    ],
    [
        0,
        "&frac38;"
    ],
    [
        0,
        "&frac58;"
    ],
    [
        0,
        "&frac78;"
    ],
    [
        49,
        "&larr;"
    ],
    [
        0,
        "&ShortUpArrow;"
    ],
    [
        0,
        "&rarr;"
    ],
    [
        0,
        "&darr;"
    ],
    [
        0,
        "&harr;"
    ],
    [
        0,
        "&updownarrow;"
    ],
    [
        0,
        "&nwarr;"
    ],
    [
        0,
        "&nearr;"
    ],
    [
        0,
        "&LowerRightArrow;"
    ],
    [
        0,
        "&LowerLeftArrow;"
    ],
    [
        0,
        "&nlarr;"
    ],
    [
        0,
        "&nrarr;"
    ],
    [
        1,
        {
            v: "&rarrw;",
            n: 824,
            o: "&nrarrw;"
        }
    ],
    [
        0,
        "&Larr;"
    ],
    [
        0,
        "&Uarr;"
    ],
    [
        0,
        "&Rarr;"
    ],
    [
        0,
        "&Darr;"
    ],
    [
        0,
        "&larrtl;"
    ],
    [
        0,
        "&rarrtl;"
    ],
    [
        0,
        "&LeftTeeArrow;"
    ],
    [
        0,
        "&mapstoup;"
    ],
    [
        0,
        "&map;"
    ],
    [
        0,
        "&DownTeeArrow;"
    ],
    [
        1,
        "&hookleftarrow;"
    ],
    [
        0,
        "&hookrightarrow;"
    ],
    [
        0,
        "&larrlp;"
    ],
    [
        0,
        "&looparrowright;"
    ],
    [
        0,
        "&harrw;"
    ],
    [
        0,
        "&nharr;"
    ],
    [
        1,
        "&lsh;"
    ],
    [
        0,
        "&rsh;"
    ],
    [
        0,
        "&ldsh;"
    ],
    [
        0,
        "&rdsh;"
    ],
    [
        1,
        "&crarr;"
    ],
    [
        0,
        "&cularr;"
    ],
    [
        0,
        "&curarr;"
    ],
    [
        2,
        "&circlearrowleft;"
    ],
    [
        0,
        "&circlearrowright;"
    ],
    [
        0,
        "&leftharpoonup;"
    ],
    [
        0,
        "&DownLeftVector;"
    ],
    [
        0,
        "&RightUpVector;"
    ],
    [
        0,
        "&LeftUpVector;"
    ],
    [
        0,
        "&rharu;"
    ],
    [
        0,
        "&DownRightVector;"
    ],
    [
        0,
        "&dharr;"
    ],
    [
        0,
        "&dharl;"
    ],
    [
        0,
        "&RightArrowLeftArrow;"
    ],
    [
        0,
        "&udarr;"
    ],
    [
        0,
        "&LeftArrowRightArrow;"
    ],
    [
        0,
        "&leftleftarrows;"
    ],
    [
        0,
        "&upuparrows;"
    ],
    [
        0,
        "&rightrightarrows;"
    ],
    [
        0,
        "&ddarr;"
    ],
    [
        0,
        "&leftrightharpoons;"
    ],
    [
        0,
        "&Equilibrium;"
    ],
    [
        0,
        "&nlArr;"
    ],
    [
        0,
        "&nhArr;"
    ],
    [
        0,
        "&nrArr;"
    ],
    [
        0,
        "&DoubleLeftArrow;"
    ],
    [
        0,
        "&DoubleUpArrow;"
    ],
    [
        0,
        "&DoubleRightArrow;"
    ],
    [
        0,
        "&dArr;"
    ],
    [
        0,
        "&DoubleLeftRightArrow;"
    ],
    [
        0,
        "&DoubleUpDownArrow;"
    ],
    [
        0,
        "&nwArr;"
    ],
    [
        0,
        "&neArr;"
    ],
    [
        0,
        "&seArr;"
    ],
    [
        0,
        "&swArr;"
    ],
    [
        0,
        "&lAarr;"
    ],
    [
        0,
        "&rAarr;"
    ],
    [
        1,
        "&zigrarr;"
    ],
    [
        6,
        "&larrb;"
    ],
    [
        0,
        "&rarrb;"
    ],
    [
        15,
        "&DownArrowUpArrow;"
    ],
    [
        7,
        "&loarr;"
    ],
    [
        0,
        "&roarr;"
    ],
    [
        0,
        "&hoarr;"
    ],
    [
        0,
        "&forall;"
    ],
    [
        0,
        "&comp;"
    ],
    [
        0,
        {
            v: "&part;",
            n: 824,
            o: "&npart;"
        }
    ],
    [
        0,
        "&exist;"
    ],
    [
        0,
        "&nexist;"
    ],
    [
        0,
        "&empty;"
    ],
    [
        1,
        "&Del;"
    ],
    [
        0,
        "&Element;"
    ],
    [
        0,
        "&NotElement;"
    ],
    [
        1,
        "&ni;"
    ],
    [
        0,
        "&notni;"
    ],
    [
        2,
        "&prod;"
    ],
    [
        0,
        "&coprod;"
    ],
    [
        0,
        "&sum;"
    ],
    [
        0,
        "&minus;"
    ],
    [
        0,
        "&MinusPlus;"
    ],
    [
        0,
        "&dotplus;"
    ],
    [
        1,
        "&Backslash;"
    ],
    [
        0,
        "&lowast;"
    ],
    [
        0,
        "&compfn;"
    ],
    [
        1,
        "&radic;"
    ],
    [
        2,
        "&prop;"
    ],
    [
        0,
        "&infin;"
    ],
    [
        0,
        "&angrt;"
    ],
    [
        0,
        {
            v: "&ang;",
            n: 8402,
            o: "&nang;"
        }
    ],
    [
        0,
        "&angmsd;"
    ],
    [
        0,
        "&angsph;"
    ],
    [
        0,
        "&mid;"
    ],
    [
        0,
        "&nmid;"
    ],
    [
        0,
        "&DoubleVerticalBar;"
    ],
    [
        0,
        "&NotDoubleVerticalBar;"
    ],
    [
        0,
        "&and;"
    ],
    [
        0,
        "&or;"
    ],
    [
        0,
        {
            v: "&cap;",
            n: 65024,
            o: "&caps;"
        }
    ],
    [
        0,
        {
            v: "&cup;",
            n: 65024,
            o: "&cups;"
        }
    ],
    [
        0,
        "&int;"
    ],
    [
        0,
        "&Int;"
    ],
    [
        0,
        "&iiint;"
    ],
    [
        0,
        "&conint;"
    ],
    [
        0,
        "&Conint;"
    ],
    [
        0,
        "&Cconint;"
    ],
    [
        0,
        "&cwint;"
    ],
    [
        0,
        "&ClockwiseContourIntegral;"
    ],
    [
        0,
        "&awconint;"
    ],
    [
        0,
        "&there4;"
    ],
    [
        0,
        "&becaus;"
    ],
    [
        0,
        "&ratio;"
    ],
    [
        0,
        "&Colon;"
    ],
    [
        0,
        "&dotminus;"
    ],
    [
        1,
        "&mDDot;"
    ],
    [
        0,
        "&homtht;"
    ],
    [
        0,
        {
            v: "&sim;",
            n: 8402,
            o: "&nvsim;"
        }
    ],
    [
        0,
        {
            v: "&backsim;",
            n: 817,
            o: "&race;"
        }
    ],
    [
        0,
        {
            v: "&ac;",
            n: 819,
            o: "&acE;"
        }
    ],
    [
        0,
        "&acd;"
    ],
    [
        0,
        "&VerticalTilde;"
    ],
    [
        0,
        "&NotTilde;"
    ],
    [
        0,
        {
            v: "&eqsim;",
            n: 824,
            o: "&nesim;"
        }
    ],
    [
        0,
        "&sime;"
    ],
    [
        0,
        "&NotTildeEqual;"
    ],
    [
        0,
        "&cong;"
    ],
    [
        0,
        "&simne;"
    ],
    [
        0,
        "&ncong;"
    ],
    [
        0,
        "&ap;"
    ],
    [
        0,
        "&nap;"
    ],
    [
        0,
        "&ape;"
    ],
    [
        0,
        {
            v: "&apid;",
            n: 824,
            o: "&napid;"
        }
    ],
    [
        0,
        "&backcong;"
    ],
    [
        0,
        {
            v: "&asympeq;",
            n: 8402,
            o: "&nvap;"
        }
    ],
    [
        0,
        {
            v: "&bump;",
            n: 824,
            o: "&nbump;"
        }
    ],
    [
        0,
        {
            v: "&bumpe;",
            n: 824,
            o: "&nbumpe;"
        }
    ],
    [
        0,
        {
            v: "&doteq;",
            n: 824,
            o: "&nedot;"
        }
    ],
    [
        0,
        "&doteqdot;"
    ],
    [
        0,
        "&efDot;"
    ],
    [
        0,
        "&erDot;"
    ],
    [
        0,
        "&Assign;"
    ],
    [
        0,
        "&ecolon;"
    ],
    [
        0,
        "&ecir;"
    ],
    [
        0,
        "&circeq;"
    ],
    [
        1,
        "&wedgeq;"
    ],
    [
        0,
        "&veeeq;"
    ],
    [
        1,
        "&triangleq;"
    ],
    [
        2,
        "&equest;"
    ],
    [
        0,
        "&ne;"
    ],
    [
        0,
        {
            v: "&Congruent;",
            n: 8421,
            o: "&bnequiv;"
        }
    ],
    [
        0,
        "&nequiv;"
    ],
    [
        1,
        {
            v: "&le;",
            n: 8402,
            o: "&nvle;"
        }
    ],
    [
        0,
        {
            v: "&ge;",
            n: 8402,
            o: "&nvge;"
        }
    ],
    [
        0,
        {
            v: "&lE;",
            n: 824,
            o: "&nlE;"
        }
    ],
    [
        0,
        {
            v: "&gE;",
            n: 824,
            o: "&ngE;"
        }
    ],
    [
        0,
        {
            v: "&lnE;",
            n: 65024,
            o: "&lvertneqq;"
        }
    ],
    [
        0,
        {
            v: "&gnE;",
            n: 65024,
            o: "&gvertneqq;"
        }
    ],
    [
        0,
        {
            v: "&ll;",
            n: new Map(/* #__PURE__ */ restoreDiff([
                [
                    824,
                    "&nLtv;"
                ],
                [
                    7577,
                    "&nLt;"
                ]
            ]))
        }
    ],
    [
        0,
        {
            v: "&gg;",
            n: new Map(/* #__PURE__ */ restoreDiff([
                [
                    824,
                    "&nGtv;"
                ],
                [
                    7577,
                    "&nGt;"
                ]
            ]))
        }
    ],
    [
        0,
        "&between;"
    ],
    [
        0,
        "&NotCupCap;"
    ],
    [
        0,
        "&nless;"
    ],
    [
        0,
        "&ngt;"
    ],
    [
        0,
        "&nle;"
    ],
    [
        0,
        "&nge;"
    ],
    [
        0,
        "&lesssim;"
    ],
    [
        0,
        "&GreaterTilde;"
    ],
    [
        0,
        "&nlsim;"
    ],
    [
        0,
        "&ngsim;"
    ],
    [
        0,
        "&LessGreater;"
    ],
    [
        0,
        "&gl;"
    ],
    [
        0,
        "&NotLessGreater;"
    ],
    [
        0,
        "&NotGreaterLess;"
    ],
    [
        0,
        "&pr;"
    ],
    [
        0,
        "&sc;"
    ],
    [
        0,
        "&prcue;"
    ],
    [
        0,
        "&sccue;"
    ],
    [
        0,
        "&PrecedesTilde;"
    ],
    [
        0,
        {
            v: "&scsim;",
            n: 824,
            o: "&NotSucceedsTilde;"
        }
    ],
    [
        0,
        "&NotPrecedes;"
    ],
    [
        0,
        "&NotSucceeds;"
    ],
    [
        0,
        {
            v: "&sub;",
            n: 8402,
            o: "&NotSubset;"
        }
    ],
    [
        0,
        {
            v: "&sup;",
            n: 8402,
            o: "&NotSuperset;"
        }
    ],
    [
        0,
        "&nsub;"
    ],
    [
        0,
        "&nsup;"
    ],
    [
        0,
        "&sube;"
    ],
    [
        0,
        "&supe;"
    ],
    [
        0,
        "&NotSubsetEqual;"
    ],
    [
        0,
        "&NotSupersetEqual;"
    ],
    [
        0,
        {
            v: "&subne;",
            n: 65024,
            o: "&varsubsetneq;"
        }
    ],
    [
        0,
        {
            v: "&supne;",
            n: 65024,
            o: "&varsupsetneq;"
        }
    ],
    [
        1,
        "&cupdot;"
    ],
    [
        0,
        "&UnionPlus;"
    ],
    [
        0,
        {
            v: "&sqsub;",
            n: 824,
            o: "&NotSquareSubset;"
        }
    ],
    [
        0,
        {
            v: "&sqsup;",
            n: 824,
            o: "&NotSquareSuperset;"
        }
    ],
    [
        0,
        "&sqsube;"
    ],
    [
        0,
        "&sqsupe;"
    ],
    [
        0,
        {
            v: "&sqcap;",
            n: 65024,
            o: "&sqcaps;"
        }
    ],
    [
        0,
        {
            v: "&sqcup;",
            n: 65024,
            o: "&sqcups;"
        }
    ],
    [
        0,
        "&CirclePlus;"
    ],
    [
        0,
        "&CircleMinus;"
    ],
    [
        0,
        "&CircleTimes;"
    ],
    [
        0,
        "&osol;"
    ],
    [
        0,
        "&CircleDot;"
    ],
    [
        0,
        "&circledcirc;"
    ],
    [
        0,
        "&circledast;"
    ],
    [
        1,
        "&circleddash;"
    ],
    [
        0,
        "&boxplus;"
    ],
    [
        0,
        "&boxminus;"
    ],
    [
        0,
        "&boxtimes;"
    ],
    [
        0,
        "&dotsquare;"
    ],
    [
        0,
        "&RightTee;"
    ],
    [
        0,
        "&dashv;"
    ],
    [
        0,
        "&DownTee;"
    ],
    [
        0,
        "&bot;"
    ],
    [
        1,
        "&models;"
    ],
    [
        0,
        "&DoubleRightTee;"
    ],
    [
        0,
        "&Vdash;"
    ],
    [
        0,
        "&Vvdash;"
    ],
    [
        0,
        "&VDash;"
    ],
    [
        0,
        "&nvdash;"
    ],
    [
        0,
        "&nvDash;"
    ],
    [
        0,
        "&nVdash;"
    ],
    [
        0,
        "&nVDash;"
    ],
    [
        0,
        "&prurel;"
    ],
    [
        1,
        "&LeftTriangle;"
    ],
    [
        0,
        "&RightTriangle;"
    ],
    [
        0,
        {
            v: "&LeftTriangleEqual;",
            n: 8402,
            o: "&nvltrie;"
        }
    ],
    [
        0,
        {
            v: "&RightTriangleEqual;",
            n: 8402,
            o: "&nvrtrie;"
        }
    ],
    [
        0,
        "&origof;"
    ],
    [
        0,
        "&imof;"
    ],
    [
        0,
        "&multimap;"
    ],
    [
        0,
        "&hercon;"
    ],
    [
        0,
        "&intcal;"
    ],
    [
        0,
        "&veebar;"
    ],
    [
        1,
        "&barvee;"
    ],
    [
        0,
        "&angrtvb;"
    ],
    [
        0,
        "&lrtri;"
    ],
    [
        0,
        "&bigwedge;"
    ],
    [
        0,
        "&bigvee;"
    ],
    [
        0,
        "&bigcap;"
    ],
    [
        0,
        "&bigcup;"
    ],
    [
        0,
        "&diam;"
    ],
    [
        0,
        "&sdot;"
    ],
    [
        0,
        "&sstarf;"
    ],
    [
        0,
        "&divideontimes;"
    ],
    [
        0,
        "&bowtie;"
    ],
    [
        0,
        "&ltimes;"
    ],
    [
        0,
        "&rtimes;"
    ],
    [
        0,
        "&leftthreetimes;"
    ],
    [
        0,
        "&rightthreetimes;"
    ],
    [
        0,
        "&backsimeq;"
    ],
    [
        0,
        "&curlyvee;"
    ],
    [
        0,
        "&curlywedge;"
    ],
    [
        0,
        "&Sub;"
    ],
    [
        0,
        "&Sup;"
    ],
    [
        0,
        "&Cap;"
    ],
    [
        0,
        "&Cup;"
    ],
    [
        0,
        "&fork;"
    ],
    [
        0,
        "&epar;"
    ],
    [
        0,
        "&lessdot;"
    ],
    [
        0,
        "&gtdot;"
    ],
    [
        0,
        {
            v: "&Ll;",
            n: 824,
            o: "&nLl;"
        }
    ],
    [
        0,
        {
            v: "&Gg;",
            n: 824,
            o: "&nGg;"
        }
    ],
    [
        0,
        {
            v: "&leg;",
            n: 65024,
            o: "&lesg;"
        }
    ],
    [
        0,
        {
            v: "&gel;",
            n: 65024,
            o: "&gesl;"
        }
    ],
    [
        2,
        "&cuepr;"
    ],
    [
        0,
        "&cuesc;"
    ],
    [
        0,
        "&NotPrecedesSlantEqual;"
    ],
    [
        0,
        "&NotSucceedsSlantEqual;"
    ],
    [
        0,
        "&NotSquareSubsetEqual;"
    ],
    [
        0,
        "&NotSquareSupersetEqual;"
    ],
    [
        2,
        "&lnsim;"
    ],
    [
        0,
        "&gnsim;"
    ],
    [
        0,
        "&precnsim;"
    ],
    [
        0,
        "&scnsim;"
    ],
    [
        0,
        "&nltri;"
    ],
    [
        0,
        "&NotRightTriangle;"
    ],
    [
        0,
        "&nltrie;"
    ],
    [
        0,
        "&NotRightTriangleEqual;"
    ],
    [
        0,
        "&vellip;"
    ],
    [
        0,
        "&ctdot;"
    ],
    [
        0,
        "&utdot;"
    ],
    [
        0,
        "&dtdot;"
    ],
    [
        0,
        "&disin;"
    ],
    [
        0,
        "&isinsv;"
    ],
    [
        0,
        "&isins;"
    ],
    [
        0,
        {
            v: "&isindot;",
            n: 824,
            o: "&notindot;"
        }
    ],
    [
        0,
        "&notinvc;"
    ],
    [
        0,
        "&notinvb;"
    ],
    [
        1,
        {
            v: "&isinE;",
            n: 824,
            o: "&notinE;"
        }
    ],
    [
        0,
        "&nisd;"
    ],
    [
        0,
        "&xnis;"
    ],
    [
        0,
        "&nis;"
    ],
    [
        0,
        "&notnivc;"
    ],
    [
        0,
        "&notnivb;"
    ],
    [
        6,
        "&barwed;"
    ],
    [
        0,
        "&Barwed;"
    ],
    [
        1,
        "&lceil;"
    ],
    [
        0,
        "&rceil;"
    ],
    [
        0,
        "&LeftFloor;"
    ],
    [
        0,
        "&rfloor;"
    ],
    [
        0,
        "&drcrop;"
    ],
    [
        0,
        "&dlcrop;"
    ],
    [
        0,
        "&urcrop;"
    ],
    [
        0,
        "&ulcrop;"
    ],
    [
        0,
        "&bnot;"
    ],
    [
        1,
        "&profline;"
    ],
    [
        0,
        "&profsurf;"
    ],
    [
        1,
        "&telrec;"
    ],
    [
        0,
        "&target;"
    ],
    [
        5,
        "&ulcorn;"
    ],
    [
        0,
        "&urcorn;"
    ],
    [
        0,
        "&dlcorn;"
    ],
    [
        0,
        "&drcorn;"
    ],
    [
        2,
        "&frown;"
    ],
    [
        0,
        "&smile;"
    ],
    [
        9,
        "&cylcty;"
    ],
    [
        0,
        "&profalar;"
    ],
    [
        7,
        "&topbot;"
    ],
    [
        6,
        "&ovbar;"
    ],
    [
        1,
        "&solbar;"
    ],
    [
        60,
        "&angzarr;"
    ],
    [
        51,
        "&lmoustache;"
    ],
    [
        0,
        "&rmoustache;"
    ],
    [
        2,
        "&OverBracket;"
    ],
    [
        0,
        "&bbrk;"
    ],
    [
        0,
        "&bbrktbrk;"
    ],
    [
        37,
        "&OverParenthesis;"
    ],
    [
        0,
        "&UnderParenthesis;"
    ],
    [
        0,
        "&OverBrace;"
    ],
    [
        0,
        "&UnderBrace;"
    ],
    [
        2,
        "&trpezium;"
    ],
    [
        4,
        "&elinters;"
    ],
    [
        59,
        "&blank;"
    ],
    [
        164,
        "&circledS;"
    ],
    [
        55,
        "&boxh;"
    ],
    [
        1,
        "&boxv;"
    ],
    [
        9,
        "&boxdr;"
    ],
    [
        3,
        "&boxdl;"
    ],
    [
        3,
        "&boxur;"
    ],
    [
        3,
        "&boxul;"
    ],
    [
        3,
        "&boxvr;"
    ],
    [
        7,
        "&boxvl;"
    ],
    [
        7,
        "&boxhd;"
    ],
    [
        7,
        "&boxhu;"
    ],
    [
        7,
        "&boxvh;"
    ],
    [
        19,
        "&boxH;"
    ],
    [
        0,
        "&boxV;"
    ],
    [
        0,
        "&boxdR;"
    ],
    [
        0,
        "&boxDr;"
    ],
    [
        0,
        "&boxDR;"
    ],
    [
        0,
        "&boxdL;"
    ],
    [
        0,
        "&boxDl;"
    ],
    [
        0,
        "&boxDL;"
    ],
    [
        0,
        "&boxuR;"
    ],
    [
        0,
        "&boxUr;"
    ],
    [
        0,
        "&boxUR;"
    ],
    [
        0,
        "&boxuL;"
    ],
    [
        0,
        "&boxUl;"
    ],
    [
        0,
        "&boxUL;"
    ],
    [
        0,
        "&boxvR;"
    ],
    [
        0,
        "&boxVr;"
    ],
    [
        0,
        "&boxVR;"
    ],
    [
        0,
        "&boxvL;"
    ],
    [
        0,
        "&boxVl;"
    ],
    [
        0,
        "&boxVL;"
    ],
    [
        0,
        "&boxHd;"
    ],
    [
        0,
        "&boxhD;"
    ],
    [
        0,
        "&boxHD;"
    ],
    [
        0,
        "&boxHu;"
    ],
    [
        0,
        "&boxhU;"
    ],
    [
        0,
        "&boxHU;"
    ],
    [
        0,
        "&boxvH;"
    ],
    [
        0,
        "&boxVh;"
    ],
    [
        0,
        "&boxVH;"
    ],
    [
        19,
        "&uhblk;"
    ],
    [
        3,
        "&lhblk;"
    ],
    [
        3,
        "&block;"
    ],
    [
        8,
        "&blk14;"
    ],
    [
        0,
        "&blk12;"
    ],
    [
        0,
        "&blk34;"
    ],
    [
        13,
        "&square;"
    ],
    [
        8,
        "&blacksquare;"
    ],
    [
        0,
        "&EmptyVerySmallSquare;"
    ],
    [
        1,
        "&rect;"
    ],
    [
        0,
        "&marker;"
    ],
    [
        2,
        "&fltns;"
    ],
    [
        1,
        "&bigtriangleup;"
    ],
    [
        0,
        "&blacktriangle;"
    ],
    [
        0,
        "&triangle;"
    ],
    [
        2,
        "&blacktriangleright;"
    ],
    [
        0,
        "&rtri;"
    ],
    [
        3,
        "&bigtriangledown;"
    ],
    [
        0,
        "&blacktriangledown;"
    ],
    [
        0,
        "&dtri;"
    ],
    [
        2,
        "&blacktriangleleft;"
    ],
    [
        0,
        "&ltri;"
    ],
    [
        6,
        "&loz;"
    ],
    [
        0,
        "&cir;"
    ],
    [
        32,
        "&tridot;"
    ],
    [
        2,
        "&bigcirc;"
    ],
    [
        8,
        "&ultri;"
    ],
    [
        0,
        "&urtri;"
    ],
    [
        0,
        "&lltri;"
    ],
    [
        0,
        "&EmptySmallSquare;"
    ],
    [
        0,
        "&FilledSmallSquare;"
    ],
    [
        8,
        "&bigstar;"
    ],
    [
        0,
        "&star;"
    ],
    [
        7,
        "&phone;"
    ],
    [
        49,
        "&female;"
    ],
    [
        1,
        "&male;"
    ],
    [
        29,
        "&spades;"
    ],
    [
        2,
        "&clubs;"
    ],
    [
        1,
        "&hearts;"
    ],
    [
        0,
        "&diamondsuit;"
    ],
    [
        3,
        "&sung;"
    ],
    [
        2,
        "&flat;"
    ],
    [
        0,
        "&natural;"
    ],
    [
        0,
        "&sharp;"
    ],
    [
        163,
        "&check;"
    ],
    [
        3,
        "&cross;"
    ],
    [
        8,
        "&malt;"
    ],
    [
        21,
        "&sext;"
    ],
    [
        33,
        "&VerticalSeparator;"
    ],
    [
        25,
        "&lbbrk;"
    ],
    [
        0,
        "&rbbrk;"
    ],
    [
        84,
        "&bsolhsub;"
    ],
    [
        0,
        "&suphsol;"
    ],
    [
        28,
        "&LeftDoubleBracket;"
    ],
    [
        0,
        "&RightDoubleBracket;"
    ],
    [
        0,
        "&lang;"
    ],
    [
        0,
        "&rang;"
    ],
    [
        0,
        "&Lang;"
    ],
    [
        0,
        "&Rang;"
    ],
    [
        0,
        "&loang;"
    ],
    [
        0,
        "&roang;"
    ],
    [
        7,
        "&longleftarrow;"
    ],
    [
        0,
        "&longrightarrow;"
    ],
    [
        0,
        "&longleftrightarrow;"
    ],
    [
        0,
        "&DoubleLongLeftArrow;"
    ],
    [
        0,
        "&DoubleLongRightArrow;"
    ],
    [
        0,
        "&DoubleLongLeftRightArrow;"
    ],
    [
        1,
        "&longmapsto;"
    ],
    [
        2,
        "&dzigrarr;"
    ],
    [
        258,
        "&nvlArr;"
    ],
    [
        0,
        "&nvrArr;"
    ],
    [
        0,
        "&nvHarr;"
    ],
    [
        0,
        "&Map;"
    ],
    [
        6,
        "&lbarr;"
    ],
    [
        0,
        "&bkarow;"
    ],
    [
        0,
        "&lBarr;"
    ],
    [
        0,
        "&dbkarow;"
    ],
    [
        0,
        "&drbkarow;"
    ],
    [
        0,
        "&DDotrahd;"
    ],
    [
        0,
        "&UpArrowBar;"
    ],
    [
        0,
        "&DownArrowBar;"
    ],
    [
        2,
        "&Rarrtl;"
    ],
    [
        2,
        "&latail;"
    ],
    [
        0,
        "&ratail;"
    ],
    [
        0,
        "&lAtail;"
    ],
    [
        0,
        "&rAtail;"
    ],
    [
        0,
        "&larrfs;"
    ],
    [
        0,
        "&rarrfs;"
    ],
    [
        0,
        "&larrbfs;"
    ],
    [
        0,
        "&rarrbfs;"
    ],
    [
        2,
        "&nwarhk;"
    ],
    [
        0,
        "&nearhk;"
    ],
    [
        0,
        "&hksearow;"
    ],
    [
        0,
        "&hkswarow;"
    ],
    [
        0,
        "&nwnear;"
    ],
    [
        0,
        "&nesear;"
    ],
    [
        0,
        "&seswar;"
    ],
    [
        0,
        "&swnwar;"
    ],
    [
        8,
        {
            v: "&rarrc;",
            n: 824,
            o: "&nrarrc;"
        }
    ],
    [
        1,
        "&cudarrr;"
    ],
    [
        0,
        "&ldca;"
    ],
    [
        0,
        "&rdca;"
    ],
    [
        0,
        "&cudarrl;"
    ],
    [
        0,
        "&larrpl;"
    ],
    [
        2,
        "&curarrm;"
    ],
    [
        0,
        "&cularrp;"
    ],
    [
        7,
        "&rarrpl;"
    ],
    [
        2,
        "&harrcir;"
    ],
    [
        0,
        "&Uarrocir;"
    ],
    [
        0,
        "&lurdshar;"
    ],
    [
        0,
        "&ldrushar;"
    ],
    [
        2,
        "&LeftRightVector;"
    ],
    [
        0,
        "&RightUpDownVector;"
    ],
    [
        0,
        "&DownLeftRightVector;"
    ],
    [
        0,
        "&LeftUpDownVector;"
    ],
    [
        0,
        "&LeftVectorBar;"
    ],
    [
        0,
        "&RightVectorBar;"
    ],
    [
        0,
        "&RightUpVectorBar;"
    ],
    [
        0,
        "&RightDownVectorBar;"
    ],
    [
        0,
        "&DownLeftVectorBar;"
    ],
    [
        0,
        "&DownRightVectorBar;"
    ],
    [
        0,
        "&LeftUpVectorBar;"
    ],
    [
        0,
        "&LeftDownVectorBar;"
    ],
    [
        0,
        "&LeftTeeVector;"
    ],
    [
        0,
        "&RightTeeVector;"
    ],
    [
        0,
        "&RightUpTeeVector;"
    ],
    [
        0,
        "&RightDownTeeVector;"
    ],
    [
        0,
        "&DownLeftTeeVector;"
    ],
    [
        0,
        "&DownRightTeeVector;"
    ],
    [
        0,
        "&LeftUpTeeVector;"
    ],
    [
        0,
        "&LeftDownTeeVector;"
    ],
    [
        0,
        "&lHar;"
    ],
    [
        0,
        "&uHar;"
    ],
    [
        0,
        "&rHar;"
    ],
    [
        0,
        "&dHar;"
    ],
    [
        0,
        "&luruhar;"
    ],
    [
        0,
        "&ldrdhar;"
    ],
    [
        0,
        "&ruluhar;"
    ],
    [
        0,
        "&rdldhar;"
    ],
    [
        0,
        "&lharul;"
    ],
    [
        0,
        "&llhard;"
    ],
    [
        0,
        "&rharul;"
    ],
    [
        0,
        "&lrhard;"
    ],
    [
        0,
        "&udhar;"
    ],
    [
        0,
        "&duhar;"
    ],
    [
        0,
        "&RoundImplies;"
    ],
    [
        0,
        "&erarr;"
    ],
    [
        0,
        "&simrarr;"
    ],
    [
        0,
        "&larrsim;"
    ],
    [
        0,
        "&rarrsim;"
    ],
    [
        0,
        "&rarrap;"
    ],
    [
        0,
        "&ltlarr;"
    ],
    [
        1,
        "&gtrarr;"
    ],
    [
        0,
        "&subrarr;"
    ],
    [
        1,
        "&suplarr;"
    ],
    [
        0,
        "&lfisht;"
    ],
    [
        0,
        "&rfisht;"
    ],
    [
        0,
        "&ufisht;"
    ],
    [
        0,
        "&dfisht;"
    ],
    [
        5,
        "&lopar;"
    ],
    [
        0,
        "&ropar;"
    ],
    [
        4,
        "&lbrke;"
    ],
    [
        0,
        "&rbrke;"
    ],
    [
        0,
        "&lbrkslu;"
    ],
    [
        0,
        "&rbrksld;"
    ],
    [
        0,
        "&lbrksld;"
    ],
    [
        0,
        "&rbrkslu;"
    ],
    [
        0,
        "&langd;"
    ],
    [
        0,
        "&rangd;"
    ],
    [
        0,
        "&lparlt;"
    ],
    [
        0,
        "&rpargt;"
    ],
    [
        0,
        "&gtlPar;"
    ],
    [
        0,
        "&ltrPar;"
    ],
    [
        3,
        "&vzigzag;"
    ],
    [
        1,
        "&vangrt;"
    ],
    [
        0,
        "&angrtvbd;"
    ],
    [
        6,
        "&ange;"
    ],
    [
        0,
        "&range;"
    ],
    [
        0,
        "&dwangle;"
    ],
    [
        0,
        "&uwangle;"
    ],
    [
        0,
        "&angmsdaa;"
    ],
    [
        0,
        "&angmsdab;"
    ],
    [
        0,
        "&angmsdac;"
    ],
    [
        0,
        "&angmsdad;"
    ],
    [
        0,
        "&angmsdae;"
    ],
    [
        0,
        "&angmsdaf;"
    ],
    [
        0,
        "&angmsdag;"
    ],
    [
        0,
        "&angmsdah;"
    ],
    [
        0,
        "&bemptyv;"
    ],
    [
        0,
        "&demptyv;"
    ],
    [
        0,
        "&cemptyv;"
    ],
    [
        0,
        "&raemptyv;"
    ],
    [
        0,
        "&laemptyv;"
    ],
    [
        0,
        "&ohbar;"
    ],
    [
        0,
        "&omid;"
    ],
    [
        0,
        "&opar;"
    ],
    [
        1,
        "&operp;"
    ],
    [
        1,
        "&olcross;"
    ],
    [
        0,
        "&odsold;"
    ],
    [
        1,
        "&olcir;"
    ],
    [
        0,
        "&ofcir;"
    ],
    [
        0,
        "&olt;"
    ],
    [
        0,
        "&ogt;"
    ],
    [
        0,
        "&cirscir;"
    ],
    [
        0,
        "&cirE;"
    ],
    [
        0,
        "&solb;"
    ],
    [
        0,
        "&bsolb;"
    ],
    [
        3,
        "&boxbox;"
    ],
    [
        3,
        "&trisb;"
    ],
    [
        0,
        "&rtriltri;"
    ],
    [
        0,
        {
            v: "&LeftTriangleBar;",
            n: 824,
            o: "&NotLeftTriangleBar;"
        }
    ],
    [
        0,
        {
            v: "&RightTriangleBar;",
            n: 824,
            o: "&NotRightTriangleBar;"
        }
    ],
    [
        11,
        "&iinfin;"
    ],
    [
        0,
        "&infintie;"
    ],
    [
        0,
        "&nvinfin;"
    ],
    [
        4,
        "&eparsl;"
    ],
    [
        0,
        "&smeparsl;"
    ],
    [
        0,
        "&eqvparsl;"
    ],
    [
        5,
        "&blacklozenge;"
    ],
    [
        8,
        "&RuleDelayed;"
    ],
    [
        1,
        "&dsol;"
    ],
    [
        9,
        "&bigodot;"
    ],
    [
        0,
        "&bigoplus;"
    ],
    [
        0,
        "&bigotimes;"
    ],
    [
        1,
        "&biguplus;"
    ],
    [
        1,
        "&bigsqcup;"
    ],
    [
        5,
        "&iiiint;"
    ],
    [
        0,
        "&fpartint;"
    ],
    [
        2,
        "&cirfnint;"
    ],
    [
        0,
        "&awint;"
    ],
    [
        0,
        "&rppolint;"
    ],
    [
        0,
        "&scpolint;"
    ],
    [
        0,
        "&npolint;"
    ],
    [
        0,
        "&pointint;"
    ],
    [
        0,
        "&quatint;"
    ],
    [
        0,
        "&intlarhk;"
    ],
    [
        10,
        "&pluscir;"
    ],
    [
        0,
        "&plusacir;"
    ],
    [
        0,
        "&simplus;"
    ],
    [
        0,
        "&plusdu;"
    ],
    [
        0,
        "&plussim;"
    ],
    [
        0,
        "&plustwo;"
    ],
    [
        1,
        "&mcomma;"
    ],
    [
        0,
        "&minusdu;"
    ],
    [
        2,
        "&loplus;"
    ],
    [
        0,
        "&roplus;"
    ],
    [
        0,
        "&Cross;"
    ],
    [
        0,
        "&timesd;"
    ],
    [
        0,
        "&timesbar;"
    ],
    [
        1,
        "&smashp;"
    ],
    [
        0,
        "&lotimes;"
    ],
    [
        0,
        "&rotimes;"
    ],
    [
        0,
        "&otimesas;"
    ],
    [
        0,
        "&Otimes;"
    ],
    [
        0,
        "&odiv;"
    ],
    [
        0,
        "&triplus;"
    ],
    [
        0,
        "&triminus;"
    ],
    [
        0,
        "&tritime;"
    ],
    [
        0,
        "&intprod;"
    ],
    [
        2,
        "&amalg;"
    ],
    [
        0,
        "&capdot;"
    ],
    [
        1,
        "&ncup;"
    ],
    [
        0,
        "&ncap;"
    ],
    [
        0,
        "&capand;"
    ],
    [
        0,
        "&cupor;"
    ],
    [
        0,
        "&cupcap;"
    ],
    [
        0,
        "&capcup;"
    ],
    [
        0,
        "&cupbrcap;"
    ],
    [
        0,
        "&capbrcup;"
    ],
    [
        0,
        "&cupcup;"
    ],
    [
        0,
        "&capcap;"
    ],
    [
        0,
        "&ccups;"
    ],
    [
        0,
        "&ccaps;"
    ],
    [
        2,
        "&ccupssm;"
    ],
    [
        2,
        "&And;"
    ],
    [
        0,
        "&Or;"
    ],
    [
        0,
        "&andand;"
    ],
    [
        0,
        "&oror;"
    ],
    [
        0,
        "&orslope;"
    ],
    [
        0,
        "&andslope;"
    ],
    [
        1,
        "&andv;"
    ],
    [
        0,
        "&orv;"
    ],
    [
        0,
        "&andd;"
    ],
    [
        0,
        "&ord;"
    ],
    [
        1,
        "&wedbar;"
    ],
    [
        6,
        "&sdote;"
    ],
    [
        3,
        "&simdot;"
    ],
    [
        2,
        {
            v: "&congdot;",
            n: 824,
            o: "&ncongdot;"
        }
    ],
    [
        0,
        "&easter;"
    ],
    [
        0,
        "&apacir;"
    ],
    [
        0,
        {
            v: "&apE;",
            n: 824,
            o: "&napE;"
        }
    ],
    [
        0,
        "&eplus;"
    ],
    [
        0,
        "&pluse;"
    ],
    [
        0,
        "&Esim;"
    ],
    [
        0,
        "&Colone;"
    ],
    [
        0,
        "&Equal;"
    ],
    [
        1,
        "&ddotseq;"
    ],
    [
        0,
        "&equivDD;"
    ],
    [
        0,
        "&ltcir;"
    ],
    [
        0,
        "&gtcir;"
    ],
    [
        0,
        "&ltquest;"
    ],
    [
        0,
        "&gtquest;"
    ],
    [
        0,
        {
            v: "&leqslant;",
            n: 824,
            o: "&nleqslant;"
        }
    ],
    [
        0,
        {
            v: "&geqslant;",
            n: 824,
            o: "&ngeqslant;"
        }
    ],
    [
        0,
        "&lesdot;"
    ],
    [
        0,
        "&gesdot;"
    ],
    [
        0,
        "&lesdoto;"
    ],
    [
        0,
        "&gesdoto;"
    ],
    [
        0,
        "&lesdotor;"
    ],
    [
        0,
        "&gesdotol;"
    ],
    [
        0,
        "&lap;"
    ],
    [
        0,
        "&gap;"
    ],
    [
        0,
        "&lne;"
    ],
    [
        0,
        "&gne;"
    ],
    [
        0,
        "&lnap;"
    ],
    [
        0,
        "&gnap;"
    ],
    [
        0,
        "&lEg;"
    ],
    [
        0,
        "&gEl;"
    ],
    [
        0,
        "&lsime;"
    ],
    [
        0,
        "&gsime;"
    ],
    [
        0,
        "&lsimg;"
    ],
    [
        0,
        "&gsiml;"
    ],
    [
        0,
        "&lgE;"
    ],
    [
        0,
        "&glE;"
    ],
    [
        0,
        "&lesges;"
    ],
    [
        0,
        "&gesles;"
    ],
    [
        0,
        "&els;"
    ],
    [
        0,
        "&egs;"
    ],
    [
        0,
        "&elsdot;"
    ],
    [
        0,
        "&egsdot;"
    ],
    [
        0,
        "&el;"
    ],
    [
        0,
        "&eg;"
    ],
    [
        2,
        "&siml;"
    ],
    [
        0,
        "&simg;"
    ],
    [
        0,
        "&simlE;"
    ],
    [
        0,
        "&simgE;"
    ],
    [
        0,
        {
            v: "&LessLess;",
            n: 824,
            o: "&NotNestedLessLess;"
        }
    ],
    [
        0,
        {
            v: "&GreaterGreater;",
            n: 824,
            o: "&NotNestedGreaterGreater;"
        }
    ],
    [
        1,
        "&glj;"
    ],
    [
        0,
        "&gla;"
    ],
    [
        0,
        "&ltcc;"
    ],
    [
        0,
        "&gtcc;"
    ],
    [
        0,
        "&lescc;"
    ],
    [
        0,
        "&gescc;"
    ],
    [
        0,
        "&smt;"
    ],
    [
        0,
        "&lat;"
    ],
    [
        0,
        {
            v: "&smte;",
            n: 65024,
            o: "&smtes;"
        }
    ],
    [
        0,
        {
            v: "&late;",
            n: 65024,
            o: "&lates;"
        }
    ],
    [
        0,
        "&bumpE;"
    ],
    [
        0,
        {
            v: "&PrecedesEqual;",
            n: 824,
            o: "&NotPrecedesEqual;"
        }
    ],
    [
        0,
        {
            v: "&sce;",
            n: 824,
            o: "&NotSucceedsEqual;"
        }
    ],
    [
        2,
        "&prE;"
    ],
    [
        0,
        "&scE;"
    ],
    [
        0,
        "&precneqq;"
    ],
    [
        0,
        "&scnE;"
    ],
    [
        0,
        "&prap;"
    ],
    [
        0,
        "&scap;"
    ],
    [
        0,
        "&precnapprox;"
    ],
    [
        0,
        "&scnap;"
    ],
    [
        0,
        "&Pr;"
    ],
    [
        0,
        "&Sc;"
    ],
    [
        0,
        "&subdot;"
    ],
    [
        0,
        "&supdot;"
    ],
    [
        0,
        "&subplus;"
    ],
    [
        0,
        "&supplus;"
    ],
    [
        0,
        "&submult;"
    ],
    [
        0,
        "&supmult;"
    ],
    [
        0,
        "&subedot;"
    ],
    [
        0,
        "&supedot;"
    ],
    [
        0,
        {
            v: "&subE;",
            n: 824,
            o: "&nsubE;"
        }
    ],
    [
        0,
        {
            v: "&supE;",
            n: 824,
            o: "&nsupE;"
        }
    ],
    [
        0,
        "&subsim;"
    ],
    [
        0,
        "&supsim;"
    ],
    [
        2,
        {
            v: "&subnE;",
            n: 65024,
            o: "&varsubsetneqq;"
        }
    ],
    [
        0,
        {
            v: "&supnE;",
            n: 65024,
            o: "&varsupsetneqq;"
        }
    ],
    [
        2,
        "&csub;"
    ],
    [
        0,
        "&csup;"
    ],
    [
        0,
        "&csube;"
    ],
    [
        0,
        "&csupe;"
    ],
    [
        0,
        "&subsup;"
    ],
    [
        0,
        "&supsub;"
    ],
    [
        0,
        "&subsub;"
    ],
    [
        0,
        "&supsup;"
    ],
    [
        0,
        "&suphsub;"
    ],
    [
        0,
        "&supdsub;"
    ],
    [
        0,
        "&forkv;"
    ],
    [
        0,
        "&topfork;"
    ],
    [
        0,
        "&mlcp;"
    ],
    [
        8,
        "&Dashv;"
    ],
    [
        1,
        "&Vdashl;"
    ],
    [
        0,
        "&Barv;"
    ],
    [
        0,
        "&vBar;"
    ],
    [
        0,
        "&vBarv;"
    ],
    [
        1,
        "&Vbar;"
    ],
    [
        0,
        "&Not;"
    ],
    [
        0,
        "&bNot;"
    ],
    [
        0,
        "&rnmid;"
    ],
    [
        0,
        "&cirmid;"
    ],
    [
        0,
        "&midcir;"
    ],
    [
        0,
        "&topcir;"
    ],
    [
        0,
        "&nhpar;"
    ],
    [
        0,
        "&parsim;"
    ],
    [
        9,
        {
            v: "&parsl;",
            n: 8421,
            o: "&nparsl;"
        }
    ],
    [
        44343,
        {
            n: new Map(/* #__PURE__ */ restoreDiff([
                [
                    56476,
                    "&Ascr;"
                ],
                [
                    1,
                    "&Cscr;"
                ],
                [
                    0,
                    "&Dscr;"
                ],
                [
                    2,
                    "&Gscr;"
                ],
                [
                    2,
                    "&Jscr;"
                ],
                [
                    0,
                    "&Kscr;"
                ],
                [
                    2,
                    "&Nscr;"
                ],
                [
                    0,
                    "&Oscr;"
                ],
                [
                    0,
                    "&Pscr;"
                ],
                [
                    0,
                    "&Qscr;"
                ],
                [
                    1,
                    "&Sscr;"
                ],
                [
                    0,
                    "&Tscr;"
                ],
                [
                    0,
                    "&Uscr;"
                ],
                [
                    0,
                    "&Vscr;"
                ],
                [
                    0,
                    "&Wscr;"
                ],
                [
                    0,
                    "&Xscr;"
                ],
                [
                    0,
                    "&Yscr;"
                ],
                [
                    0,
                    "&Zscr;"
                ],
                [
                    0,
                    "&ascr;"
                ],
                [
                    0,
                    "&bscr;"
                ],
                [
                    0,
                    "&cscr;"
                ],
                [
                    0,
                    "&dscr;"
                ],
                [
                    1,
                    "&fscr;"
                ],
                [
                    1,
                    "&hscr;"
                ],
                [
                    0,
                    "&iscr;"
                ],
                [
                    0,
                    "&jscr;"
                ],
                [
                    0,
                    "&kscr;"
                ],
                [
                    0,
                    "&lscr;"
                ],
                [
                    0,
                    "&mscr;"
                ],
                [
                    0,
                    "&nscr;"
                ],
                [
                    1,
                    "&pscr;"
                ],
                [
                    0,
                    "&qscr;"
                ],
                [
                    0,
                    "&rscr;"
                ],
                [
                    0,
                    "&sscr;"
                ],
                [
                    0,
                    "&tscr;"
                ],
                [
                    0,
                    "&uscr;"
                ],
                [
                    0,
                    "&vscr;"
                ],
                [
                    0,
                    "&wscr;"
                ],
                [
                    0,
                    "&xscr;"
                ],
                [
                    0,
                    "&yscr;"
                ],
                [
                    0,
                    "&zscr;"
                ],
                [
                    52,
                    "&Afr;"
                ],
                [
                    0,
                    "&Bfr;"
                ],
                [
                    1,
                    "&Dfr;"
                ],
                [
                    0,
                    "&Efr;"
                ],
                [
                    0,
                    "&Ffr;"
                ],
                [
                    0,
                    "&Gfr;"
                ],
                [
                    2,
                    "&Jfr;"
                ],
                [
                    0,
                    "&Kfr;"
                ],
                [
                    0,
                    "&Lfr;"
                ],
                [
                    0,
                    "&Mfr;"
                ],
                [
                    0,
                    "&Nfr;"
                ],
                [
                    0,
                    "&Ofr;"
                ],
                [
                    0,
                    "&Pfr;"
                ],
                [
                    0,
                    "&Qfr;"
                ],
                [
                    1,
                    "&Sfr;"
                ],
                [
                    0,
                    "&Tfr;"
                ],
                [
                    0,
                    "&Ufr;"
                ],
                [
                    0,
                    "&Vfr;"
                ],
                [
                    0,
                    "&Wfr;"
                ],
                [
                    0,
                    "&Xfr;"
                ],
                [
                    0,
                    "&Yfr;"
                ],
                [
                    1,
                    "&afr;"
                ],
                [
                    0,
                    "&bfr;"
                ],
                [
                    0,
                    "&cfr;"
                ],
                [
                    0,
                    "&dfr;"
                ],
                [
                    0,
                    "&efr;"
                ],
                [
                    0,
                    "&ffr;"
                ],
                [
                    0,
                    "&gfr;"
                ],
                [
                    0,
                    "&hfr;"
                ],
                [
                    0,
                    "&ifr;"
                ],
                [
                    0,
                    "&jfr;"
                ],
                [
                    0,
                    "&kfr;"
                ],
                [
                    0,
                    "&lfr;"
                ],
                [
                    0,
                    "&mfr;"
                ],
                [
                    0,
                    "&nfr;"
                ],
                [
                    0,
                    "&ofr;"
                ],
                [
                    0,
                    "&pfr;"
                ],
                [
                    0,
                    "&qfr;"
                ],
                [
                    0,
                    "&rfr;"
                ],
                [
                    0,
                    "&sfr;"
                ],
                [
                    0,
                    "&tfr;"
                ],
                [
                    0,
                    "&ufr;"
                ],
                [
                    0,
                    "&vfr;"
                ],
                [
                    0,
                    "&wfr;"
                ],
                [
                    0,
                    "&xfr;"
                ],
                [
                    0,
                    "&yfr;"
                ],
                [
                    0,
                    "&zfr;"
                ],
                [
                    0,
                    "&Aopf;"
                ],
                [
                    0,
                    "&Bopf;"
                ],
                [
                    1,
                    "&Dopf;"
                ],
                [
                    0,
                    "&Eopf;"
                ],
                [
                    0,
                    "&Fopf;"
                ],
                [
                    0,
                    "&Gopf;"
                ],
                [
                    1,
                    "&Iopf;"
                ],
                [
                    0,
                    "&Jopf;"
                ],
                [
                    0,
                    "&Kopf;"
                ],
                [
                    0,
                    "&Lopf;"
                ],
                [
                    0,
                    "&Mopf;"
                ],
                [
                    1,
                    "&Oopf;"
                ],
                [
                    3,
                    "&Sopf;"
                ],
                [
                    0,
                    "&Topf;"
                ],
                [
                    0,
                    "&Uopf;"
                ],
                [
                    0,
                    "&Vopf;"
                ],
                [
                    0,
                    "&Wopf;"
                ],
                [
                    0,
                    "&Xopf;"
                ],
                [
                    0,
                    "&Yopf;"
                ],
                [
                    1,
                    "&aopf;"
                ],
                [
                    0,
                    "&bopf;"
                ],
                [
                    0,
                    "&copf;"
                ],
                [
                    0,
                    "&dopf;"
                ],
                [
                    0,
                    "&eopf;"
                ],
                [
                    0,
                    "&fopf;"
                ],
                [
                    0,
                    "&gopf;"
                ],
                [
                    0,
                    "&hopf;"
                ],
                [
                    0,
                    "&iopf;"
                ],
                [
                    0,
                    "&jopf;"
                ],
                [
                    0,
                    "&kopf;"
                ],
                [
                    0,
                    "&lopf;"
                ],
                [
                    0,
                    "&mopf;"
                ],
                [
                    0,
                    "&nopf;"
                ],
                [
                    0,
                    "&oopf;"
                ],
                [
                    0,
                    "&popf;"
                ],
                [
                    0,
                    "&qopf;"
                ],
                [
                    0,
                    "&ropf;"
                ],
                [
                    0,
                    "&sopf;"
                ],
                [
                    0,
                    "&topf;"
                ],
                [
                    0,
                    "&uopf;"
                ],
                [
                    0,
                    "&vopf;"
                ],
                [
                    0,
                    "&wopf;"
                ],
                [
                    0,
                    "&xopf;"
                ],
                [
                    0,
                    "&yopf;"
                ],
                [
                    0,
                    "&zopf;"
                ]
            ]))
        }
    ],
    [
        8906,
        "&fflig;"
    ],
    [
        0,
        "&filig;"
    ],
    [
        0,
        "&fllig;"
    ],
    [
        0,
        "&ffilig;"
    ],
    [
        0,
        "&ffllig;"
    ]
]))); //# sourceMappingURL=encode-html.js.map

;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/escape.js
const escape_xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
const xmlCodeMap = new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        39,
        "&apos;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ]
]);
// For compatibility with node < 4, we wrap `codePointAt`
const escape_getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null ? (str, index)=>str.codePointAt(index) : (c, index)=>(c.charCodeAt(index) & 0xfc00) === 0xd800 ? (c.charCodeAt(index) - 0xd800) * 0x400 + c.charCodeAt(index + 1) - 0xdc00 + 0x10000 : c.charCodeAt(index);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ function escape_encodeXML(str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while((match = escape_xmlReplacer.exec(str)) !== null){
        const i = match.index;
        const char = str.charCodeAt(i);
        const next = xmlCodeMap.get(char);
        if (next !== undefined) {
            ret += str.substring(lastIdx, i) + next;
            lastIdx = i + 1;
        } else {
            ret += `${str.substring(lastIdx, i)}&#x${escape_getCodePoint(str, i).toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIdx = escape_xmlReplacer.lastIndex += Number((char & 0xfc00) === 0xd800);
        }
    }
    return ret + str.substr(lastIdx);
}
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */ const escape_escape = (/* unused pure expression or super */ null && (escape_encodeXML));
/**
 * Creates a function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 *
 * @param regex Regular expression to match characters to escape.
 * @param map Map of characters to escape to their entities.
 *
 * @returns Function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 */ function getEscaper(regex, map) {
    return function escape(data) {
        let match;
        let lastIdx = 0;
        let result = "";
        while(match = regex.exec(data)){
            if (lastIdx !== match.index) {
                result += data.substring(lastIdx, match.index);
            }
            // We know that this character will be in the map.
            result += map.get(match[0].charCodeAt(0));
            // Every match will be of length 1
            lastIdx = match.index + 1;
        }
        return result + data.substring(lastIdx);
    };
}
/**
 * Encodes all characters not valid in XML documents using XML entities.
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */ const escape_escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
/**
 * Encodes all characters that have to be escaped in HTML attributes,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */ const escape_escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        160,
        "&nbsp;"
    ]
]));
/**
 * Encodes all characters that have to be escaped in HTML text,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */ const escape_escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
    [
        38,
        "&amp;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ],
    [
        160,
        "&nbsp;"
    ]
])); //# sourceMappingURL=escape.js.map

;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/encode.js


const htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
/**
 * Encodes all characters in the input using HTML entities. This includes
 * characters that are valid ASCII characters in HTML documents, such as `#`.
 *
 * To get a more compact output, consider using the `encodeNonAsciiHTML`
 * function, which will only encode characters that are not valid in HTML
 * documents, as well as non-ASCII characters.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */ function encode_encodeHTML(data) {
    return encodeHTMLTrieRe(htmlReplacer, data);
}
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities. This function will not encode characters that
 * are valid in HTML documents, such as `#`.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */ function encode_encodeNonAsciiHTML(data) {
    return encodeHTMLTrieRe(xmlReplacer, data);
}
function encodeHTMLTrieRe(regExp, str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while((match = regExp.exec(str)) !== null){
        const i = match.index;
        ret += str.substring(lastIdx, i);
        const char = str.charCodeAt(i);
        let next = htmlTrie.get(char);
        if (typeof next === "object") {
            // We are in a branch. Try to match the next char.
            if (i + 1 < str.length) {
                const nextChar = str.charCodeAt(i + 1);
                const value = typeof next.n === "number" ? next.n === nextChar ? next.o : undefined : next.n.get(nextChar);
                if (value !== undefined) {
                    ret += value;
                    lastIdx = regExp.lastIndex += 1;
                    continue;
                }
            }
            next = next.v;
        }
        // We might have a tree node without a value; skip and use a numeric entity.
        if (next !== undefined) {
            ret += next;
            lastIdx = i + 1;
        } else {
            const cp = getCodePoint(str, i);
            ret += `&#x${cp.toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIdx = regExp.lastIndex += Number(cp !== char);
        }
    }
    return ret + str.substr(lastIdx);
} //# sourceMappingURL=encode.js.map

;// CONCATENATED MODULE: ./node_modules/entities/lib/esm/index.js



/** The level of entities to support. */ var EntityLevel;
(function(EntityLevel) {
    /** Support only XML entities. */ EntityLevel[EntityLevel["XML"] = 0] = "XML";
    /** Support HTML entities, which are a superset of XML entities. */ EntityLevel[EntityLevel["HTML"] = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
var EncodingMode;
(function(EncodingMode) {
    /**
     * The output is UTF-8 encoded. Only characters that need escaping within
     * XML will be escaped.
     */ EncodingMode[EncodingMode["UTF8"] = 0] = "UTF8";
    /**
     * The output consists only of ASCII characters. Characters that need
     * escaping within HTML, and characters that aren't ASCII characters will
     * be escaped.
     */ EncodingMode[EncodingMode["ASCII"] = 1] = "ASCII";
    /**
     * Encode all characters that have an equivalent entity, as well as all
     * characters that are not ASCII characters.
     */ EncodingMode[EncodingMode["Extensive"] = 2] = "Extensive";
    /**
     * Encode all characters that have to be escaped in HTML attributes,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */ EncodingMode[EncodingMode["Attribute"] = 3] = "Attribute";
    /**
     * Encode all characters that have to be escaped in HTML text,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */ EncodingMode[EncodingMode["Text"] = 4] = "Text";
})(EncodingMode || (EncodingMode = {}));
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 */ function decode(data, options = EntityLevel.XML) {
    const level = typeof options === "number" ? options : options.level;
    if (level === EntityLevel.HTML) {
        const mode = typeof options === "object" ? options.mode : undefined;
        return decodeHTML(data, mode);
    }
    return decodeXML(data);
}
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 * @deprecated Use `decode` with the `mode` set to `Strict`.
 */ function decodeStrict(data, options = EntityLevel.XML) {
    var _a;
    const opts = typeof options === "number" ? {
        level: options
    } : options;
    (_a = opts.mode) !== null && _a !== void 0 ? _a : opts.mode = DecodingMode.Strict;
    return decode(data, opts);
}
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param options Encoding options.
 */ function encode(data, options = EntityLevel.XML) {
    const opts = typeof options === "number" ? {
        level: options
    } : options;
    // Mode `UTF8` just escapes XML entities
    if (opts.mode === EncodingMode.UTF8) return escapeUTF8(data);
    if (opts.mode === EncodingMode.Attribute) return escapeAttribute(data);
    if (opts.mode === EncodingMode.Text) return escapeText(data);
    if (opts.level === EntityLevel.HTML) {
        if (opts.mode === EncodingMode.ASCII) {
            return encodeNonAsciiHTML(data);
        }
        return encodeHTML(data);
    }
    // ASCII and Extensive are equivalent
    return encodeXML(data);
}


 //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/dom-serializer/lib/esm/foreignNames.js
const elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
].map((val)=>[
        val.toLowerCase(),
        val
    ]));
const attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
].map((val)=>[
        val.toLowerCase(),
        val
    ]));

;// CONCATENATED MODULE: ./node_modules/dom-serializer/lib/esm/index.js
/*
 * Module dependencies
 */ 

/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */ 
const unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript"
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */ function formatAttributes(attributes, opts) {
    var _a;
    if (!attributes) return;
    const encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? escape_encodeXML : escape_escapeAttribute;
    return Object.keys(attributes).map((key)=>{
        var _a, _b;
        const value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */ key = (_b = attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return `${key}="${encode(value)}"`;
    }).join(" ");
}
/**
 * Self-enclosing tags
 */ const singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */ function render(node, options = {}) {
    const nodes = "length" in node ? node : [
        node
    ];
    let output = "";
    for(let i = 0; i < nodes.length; i++){
        output += renderNode(nodes[i], options);
    }
    return output;
}
/* harmony default export */ const lib_esm = ((/* unused pure expression or super */ null && (render)));
function renderNode(node, options) {
    switch(node.type){
        case Root:
            return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case Doctype:
        case Directive:
            return renderDirective(node);
        case Comment:
            return renderComment(node);
        case CDATA:
            return renderCdata(node);
        case Script:
        case Style:
        case Tag:
            return renderTag(node, options);
        case Text:
            return renderText(node, options);
    }
}
const foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
]);
const foreignElements = new Set([
    "svg",
    "math"
]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */ elem.name = (_a = elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */ if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = {
                ...opts,
                xmlMode: false
            };
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = {
            ...opts,
            xmlMode: "foreign"
        };
    }
    let tag = `<${elem.name}`;
    const attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += ` ${attribs}`;
    }
    if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode) tag += " ";
        tag += "/>";
    } else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += `</${elem.name}>`;
        }
    }
    return tag;
}
function renderDirective(elem) {
    return `<${elem.data}>`;
}
function renderText(elem, opts) {
    var _a;
    let data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
        data = opts.xmlMode || opts.encodeEntities !== "utf8" ? escape_encodeXML(data) : escape_escapeText(data);
    }
    return data;
}
function renderCdata(elem) {
    return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
    return `<!--${elem.data}-->`;
}

;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/stringify.js



/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @returns `node`'s outer HTML.
 */ function getOuterHTML(node, options) {
    return renderHTML(node, options);
}
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @returns `node`'s inner HTML.
 */ function getInnerHTML(node, options) {
    return hasChildren(node) ? node.children.map((node)=>getOuterHTML(node, options)).join("") : "";
}
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags. Ignores comments.
 *
 * @category Stringify
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */ function getText(node) {
    if (Array.isArray(node)) return node.map(getText).join("");
    if (isTag(node)) return node.name === "br" ? "\n" : getText(node.children);
    if (isCDATA(node)) return getText(node.children);
    if (isText(node)) return node.data;
    return "";
}
/**
 * Get a node's text content. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */ function stringify_textContent(node) {
    if (Array.isArray(node)) return node.map(stringify_textContent).join("");
    if (hasChildren(node) && !isComment(node)) {
        return stringify_textContent(node.children);
    }
    if (isText(node)) return node.data;
    return "";
}
/**
 * Get a node's inner text, ignoring `<script>` and `<style>` tags. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */ function innerText(node) {
    if (Array.isArray(node)) return node.map(innerText).join("");
    if (hasChildren(node) && (node.type === ElementType.Tag || isCDATA(node))) {
        return innerText(node.children);
    }
    if (isText(node)) return node.data;
    return "";
} //# sourceMappingURL=stringify.js.map

;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/traversal.js

/**
 * Get a node's children.
 *
 * @category Traversal
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */ function getChildren(elem) {
    return hasChildren(elem) ? elem.children : [];
}
/**
 * Get a node's parent.
 *
 * @category Traversal
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node, or `null` if `elem` is a root node.
 */ function getParent(elem) {
    return elem.parent || null;
}
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first. If we don't
 * have a parent (the element is a root node), we walk the element's `prev` &
 * `next` to get all remaining nodes.
 *
 * @category Traversal
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings, including `elem`.
 */ function getSiblings(elem) {
    const parent = getParent(elem);
    if (parent != null) return getChildren(parent);
    const siblings = [
        elem
    ];
    let { prev, next } = elem;
    while(prev != null){
        siblings.unshift(prev);
        ({ prev } = prev);
    }
    while(next != null){
        siblings.push(next);
        ({ next } = next);
    }
    return siblings;
}
/**
 * Gets an attribute from an element.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */ function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
/**
 * Checks whether an element has an attribute.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */ function hasAttrib(elem, name) {
    return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
/**
 * Get the tag name of an element.
 *
 * @category Traversal
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */ function getName(elem) {
    return elem.name;
}
/**
 * Returns the next element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag, or `null` if there is no next
 * sibling.
 */ function nextElementSibling(elem) {
    let { next } = elem;
    while(next !== null && !isTag(next))({ next } = next);
    return next;
}
/**
 * Returns the previous element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag, or `null` if there is no
 * previous sibling.
 */ function prevElementSibling(elem) {
    let { prev } = elem;
    while(prev !== null && !isTag(prev))({ prev } = prev);
    return prev;
} //# sourceMappingURL=traversal.js.map

;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/querying.js

/**
 * Search a node and its children for nodes passing a test function. If `node` is not an array, it will be wrapped in one.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */ function querying_filter(test, node, recurse = true, limit = Infinity) {
    return find(test, Array.isArray(node) ? node : [
        node
    ], recurse, limit);
}
/**
 * Search an array of nodes and their children for nodes passing a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */ function find(test, nodes, recurse, limit) {
    const result = [];
    /** Stack of the arrays we are looking at. */ const nodeStack = [
        Array.isArray(nodes) ? nodes : [
            nodes
        ]
    ];
    /** Stack of the indices within the arrays. */ const indexStack = [
        0
    ];
    for(;;){
        // First, check if the current array has any more elements to look at.
        if (indexStack[0] >= nodeStack[0].length) {
            // If we have no more arrays to look at, we are done.
            if (indexStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0) return result;
        }
        if (recurse && hasChildren(elem) && elem.children.length > 0) {
            /*
             * Add the children to the stack. We are depth-first, so this is
             * the next array we look at.
             */ indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
/**
 * Finds the first element inside of an array that matches a test function. This is an alias for `Array.prototype.find`.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 * @deprecated Use `Array.prototype.find` directly.
 */ function findOneChild(test, nodes) {
    return nodes.find(test);
}
/**
 * Finds one element in a tree that passes a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Node or array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first node that passes `test`.
 */ function querying_findOne(test, nodes, recurse = true) {
    const searchedNodes = Array.isArray(nodes) ? nodes : [
        nodes
    ];
    for(let i = 0; i < searchedNodes.length; i++){
        const node = searchedNodes[i];
        if (isTag(node) && test(node)) {
            return node;
        }
        if (recurse && hasChildren(node) && node.children.length > 0) {
            const found = querying_findOne(test, node.children, true);
            if (found) return found;
        }
    }
    return null;
}
/**
 * Checks if a tree of nodes contains at least one node passing a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing the test.
 */ function existsOne(test, nodes) {
    return (Array.isArray(nodes) ? nodes : [
        nodes
    ]).some((node)=>isTag(node) && test(node) || hasChildren(node) && existsOne(test, node.children));
}
/**
 * Search an array of nodes and their children for elements passing a test function.
 *
 * Same as `find`, but limited to elements and with less options, leading to reduced complexity.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */ function findAll(test, nodes) {
    const result = [];
    const nodeStack = [
        Array.isArray(nodes) ? nodes : [
            nodes
        ]
    ];
    const indexStack = [
        0
    ];
    for(;;){
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (isTag(elem) && test(elem)) result.push(elem);
        if (hasChildren(elem) && elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
} //# sourceMappingURL=querying.js.map

;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/legacy.js


/**
 * A map of functions to check nodes against.
 */ const Checks = {
    tag_name (name) {
        if (typeof name === "function") {
            return (elem)=>node_isTag(elem) && name(elem.name);
        } else if (name === "*") {
            return node_isTag;
        }
        return (elem)=>node_isTag(elem) && elem.name === name;
    },
    tag_type (type) {
        if (typeof type === "function") {
            return (elem)=>type(elem.type);
        }
        return (elem)=>elem.type === type;
    },
    tag_contains (data) {
        if (typeof data === "function") {
            return (elem)=>node_isText(elem) && data(elem.data);
        }
        return (elem)=>node_isText(elem) && elem.data === data;
    }
};
/**
 * Returns a function to check whether a node has an attribute with a particular
 * value.
 *
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a
 *   particular value.
 */ function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return (elem)=>isTag(elem) && value(elem.attribs[attrib]);
    }
    return (elem)=>isTag(elem) && elem.attribs[attrib] === value;
}
/**
 * Returns a function that returns `true` if either of the input functions
 * returns `true` for a node.
 *
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either of the input
 *   functions returns `true` for the node.
 */ function combineFuncs(a, b) {
    return (elem)=>a(elem) || b(elem);
}
/**
 * Returns a function that executes all checks in `options` and returns `true`
 * if any of them match a node.
 *
 * @param options An object describing nodes to look for.
 * @returns A function that executes all checks in `options` and returns `true`
 *   if any of them match a node.
 */ function compileTest(options) {
    const funcs = Object.keys(options).map((key)=>{
        const value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * Checks whether a node matches the description in `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */ function testElement(options, node) {
    const test = compileTest(options);
    return test ? test(node) : true;
}
/**
 * Returns all nodes that match `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */ function getElements(options, nodes, recurse, limit = Infinity) {
    const test = compileTest(options);
    return test ? filter(test, nodes, recurse, limit) : [];
}
/**
 * Returns the node with the supplied ID.
 *
 * @category Legacy Query Functions
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */ function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes)) nodes = [
        nodes
    ];
    return findOne(getAttribCheck("id", id), nodes, recurse);
}
/**
 * Returns all nodes with the supplied `tagName`.
 *
 * @category Legacy Query Functions
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */ function legacy_getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
    return filter(Checks["tag_name"](tagName), nodes, recurse, limit);
}
/**
 * Returns all nodes with the supplied `className`.
 *
 * @category Legacy Query Functions
 * @param className Class name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `className`.
 */ function getElementsByClassName(className, nodes, recurse = true, limit = Infinity) {
    return filter(getAttribCheck("class", className), nodes, recurse, limit);
}
/**
 * Returns all nodes with the supplied `type`.
 *
 * @category Legacy Query Functions
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */ function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
    return filter(Checks["tag_type"](type), nodes, recurse, limit);
} //# sourceMappingURL=legacy.js.map

;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/helpers.js

/**
 * Given an array of nodes, remove any member that is contained by another
 * member.
 *
 * @category Helpers
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't contained by other nodes.
 */ function removeSubsets(nodes) {
    let idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */ while(--idx >= 0){
        const node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */ if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for(let ancestor = node.parent; ancestor; ancestor = ancestor.parent){
            if (nodes.includes(ancestor)) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
/**
 * @category Helpers
 * @see {@link http://dom.spec.whatwg.org/#dom-node-comparedocumentposition}
 */ var DocumentPosition;
(function(DocumentPosition) {
    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
/**
 * Compare the position of one node against another node in any other document,
 * returning a bitmask with the values from {@link DocumentPosition}.
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent.
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @category Helpers
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */ function compareDocumentPosition(nodeA, nodeB) {
    const aParents = [];
    const bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    let current = hasChildren(nodeA) ? nodeA : nodeA.parent;
    while(current){
        aParents.unshift(current);
        current = current.parent;
    }
    current = hasChildren(nodeB) ? nodeB : nodeB.parent;
    while(current){
        bParents.unshift(current);
        current = current.parent;
    }
    const maxIdx = Math.min(aParents.length, bParents.length);
    let idx = 0;
    while(idx < maxIdx && aParents[idx] === bParents[idx]){
        idx++;
    }
    if (idx === 0) {
        return DocumentPosition.DISCONNECTED;
    }
    const sharedParent = aParents[idx - 1];
    const siblings = sharedParent.children;
    const aSibling = aParents[idx];
    const bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
    }
    if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
    }
    return DocumentPosition.PRECEDING;
}
/**
 * Sort an array of nodes based on their relative position in the document,
 * removing any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @category Helpers
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */ function uniqueSort(nodes) {
    nodes = nodes.filter((node, i, arr)=>!arr.includes(node, i + 1));
    nodes.sort((a, b)=>{
        const relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) {
            return -1;
        } else if (relative & DocumentPosition.FOLLOWING) {
            return 1;
        }
        return 0;
    });
    return nodes;
} //# sourceMappingURL=helpers.js.map

;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/feeds.js


/**
 * Get the feed object from the root of a DOM tree.
 *
 * @category Feeds
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */ function feeds_getFeed(doc) {
    const feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getAtomFeed(feedRoot) {
    var _a;
    const childs = feedRoot.children;
    const feed = {
        type: "atom",
        items: getElementsByTagName("entry", childs).map((item)=>{
            var _a;
            const { children } = item;
            const entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            const href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
            if (href) {
                entry.link = href;
            }
            const description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            const pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        })
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    const href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    const updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getRssFeed(feedRoot) {
    var _a, _b;
    const childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    const feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: getElementsByTagName("item", feedRoot.children).map((item)=>{
            const { children } = item;
            const entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            const pubDate = fetch("pubDate", children) || fetch("dc:date", children);
            if (pubDate) entry.pubDate = new Date(pubDate);
            return entry;
        })
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    const updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
const MEDIA_KEYS_STRING = (/* unused pure expression or super */ null && ([
    "url",
    "type",
    "lang"
]));
const MEDIA_KEYS_INT = (/* unused pure expression or super */ null && ([
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width"
]));
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */ function getMediaElements(where) {
    return getElementsByTagName("media:content", where).map((elem)=>{
        const { attribs } = elem;
        const media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"]
        };
        for (const attrib of MEDIA_KEYS_STRING){
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (const attrib of MEDIA_KEYS_INT){
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs["expression"]) {
            media.expression = attribs["expression"];
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */ function getOneElement(tagName, node) {
    return getElementsByTagName(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */ function fetch(tagName, where, recurse = false) {
    return textContent(getElementsByTagName(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */ function addConditionally(obj, prop, tagName, where, recurse = false) {
    const val = fetch(tagName, where, recurse);
    if (val) obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */ function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
} //# sourceMappingURL=feeds.js.map

;// CONCATENATED MODULE: ./node_modules/domutils/lib/esm/index.js







/** @deprecated Use these methods from `domhandler` directly. */  //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/htmlparser2/lib/esm/index.js




// Helper methods
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */ function parseDocument(data, options) {
    const handler = new esm_DomHandler(undefined, options);
    new Parser_Parser(handler, options).end(data);
    return handler.root;
}
/**
 * Parses data, returns an array of the root nodes.
 *
 * Note that the root nodes still have a `Document` node as their parent.
 * Use `parseDocument` to get the `Document` node instead.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 * @deprecated Use `parseDocument` instead.
 */ function parseDOM(data, options) {
    return parseDocument(data, options).children;
}
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param callback A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCallback An optional callback that will be called every time a tag has been completed inside of the DOM.
 */ function createDomStream(callback, options, elementCallback) {
    const handler = new DomHandler(callback, options, elementCallback);
    return new Parser(handler, options);
}

/*
 * All of the following exports exist for backwards-compatibility.
 * They should probably be removed eventually.
 */ 


const parseFeedDefaultOptions = {
    xmlMode: true
};
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this, you should set `xmlMode` to `true`.
 */ function parseFeed(feed, options = parseFeedDefaultOptions) {
    return getFeed(parseDOM(feed, options));
}
 //# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__(79089);
;// CONCATENATED MODULE: ./node_modules/html-to-text/lib/html-to-text.mjs





/**
 * Make a recursive function that will only run to a given depth
 * and switches to an alternative function at that depth. \
 * No limitation if `n` is `undefined` (Just wraps `f` in that case).
 *
 * @param   { number | undefined } n   Allowed depth of recursion. `undefined` for no limitation.
 * @param   { Function }           f   Function that accepts recursive callback as the first argument.
 * @param   { Function }           [g] Function to run instead, when maximum depth was reached. Do nothing by default.
 * @returns { Function }
 */ function limitedDepthRecursive(n, f, g = ()=>undefined) {
    if (n === undefined) {
        const f1 = function(...args) {
            return f(f1, ...args);
        };
        return f1;
    }
    if (n >= 0) {
        return function(...args) {
            return f(limitedDepthRecursive(n - 1, f, g), ...args);
        };
    }
    return g;
}
/**
 * Return the same string or a substring with
 * the given character occurrences removed from each side.
 *
 * @param   { string } str  A string to trim.
 * @param   { string } char A character to be trimmed.
 * @returns { string }
 */ function trimCharacter(str, char) {
    let start = 0;
    let end = str.length;
    while(start < end && str[start] === char){
        ++start;
    }
    while(end > start && str[end - 1] === char){
        --end;
    }
    return start > 0 || end < str.length ? str.substring(start, end) : str;
}
/**
 * Return the same string or a substring with
 * the given character occurrences removed from the end only.
 *
 * @param   { string } str  A string to trim.
 * @param   { string } char A character to be trimmed.
 * @returns { string }
 */ function trimCharacterEnd(str, char) {
    let end = str.length;
    while(end > 0 && str[end - 1] === char){
        --end;
    }
    return end < str.length ? str.substring(0, end) : str;
}
/**
 * Return a new string will all characters replaced with unicode escape sequences.
 * This extreme kind of escaping can used to be safely compose regular expressions.
 *
 * @param { string } str A string to escape.
 * @returns { string } A string of unicode escape sequences.
 */ function unicodeEscape(str) {
    return str.replace(/[\s\S]/g, (c)=>"\\u" + c.charCodeAt().toString(16).padStart(4, "0"));
}
/**
 * Deduplicate an array by a given key callback.
 * Item properties are merged recursively and with the preference for last defined values.
 * Of items with the same key, merged item takes the place of the last item,
 * others are omitted.
 *
 * @param { any[] } items An array to deduplicate.
 * @param { (x: any) => string } getKey Callback to get a value that distinguishes unique items.
 * @returns { any[] }
 */ function mergeDuplicatesPreferLast(items, getKey) {
    const map = new Map();
    for(let i = items.length; i-- > 0;){
        const item = items[i];
        const key = getKey(item);
        map.set(key, map.has(key) ? cjs(item, map.get(key), {
            arrayMerge: overwriteMerge$1
        }) : item);
    }
    return [
        ...map.values()
    ].reverse();
}
const overwriteMerge$1 = (acc, src, options)=>[
        ...src
    ];
/**
 * Get a nested property from an object.
 *
 * @param   { object }   obj  The object to query for the value.
 * @param   { string[] } path The path to the property.
 * @returns { any }
 */ function get(obj, path) {
    for (const key of path){
        if (!obj) {
            return undefined;
        }
        obj = obj[key];
    }
    return obj;
}
/**
 * Convert a number into alphabetic sequence representation (Sequence without zeroes).
 *
 * For example: `a, ..., z, aa, ..., zz, aaa, ...`.
 *
 * @param   { number } num              Number to convert. Must be >= 1.
 * @param   { string } [baseChar = 'a'] Character for 1 in the sequence.
 * @param   { number } [base = 26]      Number of characters in the sequence.
 * @returns { string }
 */ function numberToLetterSequence(num, baseChar = "a", base = 26) {
    const digits = [];
    do {
        num -= 1;
        digits.push(num % base);
        num = num / base >> 0; // quick `floor`
    }while (num > 0);
    const baseCode = baseChar.charCodeAt(0);
    return digits.reverse().map((n)=>String.fromCharCode(baseCode + n)).join("");
}
const I = [
    "I",
    "X",
    "C",
    "M"
];
const V = [
    "V",
    "L",
    "D"
];
/**
 * Convert a number to it's Roman representation. No large numbers extension.
 *
 * @param   { number } num Number to convert. `0 < num <= 3999`.
 * @returns { string }
 */ function numberToRoman(num) {
    return [
        ...num + ""
    ].map((n)=>+n).reverse().map((v, i)=>v % 5 < 4 ? (v < 5 ? "" : V[i]) + I[i].repeat(v % 5) : I[i] + (v < 5 ? V[i] : I[i + 1])).reverse().join("");
}
/**
 * Helps to build text from words.
 */ class InlineTextBuilder {
    /**
   * Creates an instance of InlineTextBuilder.
   *
   * If `maxLineLength` is not provided then it is either `options.wordwrap` or unlimited.
   *
   * @param { Options } options           HtmlToText options.
   * @param { number }  [ maxLineLength ] This builder will try to wrap text to fit this line length.
   */ constructor(options, maxLineLength = undefined){
        /** @type { string[][] } */ this.lines = [];
        /** @type { string[] }   */ this.nextLineWords = [];
        this.maxLineLength = maxLineLength || options.wordwrap || Number.MAX_VALUE;
        this.nextLineAvailableChars = this.maxLineLength;
        this.wrapCharacters = get(options, [
            "longWordSplit",
            "wrapCharacters"
        ]) || [];
        this.forceWrapOnLimit = get(options, [
            "longWordSplit",
            "forceWrapOnLimit"
        ]) || false;
        this.stashedSpace = false;
        this.wordBreakOpportunity = false;
    }
    /**
   * Add a new word.
   *
   * @param { string } word A word to add.
   * @param { boolean } [noWrap] Don't wrap text even if the line is too long.
   */ pushWord(word, noWrap = false) {
        if (this.nextLineAvailableChars <= 0 && !noWrap) {
            this.startNewLine();
        }
        const isLineStart = this.nextLineWords.length === 0;
        const cost = word.length + (isLineStart ? 0 : 1);
        if (cost <= this.nextLineAvailableChars || noWrap) {
            this.nextLineWords.push(word);
            this.nextLineAvailableChars -= cost;
        } else {
            // The word is moved to a new line - prefer to wrap between words.
            const [first, ...rest] = this.splitLongWord(word);
            if (!isLineStart) {
                this.startNewLine();
            }
            this.nextLineWords.push(first);
            this.nextLineAvailableChars -= first.length;
            for (const part of rest){
                this.startNewLine();
                this.nextLineWords.push(part);
                this.nextLineAvailableChars -= part.length;
            }
        }
    }
    /**
   * Pop a word from the currently built line.
   * This doesn't affect completed lines.
   *
   * @returns { string }
   */ popWord() {
        const lastWord = this.nextLineWords.pop();
        if (lastWord !== undefined) {
            const isLineStart = this.nextLineWords.length === 0;
            const cost = lastWord.length + (isLineStart ? 0 : 1);
            this.nextLineAvailableChars += cost;
        }
        return lastWord;
    }
    /**
   * Concat a word to the last word already in the builder.
   * Adds a new word in case there are no words yet in the last line.
   *
   * @param { string } word A word to be concatenated.
   * @param { boolean } [noWrap] Don't wrap text even if the line is too long.
   */ concatWord(word, noWrap = false) {
        if (this.wordBreakOpportunity && word.length > this.nextLineAvailableChars) {
            this.pushWord(word, noWrap);
            this.wordBreakOpportunity = false;
        } else {
            const lastWord = this.popWord();
            this.pushWord(lastWord ? lastWord.concat(word) : word, noWrap);
        }
    }
    /**
   * Add current line (and more empty lines if provided argument > 1) to the list of complete lines and start a new one.
   *
   * @param { number } n Number of line breaks that will be added to the resulting string.
   */ startNewLine(n = 1) {
        this.lines.push(this.nextLineWords);
        if (n > 1) {
            this.lines.push(...Array.from({
                length: n - 1
            }, ()=>[]));
        }
        this.nextLineWords = [];
        this.nextLineAvailableChars = this.maxLineLength;
    }
    /**
   * No words in this builder.
   *
   * @returns { boolean }
   */ isEmpty() {
        return this.lines.length === 0 && this.nextLineWords.length === 0;
    }
    clear() {
        this.lines.length = 0;
        this.nextLineWords.length = 0;
        this.nextLineAvailableChars = this.maxLineLength;
    }
    /**
   * Join all lines of words inside the InlineTextBuilder into a complete string.
   *
   * @returns { string }
   */ toString() {
        return [
            ...this.lines,
            this.nextLineWords
        ].map((words)=>words.join(" ")).join("\n");
    }
    /**
   * Split a long word up to fit within the word wrap limit.
   * Use either a character to split looking back from the word wrap limit,
   * or truncate to the word wrap limit.
   *
   * @param   { string }   word Input word.
   * @returns { string[] }      Parts of the word.
   */ splitLongWord(word) {
        const parts = [];
        let idx = 0;
        while(word.length > this.maxLineLength){
            const firstLine = word.substring(0, this.maxLineLength);
            const remainingChars = word.substring(this.maxLineLength);
            const splitIndex = firstLine.lastIndexOf(this.wrapCharacters[idx]);
            if (splitIndex > -1) {
                word = firstLine.substring(splitIndex + 1) + remainingChars;
                parts.push(firstLine.substring(0, splitIndex + 1));
            } else {
                idx++;
                if (idx < this.wrapCharacters.length) {
                    word = firstLine + remainingChars;
                } else {
                    if (this.forceWrapOnLimit) {
                        parts.push(firstLine);
                        word = remainingChars;
                        if (word.length > this.maxLineLength) {
                            continue;
                        }
                    } else {
                        word = firstLine + remainingChars;
                    }
                    break;
                }
            }
        }
        parts.push(word); // Add remaining part to array
        return parts;
    }
}
/* eslint-disable max-classes-per-file */ class StackItem {
    constructor(next = null){
        this.next = next;
    }
    getRoot() {
        return this.next ? this.next : this;
    }
}
class BlockStackItem extends StackItem {
    constructor(options, next = null, leadingLineBreaks = 1, maxLineLength = undefined){
        super(next);
        this.leadingLineBreaks = leadingLineBreaks;
        this.inlineTextBuilder = new InlineTextBuilder(options, maxLineLength);
        this.rawText = "";
        this.stashedLineBreaks = 0;
        this.isPre = next && next.isPre;
        this.isNoWrap = next && next.isNoWrap;
    }
}
class ListStackItem extends BlockStackItem {
    constructor(options, next = null, { interRowLineBreaks = 1, leadingLineBreaks = 2, maxLineLength = undefined, maxPrefixLength = 0, prefixAlign = "left" } = {}){
        super(options, next, leadingLineBreaks, maxLineLength);
        this.maxPrefixLength = maxPrefixLength;
        this.prefixAlign = prefixAlign;
        this.interRowLineBreaks = interRowLineBreaks;
    }
}
class ListItemStackItem extends BlockStackItem {
    constructor(options, next = null, { leadingLineBreaks = 1, maxLineLength = undefined, prefix = "" } = {}){
        super(options, next, leadingLineBreaks, maxLineLength);
        this.prefix = prefix;
    }
}
class TableStackItem extends StackItem {
    constructor(next = null){
        super(next);
        this.rows = [];
        this.isPre = next && next.isPre;
        this.isNoWrap = next && next.isNoWrap;
    }
}
class TableRowStackItem extends StackItem {
    constructor(next = null){
        super(next);
        this.cells = [];
        this.isPre = next && next.isPre;
        this.isNoWrap = next && next.isNoWrap;
    }
}
class TableCellStackItem extends StackItem {
    constructor(options, next = null, maxColumnWidth = undefined){
        super(next);
        this.inlineTextBuilder = new InlineTextBuilder(options, maxColumnWidth);
        this.rawText = "";
        this.stashedLineBreaks = 0;
        this.isPre = next && next.isPre;
        this.isNoWrap = next && next.isNoWrap;
    }
}
class TransformerStackItem extends StackItem {
    constructor(next = null, transform){
        super(next);
        this.transform = transform;
    }
}
function charactersToCodes(str) {
    return [
        ...str
    ].map((c)=>"\\u" + c.charCodeAt(0).toString(16).padStart(4, "0")).join("");
}
/**
 * Helps to handle HTML whitespaces.
 *
 * @class WhitespaceProcessor
 */ class WhitespaceProcessor {
    /**
   * Creates an instance of WhitespaceProcessor.
   *
   * @param { Options } options    HtmlToText options.
   * @memberof WhitespaceProcessor
   */ constructor(options){
        this.whitespaceChars = options.preserveNewlines ? options.whitespaceCharacters.replace(/\n/g, "") : options.whitespaceCharacters;
        const whitespaceCodes = charactersToCodes(this.whitespaceChars);
        this.leadingWhitespaceRe = new RegExp(`^[${whitespaceCodes}]`);
        this.trailingWhitespaceRe = new RegExp(`[${whitespaceCodes}]$`);
        this.allWhitespaceOrEmptyRe = new RegExp(`^[${whitespaceCodes}]*$`);
        this.newlineOrNonWhitespaceRe = new RegExp(`(\\n|[^\\n${whitespaceCodes}])`, "g");
        this.newlineOrNonNewlineStringRe = new RegExp(`(\\n|[^\\n]+)`, "g");
        if (options.preserveNewlines) {
            const wordOrNewlineRe = new RegExp(`\\n|[^\\n${whitespaceCodes}]+`, "gm");
            /**
       * Shrink whitespaces and wrap text, add to the builder.
       *
       * @param { string }                  text              Input text.
       * @param { InlineTextBuilder }       inlineTextBuilder A builder to receive processed text.
       * @param { (str: string) => string } [ transform ]     A transform to be applied to words.
       * @param { boolean }                 [noWrap] Don't wrap text even if the line is too long.
       */ this.shrinkWrapAdd = function(text, inlineTextBuilder, transform = (str)=>str, noWrap = false) {
                if (!text) {
                    return;
                }
                const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
                let anyMatch = false;
                let m = wordOrNewlineRe.exec(text);
                if (m) {
                    anyMatch = true;
                    if (m[0] === "\n") {
                        inlineTextBuilder.startNewLine();
                    } else if (previouslyStashedSpace || this.testLeadingWhitespace(text)) {
                        inlineTextBuilder.pushWord(transform(m[0]), noWrap);
                    } else {
                        inlineTextBuilder.concatWord(transform(m[0]), noWrap);
                    }
                    while((m = wordOrNewlineRe.exec(text)) !== null){
                        if (m[0] === "\n") {
                            inlineTextBuilder.startNewLine();
                        } else {
                            inlineTextBuilder.pushWord(transform(m[0]), noWrap);
                        }
                    }
                }
                inlineTextBuilder.stashedSpace = previouslyStashedSpace && !anyMatch || this.testTrailingWhitespace(text);
            // No need to stash a space in case last added item was a new line,
            // but that won't affect anything later anyway.
            };
        } else {
            const wordRe = new RegExp(`[^${whitespaceCodes}]+`, "g");
            this.shrinkWrapAdd = function(text, inlineTextBuilder, transform = (str)=>str, noWrap = false) {
                if (!text) {
                    return;
                }
                const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
                let anyMatch = false;
                let m = wordRe.exec(text);
                if (m) {
                    anyMatch = true;
                    if (previouslyStashedSpace || this.testLeadingWhitespace(text)) {
                        inlineTextBuilder.pushWord(transform(m[0]), noWrap);
                    } else {
                        inlineTextBuilder.concatWord(transform(m[0]), noWrap);
                    }
                    while((m = wordRe.exec(text)) !== null){
                        inlineTextBuilder.pushWord(transform(m[0]), noWrap);
                    }
                }
                inlineTextBuilder.stashedSpace = previouslyStashedSpace && !anyMatch || this.testTrailingWhitespace(text);
            };
        }
    }
    /**
   * Add text with only minimal processing.
   * Everything between newlines considered a single word.
   * No whitespace is trimmed.
   * Not affected by preserveNewlines option - `\n` always starts a new line.
   *
   * `noWrap` argument is `true` by default - this won't start a new line
   * even if there is not enough space left in the current line.
   *
   * @param { string }            text              Input text.
   * @param { InlineTextBuilder } inlineTextBuilder A builder to receive processed text.
   * @param { boolean }           [noWrap] Don't wrap text even if the line is too long.
   */ addLiteral(text, inlineTextBuilder, noWrap = true) {
        if (!text) {
            return;
        }
        const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
        let anyMatch = false;
        let m = this.newlineOrNonNewlineStringRe.exec(text);
        if (m) {
            anyMatch = true;
            if (m[0] === "\n") {
                inlineTextBuilder.startNewLine();
            } else if (previouslyStashedSpace) {
                inlineTextBuilder.pushWord(m[0], noWrap);
            } else {
                inlineTextBuilder.concatWord(m[0], noWrap);
            }
            while((m = this.newlineOrNonNewlineStringRe.exec(text)) !== null){
                if (m[0] === "\n") {
                    inlineTextBuilder.startNewLine();
                } else {
                    inlineTextBuilder.pushWord(m[0], noWrap);
                }
            }
        }
        inlineTextBuilder.stashedSpace = previouslyStashedSpace && !anyMatch;
    }
    /**
   * Test whether the given text starts with HTML whitespace character.
   *
   * @param   { string }  text  The string to test.
   * @returns { boolean }
   */ testLeadingWhitespace(text) {
        return this.leadingWhitespaceRe.test(text);
    }
    /**
   * Test whether the given text ends with HTML whitespace character.
   *
   * @param   { string }  text  The string to test.
   * @returns { boolean }
   */ testTrailingWhitespace(text) {
        return this.trailingWhitespaceRe.test(text);
    }
    /**
   * Test whether the given text contains any non-whitespace characters.
   *
   * @param   { string }  text  The string to test.
   * @returns { boolean }
   */ testContainsWords(text) {
        return !this.allWhitespaceOrEmptyRe.test(text);
    }
    /**
   * Return the number of newlines if there are no words.
   *
   * If any word is found then return zero regardless of the actual number of newlines.
   *
   * @param   { string }  text  Input string.
   * @returns { number }
   */ countNewlinesNoWords(text) {
        this.newlineOrNonWhitespaceRe.lastIndex = 0;
        let counter = 0;
        let match;
        while((match = this.newlineOrNonWhitespaceRe.exec(text)) !== null){
            if (match[0] === "\n") {
                counter++;
            } else {
                return 0;
            }
        }
        return counter;
    }
}
/**
 * Helps to build text from inline and block elements.
 *
 * @class BlockTextBuilder
 */ class BlockTextBuilder {
    /**
   * Creates an instance of BlockTextBuilder.
   *
   * @param { Options } options HtmlToText options.
   * @param { import('selderee').Picker<DomNode, TagDefinition> } picker Selectors decision tree picker.
   * @param { any} [metadata] Optional metadata for HTML document, for use in formatters.
   */ constructor(options, picker, metadata = undefined){
        this.options = options;
        this.picker = picker;
        this.metadata = metadata;
        this.whitespaceProcessor = new WhitespaceProcessor(options);
        /** @type { StackItem } */ this._stackItem = new BlockStackItem(options);
        /** @type { TransformerStackItem } */ this._wordTransformer = undefined;
    }
    /**
   * Put a word-by-word transform function onto the transformations stack.
   *
   * Mainly used for uppercasing. Can be bypassed to add unformatted text such as URLs.
   *
   * Word transformations applied before wrapping.
   *
   * @param { (str: string) => string } wordTransform Word transformation function.
   */ pushWordTransform(wordTransform) {
        this._wordTransformer = new TransformerStackItem(this._wordTransformer, wordTransform);
    }
    /**
   * Remove a function from the word transformations stack.
   *
   * @returns { (str: string) => string } A function that was removed.
   */ popWordTransform() {
        if (!this._wordTransformer) {
            return undefined;
        }
        const transform = this._wordTransformer.transform;
        this._wordTransformer = this._wordTransformer.next;
        return transform;
    }
    /**
   * Ignore wordwrap option in followup inline additions and disable automatic wrapping.
   */ startNoWrap() {
        this._stackItem.isNoWrap = true;
    }
    /**
   * Return automatic wrapping to behavior defined by options.
   */ stopNoWrap() {
        this._stackItem.isNoWrap = false;
    }
    /** @returns { (str: string) => string } */ _getCombinedWordTransformer() {
        const wt = this._wordTransformer ? (str)=>applyTransformer(str, this._wordTransformer) : undefined;
        const ce = this.options.encodeCharacters;
        return wt ? ce ? (str)=>ce(wt(str)) : wt : ce;
    }
    _popStackItem() {
        const item = this._stackItem;
        this._stackItem = item.next;
        return item;
    }
    /**
   * Add a line break into currently built block.
   */ addLineBreak() {
        if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem)) {
            return;
        }
        if (this._stackItem.isPre) {
            this._stackItem.rawText += "\n";
        } else {
            this._stackItem.inlineTextBuilder.startNewLine();
        }
    }
    /**
   * Allow to break line in case directly following text will not fit.
   */ addWordBreakOpportunity() {
        if (this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem) {
            this._stackItem.inlineTextBuilder.wordBreakOpportunity = true;
        }
    }
    /**
   * Add a node inline into the currently built block.
   *
   * @param { string } str
   * Text content of a node to add.
   *
   * @param { object } [param1]
   * Object holding the parameters of the operation.
   *
   * @param { boolean } [param1.noWordTransform]
   * Ignore word transformers if there are any.
   * Don't encode characters as well.
   * (Use this for things like URL addresses).
   */ addInline(str, { noWordTransform = false } = {}) {
        if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem)) {
            return;
        }
        if (this._stackItem.isPre) {
            this._stackItem.rawText += str;
            return;
        }
        if (str.length === 0 || // empty string
        this._stackItem.stashedLineBreaks && // stashed linebreaks make whitespace irrelevant
        !this.whitespaceProcessor.testContainsWords(str) // no words to add
        ) {
            return;
        }
        if (this.options.preserveNewlines) {
            const newlinesNumber = this.whitespaceProcessor.countNewlinesNoWords(str);
            if (newlinesNumber > 0) {
                this._stackItem.inlineTextBuilder.startNewLine(newlinesNumber);
                // keep stashedLineBreaks unchanged
                return;
            }
        }
        if (this._stackItem.stashedLineBreaks) {
            this._stackItem.inlineTextBuilder.startNewLine(this._stackItem.stashedLineBreaks);
        }
        this.whitespaceProcessor.shrinkWrapAdd(str, this._stackItem.inlineTextBuilder, noWordTransform ? undefined : this._getCombinedWordTransformer(), this._stackItem.isNoWrap);
        this._stackItem.stashedLineBreaks = 0; // inline text doesn't introduce line breaks
    }
    /**
   * Add a string inline into the currently built block.
   *
   * Use this for markup elements that don't have to adhere
   * to text layout rules.
   *
   * @param { string } str Text to add.
   */ addLiteral(str) {
        if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem)) {
            return;
        }
        if (str.length === 0) {
            return;
        }
        if (this._stackItem.isPre) {
            this._stackItem.rawText += str;
            return;
        }
        if (this._stackItem.stashedLineBreaks) {
            this._stackItem.inlineTextBuilder.startNewLine(this._stackItem.stashedLineBreaks);
        }
        this.whitespaceProcessor.addLiteral(str, this._stackItem.inlineTextBuilder, this._stackItem.isNoWrap);
        this._stackItem.stashedLineBreaks = 0;
    }
    /**
   * Start building a new block.
   *
   * @param { object } [param0]
   * Object holding the parameters of the block.
   *
   * @param { number } [param0.leadingLineBreaks]
   * This block should have at least this number of line breaks to separate it from any preceding block.
   *
   * @param { number }  [param0.reservedLineLength]
   * Reserve this number of characters on each line for block markup.
   *
   * @param { boolean } [param0.isPre]
   * Should HTML whitespace be preserved inside this block.
   */ openBlock({ leadingLineBreaks = 1, reservedLineLength = 0, isPre = false } = {}) {
        const maxLineLength = Math.max(20, this._stackItem.inlineTextBuilder.maxLineLength - reservedLineLength);
        this._stackItem = new BlockStackItem(this.options, this._stackItem, leadingLineBreaks, maxLineLength);
        if (isPre) {
            this._stackItem.isPre = true;
        }
    }
    /**
   * Finalize currently built block, add it's content to the parent block.
   *
   * @param { object } [param0]
   * Object holding the parameters of the block.
   *
   * @param { number } [param0.trailingLineBreaks]
   * This block should have at least this number of line breaks to separate it from any following block.
   *
   * @param { (str: string) => string } [param0.blockTransform]
   * A function to transform the block text before adding to the parent block.
   * This happens after word wrap and should be used in combination with reserved line length
   * in order to keep line lengths correct.
   * Used for whole block markup.
   */ closeBlock({ trailingLineBreaks = 1, blockTransform = undefined } = {}) {
        const block = this._popStackItem();
        const blockText = blockTransform ? blockTransform(html_to_text_getText(block)) : html_to_text_getText(block);
        addText(this._stackItem, blockText, block.leadingLineBreaks, Math.max(block.stashedLineBreaks, trailingLineBreaks));
    }
    /**
   * Start building a new list.
   *
   * @param { object } [param0]
   * Object holding the parameters of the list.
   *
   * @param { number } [param0.maxPrefixLength]
   * Length of the longest list item prefix.
   * If not supplied or too small then list items won't be aligned properly.
   *
   * @param { 'left' | 'right' } [param0.prefixAlign]
   * Specify how prefixes of different lengths have to be aligned
   * within a column.
   *
   * @param { number } [param0.interRowLineBreaks]
   * Minimum number of line breaks between list items.
   *
   * @param { number } [param0.leadingLineBreaks]
   * This list should have at least this number of line breaks to separate it from any preceding block.
   */ openList({ maxPrefixLength = 0, prefixAlign = "left", interRowLineBreaks = 1, leadingLineBreaks = 2 } = {}) {
        this._stackItem = new ListStackItem(this.options, this._stackItem, {
            interRowLineBreaks: interRowLineBreaks,
            leadingLineBreaks: leadingLineBreaks,
            maxLineLength: this._stackItem.inlineTextBuilder.maxLineLength,
            maxPrefixLength: maxPrefixLength,
            prefixAlign: prefixAlign
        });
    }
    /**
   * Start building a new list item.
   *
   * @param {object} param0
   * Object holding the parameters of the list item.
   *
   * @param { string } [param0.prefix]
   * Prefix for this list item (item number, bullet point, etc).
   */ openListItem({ prefix = "" } = {}) {
        if (!(this._stackItem instanceof ListStackItem)) {
            throw new Error("Can't add a list item to something that is not a list! Check the formatter.");
        }
        const list = this._stackItem;
        const prefixLength = Math.max(prefix.length, list.maxPrefixLength);
        const maxLineLength = Math.max(20, list.inlineTextBuilder.maxLineLength - prefixLength);
        this._stackItem = new ListItemStackItem(this.options, list, {
            prefix: prefix,
            maxLineLength: maxLineLength,
            leadingLineBreaks: list.interRowLineBreaks
        });
    }
    /**
   * Finalize currently built list item, add it's content to the parent list.
   */ closeListItem() {
        const listItem = this._popStackItem();
        const list = listItem.next;
        const prefixLength = Math.max(listItem.prefix.length, list.maxPrefixLength);
        const spacing = "\n" + " ".repeat(prefixLength);
        const prefix = list.prefixAlign === "right" ? listItem.prefix.padStart(prefixLength) : listItem.prefix.padEnd(prefixLength);
        const text = prefix + html_to_text_getText(listItem).replace(/\n/g, spacing);
        addText(list, text, listItem.leadingLineBreaks, Math.max(listItem.stashedLineBreaks, list.interRowLineBreaks));
    }
    /**
   * Finalize currently built list, add it's content to the parent block.
   *
   * @param { object } param0
   * Object holding the parameters of the list.
   *
   * @param { number } [param0.trailingLineBreaks]
   * This list should have at least this number of line breaks to separate it from any following block.
   */ closeList({ trailingLineBreaks = 2 } = {}) {
        const list = this._popStackItem();
        const text = html_to_text_getText(list);
        if (text) {
            addText(this._stackItem, text, list.leadingLineBreaks, trailingLineBreaks);
        }
    }
    /**
   * Start building a table.
   */ openTable() {
        this._stackItem = new TableStackItem(this._stackItem);
    }
    /**
   * Start building a table row.
   */ openTableRow() {
        if (!(this._stackItem instanceof TableStackItem)) {
            throw new Error("Can't add a table row to something that is not a table! Check the formatter.");
        }
        this._stackItem = new TableRowStackItem(this._stackItem);
    }
    /**
   * Start building a table cell.
   *
   * @param { object } [param0]
   * Object holding the parameters of the cell.
   *
   * @param { number } [param0.maxColumnWidth]
   * Wrap cell content to this width. Fall back to global wordwrap value if undefined.
   */ openTableCell({ maxColumnWidth = undefined } = {}) {
        if (!(this._stackItem instanceof TableRowStackItem)) {
            throw new Error("Can't add a table cell to something that is not a table row! Check the formatter.");
        }
        this._stackItem = new TableCellStackItem(this.options, this._stackItem, maxColumnWidth);
    }
    /**
   * Finalize currently built table cell and add it to parent table row's cells.
   *
   * @param { object } [param0]
   * Object holding the parameters of the cell.
   *
   * @param { number } [param0.colspan] How many columns this cell should occupy.
   * @param { number } [param0.rowspan] How many rows this cell should occupy.
   */ closeTableCell({ colspan = 1, rowspan = 1 } = {}) {
        const cell = this._popStackItem();
        const text = trimCharacter(html_to_text_getText(cell), "\n");
        cell.next.cells.push({
            colspan: colspan,
            rowspan: rowspan,
            text: text
        });
    }
    /**
   * Finalize currently built table row and add it to parent table's rows.
   */ closeTableRow() {
        const row = this._popStackItem();
        row.next.rows.push(row.cells);
    }
    /**
   * Finalize currently built table and add the rendered text to the parent block.
   *
   * @param { object } param0
   * Object holding the parameters of the table.
   *
   * @param { TablePrinter } param0.tableToString
   * A function to convert a table of stringified cells into a complete table.
   *
   * @param { number } [param0.leadingLineBreaks]
   * This table should have at least this number of line breaks to separate if from any preceding block.
   *
   * @param { number } [param0.trailingLineBreaks]
   * This table should have at least this number of line breaks to separate it from any following block.
   */ closeTable({ tableToString, leadingLineBreaks = 2, trailingLineBreaks = 2 }) {
        const table = this._popStackItem();
        const output = tableToString(table.rows);
        if (output) {
            addText(this._stackItem, output, leadingLineBreaks, trailingLineBreaks);
        }
    }
    /**
   * Return the rendered text content of this builder.
   *
   * @returns { string }
   */ toString() {
        return html_to_text_getText(this._stackItem.getRoot());
    // There should only be the root item if everything is closed properly.
    }
}
function html_to_text_getText(stackItem) {
    if (!(stackItem instanceof BlockStackItem || stackItem instanceof ListItemStackItem || stackItem instanceof TableCellStackItem)) {
        throw new Error("Only blocks, list items and table cells can be requested for text contents.");
    }
    return stackItem.inlineTextBuilder.isEmpty() ? stackItem.rawText : stackItem.rawText + stackItem.inlineTextBuilder.toString();
}
function addText(stackItem, text, leadingLineBreaks, trailingLineBreaks) {
    if (!(stackItem instanceof BlockStackItem || stackItem instanceof ListItemStackItem || stackItem instanceof TableCellStackItem)) {
        throw new Error("Only blocks, list items and table cells can contain text.");
    }
    const parentText = html_to_text_getText(stackItem);
    const lineBreaks = Math.max(stackItem.stashedLineBreaks, leadingLineBreaks);
    stackItem.inlineTextBuilder.clear();
    if (parentText) {
        stackItem.rawText = parentText + "\n".repeat(lineBreaks) + text;
    } else {
        stackItem.rawText = text;
        stackItem.leadingLineBreaks = lineBreaks;
    }
    stackItem.stashedLineBreaks = trailingLineBreaks;
}
/**
 * @param { string } str A string to transform.
 * @param { TransformerStackItem } transformer A transformer item (with possible continuation).
 * @returns { string }
 */ function applyTransformer(str, transformer) {
    return transformer ? applyTransformer(transformer.transform(str), transformer.next) : str;
}
/**
 * Compile selectors into a decision tree,
 * return a function intended for batch processing.
 *
 * @param   { Options } [options = {}]   HtmlToText options (defaults, formatters, user options merged, deduplicated).
 * @returns { (html: string, metadata?: any) => string } Pre-configured converter function.
 * @static
 */ function compile$1(options = {}) {
    const selectorsWithoutFormat = options.selectors.filter((s)=>!s.format);
    if (selectorsWithoutFormat.length) {
        throw new Error("Following selectors have no specified format: " + selectorsWithoutFormat.map((s)=>`\`${s.selector}\``).join(", "));
    }
    const picker = new DecisionTree(options.selectors.map((s)=>[
            s.selector,
            s
        ])).build(hp2Builder);
    if (typeof options.encodeCharacters !== "function") {
        options.encodeCharacters = makeReplacerFromDict(options.encodeCharacters);
    }
    const baseSelectorsPicker = new DecisionTree(options.baseElements.selectors.map((s, i)=>[
            s,
            i + 1
        ])).build(hp2Builder);
    function findBaseElements(dom) {
        return findBases(dom, options, baseSelectorsPicker);
    }
    const limitedWalk = limitedDepthRecursive(options.limits.maxDepth, recursiveWalk, function(dom, builder) {
        builder.addInline(options.limits.ellipsis || "");
    });
    return function(html, metadata = undefined) {
        return process(html, metadata, options, picker, findBaseElements, limitedWalk);
    };
}
/**
 * Convert given HTML according to preprocessed options.
 *
 * @param { string } html HTML content to convert.
 * @param { any } metadata Optional metadata for HTML document, for use in formatters.
 * @param { Options } options HtmlToText options (preprocessed).
 * @param { import('selderee').Picker<DomNode, TagDefinition> } picker
 * Tag definition picker for DOM nodes processing.
 * @param { (dom: DomNode[]) => DomNode[] } findBaseElements
 * Function to extract elements from HTML DOM
 * that will only be present in the output text.
 * @param { RecursiveCallback } walk Recursive callback.
 * @returns { string }
 */ function process(html, metadata, options, picker, findBaseElements, walk) {
    const maxInputLength = options.limits.maxInputLength;
    if (maxInputLength && html && html.length > maxInputLength) {
        console.warn(`Input length ${html.length} is above allowed limit of ${maxInputLength}. Truncating without ellipsis.`);
        html = html.substring(0, maxInputLength);
    }
    const document = parseDocument(html, {
        decodeEntities: options.decodeEntities
    });
    const bases = findBaseElements(document.children);
    const builder = new BlockTextBuilder(options, picker, metadata);
    walk(bases, builder);
    return builder.toString();
}
function findBases(dom, options, baseSelectorsPicker) {
    const results = [];
    function recursiveWalk(walk, /** @type { DomNode[] } */ dom) {
        dom = dom.slice(0, options.limits.maxChildNodes);
        for (const elem of dom){
            if (elem.type !== "tag") {
                continue;
            }
            const pickedSelectorIndex = baseSelectorsPicker.pick1(elem);
            if (pickedSelectorIndex > 0) {
                results.push({
                    selectorIndex: pickedSelectorIndex,
                    element: elem
                });
            } else if (elem.children) {
                walk(elem.children);
            }
            if (results.length >= options.limits.maxBaseElements) {
                return;
            }
        }
    }
    const limitedWalk = limitedDepthRecursive(options.limits.maxDepth, recursiveWalk);
    limitedWalk(dom);
    if (options.baseElements.orderBy !== "occurrence") {
        results.sort((a, b)=>a.selectorIndex - b.selectorIndex);
    }
    return options.baseElements.returnDomByDefault && results.length === 0 ? dom : results.map((x)=>x.element);
}
/**
 * Function to walk through DOM nodes and accumulate their string representations.
 *
 * @param   { RecursiveCallback } walk    Recursive callback.
 * @param   { DomNode[] }         [dom]   Nodes array to process.
 * @param   { BlockTextBuilder }  builder Passed around to accumulate output text.
 * @private
 */ function recursiveWalk(walk, dom, builder) {
    if (!dom) {
        return;
    }
    const options = builder.options;
    const tooManyChildNodes = dom.length > options.limits.maxChildNodes;
    if (tooManyChildNodes) {
        dom = dom.slice(0, options.limits.maxChildNodes);
        dom.push({
            data: options.limits.ellipsis,
            type: "text"
        });
    }
    for (const elem of dom){
        switch(elem.type){
            case "text":
                {
                    builder.addInline(elem.data);
                    break;
                }
            case "tag":
                {
                    const tagDefinition = builder.picker.pick1(elem);
                    const format = options.formatters[tagDefinition.format];
                    format(elem, walk, builder, tagDefinition.options || {});
                    break;
                }
        }
    }
    return;
}
/**
 * @param { Object<string,string | false> } dict
 * A dictionary where keys are characters to replace
 * and values are replacement strings.
 *
 * First code point from dict keys is used.
 * Compound emojis with ZWJ are not supported (not until Node 16).
 *
 * @returns { ((str: string) => string) | undefined }
 */ function makeReplacerFromDict(dict) {
    if (!dict || Object.keys(dict).length === 0) {
        return undefined;
    }
    /** @type { [string, string][] } */ const entries = Object.entries(dict).filter(([, v])=>v !== false);
    const regex = new RegExp(entries.map(([c])=>`(${unicodeEscape([
            ...c
        ][0])})`).join("|"), "g");
    const values = entries.map(([, v])=>v);
    const replacer = (m, ...cgs)=>values[cgs.findIndex((cg)=>cg)];
    return (str)=>str.replace(regex, replacer);
}
/**
 * Dummy formatter that discards the input and does nothing.
 *
 * @type { FormatCallback }
 */ function formatSkip(elem, walk, builder, formatOptions) {
/* do nothing */ }
/**
 * Insert the given string literal inline instead of a tag.
 *
 * @type { FormatCallback }
 */ function formatInlineString(elem, walk, builder, formatOptions) {
    builder.addLiteral(formatOptions.string || "");
}
/**
 * Insert a block with the given string literal instead of a tag.
 *
 * @type { FormatCallback }
 */ function formatBlockString(elem, walk, builder, formatOptions) {
    builder.openBlock({
        leadingLineBreaks: formatOptions.leadingLineBreaks || 2
    });
    builder.addLiteral(formatOptions.string || "");
    builder.closeBlock({
        trailingLineBreaks: formatOptions.trailingLineBreaks || 2
    });
}
/**
 * Process an inline-level element.
 *
 * @type { FormatCallback }
 */ function formatInline(elem, walk, builder, formatOptions) {
    walk(elem.children, builder);
}
/**
 * Process a block-level container.
 *
 * @type { FormatCallback }
 */ function formatBlock$1(elem, walk, builder, formatOptions) {
    builder.openBlock({
        leadingLineBreaks: formatOptions.leadingLineBreaks || 2
    });
    walk(elem.children, builder);
    builder.closeBlock({
        trailingLineBreaks: formatOptions.trailingLineBreaks || 2
    });
}
function renderOpenTag(elem) {
    const attrs = elem.attribs && elem.attribs.length ? " " + Object.entries(elem.attribs).map(([k, v])=>v === "" ? k : `${k}=${v.replace(/"/g, "&quot;")}`).join(" ") : "";
    return `<${elem.name}${attrs}>`;
}
function renderCloseTag(elem) {
    return `</${elem.name}>`;
}
/**
 * Render an element as inline HTML tag, walk through it's children.
 *
 * @type { FormatCallback }
 */ function formatInlineTag(elem, walk, builder, formatOptions) {
    builder.startNoWrap();
    builder.addLiteral(renderOpenTag(elem));
    builder.stopNoWrap();
    walk(elem.children, builder);
    builder.startNoWrap();
    builder.addLiteral(renderCloseTag(elem));
    builder.stopNoWrap();
}
/**
 * Render an element as HTML block bag, walk through it's children.
 *
 * @type { FormatCallback }
 */ function formatBlockTag(elem, walk, builder, formatOptions) {
    builder.openBlock({
        leadingLineBreaks: formatOptions.leadingLineBreaks || 2
    });
    builder.startNoWrap();
    builder.addLiteral(renderOpenTag(elem));
    builder.stopNoWrap();
    walk(elem.children, builder);
    builder.startNoWrap();
    builder.addLiteral(renderCloseTag(elem));
    builder.stopNoWrap();
    builder.closeBlock({
        trailingLineBreaks: formatOptions.trailingLineBreaks || 2
    });
}
/**
 * Render an element with all it's children as inline HTML.
 *
 * @type { FormatCallback }
 */ function formatInlineHtml(elem, walk, builder, formatOptions) {
    builder.startNoWrap();
    builder.addLiteral(render(elem, {
        decodeEntities: builder.options.decodeEntities
    }));
    builder.stopNoWrap();
}
/**
 * Render an element with all it's children as HTML block.
 *
 * @type { FormatCallback }
 */ function formatBlockHtml(elem, walk, builder, formatOptions) {
    builder.openBlock({
        leadingLineBreaks: formatOptions.leadingLineBreaks || 2
    });
    builder.startNoWrap();
    builder.addLiteral(render(elem, {
        decodeEntities: builder.options.decodeEntities
    }));
    builder.stopNoWrap();
    builder.closeBlock({
        trailingLineBreaks: formatOptions.trailingLineBreaks || 2
    });
}
/**
 * Render inline element wrapped with given strings.
 *
 * @type { FormatCallback }
 */ function formatInlineSurround(elem, walk, builder, formatOptions) {
    builder.addLiteral(formatOptions.prefix || "");
    walk(elem.children, builder);
    builder.addLiteral(formatOptions.suffix || "");
}
var genericFormatters = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    block: formatBlock$1,
    blockHtml: formatBlockHtml,
    blockString: formatBlockString,
    blockTag: formatBlockTag,
    inline: formatInline,
    inlineHtml: formatInlineHtml,
    inlineString: formatInlineString,
    inlineSurround: formatInlineSurround,
    inlineTag: formatInlineTag,
    skip: formatSkip
});
function getRow(matrix, j) {
    if (!matrix[j]) {
        matrix[j] = [];
    }
    return matrix[j];
}
function findFirstVacantIndex(row, x = 0) {
    while(row[x]){
        x++;
    }
    return x;
}
function transposeInPlace(matrix, maxSize) {
    for(let i = 0; i < maxSize; i++){
        const rowI = getRow(matrix, i);
        for(let j = 0; j < i; j++){
            const rowJ = getRow(matrix, j);
            if (rowI[j] || rowJ[i]) {
                const temp = rowI[j];
                rowI[j] = rowJ[i];
                rowJ[i] = temp;
            }
        }
    }
}
function putCellIntoLayout(cell, layout, baseRow, baseCol) {
    for(let r = 0; r < cell.rowspan; r++){
        const layoutRow = getRow(layout, baseRow + r);
        for(let c = 0; c < cell.colspan; c++){
            layoutRow[baseCol + c] = cell;
        }
    }
}
function getOrInitOffset(offsets, index) {
    if (offsets[index] === undefined) {
        offsets[index] = index === 0 ? 0 : 1 + getOrInitOffset(offsets, index - 1);
    }
    return offsets[index];
}
function updateOffset(offsets, base, span, value) {
    offsets[base + span] = Math.max(getOrInitOffset(offsets, base + span), getOrInitOffset(offsets, base) + value);
}
/**
 * Render a table into a string.
 * Cells can contain multiline text and span across multiple rows and columns.
 *
 * Modifies cells to add lines array.
 *
 * @param { TablePrinterCell[][] } tableRows Table to render.
 * @param { number } rowSpacing Number of spaces between columns.
 * @param { number } colSpacing Number of empty lines between rows.
 * @returns { string }
 */ function tableToString(tableRows, rowSpacing, colSpacing) {
    const layout = [];
    let colNumber = 0;
    const rowNumber = tableRows.length;
    const rowOffsets = [
        0
    ];
    // Fill the layout table and row offsets row-by-row.
    for(let j = 0; j < rowNumber; j++){
        const layoutRow = getRow(layout, j);
        const cells = tableRows[j];
        let x = 0;
        for(let i = 0; i < cells.length; i++){
            const cell = cells[i];
            x = findFirstVacantIndex(layoutRow, x);
            putCellIntoLayout(cell, layout, j, x);
            x += cell.colspan;
            cell.lines = cell.text.split("\n");
            const cellHeight = cell.lines.length;
            updateOffset(rowOffsets, j, cell.rowspan, cellHeight + rowSpacing);
        }
        colNumber = layoutRow.length > colNumber ? layoutRow.length : colNumber;
    }
    transposeInPlace(layout, rowNumber > colNumber ? rowNumber : colNumber);
    const outputLines = [];
    const colOffsets = [
        0
    ];
    // Fill column offsets and output lines column-by-column.
    for(let x = 0; x < colNumber; x++){
        let y = 0;
        let cell;
        const rowsInThisColumn = Math.min(rowNumber, layout[x].length);
        while(y < rowsInThisColumn){
            cell = layout[x][y];
            if (cell) {
                if (!cell.rendered) {
                    let cellWidth = 0;
                    for(let j = 0; j < cell.lines.length; j++){
                        const line = cell.lines[j];
                        const lineOffset = rowOffsets[y] + j;
                        outputLines[lineOffset] = (outputLines[lineOffset] || "").padEnd(colOffsets[x]) + line;
                        cellWidth = line.length > cellWidth ? line.length : cellWidth;
                    }
                    updateOffset(colOffsets, x, cell.colspan, cellWidth + colSpacing);
                    cell.rendered = true;
                }
                y += cell.rowspan;
            } else {
                const lineOffset = rowOffsets[y];
                outputLines[lineOffset] = outputLines[lineOffset] || "";
                y++;
            }
        }
    }
    return outputLines.join("\n");
}
/**
 * Process a line-break.
 *
 * @type { FormatCallback }
 */ function formatLineBreak(elem, walk, builder, formatOptions) {
    builder.addLineBreak();
}
/**
 * Process a `wbr` tag (word break opportunity).
 *
 * @type { FormatCallback }
 */ function formatWbr(elem, walk, builder, formatOptions) {
    builder.addWordBreakOpportunity();
}
/**
 * Process a horizontal line.
 *
 * @type { FormatCallback }
 */ function formatHorizontalLine(elem, walk, builder, formatOptions) {
    builder.openBlock({
        leadingLineBreaks: formatOptions.leadingLineBreaks || 2
    });
    builder.addInline("-".repeat(formatOptions.length || builder.options.wordwrap || 40));
    builder.closeBlock({
        trailingLineBreaks: formatOptions.trailingLineBreaks || 2
    });
}
/**
 * Process a paragraph.
 *
 * @type { FormatCallback }
 */ function formatParagraph(elem, walk, builder, formatOptions) {
    builder.openBlock({
        leadingLineBreaks: formatOptions.leadingLineBreaks || 2
    });
    walk(elem.children, builder);
    builder.closeBlock({
        trailingLineBreaks: formatOptions.trailingLineBreaks || 2
    });
}
/**
 * Process a preformatted content.
 *
 * @type { FormatCallback }
 */ function formatPre(elem, walk, builder, formatOptions) {
    builder.openBlock({
        isPre: true,
        leadingLineBreaks: formatOptions.leadingLineBreaks || 2
    });
    walk(elem.children, builder);
    builder.closeBlock({
        trailingLineBreaks: formatOptions.trailingLineBreaks || 2
    });
}
/**
 * Process a heading.
 *
 * @type { FormatCallback }
 */ function formatHeading(elem, walk, builder, formatOptions) {
    builder.openBlock({
        leadingLineBreaks: formatOptions.leadingLineBreaks || 2
    });
    if (formatOptions.uppercase !== false) {
        builder.pushWordTransform((str)=>str.toUpperCase());
        walk(elem.children, builder);
        builder.popWordTransform();
    } else {
        walk(elem.children, builder);
    }
    builder.closeBlock({
        trailingLineBreaks: formatOptions.trailingLineBreaks || 2
    });
}
/**
 * Process a blockquote.
 *
 * @type { FormatCallback }
 */ function formatBlockquote(elem, walk, builder, formatOptions) {
    builder.openBlock({
        leadingLineBreaks: formatOptions.leadingLineBreaks || 2,
        reservedLineLength: 2
    });
    walk(elem.children, builder);
    builder.closeBlock({
        trailingLineBreaks: formatOptions.trailingLineBreaks || 2,
        blockTransform: (str)=>(formatOptions.trimEmptyLines !== false ? trimCharacter(str, "\n") : str).split("\n").map((line)=>"> " + line).join("\n")
    });
}
function withBrackets(str, brackets) {
    if (!brackets) {
        return str;
    }
    const lbr = typeof brackets[0] === "string" ? brackets[0] : "[";
    const rbr = typeof brackets[1] === "string" ? brackets[1] : "]";
    return lbr + str + rbr;
}
function pathRewrite(path, rewriter, baseUrl, metadata, elem) {
    const modifiedPath = typeof rewriter === "function" ? rewriter(path, metadata, elem) : path;
    return modifiedPath[0] === "/" && baseUrl ? trimCharacterEnd(baseUrl, "/") + modifiedPath : modifiedPath;
}
/**
 * Process an image.
 *
 * @type { FormatCallback }
 */ function formatImage(elem, walk, builder, formatOptions) {
    const attribs = elem.attribs || {};
    const alt = attribs.alt ? attribs.alt : "";
    const src = !attribs.src ? "" : pathRewrite(attribs.src, formatOptions.pathRewrite, formatOptions.baseUrl, builder.metadata, elem);
    const text = !src ? alt : !alt ? withBrackets(src, formatOptions.linkBrackets) : alt + " " + withBrackets(src, formatOptions.linkBrackets);
    builder.addInline(text, {
        noWordTransform: true
    });
}
// a img baseUrl
// a img pathRewrite
// a img linkBrackets
// a     ignoreHref: false
//            ignoreText ?
// a     noAnchorUrl: true
//            can be replaced with selector
// a     hideLinkHrefIfSameAsText: false
//            how to compare, what to show (text, href, normalized) ?
// a     mailto protocol removed without options
// a     protocols: mailto, tel, ...
//            can be matched with selector?
// anchors, protocols - only if no pathRewrite fn is provided
// normalize-url ?
// a
// a[href^="#"] - format:skip by default
// a[href^="mailto:"] - ?
/**
 * Process an anchor.
 *
 * @type { FormatCallback }
 */ function formatAnchor(elem, walk, builder, formatOptions) {
    function getHref() {
        if (formatOptions.ignoreHref) {
            return "";
        }
        if (!elem.attribs || !elem.attribs.href) {
            return "";
        }
        let href = elem.attribs.href.replace(/^mailto:/, "");
        if (formatOptions.noAnchorUrl && href[0] === "#") {
            return "";
        }
        href = pathRewrite(href, formatOptions.pathRewrite, formatOptions.baseUrl, builder.metadata, elem);
        return href;
    }
    const href = getHref();
    if (!href) {
        walk(elem.children, builder);
    } else {
        let text = "";
        builder.pushWordTransform((str)=>{
            if (str) {
                text += str;
            }
            return str;
        });
        walk(elem.children, builder);
        builder.popWordTransform();
        const hideSameLink = formatOptions.hideLinkHrefIfSameAsText && href === text;
        if (!hideSameLink) {
            builder.addInline(!text ? href : " " + withBrackets(href, formatOptions.linkBrackets), {
                noWordTransform: true
            });
        }
    }
}
/**
 * @param { DomNode }           elem               List items with their prefixes.
 * @param { RecursiveCallback } walk               Recursive callback to process child nodes.
 * @param { BlockTextBuilder }  builder            Passed around to accumulate output text.
 * @param { FormatOptions }     formatOptions      Options specific to a formatter.
 * @param { () => string }      nextPrefixCallback Function that returns increasing index each time it is called.
 */ function formatList(elem, walk, builder, formatOptions, nextPrefixCallback) {
    const isNestedList = get(elem, [
        "parent",
        "name"
    ]) === "li";
    // With Roman numbers, index length is not as straightforward as with Arabic numbers or letters,
    // so the dumb length comparison is the most robust way to get the correct value.
    let maxPrefixLength = 0;
    const listItems = (elem.children || [])// it might be more accurate to check only for html spaces here, but no significant benefit
    .filter((child)=>child.type !== "text" || !/^\s*$/.test(child.data)).map(function(child) {
        if (child.name !== "li") {
            return {
                node: child,
                prefix: ""
            };
        }
        const prefix = isNestedList ? nextPrefixCallback().trimStart() : nextPrefixCallback();
        if (prefix.length > maxPrefixLength) {
            maxPrefixLength = prefix.length;
        }
        return {
            node: child,
            prefix: prefix
        };
    });
    if (!listItems.length) {
        return;
    }
    builder.openList({
        interRowLineBreaks: 1,
        leadingLineBreaks: isNestedList ? 1 : formatOptions.leadingLineBreaks || 2,
        maxPrefixLength: maxPrefixLength,
        prefixAlign: "left"
    });
    for (const { node, prefix } of listItems){
        builder.openListItem({
            prefix: prefix
        });
        walk([
            node
        ], builder);
        builder.closeListItem();
    }
    builder.closeList({
        trailingLineBreaks: isNestedList ? 1 : formatOptions.trailingLineBreaks || 2
    });
}
/**
 * Process an unordered list.
 *
 * @type { FormatCallback }
 */ function formatUnorderedList(elem, walk, builder, formatOptions) {
    const prefix = formatOptions.itemPrefix || " * ";
    return formatList(elem, walk, builder, formatOptions, ()=>prefix);
}
/**
 * Process an ordered list.
 *
 * @type { FormatCallback }
 */ function formatOrderedList(elem, walk, builder, formatOptions) {
    let nextIndex = Number(elem.attribs.start || "1");
    const indexFunction = getOrderedListIndexFunction(elem.attribs.type);
    const nextPrefixCallback = ()=>" " + indexFunction(nextIndex++) + ". ";
    return formatList(elem, walk, builder, formatOptions, nextPrefixCallback);
}
/**
 * Return a function that can be used to generate index markers of a specified format.
 *
 * @param   { string } [olType='1'] Marker type.
 * @returns { (i: number) => string }
 */ function getOrderedListIndexFunction(olType = "1") {
    switch(olType){
        case "a":
            return (i)=>numberToLetterSequence(i, "a");
        case "A":
            return (i)=>numberToLetterSequence(i, "A");
        case "i":
            return (i)=>numberToRoman(i).toLowerCase();
        case "I":
            return (i)=>numberToRoman(i);
        case "1":
        default:
            return (i)=>i.toString();
    }
}
/**
 * Given a list of class and ID selectors (prefixed with '.' and '#'),
 * return them as separate lists of names without prefixes.
 *
 * @param { string[] } selectors Class and ID selectors (`[".class", "#id"]` etc).
 * @returns { { classes: string[], ids: string[] } }
 */ function splitClassesAndIds(selectors) {
    const classes = [];
    const ids = [];
    for (const selector of selectors){
        if (selector.startsWith(".")) {
            classes.push(selector.substring(1));
        } else if (selector.startsWith("#")) {
            ids.push(selector.substring(1));
        }
    }
    return {
        classes: classes,
        ids: ids
    };
}
function isDataTable(attr, tables) {
    if (tables === true) {
        return true;
    }
    if (!attr) {
        return false;
    }
    const { classes, ids } = splitClassesAndIds(tables);
    const attrClasses = (attr["class"] || "").split(" ");
    const attrIds = (attr["id"] || "").split(" ");
    return attrClasses.some((x)=>classes.includes(x)) || attrIds.some((x)=>ids.includes(x));
}
/**
 * Process a table (either as a container or as a data table, depending on options).
 *
 * @type { FormatCallback }
 */ function formatTable(elem, walk, builder, formatOptions) {
    return isDataTable(elem.attribs, builder.options.tables) ? formatDataTable(elem, walk, builder, formatOptions) : formatBlock(elem, walk, builder, formatOptions);
}
function formatBlock(elem, walk, builder, formatOptions) {
    builder.openBlock({
        leadingLineBreaks: formatOptions.leadingLineBreaks
    });
    walk(elem.children, builder);
    builder.closeBlock({
        trailingLineBreaks: formatOptions.trailingLineBreaks
    });
}
/**
 * Process a data table.
 *
 * @type { FormatCallback }
 */ function formatDataTable(elem, walk, builder, formatOptions) {
    builder.openTable();
    elem.children.forEach(walkTable);
    builder.closeTable({
        tableToString: (rows)=>tableToString(rows, formatOptions.rowSpacing ?? 0, formatOptions.colSpacing ?? 3),
        leadingLineBreaks: formatOptions.leadingLineBreaks,
        trailingLineBreaks: formatOptions.trailingLineBreaks
    });
    function formatCell(cellNode) {
        const colspan = +get(cellNode, [
            "attribs",
            "colspan"
        ]) || 1;
        const rowspan = +get(cellNode, [
            "attribs",
            "rowspan"
        ]) || 1;
        builder.openTableCell({
            maxColumnWidth: formatOptions.maxColumnWidth
        });
        walk(cellNode.children, builder);
        builder.closeTableCell({
            colspan: colspan,
            rowspan: rowspan
        });
    }
    function walkTable(elem) {
        if (elem.type !== "tag") {
            return;
        }
        const formatHeaderCell = formatOptions.uppercaseHeaderCells !== false ? (cellNode)=>{
            builder.pushWordTransform((str)=>str.toUpperCase());
            formatCell(cellNode);
            builder.popWordTransform();
        } : formatCell;
        switch(elem.name){
            case "thead":
            case "tbody":
            case "tfoot":
            case "center":
                elem.children.forEach(walkTable);
                return;
            case "tr":
                {
                    builder.openTableRow();
                    for (const childOfTr of elem.children){
                        if (childOfTr.type !== "tag") {
                            continue;
                        }
                        switch(childOfTr.name){
                            case "th":
                                {
                                    formatHeaderCell(childOfTr);
                                    break;
                                }
                            case "td":
                                {
                                    formatCell(childOfTr);
                                    break;
                                }
                        }
                    }
                    builder.closeTableRow();
                    break;
                }
        }
    }
}
var textFormatters = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    anchor: formatAnchor,
    blockquote: formatBlockquote,
    dataTable: formatDataTable,
    heading: formatHeading,
    horizontalLine: formatHorizontalLine,
    image: formatImage,
    lineBreak: formatLineBreak,
    orderedList: formatOrderedList,
    paragraph: formatParagraph,
    pre: formatPre,
    table: formatTable,
    unorderedList: formatUnorderedList,
    wbr: formatWbr
});
/**
 * Default options.
 *
 * @constant
 * @type { Options }
 * @default
 * @private
 */ const DEFAULT_OPTIONS = {
    baseElements: {
        selectors: [
            "body"
        ],
        orderBy: "selectors",
        returnDomByDefault: true
    },
    decodeEntities: true,
    encodeCharacters: {},
    formatters: {},
    limits: {
        ellipsis: "...",
        maxBaseElements: undefined,
        maxChildNodes: undefined,
        maxDepth: undefined,
        maxInputLength: 1 << 24 // 16_777_216
    },
    longWordSplit: {
        forceWrapOnLimit: false,
        wrapCharacters: []
    },
    preserveNewlines: false,
    selectors: [
        {
            selector: "*",
            format: "inline"
        },
        {
            selector: "a",
            format: "anchor",
            options: {
                baseUrl: null,
                hideLinkHrefIfSameAsText: false,
                ignoreHref: false,
                linkBrackets: [
                    "[",
                    "]"
                ],
                noAnchorUrl: true
            }
        },
        {
            selector: "article",
            format: "block",
            options: {
                leadingLineBreaks: 1,
                trailingLineBreaks: 1
            }
        },
        {
            selector: "aside",
            format: "block",
            options: {
                leadingLineBreaks: 1,
                trailingLineBreaks: 1
            }
        },
        {
            selector: "blockquote",
            format: "blockquote",
            options: {
                leadingLineBreaks: 2,
                trailingLineBreaks: 2,
                trimEmptyLines: true
            }
        },
        {
            selector: "br",
            format: "lineBreak"
        },
        {
            selector: "div",
            format: "block",
            options: {
                leadingLineBreaks: 1,
                trailingLineBreaks: 1
            }
        },
        {
            selector: "footer",
            format: "block",
            options: {
                leadingLineBreaks: 1,
                trailingLineBreaks: 1
            }
        },
        {
            selector: "form",
            format: "block",
            options: {
                leadingLineBreaks: 1,
                trailingLineBreaks: 1
            }
        },
        {
            selector: "h1",
            format: "heading",
            options: {
                leadingLineBreaks: 3,
                trailingLineBreaks: 2,
                uppercase: true
            }
        },
        {
            selector: "h2",
            format: "heading",
            options: {
                leadingLineBreaks: 3,
                trailingLineBreaks: 2,
                uppercase: true
            }
        },
        {
            selector: "h3",
            format: "heading",
            options: {
                leadingLineBreaks: 3,
                trailingLineBreaks: 2,
                uppercase: true
            }
        },
        {
            selector: "h4",
            format: "heading",
            options: {
                leadingLineBreaks: 2,
                trailingLineBreaks: 2,
                uppercase: true
            }
        },
        {
            selector: "h5",
            format: "heading",
            options: {
                leadingLineBreaks: 2,
                trailingLineBreaks: 2,
                uppercase: true
            }
        },
        {
            selector: "h6",
            format: "heading",
            options: {
                leadingLineBreaks: 2,
                trailingLineBreaks: 2,
                uppercase: true
            }
        },
        {
            selector: "header",
            format: "block",
            options: {
                leadingLineBreaks: 1,
                trailingLineBreaks: 1
            }
        },
        {
            selector: "hr",
            format: "horizontalLine",
            options: {
                leadingLineBreaks: 2,
                length: undefined,
                trailingLineBreaks: 2
            }
        },
        {
            selector: "img",
            format: "image",
            options: {
                baseUrl: null,
                linkBrackets: [
                    "[",
                    "]"
                ]
            }
        },
        {
            selector: "main",
            format: "block",
            options: {
                leadingLineBreaks: 1,
                trailingLineBreaks: 1
            }
        },
        {
            selector: "nav",
            format: "block",
            options: {
                leadingLineBreaks: 1,
                trailingLineBreaks: 1
            }
        },
        {
            selector: "ol",
            format: "orderedList",
            options: {
                leadingLineBreaks: 2,
                trailingLineBreaks: 2
            }
        },
        {
            selector: "p",
            format: "paragraph",
            options: {
                leadingLineBreaks: 2,
                trailingLineBreaks: 2
            }
        },
        {
            selector: "pre",
            format: "pre",
            options: {
                leadingLineBreaks: 2,
                trailingLineBreaks: 2
            }
        },
        {
            selector: "section",
            format: "block",
            options: {
                leadingLineBreaks: 1,
                trailingLineBreaks: 1
            }
        },
        {
            selector: "table",
            format: "table",
            options: {
                colSpacing: 3,
                leadingLineBreaks: 2,
                maxColumnWidth: 60,
                rowSpacing: 0,
                trailingLineBreaks: 2,
                uppercaseHeaderCells: true
            }
        },
        {
            selector: "ul",
            format: "unorderedList",
            options: {
                itemPrefix: " * ",
                leadingLineBreaks: 2,
                trailingLineBreaks: 2
            }
        },
        {
            selector: "wbr",
            format: "wbr"
        }
    ],
    tables: [],
    whitespaceCharacters: " 	\r\n\f​",
    wordwrap: 80
};
const concatMerge = (acc, src, options)=>[
        ...acc,
        ...src
    ];
const overwriteMerge = (acc, src, options)=>[
        ...src
    ];
const selectorsMerge = (acc, src, options)=>acc.some((s)=>typeof s === "object") ? concatMerge(acc, src) // selectors
     : overwriteMerge(acc, src) // baseElements.selectors
;
/**
 * Preprocess options, compile selectors into a decision tree,
 * return a function intended for batch processing.
 *
 * @param   { Options } [options = {}]   HtmlToText options.
 * @returns { (html: string, metadata?: any) => string } Pre-configured converter function.
 * @static
 */ function compile(options = {}) {
    options = cjs(DEFAULT_OPTIONS, options, {
        arrayMerge: overwriteMerge,
        customMerge: (key)=>key === "selectors" ? selectorsMerge : undefined
    });
    options.formatters = Object.assign({}, genericFormatters, textFormatters, options.formatters);
    options.selectors = mergeDuplicatesPreferLast(options.selectors, (s)=>s.selector);
    handleDeprecatedOptions(options);
    return compile$1(options);
}
/**
 * Convert given HTML content to plain text string.
 *
 * @param   { string }  html           HTML content to convert.
 * @param   { Options } [options = {}] HtmlToText options.
 * @param   { any }     [metadata]     Optional metadata for HTML document, for use in formatters.
 * @returns { string }                 Plain text string.
 * @static
 *
 * @example
 * const { convert } = require('html-to-text');
 * const text = convert('<h1>Hello World</h1>', {
 *   wordwrap: 130
 * });
 * console.log(text); // HELLO WORLD
 */ function convert(html, options = {}, metadata = undefined) {
    return compile(options)(html, metadata);
}
/**
 * Map previously existing and now deprecated options to the new options layout.
 * This is a subject for cleanup in major releases.
 *
 * @param { Options } options HtmlToText options.
 */ function handleDeprecatedOptions(options) {
    if (options.tags) {
        const tagDefinitions = Object.entries(options.tags).map(([selector, definition])=>({
                ...definition,
                selector: selector || "*"
            }));
        options.selectors.push(...tagDefinitions);
        options.selectors = mergeDuplicatesPreferLast(options.selectors, (s)=>s.selector);
    }
    function set(obj, path, value) {
        const valueKey = path.pop();
        for (const key of path){
            let nested = obj[key];
            if (!nested) {
                nested = {};
                obj[key] = nested;
            }
            obj = nested;
        }
        obj[valueKey] = value;
    }
    if (options["baseElement"]) {
        const baseElement = options["baseElement"];
        set(options, [
            "baseElements",
            "selectors"
        ], Array.isArray(baseElement) ? baseElement : [
            baseElement
        ]);
    }
    if (options["returnDomByDefault"] !== undefined) {
        set(options, [
            "baseElements",
            "returnDomByDefault"
        ], options["returnDomByDefault"]);
    }
    for (const definition of options.selectors){
        if (definition.format === "anchor" && get(definition, [
            "options",
            "noLinkBrackets"
        ])) {
            set(definition, [
                "options",
                "linkBrackets"
            ], false);
        }
    }
}


// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: external "prettier/plugins/html"
var html_ = __webpack_require__(17252);
// EXTERNAL MODULE: external "prettier/standalone"
var standalone_ = __webpack_require__(87413);
// EXTERNAL MODULE: external "node:stream"
var external_node_stream_ = __webpack_require__(84492);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./node_modules/@react-email/render/dist/node/index.mjs
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
// src/node/render.tsx


// src/shared/plain-text-selectors.ts
var plainTextSelectors = [
    {
        selector: "img",
        format: "skip"
    },
    {
        selector: "#__react-email-preview",
        format: "skip"
    },
    {
        selector: "a",
        options: {
            linkBrackets: false
        }
    }
];
// src/shared/utils/pretty.ts


function recursivelyMapDoc(doc, callback) {
    if (Array.isArray(doc)) {
        return doc.map((innerDoc)=>recursivelyMapDoc(innerDoc, callback));
    }
    if (typeof doc === "object") {
        if (doc.type === "group") {
            return __spreadProps(__spreadValues({}, doc), {
                contents: recursivelyMapDoc(doc.contents, callback),
                expandedStates: recursivelyMapDoc(doc.expandedStates, callback)
            });
        }
        if ("contents" in doc) {
            return __spreadProps(__spreadValues({}, doc), {
                contents: recursivelyMapDoc(doc.contents, callback)
            });
        }
        if ("parts" in doc) {
            return __spreadProps(__spreadValues({}, doc), {
                parts: recursivelyMapDoc(doc.parts, callback)
            });
        }
        if (doc.type === "if-break") {
            return __spreadProps(__spreadValues({}, doc), {
                breakContents: recursivelyMapDoc(doc.breakContents, callback),
                flatContents: recursivelyMapDoc(doc.flatContents, callback)
            });
        }
    }
    return callback(doc);
}
var modifiedHtml = __spreadValues({}, html_);
if (modifiedHtml.printers) {
    const previousPrint = modifiedHtml.printers.html.print;
    modifiedHtml.printers.html.print = (path, options, print, args)=>{
        const node = path.getNode();
        const rawPrintingResult = previousPrint(path, options, print, args);
        if (node.type === "ieConditionalComment") {
            const printingResult = recursivelyMapDoc(rawPrintingResult, (doc)=>{
                if (typeof doc === "object" && doc.type === "line") {
                    return doc.soft ? "" : " ";
                }
                return doc;
            });
            return printingResult;
        }
        return rawPrintingResult;
    };
}
var defaults = {
    endOfLine: "lf",
    tabWidth: 2,
    plugins: [
        modifiedHtml
    ],
    bracketSameLine: true,
    parser: "html"
};
var pretty = (str, options = {})=>{
    return (0,standalone_.format)(str.replaceAll("\x00", ""), __spreadValues(__spreadValues({}, defaults), options));
};
// src/node/read-stream.ts

var decoder = new TextDecoder("utf-8");
var readStream = (stream)=>__async(void 0, null, function*() {
        let result = "";
        if ("pipeTo" in stream) {
            const writableStream = new WritableStream({
                write (chunk) {
                    result += decoder.decode(chunk);
                }
            });
            yield stream.pipeTo(writableStream);
        } else {
            const writable = new external_node_stream_.Writable({
                write (chunk, _encoding, callback) {
                    result += decoder.decode(chunk);
                    callback();
                }
            });
            stream.pipe(writable);
            yield new Promise((resolve, reject)=>{
                writable.on("error", reject);
                writable.on("close", ()=>{
                    resolve();
                });
            });
        }
        return result;
    });
// src/node/render.tsx

var node_render = (element, options)=>__async(void 0, null, function*() {
        const suspendedElement = /* @__PURE__ */ (0,jsx_runtime_.jsx)(react_shared_subset.Suspense, {
            children: element
        });
        const reactDOMServer = yield Promise.all(/* import() */[__webpack_require__.e(2060), __webpack_require__.e(5774)]).then(__webpack_require__.t.bind(__webpack_require__, 85774, 19));
        let html2;
        if (Object.hasOwn(reactDOMServer, "renderToReadableStream")) {
            html2 = yield readStream((yield reactDOMServer.renderToReadableStream(suspendedElement)));
        } else {
            yield new Promise((resolve, reject)=>{
                const stream = reactDOMServer.renderToPipeableStream(suspendedElement, {
                    onAllReady () {
                        return __async(this, null, function*() {
                            html2 = yield readStream(stream);
                            resolve();
                        });
                    },
                    onError (error) {
                        reject(error);
                    }
                });
            });
        }
        if (options == null ? void 0 : options.plainText) {
            return convert(html2, __spreadValues({
                selectors: plainTextSelectors
            }, options.htmlToTextOptions));
        }
        const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
        const document = `${doctype}${html2.replace(/<!DOCTYPE.*?>/, "")}`;
        if (options == null ? void 0 : options.pretty) {
            return pretty(document);
        }
        return document;
    });
// src/node/render-async.tsx



var renderAsync = (element, options)=>__async(void 0, null, function*() {
        const suspendedElement = /* @__PURE__ */ (0,jsx_runtime_.jsx)(react_shared_subset.Suspense, {
            children: element
        });
        const reactDOMServer = yield Promise.all(/* import() */[__webpack_require__.e(2060), __webpack_require__.e(5774)]).then(__webpack_require__.t.bind(__webpack_require__, 85774, 19));
        let html2;
        if (Object.hasOwn(reactDOMServer, "renderToReadableStream")) {
            html2 = yield readStream((yield reactDOMServer.renderToReadableStream(suspendedElement)));
        } else {
            yield new Promise((resolve, reject)=>{
                const stream = reactDOMServer.renderToPipeableStream(suspendedElement, {
                    onAllReady () {
                        return __async(this, null, function*() {
                            html2 = yield readStream(stream);
                            resolve();
                        });
                    },
                    onError (error) {
                        reject(error);
                    }
                });
            });
        }
        if (options == null ? void 0 : options.plainText) {
            return convert(html2, __spreadValues({
                selectors: plainTextSelectors
            }, options.htmlToTextOptions));
        }
        const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
        const document = `${doctype}${html2.replace(/<!DOCTYPE.*?>/, "")}`;
        if (options == null ? void 0 : options.pretty) {
            return pretty(document);
        }
        return document;
    });



/***/ })

};
;