/**
 * @fileoverview react中jsx使用节点包裹
 * @author hamomo
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "react中jsx使用节点包裹",
      category: "Fill me in",
      recommended: false,
    },
    fixable: "code", // or "code" or "whitespace"
  },

  create: function (context) {
    return {
      [`JSXElement,JSXFragment`]: (node) => {
        const argChild = node.children ? node.children : null;
        argChild.forEach((element) => {
          if (element.type == "JSXExpressionContainer") {
            if (element.expression.right.type !== "JSXElement") {
              context.report({
                node,
                message: "禁止未被包裹的节点",
                fix(fixer) {
                  return [
                    fixer.insertTextAfter(element.expression.right, "</span>"),
                    fixer.insertTextBefore(element.expression.right, "<span>"),
                  ];
                },
              });
            }
          }
        });
      },
    };
  },
};
