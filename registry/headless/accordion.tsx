import type { JSX, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"
 
import * as AccordionPrimitive from "@kobalte/core/accordion"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"
 
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-solid"
 
const Accordion = AccordionPrimitive.Root
 
type AccordionItemProps<T extends ValidComponent = "div"> =
  AccordionPrimitive.AccordionItemProps<T> & {
    class?: string | undefined
  }
 
const AccordionItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, AccordionItemProps<T>>
) => {
  const [local, others] = splitProps(props as AccordionItemProps, ["class"])
  return <AccordionPrimitive.Item class={cn("border-b", local.class)} {...others} />
}
 
type AccordionTriggerProps<T extends ValidComponent = "button"> =
  AccordionPrimitive.AccordionTriggerProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }
 
const AccordionTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, AccordionTriggerProps<T>>
) => {
  const [local, others] = splitProps(props as AccordionTriggerProps, ["class", "children"])
  return (
    <AccordionPrimitive.Header class="flex">
      <AccordionPrimitive.Trigger
        class={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-expanded]>svg]:rotate-180",
          local.class
        )}
        {...others}
      >
        {local.children}
        <ChevronDownIcon
          class="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}
 
type AccordionContentProps<T extends ValidComponent = "div"> =
  AccordionPrimitive.AccordionContentProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }
 
const AccordionContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, AccordionContentProps<T>>
) => {
  const [local, others] = splitProps(props as AccordionContentProps, ["class", "children"])
  return (
    <AccordionPrimitive.Content
      class={cn(
        "animate-accordion-up overflow-hidden text-sm transition-all data-[expanded]:animate-accordion-down",
        local.class
      )}
      {...others}
    >
      <div class="pb-4 pt-0">{local.children}</div>
    </AccordionPrimitive.Content>
  )
}
 
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }