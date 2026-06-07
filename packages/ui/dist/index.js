import { openBlock as n, createElementBlock as a, mergeProps as x, renderSlot as p, resolveComponent as y, normalizeClass as _, createVNode as b, createCommentVNode as f, createElementVNode as c, toDisplayString as m, createBlock as k, resolveDynamicComponent as U, withCtx as w, Teleport as Q, Transition as ne, normalizeStyle as B, createTextVNode as M, Fragment as A, withModifiers as L, renderList as V, withKeys as q, reactive as ge, normalizeProps as yt, guardReactiveProps as vt, withDirectives as re, vShow as be, createSlots as _t, vModelText as xe, useSlots as It, computed as j, ref as E, onMounted as At, watch as Lt, nextTick as Se, TransitionGroup as $t } from "vue";
import { RouterLink as zt } from "vue-router";
function S(...e) {
  const t = [];
  for (const r of e)
    if (r) {
      if (typeof r == "string") {
        t.push(r);
        continue;
      }
      if (typeof r == "object")
        for (const [s, l] of Object.entries(r))
          l && t.push(s);
    }
  return t.join(" ");
}
const v = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, l] of t)
    r[s] = l;
  return r;
}, Dt = ["horizontal", "vertical"], Vt = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır veya sütun dizilimi */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => Dt.includes(e)
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
      return S(
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
}, Pt = ["aria-label"];
function Mt(e, t, r, s, l, i) {
  return n(), a("div", x({
    class: i.rootClass,
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16, Pt);
}
const Rt = /* @__PURE__ */ v(Vt, [["render", Mt]]), Ot = ["info", "success", "warning", "error"], Ce = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, Te = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, Bt = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Bilgi / başarı / uyarı / hata görünümü */
    variant: {
      type: String,
      default: "info",
      validator: (e) => Ot.includes(e)
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
      return this.icon || Ce[this.variant] || Ce.info;
    },
    iconToneClass() {
      return Te[this.variant] || Te.info;
    },
    rootClasses() {
      return S(`ui-alert ui-alert--${this.variant}`, this.$attrs.class);
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
}, Et = ["role"], Ft = { class: "ui-alert-body" }, Nt = {
  key: 0,
  class: "ui-alert-title"
}, Yt = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, Ht = {
  key: 2,
  class: "ui-alert-slot"
};
function Wt(e, t, r, s, l, i) {
  const o = y("ui-icon"), d = y("ui-button");
  return n(), a("div", x({
    class: i.rootClasses,
    role: i.alertRole
  }, i.passthroughAttrs), [
    r.showIcon ? (n(), a("span", {
      key: 0,
      class: _(["ui-alert-icon", i.iconToneClass]),
      "aria-hidden": "true"
    }, [
      p(e.$slots, "icon", {}, () => [
        b(o, {
          name: i.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : f("", !0),
    c("div", Ft, [
      r.title ? (n(), a("p", Nt, m(r.title), 1)) : f("", !0),
      r.description ? (n(), a("p", Yt, m(r.description), 1)) : f("", !0),
      e.$slots.default ? (n(), a("div", Ht, [
        p(e.$slots, "default")
      ])) : f("", !0)
    ]),
    r.dismissible ? (n(), k(d, {
      key: 1,
      "native-type": "button",
      variant: "ghost",
      color: "secondary",
      cubed: "",
      size: "sm",
      class: "ui-alert-dismiss shrink-0",
      "prefix-icon": "xmark",
      "aria-label": i.dismissLabel,
      onClick: i.onDismiss
    }, null, 8, ["aria-label", "onClick"])) : f("", !0)
  ], 16, Et);
}
const jt = /* @__PURE__ */ v(Bt, [["render", Wt]]), Kt = ["sm", "md", "lg"], Ie = {
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg"
}, Ae = Object.freeze({
  A: { bg: "hsla(0, 72%, 52%, 0.18)", fg: "hsl(0, 65%, 48%)" },
  B: { bg: "hsla(25, 88%, 52%, 0.18)", fg: "hsl(25, 75%, 45%)" },
  C: { bg: "hsla(38, 92%, 50%, 0.18)", fg: "hsl(38, 80%, 42%)" },
  D: { bg: "hsla(48, 96%, 48%, 0.18)", fg: "hsl(48, 85%, 40%)" },
  E: { bg: "hsla(58, 90%, 46%, 0.18)", fg: "hsl(58, 78%, 38%)" },
  F: { bg: "hsla(75, 72%, 42%, 0.18)", fg: "hsl(75, 65%, 36%)" },
  G: { bg: "hsla(88, 62%, 42%, 0.18)", fg: "hsl(88, 55%, 36%)" },
  H: { bg: "hsla(100, 58%, 40%, 0.18)", fg: "hsl(100, 52%, 34%)" },
  I: { bg: "hsla(142, 58%, 40%, 0.18)", fg: "hsl(142, 52%, 34%)" },
  J: { bg: "hsla(158, 62%, 38%, 0.18)", fg: "hsl(158, 55%, 32%)" },
  K: { bg: "hsla(168, 64%, 38%, 0.18)", fg: "hsl(168, 58%, 32%)" },
  L: { bg: "hsla(175, 68%, 40%, 0.18)", fg: "hsl(175, 60%, 34%)" },
  M: { bg: "hsla(186, 72%, 42%, 0.18)", fg: "hsl(186, 65%, 36%)" },
  N: { bg: "hsla(198, 76%, 44%, 0.18)", fg: "hsl(198, 68%, 38%)" },
  O: { bg: "hsla(210, 78%, 48%, 0.18)", fg: "hsl(210, 70%, 42%)" },
  P: { bg: "hsla(225, 76%, 52%, 0.18)", fg: "hsl(225, 68%, 46%)" },
  Q: { bg: "hsla(238, 72%, 56%, 0.18)", fg: "hsl(238, 65%, 50%)" },
  R: { bg: "hsla(252, 68%, 58%, 0.18)", fg: "hsl(252, 62%, 52%)" },
  S: { bg: "hsla(268, 64%, 58%, 0.18)", fg: "hsl(268, 58%, 52%)" },
  T: { bg: "hsla(282, 62%, 56%, 0.18)", fg: "hsl(282, 56%, 50%)" },
  U: { bg: "hsla(296, 58%, 54%, 0.18)", fg: "hsl(296, 52%, 48%)" },
  V: { bg: "hsla(310, 62%, 52%, 0.18)", fg: "hsl(310, 56%, 46%)" },
  W: { bg: "hsla(322, 66%, 50%, 0.18)", fg: "hsl(322, 60%, 44%)" },
  X: { bg: "hsla(334, 70%, 50%, 0.18)", fg: "hsl(334, 64%, 44%)" },
  Y: { bg: "hsla(346, 74%, 52%, 0.18)", fg: "hsl(346, 68%, 46%)" },
  Z: { bg: "hsla(358, 78%, 52%, 0.18)", fg: "hsl(358, 72%, 46%)" },
  default: { bg: "hsla(220, 14%, 50%, 0.15)", fg: "hsl(220, 12%, 45%)" }
}), Le = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function Gt(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return Le[t] && (t = Le[t]), t >= "A" && t <= "Z" ? t : "default";
}
function Ut(e) {
  var s;
  const t = (e || "").trim();
  if (!t) return "?";
  const r = t.split(/\s+/).filter(Boolean);
  if (r.length >= 2) {
    const l = r[0][0] || "", i = r[r.length - 1][0] || "";
    return `${l}${i}`.toLocaleUpperCase("tr-TR");
  }
  return (((s = r[0]) == null ? void 0 : s[0]) || "?").toLocaleUpperCase("tr-TR");
}
const qt = {
  name: "Avatar",
  inheritAttrs: !1,
  props: {
    /** Görsel URL; yüklenemezse baş harf yedeği gösterilir. */
    src: {
      type: String,
      default: ""
    },
    /** Tam ad; baş harf ve renk üretimi için birincil kaynak. */
    name: {
      type: String,
      default: ""
    },
    /** `img` alt metni. */
    alt: {
      type: String,
      default: ""
    },
    /** Harf yedek metni (ör. `JD`). Boşsa `name` / `alt` kullanılır. */
    fallback: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Kt.includes(e)
    },
    ring: {
      type: Boolean,
      default: !1
    },
    interactive: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  data() {
    return {
      imageFailed: !1
    };
  },
  computed: {
    rootTag() {
      return this.interactive ? "button" : "span";
    },
    rootClass() {
      return S(
        "ui-avatar",
        Ie[this.size] || Ie.md,
        this.ring ? "ui-avatar--ring" : "",
        this.interactive ? "ui-avatar--interactive" : "",
        this.showLetterTone ? "ui-avatar--letter" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
      return t;
    },
    rootBind() {
      if (!this.interactive)
        return this.passthroughAttrs;
      const e = this.passthroughAttrs["aria-label"] != null && this.passthroughAttrs["aria-label"] !== "" ? this.passthroughAttrs["aria-label"] : this.resolvedAlt;
      return {
        ...this.passthroughAttrs,
        "aria-label": e
      };
    },
    initialsSource() {
      return this.name != null && this.name.trim() !== "" ? this.name.trim() : this.fallback != null && this.fallback.trim() !== "" ? this.fallback.trim() : (this.alt || "").trim();
    },
    displayInitials() {
      return Ut(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? Gt(e[0]) : "default";
    },
    letterColors() {
      return Ae[this.colorLetterKey] || Ae.default;
    },
    showLetterTone() {
      return (!this.src || this.imageFailed) && this.displayInitials !== "?";
    },
    rootStyle() {
      if (this.showLetterTone)
        return {
          backgroundColor: this.letterColors.bg,
          color: this.letterColors.fg
        };
    },
    resolvedAlt() {
      return this.alt != null && this.alt !== "" ? this.alt : this.initialsSource ? this.initialsSource : this.displayInitials !== "?" ? `Avatar: ${this.displayInitials}` : "Avatar";
    }
  },
  watch: {
    src() {
      this.imageFailed = !1;
    }
  },
  methods: {
    onRootClick(e) {
      this.interactive && this.$emit("click", e);
    }
  }
}, Qt = ["src", "alt"], Zt = ["role", "aria-label", "aria-hidden"];
function Xt(e, t, r, s, l, i) {
  return n(), k(U(i.rootTag), x({
    type: r.interactive ? "button" : void 0,
    class: i.rootClass,
    style: i.rootStyle
  }, i.rootBind, { onClick: i.onRootClick }), {
    default: w(() => [
      r.src && !l.imageFailed ? (n(), a("img", {
        key: 0,
        src: r.src,
        alt: i.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (o) => l.imageFailed = !0)
      }, null, 40, Qt)) : (n(), a("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: r.interactive ? void 0 : "img",
        "aria-label": r.interactive ? void 0 : i.resolvedAlt,
        "aria-hidden": r.interactive ? "true" : void 0
      }, m(i.displayInitials), 9, Zt))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const Jt = /* @__PURE__ */ v(qt, [["render", Xt]]);
let ei = 0;
const ti = ["top", "bottom", "left", "right"], ii = {
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
      validator: (e) => ti.includes(e)
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
      tooltipId: `ui-tooltip-${++ei}`,
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
      const t = e.getBoundingClientRect(), r = 8, s = t.left + t.width / 2, l = t.top + t.height / 2;
      let i = {};
      switch (this.placement) {
        case "bottom":
          i = {
            left: `${s}px`,
            top: `${t.bottom + r}px`,
            transform: "translate(-50%, 0)"
          };
          break;
        case "left":
          i = {
            left: `${t.left - r}px`,
            top: `${l}px`,
            transform: "translate(-100%, -50%)"
          };
          break;
        case "right":
          i = {
            left: `${t.right + r}px`,
            top: `${l}px`,
            transform: "translate(0, -50%)"
          };
          break;
        case "top":
        default:
          i = {
            left: `${s}px`,
            top: `${t.top - r}px`,
            transform: "translate(-50%, -100%)"
          };
      }
      this.panelStyle = i;
    }
  }
}, ri = ["id"], ni = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function si(e, t, r, s, l, i) {
  return n(), a("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...o) => i.onEnter && i.onEnter(...o)),
    onMouseleave: t[1] || (t[1] = (...o) => i.onLeave && i.onLeave(...o)),
    onFocusin: t[2] || (t[2] = (...o) => i.onFocusIn && i.onFocusIn(...o)),
    onFocusout: t[3] || (t[3] = (...o) => i.onFocusOut && i.onFocusOut(...o))
  }, [
    p(e.$slots, "default"),
    (n(), k(Q, { to: "body" }, [
      b(ne, { name: "ui-tooltip-fade" }, {
        default: w(() => [
          l.open && !r.disabled && i.hasContent ? (n(), a("div", {
            key: 0,
            id: l.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed z-[300]",
            style: B(l.panelStyle),
            role: "tooltip"
          }, [
            c("span", ni, [
              p(e.$slots, "content", {}, () => [
                M(m(r.label), 1)
              ])
            ])
          ], 12, ri)) : f("", !0)
        ]),
        _: 3
      })
    ]))
  ], 544);
}
const ye = /* @__PURE__ */ v(ii, [["render", si]]), li = ["solid", "secondary", "outline"], ai = ["sm", "md", "lg"], $e = {
  solid: "border border-transparent bg-primary text-primary-foreground",
  secondary: "border border-transparent bg-secondary text-secondary-foreground",
  outline: "border border-border bg-transparent text-foreground"
}, ze = {
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, de = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  full: "max-w-full"
};
function oi(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let r = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(r) && (r = `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}`), /^#[0-9A-Fa-f]{6}$/.test(r) ? r.toUpperCase() : "";
}
function ui(e) {
  const t = parseInt(e.slice(1, 3), 16), r = parseInt(e.slice(3, 5), 16), s = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * r + 0.114 * s) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const di = {
  name: "Badge",
  components: { Tooltip: ye },
  props: {
    variant: {
      type: String,
      default: "solid",
      validator: (e) => li.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => ai.includes(e)
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
      validator: (e) => Object.keys(de).includes(e)
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
      return this.truncate ? de[this.maxWidth] || de[32] : "max-w-full";
    },
    hasAdornment() {
      return !!(this.$slots.prepend || this.$slots.append);
    },
    normalizedHex() {
      return oi(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: ui(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return [
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        ze[this.size] || ze.sm,
        !this.normalizedHex && ($e[this.variant] || $e.solid)
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
}, ci = {
  key: 0,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, hi = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function fi(e, t, r, s, l, i) {
  const o = y("Tooltip");
  return n(), k(o, {
    label: i.tooltipLabel,
    disabled: !i.showTooltip,
    placement: "top"
  }, {
    default: w(() => [
      c("span", {
        class: _(i.badgeClasses),
        style: B(i.hexBadgeStyle)
      }, [
        e.$slots.prepend ? (n(), a("span", ci, [
          p(e.$slots, "prepend")
        ])) : f("", !0),
        c("span", {
          ref: "labelRef",
          class: _(["ui-badge-label", i.labelWidthClass])
        }, [
          p(e.$slots, "default")
        ], 2),
        e.$slots.append ? (n(), a("span", hi, [
          p(e.$slots, "append")
        ])) : f("", !0)
      ], 6)
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const kt = /* @__PURE__ */ v(di, [["render", fi]]), mi = ["sm", "md", "lg"], pi = ["solid", "outline", "ghost", "link"], gi = ["primary", "secondary", "input", "warning", "success", "info"], bi = ["button", "submit", "reset"], De = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Ve = {
  sm: "aspect-square size-8 shrink-0 p-0 !min-h-0 text-xs leading-4",
  md: "aspect-square size-9 shrink-0 p-0 !min-h-0 text-sm leading-5",
  lg: "aspect-square size-11 shrink-0 p-0 !min-h-0 text-base leading-6"
}, yi = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Pe = {
  solid: {
    primary: "border border-transparent bg-primary text-primary-foreground shadow-none hover:opacity-90",
    secondary: "border border-transparent bg-secondary text-secondary-foreground shadow-none hover:opacity-90",
    input: "border border-transparent shadow-none",
    warning: "border border-transparent bg-warning text-warning-foreground shadow-none hover:opacity-90",
    success: "border border-transparent bg-success text-success-foreground shadow-none hover:opacity-90",
    info: "border border-transparent bg-info text-info-foreground shadow-none hover:opacity-90"
  },
  outline: {
    primary: "border border-border bg-transparent text-foreground shadow-none hover:bg-muted/60",
    secondary: "border border-border bg-transparent text-foreground shadow-none hover:bg-muted/60",
    warning: "shadow-none border border-warning bg-transparent text-warning hover:bg-warning/10",
    success: "shadow-none border border-success bg-transparent text-success hover:bg-success/10",
    info: "shadow-none border border-info bg-transparent text-info hover:bg-info/10"
  },
  ghost: {
    primary: "shadow-none border border-transparent bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground",
    secondary: "shadow-none border border-transparent bg-transparent text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground",
    warning: "shadow-none border border-transparent bg-transparent text-warning hover:bg-warning hover:text-warning-foreground",
    success: "shadow-none border border-transparent bg-transparent text-success hover:bg-success hover:text-success-foreground",
    info: "shadow-none border border-transparent bg-transparent text-info hover:bg-info hover:text-info-foreground"
  },
  link: {
    primary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none font-medium text-primary underline-offset-4 hover:underline",
    secondary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-secondary-foreground underline-offset-4 hover:underline",
    warning: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-warning underline-offset-4 hover:underline",
    success: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-success underline-offset-4 hover:underline",
    info: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-info underline-offset-4 hover:underline"
  }
}, vi = {
  name: "Button",
  components: { RouterLink: zt },
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
      validator: (e) => bi.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => pi.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => gi.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => mi.includes(e)
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
      this.cubed && !e ? t = Ve[this.size] || Ve.md : e ? t = yi[this.size] : t = De[this.size] || De.md;
      let r = "";
      return e || (this.rounded && !this.cubed || this.cubed) && (r = "rounded-full"), [
        "ui-button ui-control font-sans",
        Pe[this.variant][this.color] || Pe.solid.primary,
        t,
        this.fulled ? "ui-button--fulled w-full" : "",
        r,
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
}, _i = ["href", "data-variant", "data-color", "aria-disabled", "tabindex", "onClick"], ki = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, wi = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, xi = {
  key: 0,
  class: "sr-only"
}, Si = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Ci = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ti = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ii = ["type", "disabled", "data-variant", "data-color"], Ai = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, Li = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, $i = {
  key: 0,
  class: "sr-only"
}, zi = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Di = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Vi = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Pi(e, t, r, s, l, i) {
  const o = y("ui-icon"), d = y("RouterLink");
  return i.hasRouterTo ? (n(), k(d, {
    key: 0,
    to: r.to,
    custom: ""
  }, {
    default: w(({ href: u, navigate: h }) => [
      c("a", {
        href: u,
        class: _(i.buttonClasses),
        "data-variant": r.variant,
        "data-color": r.color,
        "aria-disabled": i.isDisabled ? "true" : void 0,
        tabindex: i.isDisabled ? -1 : void 0,
        onClick: (g) => i.onRouterLinkClick(g, h)
      }, [
        r.loading && i.usesCubedCenterLayout ? (n(), a("span", ki, [
          b(o, {
            size: i.cubedIconSize,
            name: "spinner",
            class: "fa-spin"
          }, null, 8, ["size"])
        ])) : r.loading ? (n(), a(A, { key: 1 }, [
          c("span", wi, [
            b(o, {
              size: i.inlineIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          c("span", {
            class: _(i.textContentClass)
          }, [
            i.resolvedLoadingText ? (n(), a("span", xi, m(i.resolvedLoadingText), 1)) : p(e.$slots, "default", { key: 1 })
          ], 2)
        ], 64)) : i.usesCubedCenterLayout ? (n(), a("span", Si, [
          r.prefixIcon ? (n(), k(o, {
            key: 0,
            size: i.cubedIconSize,
            name: r.prefixIcon
          }, null, 8, ["size", "name"])) : r.suffixIcon ? (n(), k(o, {
            key: 1,
            size: i.cubedIconSize,
            name: r.suffixIcon
          }, null, 8, ["size", "name"])) : p(e.$slots, "default", { key: 2 })
        ])) : (n(), a(A, { key: 3 }, [
          r.prefixIcon ? (n(), a("span", Ci, [
            b(o, {
              size: i.inlineIconSize,
              name: r.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          c("span", {
            class: _(i.textContentClass)
          }, [
            p(e.$slots, "default")
          ], 2),
          r.suffixIcon ? (n(), a("span", Ti, [
            b(o, {
              size: i.inlineIconSize,
              name: r.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 10, _i)
    ]),
    _: 3
  }, 8, ["to"])) : (n(), a("button", {
    key: 1,
    type: r.nativeType,
    disabled: i.isDisabled,
    class: _(i.buttonClasses),
    "data-variant": r.variant,
    "data-color": r.color,
    onClick: t[0] || (t[0] = (...u) => i.onClick && i.onClick(...u))
  }, [
    r.loading && i.usesCubedCenterLayout ? (n(), a("span", Ai, [
      b(o, {
        size: i.cubedIconSize,
        name: "spinner",
        class: "fa-spin"
      }, null, 8, ["size"])
    ])) : r.loading ? (n(), a(A, { key: 1 }, [
      c("span", Li, [
        b(o, {
          size: i.inlineIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      c("span", {
        class: _(i.textContentClass)
      }, [
        i.resolvedLoadingText ? (n(), a("span", $i, m(i.resolvedLoadingText), 1)) : p(e.$slots, "default", { key: 1 })
      ], 2)
    ], 64)) : i.usesCubedCenterLayout ? (n(), a("span", zi, [
      r.prefixIcon ? (n(), k(o, {
        key: 0,
        size: i.cubedIconSize,
        name: r.prefixIcon
      }, null, 8, ["size", "name"])) : r.suffixIcon ? (n(), k(o, {
        key: 1,
        size: i.cubedIconSize,
        name: r.suffixIcon
      }, null, 8, ["size", "name"])) : p(e.$slots, "default", { key: 2 })
    ])) : (n(), a(A, { key: 3 }, [
      r.prefixIcon ? (n(), a("span", Di, [
        b(o, {
          size: i.inlineIconSize,
          name: r.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      c("span", {
        class: _(i.textContentClass)
      }, [
        p(e.$slots, "default")
      ], 2),
      r.suffixIcon ? (n(), a("span", Vi, [
        b(o, {
          size: i.inlineIconSize,
          name: r.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 10, Ii));
}
const Mi = /* @__PURE__ */ v(vi, [["render", Pi]]), Ri = ["none", "sm", "md"], Me = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, Oi = {
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
      validator: (e) => Ri.includes(e)
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
      return ["ui-divider", Me[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        Me[this.spacing] || "",
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
}, Bi = { class: "ui-divider__label" }, Ei = {
  key: 1,
  class: "ui-section-label"
};
function Fi(e, t, r, s, l, i) {
  const o = y("ui-icon");
  return i.hasLabel ? (n(), a("div", x({
    key: 1,
    class: i.labeledClass
  }, i.labeledAttrs), [
    t[0] || (t[0] = c("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    c("span", Bi, [
      r.icon ? (n(), k(o, {
        key: 0,
        name: r.icon,
        size: "sm",
        class: "text-muted-foreground"
      }, null, 8, ["name"])) : f("", !0),
      r.title ? (n(), a("span", Ei, m(r.title), 1)) : f("", !0)
    ]),
    t[1] || (t[1] = c("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1))
  ], 16)) : (n(), a("hr", x({
    key: 0,
    class: i.rootClass
  }, i.rootAttrs), null, 16));
}
const ue = /* @__PURE__ */ v(Oi, [["render", Fi]]), Ni = ["solid", "dashed", "dotted", "double"], Re = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Yi = ["solid", "regular", "brands", "light", "duotone", "thin"], Hi = {
  name: "Card",
  components: { Divider: ue },
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
      validator: (e) => Ni.includes(e)
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
      validator: (e) => Yi.includes(e)
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
      return Re[this.borderType] || Re.solid;
    },
    rootClasses() {
      const e = [
        "ui-surface",
        "ui-card",
        ...this.border ? ["border", this.borderStyleClass] : ["border-0", "border-transparent"]
      ];
      return this.removePadding && e.push("ui-card--no-padding"), this.transparent && e.push("ui-card--transparent"), S(e.join(" "), this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Wi = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, ji = {
  key: 0,
  class: "ui-header-lead"
}, Ki = { class: "ui-header-lead__main" }, Gi = {
  key: 0,
  class: "ui-header-lead__icon"
}, Ui = { class: "ui-header-lead__text" }, qi = {
  key: 0,
  class: "ui-heading-3"
}, Qi = {
  key: 1,
  class: "ui-text-default"
}, Zi = {
  key: 0,
  class: "ui-header-lead__actions"
};
function Xi(e, t, r, s, l, i) {
  const o = y("ui-icon"), d = y("Divider");
  return n(), a("div", x({ class: i.rootClasses }, i.passthroughAttrs), [
    e.$slots.toolbar ? (n(), a("div", Wi, [
      p(e.$slots, "toolbar")
    ])) : f("", !0),
    i.hasHeaderBlock ? (n(), a("div", {
      key: 1,
      class: _(["ui-card-header shrink-0", { "ui-card-header--inset": r.removePadding }])
    }, [
      p(e.$slots, "header", {}, () => [
        i.hasDefaultHeader ? (n(), a("div", ji, [
          c("div", Ki, [
            r.icon ? (n(), a("span", Gi, [
              b(o, {
                name: r.icon,
                type: r.iconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            c("div", Ui, [
              r.title ? (n(), a("h3", qi, m(r.title), 1)) : f("", !0),
              r.description ? (n(), a("p", Qi, m(r.description), 1)) : f("", !0)
            ])
          ]),
          e.$slots.append || e.$slots.actions ? (n(), a("div", Zi, [
            p(e.$slots, "append"),
            p(e.$slots, "actions")
          ])) : f("", !0)
        ])) : f("", !0)
      ])
    ], 2)) : f("", !0),
    i.showHeaderDivider ? (n(), k(d, {
      key: 2,
      spacing: "none",
      class: "!my-0 shrink-0"
    })) : f("", !0),
    e.$slots.default ? (n(), a("div", {
      key: 3,
      class: _(["ui-card-body ui-text-default", {
        "ui-card-body--row": r.row,
        "ui-card-body--flush": r.removePadding
      }])
    }, [
      p(e.$slots, "default")
    ], 2)) : f("", !0),
    e.$slots.footer ? (n(), a("div", {
      key: 4,
      class: _(["ui-card-footer", { "ui-card-footer--inset": r.removePadding }])
    }, [
      p(e.$slots, "footer")
    ], 2)) : f("", !0)
  ], 16);
}
const Ji = /* @__PURE__ */ v(Hi, [["render", Xi]]), er = [
  "#f87171",
  "#fb923c",
  "#fbbf24",
  "#facc15",
  "#a3e635",
  "#4ade80",
  "#34d399",
  "#2dd4bf",
  "#22d3ee",
  "#38bdf8",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#e879f9",
  "#f472b6",
  "#fb7185",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
  "#b91c1c",
  "#c2410c",
  "#b45309",
  "#4d7c0f",
  "#15803d",
  "#047857",
  "#0f766e",
  "#0e7490",
  "#0369a1",
  "#1d4ed8",
  "#4338ca",
  "#6d28d9",
  "#7e22ce",
  "#a21caf",
  "#be185d"
], tr = {
  name: "ColorPicker",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    triggerPlaceholder: {
      type: String,
      default: ""
    },
    popoverTitle: {
      type: String,
      default: ""
    },
    clearLabel: {
      type: String,
      default: ""
    },
    customColorLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      popoverOpen: !1,
      presetColors: er
    };
  },
  computed: {
    localColor: {
      get() {
        return this.modelValue || "";
      },
      set(e) {
        this.$emit("update:modelValue", e || null);
      }
    },
    triggerLabel() {
      return this.triggerPlaceholder || this.$t("ui.colorPicker.triggerPlaceholder");
    },
    popoverTitleLabel() {
      return this.popoverTitle || this.$t("ui.colorPicker.popoverTitle");
    },
    clearLabelText() {
      return this.clearLabel || this.$t("ui.colorPicker.clear");
    },
    customColorLabelText() {
      return this.customColorLabel || this.$t("ui.colorPicker.customHex");
    }
  },
  methods: {
    selectColor(e) {
      this.localColor = e;
    },
    clearColor() {
      this.localColor = "", this.$emit("update:modelValue", null), this.popoverOpen = !1;
    },
    normalizeHex() {
      const e = String(this.localColor || "").trim();
      if (!e) return;
      let t = e.startsWith("#") ? e : `#${e}`;
      /^#[0-9A-Fa-f]{3}$/.test(t) && (t = `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`), /^#[0-9A-Fa-f]{6}$/.test(t) && (this.localColor = t.toUpperCase());
    }
  }
}, ir = { class: "ui-color-picker w-full min-w-0" }, rr = { class: "inline-flex min-w-0 flex-1 items-center gap-2 text-foreground" }, nr = { class: "truncate" }, sr = { class: "space-y-3 p-3" }, lr = { class: "flex items-center justify-between gap-2" }, ar = { class: "text-xs font-medium uppercase tracking-wider text-muted-foreground" }, or = { class: "grid grid-cols-8 gap-1.5" }, ur = ["title", "onClick"], dr = { class: "border-t border-border pt-3" }, cr = { class: "mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground" }, hr = { class: "flex items-center gap-2" };
function fr(e, t, r, s, l, i) {
  const o = y("ui-button"), d = y("ui-icon"), u = y("ui-input"), h = y("ui-popover");
  return n(), a("div", ir, [
    b(h, {
      open: l.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (g) => l.popoverOpen = g),
      placement: "bottom-start",
      width: "18rem"
    }, {
      trigger: w(({ toggle: g }) => [
        b(o, {
          type: "button",
          variant: "solid",
          color: "input",
          rounded: "",
          fulled: "",
          "text-align": "left",
          "prefix-icon": i.localColor ? void 0 : "palette",
          disabled: r.disabled,
          "aria-haspopup": !0,
          onClick: g
        }, {
          default: w(() => [
            c("span", rr, [
              i.localColor ? (n(), a("span", {
                key: 0,
                class: "size-4 shrink-0 rounded-full border border-border shadow-sm",
                style: B({ backgroundColor: i.localColor }),
                "aria-hidden": "true"
              }, null, 4)) : f("", !0),
              c("span", nr, m(i.localColor || i.triggerLabel), 1)
            ])
          ]),
          _: 1
        }, 8, ["prefix-icon", "disabled", "onClick"])
      ]),
      content: w(() => [
        c("div", sr, [
          c("div", lr, [
            c("span", ar, m(i.popoverTitleLabel), 1),
            i.localColor ? (n(), k(o, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: L(i.clearColor, ["stop"])
            }, {
              default: w(() => [
                M(m(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          c("div", or, [
            (n(!0), a(A, null, V(l.presetColors, (g) => (n(), a("button", {
              key: g,
              type: "button",
              class: "flex h-6 w-6 items-center justify-center rounded-md border border-border shadow-sm transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95",
              style: B({ backgroundColor: g }),
              title: g,
              onClick: (T) => i.selectColor(g)
            }, [
              i.localColor === g ? (n(), k(d, {
                key: 0,
                name: "check",
                type: "solid",
                class: "text-sm leading-none text-white mix-blend-difference"
              })) : f("", !0)
            ], 12, ur))), 128))
          ]),
          c("div", dr, [
            c("span", cr, m(i.customColorLabelText), 1),
            c("div", hr, [
              b(u, {
                modelValue: i.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (g) => i.localColor = g),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: i.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              c("span", {
                class: "size-9 shrink-0 rounded-lg border border-border shadow-sm",
                style: B({ backgroundColor: i.localColor || "transparent" }),
                "aria-hidden": "true"
              }, null, 4)
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open"])
  ]);
}
const mr = /* @__PURE__ */ v(tr, [["render", fr]]), Oe = {
  "₺": "TRY",
  $: "USD",
  "€": "EUR",
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR"
}, te = {
  TRY: "₺",
  USD: "$",
  EUR: "€"
};
function ve(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in te ? t : "TRY";
  const r = String(e).trim();
  if (Oe[r])
    return Oe[r];
  const s = r.toUpperCase();
  return te[s] ? s : t in te ? t : "TRY";
}
function wt(e) {
  var r;
  const t = ve(e);
  if (te[t])
    return te[t];
  try {
    const l = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: t,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((i) => i.type === "currency");
    return ((r = l == null ? void 0 : l.value) == null ? void 0 : r.trim()) || t;
  } catch {
    return t;
  }
}
function zd(e, t, r = "tr-TR") {
  const s = Number(e) || 0, l = ve(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: l }).format(s);
  } catch {
    return `${wt(l)}${s.toFixed(2)}`;
  }
}
function pr(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const s = t.slice(0, r), l = t.slice(r + 1).replace(/\./g, "");
    t = `${s}.${l}`;
  }
  return t;
}
let Be = 0;
const gr = ["sm", "md", "lg"], br = {
  name: "CurrencyInput",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /** ISO veya sembol (TRY, ₺, …); verilmezse `TRY` (seeder varsayılanı). */
    currency: {
      type: String,
      default: "TRY"
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => gr.includes(e)
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
      default: "off"
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur"],
  data() {
    return Be += 1, { fallbackId: `ui-currency-input-${Be}` };
  },
  computed: {
    displaySymbol() {
      return wt(this.currency);
    },
    resolvedCurrencyCode() {
      return ve(this.currency);
    },
    innerValue: {
      get() {
        return this.modelValue == null ? "" : String(this.modelValue);
      },
      set(e) {
        const t = pr(e);
        this.$emit("update:modelValue", t);
      }
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set([
        "class",
        "style",
        "value",
        "id",
        "disabled",
        "readonly",
        "placeholder",
        "name",
        "autocomplete",
        "currency",
        "size"
      ]), t = {};
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
      return t;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, yr = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function vr(e, t, r, s, l, i) {
  const o = y("ui-input");
  return n(), k(o, x({
    id: i.resolvedId,
    modelValue: i.innerValue,
    "onUpdate:modelValue": t[0] || (t[0] = (d) => i.innerValue = d),
    type: "text",
    inputmode: "decimal",
    class: "w-full",
    size: r.size,
    disabled: r.disabled,
    readonly: r.readonly,
    placeholder: r.placeholder,
    name: r.name,
    autocomplete: r.autocomplete,
    "aria-describedby": r.ariaDescribedby
  }, i.passthroughAttrs, {
    onFocus: t[1] || (t[1] = (d) => e.$emit("focus", d)),
    onBlur: i.onBlur
  }), {
    prepend: w(() => [
      c("span", yr, m(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const _r = /* @__PURE__ */ v(br, [["render", vr]]), kr = {
  name: "Checkbox",
  inject: {
    uiCheckboxGroup: {
      default: null
    }
  },
  props: {
    /** Grup modunda seçenek kimliği. */
    value: {
      type: [String, Number, Boolean],
      default: void 0
    },
    /** Tekil mod: `v-model` boolean. */
    modelValue: {
      type: Boolean,
      default: void 0
    },
    label: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** `list` varyantında seçili satır vurgusu (hover değil, yalnızca işaretliyken). */
    highlight: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  computed: {
    inGroup() {
      return this.uiCheckboxGroup != null;
    },
    isChecked() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue;
        return Array.isArray(e) ? e.some((t) => Object.is(t, this.value)) : !1;
      }
      return !!this.modelValue;
    },
    nativeType() {
      return "checkbox";
    },
    nativeName() {
      return this.inGroup ? this.uiCheckboxGroup.groupName : void 0;
    },
    groupValueString() {
      if (this.inGroup)
        return String(this.value);
    },
    checkboxClasses() {
      return [
        "ui-checkbox",
        `ui-checkbox--${this.inGroup && this.uiCheckboxGroup != null ? this.uiCheckboxGroup.normalizedVariant : "list"}`,
        {
          "ui-checkbox--checked": this.isChecked,
          "ui-checkbox--highlight": this.highlight && this.isChecked
        }
      ];
    }
  },
  methods: {
    onNativeChange(e) {
      if (this.inGroup) {
        const t = e.target.checked, r = this.uiCheckboxGroup.modelValue, s = Array.isArray(r) ? [...r] : [], l = s.findIndex((i) => Object.is(i, this.value));
        t && l === -1 ? s.push(this.value) : !t && l !== -1 && s.splice(l, 1), this.uiCheckboxGroup.$emit("update:modelValue", s);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, t = Array.isArray(e) ? [...e] : [], r = t.findIndex((s) => Object.is(s, this.value));
        r === -1 ? t.push(this.value) : t.splice(r, 1), this.uiCheckboxGroup.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, wr = ["type", "name", "value", "checked"], xr = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, Sr = { class: "ui-checkbox-body" }, Cr = {
  key: 0,
  class: "ui-checkbox-label"
}, Tr = {
  key: 1,
  class: "ui-checkbox-description"
};
function Ir(e, t, r, s, l, i) {
  const o = y("ui-icon");
  return n(), a("label", {
    class: _(i.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = q(L((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["enter"])),
      t[2] || (t[2] = q(L((...d) => i.toggle && i.toggle(...d), ["prevent"]), ["space"]))
    ]
  }, [
    c("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...d) => i.onNativeChange && i.onNativeChange(...d))
    }, null, 40, wr),
    c("span", xr, [
      i.isChecked ? (n(), k(o, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    c("span", Sr, [
      e.$slots.label || r.label ? (n(), a("span", Cr, [
        p(e.$slots, "label", {}, () => [
          M(m(r.label), 1)
        ])
      ])) : f("", !0),
      r.description ? (n(), a("span", Tr, m(r.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Ar = /* @__PURE__ */ v(kr, [["render", Ir]]), Lr = ["list", "button", "List", "Button"];
let Ee = 0;
const $r = {
  name: "CheckboxGroup",
  props: {
    /** Seçili değerler dizisi (ilkel karşılaştırma). */
    modelValue: {
      type: Array,
      default: () => []
    },
    /** `list` — dikey liste; `button` — yan yana kart seçenekleri (RadioGroup `button` ile aynı yüzey). */
    variant: {
      type: String,
      default: "list",
      validator: (e) => Lr.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return Ee += 1, { groupName: `ui-checkbox-group-${Ee}` };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    }
  },
  provide() {
    return {
      uiCheckboxGroup: this
    };
  }
}, zr = ["aria-label"];
function Dr(e, t, r, s, l, i) {
  return n(), a("div", {
    class: _(["ui-checkbox-group", `ui-checkbox-group--${i.normalizedVariant}`]),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    p(e.$slots, "default")
  ], 10, zr);
}
const Vr = /* @__PURE__ */ v($r, [["render", Dr]]), z = ge({
  open: !1,
  title: "",
  description: "",
  /** Boşsa i18n `ui.confirm.ok` */
  confirmLabel: "",
  /** Boşsa i18n `ui.confirm.cancel` */
  cancelLabel: "",
  destructive: !1,
  /** @type {((value: boolean) => void) | null} */
  _resolve: null
});
function Pr(e = {}) {
  return new Promise((t) => {
    z.title = e.title ?? "", z.description = e.description ?? "", z.confirmLabel = e.confirmLabel ?? "", z.cancelLabel = e.cancelLabel ?? "", z.destructive = !!e.destructive, z._resolve = t, z.open = !0;
  });
}
function ce(e) {
  const t = z._resolve;
  z.open = !1, z._resolve = null, t && t(!!e);
}
const Mr = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return z;
    },
    syncOpen: {
      get() {
        return z.open;
      },
      set(e) {
        e ? z.open = !0 : z._resolve ? ce(!1) : z.open = !1;
      }
    },
    confirmText() {
      return z.confirmLabel ? z.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    cancelText() {
      return z.cancelLabel ? z.cancelLabel : typeof this.$t == "function" ? this.$t("ui.confirm.cancel") : "İptal";
    },
    fallbackAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.confirm.fallbackAria") : "Onay";
    }
  },
  methods: {
    onConfirm() {
      ce(!0);
    },
    onCancel() {
      ce(!1);
    }
  }
};
function Rr(e, t, r, s, l, i) {
  const o = y("ui-button"), d = y("ui-dialog");
  return n(), k(d, {
    open: i.syncOpen,
    "onUpdate:open": t[0] || (t[0] = (u) => i.syncOpen = u),
    "stack-layer": "confirm",
    "max-width": "sm",
    title: i.confirmState.title,
    description: i.confirmState.description,
    "header-divider": "",
    "close-on-backdrop": !0,
    "close-on-escape": !0,
    "aria-label": i.confirmState.title || i.fallbackAriaLabel
  }, {
    footer: w(() => [
      b(o, {
        color: "secondary",
        rounded: "",
        onClick: i.onCancel
      }, {
        default: w(() => [
          M(m(i.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      b(o, {
        rounded: "",
        color: i.confirmState.destructive ? "warning" : "primary",
        onClick: i.onConfirm
      }, {
        default: w(() => [
          M(m(i.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    _: 1
  }, 8, ["open", "title", "description", "aria-label"]);
}
const Or = /* @__PURE__ */ v(Mr, [["render", Rr]]);
let Fe = 0;
function Ne(e) {
  return String(e).padStart(2, "0");
}
function N(e) {
  return `${e.getFullYear()}-${Ne(e.getMonth() + 1)}-${Ne(e.getDate())}`;
}
function he(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const r = Number(t[1]), s = Number(t[2]) - 1, l = Number(t[3]), i = new Date(r, s, l);
  return i.getFullYear() !== r || i.getMonth() !== s || i.getDate() !== l ? null : i;
}
const Br = {
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
    Fe += 1;
    const e = Fe, t = he(this.modelValue) || /* @__PURE__ */ new Date();
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
      return he(this.modelValue);
    },
    displayText() {
      return this.selectedDate ? N(this.selectedDate) : this.placeholder;
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
      const e = this.viewYear, t = this.viewMonth, r = new Date(e, t, 1), s = new Date(e, t, 1 - r.getDay()), l = [];
      for (let i = 0; i < 42; i += 1) {
        const o = new Date(s.getFullYear(), s.getMonth(), s.getDate() + i), d = o.getMonth() === t && o.getFullYear() === e, u = o.getDate(), h = N(o), g = `${o.getFullYear()}-${o.getMonth()}-${o.getDate()}`, T = !!(this.selectedDate && h === N(this.selectedDate)), C = N(/* @__PURE__ */ new Date()) === h, I = !!(this.minYmd && h < this.minYmd);
        l.push({
          key: g,
          d: u,
          out: !d,
          date: o,
          sel: T,
          today: C,
          inMonth: d,
          disabled: I
        });
      }
      return l;
    }
  },
  watch: {
    modelValue() {
      const e = he(this.modelValue);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    }
  },
  methods: {
    isQuickDateDisabled(e) {
      if (!e) return !0;
      const t = N(e);
      return !!(this.minYmd && t < this.minYmd);
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const r = N(e.date);
      this.$emit("update:modelValue", r), this.$emit("change", r), t();
    },
    pickQuick(e, t) {
      const r = /* @__PURE__ */ new Date();
      if (e === "yesterday" && r.setDate(r.getDate() - 1), this.isQuickDateDisabled(r)) return;
      const s = N(r);
      this.viewYear = r.getFullYear(), this.viewMonth = r.getMonth(), this.$emit("update:modelValue", s), this.$emit("change", s), t();
    },
    dayVariant(e) {
      return e.sel ? "solid" : e.today && !e.sel ? "outline" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, Er = { class: "min-w-0 flex-1 truncate text-foreground" }, Fr = { class: "ui-datepicker-panel w-full min-w-[17rem] p-2" }, Nr = { class: "mb-2 flex items-center justify-between gap-2" }, Yr = { class: "text-sm font-medium tabular-nums text-foreground" }, Hr = { class: "ui-datepicker-grid" }, Wr = { class: "ui-datepicker-quick" };
function jr(e, t, r, s, l, i) {
  const o = y("ui-button"), d = y("ui-popover");
  return n(), a("div", {
    class: _(["ui-datepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    b(d, {
      open: l.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (u) => l.menuOpen = u),
      placement: "bottom-start",
      "match-trigger-width": !0,
      disabled: r.disabled
    }, {
      trigger: w(({ open: u, toggle: h }) => [
        b(o, {
          type: "button",
          id: i.resolvedId,
          variant: "solid",
          color: "input",
          rounded: "",
          fulled: "",
          "text-align": "left",
          "prefix-icon": "calendar",
          disabled: r.disabled,
          "aria-expanded": u ? "true" : "false",
          "aria-haspopup": !0,
          onClick: h
        }, {
          default: w(() => [
            c("span", Er, m(i.displayText), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: w(({ close: u }) => [
        c("div", Fr, [
          c("div", Nr, [
            b(o, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              "aria-label": "Previous month",
              onClick: t[0] || (t[0] = L((h) => i.shiftMonth(-1), ["stop"]))
            }),
            c("span", Yr, m(i.monthTitle), 1),
            b(o, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-right",
              "aria-label": "Next month",
              onClick: t[1] || (t[1] = L((h) => i.shiftMonth(1), ["stop"]))
            })
          ]),
          t[3] || (t[3] = c("div", { class: "mb-1 grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase text-muted-foreground" }, [
            c("span", null, "Su"),
            c("span", null, "Mo"),
            c("span", null, "Tu"),
            c("span", null, "We"),
            c("span", null, "Th"),
            c("span", null, "Fr"),
            c("span", null, "Sa")
          ], -1)),
          c("div", Hr, [
            (n(!0), a(A, null, V(i.calendarCells, (h) => (n(), k(o, {
              key: h.key,
              variant: i.dayVariant(h),
              color: i.dayColor(h),
              cubed: "",
              size: "sm",
              disabled: h.disabled,
              "aria-selected": h.sel ? "true" : "false",
              "aria-disabled": h.disabled ? "true" : void 0,
              "data-outside": h.inMonth ? void 0 : "true",
              onClick: (g) => i.pick(h, u)
            }, {
              default: w(() => [
                M(m(h.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "onClick"]))), 128))
          ]),
          c("div", Wr, [
            b(o, {
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: i.todayQuickDisabled,
              onClick: (h) => i.pickQuick("today", u)
            }, {
              default: w(() => [
                M(m(i.resolvedTodayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            b(o, {
              type: "button",
              variant: "outline",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: i.yesterdayQuickDisabled,
              onClick: (h) => i.pickQuick("yesterday", u)
            }, {
              default: w(() => [
                M(m(i.resolvedYesterdayLabel), 1)
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
const Kr = /* @__PURE__ */ v(Br, [["render", jr]]);
let Ye = 0;
function ie(e) {
  return String(e).padStart(2, "0");
}
function K(e) {
  return `${e.getFullYear()}-${ie(e.getMonth() + 1)}-${ie(e.getDate())}`;
}
function se(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const r = Number(t[1]), s = Number(t[2]) - 1, l = Number(t[3]), i = new Date(r, s, l);
  return i.getFullYear() !== r || i.getMonth() !== s || i.getDate() !== l ? null : i;
}
function Y(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function fe(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function He(e, t, r, s) {
  const l = `${e}-${ie(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let o = `${e}-${ie(t + 1)}-${ie(i)}`;
  if (r && o > r && (o = r), s && l < s && o < s) return null;
  let d = l;
  return s && d < s && (d = s), Y(d, o) > 0 ? null : [d, o];
}
const Gr = {
  name: "DateRangePicker",
  inheritAttrs: !1,
  props: {
    /** `[startYmd, endYmd]` */
    modelValue: {
      type: Array,
      default: () => ["", ""]
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: void 0
    },
    min: {
      type: String,
      default: ""
    },
    max: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    var s, l;
    Ye += 1;
    const e = Ye, t = ((s = this.modelValue) == null ? void 0 : s[0]) || "", r = se(t) || se((l = this.modelValue) == null ? void 0 : l[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: `ui-daterangepicker-${e}`,
      menuOpen: !1,
      viewYear: r.getFullYear(),
      viewMonth: r.getMonth(),
      pickingStart: "",
      pickingEnd: "",
      hoverYmd: ""
    };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    popoverWidth() {
      return "min(calc(100vw - 2rem), 50rem)";
    },
    locale() {
      var e;
      return ((e = this.$i18n) == null ? void 0 : e.locale) || "tr";
    },
    startYmd() {
      var e;
      return String(((e = this.modelValue) == null ? void 0 : e[0]) || "").trim();
    },
    endYmd() {
      var e;
      return String(((e = this.modelValue) == null ? void 0 : e[1]) || "").trim();
    },
    resolvedPlaceholder() {
      return this.placeholder ? this.placeholder : typeof this.$t == "function" ? this.$t("ui.dateRangePicker.placeholder") : "Select date range";
    },
    displayText() {
      return !this.startYmd && !this.endYmd ? this.resolvedPlaceholder : this.formatDisplay(this.startYmd, this.endYmd);
    },
    rightView() {
      const e = new Date(this.viewYear, this.viewMonth + 1, 1);
      return { year: e.getFullYear(), month: e.getMonth() };
    },
    minYmd() {
      return this.min ? String(this.min).trim() : "";
    },
    maxYmd() {
      return this.max ? String(this.max).trim() : "";
    },
    resolvedPrevMonthLabel() {
      return typeof this.$t == "function" ? this.$t("ui.dateRangePicker.prevMonth") : "Previous month";
    },
    resolvedNextMonthLabel() {
      return typeof this.$t == "function" ? this.$t("ui.dateRangePicker.nextMonth") : "Next month";
    },
    resolvedQuickAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.dateRangePicker.quickAria") : "Quick range presets";
    },
    rangeHint() {
      return !this.pickingStart || this.pickingEnd ? "" : typeof this.$t == "function" ? this.$t("ui.dateRangePicker.selectEnd") : "Select end date";
    },
    previewStart() {
      return this.pickingStart || this.startYmd;
    },
    previewEnd() {
      if (this.pickingEnd) return this.pickingEnd;
      if (this.pickingStart && this.hoverYmd) {
        const e = this.pickingStart, t = this.hoverYmd;
        return Y(e, t) <= 0 ? t : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      const e = /* @__PURE__ */ new Date(), t = K(e), r = new Date(e);
      r.setDate(r.getDate() - 1);
      const s = K(r), l = e.getMonth(), i = e.getFullYear(), o = new Date(i, l - 1, 1), d = o.getFullYear(), u = o.getMonth(), h = (T, C) => typeof this.$t == "function" ? this.$t(T, C) : T;
      return [
        {
          key: "today",
          label: h("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: h("ui.dateRangePicker.yesterday"),
          range: [s, s]
        },
        {
          key: "thisMonth",
          label: h("ui.dateRangePicker.thisMonth", {
            month: fe(i, l, this.locale)
          }),
          range: He(i, l, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: fe(d, u, this.locale)
          }),
          range: He(d, u, this.maxYmd, this.minYmd)
        }
      ].map((T) => ({
        ...T,
        disabled: !T.range || this.isRangeDisabled(T.range[0], T.range[1])
      }));
    },
    calendarPanes() {
      const e = {
        key: "left",
        year: this.viewYear,
        month: this.viewMonth,
        showPrev: !0,
        showNext: !1
      }, t = {
        key: "right",
        year: this.rightView.year,
        month: this.rightView.month,
        showPrev: !1,
        showNext: !0
      };
      return [e, t].map((r) => ({
        ...r,
        title: fe(r.year, r.month, this.locale),
        cells: this.buildCellsForMonth(r.year, r.month)
      }));
    }
  },
  watch: {
    modelValue: {
      deep: !0,
      handler() {
        this.syncViewFromValue(), this.menuOpen || (this.pickingStart = "", this.pickingEnd = "", this.hoverYmd = "");
      }
    },
    menuOpen(e) {
      e ? (this.pickingStart = this.startYmd, this.pickingEnd = this.endYmd, this.hoverYmd = "", this.syncViewFromValue()) : (this.pickingStart = "", this.pickingEnd = "", this.hoverYmd = "");
    }
  },
  methods: {
    syncViewFromValue() {
      const e = se(this.startYmd) || se(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, t) {
      const r = (s) => {
        if (!s) return "…";
        const [l, i, o] = String(s).split("-");
        return `${o}.${i}.${l}`;
      };
      return !e && !t ? this.resolvedPlaceholder : e === t || !t ? r(e || t) : `${r(e)} – ${r(t)}`;
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    isRangeDisabled(e, t) {
      return !!(!e || !t || this.minYmd && t < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, t) {
      const r = new Date(e, t, 1), s = new Date(e, t, 1 - r.getDay()), l = this.previewStart, i = this.previewEnd, o = l && i, d = [];
      for (let u = 0; u < 42; u += 1) {
        const h = new Date(s.getFullYear(), s.getMonth(), s.getDate() + u), g = h.getMonth() === t && h.getFullYear() === e, T = h.getDate(), C = K(h), I = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, $ = K(/* @__PURE__ */ new Date()) === C, P = !!(this.minYmd && C < this.minYmd) || !!(this.maxYmd && C > this.maxYmd);
        let R = !1, O = !1;
        if (o) {
          const D = Y(l, i) <= 0 ? l : i, F = Y(l, i) <= 0 ? i : l;
          R = Y(C, D) >= 0 && Y(C, F) <= 0, O = C === D || C === F;
        }
        d.push({
          key: I,
          d: T,
          date: h,
          today: $,
          inMonth: g,
          disabled: P,
          inRange: R,
          endpoint: O
        });
      }
      return d;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = K(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [r, s] = e.range;
      this.pickingStart = r, this.pickingEnd = s, this.$emit("update:modelValue", [r, s]), this.$emit("change", [r, s]), t();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const r = K(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let s = this.pickingStart, l = r;
      if (Y(l, s) < 0) {
        const i = s;
        s = l, l = i;
      }
      this.pickingStart = s, this.pickingEnd = l, this.$emit("update:modelValue", [s, l]), this.$emit("change", [s, l]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : e.inRange ? "ghost" : e.today ? "outline" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, Ur = { class: "min-w-0 flex-1 truncate text-foreground" }, qr = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, Qr = { class: "ui-daterangepicker-layout" }, Zr = ["aria-label"], Xr = { class: "ui-daterangepicker-calendars" }, Jr = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, en = { class: "ui-daterangepicker-month-row" }, tn = { class: "mb-2 flex items-center justify-between gap-2" }, rn = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, nn = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, sn = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, ln = { class: "ui-datepicker-grid" };
function an(e, t, r, s, l, i) {
  const o = y("ui-button"), d = y("ui-popover");
  return n(), a("div", {
    class: _(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    b(d, {
      open: l.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (u) => l.menuOpen = u),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: w(({ open: u, toggle: h }) => [
        b(o, {
          type: "button",
          id: i.resolvedId,
          variant: "solid",
          color: "input",
          rounded: "",
          fulled: "",
          "text-align": "left",
          "prefix-icon": "calendar",
          disabled: r.disabled,
          "aria-expanded": u ? "true" : "false",
          "aria-haspopup": !0,
          onClick: h
        }, {
          default: w(() => [
            c("span", Ur, m(i.displayText), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: w(({ close: u }) => [
        c("div", qr, [
          c("div", Qr, [
            c("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": i.resolvedQuickAriaLabel
            }, [
              (n(!0), a(A, null, V(i.quickPresets, (h) => (n(), k(o, {
                key: h.key,
                type: "button",
                variant: "outline",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: h.disabled,
                onClick: (g) => i.applyQuick(h, u)
              }, {
                default: w(() => [
                  M(m(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, Zr),
            c("div", Xr, [
              i.rangeHint ? (n(), a("p", Jr, m(i.rangeHint), 1)) : f("", !0),
              c("div", en, [
                (n(!0), a(A, null, V(i.calendarPanes, (h) => (n(), a("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  c("div", tn, [
                    h.showPrev ? (n(), k(o, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = L((g) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (n(), a("span", rn)),
                    c("span", nn, m(h.title), 1),
                    h.showNext ? (n(), k(o, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = L((g) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (n(), a("span", sn))
                  ]),
                  t[3] || (t[3] = c("div", { class: "mb-1 grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase text-muted-foreground" }, [
                    c("span", null, "Su"),
                    c("span", null, "Mo"),
                    c("span", null, "Tu"),
                    c("span", null, "We"),
                    c("span", null, "Th"),
                    c("span", null, "Fr"),
                    c("span", null, "Sa")
                  ], -1)),
                  c("div", ln, [
                    (n(!0), a(A, null, V(h.cells, (g) => (n(), k(o, {
                      key: g.key,
                      variant: i.dayVariant(g),
                      color: i.dayColor(g),
                      cubed: "",
                      size: "sm",
                      disabled: g.disabled,
                      "aria-selected": g.endpoint ? "true" : "false",
                      "aria-disabled": g.disabled ? "true" : void 0,
                      "data-outside": g.inMonth ? void 0 : "true",
                      "data-in-range": g.inRange && !g.endpoint ? "true" : void 0,
                      "data-range-endpoint": g.endpoint ? "true" : void 0,
                      onMouseenter: (T) => i.onCellHover(g),
                      onClick: (T) => i.pick(g, u)
                    }, {
                      default: w(() => [
                        M(m(g.d), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-in-range", "data-range-endpoint", "onMouseenter", "onClick"]))), 128))
                  ])
                ]))), 128))
              ])
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const on = /* @__PURE__ */ v(Gr, [["render", an]]), un = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"])'
].join(","), dn = [
  "button.ui-select-field:not([disabled])",
  "button.ui-pin-cell:not([disabled])"
].join(",");
function cn(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function We(e, t, { skipFooter: r = !1 } = {}) {
  if (!e) return null;
  for (const s of e.querySelectorAll(t))
    if (cn(s) && !(r && s.closest(".ui-card-footer")))
      return s;
  return null;
}
function hn(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), r = [];
  for (const s of t)
    r.includes(s) || r.push(s);
  return r;
}
function je(e, { skipFooter: t = !1 } = {}) {
  const r = We(e, un, { skipFooter: t });
  if (r)
    return r.focus(), !0;
  const s = We(e, dn, { skipFooter: t });
  return s ? (s.focus(), !0) : !1;
}
function fn(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && je(t))
    return !0;
  for (const r of hn(e))
    if (je(r, { skipFooter: r === e }))
      return !0;
  return !1;
}
const mn = "(max-width: 767px)";
function xt() {
  return typeof window > "u" ? !1 : window.matchMedia(mn).matches;
}
let Ke = 0;
const pn = ["solid", "dashed", "dotted", "double"], Ge = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, gn = ["solid", "regular", "brands", "light", "duotone", "thin"], bn = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"], Ue = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl"
}, yn = {
  name: "Dialog",
  components: { Divider: ue },
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
      validator: (e) => bn.includes(e)
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
      validator: (e) => pn.includes(e)
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
      validator: (e) => gn.includes(e)
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
    Ke += 1;
    const e = Ke;
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
      return Ge[this.borderType] || Ge.solid;
    },
    maxWidthClass() {
      return Ue[this.maxWidth] || Ue.lg;
    },
    panelClasses() {
      const e = this.border ? S("border", this.borderStyleClass) : S("border-0", "border-transparent");
      return S(
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
      return S(
        "ui-dialog-root fixed inset-0 flex items-center justify-center p-4 outline-none",
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
        const t = (r) => {
          r.target === e && (e.removeEventListener("transitionend", t), this.clearFocusFallback(), this.runInitialFocus());
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
      e && fn(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
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
      if (!xt() || e.button !== 0) return;
      const t = this.$refs.panelRef;
      if (!t) return;
      e.preventDefault(), this.teardownSheetDrag();
      const r = e.clientY, s = t.style.transition;
      t.style.transition = "none";
      const l = (d) => {
        const u = Math.max(0, d.clientY - r);
        t.style.transform = `translateY(${u}px)`;
      }, i = (d) => {
        const u = Math.max(0, d.clientY - r);
        t.style.transition = s, t.style.transform = "", u >= 72 && this.close(), this.teardownSheetDrag();
      }, o = () => {
        t.style.transition = s, t.style.transform = "", this.teardownSheetDrag();
      };
      window.addEventListener("pointermove", l), window.addEventListener("pointerup", i), window.addEventListener("pointercancel", o), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", i), window.removeEventListener("pointercancel", o);
      };
    }
  }
}, vn = ["aria-labelledby", "aria-describedby", "aria-label"], _n = {
  key: 0,
  class: "ui-card-header shrink-0"
}, kn = {
  key: 0,
  class: "ui-dialog-header__icon"
}, wn = ["id"], xn = {
  key: 2,
  class: "ui-dialog-header__actions"
}, Sn = ["id"], Cn = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, Tn = {
  key: 4,
  class: "ui-card-footer"
};
function In(e, t, r, s, l, i) {
  const o = y("ui-icon"), d = y("ui-button"), u = y("Divider");
  return n(), k(Q, { to: "body" }, [
    b(ne, {
      name: "ui-overlay-dialog",
      appear: "",
      onAfterEnter: i.onOverlayAfterEnter,
      onAfterLeave: i.onOverlayAfterLeave
    }, {
      default: w(() => [
        r.open ? (n(), a("div", {
          key: 0,
          ref: "layerRef",
          class: _(i.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[3] || (t[3] = (...h) => i.onLayerKeydown && i.onLayerKeydown(...h))
        }, [
          c("div", {
            class: "ui-dialog-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...h) => i.onBackdrop && i.onBackdrop(...h))
          }),
          c("div", x({
            ref: "panelRef",
            class: i.panelClasses,
            role: "dialog",
            "aria-modal": "true",
            tabindex: "-1",
            "aria-labelledby": i.ariaLabelledby,
            "aria-describedby": i.ariaDescribedby,
            "aria-label": i.ariaLabelAttr
          }, i.passthroughAttrs, {
            onClick: t[2] || (t[2] = L(() => {
            }, ["stop"]))
          }), [
            c("div", {
              class: "ui-dialog-sheet-grab shrink-0",
              onPointerdown: t[1] || (t[1] = (...h) => i.onSheetPointerDown && i.onSheetPointerDown(...h))
            }, [...t[4] || (t[4] = [
              c("div", {
                class: "ui-dialog-sheet-handle",
                "aria-hidden": "true"
              }, null, -1)
            ])], 32),
            i.hasHeaderBlock ? (n(), a("div", _n, [
              p(e.$slots, "header", {}, () => [
                i.hasDefaultHeader ? (n(), a("div", {
                  key: 0,
                  class: _(["ui-dialog-header", { "ui-dialog-header--no-icon": !r.icon }])
                }, [
                  r.icon ? (n(), a("span", kn, [
                    b(o, {
                      name: r.icon,
                      type: r.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  r.title ? (n(), a("h3", {
                    key: 1,
                    id: l.titleId,
                    class: "ui-dialog-header__title ui-heading-3"
                  }, m(r.title), 9, wn)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (n(), a("div", xn, [
                    p(e.$slots, "append"),
                    p(e.$slots, "actions")
                  ])) : f("", !0),
                  r.showClose ? (n(), k(d, {
                    key: 3,
                    type: "button",
                    variant: "solid",
                    color: "secondary",
                    size: "sm",
                    cubed: "",
                    "prefix-icon": "xmark",
                    "aria-label": i.resolvedCloseLabel,
                    onClick: i.close
                  }, null, 8, ["aria-label", "onClick"])) : f("", !0),
                  r.description ? (n(), a("p", {
                    key: 4,
                    id: l.descriptionId,
                    class: "ui-dialog-header__description ui-text-default"
                  }, m(r.description), 9, Sn)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (n(), a("div", Cn, [
              p(e.$slots, "toolbar")
            ])) : f("", !0),
            i.showHeaderDivider ? (n(), k(u, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (n(), a("div", {
              key: 3,
              class: _(["ui-card-body ui-text-default", { "ui-card-body--row": r.row }])
            }, [
              p(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (n(), a("div", Tn, [
              p(e.$slots, "footer")
            ])) : f("", !0)
          ], 16, vn)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["onAfterEnter", "onAfterLeave"])
  ]);
}
const An = /* @__PURE__ */ v(yn, [["render", In]]), Ln = ["bottom-start", "bottom-end", "bottom"], $n = {
  name: "Dropdown",
  components: { Divider: ue },
  inheritAttrs: !1,
  props: {
    /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir */
    open: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => Ln.includes(e)
    },
    matchTriggerWidth: {
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
    outsideClickIgnoreSelector: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:open", "select"],
  data() {
    return {
      internalOpen: !1
    };
  },
  computed: {
    isOpen: {
      get() {
        return this.open !== void 0 ? this.open : this.internalOpen;
      },
      set(e) {
        this.open !== void 0 ? this.$emit("update:open", e) : this.internalOpen = e;
      }
    }
  },
  methods: {
    onOpenChange(e) {
      this.isOpen = e;
    },
    onItem(e, t) {
      e.disabled || (this.$emit("select", e), t());
    }
  }
};
function zn(e, t, r, s, l, i) {
  const o = y("Divider"), d = y("ui-button"), u = y("ui-popover");
  return n(), k(u, {
    open: i.isOpen,
    placement: r.placement,
    "match-trigger-width": r.matchTriggerWidth,
    "close-on-outside-click": r.closeOnOutsideClick,
    "close-on-escape": r.closeOnEscape,
    "outside-click-ignore-selector": r.outsideClickIgnoreSelector,
    "onUpdate:open": i.onOpenChange
  }, {
    trigger: w((h) => [
      p(e.$slots, "trigger", yt(vt(h)))
    ]),
    content: w(({ close: h }) => [
      c("div", {
        class: "ui-dropdown-menu min-w-[10rem] p-3",
        role: "menu",
        onClick: t[0] || (t[0] = L(() => {
        }, ["stop"]))
      }, [
        e.$slots.menu ? p(e.$slots, "menu", {
          key: 0,
          close: h
        }) : (n(!0), a(A, { key: 1 }, V(r.items, (g, T) => (n(), a(A, { key: T }, [
          g.divider ? (n(), k(o, {
            key: 0,
            spacing: "sm"
          })) : (n(), k(d, {
            key: 1,
            variant: "ghost",
            color: "secondary",
            rounded: "",
            fulled: "",
            "text-align": "left",
            role: "menuitem",
            "prefix-icon": g.icon || null,
            disabled: g.disabled,
            onClick: L((C) => i.onItem(g, h), ["stop"])
          }, {
            default: w(() => [
              M(m(g.label), 1)
            ]),
            _: 2
          }, 1032, ["prefix-icon", "disabled", "onClick"]))
        ], 64))), 128))
      ])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Dn = /* @__PURE__ */ v($n, [["render", zn]]), Vn = ["solid", "regular", "brands", "light", "duotone", "thin"], Pn = ["sm", "md", "lg"], Mn = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, Rn = {
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
      validator: (e) => Vn.includes(e)
    },
    /** `sm` | `md` | `lg` — padding, ikon kutusu, başlık ve açıklama ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Pn.includes(e)
    }
  },
  computed: {
    iconSize() {
      return Mn[this.size] ?? "md";
    },
    resolvedIcon() {
      return this.icon == null || this.icon === "" ? null : this.icon;
    },
    rootClass() {
      return S("ui-empty", `ui-empty--${this.size}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, On = {
  key: 0,
  class: "ui-empty-icon"
}, Bn = {
  key: 1,
  class: "ui-empty-title"
}, En = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, Fn = {
  key: 3,
  class: "ui-empty-actions"
};
function Nn(e, t, r, s, l, i) {
  const o = y("ui-icon");
  return n(), a("div", x({ class: i.rootClass }, i.passthroughAttrs), [
    i.resolvedIcon ? (n(), a("div", On, [
      b(o, {
        name: i.resolvedIcon,
        type: r.iconType,
        size: i.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    r.title ? (n(), a("h2", Bn, m(r.title), 1)) : f("", !0),
    r.description ? (n(), a("p", En, m(r.description), 1)) : f("", !0),
    e.$slots.default ? (n(), a("div", Fn, [
      p(e.$slots, "default")
    ])) : f("", !0)
  ], 16);
}
const Yn = /* @__PURE__ */ v(Rn, [["render", Nn]]), Hn = ["solid", "regular", "brands", "light", "duotone", "thin"], Wn = {
  name: "Field",
  inheritAttrs: !1,
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    /** true: yuvarlatılmış arka plan (kenarlık yok). */
    card: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: ""
    },
    iconType: {
      type: String,
      default: "light",
      validator: (e) => Hn.includes(e)
    }
  },
  computed: {
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    hasValue() {
      return !!this.$slots.default;
    },
    showIcon() {
      return !!this.icon;
    },
    rootClass() {
      return S("ui-field", this.card && "ui-field--card", this.$attrs.class);
    }
  }
}, jn = {
  key: 0,
  class: "ui-field__title-row"
}, Kn = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, Gn = {
  key: 1,
  class: "ui-field__title"
}, Un = {
  key: 1,
  class: "ui-field__value"
}, qn = {
  key: 2,
  class: "ui-field__subtitle"
};
function Qn(e, t, r, s, l, i) {
  const o = y("ui-icon");
  return n(), a("div", x({ class: i.rootClass }, i.passthroughAttrs), [
    r.title || i.showIcon ? (n(), a("div", jn, [
      i.showIcon ? (n(), a("span", Kn, [
        b(o, {
          name: r.icon,
          type: r.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : f("", !0),
      r.title ? (n(), a("span", Gn, m(r.title), 1)) : f("", !0)
    ])) : f("", !0),
    i.hasValue ? (n(), a("div", Un, [
      p(e.$slots, "default")
    ])) : f("", !0),
    r.subtitle ? (n(), a("p", qn, m(r.subtitle), 1)) : f("", !0)
  ], 16);
}
const Zn = /* @__PURE__ */ v(Wn, [["render", Qn]]), Xn = ["auto", "file", "folder"], Jn = ["sm", "md", "lg"], es = { icon: "folder", color: "text-sky-500" }, ts = { icon: "file-lines", color: "text-muted-foreground" }, is = {
  pdf: { icon: "file-pdf", color: "text-red-500" },
  doc: { icon: "file-word", color: "text-blue-600" },
  docx: { icon: "file-word", color: "text-blue-600" },
  xls: { icon: "file-excel", color: "text-green-600" },
  xlsx: { icon: "file-excel", color: "text-green-600" },
  csv: { icon: "file-lines", color: "text-emerald-600" },
  ppt: { icon: "file-powerpoint", color: "text-orange-600" },
  pptx: { icon: "file-powerpoint", color: "text-orange-600" },
  png: { icon: "file-image", color: "text-violet-500" },
  jpg: { icon: "file-image", color: "text-violet-500" },
  jpeg: { icon: "file-image", color: "text-violet-500" },
  gif: { icon: "file-image", color: "text-violet-500" },
  webp: { icon: "file-image", color: "text-violet-500" },
  svg: { icon: "file-image", color: "text-orange-500" },
  ico: { icon: "file-image", color: "text-amber-600" },
  mp4: { icon: "file-video", color: "text-purple-600" },
  mov: { icon: "file-video", color: "text-purple-600" },
  webm: { icon: "file-video", color: "text-purple-600" },
  mkv: { icon: "file-video", color: "text-purple-600" },
  mp3: { icon: "file-audio", color: "text-pink-500" },
  wav: { icon: "file-audio", color: "text-pink-500" },
  flac: { icon: "file-audio", color: "text-pink-500" },
  zip: { icon: "file-zipper", color: "text-amber-600" },
  rar: { icon: "file-zipper", color: "text-amber-600" },
  "7z": { icon: "file-zipper", color: "text-amber-600" },
  gz: { icon: "file-zipper", color: "text-amber-600" },
  tar: { icon: "file-zipper", color: "text-amber-600" },
  js: { icon: "file-code", color: "text-yellow-500" },
  mjs: { icon: "file-code", color: "text-yellow-500" },
  ts: { icon: "file-code", color: "text-blue-500" },
  vue: { icon: "file-code", color: "text-green-500" },
  jsx: { icon: "file-code", color: "text-cyan-500" },
  tsx: { icon: "file-code", color: "text-sky-400" },
  json: { icon: "file-code", color: "text-slate-500" },
  yaml: { icon: "file-code", color: "text-slate-500" },
  yml: { icon: "file-code", color: "text-slate-500" },
  html: { icon: "file-code", color: "text-orange-600" },
  htm: { icon: "file-code", color: "text-orange-600" },
  css: { icon: "file-code", color: "text-blue-500" },
  scss: { icon: "file-code", color: "text-pink-600" },
  md: { icon: "file-lines", color: "text-foreground" },
  txt: { icon: "file-lines", color: "text-muted-foreground" },
  rtf: { icon: "file-lines", color: "text-muted-foreground" },
  log: { icon: "file-lines", color: "text-muted-foreground" }
}, qe = {
  sm: {
    shell: "min-h-[3.25rem] min-w-[3.25rem] rounded-xl px-2.5 py-2.5",
    icon: "md",
    iconBoost: "",
    label: "text-[11px] leading-4",
    root: "max-w-[6rem]"
  },
  md: {
    shell: "min-h-[4.25rem] min-w-[4.25rem] rounded-2xl px-3.5 py-3.5",
    icon: "lg",
    iconBoost: "",
    label: "text-xs leading-4",
    root: "max-w-[9rem]"
  },
  lg: {
    shell: "min-h-[5.75rem] min-w-[5.75rem] rounded-[1.25rem] px-5 py-5",
    icon: "lg",
    iconBoost: "scale-[1.4]",
    label: "text-sm leading-5",
    root: "max-w-[12rem]"
  }
};
function oe(e) {
  return String(e ?? "").trim();
}
function rs(e) {
  const t = oe(e);
  return /[/\\]\s*$/.test(t);
}
function St(e) {
  const t = oe(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function ns(e) {
  const t = St(e), r = t.lastIndexOf(".");
  return r <= 0 || r === t.length - 1 ? "" : t.slice(r + 1).toLowerCase();
}
const Qe = {
  default: "",
  foreground: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary-foreground",
  sky: "text-sky-500",
  blue: "text-blue-500",
  red: "text-red-500",
  green: "text-green-600",
  amber: "text-amber-600",
  violet: "text-violet-500",
  purple: "text-purple-600",
  orange: "text-orange-600",
  pink: "text-pink-500",
  yellow: "text-yellow-500",
  cyan: "text-cyan-500",
  emerald: "text-emerald-600"
}, ss = {
  name: "File",
  props: {
    /** Dosya veya klasör adı (veya yol — `basename-only` ile yalnız son parça gösterilir) */
    name: {
      type: String,
      required: !0
    },
    /** `auto`: sonda `/` veya `\\` → klasör; aksi dosya */
    kind: {
      type: String,
      default: "auto",
      validator: (e) => Xn.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Jn.includes(e)
    },
    /** Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır */
    icon: {
      type: String,
      default: ""
    },
    /** FA ağırlığı — çoğu ikon `solid`; gerekirse `brands` vb. */
    iconType: {
      type: String,
      default: "light"
    },
    /** İkon rengi: `NAMED_ICON_COLORS` anahtarı veya doğrudan Tailwind sınıfı (`text-red-500`) */
    color: {
      type: String,
      default: ""
    },
    /** true: etikette yalnızca yolun son segmenti */
    basenameOnly: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    preset() {
      return qe[this.size] || qe.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : rs(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = oe(this.name);
      return e ? this.basenameOnly ? St(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return oe(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return es;
      const e = ns(this.name);
      return is[e] || ts;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? this.iconType : this.inferredMeta.type || "solid";
    },
    resolvedColorClass() {
      return this.color ? Qe[this.color] !== void 0 ? Qe[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
    },
    iconClasses() {
      const e = this.preset.iconBoost;
      return [this.resolvedColorClass, e].filter(Boolean);
    },
    iconSizeToken() {
      return this.preset.icon;
    },
    shellClasses() {
      return this.preset.shell;
    },
    folderShellClass() {
      return this.resolvedKind === "folder" ? "ui-file-icon-shell--folder" : "";
    },
    labelClass() {
      return this.preset.label;
    },
    rootSizeClass() {
      return this.preset.root;
    }
  }
}, ls = ["aria-label"], as = ["title"];
function os(e, t, r, s, l, i) {
  const o = y("ui-icon");
  return n(), a("div", {
    class: _(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    c("div", {
      class: _(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
    }, [
      b(o, {
        name: i.resolvedIcon,
        type: i.resolvedIconType,
        size: i.iconSizeToken,
        class: _(i.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    c("span", {
      class: _(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, m(i.displayLabel), 11, as)
  ], 10, ls);
}
const us = /* @__PURE__ */ v(ss, [["render", os]]);
let Ze = 0;
const ds = ["vertical", "horizontal"], cs = ["default", "card"], hs = {
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
      validator: (e) => ds.includes(e)
    },
    /**
     * `default`: mevcut `direction` düzeni.
     * `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`.
     */
    variant: {
      type: String,
      default: "default",
      validator: (e) => cs.includes(e)
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
    Ze += 1;
    const e = Ze;
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
}, fs = ["data-primary-field"], ms = {
  key: 0,
  class: "ui-form-row-text"
}, ps = ["for"], gs = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, bs = ["id"], ys = { class: "ui-form-row-control" };
function vs(e, t, r, s, l, i) {
  return n(), a("div", {
    class: _(["ui-form-row", i.rootLayoutClass]),
    "data-primary-field": r.primary ? "" : void 0
  }, [
    i.hasTextBlock ? (n(), a("div", ms, [
      r.label || e.$slots.action ? (n(), a("div", {
        key: 0,
        class: _(i.labelLineClass)
      }, [
        r.label ? (n(), a("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: i.controlId
        }, m(r.label), 9, ps)) : f("", !0),
        e.$slots.action ? (n(), a("div", gs, [
          p(e.$slots, "action")
        ])) : f("", !0)
      ], 2)) : f("", !0),
      r.description ? (n(), a("p", {
        key: 1,
        id: i.descriptionId,
        class: "ui-text-default"
      }, m(r.description), 9, bs)) : f("", !0)
    ])) : f("", !0),
    c("div", ys, [
      p(e.$slots, "default", {
        controlId: i.controlId,
        descriptionId: i.descriptionId
      })
    ])
  ], 10, fs);
}
const _s = /* @__PURE__ */ v(hs, [["render", vs]]), ks = ["solid", "regular", "brands", "light", "duotone", "thin"], Xe = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, ws = ["xs", "sm", "md", "lg"], xs = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none"
}, Ss = {
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
      validator: (e) => ks.includes(e)
    },
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => ws.includes(e)
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
      return Xe[this.type] || Xe.light;
    },
    iconClass() {
      return S(
        "ui-icon not-italic inline-block shrink-0",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        xs[this.size],
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
function Cs(e, t, r, s, l, i) {
  return n(), a("i", x({ class: i.iconClass }, i.rootAttrs), null, 16);
}
const Ts = /* @__PURE__ */ v(Ss, [["render", Cs]]);
let Je = 0;
const Is = ["sm", "md", "lg"], As = {
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
      validator: (e) => Is.includes(e)
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
    return Je += 1, { fallbackId: `ui-input-${Je}` };
  },
  computed: {
    resolvedSize() {
      return this.size !== "md" ? this.size : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : "md";
    },
    rootClass() {
      return S(
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
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
      return t;
    }
  },
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value), this.$emit("input", e);
    }
  }
}, Ls = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, $s = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, zs = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], Ds = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], Vs = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Ps = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function Ms(e, t, r, s, l, i) {
  const o = y("ui-icon");
  return n(), a("div", {
    class: _([i.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (n(), a("div", Ls, [
      p(e.$slots, "prepend")
    ])) : f("", !0),
    r.prefixIcon ? (n(), a("span", $s, [
      b(o, {
        name: r.prefixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    r.multiline ? (n(), a("textarea", x({
      key: 2,
      id: i.resolvedId,
      ref: "field",
      class: "ui-input-field ui-input-field--textarea",
      value: r.modelValue,
      rows: r.rows,
      disabled: r.disabled,
      readonly: r.readonly,
      placeholder: r.placeholder,
      name: r.name,
      autocomplete: r.autocomplete,
      maxlength: r.maxlength
    }, i.passthroughAttrs, {
      onInput: t[0] || (t[0] = (...d) => i.onInput && i.onInput(...d)),
      onChange: t[1] || (t[1] = (d) => e.$emit("change", d)),
      onFocus: t[2] || (t[2] = (d) => e.$emit("focus", d)),
      onBlur: t[3] || (t[3] = (d) => e.$emit("blur", d))
    }), null, 16, zs)) : (n(), a("input", x({
      key: 3,
      id: i.resolvedId,
      ref: "field",
      class: "ui-input-field ui-input-field--single",
      type: r.type,
      value: r.modelValue,
      disabled: r.disabled,
      readonly: r.readonly,
      placeholder: r.placeholder,
      name: r.name,
      autocomplete: r.autocomplete,
      maxlength: r.maxlength
    }, i.passthroughAttrs, {
      onInput: t[4] || (t[4] = (...d) => i.onInput && i.onInput(...d)),
      onChange: t[5] || (t[5] = (d) => e.$emit("change", d)),
      onFocus: t[6] || (t[6] = (d) => e.$emit("focus", d)),
      onBlur: t[7] || (t[7] = (d) => e.$emit("blur", d))
    }), null, 16, Ds)),
    r.suffixIcon ? (n(), a("span", Vs, [
      b(o, {
        name: r.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    e.$slots.append ? (n(), a("div", Ps, [
      p(e.$slots, "append")
    ])) : f("", !0)
  ], 2);
}
const Rs = /* @__PURE__ */ v(As, [["render", Ms]]);
function Os(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  t.length >= 8 && (r += 1), t.length >= 12 && (r += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? r += 1 : /[a-zA-Z]/.test(t) && (r += 0.5), /\d/.test(t) && (r += 1), /[^a-zA-Z0-9]/.test(t) && (r += 1);
  const s = Math.min(4, Math.round(r)), l = ["weak", "fair", "good", "strong"], i = s <= 0 ? "weak" : l[Math.min(s - 1, 3)];
  return {
    score: s,
    percent: s / 4 * 100,
    label: i
  };
}
let me = 0;
const Bs = ["sm", "md", "lg"], Es = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => Bs.includes(e)
    },
    modelValue: {
      type: String,
      default: ""
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
      default: "new-password"
    },
    maxlength: {
      type: [Number, String],
      default: void 0
    },
    /** Güç çubuğu ve etiket */
    showStrength: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "focus", "blur"],
  data() {
    return me += 1, {
      fallbackId: `ui-password-${me}`,
      fallbackStrengthId: `ui-password-strength-${me}`,
      visible: !1
    };
  },
  computed: {
    innerValue: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    strength() {
      return Os(this.modelValue);
    },
    strengthVariant() {
      const e = this.strength.label;
      return e === "empty" ? "default" : e;
    },
    hasPasswordValue() {
      return String(this.modelValue ?? "").length > 0;
    },
    showStrengthMeter() {
      return this.showStrength && this.hasPasswordValue;
    },
    strengthDescribedby() {
      if (!this.showStrengthMeter)
        return this.$attrs["aria-describedby"] || void 0;
      const e = this.$attrs["aria-describedby"];
      return e ? `${e} ${this.fallbackStrengthId}` : this.fallbackStrengthId;
    },
    strengthText() {
      const e = this.strength.label;
      return typeof this.$t == "function" ? this.$t(`ui.password.strength.${e}`) : { weak: "Weak", fair: "Fair", good: "Good", strong: "Strong" }[e] || e;
    },
    toggleAriaLabel() {
      return typeof this.$t == "function" ? this.visible ? this.$t("ui.password.hide") : this.$t("ui.password.show") : this.visible ? "Hide password" : "Show password";
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "aria-describedby"]), t = {};
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
      return t;
    }
  }
}, Fs = ["aria-label", "aria-pressed", "disabled"], Ns = ["id", "aria-live"];
function Ys(e, t, r, s, l, i) {
  const o = y("ui-icon"), d = y("ui-input"), u = y("ui-progress");
  return n(), a("div", {
    class: _(["ui-password", [e.$attrs.class]])
  }, [
    b(d, x({
      id: i.resolvedId,
      modelValue: i.innerValue,
      "onUpdate:modelValue": t[1] || (t[1] = (h) => i.innerValue = h),
      type: l.visible ? "text" : "password",
      class: "w-full",
      size: r.size,
      disabled: r.disabled,
      readonly: r.readonly,
      placeholder: r.placeholder,
      name: r.name,
      autocomplete: r.autocomplete,
      maxlength: r.maxlength,
      "aria-describedby": i.strengthDescribedby
    }, i.passthroughAttrs, {
      onFocus: t[2] || (t[2] = (h) => e.$emit("focus", h)),
      onBlur: t[3] || (t[3] = (h) => e.$emit("blur", h))
    }), {
      append: w(() => [
        c("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": i.toggleAriaLabel,
          "aria-pressed": l.visible ? "true" : "false",
          disabled: r.disabled,
          onClick: t[0] || (t[0] = (h) => l.visible = !l.visible)
        }, [
          b(o, {
            name: l.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, Fs)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    i.showStrengthMeter ? (n(), a("div", {
      key: 0,
      id: l.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": i.innerValue ? "polite" : "off"
    }, [
      b(u, {
        type: "bar",
        size: "md",
        value: i.strength.percent,
        variant: i.strengthVariant,
        "aria-valuetext": i.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      i.strength.label !== "empty" ? (n(), a("span", {
        key: 0,
        class: _(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, m(i.strengthText), 3)) : f("", !0)
    ], 8, Ns)) : f("", !0)
  ], 2);
}
const Hs = /* @__PURE__ */ v(Es, [["render", Ys]]);
let et = 0;
const tt = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], Ws = {
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
      default: () => tt
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
    return et += 1, { fallbackId: `ui-phone-number-${et}` };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : tt;
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
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
      return t;
    }
  }
};
function js(e, t, r, s, l, i) {
  const o = y("ui-select"), d = y("ui-input");
  return n(), k(d, x({
    id: i.resolvedNumberId,
    modelValue: i.innerNumber,
    "onUpdate:modelValue": t[1] || (t[1] = (u) => i.innerNumber = u),
    type: "tel",
    inputmode: "tel",
    class: "w-full",
    disabled: r.disabled,
    readonly: r.readonly,
    placeholder: i.resolvedPlaceholder,
    name: r.numberName,
    autocomplete: r.autocomplete,
    maxlength: r.numberMaxlength,
    "aria-describedby": r.ariaDescribedby
  }, i.numberPassthrough, {
    onFocus: t[2] || (t[2] = (u) => e.$emit("focus", u)),
    onBlur: t[3] || (t[3] = (u) => e.$emit("blur", u))
  }), {
    prepend: w(() => [
      b(o, {
        modelValue: i.innerCountry,
        "onUpdate:modelValue": t[0] || (t[0] = (u) => i.innerCountry = u),
        variant: "inline",
        options: i.countryOptions,
        disabled: r.disabled,
        "aria-label": i.resolvedCountryAria
      }, null, 8, ["modelValue", "options", "disabled", "aria-label"])
    ]),
    _: 1
  }, 16, ["id", "modelValue", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]);
}
const Ks = /* @__PURE__ */ v(Ws, [["render", js]]), Gs = ["numeric", "alphanumeric"], Us = {
  name: "Pin",
  inheritAttrs: !1,
  props: {
    /** Tam kod — `v-model` */
    modelValue: {
      type: String,
      default: ""
    },
    /** Hane sayısı */
    length: {
      type: Number,
      default: 6,
      validator: (e) => e >= 1 && e <= 12
    },
    /** `numeric` yalnızca rakam; `alphanumeric` harf + rakam */
    type: {
      type: String,
      default: "numeric",
      validator: (e) => Gs.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    autocomplete: {
      type: String,
      default: "one-time-code"
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "complete", "focus", "blur"],
  data() {
    return {
      activeIndex: 0
    };
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    cells() {
      return String(this.modelValue ?? "").slice(0, this.length).split("");
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.pin.ariaLabel") : "Verification code";
    }
  },
  watch: {
    modelValue(e) {
      const t = this.normalizeValue(e);
      if (t !== e) {
        this.$emit("update:modelValue", t);
        return;
      }
      t.length === this.length && this.$emit("complete", t);
    }
  },
  methods: {
    cellEl(e) {
      const t = this.$refs.cells;
      return Array.isArray(t) ? t[e] : t;
    },
    cellAriaLabel(e) {
      return typeof this.$t == "function" ? this.$t("ui.pin.cell", { n: e + 1, total: this.length }) : `Digit ${e + 1} of ${this.length}`;
    },
    normalizeChar(e) {
      if (!e) return "";
      if (this.type === "numeric")
        return /\d/.test(e) ? e : "";
      const t = e.toUpperCase();
      return /^[A-Z0-9]$/.test(t) ? t : "";
    },
    normalizeValue(e) {
      return String(e ?? "").split("").map((r) => this.normalizeChar(r)).filter(Boolean).slice(0, this.length).join("");
    },
    emitValue(e) {
      var r;
      const t = e.join("").slice(0, this.length);
      this.$emit("update:modelValue", t), t.length === this.length && (this.$emit("complete", t), (r = this.cellEl(this.length - 1)) == null || r.blur());
    },
    onCellInput(e, t) {
      const s = t.target.value.split("").map((d) => this.normalizeChar(d)).filter(Boolean);
      if (s.length === 0) {
        const d = [...this.cells];
        d[e] = "", this.emitValue(d);
        return;
      }
      const l = [...this.cells];
      let i = e;
      for (const d of s) {
        if (i >= this.length) break;
        l[i] = d, i += 1;
      }
      this.emitValue(l);
      const o = Math.min(i, this.length - 1);
      this.$nextTick(() => {
        var d, u;
        (d = this.cellEl(o)) == null || d.focus(), (u = this.cellEl(o)) == null || u.select();
      });
    },
    onCellKeydown(e, t) {
      var r, s;
      if (t.key === "Backspace") {
        t.preventDefault();
        const l = [...this.cells];
        if (l[e]) {
          l[e] = "", this.emitValue(l);
          return;
        }
        e > 0 && (l[e - 1] = "", this.emitValue(l), this.$nextTick(() => {
          var i;
          (i = this.cellEl(e - 1)) == null || i.focus();
        }));
        return;
      }
      t.key === "ArrowLeft" && e > 0 && (t.preventDefault(), (r = this.cellEl(e - 1)) == null || r.focus()), t.key === "ArrowRight" && e < this.length - 1 && (t.preventDefault(), (s = this.cellEl(e + 1)) == null || s.focus());
    },
    onCellFocus(e) {
      this.activeIndex = e, this.$emit("focus", e), this.$nextTick(() => {
        var t;
        (t = this.cellEl(e)) == null || t.select();
      });
    },
    onPaste(e) {
      var l;
      e.preventDefault();
      const t = ((l = e.clipboardData) == null ? void 0 : l.getData("text")) ?? "", r = this.normalizeValue(t);
      if (!r) return;
      this.emitValue(r.split(""));
      const s = Math.min(r.length, this.length) - 1;
      this.$nextTick(() => {
        var i;
        (i = this.cellEl(Math.max(0, s))) == null || i.focus();
      });
    }
  }
}, qs = ["aria-label"], Qs = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function Zs(e, t, r, s, l, i) {
  return n(), a("div", {
    role: "group",
    "aria-label": i.resolvedAriaLabel,
    class: _([
      "ui-pin",
      i.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (n(!0), a(A, null, V(r.length, (o, d) => (n(), a("input", {
      key: d,
      ref_for: !0,
      ref: "cells",
      class: "ui-pin-cell",
      value: i.cells[d] ?? "",
      type: r.type === "numeric" ? "tel" : "text",
      inputmode: r.type === "numeric" ? "numeric" : "text",
      pattern: r.type === "numeric" ? "[0-9]*" : void 0,
      disabled: r.disabled,
      readonly: r.readonly,
      autocomplete: d === 0 ? r.autocomplete : "off",
      maxlength: "1",
      "aria-label": i.cellAriaLabel(d),
      onInput: (u) => i.onCellInput(d, u),
      onKeydown: (u) => i.onCellKeydown(d, u),
      onFocus: (u) => i.onCellFocus(d),
      onPaste: t[0] || (t[0] = (...u) => i.onPaste && i.onPaste(...u))
    }, null, 40, Qs))), 128))
  ], 10, qs);
}
const Xs = /* @__PURE__ */ v(Us, [["render", Zs]]), Js = ["ul", "ol", "div"], el = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => Js.includes(e)
    },
    /** Öğeler arası dikey boşluk (`gap-3` | `gap-4`). */
    density: {
      type: String,
      default: "normal",
      validator: (e) => ["compact", "normal", "relaxed"].includes(e)
    }
  },
  computed: {
    listClass() {
      const e = this.density === "compact" ? "gap-3" : this.density === "relaxed" ? "gap-5" : "gap-4";
      return S("ui-list", e, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
};
function tl(e, t, r, s, l, i) {
  return n(), k(U(r.tag), x({
    class: i.listClass,
    role: "list"
  }, i.passthroughAttrs), {
    default: w(() => [
      p(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const il = /* @__PURE__ */ v(el, [["render", tl]]), rl = ["solid", "regular", "brands", "light", "duotone", "thin"], nl = {
  name: "ListItem",
  props: {
    /** Dolu daire içinde `ui-icon` (ör. `check`). */
    prefixIcon: {
      type: String,
      default: null
    },
    prefixIconType: {
      type: String,
      default: "light",
      validator: (e) => rl.includes(e)
    }
  }
}, sl = {
  class: "ui-list-item",
  role: "listitem"
}, ll = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, al = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, ol = { class: "ui-list-item-content min-w-0 flex-1" };
function ul(e, t, r, s, l, i) {
  const o = y("ui-icon");
  return n(), a("li", sl, [
    r.prefixIcon ? (n(), a("span", ll, [
      b(o, {
        name: r.prefixIcon,
        type: r.prefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (n(), a("span", al, [
      p(e.$slots, "prefix")
    ])) : f("", !0),
    c("div", ol, [
      p(e.$slots, "default")
    ])
  ]);
}
const dl = /* @__PURE__ */ v(nl, [["render", ul]]), cl = ["bottom-start", "bottom-end", "bottom"], it = 10, hl = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], fl = {
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
      validator: (e) => cl.includes(e)
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
    updatePosition() {
      const e = this.$refs.triggerRef, t = this.$refs.panelRef;
      if (!e || !t) return;
      const r = window.innerWidth, s = window.innerHeight, l = it, i = this.resolvedWidth, o = e.getBoundingClientRect(), d = i != null ? t.offsetWidth || 200 : t.offsetWidth || (this.matchTriggerWidth ? o.width : 200), u = t.offsetHeight || 120;
      if (xt()) {
        this.mobileCenteredActive = !0;
        const I = Math.max(l, Math.round((r - d) / 2)), P = {
          top: `${Math.max(l, Math.round((s - u) / 2))}px`,
          left: `${I}px`
        };
        i != null ? (P.width = i, P.minWidth = i) : (P.width = `${Math.min(d, r - l * 2)}px`, P.maxWidth = `calc(100vw - ${l * 2}px)`), this.layerStyle = P;
        return;
      }
      this.mobileCenteredActive = !1;
      let h = o.bottom + l, g = o.left;
      if (this.placement === "bottom-end" ? g = o.right - d : this.placement === "bottom" && (g = o.left + (o.width - d) / 2), g + d > r - l && (g = Math.max(l, r - l - d)), g < l && (g = l), h + u > s - l) {
        const I = o.top - l - u;
        I >= l && (h = I);
      }
      const T = this.matchTriggerWidth && i == null ? `${Math.ceil(o.width)}px` : void 0, C = {
        top: `${Math.round(h)}px`,
        left: `${Math.round(g)}px`,
        minWidth: T
      };
      i != null && (C.width = i, C.minWidth = i), this.layerStyle = C, this.alignSelectedOptionToTrigger && this.$nextTick(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.nudgeAlignSelectedToTrigger());
        });
      });
    },
    nudgeAlignSelectedToTrigger() {
      const e = this.$refs.triggerRef, t = this.$refs.panelRef, r = this.$refs.layerRef;
      if (!e || !t || !r) return;
      const s = t.querySelector('[role="listbox"]');
      if (s && s.scrollHeight > s.clientHeight + 2)
        return;
      const l = t.querySelector('[role="option"][aria-selected="true"]');
      if (!l) return;
      const i = e.querySelector("[data-popover-align]") || e, o = l.querySelector("[data-popover-align]") || l, d = i.getBoundingClientRect(), u = o.getBoundingClientRect(), h = u.top - d.top, g = u.left - d.left, T = r.getBoundingClientRect(), C = this.layerStyle.top, I = this.layerStyle.left;
      let $ = typeof C == "string" && C !== "" ? parseFloat(C) : T.top, P = typeof I == "string" && I !== "" ? parseFloat(I) : T.left;
      Number.isNaN($) && ($ = T.top), Number.isNaN(P) && (P = T.left);
      let R = $ - h, O = P - g;
      const D = it, F = window.innerHeight, W = window.innerWidth, Z = T.height, X = T.width;
      R + Z > F - D && (R = Math.max(D, F - D - Z)), R < D && (R = D), O + X > W - D && (O = Math.max(D, W - D - X)), O < D && (O = D), this.layerStyle = {
        ...this.layerStyle,
        top: `${Math.round(R)}px`,
        left: `${Math.round(O)}px`
      };
    },
    bindGlobalListeners() {
      window.addEventListener("scroll", this.onScrollResize, !0), window.addEventListener("resize", this.onScrollResize), document.addEventListener("pointerdown", this.onDocPointerDown, !0), document.addEventListener("keydown", this.onDocKeydown, !0);
    },
    teardownGlobalListeners() {
      window.removeEventListener("scroll", this.onScrollResize, !0), window.removeEventListener("resize", this.onScrollResize), document.removeEventListener("pointerdown", this.onDocPointerDown, !0), document.removeEventListener("keydown", this.onDocKeydown, !0);
    },
    onScrollResize(e) {
      if (!this.open) return;
      const t = this.$refs.panelRef, r = e == null ? void 0 : e.target;
      t && r && r !== document && r !== document.documentElement && t.contains(r) || this.schedulePosition();
    },
    onDocPointerDown(e) {
      if (!this.open || !this.closeOnOutsideClick) return;
      const t = e.target, r = this.$refs.triggerRef, s = this.$refs.panelRef;
      r != null && r.contains(t) || s != null && s.contains(t) || this.shouldIgnoreOutsideClick(t) || this.close();
    },
    isOpenedInsidePopoverLayer(e) {
      const t = this.$refs.rootRef;
      return !!(e && t && e.contains(t));
    },
    shouldIgnoreOutsideClick(e) {
      var l;
      if (typeof (e == null ? void 0 : e.closest) != "function") return !1;
      const t = this.$refs.layerRef, r = e.closest("[data-ui-popover-layer]");
      if (r && r !== t)
        return this.isOpenedInsidePopoverLayer(r) ? this.keepOpenOnAncestorPopoverClick : !0;
      for (const i of hl)
        if (e.closest(i)) return !0;
      const s = (l = this.outsideClickIgnoreSelector) == null ? void 0 : l.trim();
      return !!(s && e.closest(s));
    },
    onDocKeydown(e) {
      !this.open || !this.closeOnEscape || e.key === "Escape" && (e.preventDefault(), this.close());
    },
    onPanelKeydown(e) {
      e.key === "Escape" && this.close();
    }
  }
}, ml = {
  ref: "triggerRef",
  class: "ui-popover-trigger inline-flex shrink-0"
}, pl = ["data-popover-align-active", "data-ui-popover-mobile-centered"], gl = {
  key: 0,
  class: "ui-popover-header"
}, bl = { class: "ui-popover-body min-h-0 min-w-0" }, yl = {
  key: 1,
  class: "ui-popover-footer"
};
function vl(e, t, r, s, l, i) {
  return n(), a("div", {
    ref: "rootRef",
    class: _(["ui-popover relative shrink-0", e.$attrs.class])
  }, [
    c("div", ml, [
      p(e.$slots, "trigger", {
        open: r.open,
        toggle: i.toggle,
        close: i.close
      })
    ], 512),
    (n(), k(Q, { to: "body" }, [
      b(ne, { name: "ui-overlay-popover" }, {
        default: w(() => [
          re(c("div", {
            ref: "layerRef",
            class: "ui-popover-layer fixed z-[260]",
            style: B(l.layerStyle),
            "data-popover-align-active": r.alignSelectedOptionToTrigger ? "" : void 0,
            "data-ui-popover-mobile-centered": l.mobileCenteredActive ? "" : void 0,
            "data-ui-popover-layer": ""
          }, [
            c("div", {
              ref: "panelRef",
              class: "ui-surface ui-popover-panel w-full min-w-0 outline-none",
              role: "dialog",
              tabindex: "-1",
              onKeydown: t[0] || (t[0] = (...o) => i.onPanelKeydown && i.onPanelKeydown(...o))
            }, [
              e.$slots.header ? (n(), a("div", gl, [
                p(e.$slots, "header", { close: i.close })
              ])) : f("", !0),
              c("div", bl, [
                p(e.$slots, "content", { close: i.close })
              ]),
              e.$slots.footer ? (n(), a("div", yl, [
                p(e.$slots, "footer", { close: i.close })
              ])) : f("", !0)
            ], 544)
          ], 12, pl), [
            [be, r.open]
          ])
        ]),
        _: 3
      })
    ]))
  ], 2);
}
const _l = /* @__PURE__ */ v(fl, [["render", vl]]), kl = ["bar", "circle"], rt = ["sm", "md", "lg"], nt = ["thin", "md"], wl = ["default", "weak", "fair", "good", "strong"], le = { sm: 16, md: 20, lg: 24 }, xl = { sm: 1.5, md: 2, lg: 2 }, Sl = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => kl.includes(e)
    },
    /** 0 … `max` */
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    /**
     * Daire: sm 16px, md 20px, lg 24px.
     * Çubuk: thin 4px (şifre gücü), md 8px (slider izi).
     */
    size: {
      type: String,
      default: "md"
    },
    /** Çubuk / halka dolgu rengi — şifre gücü vb. */
    variant: {
      type: String,
      default: "default",
      validator: (e) => wl.includes(e)
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    /** Slider izi gibi — progressbar rolü / aria yok */
    presentational: {
      type: Boolean,
      default: !1
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    ariaValuetext: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      const e = this.type === "circle" ? rt.includes(this.size) ? this.size : "sm" : nt.includes(this.size) ? this.size : "md";
      return S(
        "ui-progress",
        `ui-progress--${this.type}`,
        this.type === "circle" && `ui-progress--circle-${e}`,
        this.type === "bar" && `ui-progress--bar-${e}`,
        this.variant !== "default" && `ui-progress--${this.variant}`,
        this.indeterminate && "ui-progress--indeterminate",
        this.$attrs.class
      );
    },
    circleSizeKey() {
      return rt.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return nt.includes(this.size) ? this.size : "md";
    },
    circleRootStyle() {
      if (this.type !== "circle") return;
      const e = le[this.circleSizeKey] ?? le.sm;
      return { width: `${e}px`, height: `${e}px` };
    },
    clampedPercent() {
      if (this.indeterminate) return 0;
      const e = Number(this.max);
      if (!Number.isFinite(e) || e <= 0) return 0;
      const t = Number(this.value);
      return Number.isFinite(t) ? Math.min(100, Math.max(0, t / e * 100)) : 0;
    },
    ariaValueNow() {
      const e = Number(this.max);
      return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(this.clampedPercent / 100 * e);
    },
    circleMetrics() {
      const e = le[this.circleSizeKey] ?? le.sm, t = xl[this.circleSizeKey] ?? 2, r = (e - t) / 2, s = e / 2, l = 2 * Math.PI * r, i = l * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: s, circumference: l, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Cl = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], Tl = ["width", "height", "viewBox"], Il = ["cx", "cy", "r", "stroke-width"], Al = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Ll = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function $l(e, t, r, s, l, i) {
  return n(), a("div", {
    class: _(i.rootClass),
    style: B(i.circleRootStyle),
    role: r.presentational ? void 0 : "progressbar",
    "aria-valuenow": r.presentational || r.indeterminate ? void 0 : i.ariaValueNow,
    "aria-valuemin": r.presentational ? void 0 : 0,
    "aria-valuemax": r.presentational ? void 0 : r.max,
    "aria-label": r.presentational ? void 0 : i.resolvedAriaLabel,
    "aria-valuetext": r.presentational ? void 0 : r.ariaValuetext
  }, [
    r.type === "circle" ? (n(), a("svg", {
      key: 0,
      class: "ui-progress-circle-svg",
      width: i.circleMetrics.size,
      height: i.circleMetrics.size,
      viewBox: `0 0 ${i.circleMetrics.size} ${i.circleMetrics.size}`,
      "aria-hidden": "true",
      focusable: "false"
    }, [
      c("circle", {
        class: "ui-progress-circle-track",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke
      }, null, 8, Il),
      c("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, Al)
    ], 8, Tl)) : (n(), a("div", Ll, [
      c("div", {
        class: "ui-progress-bar-indicator",
        style: B({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Cl);
}
const zl = /* @__PURE__ */ v(Sl, [["render", $l]]), Dl = {
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
}, Vl = ["name", "value", "checked"], Pl = { class: "ui-radio-body" }, Ml = { class: "ui-radio-label" }, Rl = {
  key: 0,
  class: "ui-radio-description"
};
function Ol(e, t, r, s, l, i) {
  var o;
  return n(), a("label", {
    class: _([
      "ui-radio",
      `ui-radio--${i.groupVariant}`,
      {
        "ui-radio--checked": i.isChecked,
        "ui-radio--highlight": r.highlight && i.isChecked
      }
    ]),
    onKeydown: [
      t[1] || (t[1] = q(L((...d) => i.select && i.select(...d), ["prevent"]), ["enter"])),
      t[2] || (t[2] = q(L((...d) => i.select && i.select(...d), ["prevent"]), ["space"]))
    ]
  }, [
    c("input", {
      type: "radio",
      name: (o = i.uiRadioGroup) == null ? void 0 : o.groupName,
      value: i.stringValue,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...d) => i.select && i.select(...d))
    }, null, 40, Vl),
    t[3] || (t[3] = c("span", {
      class: "ui-radio-indicator",
      "aria-hidden": "true"
    }, null, -1)),
    c("span", Pl, [
      c("span", Ml, m(r.label), 1),
      r.description ? (n(), a("span", Rl, m(r.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Bl = /* @__PURE__ */ v(Dl, [["render", Ol]]);
let st = 0;
const El = ["list", "button", "List", "Button"], Fl = ["vertical", "horizontal"], Nl = {
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
      validator: (e) => El.includes(e)
    },
    /** Yalnız `variant="list"`: `horizontal` ile yan yana dizilim */
    orientation: {
      type: String,
      default: "vertical",
      validator: (e) => Fl.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return st += 1, { groupName: `ui-radio-group-${st}` };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    },
    rootClass() {
      return S(
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
}, Yl = ["aria-label"];
function Hl(e, t, r, s, l, i) {
  return n(), a("div", {
    class: _(i.rootClass),
    role: "radiogroup",
    "aria-label": r.ariaLabel || void 0
  }, [
    p(e.$slots, "default")
  ], 10, Yl);
}
const Wl = /* @__PURE__ */ v(Nl, [["render", Hl]]), jl = {
  name: "Tag",
  components: { Badge: kt, Tooltip: ye },
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
}, Kl = ["aria-label"];
function Gl(e, t, r, s, l, i) {
  const o = y("ui-icon"), d = y("Tooltip"), u = y("Badge");
  return n(), k(u, {
    variant: r.variant,
    size: r.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, _t({
    default: w(() => [
      p(e.$slots, "default")
    ]),
    _: 2
  }, [
    r.removable ? {
      name: "append",
      fn: w(() => [
        b(d, {
          label: i.removeLabel,
          placement: "bottom"
        }, {
          default: w(() => [
            c("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": i.removeLabel,
              onClick: t[0] || (t[0] = L((h) => e.$emit("remove"), ["stop"]))
            }, [
              b(o, {
                name: "xmark",
                size: "xs"
              })
            ], 8, Kl)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["variant", "size"]);
}
const Ct = /* @__PURE__ */ v(jl, [["render", Gl]]);
let lt = 0;
const Ul = ["field", "inline"], ql = ["sm", "md", "lg"], Ql = {
  name: "Select",
  components: { Tag: Ct },
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
      validator: (e) => Ul.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ql.includes(e)
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
    lt += 1;
    const e = lt;
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
      return S(
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
        const r = String(t.label), s = String(t.value);
        return r !== e && s !== e;
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
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
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
      const t = this.normalizedOptions.find((r) => String(r.value) === String(e));
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
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], r = t.findIndex((s) => String(s) === String(e.value));
      r >= 0 ? t.splice(r, 1) : t.push(e.value), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } });
    },
    removeValue(e) {
      if (!this.multiple) return;
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], r = t.findIndex((s) => String(s) === String(e));
      r < 0 || (t.splice(r, 1), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } }));
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
}, Zl = ["name", "value"], Xl = ["id", "disabled", "aria-expanded", "aria-haspopup", "aria-controls", "aria-describedby", "onClick"], Jl = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, ea = {
  key: 1,
  class: "ui-select-values-inner"
}, ta = ["placeholder", "aria-label", "disabled"], ia = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, ra = { class: "ui-select-field-suffix" }, na = ["aria-label"], sa = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, la = ["placeholder", "aria-label", "onKeydown"], aa = ["id", "role", "aria-multiselectable", "aria-labelledby"], oa = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, ua = {
  "data-popover-align": "",
  class: "block min-w-0 truncate"
};
function da(e, t, r, s, l, i) {
  const o = y("ui-icon"), d = y("Tag"), u = y("ui-skeleton"), h = y("ui-button"), g = y("ui-empty"), T = y("ui-popover");
  return n(), a("div", {
    class: _(i.rootClass)
  }, [
    r.name ? (n(), a("input", {
      key: 0,
      type: "hidden",
      name: r.name,
      value: i.hiddenFieldValue
    }, null, 8, Zl)) : f("", !0),
    b(T, {
      open: l.menuOpen,
      "onUpdate:open": t[6] || (t[6] = (C) => l.menuOpen = C),
      placement: "bottom-start",
      "match-trigger-width": i.resolvedMatchTriggerWidth,
      disabled: i.isDisabled,
      "align-selected-option-to-trigger": i.alignSelectedToTrigger
    }, _t({
      trigger: w(({ open: C, toggle: I }) => [
        c("button", x({
          type: "button",
          id: i.resolvedId,
          class: ["ui-select-field", { "ui-select-field--values": r.multiple }],
          disabled: i.isDisabled,
          "aria-expanded": C ? "true" : "false",
          "aria-haspopup": i.listboxRole,
          "aria-controls": l.listboxId,
          "aria-describedby": r.ariaDescribedby
        }, i.triggerPassthrough, {
          onClick: ($) => i.onTriggerClick(I)
        }), [
          r.prefixIcon ? (n(), a("span", Jl, [
            b(o, {
              name: r.prefixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : f("", !0),
          r.multiple ? (n(), a("div", ea, [
            (n(!0), a(A, null, V(i.selectedValues, ($) => (n(), k(d, {
              key: String($),
              variant: "secondary",
              size: "sm",
              removable: "",
              onRemove: (P) => i.removeValue($)
            }, {
              default: w(() => [
                M(m(i.labelForValue($)), 1)
              ]),
              _: 2
            }, 1032, ["onRemove"]))), 128)),
            i.isFilterable ? re((n(), a("input", {
              key: 0,
              ref: "searchInput",
              "onUpdate:modelValue": t[0] || (t[0] = ($) => l.filterQuery = $),
              type: "text",
              class: _(["ui-select-values-input", { "ui-select-values-input--solo": !i.selectedValues.length }]),
              placeholder: i.multipleInputPlaceholder,
              "aria-label": i.resolvedFilterPlaceholder,
              autocomplete: "off",
              disabled: i.isDisabled,
              onClick: t[1] || (t[1] = L(() => {
              }, ["stop"])),
              onKeydown: t[2] || (t[2] = (...$) => i.onSearchKeydown && i.onSearchKeydown(...$))
            }, null, 42, ta)), [
              [xe, l.filterQuery]
            ]) : f("", !0)
          ])) : r.loading ? (n(), a("span", ia, m(i.resolvedLoadingLabel), 1)) : (n(), a("span", {
            key: 3,
            class: _(["ui-select-value", { "ui-select-value--placeholder": i.isPlaceholderDisplay }]),
            "data-popover-align": ""
          }, m(i.displayLabel), 3)),
          c("span", ra, [
            i.showClearButton ? (n(), a("button", {
              key: 0,
              type: "button",
              class: "ui-select-clear",
              "aria-label": i.clearAriaLabel,
              onClick: t[3] || (t[3] = L((...$) => i.clearSelection && i.clearSelection(...$), ["stop"]))
            }, [
              b(o, {
                name: "xmark",
                size: "xs"
              })
            ], 8, na)) : f("", !0),
            c("span", sa, [
              b(o, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 16, Xl)
      ]),
      content: w(({ close: C }) => [
        c("div", {
          ref: "listbox",
          id: l.listboxId,
          class: "ui-select-listbox",
          role: i.listboxRole,
          "aria-multiselectable": r.multiple ? "true" : void 0,
          "aria-labelledby": i.resolvedId
        }, [
          r.loading && !i.filteredOptions.length ? (n(), a("div", oa, [
            (n(), a(A, null, V(3, (I) => b(u, {
              key: I,
              variant: "line",
              class: _(I === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : i.filteredOptions.length ? (n(!0), a(A, { key: 1 }, V(i.filteredOptions, (I) => (n(), k(h, {
            key: String(I.value),
            variant: "ghost",
            color: "secondary",
            rounded: "",
            fulled: "",
            "text-align": "left",
            role: "option",
            class: _(["ui-select-option", { "ui-select-option--selected": i.isSelected(I) }]),
            "suffix-icon": i.isSelected(I) ? "check" : void 0,
            "aria-selected": i.isSelected(I) ? "true" : "false",
            onClick: ($) => i.pick(I, C)
          }, {
            default: w(() => [
              c("span", ua, m(I.label), 1)
            ]),
            _: 2
          }, 1032, ["class", "suffix-icon", "aria-selected", "onClick"]))), 128)) : i.isFilterable && l.filterQuery ? (n(), k(g, {
            key: 2,
            icon: "magnifying-glass",
            size: "sm",
            title: i.noResultsText
          }, null, 8, ["title"])) : (n(), k(g, {
            key: 3,
            icon: "table-cells",
            size: "sm",
            title: i.emptyOptionsText
          }, null, 8, ["title"]))
        ], 8, aa)
      ]),
      _: 2
    }, [
      i.showPopoverHeader ? {
        name: "header",
        fn: w(({ close: C }) => [
          re(c("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[4] || (t[4] = (I) => l.filterQuery = I),
            type: "text",
            class: "ui-select-filter-input w-full",
            placeholder: i.resolvedFilterPlaceholder,
            "aria-label": i.resolvedFilterPlaceholder,
            autocomplete: "off",
            onMousedown: t[5] || (t[5] = L(() => {
            }, ["prevent"])),
            onKeydown: [
              q(L((I) => i.pickFirstFiltered(C), ["prevent"]), ["enter"]),
              q(L((I) => C(), ["prevent"]), ["esc"])
            ]
          }, null, 40, la), [
            [xe, l.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: w((C) => [
          p(e.$slots, "footer", yt(vt(C)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const ca = /* @__PURE__ */ v(Ql, [["render", da]]), ha = ["sm", "md", "lg", "full"], at = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, fa = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => ha.includes(e)
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-menu",
        at[this.width] || at.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, ma = {
  key: 0,
  class: "ui-menu-header"
}, pa = { class: "ui-menu-body" }, ga = {
  key: 1,
  class: "ui-menu-footer"
};
function ba(e, t, r, s, l, i) {
  return n(), a("nav", x({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (n(), a("div", ma, [
      p(e.$slots, "header")
    ])) : f("", !0),
    c("div", pa, [
      p(e.$slots, "default")
    ]),
    e.$slots.footer ? (n(), a("div", ga, [
      p(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const ya = /* @__PURE__ */ v(fa, [["render", ba]]), va = {
  name: "MenuGroup",
  inheritAttrs: !1,
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  computed: {
    groupClass() {
      return S("ui-menu-group", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, _a = {
  key: 0,
  class: "ui-menu-group-label"
}, ka = { class: "ui-menu-group-items" };
function wa(e, t, r, s, l, i) {
  return n(), a("div", x({ class: i.groupClass }, i.passthroughAttrs), [
    r.label ? (n(), a("p", _a, m(r.label), 1)) : f("", !0),
    c("div", ka, [
      p(e.$slots, "default")
    ])
  ], 16);
}
const xa = /* @__PURE__ */ v(va, [["render", wa]]), Sa = {
  name: "MenuItem",
  inheritAttrs: !1,
  props: {
    /** `vue-router` hedefi; verildiğinde menü öğesi bağlantı olarak davranır. */
    to: {
      type: [String, Object],
      default: null
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
    loading: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  computed: {
    itemClass() {
      return S(
        "ui-menu-item",
        this.active && "ui-menu-item--active",
        this.$attrs.class
      );
    },
    forwardedAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  methods: {
    onClick(e) {
      this.disabled || this.loading || this.$emit("click", e);
    }
  }
};
function Ca(e, t, r, s, l, i) {
  const o = y("ui-button");
  return n(), k(o, x({
    type: "button",
    variant: "ghost",
    color: "secondary",
    fulled: "",
    "text-align": "left",
    to: r.to,
    "prefix-icon": r.prefixIcon,
    "suffix-icon": r.suffixIcon,
    disabled: r.disabled,
    loading: r.loading,
    class: i.itemClass,
    "aria-current": r.active ? "page" : void 0
  }, i.forwardedAttrs, { onClick: i.onClick }), {
    default: w(() => [
      p(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const Ta = /* @__PURE__ */ v(Sa, [["render", Ca]]), Ia = {
  name: "MenuNav",
  inheritAttrs: !1,
  props: {
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    navClass() {
      return S("ui-menu-nav", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Aa = ["aria-label"];
function La(e, t, r, s, l, i) {
  return n(), a("div", x({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16, Aa);
}
const $a = /* @__PURE__ */ v(Ia, [["render", La]]), za = {
  name: "Segment",
  inject: {
    uiSegmentGroup: {
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
    /** Font Awesome ikon adı; `iconOnly` veya dar düzenlerde yalnız ikon gösterilir */
    icon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasPrepend() {
      return !!this.$slots.prepend;
    },
    hasAppend() {
      return !!this.$slots.append;
    },
    hasAffixes() {
      return this.hasPrepend || this.hasAppend;
    },
    isSelected() {
      return this.uiSegmentGroup ? Object.is(this.uiSegmentGroup.modelValue, this.value) : !1;
    },
    iconOnly() {
      var e;
      return !!((e = this.uiSegmentGroup) != null && e.iconOnly);
    },
    showLabel() {
      return !this.iconOnly;
    },
    iconSize() {
      var t;
      const e = ((t = this.uiSegmentGroup) == null ? void 0 : t.size) || "md";
      return this.iconOnly, e === "lg" ? "sm" : "xs";
    },
    segmentClass() {
      return [
        "ui-segment",
        { "ui-segment--selected": this.isSelected },
        this.icon && !this.hasAffixes && "ui-segment--with-icon",
        this.iconOnly && "ui-segment--icon-only",
        this.hasAffixes && "ui-segment--affixed"
      ];
    }
  },
  mounted() {
    !this.uiSegmentGroup && typeof import.meta < "u";
  },
  methods: {
    select() {
      this.disabled || !this.uiSegmentGroup || this.uiSegmentGroup.$emit("update:modelValue", this.value);
    }
  }
}, Da = ["aria-checked", "disabled"], Va = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Pa = {
  key: 1,
  class: "ui-segment-label"
}, Ma = {
  key: 2,
  class: "sr-only"
}, Ra = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Oa = {
  key: 1,
  class: "ui-segment-label"
}, Ba = {
  key: 2,
  class: "sr-only"
};
function Ea(e, t, r, s, l, i) {
  const o = y("ui-icon");
  return n(), a("button", {
    type: "button",
    role: "radio",
    class: _(i.segmentClass),
    "aria-checked": i.isSelected ? "true" : "false",
    disabled: r.disabled,
    onClick: t[2] || (t[2] = (...d) => i.select && i.select(...d))
  }, [
    i.hasAffixes ? (n(), a(A, { key: 0 }, [
      i.hasPrepend ? (n(), a("span", {
        key: 0,
        class: "ui-segment-affix ui-segment-affix--prepend",
        onClick: t[0] || (t[0] = L(() => {
        }, ["stop"]))
      }, [
        p(e.$slots, "prepend")
      ])) : f("", !0),
      c("span", {
        class: _(["ui-segment-main", { "ui-segment-main--with-icon": r.icon }])
      }, [
        r.icon ? (n(), a("span", Va, [
          b(o, {
            name: r.icon,
            size: i.iconSize
          }, null, 8, ["name", "size"])
        ])) : f("", !0),
        i.showLabel ? (n(), a("span", Pa, m(r.label), 1)) : r.label ? (n(), a("span", Ma, m(r.label), 1)) : f("", !0)
      ], 2),
      i.hasAppend ? (n(), a("span", {
        key: 1,
        class: "ui-segment-affix ui-segment-affix--append",
        onClick: t[1] || (t[1] = L(() => {
        }, ["stop"]))
      }, [
        p(e.$slots, "append")
      ])) : f("", !0)
    ], 64)) : (n(), a(A, { key: 1 }, [
      r.icon ? (n(), a("span", Ra, [
        b(o, {
          name: r.icon,
          size: i.iconSize
        }, null, 8, ["name", "size"])
      ])) : f("", !0),
      i.showLabel ? (n(), a("span", Oa, m(r.label), 1)) : r.label ? (n(), a("span", Ba, m(r.label), 1)) : f("", !0)
    ], 64))
  ], 10, Da);
}
const Fa = /* @__PURE__ */ v(za, [["render", Ea]]), Na = ["sm", "md", "lg"], Ya = ["horizontal", "vertical"], Ha = {
  name: "SegmentGroup",
  inheritAttrs: !1,
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Na.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Ya.includes(e)
    },
    /** Yalnız ikon; etiketler ekran okuyucu için gizli kalır */
    iconOnly: {
      type: Boolean,
      default: !1
    },
    /** false: başlık çubuğu gibi içeriğe göre genişlik (`w-full` değil) */
    block: {
      type: Boolean,
      default: !0
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  provide() {
    return {
      uiSegmentGroup: this
    };
  },
  computed: {
    rootClass() {
      return S(
        "ui-segment-group",
        this.block ? "ui-segment-group--block" : "ui-segment-group--fit",
        this.direction === "vertical" && "ui-segment-group--vertical",
        this.iconOnly && "ui-segment-group--icon-only",
        !this.block && this.direction !== "vertical" && "ui-segment-group--inline",
        this.size !== "md" && `ui-segment-group--${this.size}`,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Wa = ["aria-label"];
function ja(e, t, r, s, l, i) {
  return n(), a("div", x({
    class: i.rootClass,
    role: "radiogroup",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16, Wa);
}
const Ka = /* @__PURE__ */ v(Ha, [["render", ja]]), Ga = ["horizontal", "vertical"], Ua = ["default", "pills"], qa = {
  name: "Stepper",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    steps: {
      type: Array,
      required: !0
    },
    /**
     * `default` — daire + başlık (yatay / dikey).
     * `pills` — hap ilerleme + `2/5 - Adım` etiketi (modal / kayıt formları için tercih).
     */
    variant: {
      type: String,
      default: "default",
      validator: (e) => Ua.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Ga.includes(e)
    },
    interactive: {
      type: Boolean,
      default: !1
    },
    /** `pills` varyantında sağdaki `1/5 - Adım` metni */
    showLabel: {
      type: Boolean,
      default: !0
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  computed: {
    normalizedSteps() {
      return (Array.isArray(this.steps) ? this.steps : []).map((t) => ({
        title: (t == null ? void 0 : t.title) ?? "",
        description: (t == null ? void 0 : t.description) ?? "",
        icon: (t == null ? void 0 : t.icon) ?? null,
        iconType: (t == null ? void 0 : t.iconType) ?? "light"
      }));
    },
    rootClass() {
      return S(
        "ui-stepper",
        this.variant === "pills" && "ui-stepper--pills",
        this.variant === "default" && this.direction === "vertical" && "ui-stepper--vertical",
        this.variant === "default" && this.direction === "horizontal" && "ui-stepper--horizontal",
        this.$attrs.class
      );
    },
    currentStep() {
      const e = Math.min(this.normalizedSteps.length - 1, Math.max(0, this.modelValue));
      return this.normalizedSteps[e] ?? { title: "" };
    },
    pillsLabel() {
      const e = this.normalizedSteps.length;
      return `${Math.min(e, Math.max(1, this.modelValue + 1))}/${e} - ${this.currentStep.title}`;
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  methods: {
    go(e) {
      if (!this.interactive) return;
      const t = this.normalizedSteps.length - 1, r = Math.min(t, Math.max(0, e));
      this.$emit("update:modelValue", r);
    },
    pillClass(e) {
      const t = this.modelValue;
      return e < t ? "ui-stepper-pill--complete" : e === t ? "ui-stepper-pill--current" : "ui-stepper-pill--upcoming";
    },
    indicatorClass(e) {
      const t = this.modelValue;
      return e < t ? "ui-stepper-indicator--complete" : e === t ? "ui-stepper-indicator--current" : "ui-stepper-indicator--upcoming";
    },
    railBeforeClass(e) {
      return this.modelValue >= e ? "ui-stepper-rail--done" : "ui-stepper-rail--todo";
    },
    railAfterClass(e) {
      return this.modelValue > e ? "ui-stepper-rail--done" : "ui-stepper-rail--todo";
    },
    verticalRailClass(e) {
      return this.modelValue > e ? "ui-stepper-rail--done" : "ui-stepper-rail--todo";
    }
  }
}, Qa = ["aria-label"], Za = { class: "ui-stepper-pills-track" }, Xa = {
  key: 0,
  class: "ui-stepper-pills-label"
}, Ja = { class: "flex w-full min-w-0 items-center justify-center" }, eo = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, to = {
  key: 1,
  class: "tabular-nums"
}, io = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, ro = { class: "ui-stepper-title ui-stepper-title--horizontal" }, no = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, so = { class: "flex flex-col items-center" }, lo = {
  key: 1,
  class: "tabular-nums"
}, ao = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, oo = { class: "ui-stepper-title" }, uo = {
  key: 0,
  class: "ui-stepper-description"
};
function co(e, t, r, s, l, i) {
  const o = y("ui-icon");
  return n(), a("div", x({
    class: i.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, i.passthroughAttrs), [
    r.variant === "pills" ? (n(), a(A, { key: 0 }, [
      c("div", Za, [
        (n(!0), a(A, null, V(i.normalizedSteps, (d, u) => (n(), k(U(r.interactive ? "button" : "span"), x({
          key: u,
          class: ["ui-stepper-pill", i.pillClass(u)],
          role: "listitem",
          "aria-current": u === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(u) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      r.showLabel ? (n(), a("p", Xa, m(i.pillsLabel), 1)) : f("", !0)
    ], 64)) : r.direction === "horizontal" ? (n(!0), a(A, { key: 1 }, V(i.normalizedSteps, (d, u) => (n(), a("div", {
      key: u,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      c("div", Ja, [
        u > 0 ? (n(), a("span", {
          key: 0,
          class: _(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : (n(), a("span", eo)),
        (n(), k(U(r.interactive ? "button" : "div"), x({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(u)],
          "aria-current": u === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(u) : void 0
        }), {
          default: w(() => [
            d.icon ? (n(), k(o, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (n(), a("span", to, m(u + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        u < i.normalizedSteps.length - 1 ? (n(), a("span", {
          key: 2,
          class: _(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : (n(), a("span", io))
      ]),
      c("p", ro, m(d.title), 1),
      d.description ? (n(), a("p", no, m(d.description), 1)) : f("", !0)
    ]))), 128)) : (n(!0), a(A, { key: 2 }, V(i.normalizedSteps, (d, u) => (n(), a("div", {
      key: u,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      c("div", so, [
        (n(), k(U(r.interactive ? "button" : "div"), x({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(u)],
          "aria-current": u === r.modelValue ? "step" : void 0,
          "aria-label": d.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(u) : void 0
        }), {
          default: w(() => [
            d.icon ? (n(), k(o, {
              key: 0,
              name: d.icon,
              type: d.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (n(), a("span", lo, m(u + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        u < i.normalizedSteps.length - 1 ? (n(), a("span", {
          key: 0,
          class: _(["ui-stepper-vrail", i.verticalRailClass(u)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      c("div", ao, [
        c("p", oo, m(d.title), 1),
        d.description ? (n(), a("p", uo, m(d.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, Qa);
}
const ho = /* @__PURE__ */ v(qa, [["render", co]]), fo = ["line", "circle", "block", "pill"], mo = ["sm", "md", "lg"], po = 480, ot = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, ut = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, go = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => fo.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => mo.includes(e)
    }
  },
  setup(e) {
    const t = It(), r = j(() => !!t.default), s = E(null), l = E(null), i = E(null), o = E(null), d = E(!1), u = E(!1), h = E(!1), g = E(!1), T = j(
      () => e.loading || u.value
    ), C = j(
      () => e.loading || u.value
    );
    At(() => {
      g.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), Lt(
      () => e.loading,
      async (D, F) => {
        var X, ke, we;
        if (D) {
          u.value = !1, h.value = !1, o.value = null, d.value = !1;
          return;
        }
        if (F !== !0) return;
        if (g.value) {
          u.value = !1, o.value = null, d.value = !1;
          return;
        }
        const W = ((X = s.value) == null ? void 0 : X.offsetHeight) ?? ((ke = l.value) == null ? void 0 : ke.offsetHeight) ?? 0;
        u.value = !0, h.value = !1, d.value = !0, o.value = W, await Se();
        const Z = ((we = i.value) == null ? void 0 : we.scrollHeight) ?? W;
        if (W <= 0 && Z <= 0) {
          I();
          return;
        }
        await Se(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            o.value = Z, h.value = !0;
          });
        }), setTimeout(I, po + 40);
      }
    );
    function I() {
      u.value = !1, h.value = !1, o.value = null, d.value = !1;
    }
    function $(D) {
      D.target === s.value && D.propertyName === "height" && (e.loading || d.value && I());
    }
    const P = j(() => {
      if (o.value != null)
        return { height: `${o.value}px` };
    }), R = j(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !u.value,
      "ui-skeleton-placeholder--overlay": u.value,
      "ui-skeleton-placeholder--fade-out": u.value
    })), O = j(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !u.value,
      "ui-skeleton-content-wrap--revealing": u.value,
      "ui-skeleton-content-wrap--revealing-visible": u.value && h.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !u.value
    }));
    return {
      hasDefaultSlot: r,
      hostRef: s,
      placeholderRef: l,
      contentWrapRef: i,
      hostStyle: P,
      heightAnimActive: d,
      isRevealing: u,
      showPlaceholder: T,
      isBusy: C,
      placeholderClass: R,
      contentWrapClass: O,
      onHostTransitionEnd: $
    };
  },
  computed: {
    variantClass() {
      return ot[this.variant] || ot.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return ut[this.size] || ut.md;
    },
    skeletonClass() {
      return S(
        "ui-skeleton",
        this.variantClass,
        this.lineSizeClass,
        this.$attrs.class
      );
    },
    hostClass() {
      return S(
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
}, bo = ["aria-busy"], yo = ["aria-hidden"];
function vo(e, t, r, s, l, i) {
  return s.hasDefaultSlot ? (n(), a("div", x({
    key: 1,
    ref: "hostRef",
    class: i.hostClass,
    style: s.hostStyle,
    "aria-busy": s.isBusy ? "true" : void 0
  }, i.passthroughAttrs, {
    onTransitionend: t[0] || (t[0] = (...o) => s.onHostTransitionEnd && s.onHostTransitionEnd(...o))
  }), [
    re(c("div", {
      ref: "placeholderRef",
      class: _(["ui-skeleton-placeholder", s.placeholderClass]),
      "aria-hidden": "true"
    }, [
      p(e.$slots, "placeholder", {}, () => [
        t[1] || (t[1] = c("div", { class: "ui-skeleton-default-rows" }, [
          c("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md" }),
          c("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--md" }),
          c("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--sm" })
        ], -1))
      ])
    ], 2), [
      [be, s.showPlaceholder]
    ]),
    c("div", {
      ref: "contentWrapRef",
      class: _(["ui-skeleton-content-wrap", s.contentWrapClass])
    }, [
      c("div", {
        class: "ui-skeleton-content",
        "aria-hidden": s.showPlaceholder && !s.isRevealing ? "true" : void 0
      }, [
        p(e.$slots, "default")
      ], 8, yo)
    ], 2)
  ], 16, bo)) : (n(), a("div", x({
    key: 0,
    class: i.skeletonClass,
    "aria-hidden": "true"
  }, i.passthroughAttrs), null, 16));
}
const _o = /* @__PURE__ */ v(go, [["render", vo]]);
let dt = 0;
const ko = {
  name: "Slider",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    label: {
      type: String,
      default: ""
    },
    /** Sağ üstte gösterilen biçimlendirilmiş değer (örn. para string’i). */
    valueText: {
      type: String,
      default: ""
    },
    minLabel: {
      type: String,
      default: ""
    },
    maxLabel: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: void 0
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "change"],
  data() {
    return dt += 1, { fallbackId: `ui-slider-${dt}` };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    hasValue() {
      return this.valueText != null && this.valueText !== "";
    },
    rootClass() {
      return S("ui-slider", this.disabled && "ui-slider--disabled", this.$attrs.class);
    },
    fillPercent() {
      const e = Number(this.max) - Number(this.min);
      if (e <= 0 || !Number.isFinite(Number(this.modelValue)))
        return 0;
      const t = (Number(this.modelValue) - Number(this.min)) / e * 100;
      return Math.min(100, Math.max(0, t));
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set([
        "class",
        "style",
        "id",
        "type",
        "value",
        "min",
        "max",
        "step",
        "disabled"
      ]), t = {};
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
      return t;
    }
  },
  methods: {
    onNativeInput(e) {
      const t = Number(e.target.value);
      this.$emit("update:modelValue", Number.isNaN(t) ? this.min : t), this.$emit("input", e);
    },
    onChange(e) {
      this.$emit("change", e);
    }
  }
}, wo = {
  key: 0,
  class: "ui-slider-header"
}, xo = {
  key: 0,
  class: "ui-form-label"
}, So = {
  key: 1,
  class: "ui-slider-value"
}, Co = { class: "ui-slider-rail" }, To = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Io = {
  key: 1,
  class: "ui-slider-scale"
}, Ao = { key: 0 }, Lo = { key: 1 };
function $o(e, t, r, s, l, i) {
  const o = y("ui-progress");
  return n(), a("div", {
    class: _(i.rootClass)
  }, [
    r.label || i.hasValue ? (n(), a("div", wo, [
      r.label ? (n(), a("span", xo, m(r.label), 1)) : f("", !0),
      i.hasValue ? (n(), a("span", So, m(r.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    c("div", Co, [
      b(o, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: i.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      c("input", x(i.passthroughAttrs, {
        id: i.resolvedId,
        value: r.modelValue,
        type: "range",
        class: "ui-slider-input",
        min: r.min,
        max: r.max,
        step: r.step,
        disabled: r.disabled,
        "aria-valuemin": r.min,
        "aria-valuemax": r.max,
        "aria-valuenow": r.modelValue,
        "aria-valuetext": r.valueText || String(r.modelValue),
        "aria-describedby": r.ariaDescribedby,
        onInput: t[0] || (t[0] = (...d) => i.onNativeInput && i.onNativeInput(...d)),
        onChange: t[1] || (t[1] = (...d) => i.onChange && i.onChange(...d))
      }), null, 16, To)
    ]),
    r.minLabel || r.maxLabel ? (n(), a("div", Io, [
      r.minLabel ? (n(), a("span", Ao, m(r.minLabel), 1)) : f("", !0),
      r.maxLabel ? (n(), a("span", Lo, m(r.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const zo = /* @__PURE__ */ v(ko, [["render", $o]]);
let ct = 0;
const Do = {
  name: "Switch",
  inheritAttrs: !1,
  props: {
    /** `v-model` */
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: void 0
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    return ct += 1, { fallbackId: `ui-switch-${ct}` };
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "disabled"]), t = {};
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
      return t;
    }
  },
  methods: {
    onKeydown(e) {
      this.isDisabled || (e.key === " " || e.key === "Enter") && (e.preventDefault(), this.toggle());
    },
    toggle() {
      if (this.isDisabled) return;
      const e = !this.modelValue;
      this.$emit("update:modelValue", e), this.$emit("change", e);
    }
  }
}, Vo = ["id", "aria-checked", "disabled", "aria-describedby"];
function Po(e, t, r, s, l, i) {
  return n(), a("button", x({
    type: "button",
    role: "switch",
    id: i.resolvedId,
    class: [
      "ui-switch",
      i.isDisabled ? "ui-switch--disabled" : "",
      e.$attrs.class
    ],
    "aria-checked": r.modelValue ? "true" : "false",
    disabled: r.disabled,
    "aria-describedby": r.ariaDescribedby
  }, i.passthroughAttrs, {
    onClick: t[0] || (t[0] = (...o) => i.toggle && i.toggle(...o)),
    onKeydown: t[1] || (t[1] = (...o) => i.onKeydown && i.onKeydown(...o))
  }), [
    c("span", {
      class: _(["ui-switch-track", r.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      c("span", {
        class: _(["ui-switch-thumb", r.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, Vo);
}
const Mo = /* @__PURE__ */ v(Do, [["render", Po]]), Ro = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return S("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Oo = { class: "ui-table-scroll" };
function Bo(e, t, r, s, l, i) {
  return n(), a("div", Oo, [
    c("table", x({ class: i.rootClass }, i.passthroughAttrs), [
      p(e.$slots, "default")
    ], 16)
  ]);
}
const Eo = /* @__PURE__ */ v(Ro, [["render", Bo]]), Fo = {
  name: "TableBody"
}, No = { class: "ui-table-body" };
function Yo(e, t, r, s, l, i) {
  return n(), a("tbody", No, [
    p(e.$slots, "default")
  ]);
}
const Ho = /* @__PURE__ */ v(Fo, [["render", Yo]]), Wo = ["left", "center", "right"], jo = ["title", "secondary", "body"], Ko = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => Wo.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || jo.includes(e)
    },
    iconCol: {
      type: Boolean,
      default: !1
    },
    empty: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-table-cell",
        this.iconCol && "ui-table-cell--icon-col",
        this.empty && "ui-table-cell--empty",
        this.align === "center" && "ui-table-cell--align-center",
        this.align === "right" && "ui-table-cell--align-end",
        this.tone === "title" && "ui-table-cell--tone-title",
        this.tone === "secondary" && "ui-table-cell--tone-secondary",
        this.tone === "body" && "ui-table-cell--tone-body",
        this.$attrs.class
      );
    }
  }
}, Go = ["colspan"];
function Uo(e, t, r, s, l, i) {
  return n(), a("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: _(i.rootClass)
  }, [
    p(e.$slots, "default")
  ], 10, Go);
}
const qo = /* @__PURE__ */ v(Ko, [["render", Uo]]), Qo = ["left", "center", "right"], Zo = ["sm", "md", "lg"], Xo = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => Qo.includes(e)
    },
    width: {
      type: String,
      default: ""
    },
    iconCol: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-table-head",
        this.iconCol && "ui-table-head--icon-col",
        this.align === "center" && "ui-table-head--align-center",
        this.align === "right" && "ui-table-head--align-end",
        !this.iconCol && this.width === "sm" && "ui-table-head--w-sm",
        !this.iconCol && this.width === "md" && "ui-table-head--w-md",
        !this.iconCol && this.width === "lg" && "ui-table-head--w-lg",
        this.$attrs.class
      );
    },
    widthStyle() {
      if (!(this.iconCol || Zo.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function Jo(e, t, r, s, l, i) {
  return n(), a("th", {
    class: _(i.rootClass),
    style: B(i.widthStyle)
  }, [
    p(e.$slots, "default")
  ], 6);
}
const eu = /* @__PURE__ */ v(Xo, [["render", Jo]]), tu = {
  name: "TableHeader",
  props: {
    sticky: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return S(this.sticky && "ui-table-header--sticky", this.$attrs.class);
    }
  }
};
function iu(e, t, r, s, l, i) {
  return n(), a("thead", {
    class: _(i.rootClass)
  }, [
    p(e.$slots, "default")
  ], 2);
}
const ru = /* @__PURE__ */ v(tu, [["render", iu]]), nu = {
  name: "TablePagination",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    lastPage: {
      type: Number,
      default: 1
    },
    metaText: {
      type: String,
      default: ""
    },
    pageLabel: {
      type: String,
      default: ""
    },
    prevAriaLabel: {
      type: String,
      default: ""
    },
    nextAriaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["prev", "next"],
  computed: {
    canPrev() {
      return this.currentPage > 1;
    },
    canNext() {
      return this.currentPage < this.lastPage;
    }
  }
}, su = { class: "ui-table-pagination" }, lu = { class: "ui-table-pagination-meta" }, au = { class: "ui-table-pagination-nav" }, ou = { class: "ui-table-pagination-page" };
function uu(e, t, r, s, l, i) {
  const o = y("ui-button");
  return n(), a("div", su, [
    c("div", lu, [
      p(e.$slots, "meta", {}, () => [
        M(m(r.metaText), 1)
      ])
    ]),
    c("div", au, [
      b(o, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !i.canPrev,
        "aria-label": r.prevAriaLabel,
        onClick: t[0] || (t[0] = (d) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      c("div", ou, m(r.pageLabel), 1),
      b(o, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !i.canNext,
        "aria-label": r.nextAriaLabel,
        onClick: t[1] || (t[1] = (d) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const du = /* @__PURE__ */ v(nu, [["render", uu]]), cu = ["soft", "strong"], hu = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || cu.includes(e)
    },
    clickable: {
      type: Boolean,
      default: !1
    },
    interactive: {
      type: Boolean,
      default: !1
    },
    selected: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-table-row",
        this.hover === "soft" && "ui-table-row--soft-hover",
        this.hover === "strong" && "ui-table-row--strong-hover",
        this.interactive && "ui-table-row--interactive",
        this.clickable && "ui-table-row--clickable",
        this.selected && "ui-table-row--selected",
        this.$attrs.class
      );
    }
  }
};
function fu(e, t, r, s, l, i) {
  return n(), a("tr", {
    class: _(i.rootClass)
  }, [
    p(e.$slots, "default")
  ], 2);
}
const mu = /* @__PURE__ */ v(hu, [["render", fu]]), pu = {
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
      var s, l;
      const e = ((s = this.uiTabs) == null ? void 0 : s.orientation) === "vertical", r = ((l = this.uiTabs) == null ? void 0 : l.variant) === "segmented" && !e ? "segmented" : "line";
      return S(
        "ui-tab-list",
        r === "segmented" ? "ui-tab-list--segmented" : "ui-tab-list--line",
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
      var g, T;
      if (!this.uiTabs) return;
      const t = this.uiTabs.orientation === "vertical", r = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'));
      if (r.length === 0) return;
      const s = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], l = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], i = e.key;
      let o = 0;
      if (s.includes(i)) o = 1;
      else if (l.includes(i)) o = -1;
      else return;
      e.preventDefault();
      const d = document.activeElement;
      let u = r.indexOf(d);
      u === -1 && (u = r.findIndex((C) => C.getAttribute("aria-selected") === "true")), u === -1 && (u = 0);
      let h = u + o;
      h < 0 && (h = r.length - 1), h >= r.length && (h = 0), (T = (g = r[h]) == null ? void 0 : g.focus) == null || T.call(g);
    }
  }
}, gu = ["aria-label", "aria-orientation"];
function bu(e, t, r, s, l, i) {
  return n(), a("div", x({
    class: i.listClass,
    role: "tablist",
    "aria-label": r.ariaLabel || void 0,
    "aria-orientation": i.ariaOrientation
  }, i.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...o) => i.onKeydown && i.onKeydown(...o))
  }), [
    p(e.$slots, "default")
  ], 16, gu);
}
const yu = /* @__PURE__ */ v(pu, [["render", bu]]), vu = {
  name: "TabPanel",
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
    }
  },
  computed: {
    isActive() {
      return this.uiTabs ? this.uiTabs.isSelected(this.value) : !1;
    },
    panelDomId() {
      return this.uiTabs ? this.uiTabs.panelId(this.value) : void 0;
    },
    triggerDomId() {
      return this.uiTabs ? this.uiTabs.triggerId(this.value) : void 0;
    },
    panelClass() {
      return S("ui-tab-panel min-w-0 flex-1 outline-none", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, _u = ["id", "aria-labelledby"];
function ku(e, t, r, s, l, i) {
  return re((n(), a("div", x({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16, _u)), [
    [be, i.isActive]
  ]);
}
const wu = /* @__PURE__ */ v(vu, [["render", ku]]);
let ht = 0;
const xu = ["line", "segmented"], Su = {
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
      validator: (e) => xu.includes(e)
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
    return ht += 1, {
      baseId: `ui-tabs-${ht}`
    };
  },
  provide() {
    return {
      uiTabs: this
    };
  },
  computed: {
    rootClass() {
      return S(
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
function Cu(e, t, r, s, l, i) {
  return n(), a("div", x({ class: i.rootClass }, i.passthroughAttrs), [
    p(e.$slots, "default")
  ], 16);
}
const Tu = /* @__PURE__ */ v(Su, [["render", Cu]]), Iu = ["solid", "regular", "brands", "light", "duotone", "thin"], Au = {
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
      validator: (e) => Iu.includes(e)
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
    /** FA Free: `regular` kümesi eksik olabiliyor; segment kartında hep `solid`. */
    tabIconType() {
      return this.triggerKind === "segmented" ? "solid" : this.iconType;
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
      return S(
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
}, Lu = ["id", "aria-selected", "aria-controls", "tabindex", "disabled"], $u = { class: "ui-tab-trigger-label min-w-0 truncate" };
function zu(e, t, r, s, l, i) {
  const o = y("ui-icon");
  return n(), a("button", {
    type: "button",
    role: "tab",
    id: i.triggerDomId,
    class: _(i.triggerClass),
    "aria-selected": i.isSelected ? "true" : "false",
    "aria-controls": i.panelDomId,
    tabindex: i.isSelected ? 0 : -1,
    disabled: r.disabled,
    onClick: t[0] || (t[0] = (...d) => i.select && i.select(...d))
  }, [
    r.icon ? (n(), k(o, {
      key: 0,
      name: r.icon,
      type: i.tabIconType,
      size: i.tabIconSize,
      class: "ui-tab-trigger-icon",
      "aria-hidden": "true"
    }, null, 8, ["name", "type", "size"])) : f("", !0),
    c("span", $u, [
      p(e.$slots, "default", {}, () => [
        M(m(r.label), 1)
      ])
    ])
  ], 10, Lu);
}
const Du = /* @__PURE__ */ v(Au, [["render", zu]]);
let ft = 0;
const G = 40;
function J(e) {
  return String(e).padStart(2, "0");
}
const Vu = {
  name: "TimePicker",
  inheritAttrs: !1,
  props: {
    /** `HH:mm` (24 saat) */
    modelValue: {
      type: String,
      default: ""
    },
    /** Adım (dakika) */
    stepMinutes: {
      type: Number,
      default: 15
    },
    placeholder: {
      type: String,
      default: "Select time"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: void 0
    },
    /** `ui-popover` panel genişliği — dar zaman seçici için */
    popoverWidth: {
      type: [String, Number],
      default: "12.5rem"
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    return ft += 1, {
      fallbackId: `ui-timepicker-${ft}`,
      menuOpen: !1,
      draftHour: 0,
      draftMinute: 0,
      wheelSyncing: !1,
      _hourScrollTimer: null,
      _minuteScrollTimer: null,
      _wheelUnsub: null
    };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    hourOptions() {
      return Array.from({ length: 24 }, (e, t) => t);
    },
    minuteValues() {
      const e = Math.min(60, Math.max(1, Math.round(this.stepMinutes))), t = [];
      for (let r = 0; r < 60; r += e)
        t.push(r);
      return t;
    },
    hasValue() {
      return this.modelValue != null && this.modelValue !== "";
    },
    display() {
      return this.menuOpen ? `${J(this.draftHour)}:${J(this.draftMinute)}` : this.hasValue ? String(this.modelValue) : this.placeholder;
    },
    supportsScrollEnd() {
      return typeof window > "u" ? !1 : "onscrollend" in window;
    }
  },
  watch: {
    menuOpen(e) {
      e ? (this.applyModelToDraft(), this.$nextTick(() => {
        this.$nextTick(() => {
          this.scrollWheelsToDraft(), this.bindWheelListeners();
        });
      })) : this.unbindWheelListeners();
    },
    stepMinutes() {
      this.menuOpen && (this.applyModelToDraft(), this.$nextTick(() => {
        this.$nextTick(() => {
          this.scrollWheelsToDraft(), this.bindWheelListeners();
        });
      }));
    }
  },
  beforeUnmount() {
    clearTimeout(this._hourScrollTimer), clearTimeout(this._minuteScrollTimer), this.unbindWheelListeners();
  },
  methods: {
    pad2: J,
    applyModelToDraft() {
      const e = this.modelValue;
      let t = 0, r = 0;
      const s = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      s && (t = Math.min(23, Math.max(0, parseInt(s[1], 10))), r = Math.min(59, Math.max(0, parseInt(s[2], 10))));
      const l = this.minuteValues;
      let i = l[0] ?? 0, o = 999;
      for (const d of l) {
        const u = Math.abs(d - r);
        u < o && (o = u, i = d);
      }
      this.draftHour = t, this.draftMinute = i;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const t = e.querySelector(".ui-timepicker-wheel-spacer");
      if (!t) return (e.clientHeight - G) / 2;
      const r = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(r) ? r : (e.clientHeight - G) / 2;
    },
    indexFromScroll(e, t) {
      const r = this.wheelSpacerTop(e), s = e.scrollTop + e.clientHeight / 2, l = Math.round((s - r - G / 2) / G);
      return Math.min(t, Math.max(0, l));
    },
    scrollTopForIndex(e, t) {
      const r = this.wheelSpacerTop(e);
      return Math.max(0, r + t * G + G / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, t) {
      e && (e.scrollTop = this.scrollTopForIndex(e, t));
    },
    scrollWheelsToDraft() {
      this.wheelSyncing = !0;
      const e = this.draftHour;
      let r = this.minuteValues.indexOf(this.draftMinute);
      r === -1 && (r = 0);
      const s = () => {
        this.scrollWheelToIndex(this.$refs.hourWheel, e), this.scrollWheelToIndex(this.$refs.minuteWheel, r);
      };
      s(), requestAnimationFrame(() => {
        s(), requestAnimationFrame(() => {
          this.wheelSyncing = !1;
        });
      });
    },
    selectHour(e) {
      this.draftHour = e, this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.hourWheel, e), requestAnimationFrame(() => {
        this.wheelSyncing = !1, this.emitDraft();
      });
    },
    selectMinute(e) {
      const t = this.minuteValues;
      if (!t.length) return;
      const r = Math.min(t.length - 1, Math.max(0, e));
      this.draftMinute = t[r], this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.minuteWheel, r), requestAnimationFrame(() => {
        this.wheelSyncing = !1, this.emitDraft();
      });
    },
    bindWheelListeners() {
      this.unbindWheelListeners();
      const e = this.$refs.hourWheel, t = this.$refs.minuteWheel;
      !e || !t || (this.supportsScrollEnd ? (e.addEventListener("scrollend", this.onHourScrollEnd), t.addEventListener("scrollend", this.onMinuteScrollEnd), this._wheelUnsub = () => {
        e.removeEventListener("scrollend", this.onHourScrollEnd), t.removeEventListener("scrollend", this.onMinuteScrollEnd);
      }) : (e.addEventListener("scroll", this.onHourScrollDebounced, { passive: !0 }), t.addEventListener("scroll", this.onMinuteScrollDebounced, { passive: !0 }), this._wheelUnsub = () => {
        e.removeEventListener("scroll", this.onHourScrollDebounced), t.removeEventListener("scroll", this.onMinuteScrollDebounced);
      }));
    },
    unbindWheelListeners() {
      typeof this._wheelUnsub == "function" && (this._wheelUnsub(), this._wheelUnsub = null), clearTimeout(this._hourScrollTimer), clearTimeout(this._minuteScrollTimer);
    },
    onHourScrollDebounced() {
      this.wheelSyncing || (clearTimeout(this._hourScrollTimer), this._hourScrollTimer = setTimeout(() => this.finalizeHourScroll(), 240));
    },
    onMinuteScrollDebounced() {
      this.wheelSyncing || (clearTimeout(this._minuteScrollTimer), this._minuteScrollTimer = setTimeout(() => this.finalizeMinuteScroll(), 240));
    },
    onHourScrollEnd() {
      this.wheelSyncing || (clearTimeout(this._hourScrollTimer), this.finalizeHourScroll());
    },
    onMinuteScrollEnd() {
      this.wheelSyncing || (clearTimeout(this._minuteScrollTimer), this.finalizeMinuteScroll());
    },
    emitDraft() {
      const e = `${J(this.draftHour)}:${J(this.draftMinute)}`;
      e !== this.modelValue && (this.$emit("update:modelValue", e), this.$emit("change", e));
    },
    finalizeHourScroll() {
      const e = this.$refs.hourWheel;
      if (!e || this.wheelSyncing) return;
      const t = this.indexFromScroll(e, 23);
      this.draftHour = t;
      const r = this.scrollTopForIndex(e, t);
      Math.abs(e.scrollTop - r) > 0.5 && (e.scrollTop = r), this.emitDraft();
    },
    finalizeMinuteScroll() {
      const e = this.$refs.minuteWheel;
      if (!e || this.wheelSyncing) return;
      const t = this.minuteValues;
      if (!t.length) return;
      const r = this.indexFromScroll(e, t.length - 1);
      this.draftMinute = t[r];
      const s = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - s) > 0.5 && (e.scrollTop = s), this.emitDraft();
    }
  }
}, Pu = { class: "min-w-0 flex-1 truncate text-foreground" }, Mu = { class: "ui-timepicker-panel w-full p-2" }, Ru = { class: "relative" }, Ou = { class: "relative z-[1] flex items-stretch gap-0.5" }, Bu = ["aria-valuenow"], Eu = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Fu = { class: "ui-timepicker-wheel-spacer" }, Nu = ["onClick"], Yu = ["aria-valuenow"], Hu = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Wu = { class: "ui-timepicker-wheel-spacer" }, ju = ["onClick"];
function Ku(e, t, r, s, l, i) {
  const o = y("ui-button"), d = y("ui-popover");
  return n(), a("div", {
    class: _(["ui-timepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    b(d, {
      open: l.menuOpen,
      "onUpdate:open": t[0] || (t[0] = (u) => l.menuOpen = u),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: w(({ open: u, toggle: h }) => [
        b(o, {
          type: "button",
          id: i.resolvedId,
          variant: "solid",
          color: "input",
          rounded: "",
          fulled: "",
          "text-align": "left",
          "prefix-icon": "clock",
          disabled: r.disabled,
          "aria-expanded": u ? "true" : "false",
          "aria-haspopup": !0,
          onClick: h
        }, {
          default: w(() => [
            c("span", Pu, m(i.display), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: w(() => [
        c("div", Mu, [
          c("div", Ru, [
            t[2] || (t[2] = c("div", {
              class: "pointer-events-none absolute inset-x-0 top-1/2 z-0 h-10 -translate-y-1/2 rounded-lg bg-secondary/35 ring-1 ring-border",
              "aria-hidden": "true"
            }, null, -1)),
            c("div", Ou, [
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": l.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": "Saat"
              }, [
                c("div", Eu, [
                  c("div", Fu, [
                    (n(!0), a(A, null, V(i.hourOptions, (u) => (n(), a("button", {
                      key: "h-" + u,
                      type: "button",
                      tabindex: "-1",
                      class: "ui-timepicker-wheel-item",
                      onClick: (h) => i.selectHour(u)
                    }, m(i.pad2(u)), 9, Nu))), 128))
                  ])
                ], 512)
              ], 8, Bu),
              t[1] || (t[1] = c("span", {
                class: "flex w-4 shrink-0 select-none items-center justify-center self-stretch text-sm font-normal leading-5 tabular-nums text-muted-foreground",
                "aria-hidden": "true"
              }, ":", -1)),
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": l.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": "Dakika"
              }, [
                c("div", Hu, [
                  c("div", Wu, [
                    (n(!0), a(A, null, V(i.minuteValues, (u, h) => (n(), a("button", {
                      key: "m-" + u,
                      type: "button",
                      tabindex: "-1",
                      class: "ui-timepicker-wheel-item",
                      onClick: (g) => i.selectMinute(h)
                    }, m(i.pad2(u)), 9, ju))), 128))
                  ])
                ], 512)
              ], 8, Yu)
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const Gu = /* @__PURE__ */ v(Vu, [["render", Ku]]), H = ge({
  /** @type {ToastItem[]} */
  items: []
});
let mt = 0;
function ee(e = {}) {
  mt += 1;
  const t = mt, r = {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    variant: e.variant ?? "info",
    duration: e.duration !== void 0 ? e.duration : 4500,
    _timer: null
  };
  return H.items.push(r), r.duration > 0 && (r._timer = setTimeout(() => _e(t), r.duration)), t;
}
function _e(e) {
  const t = H.items.findIndex((s) => s.id === e);
  if (t === -1) return;
  const r = H.items[t];
  r._timer && (clearTimeout(r._timer), r._timer = null), H.items.splice(t, 1);
}
function Uu() {
  for (const e of H.items)
    e._timer && clearTimeout(e._timer);
  H.items.splice(0);
}
const pt = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, gt = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, qu = {
  name: "Toast",
  computed: {
    items() {
      return H.items;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    queueDismissToast: _e,
    iconFor(e) {
      return pt[e] || pt.info;
    },
    iconToneClass(e) {
      return gt[e] || gt.info;
    },
    toastClasses(e) {
      return [`ui-alert ui-alert--${e.variant ?? "info"} ui-alert--toast`];
    },
    toastA11y(e) {
      const t = e.variant === "error";
      return {
        role: t ? "alert" : "status",
        "aria-live": t ? "assertive" : "polite"
      };
    }
  }
}, Qu = { class: "ui-toast-host" }, Zu = { class: "ui-alert-body" }, Xu = {
  key: 0,
  class: "ui-alert-title"
}, Ju = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function ed(e, t, r, s, l, i) {
  const o = y("ui-icon"), d = y("ui-button");
  return n(), k(Q, { to: "body" }, [
    c("div", Qu, [
      b($t, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack"
      }, {
        default: w(() => [
          (n(!0), a(A, null, V(i.items, (u) => (n(), a("div", {
            key: u.id,
            class: "pointer-events-auto flex w-full justify-center"
          }, [
            c("div", x({
              class: i.toastClasses(u)
            }, { ref_for: !0 }, i.toastA11y(u)), [
              c("span", {
                class: _(["ui-alert-icon", i.iconToneClass(u.variant)]),
                "aria-hidden": "true"
              }, [
                b(o, {
                  name: i.iconFor(u.variant),
                  size: "sm"
                }, null, 8, ["name"])
              ], 2),
              c("div", Zu, [
                u.title ? (n(), a("p", Xu, m(u.title), 1)) : f("", !0),
                u.description ? (n(), a("p", Ju, m(u.description), 1)) : f("", !0)
              ]),
              b(d, {
                "native-type": "button",
                variant: "ghost",
                color: "secondary",
                cubed: "",
                size: "sm",
                class: "ui-toast-dismiss shrink-0",
                "prefix-icon": "xmark",
                "aria-label": i.dismissLabel,
                onClick: (h) => i.queueDismissToast(u.id)
              }, null, 8, ["aria-label", "onClick"])
            ], 16)
          ]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const td = /* @__PURE__ */ v(qu, [["render", ed]]), id = ["square", "video", "auto"], rd = ["fill", "sm", "md", "lg"], bt = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, nd = {
  name: "Photo",
  inheritAttrs: !1,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    favorite: {
      type: Boolean,
      default: !1
    },
    aspect: {
      type: String,
      default: "square",
      validator: (e) => id.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => rd.includes(e)
    },
    interactive: {
      type: Boolean,
      default: !0
    },
    preview: {
      type: Boolean,
      default: !0
    },
    overflowLabel: {
      type: String,
      default: ""
    },
    galleryIndex: {
      type: Number,
      default: -1
    }
  },
  emits: ["click", "open-preview"],
  data() {
    return {
      imageFailed: !1,
      previewOpen: !1,
      previewIndex: 0
    };
  },
  computed: {
    rootTag() {
      return this.interactive ? "button" : "div";
    },
    rootClass() {
      return S(
        "ui-photo",
        `ui-photo--aspect-${this.aspect}`,
        bt[this.size] || bt.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [r, s] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = s);
      return t;
    },
    rootBind() {
      if (!this.interactive) return this.passthroughAttrs;
      const e = this.passthroughAttrs["aria-label"] != null && this.passthroughAttrs["aria-label"] !== "" ? this.passthroughAttrs["aria-label"] : this.resolvedAlt;
      return {
        ...this.passthroughAttrs,
        "aria-label": e
      };
    },
    resolvedAlt() {
      return this.alt ? this.alt : this.$t("ui.photo.fallbackAlt");
    },
    galleryList() {
      return this.src ? [{ src: this.src, alt: this.resolvedAlt }] : [];
    },
    activeItem() {
      return this.galleryList[this.previewIndex] ?? null;
    },
    activeSrc() {
      var e;
      return ((e = this.activeItem) == null ? void 0 : e.src) ?? "";
    },
    activeAlt() {
      var e;
      return ((e = this.activeItem) == null ? void 0 : e.alt) || this.resolvedAlt;
    },
    showPrev() {
      return this.galleryList.length > 1 && this.previewIndex > 0;
    },
    showNext() {
      return this.galleryList.length > 1 && this.previewIndex < this.galleryList.length - 1;
    },
    counterLabel() {
      return this.galleryList.length <= 1 ? "" : this.$t("ui.photo.counter", {
        current: this.previewIndex + 1,
        total: this.galleryList.length
      });
    },
    closeLabel() {
      return this.$t("ui.dialog.close");
    },
    prevLabel() {
      return this.$t("ui.photo.prev");
    },
    nextLabel() {
      return this.$t("ui.photo.next");
    },
    previewAriaLabel() {
      return this.$t("ui.photo.previewAria");
    }
  },
  watch: {
    src() {
      this.imageFailed = !1;
    },
    previewOpen(e) {
      typeof document > "u" || (document.body.style.overflow = e ? "hidden" : "");
    }
  },
  beforeUnmount() {
    typeof document < "u" && (document.body.style.overflow = "");
  },
  methods: {
    onClick(e) {
      if (this.$emit("click", e), !(!this.interactive || !this.preview || !this.src)) {
        if (this.galleryIndex >= 0) {
          this.$emit("open-preview", this.galleryIndex);
          return;
        }
        this.previewIndex = 0, this.previewOpen = !0;
      }
    },
    closePreview() {
      this.previewOpen = !1;
    },
    goPrev() {
      this.showPrev && (this.previewIndex -= 1);
    },
    goNext() {
      this.showNext && (this.previewIndex += 1);
    },
    onPreviewKeydown(e) {
      e.key === "Escape" ? (e.preventDefault(), this.closePreview()) : e.key === "ArrowLeft" ? (e.preventDefault(), this.goPrev()) : e.key === "ArrowRight" && (e.preventDefault(), this.goNext());
    }
  }
}, sd = ["src", "alt"], ld = ["aria-hidden"], ad = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, od = {
  key: 3,
  class: "ui-photo__overflow"
}, ud = ["aria-label"], dd = ["aria-label"], cd = { class: "ui-photo-preview__panel" }, hd = ["src", "alt"], fd = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function md(e, t, r, s, l, i) {
  const o = y("ui-icon"), d = y("ui-button");
  return n(), a(A, null, [
    (n(), k(U(i.rootTag), x({
      type: r.interactive ? "button" : void 0,
      class: i.rootClass
    }, i.rootBind, { onClick: i.onClick }), {
      default: w(() => [
        r.src && !l.imageFailed ? (n(), a("img", {
          key: 0,
          src: r.src,
          alt: i.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (u) => l.imageFailed = !0)
        }, null, 40, sd)) : (n(), a("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          b(o, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, ld)),
        r.favorite ? (n(), a("span", ad, [
          b(o, {
            name: "star",
            type: "solid",
            size: "xs"
          })
        ])) : f("", !0),
        r.overflowLabel ? (n(), a("span", od, m(r.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (n(), k(Q, { to: "body" }, [
      b(ne, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: w(() => [
          l.previewOpen ? (n(), a("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[2] || (t[2] = (...u) => i.onPreviewKeydown && i.onPreviewKeydown(...u))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[1] || (t[1] = (...u) => i.closePreview && i.closePreview(...u))
            }, null, 8, dd),
            c("div", cd, [
              b(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (n(), k(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: L(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.activeSrc ? (n(), a("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, hd)) : f("", !0),
              i.showNext ? (n(), k(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: L(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.counterLabel ? (n(), a("p", fd, m(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, ud)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const pd = /* @__PURE__ */ v(nd, [["render", md]]), gd = ["square", "video", "auto"], bd = {
  name: "Photos",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    max: {
      type: Number,
      default: 4
    },
    aspect: {
      type: String,
      default: "square",
      validator: (e) => gd.includes(e)
    },
    preview: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      previewOpen: !1,
      previewIndex: 0
    };
  },
  computed: {
    normalizedItems() {
      return (this.items || []).map((e, t) => {
        const r = String((e == null ? void 0 : e.src) ?? (e == null ? void 0 : e.url) ?? "").trim();
        return r ? {
          key: (e == null ? void 0 : e.id) ?? (e == null ? void 0 : e.key) ?? null,
          src: r,
          alt: (e == null ? void 0 : e.alt) ?? "",
          favorite: !!((e == null ? void 0 : e.favorite) ?? (e == null ? void 0 : e.isFavorite) ?? (e == null ? void 0 : e.is_favorite))
        } : null;
      }).filter(Boolean);
    },
    displayCount() {
      return Math.min(this.normalizedItems.length, this.max);
    },
    overflowCount() {
      return Math.max(0, this.normalizedItems.length - this.max);
    },
    visibleItems() {
      return this.normalizedItems.length ? this.normalizedItems.slice(0, this.max) : [];
    },
    overflowLabel() {
      return this.$t("ui.photos.more", { count: this.overflowCount });
    },
    layoutClass() {
      const e = this.visibleItems.length;
      return S(
        e ? `ui-photos--count-${Math.min(e, 4)}` : "ui-photos--empty",
        this.overflowCount > 0 && e >= this.max ? "ui-photos--has-overflow" : ""
      );
    },
    activeItem() {
      return this.normalizedItems[this.previewIndex] ?? null;
    },
    activeSrc() {
      var e;
      return ((e = this.activeItem) == null ? void 0 : e.src) ?? "";
    },
    activeAlt() {
      var e;
      return ((e = this.activeItem) == null ? void 0 : e.alt) || this.$t("ui.photo.fallbackAlt");
    },
    showPrev() {
      return this.normalizedItems.length > 1 && this.previewIndex > 0;
    },
    showNext() {
      return this.normalizedItems.length > 1 && this.previewIndex < this.normalizedItems.length - 1;
    },
    counterLabel() {
      return this.normalizedItems.length <= 1 ? "" : this.$t("ui.photo.counter", {
        current: this.previewIndex + 1,
        total: this.normalizedItems.length
      });
    },
    closeLabel() {
      return this.$t("ui.dialog.close");
    },
    prevLabel() {
      return this.$t("ui.photo.prev");
    },
    nextLabel() {
      return this.$t("ui.photo.next");
    },
    previewAriaLabel() {
      return this.$t("ui.photo.previewAria");
    }
  },
  watch: {
    previewOpen(e) {
      typeof document > "u" || (document.body.style.overflow = e ? "hidden" : "");
    }
  },
  beforeUnmount() {
    typeof document < "u" && (document.body.style.overflow = "");
  },
  methods: {
    openPreviewAt(e) {
      !this.preview || !this.normalizedItems.length || (this.previewIndex = Math.max(0, Math.min(e, this.normalizedItems.length - 1)), this.previewOpen = !0);
    },
    closePreview() {
      this.previewOpen = !1;
    },
    goPrev() {
      this.showPrev && (this.previewIndex -= 1);
    },
    goNext() {
      this.showNext && (this.previewIndex += 1);
    },
    onPreviewKeydown(e) {
      e.key === "Escape" ? (e.preventDefault(), this.closePreview()) : e.key === "ArrowLeft" ? (e.preventDefault(), this.goPrev()) : e.key === "ArrowRight" && (e.preventDefault(), this.goNext());
    }
  }
}, yd = ["data-count"], vd = ["aria-label"], _d = ["aria-label"], kd = { class: "ui-photo-preview__panel" }, wd = ["src", "alt"], xd = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Sd(e, t, r, s, l, i) {
  const o = y("ui-photo"), d = y("ui-button");
  return n(), a(A, null, [
    c("div", {
      class: _(["ui-photos", i.layoutClass]),
      "data-count": i.displayCount
    }, [
      (n(!0), a(A, null, V(i.visibleItems, (u, h) => (n(), k(o, {
        key: u.key || `${u.src}-${h}`,
        src: u.src,
        alt: u.alt || "",
        favorite: !!u.favorite,
        aspect: r.aspect,
        preview: r.preview,
        "gallery-index": h,
        "overflow-label": h === i.visibleItems.length - 1 && i.overflowCount > 0 ? i.overflowLabel : "",
        "aria-label": u.alt || void 0,
        onOpenPreview: i.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, yd),
    (n(), k(Q, { to: "body" }, [
      b(ne, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: w(() => [
          l.previewOpen ? (n(), a("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[1] || (t[1] = (...u) => i.onPreviewKeydown && i.onPreviewKeydown(...u))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[0] || (t[0] = (...u) => i.closePreview && i.closePreview(...u))
            }, null, 8, _d),
            c("div", kd, [
              b(d, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (n(), k(d, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: L(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.activeSrc ? (n(), a("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, wd)) : f("", !0),
              i.showNext ? (n(), k(d, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: L(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.counterLabel ? (n(), a("p", xd, m(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, vd)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Cd = /* @__PURE__ */ v(bd, [["render", Sd]]), Td = {
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
}, Tt = {
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
};
function ae(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function Dd() {
  return {
    push: ee,
    dismiss: _e,
    clear: Uu,
    info: (e) => ee({ ...ae(e), variant: "info" }),
    success: (e) => ee({ ...ae(e), variant: "success" }),
    warning: (e) => ee({ ...ae(e), variant: "warning" }),
    error: (e) => ee({ ...ae(e), variant: "error" })
  };
}
function Vd(e = !1) {
  return ge({
    open: !!e,
    show() {
      this.open = !0;
    },
    hide() {
      this.open = !1;
    },
    toggle() {
      this.open = !this.open;
    }
  });
}
function Pd() {
  return {
    confirm: Pr
  };
}
const pe = {
  en: Td,
  tr: Tt
};
function Md(e = "tr") {
  return pe[e] ?? pe.tr;
}
const Rd = Tt, Id = [
  ["ui-action-group", Rt],
  ["ui-alert", jt],
  ["ui-avatar", Jt],
  ["ui-badge", kt],
  ["ui-button", Mi],
  ["ui-card", Ji],
  ["ui-checkbox", Ar],
  ["ui-checkbox-group", Vr],
  ["ui-color-picker", mr],
  ["ui-currency-input", _r],
  ["ui-confirm-dialog", Or],
  ["ui-date-picker", Kr],
  ["ui-date-range-picker", on],
  ["ui-dialog", An],
  ["ui-divider", ue],
  ["ui-dropdown", Dn],
  ["ui-empty", Yn],
  ["ui-field", Zn],
  ["ui-file", us],
  ["ui-form-row", _s],
  ["ui-icon", Ts],
  ["ui-input", Rs],
  ["ui-password", Hs],
  ["ui-phone", Ks],
  ["ui-pin", Xs],
  ["ui-list", il],
  ["ui-list-item", dl],
  ["ui-popover", _l],
  ["ui-progress", zl],
  ["ui-radio", Bl],
  ["ui-radio-group", Wl],
  ["ui-select", ca],
  ["ui-menu", ya],
  ["ui-menu-group", xa],
  ["ui-menu-item", Ta],
  ["ui-menu-nav", $a],
  ["ui-segment", Fa],
  ["ui-segment-group", Ka],
  ["ui-skeleton", _o],
  ["ui-slider", zo],
  ["ui-stepper", ho],
  ["ui-switch", Mo],
  ["ui-table", Eo],
  ["ui-table-body", Ho],
  ["ui-table-cell", qo],
  ["ui-table-head", eu],
  ["ui-table-header", ru],
  ["ui-table-pagination", du],
  ["ui-table-row", mu],
  ["ui-tag", Ct],
  ["ui-tab-list", yu],
  ["ui-tab-panel", wu],
  ["ui-tabs", Tu],
  ["ui-tab-trigger", Du],
  ["ui-time-picker", Gu],
  ["ui-tooltip", ye],
  ["ui-toast", td],
  ["ui-photo", pd],
  ["ui-photos", Cd]
];
function Ad(e, t = {}) {
  var i, o;
  const { i18n: r, locale: s, locales: l } = t;
  if ((i = r == null ? void 0 : r.global) != null && i.mergeLocaleMessage) {
    const d = l ?? (s != null ? [s] : [
      typeof r.global.locale == "string" ? r.global.locale : ((o = r.global.locale) == null ? void 0 : o.value) ?? "tr"
    ]);
    for (const u of d) {
      const h = pe[u];
      h && r.global.mergeLocaleMessage(u, h);
    }
  }
  for (const [d, u] of Id)
    e.component(d, u);
}
const Od = {
  install: Ad
};
export {
  Rt as ActionGroup,
  jt as Alert,
  Jt as Avatar,
  kt as Badge,
  Mi as Button,
  Ji as Card,
  Ar as Checkbox,
  Vr as CheckboxGroup,
  mr as ColorPicker,
  Or as ConfirmDialog,
  _r as CurrencyInput,
  Kr as DatePicker,
  on as DateRangePicker,
  An as Dialog,
  ue as Divider,
  Dn as Dropdown,
  Yn as Empty,
  Zn as Field,
  us as File,
  _s as FormRow,
  Ts as Icon,
  Rs as Input,
  il as List,
  dl as ListItem,
  ya as Menu,
  xa as MenuGroup,
  Ta as MenuItem,
  $a as MenuNav,
  Hs as Password,
  Ks as Phone,
  pd as Photo,
  Cd as Photos,
  Xs as Pin,
  _l as Popover,
  zl as Progress,
  Bl as Radio,
  Wl as RadioGroup,
  Fa as Segment,
  Ka as SegmentGroup,
  ca as Select,
  _o as Skeleton,
  zo as Slider,
  ho as Stepper,
  Mo as Switch,
  yu as TabList,
  wu as TabPanel,
  Du as TabTrigger,
  Eo as Table,
  Ho as TableBody,
  qo as TableCell,
  eu as TableHead,
  ru as TableHeader,
  du as TablePagination,
  mu as TableRow,
  Tu as Tabs,
  Ct as Tag,
  Gu as TimePicker,
  td as Toast,
  ye as Tooltip,
  Uu as clearToasts,
  Od as default,
  _e as dismissToast,
  zd as formatCurrencyAmount,
  wt as getCurrencySymbol,
  Md as getUiMessages,
  ee as pushToast,
  Pr as requestConfirm,
  ve as resolveCurrencyCode,
  pr as sanitizeMoneyInput,
  Rd as uiMessagesTr,
  Pd as useConfirm,
  Vd as useDialog,
  Dd as useToast
};
//# sourceMappingURL=index.js.map
