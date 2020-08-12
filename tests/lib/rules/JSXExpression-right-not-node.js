/**
 * @fileoverview react中jsx使用节点包裹
 * @author hamomo
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/JSXExpression-right-not-node"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6, // 默认支持语法为es5
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run("JSXExpression-right-not-node", rule, {
  valid: [
    {
      code:
        "function test() {const display=true;return <div><button>click</button>{display&&<span>123</span>}</div>;}",
    },
    {
      code:
        "function test() {const display=true;return <div>{display&&<p>123</p>}</div>;}",
    },
    {
      code:
        "function test() {const display=true;return <div>{display&&<div>123</div>}</div>;}",
    },
  ],

  invalid: [
    {
      code:
          "const a=<div><div>{dis&&123456}</div></div>",
          
      output:
      "const a=<div><div>{dis&&<span>123456</span>}</div></div>",
      errors: [
        {
          message: "禁止未被包裹的节点",
          type: "JSXElement",
        },
      ],
    },
  ],
});
