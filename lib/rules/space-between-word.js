/**
 * @fileoverview 中英文间加空格
 * @author hamomo
 */

module.exports = {
  meta: {
    docs: {
      description: "中英文间加空格",
      category: "Fill me in",
      recommended: false,
    },
    fixable: "code", // or "code" or "whitespace"
  },

  create: function (context) {
    const matchLeft = /([A-Za-z])([\u4e00-\u9fa5])/;
    const matchRight = /([\u4e00-\u9fa5])([A-Za-z])/;
    let text;

    return {
      [`VariableDeclarator`]: (node) => {
        if (node.init.type === "Literal") {
          if (
            matchLeft.test(node.init.value) ||
            matchRight.test(node.init.value)
          ) {
            text = node.init.value;
            if (matchLeft.test(node.init.value)) {
              text = text.replace(matchLeft, "$1 $2");
            }
            if (matchRight.test(node.init.value)) {
              text = text.replace(matchRight, "$1 $2");
            }
            context.report({
              node,
              message: "中英文间加空格",
              fix(fixer) {
                return fixer.replaceText(node.init, text);
              },
            });
          }
        }
      },
    };
  },
};
