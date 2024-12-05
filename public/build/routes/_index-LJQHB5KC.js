import {
  Plus,
  Trash2,
  TrendingDown,
  TrendingUp,
  Wallet
} from "/build/_shared/chunk-GZIXZVEG.js";
import {
  require_db,
  require_node
} from "/build/_shared/chunk-MUFZSDQQ.js";
import {
  Form,
  Link,
  useLoaderData,
  useSubmit
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

// app/components/Balance.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Balance.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Balance.tsx"
  );
  import.meta.hot.lastModified = "1733383500033.9854";
}
function Balance({
  money
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4 items-center bg-white text-neutral-800 border-r-4 border-r-blue-600 p-4 shadow-md rounded-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wallet, { size: 48 }, void 0, false, {
      fileName: "app/components/Balance.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg", children: "Balance" }, void 0, false, {
        fileName: "app/components/Balance.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-bold", children: money }, void 0, false, {
        fileName: "app/components/Balance.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Balance.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Balance.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = Balance;
var _c;
$RefreshReg$(_c, "Balance");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Income.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Income.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Income.tsx"
  );
  import.meta.hot.lastModified = "1733383527034.7012";
}
function Income({
  money
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-4 items-center bg-white text-neutral-800 border-r-4 border-r-green-600 p-4 shadow-md rounded-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TrendingUp, { size: 48, color: "green" }, void 0, false, {
      fileName: "app/components/Income.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg", children: "Income" }, void 0, false, {
        fileName: "app/components/Income.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xl font-bold", children: money }, void 0, false, {
        fileName: "app/components/Income.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Income.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Income.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = Income;
var _c2;
$RefreshReg$(_c2, "Income");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Expense.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Expense.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Expense.tsx"
  );
  import.meta.hot.lastModified = "1733383520893.032";
}
function Expense({
  money
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex space-x-4 items-center text-neutral-800 bg-white border-r-4 border-r-red-600 p-4 shadow-md rounded-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TrendingDown, { size: 48, color: "red" }, void 0, false, {
      fileName: "app/components/Expense.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-lg", children: "Expense" }, void 0, false, {
        fileName: "app/components/Expense.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xl font-bold", children: money }, void 0, false, {
        fileName: "app/components/Expense.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Expense.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Expense.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c3 = Expense;
var _c3;
$RefreshReg$(_c3, "Expense");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);

// app/libs/currency.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/libs/currency.ts"
  );
  import.meta.hot.lastModified = "1732766671158.608";
}
function formatCurrency(value) {
  const options = {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  };
  return new Intl.NumberFormat("id-ID", options).format(value);
}

// app/libs/get-money.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/libs/get-money.ts"
  );
  import.meta.hot.lastModified = "1732766732620.6348";
}
function getMoney(data, type) {
  return data.reduce((total, curr) => {
    const category = curr.category[0].name;
    if (type === "balance") {
      if (category === "income")
        return total += curr.money;
      total -= curr.money;
    }
    if (type === "income" && category === "income") {
      total += curr.money;
    }
    if (type === "expense" && category === "expense") {
      total -= curr.money;
    }
    return total;
  }, 0);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1733383557060.1978";
}
var meta = () => {
  return [{
    title: "New Remix App"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
function Index() {
  _s();
  const transactions = useLoaderData();
  const submit = useSubmit();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const isConfirm = confirm("Are you sure?");
    if (!isConfirm)
      return;
    submit(formData, {
      method: "post"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid sm:justify-center text-neutral-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid justify-center content-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Balance, { money: formatCurrency(getMoney(transactions, "balance")) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Income, { money: formatCurrency(getMoney(transactions, "income")) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Expense, { money: formatCurrency(getMoney(transactions, "expense")) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "History" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-h-60 py-2 overflow-auto space-y-2", children: transactions?.map((transaction) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white text-neutral-800 flex justify-between p-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: transaction.name }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: formatCurrency(transaction.money) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "post", onSubmit: handleSubmit, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "id", value: transaction.id }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 106,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Trash2, { size: 15 }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 107,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 107,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 103,
          columnNumber: 15
        }, this)
      ] }, transaction.id, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 101,
        columnNumber: 45
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/new-transaction", className: "bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 text-sm flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Plus, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      "Transaction"
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
}
_s(Index, "JAuamJjEHin0ZbOAbT7kjvq6ZSY=", false, function() {
  return [useLoaderData, useSubmit];
});
_c4 = Index;
var _c4;
$RefreshReg$(_c4, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-LJQHB5KC.js.map
