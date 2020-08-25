/**
 * @fileoverview react中jsx使用节点包裹
 * @author hamomo
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/space-between-word.js"),
  RuleTester = require("eslint").RuleTester;

var par = require("@typescript-eslint/parser");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6, // 默认支持语法为es5
  },
  parser: par,
});

ruleTester.run("space-between-word", rule, {
  valid: [
    {
      code: 'const a="deff 正则 cdc"',
    },
  ],

  invalid: [
    {
      code: 'const a="deff大cdc"',
      output:
      'const a="deff 大 cdc"',
      errors: [
        {
          message: "中英文间加空格",
          type: "VariableDeclarator",
        },
      ],
    },
  ],
});
