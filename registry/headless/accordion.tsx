import type { JSX, ComponentProps } from "solid-js"

type Direction = 'ltr' | 'rtl';
 
const ACCORDION_NAME = 'Accordion';
const ACCORDION_KEYS = ['Home', 'End', 'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'];

type AccordionElement = AccordionImplMultipleElement | AccordionImplSingleElement;

interface AccordionSingleProps extends AccordionImplSingleProps {
  type: 'single';
}
interface AccordionMultipleProps extends AccordionImplMultipleProps {
  type: 'multiple';
}

type AccordionValueContextValue = {
  value: string[];
  onItemOpen(value: string): void;
  onItemClose(value: string): void;
};

type AccordionImplSingleElement = AccordionImplElement;

interface AccordionImplSingleProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion item whose content is expanded.
   */
  value?: string;
  /**
   * The value of the item whose content is expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string;
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onValueChange?(value: string): void;
  /**
   * Whether an accordion item can be collapsed after it has been opened.
   * @default false
   */
  collapsible?: boolean;
}

type AccordionImplMultipleElement = AccordionImplElement;

interface AccordionImplMultipleProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion items whose contents are expanded.
   */
  value?: string[];
  /**
   * The value of the items whose contents are expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string[];
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onValueChange?(value: string[]): void;
}

// 

type AccordionImplContextValue = {
  disabled?: boolean;
  direction: AccordionImplProps['dir'];
  orientation: AccordionImplProps['orientation'];
};

type AccordionImplElement = HTMLDivElement;
type PrimitiveDivProps = ComponentProps<"div">;
interface AccordionImplProps extends PrimitiveDivProps {
  /**
   * Whether or not an accordion is disabled from user interaction.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * The layout in which the Accordion operates.
   * @default vertical
   */
  orientation?: JSX.AriaAttributes['aria-orientation'];
  /**
   * The language read direction.
   */
  dir?: Direction;
}