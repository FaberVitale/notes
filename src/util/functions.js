//@flow
/* see: https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
 */

/* given createElement returns a function that binds Props to a component
 * name Conflict are resolved giving precedence to the props not binded
 */
export const bindPropsFactory = (createElement: Function) => (
  Component: any,
  bindProps: Object = {}
) => (props: { children?: any }) => {
  const passedChildren = props.children || bindProps.children || null;

  const { children, ...rest } = Object.assign({}, bindProps, props);

  return createElement(Component, rest, passedChildren);
};

export const noop = (...args: Array<mixed>) => {};

export const getDisplayName = (hocName: string, Comp: any) =>
  `With${hocName}(${Comp.displayName || Comp.name || "Component"})`;

export const cleanWhiteSpace = (str: string) => str.replace(/\s+/g, "\u0020");

export const uniqueId = (function makeUniqueId() {
  const _max = ((1 << 31) >>> 0) - 1;
  let _base = "";
  let _current = 0;

  return function uniqueId(prefix: string = "") {
    if (_current >= _max) {
      _base += "0";
      _current = 1;
    } else {
      _current++;
    }

    return prefix + _base + _current.toString(10);
  };
})();
