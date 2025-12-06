import { axe } from 'vitest-axe';
import { cleanup, render } from '@solidjs/testing-library';
import { AccessibleIcon } from '#registry/headless/accessible-icon';
import { afterEach, describe, it, beforeEach, vi, expect } from 'vitest';
import type { ParentProps } from 'solid-js';

const LABEL_TEXT = 'Close';

const AccessibleIconTest = (props: ParentProps<{ label?: string }>) => (
  <AccessibleIcon {...props} label={props.label ?? LABEL_TEXT} />
);

describe('given a default AccessibleIcon', () => {
  let rendered: ReturnType<typeof render>;
  let label: HTMLElement;

  afterEach(cleanup);

  beforeEach(() => {
    rendered = render(
      () => <AccessibleIconTest>
        <svg
          viewBox="0 0 32 32"
          width={24}
          height={24}
          fill="none"
          stroke="currentColor"
          data-testid="icon"
        >
          <path d="M2 30 L30 2 M30 30 L2 2" />
        </svg>
      </AccessibleIconTest>,
    );

    label = rendered.getByText(LABEL_TEXT);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should have a label', () => {
    expect(label).toBeInTheDocument();
  });

  it('should add an aria-hidden attribute to the child', () => {
    const svg = rendered.getByTestId('icon');
    expect(svg.getAttribute('aria-hidden')).toBe('true');
  });

  it('should set focusable attribute on the child to false', () => {
    const svg = rendered.getByTestId('icon');
    expect(svg.getAttribute('focusable')).toBe('false');
  });
});

describe('given an AccessibleIcon without children', () => {
  it('should error', () => {
    // Even though the error is caught, it still gets printed to the console
    // so we mock that out to avoid the wall of red text.
    const spy = vi.spyOn(console, 'error');
    spy.mockImplementation(() => {});

    expect(() => render(() => <AccessibleIconTest />)).toThrowError();

    spy.mockRestore();
  });
});