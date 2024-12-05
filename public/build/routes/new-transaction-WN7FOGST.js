import {
  require_db,
  require_node
} from "/build/_shared/chunk-MUFZSDQQ.js";
import {
  Form,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-IW2THDXD.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-NSE5437T.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/FormControl.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/FormControl.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/FormControl.tsx"
  );
  import.meta.hot.lastModified = "1732523834620.885";
}
function FormControl({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col space-y-2", children }, void 0, false, {
    fileName: "app/components/FormControl.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = FormControl;
var _c;
$RefreshReg$(_c, "FormControl");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Input.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Input.tsx"
  );
  import.meta.hot.lastModified = "1733383537035.9973";
}
function Input({
  name,
  type = "text",
  defaultValue,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name, type, className: `${className} form-input border bg-white border-gray-300`, defaultValue }, void 0, false, {
    fileName: "app/components/Input.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c2 = Input;
var _c2;
$RefreshReg$(_c2, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Label.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Label.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Label.tsx"
  );
  import.meta.hot.lastModified = "1732523881620.305";
}
function Label({
  text
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "text-lg", children: text }, void 0, false, {
    fileName: "app/components/Label.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c3 = Label;
var _c3;
$RefreshReg$(_c3, "Label");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/RadioButton.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/RadioButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/RadioButton.tsx"
  );
  import.meta.hot.lastModified = "1732523896566.2983";
}
function RadioButton({
  name,
  value,
  text,
  defaultChecked
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "radio", name, className: "form-radio mr-2", value, defaultChecked }, void 0, false, {
      fileName: "app/components/RadioButton.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    text
  ] }, void 0, true, {
    fileName: "app/components/RadioButton.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c4 = RadioButton;
var _c4;
$RefreshReg$(_c4, "RadioButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/new-transaction.tsx
var import_db = __toESM(require_db(), 1);
var import_node = __toESM(require_node(), 1);

// app/components/ErrorMsg.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ErrorMsg.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ErrorMsg.tsx"
  );
  import.meta.hot.lastModified = "1733383517489.3882";
}
function ErrorMsg({
  id,
  message
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("small", { className: "-mt-2 text-red-600", role: "alert", id, children: message }, void 0, false, {
    fileName: "app/components/ErrorMsg.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c5 = ErrorMsg;
var _c5;
$RefreshReg$(_c5, "ErrorMsg");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/new-transaction.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/new-transaction.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/new-transaction.tsx"
  );
  import.meta.hot.lastModified = "1732768136771.5457";
}
function NewTransaction() {
  _s();
  const {
    state
  } = useNavigation();
  const actionData = useActionData();
  const isLoading = state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid sm:justify-center text-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { method: "post", className: "bg-white p-4 rounded-md space-y-3 sm:w-[50vw]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { children: "New Transaction" }, void 0, false, {
      fileName: "app/routes/new-transaction.tsx",
      lineNumber: 80,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(FormControl, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Label, { text: "Name" }, void 0, false, {
        fileName: "app/routes/new-transaction.tsx",
        lineNumber: 82,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { name: "name", type: "text", defaultValue: actionData?.fields.name }, void 0, false, {
        fileName: "app/routes/new-transaction.tsx",
        lineNumber: 83,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ErrorMsg, { id: "name", message: actionData?.fieldError?.name || "" }, void 0, false, {
        fileName: "app/routes/new-transaction.tsx",
        lineNumber: 84,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/new-transaction.tsx",
      lineNumber: 81,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(FormControl, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Label, { text: "Category" }, void 0, false, {
        fileName: "app/routes/new-transaction.tsx",
        lineNumber: 87,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RadioButton, { name: "category", value: "income", text: "Income", defaultChecked: actionData?.fields.category === "income" }, void 0, false, {
          fileName: "app/routes/new-transaction.tsx",
          lineNumber: 89,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(RadioButton, { name: "category", value: "expense", text: "Expense", defaultChecked: actionData?.fields.category === "expense" }, void 0, false, {
          fileName: "app/routes/new-transaction.tsx",
          lineNumber: 90,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/new-transaction.tsx",
        lineNumber: 88,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ErrorMsg, { id: "category", message: actionData?.fieldError?.category || "" }, void 0, false, {
        fileName: "app/routes/new-transaction.tsx",
        lineNumber: 92,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/new-transaction.tsx",
      lineNumber: 86,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(FormControl, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Label, { text: "Money" }, void 0, false, {
        fileName: "app/routes/new-transaction.tsx",
        lineNumber: 95,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { name: "money", type: "number", defaultValue: actionData?.fields.money }, void 0, false, {
        fileName: "app/routes/new-transaction.tsx",
        lineNumber: 96,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ErrorMsg, { id: "money", message: actionData?.fieldError?.money || "" }, void 0, false, {
        fileName: "app/routes/new-transaction.tsx",
        lineNumber: 97,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/new-transaction.tsx",
      lineNumber: 94,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { disabled: isLoading, type: "submit", className: "bg-blue-500 disabled:cursor-not-allowed hover:bg-blue-700 text-white px-4 py-1", children: isLoading ? "Saving..." : "Save" }, void 0, false, {
      fileName: "app/routes/new-transaction.tsx",
      lineNumber: 100,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/new-transaction.tsx",
      lineNumber: 99,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/new-transaction.tsx",
    lineNumber: 79,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/new-transaction.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}
_s(NewTransaction, "rFwdZ1xSxetL/UJo+LhHz9NcK7M=", false, function() {
  return [useNavigation, useActionData];
});
_c6 = NewTransaction;
var new_transaction_default = NewTransaction;
var _c6;
$RefreshReg$(_c6, "NewTransaction");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  new_transaction_default as default
};
//# sourceMappingURL=/build/routes/new-transaction-WN7FOGST.js.map
