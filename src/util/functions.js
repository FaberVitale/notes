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
