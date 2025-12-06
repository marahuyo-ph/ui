import type { ParentProps } from 'solid-js';
import { onMount } from 'solid-js';

interface AccessibleIconProps {
  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen
   * reader users, similar to `alt` text for `img` tags.
   */
  label: string;
}

const AccessibleIcon = (props: ParentProps<AccessibleIconProps>) => {
  let containerRef: HTMLDivElement | undefined;

  if (!props.children || (Array.isArray(props.children) && props.children.length === 0)) {
    throw new Error('AccessibleIcon must have exactly one child element');
  }

  onMount(() => {
    if (containerRef) {
      // Find the first child element and add attributes
      const firstChild = containerRef.querySelector(':scope > *:not(.sr-only)');
      if (!firstChild) {
        throw new Error('AccessibleIcon must have exactly one child element');
      }
      firstChild.setAttribute('aria-hidden', 'true');
      firstChild.setAttribute('focusable', 'false');
    }
  });

  return (
    <div ref={containerRef} style={{ display: 'contents' }}>
      {props.children}
      <span class="sr-only">{props.label}</span>
    </div>
  );
};

const Root = AccessibleIcon;

export {
  AccessibleIcon,
  //
  Root,
};
export type { AccessibleIconProps };