import {HTMLAttributes, VNode} from "vue";
import {VNodeRef} from "@vue/runtime-core";

export type VueJsxNode = VNode | string | boolean | number | (VNode | string | boolean | number)[]
export type VueHTMLAttributes = HTMLAttributes & {
  key?: string | number | symbol
  ref?: VNodeRef
  ref_for?: boolean
  ref_key?: string
}