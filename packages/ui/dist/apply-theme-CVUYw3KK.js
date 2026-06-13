import { openBlock as a, createElementBlock as o, mergeProps as z, renderSlot as m, resolveComponent as v, normalizeClass as g, createVNode as b, createCommentVNode as f, createElementVNode as h, toDisplayString as k, createBlock as _, Teleport as U, Transition as Q, withCtx as x, normalizeStyle as Z, createTextVNode as V, Fragment as $, withModifiers as D, renderList as W, withDirectives as j, vShow as $e, withKeys as Y, createSlots as Fe, vModelText as ee, normalizeProps as Oe, guardReactiveProps as Ve, useSlots as Ne, computed as O, ref as R, onMounted as Me, watch as He, nextTick as te } from "vue";
import { RouterLink as We } from "vue-router";
function T(...e) {
  const t = [];
  for (const i of e)
    if (i) {
      if (typeof i == "string") {
        t.push(i);
        continue;
      }
      if (typeof i == "object")
        for (const [r, l] of Object.entries(i))
          l && t.push(r);
    }
  return t.join(" ");
}
const w = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, l] of t)
    i[r] = l;
  return i;
}, je = ["horizontal", "vertical"], Ye = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır veya sütun dizilimi */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => je.includes(e)
    },
    /**
     * true: doğrudan çocukların bitişik iç köşelerinde border-radius sıfırlanır (dış uçlar korunur).
     * Kapsayıcıya border, arka plan veya divide eklenmez.
     */
    joined: {
      type: Boolean,
      default: !1
    },
    /** Yatayda doğrudan çocuklara `flex-1 min-w-0` (toolbar’da eşit pay) */
    grow: {
      type: Boolean,
      default: !1
    },
    /** `role="group"` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      return T(
        "ui-action-group",
        `ui-action-group--${this.orientation}`,
        this.joined && "ui-action-group--joined",
        this.grow && "ui-action-group--grow",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ke = ["aria-label"];
function qe(e, t, i, r, l, n) {
  return a(), o("div", z({
    class: n.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16, Ke);
}
const Lr = /* @__PURE__ */ w(Ye, [["render", qe]]), Ge = ["info", "success", "warning", "error"], ie = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, ne = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, Ue = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Bilgi / başarı / uyarı / hata görünümü */
    variant: {
      type: String,
      default: "info",
      validator: (e) => Ge.includes(e)
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Varsayılan ikon yerine `circle-info` vb. */
    icon: {
      type: String,
      default: null
    },
    /** `false` — sol ikon gösterilmez; `#icon` slotu ile özelleştirilebilir */
    showIcon: {
      type: Boolean,
      default: !0
    },
    dismissible: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["dismiss"],
  computed: {
    alertRole() {
      return this.variant === "error" || this.variant === "warning" ? "alert" : "status";
    },
    resolvedIcon() {
      return this.icon || ie[this.variant] || ie.info;
    },
    iconToneClass() {
      return ne[this.variant] || ne.info;
    },
    rootClasses() {
      return T(`ui-alert ui-alert--${this.variant}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    onDismiss() {
      this.$emit("dismiss");
    }
  }
}, Qe = ["role"], Ze = { class: "ui-alert-body" }, Xe = {
  key: 0,
  class: "ui-alert-title"
}, Je = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, et = {
  key: 2,
  class: "ui-alert-slot"
};
function tt(e, t, i, r, l, n) {
  const s = v("ui-icon"), d = v("ui-button");
  return a(), o("div", z({
    class: n.rootClasses,
    role: n.alertRole
  }, n.passthroughAttrs), [
    i.showIcon ? (a(), o("span", {
      key: 0,
      class: g(["ui-alert-icon", n.iconToneClass]),
      "aria-hidden": "true"
    }, [
      m(e.$slots, "icon", {}, () => [
        b(s, {
          name: n.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : f("", !0),
    h("div", Ze, [
      i.title ? (a(), o("p", Xe, k(i.title), 1)) : f("", !0),
      i.description ? (a(), o("p", Je, k(i.description), 1)) : f("", !0),
      e.$slots.default ? (a(), o("div", et, [
        m(e.$slots, "default")
      ])) : f("", !0)
    ]),
    i.dismissible ? (a(), _(d, {
      key: 1,
      "native-type": "button",
      variant: "ghost",
      color: "secondary",
      cubed: "",
      size: "sm",
      class: "ui-alert-dismiss shrink-0",
      "prefix-icon": "xmark",
      "aria-label": n.dismissLabel,
      onClick: n.onDismiss
    }, null, 8, ["aria-label", "onClick"])) : f("", !0)
  ], 16, Qe);
}
const Ar = /* @__PURE__ */ w(Ue, [["render", tt]]);
let it = 0;
const nt = ["top", "bottom", "left", "right"], rt = {
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    /** Boşsa yalnızca `content` slot’u kullanılabilir */
    label: {
      type: String,
      default: ""
    },
    placement: {
      type: String,
      default: "top",
      validator: (e) => nt.includes(e)
    },
    /** Gecikme (ms) */
    showDelay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      open: !1,
      panelStyle: {},
      tooltipId: `ui-tooltip-${++it}`,
      showTimer: null,
      hideTimer: null
    };
  },
  computed: {
    hasContent() {
      return !!(this.label || this.$slots.content);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScrollResize, !0), window.addEventListener("resize", this.onScrollResize), document.addEventListener("keydown", this.onDocumentKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScrollResize, !0), window.removeEventListener("resize", this.onScrollResize), document.removeEventListener("keydown", this.onDocumentKeydown), this.clearTimers();
  },
  methods: {
    clearTimers() {
      this.showTimer && (clearTimeout(this.showTimer), this.showTimer = null), this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null);
    },
    scheduleShow() {
      if (this.disabled || !this.hasContent) return;
      this.clearTimers();
      const e = () => {
        this.open = !0, this.$nextTick(() => this.updatePosition());
      };
      this.showDelay > 0 ? this.showTimer = setTimeout(e, this.showDelay) : e();
    },
    scheduleHide() {
      this.clearTimers();
      const e = () => {
        this.open = !1;
      };
      this.hideDelay > 0 ? this.hideTimer = setTimeout(e, this.hideDelay) : e();
    },
    onEnter() {
      this.scheduleShow();
    },
    onLeave() {
      this.scheduleHide();
    },
    onFocusIn() {
      this.scheduleShow();
    },
    onFocusOut(e) {
      const t = this.$refs.wrapperRef;
      t && e.relatedTarget && t.contains(e.relatedTarget) || this.scheduleHide();
    },
    onScrollResize() {
      this.open && this.updatePosition();
    },
    onDocumentKeydown(e) {
      e.key === "Escape" && this.open && (this.open = !1, this.clearTimers());
    },
    updatePosition() {
      const e = this.$refs.wrapperRef;
      if (!e) return;
      const t = e.getBoundingClientRect(), i = 8, r = t.left + t.width / 2, l = t.top + t.height / 2;
      let n = {};
      switch (this.placement) {
        case "bottom":
          n = {
            left: `${r}px`,
            top: `${t.bottom + i}px`,
            transform: "translate(-50%, 0)"
          };
          break;
        case "left":
          n = {
            left: `${t.left - i}px`,
            top: `${l}px`,
            transform: "translate(-100%, -50%)"
          };
          break;
        case "right":
          n = {
            left: `${t.right + i}px`,
            top: `${l}px`,
            transform: "translate(0, -50%)"
          };
          break;
        case "top":
        default:
          n = {
            left: `${r}px`,
            top: `${t.top - i}px`,
            transform: "translate(-50%, -100%)"
          };
      }
      this.panelStyle = n;
    }
  }
}, st = ["id"], lt = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function at(e, t, i, r, l, n) {
  return a(), o("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...s) => n.onEnter && n.onEnter(...s)),
    onMouseleave: t[1] || (t[1] = (...s) => n.onLeave && n.onLeave(...s)),
    onFocusin: t[2] || (t[2] = (...s) => n.onFocusIn && n.onFocusIn(...s)),
    onFocusout: t[3] || (t[3] = (...s) => n.onFocusOut && n.onFocusOut(...s))
  }, [
    m(e.$slots, "default"),
    (a(), _(U, { to: "body" }, [
      b(Q, { name: "ui-tooltip-fade" }, {
        default: x(() => [
          l.open && !i.disabled && n.hasContent ? (a(), o("div", {
            key: 0,
            id: l.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed",
            style: Z(l.panelStyle),
            role: "tooltip"
          }, [
            h("span", lt, [
              m(e.$slots, "content", {}, () => [
                V(k(i.label), 1)
              ])
            ])
          ], 12, st)) : f("", !0)
        ]),
        _: 3
      })
    ]))
  ], 544);
}
const Pe = /* @__PURE__ */ w(rt, [["render", at]]), ot = ["solid", "secondary", "outline"], dt = ["sm", "md", "lg"], re = {
  solid: "border border-transparent bg-primary text-primary-foreground",
  secondary: "border border-transparent bg-secondary text-secondary-foreground",
  outline: "border border-border bg-transparent text-foreground"
}, se = {
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, K = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  full: "max-w-full"
};
function ut(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let i = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : "";
}
function ct(e) {
  const t = parseInt(e.slice(1, 3), 16), i = parseInt(e.slice(3, 5), 16), r = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * i + 0.114 * r) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const ht = {
  name: "Badge",
  components: { Tooltip: Pe },
  props: {
    variant: {
      type: String,
      default: "solid",
      validator: (e) => ot.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => dt.includes(e)
    },
    /** Uzun metinde kısaltma (…) ve taşma varsa tooltip */
    truncate: {
      type: Boolean,
      default: !0
    },
    /** Tailwind max-w-* anahtarı: 32 (varsayılan), 40, 48, full */
    maxWidth: {
      type: String,
      default: "32",
      validator: (e) => Object.keys(K).includes(e)
    },
    /** Tooltip metni; boşsa slot metni kullanılır */
    tooltip: {
      type: String,
      default: ""
    },
    /** Geçerli hex renk (#RGB / #RRGGBB); arka plan ve metin kontrastı buna göre uygulanır */
    hex: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isTruncated: !1,
      labelText: "",
      resizeObserver: null
    };
  },
  computed: {
    labelWidthClass() {
      return this.truncate ? K[this.maxWidth] || K[32] : "max-w-full";
    },
    hasAdornment() {
      return !!(this.$slots.prepend || this.$slots.append);
    },
    normalizedHex() {
      return ut(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: ct(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return [
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        se[this.size] || se.sm,
        !this.normalizedHex && (re[this.variant] || re.solid)
      ];
    },
    tooltipLabel() {
      return (this.tooltip || this.labelText || "").trim();
    },
    showTooltip() {
      return this.truncate && this.isTruncated && !!this.tooltipLabel;
    }
  },
  watch: {
    tooltip() {
      this.$nextTick(() => this.measureLabel());
    }
  },
  mounted() {
    this.$nextTick(() => this.observeLabel());
  },
  updated() {
    this.$nextTick(() => this.measureLabel());
  },
  beforeUnmount() {
    var e;
    (e = this.resizeObserver) == null || e.disconnect(), this.resizeObserver = null;
  },
  methods: {
    observeLabel() {
      var t;
      const e = this.$refs.labelRef;
      if (!e || typeof ResizeObserver > "u") {
        this.measureLabel();
        return;
      }
      (t = this.resizeObserver) == null || t.disconnect(), this.measureLabel(), this.resizeObserver = new ResizeObserver(() => this.measureLabel()), this.resizeObserver.observe(e);
    },
    measureLabel() {
      const e = this.$refs.labelRef;
      if (!e) {
        this.isTruncated = !1, this.labelText = "";
        return;
      }
      if (this.labelText = (e.textContent || "").trim(), !this.truncate) {
        this.isTruncated = !1;
        return;
      }
      this.isTruncated = e.scrollWidth > e.clientWidth + 1;
    }
  }
}, ft = {
  key: 0,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, mt = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function pt(e, t, i, r, l, n) {
  const s = v("Tooltip");
  return a(), _(s, {
    label: n.tooltipLabel,
    disabled: !n.showTooltip,
    placement: "top"
  }, {
    default: x(() => [
      h("span", {
        class: g(n.badgeClasses),
        style: Z(n.hexBadgeStyle)
      }, [
        e.$slots.prepend ? (a(), o("span", ft, [
          m(e.$slots, "prepend")
        ])) : f("", !0),
        h("span", {
          ref: "labelRef",
          class: g(["ui-badge-label", n.labelWidthClass])
        }, [
          m(e.$slots, "default")
        ], 2),
        e.$slots.append ? (a(), o("span", mt, [
          m(e.$slots, "append")
        ])) : f("", !0)
      ], 6)
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const gt = /* @__PURE__ */ w(ht, [["render", pt]]), yt = ["sm", "md", "lg"], bt = ["solid", "outline", "ghost", "link"], vt = ["primary", "secondary", "input", "warning", "success", "info"], kt = ["button", "submit", "reset"], le = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, ae = {
  sm: "aspect-square size-8 shrink-0 p-0 !min-h-0 text-xs leading-4",
  md: "aspect-square size-9 shrink-0 p-0 !min-h-0 text-sm leading-5",
  lg: "aspect-square size-11 shrink-0 p-0 !min-h-0 text-base leading-6"
}, St = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, oe = {
  solid: {
    primary: "border-0 bg-primary text-primary-foreground shadow-none hover:opacity-90",
    secondary: "border-0 bg-secondary text-secondary-foreground shadow-none hover:opacity-90",
    input: "border-0 shadow-none",
    warning: "border-0 bg-warning text-warning-foreground shadow-none hover:opacity-90",
    success: "border-0 bg-success text-success-foreground shadow-none hover:opacity-90",
    info: "border-0 bg-info text-info-foreground shadow-none hover:opacity-90"
  },
  outline: {
    primary: "border border-border bg-transparent text-foreground shadow-none hover:bg-muted/60",
    secondary: "border border-border bg-transparent text-foreground shadow-none hover:bg-muted/60",
    warning: "shadow-none border border-warning bg-transparent text-warning hover:bg-warning/10",
    success: "shadow-none border border-success bg-transparent text-success hover:bg-success/10",
    info: "shadow-none border border-info bg-transparent text-info hover:bg-info/10"
  },
  ghost: {
    primary: "shadow-none border-0 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground",
    secondary: "shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground",
    warning: "shadow-none border-0 bg-transparent text-warning hover:bg-warning hover:text-warning-foreground",
    success: "shadow-none border-0 bg-transparent text-success hover:bg-success hover:text-success-foreground",
    info: "shadow-none border-0 bg-transparent text-info hover:bg-info hover:text-info-foreground"
  },
  link: {
    primary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none font-medium text-primary underline-offset-4 hover:underline",
    secondary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-secondary-foreground underline-offset-4 hover:underline",
    warning: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-warning underline-offset-4 hover:underline",
    success: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-success underline-offset-4 hover:underline",
    info: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-info underline-offset-4 hover:underline"
  }
}, wt = {
  name: "Button",
  components: { RouterLink: We },
  props: {
    /** `vue-router` hedefi; verildiğinde `<a>` + istemci navigasyonu (`RouterLink` custom). */
    to: {
      type: [String, Object],
      default: null
    },
    /** Native `<button type="...">` — `to` yokken; forms için `submit` / `reset`. */
    nativeType: {
      type: String,
      default: "button",
      validator: (e) => kt.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => bt.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => vt.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => yt.includes(e)
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Boş bırakılırsa `ui.button.loading` (i18n) kullanılır */
    loadingText: {
      type: String,
      default: null
    },
    cubed: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    fulled: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Metin slot’u (ve `loading` durumunda görünen satır) yatay hizası.
     */
    textAlign: {
      type: String,
      default: "center",
      validator: (e) => e === "left" || e === "center"
    }
  },
  emits: ["click"],
  computed: {
    hasRouterTo() {
      return this.to != null && this.to !== "";
    },
    /**
     * Kübik kutu: yalnız ikon veya tek slot (ör. avatar).
     * Slot varken `textContentClass` (`truncate`) kullanılmaz — kesilme olmaz.
     */
    usesCubedCenterLayout() {
      return !this.cubed || this.prefixIcon && this.suffixIcon ? !1 : this.prefixIcon || this.suffixIcon ? !this.$slots.default : !0;
    },
    isDisabled() {
      return this.disabled || this.loading;
    },
    resolvedLoadingText() {
      return this.loadingText != null && this.loadingText !== "" ? this.loadingText : typeof this.$t == "function" ? this.$t("ui.button.loading") : "";
    },
    textContentClass() {
      return ["ui-button-text min-w-0 flex-1 truncate", this.textAlign === "left" ? "text-left" : "text-center"].join(" ");
    },
    /** Metin yanı ikonlar — küçük kontrollerde `xs`, `lg` düğmede `sm`. */
    inlineIconSize() {
      return this.size === "lg" ? "sm" : "xs";
    },
    /** Kübik düğme ikonları — kutu boyutuna göre. */
    cubedIconSize() {
      return { sm: "xs", md: "sm", lg: "sm" }[this.size] || "sm";
    },
    buttonClasses() {
      const e = this.variant === "link";
      let t;
      this.cubed && !e ? t = ae[this.size] || ae.md : e ? t = St[this.size] : t = le[this.size] || le.md;
      let i = "";
      return e || (this.rounded && !this.cubed || this.cubed) && (i = "rounded-full"), [
        "ui-button ui-control font-sans",
        oe[this.variant][this.color] || oe.solid.primary,
        t,
        this.fulled ? "ui-button--fulled w-full" : "",
        i,
        this.isDisabled ? "cursor-not-allowed opacity-50" : "",
        this.hasRouterTo ? "inline-flex items-center" : ""
      ];
    }
  },
  methods: {
    onClick(e) {
      this.isDisabled || this.$emit("click", e);
    },
    onRouterLinkClick(e, t) {
      if (this.isDisabled) {
        e.preventDefault();
        return;
      }
      this.$emit("click", e), t(e);
    }
  }
}, _t = ["href", "data-variant", "data-color", "aria-disabled", "tabindex", "onClick"], xt = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, Ct = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Tt = {
  key: 0,
  class: "sr-only"
}, It = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, zt = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Lt = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, At = ["type", "disabled", "data-variant", "data-color"], Dt = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, Rt = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, $t = {
  key: 0,
  class: "sr-only"
}, Ft = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Pt = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Bt = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Et(e, t, i, r, l, n) {
  const s = v("ui-icon"), d = v("RouterLink");
  return n.hasRouterTo ? (a(), _(d, {
    key: 0,
    to: i.to,
    custom: ""
  }, {
    default: x(({ href: c, navigate: u }) => [
      h("a", {
        href: c,
        class: g(n.buttonClasses),
        "data-variant": i.variant,
        "data-color": i.color,
        "aria-disabled": n.isDisabled ? "true" : void 0,
        tabindex: n.isDisabled ? -1 : void 0,
        onClick: (p) => n.onRouterLinkClick(p, u)
      }, [
        i.loading && n.usesCubedCenterLayout ? (a(), o("span", xt, [
          b(s, {
            size: n.cubedIconSize,
            name: "spinner",
            class: "fa-spin"
          }, null, 8, ["size"])
        ])) : i.loading ? (a(), o($, { key: 1 }, [
          h("span", Ct, [
            b(s, {
              size: n.inlineIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          h("span", {
            class: g(n.textContentClass)
          }, [
            n.resolvedLoadingText ? (a(), o("span", Tt, k(n.resolvedLoadingText), 1)) : m(e.$slots, "default", { key: 1 })
          ], 2)
        ], 64)) : n.usesCubedCenterLayout ? (a(), o("span", It, [
          i.prefixIcon ? (a(), _(s, {
            key: 0,
            size: n.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (a(), _(s, {
            key: 1,
            size: n.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
        ])) : (a(), o($, { key: 3 }, [
          i.prefixIcon ? (a(), o("span", zt, [
            b(s, {
              size: n.inlineIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          h("span", {
            class: g(n.textContentClass)
          }, [
            m(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (a(), o("span", Lt, [
            b(s, {
              size: n.inlineIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 10, _t)
    ]),
    _: 3
  }, 8, ["to"])) : (a(), o("button", {
    key: 1,
    type: i.nativeType,
    disabled: n.isDisabled,
    class: g(n.buttonClasses),
    "data-variant": i.variant,
    "data-color": i.color,
    onClick: t[0] || (t[0] = (...c) => n.onClick && n.onClick(...c))
  }, [
    i.loading && n.usesCubedCenterLayout ? (a(), o("span", Dt, [
      b(s, {
        size: n.cubedIconSize,
        name: "spinner",
        class: "fa-spin"
      }, null, 8, ["size"])
    ])) : i.loading ? (a(), o($, { key: 1 }, [
      h("span", Rt, [
        b(s, {
          size: n.inlineIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      h("span", {
        class: g(n.textContentClass)
      }, [
        n.resolvedLoadingText ? (a(), o("span", $t, k(n.resolvedLoadingText), 1)) : m(e.$slots, "default", { key: 1 })
      ], 2)
    ], 64)) : n.usesCubedCenterLayout ? (a(), o("span", Ft, [
      i.prefixIcon ? (a(), _(s, {
        key: 0,
        size: n.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (a(), _(s, {
        key: 1,
        size: n.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
    ])) : (a(), o($, { key: 3 }, [
      i.prefixIcon ? (a(), o("span", Pt, [
        b(s, {
          size: n.inlineIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      h("span", {
        class: g(n.textContentClass)
      }, [
        m(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (a(), o("span", Bt, [
        b(s, {
          size: n.inlineIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 10, At));
}
const Dr = /* @__PURE__ */ w(wt, [["render", Et]]), Ot = ["none", "sm", "md"], de = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, Vt = {
  name: "Divider",
  inheritAttrs: !1,
  props: {
    /** Ortada gösterilecek başlık — `icon` ile birlikte etiketli ayırıcı */
    title: {
      type: String,
      default: ""
    },
    /** Başlık yanında gösterilecek ikon (`ui-icon` `name`) */
    icon: {
      type: String,
      default: ""
    },
    /**
     * Dikey boşluk (üst/alt).
     * `none`: yalnızca çizgi — üst bileşenin kendi gap’i ile hizalamak için.
     */
    spacing: {
      type: String,
      default: "md",
      validator: (e) => Ot.includes(e)
    },
    /**
     * true: yalnızca görsel — `role="presentation"`, ekran okuyucu atlar.
     * false: `role="separator"` + `aria-orientation="horizontal"`.
     */
    decorative: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    hasLabel() {
      return !!(this.title && this.title.trim() || this.icon);
    },
    rootClass() {
      return ["ui-divider", de[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        de[this.spacing] || "",
        this.$attrs.class
      ].filter(Boolean).join(" ");
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    rootAttrs() {
      const e = { ...this.passthroughAttrs };
      return this.decorative ? e.role = "presentation" : (e.role = "separator", e["aria-orientation"] = "horizontal"), e;
    },
    labeledAttrs() {
      const e = { ...this.passthroughAttrs };
      return this.decorative ? e.role = "presentation" : (e.role = "separator", e["aria-orientation"] = "horizontal", this.title && (e["aria-label"] = this.title)), e;
    }
  }
}, Nt = { class: "ui-divider__label" }, Mt = {
  key: 1,
  class: "ui-section-label"
};
function Ht(e, t, i, r, l, n) {
  const s = v("ui-icon");
  return n.hasLabel ? (a(), o("div", z({
    key: 1,
    class: n.labeledClass
  }, n.labeledAttrs), [
    t[0] || (t[0] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    h("span", Nt, [
      i.icon ? (a(), _(s, {
        key: 0,
        name: i.icon,
        size: "sm",
        class: "text-muted-foreground"
      }, null, 8, ["name"])) : f("", !0),
      i.title ? (a(), o("span", Mt, k(i.title), 1)) : f("", !0)
    ]),
    t[1] || (t[1] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1))
  ], 16)) : (a(), o("hr", z({
    key: 0,
    class: n.rootClass
  }, n.rootAttrs), null, 16));
}
const Be = /* @__PURE__ */ w(Vt, [["render", Ht]]), Wt = ["solid", "dashed", "dotted", "double"], ue = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, jt = ["solid", "regular", "brands", "light", "duotone", "thin"], Yt = {
  name: "Card",
  components: { Divider: Be },
  inheritAttrs: !1,
  props: {
    /** Dış çerçeve (1px `border-border`). */
    border: {
      type: Boolean,
      default: !0
    },
    /** `border-*` stili. */
    borderType: {
      type: String,
      default: "solid",
      validator: (e) => Wt.includes(e)
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Varsayılan üst başlıkta gösterilecek ikon (`ui-icon` `name`). */
    icon: {
      type: String,
      default: null
    },
    /** `ui-icon` `type` prop’u. */
    iconType: {
      type: String,
      default: "light",
      validator: (e) => jt.includes(e)
    },
    /** Gövde: yatay satır (buton / ikon sıraları). */
    row: {
      type: Boolean,
      default: !1
    },
    /** Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı */
    headerDivider: {
      type: Boolean,
      default: !1
    },
    /** Kök padding ve bölüm aralığını kaldırır; gövde kenara yaslanır. Başlık/alt bilgi için kompakt iç boşluk kalır. */
    removePadding: {
      type: Boolean,
      default: !1
    },
    /** Dolgu ve gölge olmadan yalnızca çerçeve (boş tablo kabuğu vb.). */
    transparent: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasDefaultHeader() {
      return !!(this.icon || this.title != null && this.title !== "" || this.description != null && this.description !== "" || this.$slots.actions || this.$slots.append);
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader;
    },
    showHeaderDivider() {
      return this.headerDivider && (!!this.$slots.toolbar || this.hasHeaderBlock);
    },
    borderStyleClass() {
      return ue[this.borderType] || ue.solid;
    },
    rootClasses() {
      const e = [
        "ui-surface",
        "ui-card",
        ...this.border ? ["border", this.borderStyleClass] : ["border-0", "border-transparent"]
      ];
      return this.removePadding && e.push("ui-card--no-padding"), this.transparent && e.push("ui-card--transparent"), T(e.join(" "), this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Kt = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, qt = {
  key: 0,
  class: "ui-header-lead"
}, Gt = { class: "ui-header-lead__main" }, Ut = {
  key: 0,
  class: "ui-header-lead__icon"
}, Qt = { class: "ui-header-lead__text" }, Zt = {
  key: 0,
  class: "ui-heading-3"
}, Xt = {
  key: 1,
  class: "ui-text-default"
}, Jt = {
  key: 0,
  class: "ui-header-lead__actions"
};
function ei(e, t, i, r, l, n) {
  const s = v("ui-icon"), d = v("Divider");
  return a(), o("div", z({ class: n.rootClasses }, n.passthroughAttrs), [
    e.$slots.toolbar ? (a(), o("div", Kt, [
      m(e.$slots, "toolbar")
    ])) : f("", !0),
    n.hasHeaderBlock ? (a(), o("div", {
      key: 1,
      class: g(["ui-card-header shrink-0", { "ui-card-header--inset": i.removePadding }])
    }, [
      m(e.$slots, "header", {}, () => [
        n.hasDefaultHeader ? (a(), o("div", qt, [
          h("div", Gt, [
            i.icon ? (a(), o("span", Ut, [
              b(s, {
                name: i.icon,
                type: i.iconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            h("div", Qt, [
              i.title ? (a(), o("h3", Zt, k(i.title), 1)) : f("", !0),
              i.description ? (a(), o("p", Xt, k(i.description), 1)) : f("", !0)
            ])
          ]),
          e.$slots.append || e.$slots.actions ? (a(), o("div", Jt, [
            m(e.$slots, "append"),
            m(e.$slots, "actions")
          ])) : f("", !0)
        ])) : f("", !0)
      ])
    ], 2)) : f("", !0),
    n.showHeaderDivider ? (a(), _(d, {
      key: 2,
      spacing: "none",
      class: "!my-0 shrink-0"
    })) : f("", !0),
    e.$slots.default ? (a(), o("div", {
      key: 3,
      class: g(["ui-card-body ui-text-default", {
        "ui-card-body--row": i.row,
        "ui-card-body--flush": i.removePadding
      }])
    }, [
      m(e.$slots, "default")
    ], 2)) : f("", !0),
    e.$slots.footer ? (a(), o("div", {
      key: 4,
      class: g(["ui-card-footer", { "ui-card-footer--inset": i.removePadding }])
    }, [
      m(e.$slots, "footer")
    ], 2)) : f("", !0)
  ], 16);
}
const Rr = /* @__PURE__ */ w(Yt, [["render", ei]]);
let ce = 0;
function he(e) {
  return String(e).padStart(2, "0");
}
function B(e) {
  return `${e.getFullYear()}-${he(e.getMonth() + 1)}-${he(e.getDate())}`;
}
function q(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), r = Number(t[2]) - 1, l = Number(t[3]), n = new Date(i, r, l);
  return n.getFullYear() !== i || n.getMonth() !== r || n.getDate() !== l ? null : n;
}
const ti = {
  name: "DatePicker",
  inheritAttrs: !1,
  props: {
    /** `YYYY-MM-DD` */
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Pick a date"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    fulled: {
      type: Boolean,
      default: !0
    },
    id: {
      type: String,
      default: void 0
    },
    /** En erken seçilebilir gün (`YYYY-MM-DD`) */
    min: {
      type: String,
      default: ""
    },
    /** Boş bırakılırsa `ui.datePicker.today` (i18n) */
    todayLabel: {
      type: String,
      default: ""
    },
    /** Boş bırakılırsa `ui.datePicker.yesterday` (i18n) */
    yesterdayLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    ce += 1;
    const e = ce, t = q(this.modelValue) || /* @__PURE__ */ new Date();
    return {
      fallbackId: `ui-datepicker-${e}`,
      menuOpen: !1,
      viewYear: t.getFullYear(),
      viewMonth: t.getMonth()
    };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    selectedDate() {
      return q(this.modelValue);
    },
    displayText() {
      return this.selectedDate ? B(this.selectedDate) : this.placeholder;
    },
    monthTitle() {
      return new Date(this.viewYear, this.viewMonth, 1).toLocaleString("en-US", {
        month: "long",
        year: "numeric"
      });
    },
    minYmd() {
      return this.min ? String(this.min).trim() : "";
    },
    resolvedTodayLabel() {
      return this.todayLabel ? this.todayLabel : typeof this.$t == "function" ? this.$t("ui.datePicker.today") : "Today";
    },
    resolvedYesterdayLabel() {
      return this.yesterdayLabel ? this.yesterdayLabel : typeof this.$t == "function" ? this.$t("ui.datePicker.yesterday") : "Yesterday";
    },
    todayQuickDisabled() {
      return this.isQuickDateDisabled(/* @__PURE__ */ new Date());
    },
    yesterdayQuickDisabled() {
      const e = /* @__PURE__ */ new Date();
      return e.setDate(e.getDate() - 1), this.isQuickDateDisabled(e);
    },
    calendarCells() {
      const e = this.viewYear, t = this.viewMonth, i = new Date(e, t, 1), r = new Date(e, t, 1 - i.getDay()), l = [];
      for (let n = 0; n < 42; n += 1) {
        const s = new Date(r.getFullYear(), r.getMonth(), r.getDate() + n), d = s.getMonth() === t && s.getFullYear() === e, c = s.getDate(), u = B(s), p = `${s.getFullYear()}-${s.getMonth()}-${s.getDate()}`, I = !!(this.selectedDate && u === B(this.selectedDate)), S = B(/* @__PURE__ */ new Date()) === u, y = !!(this.minYmd && u < this.minYmd);
        l.push({
          key: p,
          d: c,
          out: !d,
          date: s,
          sel: I,
          today: S,
          inMonth: d,
          disabled: y
        });
      }
      return l;
    }
  },
  watch: {
    modelValue() {
      const e = q(this.modelValue);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    }
  },
  methods: {
    isQuickDateDisabled(e) {
      if (!e) return !0;
      const t = B(e);
      return !!(this.minYmd && t < this.minYmd);
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = B(e.date);
      this.$emit("update:modelValue", i), this.$emit("change", i), t();
    },
    pickQuick(e, t) {
      const i = /* @__PURE__ */ new Date();
      if (e === "yesterday" && i.setDate(i.getDate() - 1), this.isQuickDateDisabled(i)) return;
      const r = B(i);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth(), this.$emit("update:modelValue", r), this.$emit("change", r), t();
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, ii = { class: "ui-datepicker-panel w-full min-w-[17rem] p-2" }, ni = { class: "mb-2 flex items-center justify-between gap-2" }, ri = { class: "text-sm font-medium tabular-nums text-foreground" }, si = { class: "ui-datepicker-grid" }, li = { class: "ui-datepicker-quick" };
function ai(e, t, i, r, l, n) {
  const s = v("ui-button"), d = v("ui-popover");
  return a(), o("div", {
    class: g([
      "ui-datepicker",
      i.fulled ? "ui-datepicker--fulled w-full" : "w-auto shrink-0",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    b(d, {
      open: l.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (c) => l.menuOpen = c),
      placement: "bottom-start",
      "match-trigger-width": !0,
      disabled: i.disabled
    }, {
      trigger: x(({ open: c, toggle: u }) => [
        b(s, {
          type: "button",
          id: n.resolvedId,
          variant: "solid",
          color: "input",
          fulled: i.fulled,
          "text-align": "left",
          "prefix-icon": "calendar",
          disabled: i.disabled,
          "aria-expanded": c ? "true" : "false",
          "aria-haspopup": !0,
          onClick: u
        }, {
          default: x(() => [
            h("span", {
              class: g([
                "min-w-0 flex-1 truncate",
                n.selectedDate ? "text-foreground" : "text-muted-foreground"
              ])
            }, k(n.displayText), 3)
          ]),
          _: 1
        }, 8, ["id", "fulled", "disabled", "aria-expanded", "onClick"])
      ]),
      content: x(({ close: c }) => [
        h("div", ii, [
          h("div", ni, [
            b(s, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              "aria-label": "Previous month",
              onClick: t[0] || (t[0] = D((u) => n.shiftMonth(-1), ["stop"]))
            }),
            h("span", ri, k(n.monthTitle), 1),
            b(s, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-right",
              "aria-label": "Next month",
              onClick: t[1] || (t[1] = D((u) => n.shiftMonth(1), ["stop"]))
            })
          ]),
          t[3] || (t[3] = h("div", { class: "mb-1 grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase text-muted-foreground" }, [
            h("span", null, "Su"),
            h("span", null, "Mo"),
            h("span", null, "Tu"),
            h("span", null, "We"),
            h("span", null, "Th"),
            h("span", null, "Fr"),
            h("span", null, "Sa")
          ], -1)),
          h("div", si, [
            (a(!0), o($, null, W(n.calendarCells, (u) => (a(), _(s, {
              key: u.key,
              variant: n.dayVariant(u),
              color: n.dayColor(u),
              size: "sm",
              disabled: u.disabled,
              "aria-selected": u.sel ? "true" : "false",
              "aria-disabled": u.disabled ? "true" : void 0,
              "data-outside": u.inMonth ? void 0 : "true",
              "data-today": u.today ? "true" : void 0,
              onClick: (p) => n.pick(u, c)
            }, {
              default: x(() => [
                V(k(u.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
          ]),
          h("div", li, [
            b(s, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.todayQuickDisabled,
              onClick: (u) => n.pickQuick("today", c)
            }, {
              default: x(() => [
                V(k(n.resolvedTodayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            b(s, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.yesterdayQuickDisabled,
              onClick: (u) => n.pickQuick("yesterday", c)
            }, {
              default: x(() => [
                V(k(n.resolvedYesterdayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "disabled"])
  ], 2);
}
const $r = /* @__PURE__ */ w(ti, [["render", ai]]), oi = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"])'
].join(","), di = [
  "button.ui-select-field:not([disabled])",
  "button.ui-pin-cell:not([disabled])"
].join(",");
function ui(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function fe(e, t, { skipFooter: i = !1 } = {}) {
  if (!e) return null;
  for (const r of e.querySelectorAll(t))
    if (ui(r) && !(i && r.closest(".ui-card-footer")))
      return r;
  return null;
}
function ci(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), i = [];
  for (const r of t)
    i.includes(r) || i.push(r);
  return i;
}
function me(e, { skipFooter: t = !1 } = {}) {
  const i = fe(e, oi, { skipFooter: t });
  if (i)
    return i.focus(), !0;
  const r = fe(e, di, { skipFooter: t });
  return r ? (r.focus(), !0) : !1;
}
function hi(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && me(t))
    return !0;
  for (const i of ci(e))
    if (me(i, { skipFooter: i === e }))
      return !0;
  return !1;
}
const fi = "(max-width: 767px)";
function Ee() {
  return typeof window > "u" ? !1 : window.matchMedia(fi).matches;
}
let pe = 0;
const mi = ["solid", "dashed", "dotted", "double"], ge = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, pi = ["solid", "regular", "brands", "light", "duotone", "thin"], gi = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"], ye = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl"
}, yi = {
  name: "Dialog",
  components: { Divider: Be },
  inheritAttrs: !1,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: !1
    },
    closeOnBackdrop: {
      type: Boolean,
      default: !0
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    },
    /** İç panel genişliği (`max-w-*`). */
    maxWidth: {
      type: String,
      default: "lg",
      validator: (e) => gi.includes(e)
    },
    /** Dış çerçeve (1px `border-border`) — `ui-card` ile aynı. */
    border: {
      type: Boolean,
      default: !0
    },
    /** `border-*` stili. */
    borderType: {
      type: String,
      default: "solid",
      validator: (e) => mi.includes(e)
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Varsayılan üst başlıkta gösterilecek ikon (`ui-icon` `name`). */
    icon: {
      type: String,
      default: null
    },
    /** `ui-icon` `type` prop’u. */
    iconType: {
      type: String,
      default: "light",
      validator: (e) => pi.includes(e)
    },
    /** Sağ üst kapat düğmesi. */
    showClose: {
      type: Boolean,
      default: !0
    },
    /** Kapat düğmesi `aria-label`; boşsa `ui.dialog.close` (i18n). */
    closeLabel: {
      type: String,
      default: ""
    },
    /** Gövde: yatay satır (buton / ikon sıraları). */
    row: {
      type: Boolean,
      default: !1
    },
    /** Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı. */
    headerDivider: {
      type: Boolean,
      default: !1
    },
    /**
     * Başlık yokken `role="dialog"` için erişilebilir ad.
     * Başlık varsa `aria-labelledby` önceliklidir.
     */
    ariaLabel: {
      type: String,
      default: ""
    },
    /** Açılışta gövdedeki ilk form alanına odaklan (yoksa panele düşer). */
    initialFocus: {
      type: Boolean,
      default: !0
    },
    /**
     * Yığılma katmanı — `confirm`: açık modalların üstünde (programatik onay).
     * @type {'default' | 'confirm'}
     */
    stackLayer: {
      type: String,
      default: "default",
      validator: (e) => e === "default" || e === "confirm"
    }
  },
  emits: ["update:open", "after-leave"],
  data() {
    pe += 1;
    const e = pe;
    return {
      titleId: `ui-dialog-title-${e}`,
      descriptionId: `ui-dialog-desc-${e}`,
      focusFallbackTimer: null,
      sheetDragCleanup: null
    };
  },
  watch: {
    open: {
      handler(e) {
        e ? this.scheduleInitialFocus() : (this.clearFocusFallback(), this.teardownSheetDrag());
      },
      flush: "post"
    }
  },
  beforeUnmount() {
    this.clearFocusFallback(), this.teardownSheetDrag();
  },
  computed: {
    hasDefaultHeader() {
      return !!(this.icon || this.title != null && this.title !== "" || this.description != null && this.description !== "" || this.$slots.actions || this.$slots.append || this.showClose);
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader;
    },
    showHeaderDivider() {
      return this.headerDivider && !!this.$slots.default && (this.hasHeaderBlock || !!this.$slots.toolbar);
    },
    borderStyleClass() {
      return ge[this.borderType] || ge.solid;
    },
    maxWidthClass() {
      return ye[this.maxWidth] || ye.lg;
    },
    panelClasses() {
      const e = this.border ? T("border", this.borderStyleClass) : T("border-0", "border-transparent");
      return T(
        "ui-surface ui-card ui-dialog-panel relative z-[1] w-full",
        this.maxWidthClass,
        e,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    ariaLabelledby() {
      if (this.title != null && this.title !== "")
        return this.titleId;
    },
    ariaDescribedby() {
      if (this.description != null && this.description !== "")
        return this.descriptionId;
    },
    ariaLabelAttr() {
      if (!this.ariaLabelledby && this.ariaLabel != null && this.ariaLabel !== "")
        return this.ariaLabel;
    },
    resolvedCloseLabel() {
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : typeof this.$t == "function" ? this.$t("ui.dialog.close") : "Close";
    },
    rootLayerClasses() {
      return T(
        "ui-dialog-root fixed inset-0 flex outline-none",
        this.stackLayer === "confirm" && "ui-dialog-root--confirm"
      );
    }
  },
  methods: {
    onOverlayAfterEnter() {
      this.scheduleInitialFocus();
    },
    clearFocusFallback() {
      this.focusFallbackTimer != null && (clearTimeout(this.focusFallbackTimer), this.focusFallbackTimer = null);
    },
    scheduleInitialFocus() {
      !this.open || !this.initialFocus || (this.clearFocusFallback(), this.$nextTick(() => {
        const e = this.$refs.panelRef;
        if (!e) {
          this.runInitialFocus();
          return;
        }
        const t = (i) => {
          i.target === e && (e.removeEventListener("transitionend", t), this.clearFocusFallback(), this.runInitialFocus());
        };
        e.addEventListener("transitionend", t), this.focusFallbackTimer = setTimeout(() => {
          e.removeEventListener("transitionend", t), this.focusFallbackTimer = null, this.runInitialFocus();
        }, 480);
      }));
    },
    runInitialFocus() {
      !this.open || !this.initialFocus || this.$nextTick(() => {
        this.focusInitialField();
      });
    },
    onOverlayAfterLeave() {
      this.$emit("after-leave");
    },
    focusInitialField() {
      var t;
      const e = this.$refs.panelRef;
      e && hi(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
    },
    close() {
      this.open && this.$emit("update:open", !1);
    },
    onBackdrop() {
      this.closeOnBackdrop && this.close();
    },
    onLayerKeydown(e) {
      this.closeOnEscape && e.key === "Escape" && (e.preventDefault(), this.close());
    },
    teardownSheetDrag() {
      this.sheetDragCleanup && (this.sheetDragCleanup(), this.sheetDragCleanup = null);
      const e = this.$refs.panelRef;
      e && (e.style.transform = "", e.style.transition = "");
    },
    onSheetPointerDown(e) {
      if (!Ee() || e.button !== 0) return;
      const t = this.$refs.panelRef;
      if (!t) return;
      e.preventDefault(), this.teardownSheetDrag();
      const i = e.clientY, r = t.style.transition;
      t.style.transition = "none";
      const l = (d) => {
        const c = Math.max(0, d.clientY - i);
        t.style.transform = `translateY(${c}px)`;
      }, n = (d) => {
        const c = Math.max(0, d.clientY - i);
        t.style.transition = r, t.style.transform = "", c >= 72 && this.close(), this.teardownSheetDrag();
      }, s = () => {
        t.style.transition = r, t.style.transform = "", this.teardownSheetDrag();
      };
      window.addEventListener("pointermove", l), window.addEventListener("pointerup", n), window.addEventListener("pointercancel", s), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", n), window.removeEventListener("pointercancel", s);
      };
    }
  }
}, bi = ["aria-labelledby", "aria-describedby", "aria-label"], vi = {
  key: 0,
  class: "ui-card-header shrink-0"
}, ki = {
  key: 0,
  class: "ui-dialog-header__icon"
}, Si = ["id"], wi = {
  key: 2,
  class: "ui-dialog-header__actions"
}, _i = ["id"], xi = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, Ci = {
  key: 4,
  class: "ui-card-footer"
};
function Ti(e, t, i, r, l, n) {
  const s = v("ui-icon"), d = v("ui-button"), c = v("Divider");
  return a(), _(U, { to: "body" }, [
    b(Q, {
      name: "ui-overlay-dialog",
      appear: "",
      onAfterEnter: n.onOverlayAfterEnter,
      onAfterLeave: n.onOverlayAfterLeave
    }, {
      default: x(() => [
        i.open ? (a(), o("div", {
          key: 0,
          ref: "layerRef",
          class: g(n.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[3] || (t[3] = (...u) => n.onLayerKeydown && n.onLayerKeydown(...u))
        }, [
          h("div", {
            class: "ui-dialog-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...u) => n.onBackdrop && n.onBackdrop(...u))
          }),
          h("div", z({
            ref: "panelRef",
            class: n.panelClasses,
            role: "dialog",
            "aria-modal": "true",
            tabindex: "-1",
            "aria-labelledby": n.ariaLabelledby,
            "aria-describedby": n.ariaDescribedby,
            "aria-label": n.ariaLabelAttr
          }, n.passthroughAttrs, {
            onClick: t[2] || (t[2] = D(() => {
            }, ["stop"]))
          }), [
            h("div", {
              class: "ui-dialog-sheet-grab shrink-0",
              onPointerdown: t[1] || (t[1] = (...u) => n.onSheetPointerDown && n.onSheetPointerDown(...u))
            }, [...t[4] || (t[4] = [
              h("div", {
                class: "ui-dialog-sheet-handle",
                "aria-hidden": "true"
              }, null, -1)
            ])], 32),
            n.hasHeaderBlock ? (a(), o("div", vi, [
              m(e.$slots, "header", {}, () => [
                n.hasDefaultHeader ? (a(), o("div", {
                  key: 0,
                  class: g(["ui-dialog-header", { "ui-dialog-header--no-icon": !i.icon }])
                }, [
                  i.icon ? (a(), o("span", ki, [
                    b(s, {
                      name: i.icon,
                      type: i.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  i.title ? (a(), o("h3", {
                    key: 1,
                    id: l.titleId,
                    class: "ui-dialog-header__title ui-heading-3"
                  }, k(i.title), 9, Si)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (a(), o("div", wi, [
                    m(e.$slots, "append"),
                    m(e.$slots, "actions")
                  ])) : f("", !0),
                  i.showClose ? (a(), _(d, {
                    key: 3,
                    type: "button",
                    variant: "solid",
                    color: "secondary",
                    size: "sm",
                    cubed: "",
                    "prefix-icon": "xmark",
                    "aria-label": n.resolvedCloseLabel,
                    onClick: n.close
                  }, null, 8, ["aria-label", "onClick"])) : f("", !0),
                  i.description ? (a(), o("p", {
                    key: 4,
                    id: l.descriptionId,
                    class: "ui-dialog-header__description ui-text-default"
                  }, k(i.description), 9, _i)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (a(), o("div", xi, [
              m(e.$slots, "toolbar")
            ])) : f("", !0),
            n.showHeaderDivider ? (a(), _(c, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (a(), o("div", {
              key: 3,
              class: g(["ui-card-body ui-text-default", { "ui-card-body--row": i.row }])
            }, [
              m(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (a(), o("div", Ci, [
              m(e.$slots, "footer")
            ])) : f("", !0)
          ], 16, bi)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["onAfterEnter", "onAfterLeave"])
  ]);
}
const Fr = /* @__PURE__ */ w(yi, [["render", Ti]]), Ii = ["solid", "regular", "brands", "light", "duotone", "thin"], zi = ["sm", "md", "lg"], Li = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, Ai = {
  name: "Empty",
  inheritAttrs: !1,
  props: {
    /** `ui-icon` `name` (örn. `plus`). Boş string → ikon kutusu gösterilmez. */
    icon: {
      type: String,
      default: "plus"
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** `ui-icon` `type` */
    iconType: {
      type: String,
      default: "light",
      validator: (e) => Ii.includes(e)
    },
    /** `sm` | `md` | `lg` — padding, ikon kutusu, başlık ve açıklama ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => zi.includes(e)
    }
  },
  computed: {
    iconSize() {
      return Li[this.size] ?? "md";
    },
    resolvedIcon() {
      return this.icon == null || this.icon === "" ? null : this.icon;
    },
    rootClass() {
      return T("ui-empty", `ui-empty--${this.size}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Di = {
  key: 0,
  class: "ui-empty-icon"
}, Ri = {
  key: 1,
  class: "ui-empty-title"
}, $i = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, Fi = {
  key: 3,
  class: "ui-empty-actions"
};
function Pi(e, t, i, r, l, n) {
  const s = v("ui-icon");
  return a(), o("div", z({ class: n.rootClass }, n.passthroughAttrs), [
    n.resolvedIcon ? (a(), o("div", Di, [
      b(s, {
        name: n.resolvedIcon,
        type: i.iconType,
        size: n.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    i.title ? (a(), o("h2", Ri, k(i.title), 1)) : f("", !0),
    i.description ? (a(), o("p", $i, k(i.description), 1)) : f("", !0),
    e.$slots.default ? (a(), o("div", Fi, [
      m(e.$slots, "default")
    ])) : f("", !0)
  ], 16);
}
const Pr = /* @__PURE__ */ w(Ai, [["render", Pi]]);
let be = 0;
const Bi = ["vertical", "horizontal"], Ei = ["default", "card"], Oi = {
  name: "FormRow",
  props: {
    label: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /**
     * `vertical`: etiket ve açıklama üstte, kontrol altta (tam genişlik).
     * `horizontal`: metin solda, kontrol sağda (`justify-between`).
     */
    direction: {
      type: String,
      default: "vertical",
      validator: (e) => Bi.includes(e)
    },
    /**
     * `default`: mevcut `direction` düzeni.
     * `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`.
     */
    variant: {
      type: String,
      default: "default",
      validator: (e) => Ei.includes(e)
    },
    /** Dışarıdan sabit id vermek için (ör. test); verilmezse otomatik üretilir. */
    id: {
      type: String,
      default: void 0
    },
    /** Dialog oluşturma formlarında ana alan — `lg` boyut ve odak hedefi */
    primary: {
      type: Boolean,
      default: !1
    }
  },
  provide() {
    return {
      uiFormRowPrimary: () => this.primary
    };
  },
  data() {
    be += 1;
    const e = be;
    return {
      fallbackId: `ui-form-control-${e}`,
      fallbackDescId: `ui-form-desc-${e}`
    };
  },
  computed: {
    controlId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    descriptionId() {
      return this.description ? this.fallbackDescId : void 0;
    },
    hasTextBlock() {
      return !!(this.label || this.description || this.$slots.action);
    },
    rootLayoutClass() {
      return this.variant === "card" ? this.direction === "vertical" ? "ui-form-row--card ui-form-row--card-vertical" : "ui-form-row--card ui-form-row--card-horizontal" : this.direction === "horizontal" ? "ui-form-row--horizontal" : "ui-form-row--vertical";
    },
    labelLineClass() {
      const e = "ui-form-row-label-line";
      return !this.label && this.$slots.action ? `${e} ui-form-row-label-line--action-only` : e;
    }
  }
}, Vi = ["data-primary-field"], Ni = {
  key: 0,
  class: "ui-form-row-text"
}, Mi = ["for"], Hi = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, Wi = ["id"], ji = { class: "ui-form-row-control" };
function Yi(e, t, i, r, l, n) {
  return a(), o("div", {
    class: g(["ui-form-row", n.rootLayoutClass]),
    "data-primary-field": i.primary ? "" : void 0
  }, [
    n.hasTextBlock ? (a(), o("div", Ni, [
      i.label || e.$slots.action ? (a(), o("div", {
        key: 0,
        class: g(n.labelLineClass)
      }, [
        i.label ? (a(), o("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: n.controlId
        }, k(i.label), 9, Mi)) : f("", !0),
        e.$slots.action ? (a(), o("div", Hi, [
          m(e.$slots, "action")
        ])) : f("", !0)
      ], 2)) : f("", !0),
      i.description ? (a(), o("p", {
        key: 1,
        id: n.descriptionId,
        class: "ui-text-default"
      }, k(i.description), 9, Wi)) : f("", !0)
    ])) : f("", !0),
    h("div", ji, [
      m(e.$slots, "default", {
        controlId: n.controlId,
        descriptionId: n.descriptionId
      })
    ])
  ], 10, Vi);
}
const Br = /* @__PURE__ */ w(Oi, [["render", Yi]]), Ki = ["solid", "regular", "brands", "light", "duotone", "thin"], ve = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, qi = ["xs", "sm", "md", "lg"], Gi = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none"
}, Ui = {
  name: "Icon",
  inheritAttrs: !1,
  props: {
    /** Font Awesome icon name without the `fa-` prefix (e.g. `house`). */
    name: {
      type: String,
      required: !0
    },
    /** Font Awesome ağırlığı (`fa-light`, `fa-solid`, …). */
    type: {
      type: String,
      default: "light",
      validator: (e) => Ki.includes(e)
    },
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => qi.includes(e)
    },
    /**
     * true: `aria-label` i18n `ui.icon.accessible` ile, `role="img"`.
     * false: dekoratif — `aria-hidden="true"`.
     */
    showAccessibleName: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    faWeightClass() {
      return ve[this.type] || ve.light;
    },
    iconClass() {
      return T(
        "ui-icon fa not-italic inline-block shrink-0",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        Gi[this.size],
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    accessibleLabel() {
      return this.showAccessibleName ? typeof this.$t == "function" ? this.$t("ui.icon.accessible", { name: this.name }) : this.name : null;
    },
    rootAttrs() {
      const e = { ...this.passthroughAttrs };
      return this.showAccessibleName ? (e.role = "img", (e["aria-label"] == null || e["aria-label"] === "") && (e["aria-label"] = this.accessibleLabel), e["aria-hidden"] = !1) : e["aria-hidden"] = !0, e;
    }
  }
};
function Qi(e, t, i, r, l, n) {
  return a(), o("i", z({ class: n.iconClass }, n.rootAttrs), null, 16);
}
const Er = /* @__PURE__ */ w(Ui, [["render", Qi]]);
let ke = 0;
const Zi = ["sm", "md", "lg"], Xi = {
  name: "Input",
  inheritAttrs: !1,
  inject: {
    uiFormRowPrimary: {
      default: !1
    }
  },
  props: {
    /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
    size: {
      type: String,
      default: "md",
      validator: (e) => Zi.includes(e)
    },
    /** `v-model` */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /** Tek satır için native `type`. */
    type: {
      type: String,
      default: "text"
    },
    /** `<textarea>` kullan. */
    multiline: {
      type: Boolean,
      default: !1
    },
    rows: {
      type: Number,
      default: 3
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    autocomplete: {
      type: String,
      default: void 0
    },
    maxlength: {
      type: [Number, String],
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur"],
  data() {
    return ke += 1, { fallbackId: `ui-input-${ke}` };
  },
  computed: {
    resolvedSize() {
      return this.size !== "md" ? this.size : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : "md";
    },
    rootClass() {
      return T(
        "ui-input",
        this.multiline && "ui-input--multiline",
        this.resolvedSize !== "md" && `ui-input--${this.resolvedSize}`,
        this.isDisabled && "pointer-events-none opacity-50"
      );
    },
    isDisabled() {
      return this.disabled;
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set([
        "class",
        "style",
        "type",
        "value",
        "id",
        "rows",
        "disabled",
        "readonly",
        "placeholder",
        "name",
        "autocomplete",
        "maxlength"
      ]), t = {};
      for (const [i, r] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = r);
      return t;
    }
  },
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value), this.$emit("input", e);
    }
  }
}, Ji = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, en = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, tn = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], nn = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], rn = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, sn = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function ln(e, t, i, r, l, n) {
  const s = v("ui-icon");
  return a(), o("div", {
    class: g([n.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (a(), o("div", Ji, [
      m(e.$slots, "prepend")
    ])) : f("", !0),
    i.prefixIcon ? (a(), o("span", en, [
      b(s, {
        name: i.prefixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    i.multiline ? (a(), o("textarea", z({
      key: 2,
      id: n.resolvedId,
      ref: "field",
      class: "ui-input-field ui-input-field--textarea",
      value: i.modelValue,
      rows: i.rows,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: i.placeholder,
      name: i.name,
      autocomplete: i.autocomplete,
      maxlength: i.maxlength
    }, n.passthroughAttrs, {
      onInput: t[0] || (t[0] = (...d) => n.onInput && n.onInput(...d)),
      onChange: t[1] || (t[1] = (d) => e.$emit("change", d)),
      onFocus: t[2] || (t[2] = (d) => e.$emit("focus", d)),
      onBlur: t[3] || (t[3] = (d) => e.$emit("blur", d))
    }), null, 16, tn)) : (a(), o("input", z({
      key: 3,
      id: n.resolvedId,
      ref: "field",
      class: "ui-input-field ui-input-field--single",
      type: i.type,
      value: i.modelValue,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: i.placeholder,
      name: i.name,
      autocomplete: i.autocomplete,
      maxlength: i.maxlength
    }, n.passthroughAttrs, {
      onInput: t[4] || (t[4] = (...d) => n.onInput && n.onInput(...d)),
      onChange: t[5] || (t[5] = (d) => e.$emit("change", d)),
      onFocus: t[6] || (t[6] = (d) => e.$emit("focus", d)),
      onBlur: t[7] || (t[7] = (d) => e.$emit("blur", d))
    }), null, 16, nn)),
    i.suffixIcon ? (a(), o("span", rn, [
      b(s, {
        name: i.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    e.$slots.append ? (a(), o("div", sn, [
      m(e.$slots, "append")
    ])) : f("", !0)
  ], 2);
}
const Or = /* @__PURE__ */ w(Xi, [["render", ln]]);
let Se = 0;
const an = ["sm", "md", "lg"], we = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], on = {
  name: "Phone",
  inheritAttrs: !1,
  props: {
    country: {
      type: String,
      default: "+90"
    },
    number: {
      type: String,
      default: ""
    },
    countries: {
      type: Array,
      default: () => we
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => an.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    numberName: {
      type: String,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "tel-national"
    },
    numberMaxlength: {
      type: [Number, String],
      default: 15
    },
    countryAriaLabel: {
      type: String,
      default: ""
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:country", "update:number", "focus", "blur"],
  data() {
    return Se += 1, { fallbackId: `ui-phone-number-${Se}` };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : we;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    rootClass() {
      return T(
        "ui-phone",
        this.isSingleCountry && "ui-phone--single-country",
        this.size !== "md" && `ui-phone--${this.size}`
      );
    },
    innerCountry: {
      get() {
        return this.country;
      },
      set(e) {
        this.$emit("update:country", e);
      }
    },
    innerNumber: {
      get() {
        return this.number;
      },
      set(e) {
        this.$emit("update:number", e);
      }
    },
    resolvedNumberId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    resolvedPlaceholder() {
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : typeof this.$t == "function" ? this.$t("ui.phone.placeholder") : "";
    },
    resolvedCountryAria() {
      return this.countryAriaLabel ? this.countryAriaLabel : typeof this.$t == "function" ? this.$t("ui.phone.countryAria") : "Country code";
    },
    numberPassthrough() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id"]), t = {};
      for (const [i, r] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = r);
      return t;
    }
  }
}, dn = { class: "ui-phone-prepend" }, un = {
  key: 0,
  class: "ui-phone-country-static"
};
function cn(e, t, i, r, l, n) {
  const s = v("ui-icon"), d = v("ui-select"), c = v("ui-input");
  return a(), o("div", {
    class: g(n.rootClass)
  }, [
    b(c, z({
      id: n.resolvedNumberId,
      modelValue: n.innerNumber,
      "onUpdate:modelValue": t[1] || (t[1] = (u) => n.innerNumber = u),
      type: "tel",
      inputmode: "tel",
      class: "w-full",
      size: i.size,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: n.resolvedPlaceholder,
      name: i.numberName,
      autocomplete: i.autocomplete,
      maxlength: i.numberMaxlength,
      "aria-describedby": i.ariaDescribedby
    }, n.numberPassthrough, {
      onFocus: t[2] || (t[2] = (u) => e.$emit("focus", u)),
      onBlur: t[3] || (t[3] = (u) => e.$emit("blur", u))
    }), {
      prepend: x(() => [
        h("div", dn, [
          b(s, {
            name: "phone",
            size: "xs",
            class: "text-muted-foreground",
            "aria-hidden": "true"
          }),
          n.isSingleCountry ? (a(), o("span", un, k(n.innerCountry), 1)) : (a(), _(d, {
            key: 1,
            modelValue: n.innerCountry,
            "onUpdate:modelValue": t[0] || (t[0] = (u) => n.innerCountry = u),
            variant: "inline",
            size: i.size,
            options: n.countryOptions,
            disabled: i.disabled,
            "aria-label": n.resolvedCountryAria
          }, null, 8, ["modelValue", "size", "options", "disabled", "aria-label"]))
        ])
      ]),
      _: 1
    }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"])
  ], 2);
}
const Vr = /* @__PURE__ */ w(on, [["render", cn]]), hn = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], _e = 10, xe = 410, fn = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], mn = {
  name: "Popover",
  inheritAttrs: !1,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: !1
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => hn.includes(e)
    },
    /** Tetikleyici ile aynı minimum genişlik */
    matchTriggerWidth: {
      type: Boolean,
      default: !1
    },
    /**
     * Panel genişliği (örn. `13rem`, `208px`). Verildiğinde katman sabitlenir; `matchTriggerWidth` ile birlikteyse bu önceliklidir.
     */
    width: {
      type: [String, Number],
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    closeOnOutsideClick: {
      type: Boolean,
      default: !0
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    },
    /**
     * Ek `closest` seçicileri (iç içe Select / DatePicker / TimePicker).
     */
    outsideClickIgnoreSelector: {
      type: String,
      default: ""
    },
    /**
     * true: bu popover, üst (ata) popover paneline tıklanınca da açık kalır.
     * false (varsayılan): üst panelde ama kendi panelinin dışında tıklanınca kapanır.
     */
    keepOpenOnAncestorPopoverClick: {
      type: Boolean,
      default: !1
    },
    /**
     * true: panel içinde `[role="option"][aria-selected="true"]` satırının üstü,
     * tetikleyicinin üstü ile aynı hizada olacak şekilde katman kaydırılır (Select).
     */
    alignSelectedOptionToTrigger: {
      type: Boolean,
      default: !1
    },
    /** true: tetikleyici satır genişliğini doldurur (sidebar footer vb.) */
    block: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:open"],
  data() {
    return {
      layerStyle: {},
      rafId: 0,
      mobileCenteredActive: !1
    };
  },
  computed: {
    rootShellClass() {
      return this.block ? "ui-popover ui-popover--block relative w-full min-w-0 max-w-full" : "ui-popover relative shrink-0";
    },
    triggerShellClass() {
      return this.block ? "ui-popover-trigger ui-popover-trigger--block flex w-full min-w-0 max-w-full" : "ui-popover-trigger inline-flex shrink-0";
    },
    resolvedWidth() {
      const e = this.width;
      return e == null || e === "" ? null : typeof e == "number" ? `${e}px` : String(e);
    }
  },
  watch: {
    open(e) {
      e ? this.$nextTick(() => {
        this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
      }) : this.teardownGlobalListeners();
    },
    width() {
      this.open && this.schedulePosition();
    }
  },
  mounted() {
    this.open && this.$nextTick(() => {
      this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
    });
  },
  beforeUnmount() {
    this.teardownGlobalListeners(), this.rafId && cancelAnimationFrame(this.rafId);
  },
  methods: {
    toggle() {
      this.disabled || this.$emit("update:open", !this.open);
    },
    close() {
      this.open && this.$emit("update:open", !1);
    },
    schedulePosition() {
      this.rafId && cancelAnimationFrame(this.rafId), this.rafId = requestAnimationFrame(() => {
        this.rafId = requestAnimationFrame(() => {
          this.rafId = 0, this.updatePosition();
        });
      });
    },
    resolveLayerZIndex() {
      if (typeof document > "u") return xe;
      let e = xe;
      for (const t of document.querySelectorAll(".ui-dialog-root")) {
        const i = Number.parseInt(getComputedStyle(t).zIndex, 10);
        Number.isFinite(i) && (e = Math.max(e, i + 10));
      }
      return e;
    },
    withLayerZIndex(e) {
      return {
        ...e,
        zIndex: String(this.resolveLayerZIndex())
      };
    },
    updatePosition() {
      const e = this.$refs.triggerRef, t = this.$refs.panelRef;
      if (!e || !t) return;
      const i = window.innerWidth, r = window.innerHeight, l = _e, n = this.resolvedWidth, s = e.getBoundingClientRect(), d = n != null ? t.offsetWidth || 200 : t.offsetWidth || (this.matchTriggerWidth ? s.width : 200), c = t.offsetHeight || 120;
      if (Ee()) {
        this.mobileCenteredActive = !0;
        const y = Math.max(l, Math.round((i - d) / 2)), A = {
          top: `${Math.max(l, Math.round((r - c) / 2))}px`,
          left: `${y}px`
        };
        n != null ? (A.width = n, A.minWidth = n) : (A.width = `${Math.min(d, i - l * 2)}px`, A.maxWidth = `calc(100vw - ${l * 2}px)`), this.layerStyle = this.withLayerZIndex(A);
        return;
      }
      this.mobileCenteredActive = !1;
      let u, p;
      switch (this.placement) {
        case "right-start":
          u = s.top, p = s.right + l;
          break;
        case "right-end":
          u = s.bottom - c, p = s.right + l;
          break;
        case "left-start":
          u = s.top, p = s.left - l - d;
          break;
        case "left-end":
          u = s.bottom - c, p = s.left - l - d;
          break;
        case "top-start":
          u = s.top - l - c, p = s.left;
          break;
        case "top-end":
          u = s.top - l - c, p = s.right - d;
          break;
        case "bottom-end":
          u = s.bottom + l, p = s.right - d;
          break;
        case "bottom":
          u = s.bottom + l, p = s.left + (s.width - d) / 2;
          break;
        case "bottom-start":
        default:
          u = s.bottom + l, p = s.left;
          break;
      }
      if (this.placement.startsWith("right") && p + d > i - l && (p = s.left - l - d), this.placement.startsWith("left") && p < l && (p = s.right + l), this.placement.startsWith("top") && u < l && (u = s.bottom + l), p + d > i - l && (p = Math.max(l, i - l - d)), p < l && (p = l), this.placement.startsWith("bottom") && u + c > r - l) {
        const y = s.top - l - c;
        y >= l && (u = y);
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (u + c > r - l && (u = Math.max(l, r - l - c)), u < l && (u = l));
      const I = this.matchTriggerWidth && n == null ? `${Math.ceil(s.width)}px` : void 0, S = {
        top: `${Math.round(u)}px`,
        left: `${Math.round(p)}px`,
        minWidth: I
      };
      n != null && (S.width = n, S.minWidth = n), this.layerStyle = this.withLayerZIndex(S), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.nudgeAlignSelectedToTrigger());
        });
      });
    },
    nudgeAlignSelectedToTrigger() {
      const e = this.$refs.triggerRef, t = this.$refs.panelRef, i = this.$refs.layerRef;
      if (!e || !t || !i) return;
      const r = t.querySelector('[role="listbox"]');
      if (r && r.scrollHeight > r.clientHeight + 2)
        return;
      const l = t.querySelector('[role="option"][aria-selected="true"]');
      if (!l) return;
      const n = e.querySelector("[data-popover-align]") || e, s = l.querySelector("[data-popover-align]") || l, d = n.getBoundingClientRect(), c = s.getBoundingClientRect(), u = c.top - d.top, p = c.left - d.left, I = i.getBoundingClientRect(), S = this.layerStyle.top, y = this.layerStyle.left;
      let C = typeof S == "string" && S !== "" ? parseFloat(S) : I.top, A = typeof y == "string" && y !== "" ? parseFloat(y) : I.left;
      Number.isNaN(C) && (C = I.top), Number.isNaN(A) && (A = I.left);
      let F = C - u, P = A - p;
      const L = _e, H = window.innerHeight, E = window.innerWidth, N = I.height, M = I.width;
      F + N > H - L && (F = Math.max(L, H - L - N)), F < L && (F = L), P + M > E - L && (P = Math.max(L, E - L - M)), P < L && (P = L), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(F)}px`,
        left: `${Math.round(P)}px`
      });
    },
    bindGlobalListeners() {
      window.addEventListener("scroll", this.onScrollResize, !0), window.addEventListener("resize", this.onScrollResize), document.addEventListener("pointerdown", this.onDocPointerDown, !0), document.addEventListener("keydown", this.onDocKeydown, !0);
    },
    teardownGlobalListeners() {
      window.removeEventListener("scroll", this.onScrollResize, !0), window.removeEventListener("resize", this.onScrollResize), document.removeEventListener("pointerdown", this.onDocPointerDown, !0), document.removeEventListener("keydown", this.onDocKeydown, !0);
    },
    onScrollResize(e) {
      if (!this.open) return;
      const t = this.$refs.panelRef, i = e == null ? void 0 : e.target;
      t && i && i !== document && i !== document.documentElement && t.contains(i) || this.schedulePosition();
    },
    onDocPointerDown(e) {
      if (!this.open || !this.closeOnOutsideClick) return;
      const t = e.target, i = this.$refs.triggerRef, r = this.$refs.panelRef;
      i != null && i.contains(t) || r != null && r.contains(t) || this.shouldIgnoreOutsideClick(t) || this.close();
    },
    isOpenedInsidePopoverLayer(e) {
      const t = this.$refs.rootRef;
      return !!(e && t && e.contains(t));
    },
    shouldIgnoreOutsideClick(e) {
      var l;
      if (typeof (e == null ? void 0 : e.closest) != "function") return !1;
      const t = this.$refs.layerRef, i = e.closest("[data-ui-popover-layer]");
      if (i && i !== t)
        return this.isOpenedInsidePopoverLayer(i) ? this.keepOpenOnAncestorPopoverClick : !0;
      for (const n of fn)
        if (e.closest(n)) return !0;
      const r = (l = this.outsideClickIgnoreSelector) == null ? void 0 : l.trim();
      return !!(r && e.closest(r));
    },
    onDocKeydown(e) {
      !this.open || !this.closeOnEscape || e.key === "Escape" && (e.preventDefault(), this.close());
    },
    onPanelKeydown(e) {
      e.key === "Escape" && this.close();
    }
  }
}, pn = ["data-popover-align-active", "data-ui-popover-mobile-centered"], gn = {
  key: 0,
  class: "ui-popover-header"
}, yn = { class: "ui-popover-body min-h-0 min-w-0" }, bn = {
  key: 1,
  class: "ui-popover-footer"
};
function vn(e, t, i, r, l, n) {
  return a(), o("div", {
    ref: "rootRef",
    class: g([n.rootShellClass, e.$attrs.class])
  }, [
    h("div", {
      ref: "triggerRef",
      class: g(n.triggerShellClass)
    }, [
      m(e.$slots, "trigger", {
        open: i.open,
        toggle: n.toggle,
        close: n.close
      })
    ], 2),
    (a(), _(U, { to: "body" }, [
      b(Q, { name: "ui-overlay-popover" }, {
        default: x(() => [
          j(h("div", {
            ref: "layerRef",
            class: "ui-popover-layer fixed",
            style: Z(l.layerStyle),
            "data-popover-align-active": i.alignSelectedOptionToTrigger ? "" : void 0,
            "data-ui-popover-mobile-centered": l.mobileCenteredActive ? "" : void 0,
            "data-ui-popover-layer": ""
          }, [
            h("div", {
              ref: "panelRef",
              class: "ui-surface ui-popover-panel w-full min-w-0 outline-none",
              role: "dialog",
              tabindex: "-1",
              onKeydown: t[0] || (t[0] = (...s) => n.onPanelKeydown && n.onPanelKeydown(...s))
            }, [
              e.$slots.header ? (a(), o("div", gn, [
                m(e.$slots, "header", { close: n.close })
              ])) : f("", !0),
              h("div", yn, [
                m(e.$slots, "content", { close: n.close })
              ]),
              e.$slots.footer ? (a(), o("div", bn, [
                m(e.$slots, "footer", { close: n.close })
              ])) : f("", !0)
            ], 544)
          ], 12, pn), [
            [$e, i.open]
          ])
        ]),
        _: 3
      })
    ]))
  ], 2);
}
const Nr = /* @__PURE__ */ w(mn, [["render", vn]]), kn = {
  name: "Radio",
  inject: {
    uiRadioGroup: {
      default: null
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      default: ""
    },
    /** `list` varyantında seçili satır vurgusu (hover değil, yalnızca seçiliyken). */
    highlight: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    groupVariant() {
      var e;
      return ((e = this.uiRadioGroup) == null ? void 0 : e.normalizedVariant) || "list";
    },
    isChecked() {
      return this.uiRadioGroup ? this.uiRadioGroup.modelValue === this.value : !1;
    },
    stringValue() {
      return String(this.value);
    }
  },
  mounted() {
    !this.uiRadioGroup && typeof import.meta < "u";
  },
  methods: {
    select() {
      this.uiRadioGroup && this.uiRadioGroup.$emit("update:modelValue", this.value);
    }
  }
}, Sn = ["name", "value", "checked"], wn = { class: "ui-radio-body" }, _n = { class: "ui-radio-label" }, xn = {
  key: 0,
  class: "ui-radio-description"
};
function Cn(e, t, i, r, l, n) {
  var s;
  return a(), o("label", {
    class: g([
      "ui-radio",
      `ui-radio--${n.groupVariant}`,
      {
        "ui-radio--checked": n.isChecked,
        "ui-radio--highlight": i.highlight && n.isChecked
      }
    ]),
    onKeydown: [
      t[1] || (t[1] = Y(D((...d) => n.select && n.select(...d), ["prevent"]), ["enter"])),
      t[2] || (t[2] = Y(D((...d) => n.select && n.select(...d), ["prevent"]), ["space"]))
    ]
  }, [
    h("input", {
      type: "radio",
      name: (s = n.uiRadioGroup) == null ? void 0 : s.groupName,
      value: n.stringValue,
      checked: n.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...d) => n.select && n.select(...d))
    }, null, 40, Sn),
    t[3] || (t[3] = h("span", {
      class: "ui-radio-indicator",
      "aria-hidden": "true"
    }, null, -1)),
    h("span", wn, [
      h("span", _n, k(i.label), 1),
      i.description ? (a(), o("span", xn, k(i.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Mr = /* @__PURE__ */ w(kn, [["render", Cn]]);
let Ce = 0;
const Tn = ["list", "button", "List", "Button"], In = ["vertical", "horizontal"], zn = {
  name: "RadioGroup",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    /** `list` — satır listesi; `button` — yan yana kart seçenekleri */
    variant: {
      type: String,
      default: "list",
      validator: (e) => Tn.includes(e)
    },
    /** Yalnız `variant="list"`: `horizontal` ile yan yana dizilim */
    orientation: {
      type: String,
      default: "vertical",
      validator: (e) => In.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return Ce += 1, { groupName: `ui-radio-group-${Ce}` };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    },
    rootClass() {
      return T(
        "ui-radio-group",
        `ui-radio-group--${this.normalizedVariant}`,
        this.normalizedVariant === "list" && this.orientation === "horizontal" ? "ui-radio-group--horizontal" : ""
      );
    }
  },
  provide() {
    return {
      uiRadioGroup: this
    };
  }
}, Ln = ["aria-label"];
function An(e, t, i, r, l, n) {
  return a(), o("div", {
    class: g(n.rootClass),
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, [
    m(e.$slots, "default")
  ], 10, Ln);
}
const Hr = /* @__PURE__ */ w(zn, [["render", An]]), Dn = {
  name: "Tag",
  components: { Badge: gt, Tooltip: Pe },
  props: {
    variant: {
      type: String,
      default: "secondary",
      validator: (e) => ["solid", "secondary", "outline"].includes(e)
    },
    size: {
      type: String,
      default: "sm",
      validator: (e) => ["sm", "md", "lg"].includes(e)
    },
    removable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["remove"],
  computed: {
    removeLabel() {
      return typeof this.$t == "function" ? this.$t("ui.tag.remove") : "Kaldır";
    }
  }
}, Rn = ["aria-label"];
function $n(e, t, i, r, l, n) {
  const s = v("ui-icon"), d = v("Tooltip"), c = v("Badge");
  return a(), _(c, {
    variant: i.variant,
    size: i.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, Fe({
    default: x(() => [
      m(e.$slots, "default")
    ]),
    _: 2
  }, [
    i.removable ? {
      name: "append",
      fn: x(() => [
        b(d, {
          label: n.removeLabel,
          placement: "bottom"
        }, {
          default: x(() => [
            h("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": n.removeLabel,
              onClick: t[0] || (t[0] = D((u) => e.$emit("remove"), ["stop"]))
            }, [
              b(s, {
                name: "xmark",
                size: "xs"
              })
            ], 8, Rn)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["variant", "size"]);
}
const Fn = /* @__PURE__ */ w(Dn, [["render", $n]]);
let Te = 0;
const Pn = ["field", "inline"], Bn = ["sm", "md", "lg"], En = {
  name: "Select",
  components: { Tag: Fn },
  inheritAttrs: !1,
  inject: {
    uiFormRowPrimary: {
      default: !1
    }
  },
  props: {
    variant: {
      type: String,
      default: "field",
      validator: (e) => Pn.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Bn.includes(e)
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: void 0
    },
    /** Çoklu seçim — `modelValue` dizi; tetikleyicide etiketler + arama, listede onay işareti */
    multiple: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: void 0
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !1
    },
    filterPlaceholder: {
      type: String,
      default: ""
    },
    /** Tetikleyici sol ikon (`ui-icon` `name`) */
    prefixIcon: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    },
    fulled: {
      type: Boolean,
      default: !0
    },
    matchTriggerWidth: {
      type: Boolean,
      default: !0
    },
    scrollListThreshold: {
      type: Number,
      default: 6
    },
    /** Sunucu tarafı arama — liste yerel filtrelenmez; `filterChange` yayınlanır */
    remoteFilter: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change", "dropdownOpenChange", "filterChange"],
  data() {
    Te += 1;
    const e = Te;
    return {
      fallbackId: `ui-select-${e}`,
      listboxId: `ui-select-listbox-${e}`,
      menuOpen: !1,
      filterQuery: "",
      filterDebounceTimer: null
    };
  },
  computed: {
    resolvedSize() {
      return this.size !== "md" ? this.size : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : "md";
    },
    rootClass() {
      const e = this.variant === "inline";
      return T(
        "ui-select",
        e && "ui-select--inline",
        !e && this.fulled && "ui-select--fulled w-full",
        !e && !this.fulled && "w-auto shrink-0",
        this.resolvedSize !== "md" && `ui-select--${this.resolvedSize}`,
        this.multiple && "ui-select--multiple",
        this.isFilterable && "ui-select--filterable",
        this.isDisabled && "pointer-events-none opacity-50",
        this.$attrs.class
      );
    },
    isFilterable() {
      return this.filterable || this.multiple;
    },
    showPopoverHeader() {
      return this.isFilterable && !this.multiple;
    },
    listboxRole() {
      return this.multiple, "listbox";
    },
    resolvedMatchTriggerWidth() {
      return this.variant === "inline" ? !1 : this.matchTriggerWidth;
    },
    isDisabled() {
      return this.disabled;
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    resolvedPlaceholder() {
      return this.placeholder !== void 0 && this.placeholder !== null ? this.placeholder : typeof this.$t == "function" ? this.$t("ui.select.placeholder") : "Seçiniz";
    },
    normalizedOptions() {
      const e = this.resolvedPlaceholder;
      return (this.options || []).map((t) => t != null && typeof t == "object" && "value" in t && "label" in t ? { value: t.value, label: t.label } : { value: t, label: String(t) }).filter((t) => {
        if (t.value === "" || t.value == null) return !1;
        const i = String(t.label), r = String(t.value);
        return i !== e && r !== e;
      });
    },
    filteredOptions() {
      if (!this.isFilterable || this.remoteFilter)
        return this.normalizedOptions;
      const e = this.normalizeFilter(this.filterQuery);
      return e ? this.normalizedOptions.filter(
        (t) => this.normalizeFilter(t.label).includes(e) || this.normalizeFilter(String(t.value)).includes(e)
      ) : this.normalizedOptions;
    },
    selectedValues() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue.filter((e) => e !== "" && e != null) : [] : [];
    },
    stringValue() {
      return this.multiple || this.modelValue === "" || this.modelValue == null ? "" : String(this.modelValue);
    },
    hiddenFieldValue() {
      return this.multiple ? this.selectedValues.map((e) => String(e)).join(",") : this.stringValue;
    },
    isPlaceholderDisplay() {
      return this.multiple ? !1 : this.stringValue === "";
    },
    displayLabel() {
      if (this.isPlaceholderDisplay)
        return this.resolvedPlaceholder;
      const e = this.normalizedOptions.find((t) => String(t.value) === this.stringValue);
      return e ? e.label : this.stringValue;
    },
    multipleInputPlaceholder() {
      return this.selectedValues.length > 0 ? "" : this.resolvedPlaceholder;
    },
    showClearButton() {
      return this.isDisabled ? !1 : this.multiple ? this.clearable && this.selectedValues.length > 0 : this.clearable && this.stringValue !== "";
    },
    clearAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.select.clear") : "Clear selection";
    },
    resolvedFilterPlaceholder() {
      return this.filterPlaceholder ? this.filterPlaceholder : typeof this.$t == "function" ? this.$t("ui.select.filterPlaceholder") : "Search…";
    },
    noResultsText() {
      return typeof this.$t == "function" ? this.$t("ui.select.noResults") : "No results";
    },
    emptyOptionsText() {
      return typeof this.$t == "function" ? this.$t("ui.select.empty") : "No options";
    },
    resolvedLoadingLabel() {
      return typeof this.$t == "function" ? this.$t("ui.select.loading") : "Loading…";
    },
    triggerPassthrough() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "disabled", "name"]), t = {};
      for (const [i, r] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = r);
      return t;
    },
    optionCount() {
      return this.normalizedOptions.length;
    },
    useScrollListMode() {
      return this.isFilterable ? !0 : this.optionCount > this.scrollListThreshold;
    },
    alignSelectedToTrigger() {
      return !this.useScrollListMode;
    }
  },
  watch: {
    filterQuery(e) {
      this.remoteFilter && (this.filterDebounceTimer && clearTimeout(this.filterDebounceTimer), this.filterDebounceTimer = setTimeout(() => {
        this.$emit("filterChange", String(e ?? "").trim());
      }, 300));
    },
    menuOpen(e) {
      if (this.$emit("dropdownOpenChange", e), !e) {
        this.filterDebounceTimer && (clearTimeout(this.filterDebounceTimer), this.filterDebounceTimer = null), this.filterQuery = "";
        return;
      }
      this.$nextTick(() => {
        this.isFilterable && this.focusSearch(), (this.useScrollListMode || this.isListboxScrollable()) && this.scrollSelectedIntoView();
      });
    }
  },
  methods: {
    normalizeFilter(e) {
      return String(e ?? "").trim().toLocaleLowerCase();
    },
    focusSearch() {
      var t;
      const e = this.multiple ? this.$refs.searchInput : this.$refs.filterInput;
      e && typeof e.focus == "function" && (e.focus(), (t = e.select) == null || t.call(e));
    },
    onTriggerClick(e) {
      e(), this.multiple && this.menuOpen && this.$nextTick(() => this.focusSearch());
    },
    isListboxScrollable() {
      const e = this.$refs.listbox;
      return e ? e.scrollHeight > e.clientHeight + 2 : !1;
    },
    scrollSelectedIntoView() {
      const e = this.$refs.listbox;
      if (!e) return;
      const t = e.querySelector('[role="option"][aria-selected="true"]');
      t && t.scrollIntoView({ block: "nearest", inline: "nearest" });
    },
    labelForValue(e) {
      const t = this.normalizedOptions.find((i) => String(i.value) === String(e));
      return t ? t.label : String(e);
    },
    isSelected(e) {
      return this.multiple ? this.selectedValues.some((t) => String(t) === String(e.value)) : String(e.value) === this.stringValue;
    },
    pick(e, t) {
      if (this.multiple) {
        this.toggleValue(e), this.$nextTick(() => this.focusSearch());
        return;
      }
      this.$emit("update:modelValue", e.value), this.$emit("change", { type: "change", target: { value: String(e.value) } }), t();
    },
    toggleValue(e) {
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], i = t.findIndex((r) => String(r) === String(e.value));
      i >= 0 ? t.splice(i, 1) : t.push(e.value), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } });
    },
    removeValue(e) {
      if (!this.multiple) return;
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], i = t.findIndex((r) => String(r) === String(e));
      i < 0 || (t.splice(i, 1), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } }));
    },
    clearSelection() {
      this.multiple ? (this.$emit("update:modelValue", []), this.$emit("change", { type: "change", target: { value: "" } })) : (this.$emit("update:modelValue", ""), this.$emit("change", { type: "change", target: { value: "" } })), this.menuOpen = !1;
    },
    pickFirstFiltered(e) {
      if (this.filteredOptions.length === 0) return;
      const t = this.filteredOptions[0];
      if (this.multiple) {
        this.isSelected(t) || this.toggleValue(t);
        return;
      }
      this.pick(t, e);
    },
    onSearchKeydown(e) {
      if (e.key === "Enter") {
        e.preventDefault(), this.pickFirstFiltered(() => {
        });
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault(), this.menuOpen = !1;
        return;
      }
      if (this.multiple && e.key === "Backspace" && !this.filterQuery && this.selectedValues.length > 0) {
        e.preventDefault();
        const t = this.selectedValues[this.selectedValues.length - 1];
        this.removeValue(t);
      }
    }
  }
}, On = ["name", "value"], Vn = ["id", "disabled", "aria-expanded", "aria-haspopup", "aria-controls", "aria-describedby", "onClick"], Nn = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Mn = {
  key: 1,
  class: "ui-select-values-inner"
}, Hn = ["placeholder", "aria-label", "disabled"], Wn = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, jn = { class: "ui-select-field-suffix" }, Yn = ["aria-label"], Kn = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, qn = ["placeholder", "aria-label", "onKeydown"], Gn = ["id", "role", "aria-multiselectable", "aria-labelledby"], Un = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, Qn = {
  "data-popover-align": "",
  class: "block min-w-0 truncate"
};
function Zn(e, t, i, r, l, n) {
  const s = v("ui-icon"), d = v("Tag"), c = v("ui-skeleton"), u = v("ui-button"), p = v("ui-empty"), I = v("ui-popover");
  return a(), o("div", {
    class: g(n.rootClass)
  }, [
    i.name ? (a(), o("input", {
      key: 0,
      type: "hidden",
      name: i.name,
      value: n.hiddenFieldValue
    }, null, 8, On)) : f("", !0),
    b(I, {
      open: l.menuOpen,
      "onUpdate:open": t[6] || (t[6] = (S) => l.menuOpen = S),
      placement: "bottom-start",
      "match-trigger-width": n.resolvedMatchTriggerWidth,
      disabled: n.isDisabled,
      "align-selected-option-to-trigger": n.alignSelectedToTrigger
    }, Fe({
      trigger: x(({ open: S, toggle: y }) => [
        h("button", z({
          type: "button",
          id: n.resolvedId,
          class: ["ui-select-field", { "ui-select-field--values": i.multiple }],
          disabled: n.isDisabled,
          "aria-expanded": S ? "true" : "false",
          "aria-haspopup": n.listboxRole,
          "aria-controls": l.listboxId,
          "aria-describedby": i.ariaDescribedby
        }, n.triggerPassthrough, {
          onClick: (C) => n.onTriggerClick(y)
        }), [
          i.prefixIcon ? (a(), o("span", Nn, [
            b(s, {
              name: i.prefixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : f("", !0),
          i.multiple ? (a(), o("div", Mn, [
            (a(!0), o($, null, W(n.selectedValues, (C) => (a(), _(d, {
              key: String(C),
              variant: "secondary",
              size: "sm",
              removable: "",
              onRemove: (A) => n.removeValue(C)
            }, {
              default: x(() => [
                V(k(n.labelForValue(C)), 1)
              ]),
              _: 2
            }, 1032, ["onRemove"]))), 128)),
            n.isFilterable ? j((a(), o("input", {
              key: 0,
              ref: "searchInput",
              "onUpdate:modelValue": t[0] || (t[0] = (C) => l.filterQuery = C),
              type: "text",
              class: g(["ui-select-values-input", { "ui-select-values-input--solo": !n.selectedValues.length }]),
              placeholder: n.multipleInputPlaceholder,
              "aria-label": n.resolvedFilterPlaceholder,
              autocomplete: "off",
              disabled: n.isDisabled,
              onClick: t[1] || (t[1] = D(() => {
              }, ["stop"])),
              onKeydown: t[2] || (t[2] = (...C) => n.onSearchKeydown && n.onSearchKeydown(...C))
            }, null, 42, Hn)), [
              [ee, l.filterQuery]
            ]) : f("", !0)
          ])) : i.loading ? (a(), o("span", Wn, k(n.resolvedLoadingLabel), 1)) : (a(), o("span", {
            key: 3,
            class: g(["ui-select-value", { "ui-select-value--placeholder": n.isPlaceholderDisplay }]),
            "data-popover-align": ""
          }, k(n.displayLabel), 3)),
          h("span", jn, [
            n.showClearButton ? (a(), o("button", {
              key: 0,
              type: "button",
              class: "ui-select-clear",
              "aria-label": n.clearAriaLabel,
              onClick: t[3] || (t[3] = D((...C) => n.clearSelection && n.clearSelection(...C), ["stop"]))
            }, [
              b(s, {
                name: "xmark",
                size: "xs"
              })
            ], 8, Yn)) : f("", !0),
            h("span", Kn, [
              b(s, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 16, Vn)
      ]),
      content: x(({ close: S }) => [
        h("div", {
          ref: "listbox",
          id: l.listboxId,
          class: "ui-select-listbox",
          role: n.listboxRole,
          "aria-multiselectable": i.multiple ? "true" : void 0,
          "aria-labelledby": n.resolvedId
        }, [
          i.loading && !n.filteredOptions.length ? (a(), o("div", Un, [
            (a(), o($, null, W(3, (y) => b(c, {
              key: y,
              variant: "line",
              class: g(y === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : n.filteredOptions.length ? (a(!0), o($, { key: 1 }, W(n.filteredOptions, (y) => (a(), _(u, {
            key: String(y.value),
            variant: n.isSelected(y) ? "solid" : "ghost",
            color: n.isSelected(y) ? "primary" : "secondary",
            size: "sm",
            fulled: "",
            "text-align": "left",
            role: "option",
            class: g(["ui-select-option", { "ui-select-option--selected": n.isSelected(y) }]),
            "suffix-icon": n.isSelected(y) ? "check" : void 0,
            "aria-selected": n.isSelected(y) ? "true" : "false",
            onClick: (C) => n.pick(y, S)
          }, {
            default: x(() => [
              h("span", Qn, k(y.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "color", "class", "suffix-icon", "aria-selected", "onClick"]))), 128)) : n.isFilterable && l.filterQuery ? (a(), _(p, {
            key: 2,
            icon: "magnifying-glass",
            size: "sm",
            title: n.noResultsText
          }, null, 8, ["title"])) : (a(), _(p, {
            key: 3,
            icon: "table-cells",
            size: "sm",
            title: n.emptyOptionsText
          }, null, 8, ["title"]))
        ], 8, Gn)
      ]),
      _: 2
    }, [
      n.showPopoverHeader ? {
        name: "header",
        fn: x(({ close: S }) => [
          j(h("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[4] || (t[4] = (y) => l.filterQuery = y),
            type: "text",
            class: "ui-select-filter-input w-full",
            placeholder: n.resolvedFilterPlaceholder,
            "aria-label": n.resolvedFilterPlaceholder,
            autocomplete: "off",
            onMousedown: t[5] || (t[5] = D(() => {
            }, ["prevent"])),
            onKeydown: [
              Y(D((y) => n.pickFirstFiltered(S), ["prevent"]), ["enter"]),
              Y(D((y) => S(), ["prevent"]), ["esc"])
            ]
          }, null, 40, qn), [
            [ee, l.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: x((S) => [
          m(e.$slots, "footer", Oe(Ve(S)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const Wr = /* @__PURE__ */ w(En, [["render", Zn]]), Xn = ["line", "circle", "block", "pill"], Jn = ["sm", "md", "lg"], er = 480, Ie = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, ze = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, tr = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => Xn.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => Jn.includes(e)
    }
  },
  setup(e) {
    const t = Ne(), i = O(() => !!t.default), r = R(null), l = R(null), n = R(null), s = R(null), d = R(!1), c = R(!1), u = R(!1), p = R(!1), I = O(
      () => e.loading || c.value
    ), S = O(
      () => e.loading || c.value
    );
    Me(() => {
      p.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), He(
      () => e.loading,
      async (L, H) => {
        var M, X, J;
        if (L) {
          c.value = !1, u.value = !1, s.value = null, d.value = !1;
          return;
        }
        if (H !== !0) return;
        if (p.value) {
          c.value = !1, s.value = null, d.value = !1;
          return;
        }
        const E = ((M = r.value) == null ? void 0 : M.offsetHeight) ?? ((X = l.value) == null ? void 0 : X.offsetHeight) ?? 0;
        c.value = !0, u.value = !1, d.value = !0, s.value = E, await te();
        const N = ((J = n.value) == null ? void 0 : J.scrollHeight) ?? E;
        if (E <= 0 && N <= 0) {
          y();
          return;
        }
        await te(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            s.value = N, u.value = !0;
          });
        }), setTimeout(y, er + 40);
      }
    );
    function y() {
      c.value = !1, u.value = !1, s.value = null, d.value = !1;
    }
    function C(L) {
      L.target === r.value && L.propertyName === "height" && (e.loading || d.value && y());
    }
    const A = O(() => {
      if (s.value != null)
        return { height: `${s.value}px` };
    }), F = O(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !c.value,
      "ui-skeleton-placeholder--overlay": c.value,
      "ui-skeleton-placeholder--fade-out": c.value
    })), P = O(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !c.value,
      "ui-skeleton-content-wrap--revealing": c.value,
      "ui-skeleton-content-wrap--revealing-visible": c.value && u.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !c.value
    }));
    return {
      hasDefaultSlot: i,
      hostRef: r,
      placeholderRef: l,
      contentWrapRef: n,
      hostStyle: A,
      heightAnimActive: d,
      isRevealing: c,
      showPlaceholder: I,
      isBusy: S,
      placeholderClass: F,
      contentWrapClass: P,
      onHostTransitionEnd: C
    };
  },
  computed: {
    variantClass() {
      return Ie[this.variant] || Ie.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return ze[this.size] || ze.md;
    },
    skeletonClass() {
      return T(
        "ui-skeleton",
        this.variantClass,
        this.lineSizeClass,
        this.$attrs.class
      );
    },
    hostClass() {
      return T(
        "ui-skeleton-host",
        this.heightAnimActive && "ui-skeleton-host--height-active",
        (this.loading || this.isRevealing) && "ui-skeleton-host--busy",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, ir = ["aria-busy"], nr = ["aria-hidden"];
function rr(e, t, i, r, l, n) {
  return r.hasDefaultSlot ? (a(), o("div", z({
    key: 1,
    ref: "hostRef",
    class: n.hostClass,
    style: r.hostStyle,
    "aria-busy": r.isBusy ? "true" : void 0
  }, n.passthroughAttrs, {
    onTransitionend: t[0] || (t[0] = (...s) => r.onHostTransitionEnd && r.onHostTransitionEnd(...s))
  }), [
    j(h("div", {
      ref: "placeholderRef",
      class: g(["ui-skeleton-placeholder", r.placeholderClass]),
      "aria-hidden": "true"
    }, [
      m(e.$slots, "placeholder", {}, () => [
        t[1] || (t[1] = h("div", { class: "ui-skeleton-default-rows" }, [
          h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md" }),
          h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--md" }),
          h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--sm" })
        ], -1))
      ])
    ], 2), [
      [$e, r.showPlaceholder]
    ]),
    h("div", {
      ref: "contentWrapRef",
      class: g(["ui-skeleton-content-wrap", r.contentWrapClass])
    }, [
      h("div", {
        class: "ui-skeleton-content",
        "aria-hidden": r.showPlaceholder && !r.isRevealing ? "true" : void 0
      }, [
        m(e.$slots, "default")
      ], 8, nr)
    ], 2)
  ], 16, ir)) : (a(), o("div", z({
    key: 0,
    class: n.skeletonClass,
    "aria-hidden": "true"
  }, n.passthroughAttrs), null, 16));
}
const jr = /* @__PURE__ */ w(tr, [["render", rr]]), sr = {
  name: "TabList",
  inheritAttrs: !1,
  inject: {
    uiTabs: {
      default: null
    }
  },
  props: {
    /** `tablist` erişilebilir adı (birden fazla sekme şeridi için önerilir). */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    ariaOrientation() {
      var e;
      return ((e = this.uiTabs) == null ? void 0 : e.orientation) === "vertical" ? "vertical" : "horizontal";
    },
    listClass() {
      var r, l;
      const e = ((r = this.uiTabs) == null ? void 0 : r.orientation) === "vertical", i = ((l = this.uiTabs) == null ? void 0 : l.variant) === "segmented" && !e ? "segmented" : "line";
      return T(
        "ui-tab-list",
        i === "segmented" ? "ui-tab-list--segmented" : "ui-tab-list--line",
        e ? "ui-tab-list--vertical" : "ui-tab-list--horizontal",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  },
  methods: {
    /** Klavye: ok tuşları ile tetikleyiciler arasında odak (yatay/dikey). */
    onKeydown(e) {
      var p, I;
      if (!this.uiTabs) return;
      const t = this.uiTabs.orientation === "vertical", i = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'));
      if (i.length === 0) return;
      const r = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], l = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], n = e.key;
      let s = 0;
      if (r.includes(n)) s = 1;
      else if (l.includes(n)) s = -1;
      else return;
      e.preventDefault();
      const d = document.activeElement;
      let c = i.indexOf(d);
      c === -1 && (c = i.findIndex((S) => S.getAttribute("aria-selected") === "true")), c === -1 && (c = 0);
      let u = c + s;
      u < 0 && (u = i.length - 1), u >= i.length && (u = 0), (I = (p = i[u]) == null ? void 0 : p.focus) == null || I.call(p);
    }
  }
}, lr = ["aria-label", "aria-orientation"];
function ar(e, t, i, r, l, n) {
  return a(), o("div", z({
    class: n.listClass,
    role: "tablist",
    "aria-label": i.ariaLabel || void 0,
    "aria-orientation": n.ariaOrientation
  }, n.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...s) => n.onKeydown && n.onKeydown(...s))
  }), [
    m(e.$slots, "default")
  ], 16, lr);
}
const Yr = /* @__PURE__ */ w(sr, [["render", ar]]);
let Le = 0;
const or = ["line", "segmented"], dr = {
  name: "Tabs",
  inheritAttrs: !1,
  props: {
    /** Aktif sekme kimliği (`TabTrigger` / `TabPanel` `value` ile eşleşir). */
    modelValue: {
      type: [String, Number],
      default: null
    },
    /** `line` — alt çizgi; `segmented` — Apple tarzı segment kontrolü (ikon + etiket, yatay). */
    variant: {
      type: String,
      default: "line",
      validator: (e) => or.includes(e)
    },
    /** `horizontal` — yan yana tetikleyiciler; `vertical` — sol şerit + içerik. */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => e === "horizontal" || e === "vertical"
    }
  },
  emits: ["update:modelValue"],
  data() {
    return Le += 1, {
      baseId: `ui-tabs-${Le}`
    };
  },
  provide() {
    return {
      uiTabs: this
    };
  },
  computed: {
    rootClass() {
      return T(
        "ui-tabs flex min-w-0 flex-col gap-4",
        this.variant === "segmented" ? "ui-tabs--segmented" : "ui-tabs--line",
        this.orientation === "vertical" ? "ui-tabs--vertical" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  methods: {
    setValue(e) {
      this.$emit("update:modelValue", e);
    },
    tabSlug(e) {
      return String(e).replace(/[^a-zA-Z0-9_-]/g, "_");
    },
    triggerId(e) {
      return `${this.baseId}-tab-${this.tabSlug(e)}`;
    },
    panelId(e) {
      return `${this.baseId}-panel-${this.tabSlug(e)}`;
    },
    isSelected(e) {
      return Object.is(this.modelValue, e);
    }
  }
};
function ur(e, t, i, r, l, n) {
  return a(), o("div", z({ class: n.rootClass }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16);
}
const Kr = /* @__PURE__ */ w(dr, [["render", ur]]), cr = ["solid", "regular", "brands", "light", "duotone", "thin"], hr = {
  name: "TabTrigger",
  inheritAttrs: !1,
  inject: {
    uiTabs: {
      default: null
    }
  },
  props: {
    value: {
      type: [String, Number],
      required: !0
    },
    /** Slot kullanılmazsa gösterilen metin. */
    label: {
      type: String,
      default: ""
    },
    /** `ui-icon` `name` — doluysa ikon + metin (veya yalnız ikon). */
    icon: {
      type: String,
      default: null
    },
    /** `ui-icon` `type` prop’u. */
    iconType: {
      type: String,
      default: "light",
      validator: (e) => cr.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    /** `segmented` yalnızca yatay `ui-tabs` içinde geçerlidir. */
    triggerKind() {
      if (!this.uiTabs) return "line";
      const e = this.uiTabs.variant, t = this.uiTabs.orientation === "vertical";
      return e === "segmented" && !t ? "segmented" : "line";
    },
    tabIconSize() {
      return this.triggerKind === "segmented" ? "md" : "xs";
    },
    /** FA Pro: segment kartlarında da varsayılan `light` kullanılır. */
    tabIconType() {
      return this.iconType;
    },
    isSelected() {
      return this.uiTabs ? this.uiTabs.isSelected(this.value) : !1;
    },
    triggerDomId() {
      return this.uiTabs ? this.uiTabs.triggerId(this.value) : void 0;
    },
    panelDomId() {
      return this.uiTabs ? this.uiTabs.panelId(this.value) : void 0;
    },
    triggerClass() {
      const e = this.triggerKind;
      return T(
        "ui-tab-trigger",
        e === "segmented" ? "ui-tab-trigger--segmented" : "ui-tab-trigger--line",
        this.isSelected && (e === "segmented" ? "ui-tab-trigger--segmented-selected" : "ui-tab-trigger--line-selected"),
        this.disabled ? "ui-tab-trigger--disabled" : "",
        this.$attrs.class
      );
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  },
  methods: {
    select() {
      this.disabled || !this.uiTabs || this.uiTabs.setValue(this.value);
    }
  }
}, fr = ["id", "aria-selected", "aria-controls", "tabindex", "disabled"], mr = { class: "ui-tab-trigger-label min-w-0 truncate" };
function pr(e, t, i, r, l, n) {
  const s = v("ui-icon");
  return a(), o("button", {
    type: "button",
    role: "tab",
    id: n.triggerDomId,
    class: g(n.triggerClass),
    "aria-selected": n.isSelected ? "true" : "false",
    "aria-controls": n.panelDomId,
    tabindex: n.isSelected ? 0 : -1,
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...d) => n.select && n.select(...d))
  }, [
    i.icon ? (a(), _(s, {
      key: 0,
      name: i.icon,
      type: n.tabIconType,
      size: n.tabIconSize,
      class: "ui-tab-trigger-icon",
      "aria-hidden": "true"
    }, null, 8, ["name", "type", "size"])) : f("", !0),
    h("span", mr, [
      m(e.$slots, "default", {}, () => [
        V(k(i.label), 1)
      ])
    ])
  ], 10, fr);
}
const qr = /* @__PURE__ */ w(hr, [["render", pr]]), Gr = {
  ui: {
    button: {
      loading: "Loading"
    },
    icon: {
      accessible: "{name} icon"
    },
    alert: {
      dismiss: "Dismiss"
    },
    dialog: {
      close: "Close"
    },
    confirm: {
      ok: "OK",
      cancel: "Cancel",
      fallbackAria: "Confirm"
    },
    tag: {
      remove: "Remove tag"
    },
    phone: {
      countryAria: "Country code",
      placeholder: "555 000 0000"
    },
    password: {
      show: "Show password",
      hide: "Hide password",
      strength: {
        weak: "Weak",
        fair: "Fair",
        good: "Good",
        strong: "Strong"
      }
    },
    pin: {
      ariaLabel: "Verification code",
      cell: "Digit {n} of {total}"
    },
    progress: {
      ariaLabel: "Progress"
    },
    select: {
      placeholder: "Select",
      filterPlaceholder: "Search…",
      noResults: "No results",
      empty: "No options",
      loading: "Loading…",
      clear: "Clear selection"
    },
    colorPicker: {
      triggerPlaceholder: "Pick a color",
      popoverTitle: "Color palette",
      clear: "Clear",
      customHex: "Custom color (hex)"
    },
    iconPicker: {
      triggerPlaceholder: "Pick an icon",
      popoverTitle: "Icons",
      clear: "Clear",
      searchPlaceholder: "Search icons…",
      noResults: "No results"
    },
    datePicker: {
      today: "Today",
      yesterday: "Yesterday"
    },
    dateRangePicker: {
      placeholder: "Select date range",
      selectEnd: "Select end date",
      prevMonth: "Previous month",
      nextMonth: "Next month",
      quickAria: "Quick date ranges",
      today: "Today",
      yesterday: "Yesterday",
      thisMonth: "This month ({month})",
      lastMonth: "Last month ({month})"
    },
    photo: {
      fallbackAlt: "Photo",
      previewAria: "Photo preview",
      prev: "Previous photo",
      next: "Next photo",
      counter: "{current} / {total}"
    },
    photos: {
      more: "+{count}"
    }
  }
}, Ur = {
  ui: {
    button: {
      /** Yükleme sırasında ekran okuyucu / varsayılan `loading-text` */
      loading: "Yükleniyor"
    },
    icon: {
      /** `show-accessible-name` açıkken `aria-label` (name = ikon adı, fa- öneki yok) */
      accessible: "{name} ikon"
    },
    alert: {
      /** Alert / Toast kapat düğmesi */
      dismiss: "Kapat"
    },
    dialog: {
      close: "Kapat"
    },
    confirm: {
      ok: "Tamam",
      cancel: "İptal",
      /** Başlık yokken diyalog erişilebilir adı */
      fallbackAria: "Onay"
    },
    tag: {
      /** Tag kapat düğmesi `aria-label` */
      remove: "Etiketi kaldır"
    },
    phone: {
      countryAria: "Ülke kodu",
      placeholder: "5XX XXX XX XX"
    },
    password: {
      show: "Şifreyi göster",
      hide: "Şifreyi gizle",
      strength: {
        weak: "Zayıf",
        fair: "Orta",
        good: "İyi",
        strong: "Güçlü"
      }
    },
    pin: {
      ariaLabel: "Doğrulama kodu",
      cell: "{n}. hane, toplam {total}"
    },
    progress: {
      ariaLabel: "İlerleme"
    },
    select: {
      placeholder: "Seçiniz",
      filterPlaceholder: "Ara…",
      noResults: "Sonuç bulunamadı",
      empty: "Seçenek yok",
      loading: "Yükleniyor…",
      clear: "Seçimi temizle"
    },
    colorPicker: {
      triggerPlaceholder: "Renk seçin",
      popoverTitle: "Renk paleti",
      clear: "Temizle",
      customHex: "Özel renk (hex)"
    },
    iconPicker: {
      triggerPlaceholder: "İkon seçin",
      popoverTitle: "İkonlar",
      clear: "Temizle",
      searchPlaceholder: "İkon ara…",
      noResults: "Sonuç bulunamadı"
    },
    datePicker: {
      today: "Bugün",
      yesterday: "Dün"
    },
    dateRangePicker: {
      placeholder: "Tarih aralığı seçin",
      selectEnd: "Bitiş tarihini seçin",
      prevMonth: "Önceki ay",
      nextMonth: "Sonraki ay",
      quickAria: "Hızlı tarih aralığı",
      today: "Bugün",
      yesterday: "Dün",
      thisMonth: "Bu ay ({month})",
      lastMonth: "Geçen ay ({month})"
    },
    photo: {
      fallbackAlt: "Görsel",
      previewAria: "Görsel önizleme",
      prev: "Önceki görsel",
      next: "Sonraki görsel",
      counter: "{current} / {total}"
    },
    photos: {
      more: "+{count}"
    }
  }
}, gr = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], yr = "ui-sans-serif, system-ui, sans-serif", Ae = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, De = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
};
function br(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function vr(e) {
  const t = String(e).trim();
  return !t || t.includes(",") ? t : `${t}, ${yr}`;
}
function kr(e) {
  const t = e.trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function Sr(e, t, i) {
  const [r, l, n] = [e, t, i].map((s) => {
    const d = s / 255;
    return d <= 0.03928 ? d / 12.92 : ((d + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * l + 0.0722 * n;
}
function wr(e, t = "#ffffff", i = "#0a0a0b") {
  const r = kr(e);
  return r && Sr(...r) > 0.4 ? i : t;
}
function _r(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([A-Z])/g, "-$1").replace(/_/g, "-").toLowerCase()}`;
}
function xr(e) {
  if (e == null || e === "")
    return null;
  const t = Number(e);
  if (Number.isNaN(t))
    return null;
  const i = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, i))}%`;
}
function Cr(e) {
  if (e == null || e === "")
    return null;
  if (typeof e == "number")
    return `${e}px`;
  const t = String(e).trim();
  return Ae[t] != null ? Ae[t] : /^\d+$/.test(t) ? `${t}px` : t;
}
function Tr(e) {
  return e == null || e === "" ? null : De[e] ? De[e] : String(e);
}
function G(e, t, i) {
  if (!i || typeof i != "object")
    return;
  const r = xr(i.opacity ?? i.bgOpacity);
  r && (e[`--ui-${t}-opacity`] = r);
  const l = Cr(i.backdropBlur ?? i.backdropFilter);
  l && (e[`--ui-${t}-backdrop-blur`] = l);
  const n = Tr(i.mixFrom);
  n && (e[`--ui-${t}-mix-from`] = n);
}
function Re(e, t, i) {
  const r = e[t];
  if (r != null && r !== "")
    return String(r);
  const l = e[i];
  if (l != null && l !== "")
    return String(l);
}
function Qr(e = {}, t = {}) {
  const i = br(e.root ?? t.root);
  if (!i || typeof e != "object")
    return {};
  e.mode === "dark" ? i.classList.add("dark") : e.mode === "light" && i.classList.remove("dark");
  const r = {};
  if (e.fontFamily && (r["--font-sans"] = vr(e.fontFamily)), e.baseColor && typeof e.baseColor == "object")
    for (const d of gr) {
      const c = e.baseColor[d];
      c != null && c !== "" && (r[`--base-${d}`] = String(c));
    }
  const l = [
    ["background", "--background"],
    ["foreground", "--foreground"],
    ["surface", "--surface"],
    ["surfaceForeground", "--surface-foreground"],
    ["control", "--control"],
    ["controlForeground", "--control-foreground"],
    ["primaryForeground", "--primary-foreground"],
    ["secondaryForeground", "--secondary-foreground"],
    ["border", "--border"],
    ["ring", "--ring"],
    ["muted", "--muted"],
    ["mutedForeground", "--muted-foreground"],
    ["accent", "--accent"],
    ["accentForeground", "--accent-foreground"]
  ];
  for (const [d, c] of l) {
    const u = e[d];
    u != null && u !== "" && (r[c] = String(u));
  }
  const n = Re(e, "primaryColor", "primary");
  n && (r["--primary"] = n, e.primaryForeground || (r["--primary-foreground"] = wr(n)), e.ring || (r["--ring"] = `color-mix(in oklab, ${n} 55%, transparent)`));
  const s = Re(e, "secondaryColor", "secondary");
  if (s && (r["--secondary"] = s), G(r, "surface", e.surfaceStyle), G(r, "control", e.controlStyle), G(r, "input", e.inputStyle), e.colors && typeof e.colors == "object")
    for (const [d, c] of Object.entries(e.colors))
      c != null && c !== "" && (r[_r(d)] = String(c));
  for (const [d, c] of Object.entries(r))
    i.style.setProperty(d, c);
  return { ...r };
}
function Zr(e, t) {
  return {
    ...e,
    ...t,
    baseColor: {
      ...e.baseColor,
      ...t.baseColor
    },
    surfaceStyle: {
      ...e.surfaceStyle,
      ...t.surfaceStyle
    },
    controlStyle: {
      ...e.controlStyle,
      ...t.controlStyle
    },
    inputStyle: {
      ...e.inputStyle,
      ...t.inputStyle
    },
    colors: {
      ...e.colors,
      ...t.colors
    }
  };
}
export {
  Lr as A,
  gt as B,
  Rr as C,
  $r as D,
  Pr as E,
  Br as F,
  Er as I,
  Vr as P,
  Mr as R,
  Wr as S,
  Yr as T,
  w as _,
  Ar as a,
  Dr as b,
  Fr as c,
  Be as d,
  Or as e,
  Nr as f,
  Hr as g,
  jr as h,
  qr as i,
  Kr as j,
  Fn as k,
  Pe as l,
  Qr as m,
  T as n,
  Gr as o,
  Zr as p,
  Ur as t
};
//# sourceMappingURL=apply-theme-CVUYw3KK.js.map
