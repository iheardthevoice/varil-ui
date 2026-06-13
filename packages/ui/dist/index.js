import { openBlock as s, createElementBlock as a, mergeProps as C, renderSlot as g, resolveComponent as y, normalizeClass as v, createVNode as b, createCommentVNode as f, createElementVNode as c, toDisplayString as p, createBlock as k, resolveDynamicComponent as U, withCtx as w, Teleport as Z, Transition as ne, normalizeStyle as B, createTextVNode as P, Fragment as L, withModifiers as A, renderList as V, withKeys as q, reactive as be, normalizeProps as St, guardReactiveProps as xt, withDirectives as re, vShow as ye, createSlots as Ct, vModelText as xe, useSlots as Dt, computed as j, ref as E, onMounted as Vt, watch as Pt, nextTick as Ce, TransitionGroup as Mt } from "vue";
import { RouterLink as Ot } from "vue-router";
function S(...e) {
  const t = [];
  for (const r of e)
    if (r) {
      if (typeof r == "string") {
        t.push(r);
        continue;
      }
      if (typeof r == "object")
        for (const [n, l] of Object.entries(r))
          l && t.push(n);
    }
  return t.join(" ");
}
const _ = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, l] of t)
    r[n] = l;
  return r;
}, Rt = ["horizontal", "vertical"], Bt = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır veya sütun dizilimi */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => Rt.includes(e)
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
}, Et = ["aria-label"];
function Ft(e, t, r, n, l, i) {
  return s(), a("div", C({
    class: i.rootClass,
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, Et);
}
const Nt = /* @__PURE__ */ _(Bt, [["render", Ft]]), Yt = ["info", "success", "warning", "error"], Te = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, Ie = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, Ht = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Bilgi / başarı / uyarı / hata görünümü */
    variant: {
      type: String,
      default: "info",
      validator: (e) => Yt.includes(e)
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
      return this.icon || Te[this.variant] || Te.info;
    },
    iconToneClass() {
      return Ie[this.variant] || Ie.info;
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
}, Wt = ["role"], jt = { class: "ui-alert-body" }, Kt = {
  key: 0,
  class: "ui-alert-title"
}, Gt = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, Ut = {
  key: 2,
  class: "ui-alert-slot"
};
function qt(e, t, r, n, l, i) {
  const o = y("ui-icon"), u = y("ui-button");
  return s(), a("div", C({
    class: i.rootClasses,
    role: i.alertRole
  }, i.passthroughAttrs), [
    r.showIcon ? (s(), a("span", {
      key: 0,
      class: v(["ui-alert-icon", i.iconToneClass]),
      "aria-hidden": "true"
    }, [
      g(e.$slots, "icon", {}, () => [
        b(o, {
          name: i.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : f("", !0),
    c("div", jt, [
      r.title ? (s(), a("p", Kt, p(r.title), 1)) : f("", !0),
      r.description ? (s(), a("p", Gt, p(r.description), 1)) : f("", !0),
      e.$slots.default ? (s(), a("div", Ut, [
        g(e.$slots, "default")
      ])) : f("", !0)
    ]),
    r.dismissible ? (s(), k(u, {
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
  ], 16, Wt);
}
const Zt = /* @__PURE__ */ _(Ht, [["render", qt]]), Qt = ["sm", "md", "lg"], Le = {
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
}), ze = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function Xt(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return ze[t] && (t = ze[t]), t >= "A" && t <= "Z" ? t : "default";
}
function Jt(e) {
  var n;
  const t = (e || "").trim();
  if (!t) return "?";
  const r = t.split(/\s+/).filter(Boolean);
  if (r.length >= 2) {
    const l = r[0][0] || "", i = r[r.length - 1][0] || "";
    return `${l}${i}`.toLocaleUpperCase("tr-TR");
  }
  return (((n = r[0]) == null ? void 0 : n[0]) || "?").toLocaleUpperCase("tr-TR");
}
const ei = {
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
      validator: (e) => Qt.includes(e)
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
        Le[this.size] || Le.md,
        this.ring ? "ui-avatar--ring" : "",
        this.interactive ? "ui-avatar--interactive" : "",
        this.showLetterTone ? "ui-avatar--letter" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
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
      return Jt(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? Xt(e[0]) : "default";
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
}, ti = ["src", "alt"], ii = ["role", "aria-label", "aria-hidden"];
function ri(e, t, r, n, l, i) {
  return s(), k(U(i.rootTag), C({
    type: r.interactive ? "button" : void 0,
    class: i.rootClass,
    style: i.rootStyle
  }, i.rootBind, { onClick: i.onRootClick }), {
    default: w(() => [
      r.src && !l.imageFailed ? (s(), a("img", {
        key: 0,
        src: r.src,
        alt: i.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (o) => l.imageFailed = !0)
      }, null, 40, ti)) : (s(), a("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: r.interactive ? void 0 : "img",
        "aria-label": r.interactive ? void 0 : i.resolvedAlt,
        "aria-hidden": r.interactive ? "true" : void 0
      }, p(i.displayInitials), 9, ii))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const ni = /* @__PURE__ */ _(ei, [["render", ri]]);
let si = 0;
const li = ["top", "bottom", "left", "right"], ai = {
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
      validator: (e) => li.includes(e)
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
      tooltipId: `ui-tooltip-${++si}`,
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
      const t = e.getBoundingClientRect(), r = 8, n = t.left + t.width / 2, l = t.top + t.height / 2;
      let i = {};
      switch (this.placement) {
        case "bottom":
          i = {
            left: `${n}px`,
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
            left: `${n}px`,
            top: `${t.top - r}px`,
            transform: "translate(-50%, -100%)"
          };
      }
      this.panelStyle = i;
    }
  }
}, oi = ["id"], ui = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function di(e, t, r, n, l, i) {
  return s(), a("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...o) => i.onEnter && i.onEnter(...o)),
    onMouseleave: t[1] || (t[1] = (...o) => i.onLeave && i.onLeave(...o)),
    onFocusin: t[2] || (t[2] = (...o) => i.onFocusIn && i.onFocusIn(...o)),
    onFocusout: t[3] || (t[3] = (...o) => i.onFocusOut && i.onFocusOut(...o))
  }, [
    g(e.$slots, "default"),
    (s(), k(Z, { to: "body" }, [
      b(ne, { name: "ui-tooltip-fade" }, {
        default: w(() => [
          l.open && !r.disabled && i.hasContent ? (s(), a("div", {
            key: 0,
            id: l.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed",
            style: B(l.panelStyle),
            role: "tooltip"
          }, [
            c("span", ui, [
              g(e.$slots, "content", {}, () => [
                P(p(r.label), 1)
              ])
            ])
          ], 12, oi)) : f("", !0)
        ]),
        _: 3
      })
    ]))
  ], 544);
}
const ve = /* @__PURE__ */ _(ai, [["render", di]]), ci = ["solid", "secondary", "outline"], hi = ["sm", "md", "lg"], $e = {
  solid: "border border-transparent bg-primary text-primary-foreground",
  secondary: "border border-transparent bg-secondary text-secondary-foreground",
  outline: "border border-border bg-transparent text-foreground"
}, De = {
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, de = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  full: "max-w-full"
};
function fi(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let r = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(r) && (r = `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}`), /^#[0-9A-Fa-f]{6}$/.test(r) ? r.toUpperCase() : "";
}
function mi(e) {
  const t = parseInt(e.slice(1, 3), 16), r = parseInt(e.slice(3, 5), 16), n = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * r + 0.114 * n) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const pi = {
  name: "Badge",
  components: { Tooltip: ve },
  props: {
    variant: {
      type: String,
      default: "solid",
      validator: (e) => ci.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => hi.includes(e)
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
      return fi(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: mi(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return [
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        De[this.size] || De.sm,
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
}, gi = {
  key: 0,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, bi = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function yi(e, t, r, n, l, i) {
  const o = y("Tooltip");
  return s(), k(o, {
    label: i.tooltipLabel,
    disabled: !i.showTooltip,
    placement: "top"
  }, {
    default: w(() => [
      c("span", {
        class: v(i.badgeClasses),
        style: B(i.hexBadgeStyle)
      }, [
        e.$slots.prepend ? (s(), a("span", gi, [
          g(e.$slots, "prepend")
        ])) : f("", !0),
        c("span", {
          ref: "labelRef",
          class: v(["ui-badge-label", i.labelWidthClass])
        }, [
          g(e.$slots, "default")
        ], 2),
        e.$slots.append ? (s(), a("span", bi, [
          g(e.$slots, "append")
        ])) : f("", !0)
      ], 6)
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const Tt = /* @__PURE__ */ _(pi, [["render", yi]]), vi = ["sm", "md", "lg"], _i = ["solid", "outline", "ghost", "link"], ki = ["primary", "secondary", "input", "warning", "success", "info"], wi = ["button", "submit", "reset"], Ve = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, Pe = {
  sm: "aspect-square size-8 shrink-0 p-0 !min-h-0 text-xs leading-4",
  md: "aspect-square size-9 shrink-0 p-0 !min-h-0 text-sm leading-5",
  lg: "aspect-square size-11 shrink-0 p-0 !min-h-0 text-base leading-6"
}, Si = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, Me = {
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
}, xi = {
  name: "Button",
  components: { RouterLink: Ot },
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
      validator: (e) => wi.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => _i.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => ki.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => vi.includes(e)
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
      this.cubed && !e ? t = Pe[this.size] || Pe.md : e ? t = Si[this.size] : t = Ve[this.size] || Ve.md;
      let r = "";
      return e || (this.rounded && !this.cubed || this.cubed) && (r = "rounded-full"), [
        "ui-button ui-control font-sans",
        Me[this.variant][this.color] || Me.solid.primary,
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
}, Ci = ["href", "data-variant", "data-color", "aria-disabled", "tabindex", "onClick"], Ti = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, Ii = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Li = {
  key: 0,
  class: "sr-only"
}, Ai = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, zi = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, $i = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Di = ["type", "disabled", "data-variant", "data-color"], Vi = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, Pi = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Mi = {
  key: 0,
  class: "sr-only"
}, Oi = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Ri = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Bi = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Ei(e, t, r, n, l, i) {
  const o = y("ui-icon"), u = y("RouterLink");
  return i.hasRouterTo ? (s(), k(u, {
    key: 0,
    to: r.to,
    custom: ""
  }, {
    default: w(({ href: d, navigate: h }) => [
      c("a", {
        href: d,
        class: v(i.buttonClasses),
        "data-variant": r.variant,
        "data-color": r.color,
        "aria-disabled": i.isDisabled ? "true" : void 0,
        tabindex: i.isDisabled ? -1 : void 0,
        onClick: (m) => i.onRouterLinkClick(m, h)
      }, [
        r.loading && i.usesCubedCenterLayout ? (s(), a("span", Ti, [
          b(o, {
            size: i.cubedIconSize,
            name: "spinner",
            class: "fa-spin"
          }, null, 8, ["size"])
        ])) : r.loading ? (s(), a(L, { key: 1 }, [
          c("span", Ii, [
            b(o, {
              size: i.inlineIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          c("span", {
            class: v(i.textContentClass)
          }, [
            i.resolvedLoadingText ? (s(), a("span", Li, p(i.resolvedLoadingText), 1)) : g(e.$slots, "default", { key: 1 })
          ], 2)
        ], 64)) : i.usesCubedCenterLayout ? (s(), a("span", Ai, [
          r.prefixIcon ? (s(), k(o, {
            key: 0,
            size: i.cubedIconSize,
            name: r.prefixIcon
          }, null, 8, ["size", "name"])) : r.suffixIcon ? (s(), k(o, {
            key: 1,
            size: i.cubedIconSize,
            name: r.suffixIcon
          }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
        ])) : (s(), a(L, { key: 3 }, [
          r.prefixIcon ? (s(), a("span", zi, [
            b(o, {
              size: i.inlineIconSize,
              name: r.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          c("span", {
            class: v(i.textContentClass)
          }, [
            g(e.$slots, "default")
          ], 2),
          r.suffixIcon ? (s(), a("span", $i, [
            b(o, {
              size: i.inlineIconSize,
              name: r.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 10, Ci)
    ]),
    _: 3
  }, 8, ["to"])) : (s(), a("button", {
    key: 1,
    type: r.nativeType,
    disabled: i.isDisabled,
    class: v(i.buttonClasses),
    "data-variant": r.variant,
    "data-color": r.color,
    onClick: t[0] || (t[0] = (...d) => i.onClick && i.onClick(...d))
  }, [
    r.loading && i.usesCubedCenterLayout ? (s(), a("span", Vi, [
      b(o, {
        size: i.cubedIconSize,
        name: "spinner",
        class: "fa-spin"
      }, null, 8, ["size"])
    ])) : r.loading ? (s(), a(L, { key: 1 }, [
      c("span", Pi, [
        b(o, {
          size: i.inlineIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      c("span", {
        class: v(i.textContentClass)
      }, [
        i.resolvedLoadingText ? (s(), a("span", Mi, p(i.resolvedLoadingText), 1)) : g(e.$slots, "default", { key: 1 })
      ], 2)
    ], 64)) : i.usesCubedCenterLayout ? (s(), a("span", Oi, [
      r.prefixIcon ? (s(), k(o, {
        key: 0,
        size: i.cubedIconSize,
        name: r.prefixIcon
      }, null, 8, ["size", "name"])) : r.suffixIcon ? (s(), k(o, {
        key: 1,
        size: i.cubedIconSize,
        name: r.suffixIcon
      }, null, 8, ["size", "name"])) : g(e.$slots, "default", { key: 2 })
    ])) : (s(), a(L, { key: 3 }, [
      r.prefixIcon ? (s(), a("span", Ri, [
        b(o, {
          size: i.inlineIconSize,
          name: r.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      c("span", {
        class: v(i.textContentClass)
      }, [
        g(e.$slots, "default")
      ], 2),
      r.suffixIcon ? (s(), a("span", Bi, [
        b(o, {
          size: i.inlineIconSize,
          name: r.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 10, Di));
}
const Fi = /* @__PURE__ */ _(xi, [["render", Ei]]), Ni = ["none", "sm", "md"], Oe = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, Yi = {
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
      validator: (e) => Ni.includes(e)
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
      return ["ui-divider", Oe[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        Oe[this.spacing] || "",
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
}, Hi = { class: "ui-divider__label" }, Wi = {
  key: 1,
  class: "ui-section-label"
};
function ji(e, t, r, n, l, i) {
  const o = y("ui-icon");
  return i.hasLabel ? (s(), a("div", C({
    key: 1,
    class: i.labeledClass
  }, i.labeledAttrs), [
    t[0] || (t[0] = c("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    c("span", Hi, [
      r.icon ? (s(), k(o, {
        key: 0,
        name: r.icon,
        size: "sm",
        class: "text-muted-foreground"
      }, null, 8, ["name"])) : f("", !0),
      r.title ? (s(), a("span", Wi, p(r.title), 1)) : f("", !0)
    ]),
    t[1] || (t[1] = c("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1))
  ], 16)) : (s(), a("hr", C({
    key: 0,
    class: i.rootClass
  }, i.rootAttrs), null, 16));
}
const ue = /* @__PURE__ */ _(Yi, [["render", ji]]), Ki = ["solid", "dashed", "dotted", "double"], Re = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Gi = ["solid", "regular", "brands", "light", "duotone", "thin"], Ui = {
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
      validator: (e) => Ki.includes(e)
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
      validator: (e) => Gi.includes(e)
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
}, qi = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, Zi = {
  key: 0,
  class: "ui-header-lead"
}, Qi = { class: "ui-header-lead__main" }, Xi = {
  key: 0,
  class: "ui-header-lead__icon"
}, Ji = { class: "ui-header-lead__text" }, er = {
  key: 0,
  class: "ui-heading-3"
}, tr = {
  key: 1,
  class: "ui-text-default"
}, ir = {
  key: 0,
  class: "ui-header-lead__actions"
};
function rr(e, t, r, n, l, i) {
  const o = y("ui-icon"), u = y("Divider");
  return s(), a("div", C({ class: i.rootClasses }, i.passthroughAttrs), [
    e.$slots.toolbar ? (s(), a("div", qi, [
      g(e.$slots, "toolbar")
    ])) : f("", !0),
    i.hasHeaderBlock ? (s(), a("div", {
      key: 1,
      class: v(["ui-card-header shrink-0", { "ui-card-header--inset": r.removePadding }])
    }, [
      g(e.$slots, "header", {}, () => [
        i.hasDefaultHeader ? (s(), a("div", Zi, [
          c("div", Qi, [
            r.icon ? (s(), a("span", Xi, [
              b(o, {
                name: r.icon,
                type: r.iconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            c("div", Ji, [
              r.title ? (s(), a("h3", er, p(r.title), 1)) : f("", !0),
              r.description ? (s(), a("p", tr, p(r.description), 1)) : f("", !0)
            ])
          ]),
          e.$slots.append || e.$slots.actions ? (s(), a("div", ir, [
            g(e.$slots, "append"),
            g(e.$slots, "actions")
          ])) : f("", !0)
        ])) : f("", !0)
      ])
    ], 2)) : f("", !0),
    i.showHeaderDivider ? (s(), k(u, {
      key: 2,
      spacing: "none",
      class: "!my-0 shrink-0"
    })) : f("", !0),
    e.$slots.default ? (s(), a("div", {
      key: 3,
      class: v(["ui-card-body ui-text-default", {
        "ui-card-body--row": r.row,
        "ui-card-body--flush": r.removePadding
      }])
    }, [
      g(e.$slots, "default")
    ], 2)) : f("", !0),
    e.$slots.footer ? (s(), a("div", {
      key: 4,
      class: v(["ui-card-footer", { "ui-card-footer--inset": r.removePadding }])
    }, [
      g(e.$slots, "footer")
    ], 2)) : f("", !0)
  ], 16);
}
const nr = /* @__PURE__ */ _(Ui, [["render", rr]]), sr = [
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
], lr = {
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
      presetColors: sr
    };
  },
  computed: {
    rootClass() {
      return S(
        "ui-color-picker ui-color-picker--fulled w-full min-w-0",
        this.disabled && "pointer-events-none opacity-50",
        this.$attrs.class
      );
    },
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
    displayValue() {
      return this.localColor || this.triggerLabel;
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
}, ar = ["disabled", "aria-expanded", "onClick"], or = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, ur = { class: "ui-select-field-suffix" }, dr = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, cr = { class: "ui-color-picker-panel" }, hr = { class: "ui-color-picker-panel__header" }, fr = { class: "ui-color-picker-panel__title" }, mr = { class: "ui-color-picker-swatches" }, pr = ["title", "onClick"], gr = { class: "ui-color-picker-custom" }, br = { class: "ui-color-picker-panel__title" }, yr = { class: "ui-color-picker-custom__row" };
function vr(e, t, r, n, l, i) {
  const o = y("ui-icon"), u = y("ui-button"), d = y("ui-input"), h = y("ui-popover");
  return s(), a("div", {
    class: v(i.rootClass)
  }, [
    b(h, {
      open: l.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (m) => l.popoverOpen = m),
      placement: "bottom-start",
      "match-trigger-width": !0,
      disabled: r.disabled
    }, {
      trigger: w(({ open: m, toggle: x }) => [
        c("button", {
          type: "button",
          class: "ui-select-field",
          disabled: r.disabled,
          "aria-expanded": m ? "true" : "false",
          "aria-haspopup": !0,
          onClick: x
        }, [
          c("span", or, [
            i.localColor ? (s(), a("span", {
              key: 0,
              class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
              style: B({ backgroundColor: i.localColor })
            }, null, 4)) : (s(), k(o, {
              key: 1,
              name: "palette",
              size: "xs",
              class: "text-muted-foreground"
            }))
          ]),
          c("span", {
            class: v(["ui-select-value", { "ui-select-value--placeholder": !i.localColor }])
          }, p(i.displayValue), 3),
          c("span", ur, [
            c("span", dr, [
              b(o, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 8, ar)
      ]),
      content: w(() => [
        c("div", cr, [
          c("div", hr, [
            c("span", fr, p(i.popoverTitleLabel), 1),
            i.localColor ? (s(), k(u, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: A(i.clearColor, ["stop"])
            }, {
              default: w(() => [
                P(p(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          c("div", mr, [
            (s(!0), a(L, null, V(l.presetColors, (m) => (s(), a("button", {
              key: m,
              type: "button",
              class: v(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": i.localColor === m }]),
              style: B({ backgroundColor: m }),
              title: m,
              onClick: (x) => i.selectColor(m)
            }, [
              i.localColor === m ? (s(), k(o, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : f("", !0)
            ], 14, pr))), 128))
          ]),
          c("div", gr, [
            c("span", br, p(i.customColorLabelText), 1),
            c("div", yr, [
              b(d, {
                modelValue: i.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (m) => i.localColor = m),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: i.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              c("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: B({ backgroundColor: i.localColor || "transparent" }),
                "aria-hidden": "true"
              }, null, 4)
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "disabled"])
  ], 2);
}
const _r = /* @__PURE__ */ _(lr, [["render", vr]]), Be = {
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
function _e(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in te ? t : "TRY";
  const r = String(e).trim();
  if (Be[r])
    return Be[r];
  const n = r.toUpperCase();
  return te[n] ? n : t in te ? t : "TRY";
}
function It(e) {
  var r;
  const t = _e(e);
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
function hc(e, t, r = "tr-TR") {
  const n = Number(e) || 0, l = _e(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: l }).format(n);
  } catch {
    return `${It(l)}${n.toFixed(2)}`;
  }
}
function kr(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const n = t.slice(0, r), l = t.slice(r + 1).replace(/\./g, "");
    t = `${n}.${l}`;
  }
  return t;
}
let Ee = 0;
const wr = ["sm", "md", "lg"], Sr = {
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
      validator: (e) => wr.includes(e)
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
    return Ee += 1, { fallbackId: `ui-currency-input-${Ee}` };
  },
  computed: {
    displaySymbol() {
      return It(this.currency);
    },
    resolvedCurrencyCode() {
      return _e(this.currency);
    },
    innerValue: {
      get() {
        return this.modelValue == null ? "" : String(this.modelValue);
      },
      set(e) {
        const t = kr(e);
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
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
      return t;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, xr = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function Cr(e, t, r, n, l, i) {
  const o = y("ui-input");
  return s(), k(o, C({
    id: i.resolvedId,
    modelValue: i.innerValue,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => i.innerValue = u),
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
    onFocus: t[1] || (t[1] = (u) => e.$emit("focus", u)),
    onBlur: i.onBlur
  }), {
    prepend: w(() => [
      c("span", xr, p(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Tr = /* @__PURE__ */ _(Sr, [["render", Cr]]), Ir = {
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
        const t = e.target.checked, r = this.uiCheckboxGroup.modelValue, n = Array.isArray(r) ? [...r] : [], l = n.findIndex((i) => Object.is(i, this.value));
        t && l === -1 ? n.push(this.value) : !t && l !== -1 && n.splice(l, 1), this.uiCheckboxGroup.$emit("update:modelValue", n);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, t = Array.isArray(e) ? [...e] : [], r = t.findIndex((n) => Object.is(n, this.value));
        r === -1 ? t.push(this.value) : t.splice(r, 1), this.uiCheckboxGroup.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, Lr = ["type", "name", "value", "checked"], Ar = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, zr = { class: "ui-checkbox-body" }, $r = {
  key: 0,
  class: "ui-checkbox-label"
}, Dr = {
  key: 1,
  class: "ui-checkbox-description"
};
function Vr(e, t, r, n, l, i) {
  const o = y("ui-icon");
  return s(), a("label", {
    class: v(i.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = q(A((...u) => i.toggle && i.toggle(...u), ["prevent"]), ["enter"])),
      t[2] || (t[2] = q(A((...u) => i.toggle && i.toggle(...u), ["prevent"]), ["space"]))
    ]
  }, [
    c("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => i.onNativeChange && i.onNativeChange(...u))
    }, null, 40, Lr),
    c("span", Ar, [
      i.isChecked ? (s(), k(o, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : f("", !0)
    ]),
    c("span", zr, [
      e.$slots.label || r.label ? (s(), a("span", $r, [
        g(e.$slots, "label", {}, () => [
          P(p(r.label), 1)
        ])
      ])) : f("", !0),
      r.description ? (s(), a("span", Dr, p(r.description), 1)) : f("", !0)
    ])
  ], 34);
}
const Pr = /* @__PURE__ */ _(Ir, [["render", Vr]]), Mr = ["list", "button", "List", "Button"];
let Fe = 0;
const Or = {
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
      validator: (e) => Mr.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return Fe += 1, { groupName: `ui-checkbox-group-${Fe}` };
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
}, Rr = ["aria-label"];
function Br(e, t, r, n, l, i) {
  return s(), a("div", {
    class: v(["ui-checkbox-group", `ui-checkbox-group--${i.normalizedVariant}`]),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    g(e.$slots, "default")
  ], 10, Rr);
}
const Er = /* @__PURE__ */ _(Or, [["render", Br]]), $ = be({
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
function Fr(e = {}) {
  return new Promise((t) => {
    $.title = e.title ?? "", $.description = e.description ?? "", $.confirmLabel = e.confirmLabel ?? "", $.cancelLabel = e.cancelLabel ?? "", $.destructive = !!e.destructive, $._resolve = t, $.open = !0;
  });
}
function ce(e) {
  const t = $._resolve;
  $.open = !1, $._resolve = null, t && t(!!e);
}
const Nr = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return $;
    },
    syncOpen: {
      get() {
        return $.open;
      },
      set(e) {
        e ? $.open = !0 : $._resolve ? ce(!1) : $.open = !1;
      }
    },
    confirmText() {
      return $.confirmLabel ? $.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    cancelText() {
      return $.cancelLabel ? $.cancelLabel : typeof this.$t == "function" ? this.$t("ui.confirm.cancel") : "İptal";
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
function Yr(e, t, r, n, l, i) {
  const o = y("ui-button"), u = y("ui-dialog");
  return s(), k(u, {
    open: i.syncOpen,
    "onUpdate:open": t[0] || (t[0] = (d) => i.syncOpen = d),
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
          P(p(i.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      b(o, {
        rounded: "",
        color: i.confirmState.destructive ? "warning" : "primary",
        onClick: i.onConfirm
      }, {
        default: w(() => [
          P(p(i.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    _: 1
  }, 8, ["open", "title", "description", "aria-label"]);
}
const Hr = /* @__PURE__ */ _(Nr, [["render", Yr]]);
let Ne = 0;
function Ye(e) {
  return String(e).padStart(2, "0");
}
function N(e) {
  return `${e.getFullYear()}-${Ye(e.getMonth() + 1)}-${Ye(e.getDate())}`;
}
function he(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const r = Number(t[1]), n = Number(t[2]) - 1, l = Number(t[3]), i = new Date(r, n, l);
  return i.getFullYear() !== r || i.getMonth() !== n || i.getDate() !== l ? null : i;
}
const Wr = {
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
    Ne += 1;
    const e = Ne, t = he(this.modelValue) || /* @__PURE__ */ new Date();
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
      const e = this.viewYear, t = this.viewMonth, r = new Date(e, t, 1), n = new Date(e, t, 1 - r.getDay()), l = [];
      for (let i = 0; i < 42; i += 1) {
        const o = new Date(n.getFullYear(), n.getMonth(), n.getDate() + i), u = o.getMonth() === t && o.getFullYear() === e, d = o.getDate(), h = N(o), m = `${o.getFullYear()}-${o.getMonth()}-${o.getDate()}`, x = !!(this.selectedDate && h === N(this.selectedDate)), T = N(/* @__PURE__ */ new Date()) === h, I = !!(this.minYmd && h < this.minYmd);
        l.push({
          key: m,
          d,
          out: !u,
          date: o,
          sel: x,
          today: T,
          inMonth: u,
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
      const n = N(r);
      this.viewYear = r.getFullYear(), this.viewMonth = r.getMonth(), this.$emit("update:modelValue", n), this.$emit("change", n), t();
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, jr = { class: "ui-datepicker-panel w-full min-w-[17rem] p-2" }, Kr = { class: "mb-2 flex items-center justify-between gap-2" }, Gr = { class: "text-sm font-medium tabular-nums text-foreground" }, Ur = { class: "ui-datepicker-grid" }, qr = { class: "ui-datepicker-quick" };
function Zr(e, t, r, n, l, i) {
  const o = y("ui-button"), u = y("ui-popover");
  return s(), a("div", {
    class: v([
      "ui-datepicker",
      r.fulled ? "ui-datepicker--fulled w-full" : "w-auto shrink-0",
      r.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    b(u, {
      open: l.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (d) => l.menuOpen = d),
      placement: "bottom-start",
      "match-trigger-width": !0,
      disabled: r.disabled
    }, {
      trigger: w(({ open: d, toggle: h }) => [
        b(o, {
          type: "button",
          id: i.resolvedId,
          variant: "solid",
          color: "input",
          fulled: r.fulled,
          "text-align": "left",
          "prefix-icon": "calendar",
          disabled: r.disabled,
          "aria-expanded": d ? "true" : "false",
          "aria-haspopup": !0,
          onClick: h
        }, {
          default: w(() => [
            c("span", {
              class: v([
                "min-w-0 flex-1 truncate",
                i.selectedDate ? "text-foreground" : "text-muted-foreground"
              ])
            }, p(i.displayText), 3)
          ]),
          _: 1
        }, 8, ["id", "fulled", "disabled", "aria-expanded", "onClick"])
      ]),
      content: w(({ close: d }) => [
        c("div", jr, [
          c("div", Kr, [
            b(o, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              "aria-label": "Previous month",
              onClick: t[0] || (t[0] = A((h) => i.shiftMonth(-1), ["stop"]))
            }),
            c("span", Gr, p(i.monthTitle), 1),
            b(o, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-right",
              "aria-label": "Next month",
              onClick: t[1] || (t[1] = A((h) => i.shiftMonth(1), ["stop"]))
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
          c("div", Ur, [
            (s(!0), a(L, null, V(i.calendarCells, (h) => (s(), k(o, {
              key: h.key,
              variant: i.dayVariant(h),
              color: i.dayColor(h),
              size: "sm",
              disabled: h.disabled,
              "aria-selected": h.sel ? "true" : "false",
              "aria-disabled": h.disabled ? "true" : void 0,
              "data-outside": h.inMonth ? void 0 : "true",
              "data-today": h.today ? "true" : void 0,
              onClick: (m) => i.pick(h, d)
            }, {
              default: w(() => [
                P(p(h.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
          ]),
          c("div", qr, [
            b(o, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: i.todayQuickDisabled,
              onClick: (h) => i.pickQuick("today", d)
            }, {
              default: w(() => [
                P(p(i.resolvedTodayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            b(o, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: i.yesterdayQuickDisabled,
              onClick: (h) => i.pickQuick("yesterday", d)
            }, {
              default: w(() => [
                P(p(i.resolvedYesterdayLabel), 1)
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
const Qr = /* @__PURE__ */ _(Wr, [["render", Zr]]);
let He = 0;
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
  const r = Number(t[1]), n = Number(t[2]) - 1, l = Number(t[3]), i = new Date(r, n, l);
  return i.getFullYear() !== r || i.getMonth() !== n || i.getDate() !== l ? null : i;
}
function Y(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function fe(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function We(e, t, r, n) {
  const l = `${e}-${ie(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let o = `${e}-${ie(t + 1)}-${ie(i)}`;
  if (r && o > r && (o = r), n && l < n && o < n) return null;
  let u = l;
  return n && u < n && (u = n), Y(u, o) > 0 ? null : [u, o];
}
const Xr = {
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
    var n, l;
    He += 1;
    const e = He, t = ((n = this.modelValue) == null ? void 0 : n[0]) || "", r = se(t) || se((l = this.modelValue) == null ? void 0 : l[1]) || /* @__PURE__ */ new Date();
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
      const n = K(r), l = e.getMonth(), i = e.getFullYear(), o = new Date(i, l - 1, 1), u = o.getFullYear(), d = o.getMonth(), h = (x, T) => typeof this.$t == "function" ? this.$t(x, T) : x;
      return [
        {
          key: "today",
          label: h("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: h("ui.dateRangePicker.yesterday"),
          range: [n, n]
        },
        {
          key: "thisMonth",
          label: h("ui.dateRangePicker.thisMonth", {
            month: fe(i, l, this.locale)
          }),
          range: We(i, l, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: fe(u, d, this.locale)
          }),
          range: We(u, d, this.maxYmd, this.minYmd)
        }
      ].map((x) => ({
        ...x,
        disabled: !x.range || this.isRangeDisabled(x.range[0], x.range[1])
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
      const r = (n) => {
        if (!n) return "…";
        const [l, i, o] = String(n).split("-");
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
      const r = new Date(e, t, 1), n = new Date(e, t, 1 - r.getDay()), l = this.previewStart, i = this.previewEnd, o = l && i, u = [];
      for (let d = 0; d < 42; d += 1) {
        const h = new Date(n.getFullYear(), n.getMonth(), n.getDate() + d), m = h.getMonth() === t && h.getFullYear() === e, x = h.getDate(), T = K(h), I = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, z = K(/* @__PURE__ */ new Date()) === T, M = !!(this.minYmd && T < this.minYmd) || !!(this.maxYmd && T > this.maxYmd);
        let O = !1, R = !1;
        if (o) {
          const D = Y(l, i) <= 0 ? l : i, F = Y(l, i) <= 0 ? i : l;
          O = Y(T, D) >= 0 && Y(T, F) <= 0, R = T === D || T === F;
        }
        u.push({
          key: I,
          d: x,
          date: h,
          today: z,
          inMonth: m,
          disabled: M,
          inRange: O,
          endpoint: R
        });
      }
      return u;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = K(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [r, n] = e.range;
      this.pickingStart = r, this.pickingEnd = n, this.$emit("update:modelValue", [r, n]), this.$emit("change", [r, n]), t();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const r = K(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let n = this.pickingStart, l = r;
      if (Y(l, n) < 0) {
        const i = n;
        n = l, l = i;
      }
      this.pickingStart = n, this.pickingEnd = l, this.$emit("update:modelValue", [n, l]), this.$emit("change", [n, l]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, Jr = { class: "min-w-0 flex-1 truncate text-foreground" }, en = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, tn = { class: "ui-daterangepicker-layout" }, rn = ["aria-label"], nn = { class: "ui-daterangepicker-calendars" }, sn = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, ln = { class: "ui-daterangepicker-month-row" }, an = { class: "mb-2 flex items-center justify-between gap-2" }, on = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, un = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, dn = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, cn = { class: "ui-datepicker-grid" };
function hn(e, t, r, n, l, i) {
  const o = y("ui-button"), u = y("ui-popover");
  return s(), a("div", {
    class: v(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    b(u, {
      open: l.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (d) => l.menuOpen = d),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: w(({ open: d, toggle: h }) => [
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
          "aria-expanded": d ? "true" : "false",
          "aria-haspopup": !0,
          onClick: h
        }, {
          default: w(() => [
            c("span", Jr, p(i.displayText), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: w(({ close: d }) => [
        c("div", en, [
          c("div", tn, [
            c("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": i.resolvedQuickAriaLabel
            }, [
              (s(!0), a(L, null, V(i.quickPresets, (h) => (s(), k(o, {
                key: h.key,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: h.disabled,
                onClick: (m) => i.applyQuick(h, d)
              }, {
                default: w(() => [
                  P(p(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, rn),
            c("div", nn, [
              i.rangeHint ? (s(), a("p", sn, p(i.rangeHint), 1)) : f("", !0),
              c("div", ln, [
                (s(!0), a(L, null, V(i.calendarPanes, (h) => (s(), a("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  c("div", an, [
                    h.showPrev ? (s(), k(o, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = A((m) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (s(), a("span", on)),
                    c("span", un, p(h.title), 1),
                    h.showNext ? (s(), k(o, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = A((m) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (s(), a("span", dn))
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
                  c("div", cn, [
                    (s(!0), a(L, null, V(h.cells, (m) => (s(), k(o, {
                      key: m.key,
                      variant: i.dayVariant(m),
                      color: i.dayColor(m),
                      size: "sm",
                      disabled: m.disabled,
                      "aria-selected": m.endpoint ? "true" : "false",
                      "aria-disabled": m.disabled ? "true" : void 0,
                      "data-outside": m.inMonth ? void 0 : "true",
                      "data-today": m.today ? "true" : void 0,
                      "data-in-range": m.inRange && !m.endpoint ? "true" : void 0,
                      "data-range-endpoint": m.endpoint ? "true" : void 0,
                      onMouseenter: (x) => i.onCellHover(m),
                      onClick: (x) => i.pick(m, d)
                    }, {
                      default: w(() => [
                        P(p(m.d), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "data-in-range", "data-range-endpoint", "onMouseenter", "onClick"]))), 128))
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
const fn = /* @__PURE__ */ _(Xr, [["render", hn]]), mn = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"])'
].join(","), pn = [
  "button.ui-select-field:not([disabled])",
  "button.ui-pin-cell:not([disabled])"
].join(",");
function gn(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function je(e, t, { skipFooter: r = !1 } = {}) {
  if (!e) return null;
  for (const n of e.querySelectorAll(t))
    if (gn(n) && !(r && n.closest(".ui-card-footer")))
      return n;
  return null;
}
function bn(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), r = [];
  for (const n of t)
    r.includes(n) || r.push(n);
  return r;
}
function Ke(e, { skipFooter: t = !1 } = {}) {
  const r = je(e, mn, { skipFooter: t });
  if (r)
    return r.focus(), !0;
  const n = je(e, pn, { skipFooter: t });
  return n ? (n.focus(), !0) : !1;
}
function yn(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && Ke(t))
    return !0;
  for (const r of bn(e))
    if (Ke(r, { skipFooter: r === e }))
      return !0;
  return !1;
}
const vn = "(max-width: 767px)";
function Lt() {
  return typeof window > "u" ? !1 : window.matchMedia(vn).matches;
}
let Ge = 0;
const _n = ["solid", "dashed", "dotted", "double"], Ue = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, kn = ["solid", "regular", "brands", "light", "duotone", "thin"], wn = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"], qe = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl"
}, Sn = {
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
      validator: (e) => wn.includes(e)
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
      validator: (e) => _n.includes(e)
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
      validator: (e) => kn.includes(e)
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
    Ge += 1;
    const e = Ge;
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
      return Ue[this.borderType] || Ue.solid;
    },
    maxWidthClass() {
      return qe[this.maxWidth] || qe.lg;
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
      e && yn(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
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
      if (!Lt() || e.button !== 0) return;
      const t = this.$refs.panelRef;
      if (!t) return;
      e.preventDefault(), this.teardownSheetDrag();
      const r = e.clientY, n = t.style.transition;
      t.style.transition = "none";
      const l = (u) => {
        const d = Math.max(0, u.clientY - r);
        t.style.transform = `translateY(${d}px)`;
      }, i = (u) => {
        const d = Math.max(0, u.clientY - r);
        t.style.transition = n, t.style.transform = "", d >= 72 && this.close(), this.teardownSheetDrag();
      }, o = () => {
        t.style.transition = n, t.style.transform = "", this.teardownSheetDrag();
      };
      window.addEventListener("pointermove", l), window.addEventListener("pointerup", i), window.addEventListener("pointercancel", o), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", i), window.removeEventListener("pointercancel", o);
      };
    }
  }
}, xn = ["aria-labelledby", "aria-describedby", "aria-label"], Cn = {
  key: 0,
  class: "ui-card-header shrink-0"
}, Tn = {
  key: 0,
  class: "ui-dialog-header__icon"
}, In = ["id"], Ln = {
  key: 2,
  class: "ui-dialog-header__actions"
}, An = ["id"], zn = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, $n = {
  key: 4,
  class: "ui-card-footer"
};
function Dn(e, t, r, n, l, i) {
  const o = y("ui-icon"), u = y("ui-button"), d = y("Divider");
  return s(), k(Z, { to: "body" }, [
    b(ne, {
      name: "ui-overlay-dialog",
      appear: "",
      onAfterEnter: i.onOverlayAfterEnter,
      onAfterLeave: i.onOverlayAfterLeave
    }, {
      default: w(() => [
        r.open ? (s(), a("div", {
          key: 0,
          ref: "layerRef",
          class: v(i.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[3] || (t[3] = (...h) => i.onLayerKeydown && i.onLayerKeydown(...h))
        }, [
          c("div", {
            class: "ui-dialog-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...h) => i.onBackdrop && i.onBackdrop(...h))
          }),
          c("div", C({
            ref: "panelRef",
            class: i.panelClasses,
            role: "dialog",
            "aria-modal": "true",
            tabindex: "-1",
            "aria-labelledby": i.ariaLabelledby,
            "aria-describedby": i.ariaDescribedby,
            "aria-label": i.ariaLabelAttr
          }, i.passthroughAttrs, {
            onClick: t[2] || (t[2] = A(() => {
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
            i.hasHeaderBlock ? (s(), a("div", Cn, [
              g(e.$slots, "header", {}, () => [
                i.hasDefaultHeader ? (s(), a("div", {
                  key: 0,
                  class: v(["ui-dialog-header", { "ui-dialog-header--no-icon": !r.icon }])
                }, [
                  r.icon ? (s(), a("span", Tn, [
                    b(o, {
                      name: r.icon,
                      type: r.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  r.title ? (s(), a("h3", {
                    key: 1,
                    id: l.titleId,
                    class: "ui-dialog-header__title ui-heading-3"
                  }, p(r.title), 9, In)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (s(), a("div", Ln, [
                    g(e.$slots, "append"),
                    g(e.$slots, "actions")
                  ])) : f("", !0),
                  r.showClose ? (s(), k(u, {
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
                  r.description ? (s(), a("p", {
                    key: 4,
                    id: l.descriptionId,
                    class: "ui-dialog-header__description ui-text-default"
                  }, p(r.description), 9, An)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (s(), a("div", zn, [
              g(e.$slots, "toolbar")
            ])) : f("", !0),
            i.showHeaderDivider ? (s(), k(d, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (s(), a("div", {
              key: 3,
              class: v(["ui-card-body ui-text-default", { "ui-card-body--row": r.row }])
            }, [
              g(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (s(), a("div", $n, [
              g(e.$slots, "footer")
            ])) : f("", !0)
          ], 16, xn)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["onAfterEnter", "onAfterLeave"])
  ]);
}
const Vn = /* @__PURE__ */ _(Sn, [["render", Dn]]), Pn = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Mn = {
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
      validator: (e) => Pn.includes(e)
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
function On(e, t, r, n, l, i) {
  const o = y("Divider"), u = y("ui-button"), d = y("ui-popover");
  return s(), k(d, {
    open: i.isOpen,
    placement: r.placement,
    "match-trigger-width": r.matchTriggerWidth,
    "close-on-outside-click": r.closeOnOutsideClick,
    "close-on-escape": r.closeOnEscape,
    "outside-click-ignore-selector": r.outsideClickIgnoreSelector,
    "onUpdate:open": i.onOpenChange
  }, {
    trigger: w((h) => [
      g(e.$slots, "trigger", St(xt(h)))
    ]),
    content: w(({ close: h }) => [
      c("div", {
        class: "ui-dropdown-menu min-w-[10rem] p-3",
        role: "menu",
        onClick: t[0] || (t[0] = A(() => {
        }, ["stop"]))
      }, [
        e.$slots.menu ? g(e.$slots, "menu", {
          key: 0,
          close: h
        }) : (s(!0), a(L, { key: 1 }, V(r.items, (m, x) => (s(), a(L, { key: x }, [
          m.divider ? (s(), k(o, {
            key: 0,
            spacing: "sm"
          })) : (s(), k(u, {
            key: 1,
            variant: "ghost",
            color: "secondary",
            rounded: "",
            fulled: "",
            "text-align": "left",
            role: "menuitem",
            "prefix-icon": m.icon || null,
            disabled: m.disabled,
            onClick: A((T) => i.onItem(m, h), ["stop"])
          }, {
            default: w(() => [
              P(p(m.label), 1)
            ]),
            _: 2
          }, 1032, ["prefix-icon", "disabled", "onClick"]))
        ], 64))), 128))
      ])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Rn = /* @__PURE__ */ _(Mn, [["render", On]]), Bn = ["solid", "regular", "brands", "light", "duotone", "thin"], En = ["sm", "md", "lg"], Fn = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, Nn = {
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
      validator: (e) => Bn.includes(e)
    },
    /** `sm` | `md` | `lg` — padding, ikon kutusu, başlık ve açıklama ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => En.includes(e)
    }
  },
  computed: {
    iconSize() {
      return Fn[this.size] ?? "md";
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
}, Yn = {
  key: 0,
  class: "ui-empty-icon"
}, Hn = {
  key: 1,
  class: "ui-empty-title"
}, Wn = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, jn = {
  key: 3,
  class: "ui-empty-actions"
};
function Kn(e, t, r, n, l, i) {
  const o = y("ui-icon");
  return s(), a("div", C({ class: i.rootClass }, i.passthroughAttrs), [
    i.resolvedIcon ? (s(), a("div", Yn, [
      b(o, {
        name: i.resolvedIcon,
        type: r.iconType,
        size: i.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    r.title ? (s(), a("h2", Hn, p(r.title), 1)) : f("", !0),
    r.description ? (s(), a("p", Wn, p(r.description), 1)) : f("", !0),
    e.$slots.default ? (s(), a("div", jn, [
      g(e.$slots, "default")
    ])) : f("", !0)
  ], 16);
}
const Gn = /* @__PURE__ */ _(Nn, [["render", Kn]]), Un = ["solid", "regular", "brands", "light", "duotone", "thin"], qn = {
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
      validator: (e) => Un.includes(e)
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
}, Zn = {
  key: 0,
  class: "ui-field__title-row"
}, Qn = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, Xn = {
  key: 1,
  class: "ui-field__title"
}, Jn = {
  key: 1,
  class: "ui-field__value"
}, es = {
  key: 2,
  class: "ui-field__subtitle"
};
function ts(e, t, r, n, l, i) {
  const o = y("ui-icon");
  return s(), a("div", C({ class: i.rootClass }, i.passthroughAttrs), [
    r.title || i.showIcon ? (s(), a("div", Zn, [
      i.showIcon ? (s(), a("span", Qn, [
        b(o, {
          name: r.icon,
          type: r.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : f("", !0),
      r.title ? (s(), a("span", Xn, p(r.title), 1)) : f("", !0)
    ])) : f("", !0),
    i.hasValue ? (s(), a("div", Jn, [
      g(e.$slots, "default")
    ])) : f("", !0),
    r.subtitle ? (s(), a("p", es, p(r.subtitle), 1)) : f("", !0)
  ], 16);
}
const is = /* @__PURE__ */ _(qn, [["render", ts]]), rs = ["auto", "file", "folder"], ns = ["sm", "md", "lg"], ss = { icon: "folder", color: "text-sky-500" }, ls = { icon: "file-lines", color: "text-muted-foreground" }, as = {
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
}, Ze = {
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
function os(e) {
  const t = oe(e);
  return /[/\\]\s*$/.test(t);
}
function At(e) {
  const t = oe(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function us(e) {
  const t = At(e), r = t.lastIndexOf(".");
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
}, ds = {
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
      validator: (e) => rs.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => ns.includes(e)
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
      return Ze[this.size] || Ze.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : os(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = oe(this.name);
      return e ? this.basenameOnly ? At(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return oe(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return ss;
      const e = us(this.name);
      return as[e] || ls;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? this.iconType : this.inferredMeta.type || "light";
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
}, cs = ["aria-label"], hs = ["title"];
function fs(e, t, r, n, l, i) {
  const o = y("ui-icon");
  return s(), a("div", {
    class: v(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    c("div", {
      class: v(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
    }, [
      b(o, {
        name: i.resolvedIcon,
        type: i.resolvedIconType,
        size: i.iconSizeToken,
        class: v(i.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    c("span", {
      class: v(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, p(i.displayLabel), 11, hs)
  ], 10, cs);
}
const ms = /* @__PURE__ */ _(ds, [["render", fs]]);
let Xe = 0;
const ps = ["vertical", "horizontal"], gs = ["default", "card"], bs = {
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
      validator: (e) => ps.includes(e)
    },
    /**
     * `default`: mevcut `direction` düzeni.
     * `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`.
     */
    variant: {
      type: String,
      default: "default",
      validator: (e) => gs.includes(e)
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
    Xe += 1;
    const e = Xe;
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
}, ys = ["data-primary-field"], vs = {
  key: 0,
  class: "ui-form-row-text"
}, _s = ["for"], ks = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, ws = ["id"], Ss = { class: "ui-form-row-control" };
function xs(e, t, r, n, l, i) {
  return s(), a("div", {
    class: v(["ui-form-row", i.rootLayoutClass]),
    "data-primary-field": r.primary ? "" : void 0
  }, [
    i.hasTextBlock ? (s(), a("div", vs, [
      r.label || e.$slots.action ? (s(), a("div", {
        key: 0,
        class: v(i.labelLineClass)
      }, [
        r.label ? (s(), a("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: i.controlId
        }, p(r.label), 9, _s)) : f("", !0),
        e.$slots.action ? (s(), a("div", ks, [
          g(e.$slots, "action")
        ])) : f("", !0)
      ], 2)) : f("", !0),
      r.description ? (s(), a("p", {
        key: 1,
        id: i.descriptionId,
        class: "ui-text-default"
      }, p(r.description), 9, ws)) : f("", !0)
    ])) : f("", !0),
    c("div", Ss, [
      g(e.$slots, "default", {
        controlId: i.controlId,
        descriptionId: i.descriptionId
      })
    ])
  ], 10, ys);
}
const Cs = /* @__PURE__ */ _(bs, [["render", xs]]), Ts = ["solid", "regular", "brands", "light", "duotone", "thin"], Je = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, Is = ["xs", "sm", "md", "lg"], Ls = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none"
}, As = {
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
      validator: (e) => Ts.includes(e)
    },
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => Is.includes(e)
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
      return Je[this.type] || Je.light;
    },
    iconClass() {
      return S(
        "ui-icon fa not-italic inline-block shrink-0",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        Ls[this.size],
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
function zs(e, t, r, n, l, i) {
  return s(), a("i", C({ class: i.iconClass }, i.rootAttrs), null, 16);
}
const $s = /* @__PURE__ */ _(As, [["render", zs]]), Ds = ["solid", "regular", "brands", "light", "duotone", "thin"], Vs = {
  name: "IconPicker",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    icons: {
      type: Array,
      default: () => []
    },
    iconType: {
      type: String,
      default: "light",
      validator: (e) => Ds.includes(e)
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
    searchPlaceholder: {
      type: String,
      default: ""
    },
    noResultsLabel: {
      type: String,
      default: ""
    },
    maxResults: {
      type: Number,
      default: 180
    },
    panelWidth: {
      type: String,
      default: "22rem"
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      popoverOpen: !1,
      searchQuery: ""
    };
  },
  computed: {
    rootClass() {
      return S(
        "ui-icon-picker ui-icon-picker--fulled w-full min-w-0",
        this.disabled && "pointer-events-none opacity-50",
        this.$attrs.class
      );
    },
    localIcon: {
      get() {
        return this.modelValue || "";
      },
      set(e) {
        this.$emit("update:modelValue", e || null);
      }
    },
    triggerLabel() {
      return this.triggerPlaceholder || this.$t("ui.iconPicker.triggerPlaceholder");
    },
    popoverTitleLabel() {
      return this.popoverTitle || this.$t("ui.iconPicker.popoverTitle");
    },
    clearLabelText() {
      return this.clearLabel || this.$t("ui.iconPicker.clear");
    },
    searchPlaceholderLabel() {
      return this.searchPlaceholder || this.$t("ui.iconPicker.searchPlaceholder");
    },
    resolvedNoResultsLabel() {
      return this.noResultsLabel || this.$t("ui.iconPicker.noResults");
    },
    filteredIcons() {
      const e = String(this.searchQuery || "").trim().toLowerCase(), t = Array.isArray(this.icons) ? this.icons : [];
      let r = t;
      return e && (r = t.filter((n) => String(n).toLowerCase().includes(e))), r.slice(0, this.maxResults);
    }
  },
  watch: {
    popoverOpen(e) {
      e || (this.searchQuery = "");
    }
  },
  methods: {
    selectIcon(e) {
      this.localIcon = e, this.popoverOpen = !1;
    },
    clearIcon() {
      this.localIcon = "", this.$emit("update:modelValue", null), this.popoverOpen = !1;
    }
  }
}, Ps = ["disabled", "aria-expanded", "onClick"], Ms = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Os = { class: "ui-select-field-suffix" }, Rs = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Bs = { class: "ui-icon-picker-panel" }, Es = { class: "ui-icon-picker-panel__header" }, Fs = { class: "ui-icon-picker-panel__title" }, Ns = { class: "ui-icon-picker-panel__search" }, Ys = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, Hs = {
  key: 1,
  class: "ui-icon-picker-grid"
}, Ws = ["title", "onClick"];
function js(e, t, r, n, l, i) {
  const o = y("ui-icon"), u = y("ui-button"), d = y("ui-input"), h = y("ui-popover");
  return s(), a("div", {
    class: v(i.rootClass)
  }, [
    b(h, {
      open: l.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (m) => l.popoverOpen = m),
      placement: "bottom-start",
      width: r.panelWidth,
      disabled: r.disabled
    }, {
      trigger: w(({ open: m, toggle: x }) => [
        c("button", {
          type: "button",
          class: "ui-select-field",
          disabled: r.disabled,
          "aria-expanded": m ? "true" : "false",
          "aria-haspopup": !0,
          onClick: x
        }, [
          c("span", Ms, [
            b(o, {
              name: i.localIcon || "grid",
              type: r.iconType,
              size: "xs"
            }, null, 8, ["name", "type"])
          ]),
          c("span", {
            class: v(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
          }, p(i.localIcon || i.triggerLabel), 3),
          c("span", Os, [
            c("span", Rs, [
              b(o, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 8, Ps)
      ]),
      content: w(() => [
        c("div", Bs, [
          c("div", Es, [
            c("span", Fs, p(i.popoverTitleLabel), 1),
            i.localIcon ? (s(), k(u, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: A(i.clearIcon, ["stop"])
            }, {
              default: w(() => [
                P(p(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : f("", !0)
          ]),
          c("div", Ns, [
            b(d, {
              modelValue: l.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (m) => l.searchQuery = m),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: i.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          i.filteredIcons.length ? (s(), a("div", Hs, [
            (s(!0), a(L, null, V(i.filteredIcons, (m) => (s(), a("button", {
              key: m,
              type: "button",
              class: v(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": i.localIcon === m }]),
              title: m,
              onClick: (x) => i.selectIcon(m)
            }, [
              b(o, {
                name: m,
                type: r.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, Ws))), 128))
          ])) : (s(), a("div", Ys, p(i.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const Ks = /* @__PURE__ */ _(Vs, [["render", js]]);
let et = 0;
const Gs = ["sm", "md", "lg"], Us = {
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
      validator: (e) => Gs.includes(e)
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
    return et += 1, { fallbackId: `ui-input-${et}` };
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
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
      return t;
    }
  },
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value), this.$emit("input", e);
    }
  }
}, qs = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, Zs = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Qs = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], Xs = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], Js = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, el = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function tl(e, t, r, n, l, i) {
  const o = y("ui-icon");
  return s(), a("div", {
    class: v([i.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (s(), a("div", qs, [
      g(e.$slots, "prepend")
    ])) : f("", !0),
    r.prefixIcon ? (s(), a("span", Zs, [
      b(o, {
        name: r.prefixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    r.multiline ? (s(), a("textarea", C({
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
      onInput: t[0] || (t[0] = (...u) => i.onInput && i.onInput(...u)),
      onChange: t[1] || (t[1] = (u) => e.$emit("change", u)),
      onFocus: t[2] || (t[2] = (u) => e.$emit("focus", u)),
      onBlur: t[3] || (t[3] = (u) => e.$emit("blur", u))
    }), null, 16, Qs)) : (s(), a("input", C({
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
      onInput: t[4] || (t[4] = (...u) => i.onInput && i.onInput(...u)),
      onChange: t[5] || (t[5] = (u) => e.$emit("change", u)),
      onFocus: t[6] || (t[6] = (u) => e.$emit("focus", u)),
      onBlur: t[7] || (t[7] = (u) => e.$emit("blur", u))
    }), null, 16, Xs)),
    r.suffixIcon ? (s(), a("span", Js, [
      b(o, {
        name: r.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    e.$slots.append ? (s(), a("div", el, [
      g(e.$slots, "append")
    ])) : f("", !0)
  ], 2);
}
const il = /* @__PURE__ */ _(Us, [["render", tl]]);
function rl(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  t.length >= 8 && (r += 1), t.length >= 12 && (r += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? r += 1 : /[a-zA-Z]/.test(t) && (r += 0.5), /\d/.test(t) && (r += 1), /[^a-zA-Z0-9]/.test(t) && (r += 1);
  const n = Math.min(4, Math.round(r)), l = ["weak", "fair", "good", "strong"], i = n <= 0 ? "weak" : l[Math.min(n - 1, 3)];
  return {
    score: n,
    percent: n / 4 * 100,
    label: i
  };
}
let me = 0;
const nl = ["sm", "md", "lg"], sl = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => nl.includes(e)
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
      return rl(this.modelValue);
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
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
      return t;
    }
  }
}, ll = ["aria-label", "aria-pressed", "disabled"], al = ["id", "aria-live"];
function ol(e, t, r, n, l, i) {
  const o = y("ui-icon"), u = y("ui-input"), d = y("ui-progress");
  return s(), a("div", {
    class: v(["ui-password", [e.$attrs.class]])
  }, [
    b(u, C({
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
        ], 8, ll)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    i.showStrengthMeter ? (s(), a("div", {
      key: 0,
      id: l.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": i.innerValue ? "polite" : "off"
    }, [
      b(d, {
        type: "bar",
        size: "md",
        value: i.strength.percent,
        variant: i.strengthVariant,
        "aria-valuetext": i.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      i.strength.label !== "empty" ? (s(), a("span", {
        key: 0,
        class: v(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, p(i.strengthText), 3)) : f("", !0)
    ], 8, al)) : f("", !0)
  ], 2);
}
const ul = /* @__PURE__ */ _(sl, [["render", ol]]);
let tt = 0;
const dl = ["sm", "md", "lg"], it = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], cl = {
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
      default: () => it
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => dl.includes(e)
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
    return tt += 1, { fallbackId: `ui-phone-number-${tt}` };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : it;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    rootClass() {
      return S(
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
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
      return t;
    }
  }
}, hl = { class: "ui-phone-prepend" }, fl = {
  key: 0,
  class: "ui-phone-country-static"
};
function ml(e, t, r, n, l, i) {
  const o = y("ui-icon"), u = y("ui-select"), d = y("ui-input");
  return s(), a("div", {
    class: v(i.rootClass)
  }, [
    b(d, C({
      id: i.resolvedNumberId,
      modelValue: i.innerNumber,
      "onUpdate:modelValue": t[1] || (t[1] = (h) => i.innerNumber = h),
      type: "tel",
      inputmode: "tel",
      class: "w-full",
      size: r.size,
      disabled: r.disabled,
      readonly: r.readonly,
      placeholder: i.resolvedPlaceholder,
      name: r.numberName,
      autocomplete: r.autocomplete,
      maxlength: r.numberMaxlength,
      "aria-describedby": r.ariaDescribedby
    }, i.numberPassthrough, {
      onFocus: t[2] || (t[2] = (h) => e.$emit("focus", h)),
      onBlur: t[3] || (t[3] = (h) => e.$emit("blur", h))
    }), {
      prepend: w(() => [
        c("div", hl, [
          b(o, {
            name: "phone",
            size: "xs",
            class: "text-muted-foreground",
            "aria-hidden": "true"
          }),
          i.isSingleCountry ? (s(), a("span", fl, p(i.innerCountry), 1)) : (s(), k(u, {
            key: 1,
            modelValue: i.innerCountry,
            "onUpdate:modelValue": t[0] || (t[0] = (h) => i.innerCountry = h),
            variant: "inline",
            size: r.size,
            options: i.countryOptions,
            disabled: r.disabled,
            "aria-label": i.resolvedCountryAria
          }, null, 8, ["modelValue", "size", "options", "disabled", "aria-label"]))
        ])
      ]),
      _: 1
    }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"])
  ], 2);
}
const pl = /* @__PURE__ */ _(cl, [["render", ml]]), gl = ["numeric", "alphanumeric"], bl = {
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
      validator: (e) => gl.includes(e)
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
      const n = t.target.value.split("").map((u) => this.normalizeChar(u)).filter(Boolean);
      if (n.length === 0) {
        const u = [...this.cells];
        u[e] = "", this.emitValue(u);
        return;
      }
      const l = [...this.cells];
      let i = e;
      for (const u of n) {
        if (i >= this.length) break;
        l[i] = u, i += 1;
      }
      this.emitValue(l);
      const o = Math.min(i, this.length - 1);
      this.$nextTick(() => {
        var u, d;
        (u = this.cellEl(o)) == null || u.focus(), (d = this.cellEl(o)) == null || d.select();
      });
    },
    onCellKeydown(e, t) {
      var r, n;
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
      t.key === "ArrowLeft" && e > 0 && (t.preventDefault(), (r = this.cellEl(e - 1)) == null || r.focus()), t.key === "ArrowRight" && e < this.length - 1 && (t.preventDefault(), (n = this.cellEl(e + 1)) == null || n.focus());
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
      const n = Math.min(r.length, this.length) - 1;
      this.$nextTick(() => {
        var i;
        (i = this.cellEl(Math.max(0, n))) == null || i.focus();
      });
    }
  }
}, yl = ["aria-label"], vl = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function _l(e, t, r, n, l, i) {
  return s(), a("div", {
    role: "group",
    "aria-label": i.resolvedAriaLabel,
    class: v([
      "ui-pin",
      i.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (s(!0), a(L, null, V(r.length, (o, u) => (s(), a("input", {
      key: u,
      ref_for: !0,
      ref: "cells",
      class: "ui-pin-cell",
      value: i.cells[u] ?? "",
      type: r.type === "numeric" ? "tel" : "text",
      inputmode: r.type === "numeric" ? "numeric" : "text",
      pattern: r.type === "numeric" ? "[0-9]*" : void 0,
      disabled: r.disabled,
      readonly: r.readonly,
      autocomplete: u === 0 ? r.autocomplete : "off",
      maxlength: "1",
      "aria-label": i.cellAriaLabel(u),
      onInput: (d) => i.onCellInput(u, d),
      onKeydown: (d) => i.onCellKeydown(u, d),
      onFocus: (d) => i.onCellFocus(u),
      onPaste: t[0] || (t[0] = (...d) => i.onPaste && i.onPaste(...d))
    }, null, 40, vl))), 128))
  ], 10, yl);
}
const kl = /* @__PURE__ */ _(bl, [["render", _l]]), wl = ["ul", "ol", "div"], Sl = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => wl.includes(e)
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
function xl(e, t, r, n, l, i) {
  return s(), k(U(r.tag), C({
    class: i.listClass,
    role: "list"
  }, i.passthroughAttrs), {
    default: w(() => [
      g(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Cl = /* @__PURE__ */ _(Sl, [["render", xl]]), Tl = ["solid", "regular", "brands", "light", "duotone", "thin"], Il = {
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
      validator: (e) => Tl.includes(e)
    }
  }
}, Ll = {
  class: "ui-list-item",
  role: "listitem"
}, Al = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, zl = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, $l = { class: "ui-list-item-content min-w-0 flex-1" };
function Dl(e, t, r, n, l, i) {
  const o = y("ui-icon");
  return s(), a("li", Ll, [
    r.prefixIcon ? (s(), a("span", Al, [
      b(o, {
        name: r.prefixIcon,
        type: r.prefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (s(), a("span", zl, [
      g(e.$slots, "prefix")
    ])) : f("", !0),
    c("div", $l, [
      g(e.$slots, "default")
    ])
  ]);
}
const Vl = /* @__PURE__ */ _(Il, [["render", Dl]]), Pl = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], rt = 10, nt = 260, Ml = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], Ol = {
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
      validator: (e) => Pl.includes(e)
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
    resolveLayerZIndex() {
      if (typeof document > "u") return nt;
      let e = nt;
      for (const t of document.querySelectorAll(".ui-dialog-root")) {
        const r = Number.parseInt(getComputedStyle(t).zIndex, 10);
        Number.isFinite(r) && (e = Math.max(e, r + 10));
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
      const r = window.innerWidth, n = window.innerHeight, l = rt, i = this.resolvedWidth, o = e.getBoundingClientRect(), u = i != null ? t.offsetWidth || 200 : t.offsetWidth || (this.matchTriggerWidth ? o.width : 200), d = t.offsetHeight || 120;
      if (Lt()) {
        this.mobileCenteredActive = !0;
        const I = Math.max(l, Math.round((r - u) / 2)), M = {
          top: `${Math.max(l, Math.round((n - d) / 2))}px`,
          left: `${I}px`
        };
        i != null ? (M.width = i, M.minWidth = i) : (M.width = `${Math.min(u, r - l * 2)}px`, M.maxWidth = `calc(100vw - ${l * 2}px)`), this.layerStyle = this.withLayerZIndex(M);
        return;
      }
      this.mobileCenteredActive = !1;
      let h, m;
      switch (this.placement) {
        case "right-start":
          h = o.top, m = o.right + l;
          break;
        case "right-end":
          h = o.bottom - d, m = o.right + l;
          break;
        case "left-start":
          h = o.top, m = o.left - l - u;
          break;
        case "left-end":
          h = o.bottom - d, m = o.left - l - u;
          break;
        case "top-start":
          h = o.top - l - d, m = o.left;
          break;
        case "top-end":
          h = o.top - l - d, m = o.right - u;
          break;
        case "bottom-end":
          h = o.bottom + l, m = o.right - u;
          break;
        case "bottom":
          h = o.bottom + l, m = o.left + (o.width - u) / 2;
          break;
        case "bottom-start":
        default:
          h = o.bottom + l, m = o.left;
          break;
      }
      if (this.placement.startsWith("right") && m + u > r - l && (m = o.left - l - u), this.placement.startsWith("left") && m < l && (m = o.right + l), this.placement.startsWith("top") && h < l && (h = o.bottom + l), m + u > r - l && (m = Math.max(l, r - l - u)), m < l && (m = l), this.placement.startsWith("bottom") && h + d > n - l) {
        const I = o.top - l - d;
        I >= l && (h = I);
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (h + d > n - l && (h = Math.max(l, n - l - d)), h < l && (h = l));
      const x = this.matchTriggerWidth && i == null ? `${Math.ceil(o.width)}px` : void 0, T = {
        top: `${Math.round(h)}px`,
        left: `${Math.round(m)}px`,
        minWidth: x
      };
      i != null && (T.width = i, T.minWidth = i), this.layerStyle = this.withLayerZIndex(T), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.nudgeAlignSelectedToTrigger());
        });
      });
    },
    nudgeAlignSelectedToTrigger() {
      const e = this.$refs.triggerRef, t = this.$refs.panelRef, r = this.$refs.layerRef;
      if (!e || !t || !r) return;
      const n = t.querySelector('[role="listbox"]');
      if (n && n.scrollHeight > n.clientHeight + 2)
        return;
      const l = t.querySelector('[role="option"][aria-selected="true"]');
      if (!l) return;
      const i = e.querySelector("[data-popover-align]") || e, o = l.querySelector("[data-popover-align]") || l, u = i.getBoundingClientRect(), d = o.getBoundingClientRect(), h = d.top - u.top, m = d.left - u.left, x = r.getBoundingClientRect(), T = this.layerStyle.top, I = this.layerStyle.left;
      let z = typeof T == "string" && T !== "" ? parseFloat(T) : x.top, M = typeof I == "string" && I !== "" ? parseFloat(I) : x.left;
      Number.isNaN(z) && (z = x.top), Number.isNaN(M) && (M = x.left);
      let O = z - h, R = M - m;
      const D = rt, F = window.innerHeight, W = window.innerWidth, Q = x.height, X = x.width;
      O + Q > F - D && (O = Math.max(D, F - D - Q)), O < D && (O = D), R + X > W - D && (R = Math.max(D, W - D - X)), R < D && (R = D), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(O)}px`,
        left: `${Math.round(R)}px`
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
      const t = this.$refs.panelRef, r = e == null ? void 0 : e.target;
      t && r && r !== document && r !== document.documentElement && t.contains(r) || this.schedulePosition();
    },
    onDocPointerDown(e) {
      if (!this.open || !this.closeOnOutsideClick) return;
      const t = e.target, r = this.$refs.triggerRef, n = this.$refs.panelRef;
      r != null && r.contains(t) || n != null && n.contains(t) || this.shouldIgnoreOutsideClick(t) || this.close();
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
      for (const i of Ml)
        if (e.closest(i)) return !0;
      const n = (l = this.outsideClickIgnoreSelector) == null ? void 0 : l.trim();
      return !!(n && e.closest(n));
    },
    onDocKeydown(e) {
      !this.open || !this.closeOnEscape || e.key === "Escape" && (e.preventDefault(), this.close());
    },
    onPanelKeydown(e) {
      e.key === "Escape" && this.close();
    }
  }
}, Rl = {
  ref: "triggerRef",
  class: "ui-popover-trigger inline-flex shrink-0"
}, Bl = ["data-popover-align-active", "data-ui-popover-mobile-centered"], El = {
  key: 0,
  class: "ui-popover-header"
}, Fl = { class: "ui-popover-body min-h-0 min-w-0" }, Nl = {
  key: 1,
  class: "ui-popover-footer"
};
function Yl(e, t, r, n, l, i) {
  return s(), a("div", {
    ref: "rootRef",
    class: v(["ui-popover relative shrink-0", e.$attrs.class])
  }, [
    c("div", Rl, [
      g(e.$slots, "trigger", {
        open: r.open,
        toggle: i.toggle,
        close: i.close
      })
    ], 512),
    (s(), k(Z, { to: "body" }, [
      b(ne, { name: "ui-overlay-popover" }, {
        default: w(() => [
          re(c("div", {
            ref: "layerRef",
            class: "ui-popover-layer fixed",
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
              e.$slots.header ? (s(), a("div", El, [
                g(e.$slots, "header", { close: i.close })
              ])) : f("", !0),
              c("div", Fl, [
                g(e.$slots, "content", { close: i.close })
              ]),
              e.$slots.footer ? (s(), a("div", Nl, [
                g(e.$slots, "footer", { close: i.close })
              ])) : f("", !0)
            ], 544)
          ], 12, Bl), [
            [ye, r.open]
          ])
        ]),
        _: 3
      })
    ]))
  ], 2);
}
const Hl = /* @__PURE__ */ _(Ol, [["render", Yl]]), Wl = ["bar", "circle"], st = ["sm", "md", "lg"], lt = ["thin", "md"], jl = ["default", "weak", "fair", "good", "strong"], le = { sm: 16, md: 20, lg: 24 }, Kl = { sm: 1.5, md: 2, lg: 2 }, Gl = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Wl.includes(e)
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
      validator: (e) => jl.includes(e)
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
      const e = this.type === "circle" ? st.includes(this.size) ? this.size : "sm" : lt.includes(this.size) ? this.size : "md";
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
      return st.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return lt.includes(this.size) ? this.size : "md";
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
      const e = le[this.circleSizeKey] ?? le.sm, t = Kl[this.circleSizeKey] ?? 2, r = (e - t) / 2, n = e / 2, l = 2 * Math.PI * r, i = l * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: n, circumference: l, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Ul = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], ql = ["width", "height", "viewBox"], Zl = ["cx", "cy", "r", "stroke-width"], Ql = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Xl = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function Jl(e, t, r, n, l, i) {
  return s(), a("div", {
    class: v(i.rootClass),
    style: B(i.circleRootStyle),
    role: r.presentational ? void 0 : "progressbar",
    "aria-valuenow": r.presentational || r.indeterminate ? void 0 : i.ariaValueNow,
    "aria-valuemin": r.presentational ? void 0 : 0,
    "aria-valuemax": r.presentational ? void 0 : r.max,
    "aria-label": r.presentational ? void 0 : i.resolvedAriaLabel,
    "aria-valuetext": r.presentational ? void 0 : r.ariaValuetext
  }, [
    r.type === "circle" ? (s(), a("svg", {
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
      }, null, 8, Zl),
      c("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, Ql)
    ], 8, ql)) : (s(), a("div", Xl, [
      c("div", {
        class: "ui-progress-bar-indicator",
        style: B({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Ul);
}
const ea = /* @__PURE__ */ _(Gl, [["render", Jl]]), ta = {
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
}, ia = ["name", "value", "checked"], ra = { class: "ui-radio-body" }, na = { class: "ui-radio-label" }, sa = {
  key: 0,
  class: "ui-radio-description"
};
function la(e, t, r, n, l, i) {
  var o;
  return s(), a("label", {
    class: v([
      "ui-radio",
      `ui-radio--${i.groupVariant}`,
      {
        "ui-radio--checked": i.isChecked,
        "ui-radio--highlight": r.highlight && i.isChecked
      }
    ]),
    onKeydown: [
      t[1] || (t[1] = q(A((...u) => i.select && i.select(...u), ["prevent"]), ["enter"])),
      t[2] || (t[2] = q(A((...u) => i.select && i.select(...u), ["prevent"]), ["space"]))
    ]
  }, [
    c("input", {
      type: "radio",
      name: (o = i.uiRadioGroup) == null ? void 0 : o.groupName,
      value: i.stringValue,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => i.select && i.select(...u))
    }, null, 40, ia),
    t[3] || (t[3] = c("span", {
      class: "ui-radio-indicator",
      "aria-hidden": "true"
    }, null, -1)),
    c("span", ra, [
      c("span", na, p(r.label), 1),
      r.description ? (s(), a("span", sa, p(r.description), 1)) : f("", !0)
    ])
  ], 34);
}
const aa = /* @__PURE__ */ _(ta, [["render", la]]);
let at = 0;
const oa = ["list", "button", "List", "Button"], ua = ["vertical", "horizontal"], da = {
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
      validator: (e) => oa.includes(e)
    },
    /** Yalnız `variant="list"`: `horizontal` ile yan yana dizilim */
    orientation: {
      type: String,
      default: "vertical",
      validator: (e) => ua.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return at += 1, { groupName: `ui-radio-group-${at}` };
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
}, ca = ["aria-label"];
function ha(e, t, r, n, l, i) {
  return s(), a("div", {
    class: v(i.rootClass),
    role: "radiogroup",
    "aria-label": r.ariaLabel || void 0
  }, [
    g(e.$slots, "default")
  ], 10, ca);
}
const fa = /* @__PURE__ */ _(da, [["render", ha]]), ma = {
  name: "Tag",
  components: { Badge: Tt, Tooltip: ve },
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
}, pa = ["aria-label"];
function ga(e, t, r, n, l, i) {
  const o = y("ui-icon"), u = y("Tooltip"), d = y("Badge");
  return s(), k(d, {
    variant: r.variant,
    size: r.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, Ct({
    default: w(() => [
      g(e.$slots, "default")
    ]),
    _: 2
  }, [
    r.removable ? {
      name: "append",
      fn: w(() => [
        b(u, {
          label: i.removeLabel,
          placement: "bottom"
        }, {
          default: w(() => [
            c("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": i.removeLabel,
              onClick: t[0] || (t[0] = A((h) => e.$emit("remove"), ["stop"]))
            }, [
              b(o, {
                name: "xmark",
                size: "xs"
              })
            ], 8, pa)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["variant", "size"]);
}
const zt = /* @__PURE__ */ _(ma, [["render", ga]]);
let ot = 0;
const ba = ["field", "inline"], ya = ["sm", "md", "lg"], va = {
  name: "Select",
  components: { Tag: zt },
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
      validator: (e) => ba.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => ya.includes(e)
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
    ot += 1;
    const e = ot;
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
        const r = String(t.label), n = String(t.value);
        return r !== e && n !== e;
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
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
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
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], r = t.findIndex((n) => String(n) === String(e.value));
      r >= 0 ? t.splice(r, 1) : t.push(e.value), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } });
    },
    removeValue(e) {
      if (!this.multiple) return;
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], r = t.findIndex((n) => String(n) === String(e));
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
}, _a = ["name", "value"], ka = ["id", "disabled", "aria-expanded", "aria-haspopup", "aria-controls", "aria-describedby", "onClick"], wa = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Sa = {
  key: 1,
  class: "ui-select-values-inner"
}, xa = ["placeholder", "aria-label", "disabled"], Ca = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, Ta = { class: "ui-select-field-suffix" }, Ia = ["aria-label"], La = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Aa = ["placeholder", "aria-label", "onKeydown"], za = ["id", "role", "aria-multiselectable", "aria-labelledby"], $a = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, Da = {
  "data-popover-align": "",
  class: "block min-w-0 truncate"
};
function Va(e, t, r, n, l, i) {
  const o = y("ui-icon"), u = y("Tag"), d = y("ui-skeleton"), h = y("ui-button"), m = y("ui-empty"), x = y("ui-popover");
  return s(), a("div", {
    class: v(i.rootClass)
  }, [
    r.name ? (s(), a("input", {
      key: 0,
      type: "hidden",
      name: r.name,
      value: i.hiddenFieldValue
    }, null, 8, _a)) : f("", !0),
    b(x, {
      open: l.menuOpen,
      "onUpdate:open": t[6] || (t[6] = (T) => l.menuOpen = T),
      placement: "bottom-start",
      "match-trigger-width": i.resolvedMatchTriggerWidth,
      disabled: i.isDisabled,
      "align-selected-option-to-trigger": i.alignSelectedToTrigger
    }, Ct({
      trigger: w(({ open: T, toggle: I }) => [
        c("button", C({
          type: "button",
          id: i.resolvedId,
          class: ["ui-select-field", { "ui-select-field--values": r.multiple }],
          disabled: i.isDisabled,
          "aria-expanded": T ? "true" : "false",
          "aria-haspopup": i.listboxRole,
          "aria-controls": l.listboxId,
          "aria-describedby": r.ariaDescribedby
        }, i.triggerPassthrough, {
          onClick: (z) => i.onTriggerClick(I)
        }), [
          r.prefixIcon ? (s(), a("span", wa, [
            b(o, {
              name: r.prefixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : f("", !0),
          r.multiple ? (s(), a("div", Sa, [
            (s(!0), a(L, null, V(i.selectedValues, (z) => (s(), k(u, {
              key: String(z),
              variant: "secondary",
              size: "sm",
              removable: "",
              onRemove: (M) => i.removeValue(z)
            }, {
              default: w(() => [
                P(p(i.labelForValue(z)), 1)
              ]),
              _: 2
            }, 1032, ["onRemove"]))), 128)),
            i.isFilterable ? re((s(), a("input", {
              key: 0,
              ref: "searchInput",
              "onUpdate:modelValue": t[0] || (t[0] = (z) => l.filterQuery = z),
              type: "text",
              class: v(["ui-select-values-input", { "ui-select-values-input--solo": !i.selectedValues.length }]),
              placeholder: i.multipleInputPlaceholder,
              "aria-label": i.resolvedFilterPlaceholder,
              autocomplete: "off",
              disabled: i.isDisabled,
              onClick: t[1] || (t[1] = A(() => {
              }, ["stop"])),
              onKeydown: t[2] || (t[2] = (...z) => i.onSearchKeydown && i.onSearchKeydown(...z))
            }, null, 42, xa)), [
              [xe, l.filterQuery]
            ]) : f("", !0)
          ])) : r.loading ? (s(), a("span", Ca, p(i.resolvedLoadingLabel), 1)) : (s(), a("span", {
            key: 3,
            class: v(["ui-select-value", { "ui-select-value--placeholder": i.isPlaceholderDisplay }]),
            "data-popover-align": ""
          }, p(i.displayLabel), 3)),
          c("span", Ta, [
            i.showClearButton ? (s(), a("button", {
              key: 0,
              type: "button",
              class: "ui-select-clear",
              "aria-label": i.clearAriaLabel,
              onClick: t[3] || (t[3] = A((...z) => i.clearSelection && i.clearSelection(...z), ["stop"]))
            }, [
              b(o, {
                name: "xmark",
                size: "xs"
              })
            ], 8, Ia)) : f("", !0),
            c("span", La, [
              b(o, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 16, ka)
      ]),
      content: w(({ close: T }) => [
        c("div", {
          ref: "listbox",
          id: l.listboxId,
          class: "ui-select-listbox",
          role: i.listboxRole,
          "aria-multiselectable": r.multiple ? "true" : void 0,
          "aria-labelledby": i.resolvedId
        }, [
          r.loading && !i.filteredOptions.length ? (s(), a("div", $a, [
            (s(), a(L, null, V(3, (I) => b(d, {
              key: I,
              variant: "line",
              class: v(I === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : i.filteredOptions.length ? (s(!0), a(L, { key: 1 }, V(i.filteredOptions, (I) => (s(), k(h, {
            key: String(I.value),
            variant: i.isSelected(I) ? "solid" : "ghost",
            color: i.isSelected(I) ? "primary" : "secondary",
            size: "sm",
            fulled: "",
            "text-align": "left",
            role: "option",
            class: v(["ui-select-option", { "ui-select-option--selected": i.isSelected(I) }]),
            "suffix-icon": i.isSelected(I) ? "check" : void 0,
            "aria-selected": i.isSelected(I) ? "true" : "false",
            onClick: (z) => i.pick(I, T)
          }, {
            default: w(() => [
              c("span", Da, p(I.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "color", "class", "suffix-icon", "aria-selected", "onClick"]))), 128)) : i.isFilterable && l.filterQuery ? (s(), k(m, {
            key: 2,
            icon: "magnifying-glass",
            size: "sm",
            title: i.noResultsText
          }, null, 8, ["title"])) : (s(), k(m, {
            key: 3,
            icon: "table-cells",
            size: "sm",
            title: i.emptyOptionsText
          }, null, 8, ["title"]))
        ], 8, za)
      ]),
      _: 2
    }, [
      i.showPopoverHeader ? {
        name: "header",
        fn: w(({ close: T }) => [
          re(c("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[4] || (t[4] = (I) => l.filterQuery = I),
            type: "text",
            class: "ui-select-filter-input w-full",
            placeholder: i.resolvedFilterPlaceholder,
            "aria-label": i.resolvedFilterPlaceholder,
            autocomplete: "off",
            onMousedown: t[5] || (t[5] = A(() => {
            }, ["prevent"])),
            onKeydown: [
              q(A((I) => i.pickFirstFiltered(T), ["prevent"]), ["enter"]),
              q(A((I) => T(), ["prevent"]), ["esc"])
            ]
          }, null, 40, Aa), [
            [xe, l.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: w((T) => [
          g(e.$slots, "footer", St(xt(T)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const Pa = /* @__PURE__ */ _(va, [["render", Va]]), Ma = ["sm", "md", "lg", "full"], ut = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, Oa = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => Ma.includes(e)
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-menu",
        ut[this.width] || ut.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ra = {
  key: 0,
  class: "ui-menu-header"
}, Ba = { class: "ui-menu-body" }, Ea = {
  key: 1,
  class: "ui-menu-footer"
};
function Fa(e, t, r, n, l, i) {
  return s(), a("nav", C({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (s(), a("div", Ra, [
      g(e.$slots, "header")
    ])) : f("", !0),
    c("div", Ba, [
      g(e.$slots, "default")
    ]),
    e.$slots.footer ? (s(), a("div", Ea, [
      g(e.$slots, "footer")
    ])) : f("", !0)
  ], 16);
}
const Na = /* @__PURE__ */ _(Oa, [["render", Fa]]), Ya = {
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
}, Ha = {
  key: 0,
  class: "ui-menu-group-label"
}, Wa = { class: "ui-menu-group-items" };
function ja(e, t, r, n, l, i) {
  return s(), a("div", C({ class: i.groupClass }, i.passthroughAttrs), [
    r.label ? (s(), a("p", Ha, p(r.label), 1)) : f("", !0),
    c("div", Wa, [
      g(e.$slots, "default")
    ])
  ], 16);
}
const Ka = /* @__PURE__ */ _(Ya, [["render", ja]]), Ga = {
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
function Ua(e, t, r, n, l, i) {
  const o = y("ui-button");
  return s(), k(o, C({
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
      g(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const qa = /* @__PURE__ */ _(Ga, [["render", Ua]]), Za = {
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
}, Qa = ["aria-label"];
function Xa(e, t, r, n, l, i) {
  return s(), a("div", C({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, Qa);
}
const Ja = /* @__PURE__ */ _(Za, [["render", Xa]]), eo = {
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
}, to = ["aria-checked", "disabled"], io = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, ro = {
  key: 1,
  class: "ui-segment-label"
}, no = {
  key: 2,
  class: "sr-only"
}, so = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, lo = {
  key: 1,
  class: "ui-segment-label"
}, ao = {
  key: 2,
  class: "sr-only"
};
function oo(e, t, r, n, l, i) {
  const o = y("ui-icon");
  return s(), a("button", {
    type: "button",
    role: "radio",
    class: v(i.segmentClass),
    "aria-checked": i.isSelected ? "true" : "false",
    disabled: r.disabled,
    onClick: t[2] || (t[2] = (...u) => i.select && i.select(...u))
  }, [
    i.hasAffixes ? (s(), a(L, { key: 0 }, [
      i.hasPrepend ? (s(), a("span", {
        key: 0,
        class: "ui-segment-affix ui-segment-affix--prepend",
        onClick: t[0] || (t[0] = A(() => {
        }, ["stop"]))
      }, [
        g(e.$slots, "prepend")
      ])) : f("", !0),
      c("span", {
        class: v(["ui-segment-main", { "ui-segment-main--with-icon": r.icon }])
      }, [
        r.icon ? (s(), a("span", io, [
          b(o, {
            name: r.icon,
            size: i.iconSize
          }, null, 8, ["name", "size"])
        ])) : f("", !0),
        i.showLabel ? (s(), a("span", ro, p(r.label), 1)) : r.label ? (s(), a("span", no, p(r.label), 1)) : f("", !0)
      ], 2),
      i.hasAppend ? (s(), a("span", {
        key: 1,
        class: "ui-segment-affix ui-segment-affix--append",
        onClick: t[1] || (t[1] = A(() => {
        }, ["stop"]))
      }, [
        g(e.$slots, "append")
      ])) : f("", !0)
    ], 64)) : (s(), a(L, { key: 1 }, [
      r.icon ? (s(), a("span", so, [
        b(o, {
          name: r.icon,
          size: i.iconSize
        }, null, 8, ["name", "size"])
      ])) : f("", !0),
      i.showLabel ? (s(), a("span", lo, p(r.label), 1)) : r.label ? (s(), a("span", ao, p(r.label), 1)) : f("", !0)
    ], 64))
  ], 10, to);
}
const uo = /* @__PURE__ */ _(eo, [["render", oo]]), co = ["sm", "md", "lg"], ho = ["horizontal", "vertical"], fo = {
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
      validator: (e) => co.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => ho.includes(e)
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
}, mo = ["aria-label"];
function po(e, t, r, n, l, i) {
  return s(), a("div", C({
    class: i.rootClass,
    role: "radiogroup",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, mo);
}
const go = /* @__PURE__ */ _(fo, [["render", po]]), bo = ["horizontal", "vertical"], yo = ["default", "pills"], vo = {
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
      validator: (e) => yo.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => bo.includes(e)
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
}, _o = ["aria-label"], ko = { class: "ui-stepper-pills-track" }, wo = {
  key: 0,
  class: "ui-stepper-pills-label"
}, So = { class: "flex w-full min-w-0 items-center justify-center" }, xo = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Co = {
  key: 1,
  class: "tabular-nums"
}, To = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Io = { class: "ui-stepper-title ui-stepper-title--horizontal" }, Lo = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, Ao = { class: "flex flex-col items-center" }, zo = {
  key: 1,
  class: "tabular-nums"
}, $o = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, Do = { class: "ui-stepper-title" }, Vo = {
  key: 0,
  class: "ui-stepper-description"
};
function Po(e, t, r, n, l, i) {
  const o = y("ui-icon");
  return s(), a("div", C({
    class: i.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, i.passthroughAttrs), [
    r.variant === "pills" ? (s(), a(L, { key: 0 }, [
      c("div", ko, [
        (s(!0), a(L, null, V(i.normalizedSteps, (u, d) => (s(), k(U(r.interactive ? "button" : "span"), C({
          key: d,
          class: ["ui-stepper-pill", i.pillClass(d)],
          role: "listitem",
          "aria-current": d === r.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(d) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      r.showLabel ? (s(), a("p", wo, p(i.pillsLabel), 1)) : f("", !0)
    ], 64)) : r.direction === "horizontal" ? (s(!0), a(L, { key: 1 }, V(i.normalizedSteps, (u, d) => (s(), a("div", {
      key: d,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      c("div", So, [
        d > 0 ? (s(), a("span", {
          key: 0,
          class: v(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(d)]),
          "aria-hidden": "true"
        }, null, 2)) : (s(), a("span", xo)),
        (s(), k(U(r.interactive ? "button" : "div"), C({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(d)],
          "aria-current": d === r.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(d) : void 0
        }), {
          default: w(() => [
            u.icon ? (s(), k(o, {
              key: 0,
              name: u.icon,
              type: u.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (s(), a("span", Co, p(d + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        d < i.normalizedSteps.length - 1 ? (s(), a("span", {
          key: 2,
          class: v(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(d)]),
          "aria-hidden": "true"
        }, null, 2)) : (s(), a("span", To))
      ]),
      c("p", Io, p(u.title), 1),
      u.description ? (s(), a("p", Lo, p(u.description), 1)) : f("", !0)
    ]))), 128)) : (s(!0), a(L, { key: 2 }, V(i.normalizedSteps, (u, d) => (s(), a("div", {
      key: d,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      c("div", Ao, [
        (s(), k(U(r.interactive ? "button" : "div"), C({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(d)],
          "aria-current": d === r.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(d) : void 0
        }), {
          default: w(() => [
            u.icon ? (s(), k(o, {
              key: 0,
              name: u.icon,
              type: u.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (s(), a("span", zo, p(d + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        d < i.normalizedSteps.length - 1 ? (s(), a("span", {
          key: 0,
          class: v(["ui-stepper-vrail", i.verticalRailClass(d)]),
          "aria-hidden": "true"
        }, null, 2)) : f("", !0)
      ]),
      c("div", $o, [
        c("p", Do, p(u.title), 1),
        u.description ? (s(), a("p", Vo, p(u.description), 1)) : f("", !0)
      ])
    ]))), 128))
  ], 16, _o);
}
const Mo = /* @__PURE__ */ _(vo, [["render", Po]]), Oo = ["line", "circle", "block", "pill"], Ro = ["sm", "md", "lg"], Bo = 480, dt = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, ct = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, Eo = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => Oo.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => Ro.includes(e)
    }
  },
  setup(e) {
    const t = Dt(), r = j(() => !!t.default), n = E(null), l = E(null), i = E(null), o = E(null), u = E(!1), d = E(!1), h = E(!1), m = E(!1), x = j(
      () => e.loading || d.value
    ), T = j(
      () => e.loading || d.value
    );
    Vt(() => {
      m.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), Pt(
      () => e.loading,
      async (D, F) => {
        var X, we, Se;
        if (D) {
          d.value = !1, h.value = !1, o.value = null, u.value = !1;
          return;
        }
        if (F !== !0) return;
        if (m.value) {
          d.value = !1, o.value = null, u.value = !1;
          return;
        }
        const W = ((X = n.value) == null ? void 0 : X.offsetHeight) ?? ((we = l.value) == null ? void 0 : we.offsetHeight) ?? 0;
        d.value = !0, h.value = !1, u.value = !0, o.value = W, await Ce();
        const Q = ((Se = i.value) == null ? void 0 : Se.scrollHeight) ?? W;
        if (W <= 0 && Q <= 0) {
          I();
          return;
        }
        await Ce(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            o.value = Q, h.value = !0;
          });
        }), setTimeout(I, Bo + 40);
      }
    );
    function I() {
      d.value = !1, h.value = !1, o.value = null, u.value = !1;
    }
    function z(D) {
      D.target === n.value && D.propertyName === "height" && (e.loading || u.value && I());
    }
    const M = j(() => {
      if (o.value != null)
        return { height: `${o.value}px` };
    }), O = j(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !d.value,
      "ui-skeleton-placeholder--overlay": d.value,
      "ui-skeleton-placeholder--fade-out": d.value
    })), R = j(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !d.value,
      "ui-skeleton-content-wrap--revealing": d.value,
      "ui-skeleton-content-wrap--revealing-visible": d.value && h.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !d.value
    }));
    return {
      hasDefaultSlot: r,
      hostRef: n,
      placeholderRef: l,
      contentWrapRef: i,
      hostStyle: M,
      heightAnimActive: u,
      isRevealing: d,
      showPlaceholder: x,
      isBusy: T,
      placeholderClass: O,
      contentWrapClass: R,
      onHostTransitionEnd: z
    };
  },
  computed: {
    variantClass() {
      return dt[this.variant] || dt.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return ct[this.size] || ct.md;
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
}, Fo = ["aria-busy"], No = ["aria-hidden"];
function Yo(e, t, r, n, l, i) {
  return n.hasDefaultSlot ? (s(), a("div", C({
    key: 1,
    ref: "hostRef",
    class: i.hostClass,
    style: n.hostStyle,
    "aria-busy": n.isBusy ? "true" : void 0
  }, i.passthroughAttrs, {
    onTransitionend: t[0] || (t[0] = (...o) => n.onHostTransitionEnd && n.onHostTransitionEnd(...o))
  }), [
    re(c("div", {
      ref: "placeholderRef",
      class: v(["ui-skeleton-placeholder", n.placeholderClass]),
      "aria-hidden": "true"
    }, [
      g(e.$slots, "placeholder", {}, () => [
        t[1] || (t[1] = c("div", { class: "ui-skeleton-default-rows" }, [
          c("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md" }),
          c("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--md" }),
          c("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--sm" })
        ], -1))
      ])
    ], 2), [
      [ye, n.showPlaceholder]
    ]),
    c("div", {
      ref: "contentWrapRef",
      class: v(["ui-skeleton-content-wrap", n.contentWrapClass])
    }, [
      c("div", {
        class: "ui-skeleton-content",
        "aria-hidden": n.showPlaceholder && !n.isRevealing ? "true" : void 0
      }, [
        g(e.$slots, "default")
      ], 8, No)
    ], 2)
  ], 16, Fo)) : (s(), a("div", C({
    key: 0,
    class: i.skeletonClass,
    "aria-hidden": "true"
  }, i.passthroughAttrs), null, 16));
}
const Ho = /* @__PURE__ */ _(Eo, [["render", Yo]]);
let ht = 0;
const Wo = {
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
    return ht += 1, { fallbackId: `ui-slider-${ht}` };
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
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
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
}, jo = {
  key: 0,
  class: "ui-slider-header"
}, Ko = {
  key: 0,
  class: "ui-form-label"
}, Go = {
  key: 1,
  class: "ui-slider-value"
}, Uo = { class: "ui-slider-rail" }, qo = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Zo = {
  key: 1,
  class: "ui-slider-scale"
}, Qo = { key: 0 }, Xo = { key: 1 };
function Jo(e, t, r, n, l, i) {
  const o = y("ui-progress");
  return s(), a("div", {
    class: v(i.rootClass)
  }, [
    r.label || i.hasValue ? (s(), a("div", jo, [
      r.label ? (s(), a("span", Ko, p(r.label), 1)) : f("", !0),
      i.hasValue ? (s(), a("span", Go, p(r.valueText), 1)) : f("", !0)
    ])) : f("", !0),
    c("div", Uo, [
      b(o, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: i.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      c("input", C(i.passthroughAttrs, {
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
        onInput: t[0] || (t[0] = (...u) => i.onNativeInput && i.onNativeInput(...u)),
        onChange: t[1] || (t[1] = (...u) => i.onChange && i.onChange(...u))
      }), null, 16, qo)
    ]),
    r.minLabel || r.maxLabel ? (s(), a("div", Zo, [
      r.minLabel ? (s(), a("span", Qo, p(r.minLabel), 1)) : f("", !0),
      r.maxLabel ? (s(), a("span", Xo, p(r.maxLabel), 1)) : f("", !0)
    ])) : f("", !0)
  ], 2);
}
const eu = /* @__PURE__ */ _(Wo, [["render", Jo]]);
let ft = 0;
const tu = {
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
    return ft += 1, { fallbackId: `ui-switch-${ft}` };
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
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
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
}, iu = ["id", "aria-checked", "disabled", "aria-describedby"];
function ru(e, t, r, n, l, i) {
  return s(), a("button", C({
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
      class: v(["ui-switch-track", r.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      c("span", {
        class: v(["ui-switch-thumb", r.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, iu);
}
const nu = /* @__PURE__ */ _(tu, [["render", ru]]), su = {
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
}, lu = { class: "ui-table-scroll" };
function au(e, t, r, n, l, i) {
  return s(), a("div", lu, [
    c("table", C({ class: i.rootClass }, i.passthroughAttrs), [
      g(e.$slots, "default")
    ], 16)
  ]);
}
const ou = /* @__PURE__ */ _(su, [["render", au]]), uu = {
  name: "TableBody"
}, du = { class: "ui-table-body" };
function cu(e, t, r, n, l, i) {
  return s(), a("tbody", du, [
    g(e.$slots, "default")
  ]);
}
const hu = /* @__PURE__ */ _(uu, [["render", cu]]), fu = ["left", "center", "right"], mu = ["title", "secondary", "body"], pu = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => fu.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || mu.includes(e)
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
}, gu = ["colspan"];
function bu(e, t, r, n, l, i) {
  return s(), a("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: v(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 10, gu);
}
const yu = /* @__PURE__ */ _(pu, [["render", bu]]), vu = ["left", "center", "right"], _u = ["sm", "md", "lg"], ku = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => vu.includes(e)
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
      if (!(this.iconCol || _u.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function wu(e, t, r, n, l, i) {
  return s(), a("th", {
    class: v(i.rootClass),
    style: B(i.widthStyle)
  }, [
    g(e.$slots, "default")
  ], 6);
}
const Su = /* @__PURE__ */ _(ku, [["render", wu]]), xu = {
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
function Cu(e, t, r, n, l, i) {
  return s(), a("thead", {
    class: v(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Tu = /* @__PURE__ */ _(xu, [["render", Cu]]), Iu = {
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
}, Lu = { class: "ui-table-pagination" }, Au = { class: "ui-table-pagination-meta" }, zu = { class: "ui-table-pagination-nav" }, $u = { class: "ui-table-pagination-page" };
function Du(e, t, r, n, l, i) {
  const o = y("ui-button");
  return s(), a("div", Lu, [
    c("div", Au, [
      g(e.$slots, "meta", {}, () => [
        P(p(r.metaText), 1)
      ])
    ]),
    c("div", zu, [
      b(o, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !i.canPrev,
        "aria-label": r.prevAriaLabel,
        onClick: t[0] || (t[0] = (u) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      c("div", $u, p(r.pageLabel), 1),
      b(o, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !i.canNext,
        "aria-label": r.nextAriaLabel,
        onClick: t[1] || (t[1] = (u) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const Vu = /* @__PURE__ */ _(Iu, [["render", Du]]), Pu = ["soft", "strong"], Mu = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Pu.includes(e)
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
function Ou(e, t, r, n, l, i) {
  return s(), a("tr", {
    class: v(i.rootClass)
  }, [
    g(e.$slots, "default")
  ], 2);
}
const Ru = /* @__PURE__ */ _(Mu, [["render", Ou]]), Bu = {
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
      var n, l;
      const e = ((n = this.uiTabs) == null ? void 0 : n.orientation) === "vertical", r = ((l = this.uiTabs) == null ? void 0 : l.variant) === "segmented" && !e ? "segmented" : "line";
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
      var m, x;
      if (!this.uiTabs) return;
      const t = this.uiTabs.orientation === "vertical", r = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'));
      if (r.length === 0) return;
      const n = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], l = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], i = e.key;
      let o = 0;
      if (n.includes(i)) o = 1;
      else if (l.includes(i)) o = -1;
      else return;
      e.preventDefault();
      const u = document.activeElement;
      let d = r.indexOf(u);
      d === -1 && (d = r.findIndex((T) => T.getAttribute("aria-selected") === "true")), d === -1 && (d = 0);
      let h = d + o;
      h < 0 && (h = r.length - 1), h >= r.length && (h = 0), (x = (m = r[h]) == null ? void 0 : m.focus) == null || x.call(m);
    }
  }
}, Eu = ["aria-label", "aria-orientation"];
function Fu(e, t, r, n, l, i) {
  return s(), a("div", C({
    class: i.listClass,
    role: "tablist",
    "aria-label": r.ariaLabel || void 0,
    "aria-orientation": i.ariaOrientation
  }, i.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...o) => i.onKeydown && i.onKeydown(...o))
  }), [
    g(e.$slots, "default")
  ], 16, Eu);
}
const Nu = /* @__PURE__ */ _(Bu, [["render", Fu]]), Yu = {
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
}, Hu = ["id", "aria-labelledby"];
function Wu(e, t, r, n, l, i) {
  return re((s(), a("div", C({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16, Hu)), [
    [ye, i.isActive]
  ]);
}
const ju = /* @__PURE__ */ _(Yu, [["render", Wu]]);
let mt = 0;
const Ku = ["line", "segmented"], Gu = {
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
      validator: (e) => Ku.includes(e)
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
    return mt += 1, {
      baseId: `ui-tabs-${mt}`
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
function Uu(e, t, r, n, l, i) {
  return s(), a("div", C({ class: i.rootClass }, i.passthroughAttrs), [
    g(e.$slots, "default")
  ], 16);
}
const qu = /* @__PURE__ */ _(Gu, [["render", Uu]]), Zu = ["solid", "regular", "brands", "light", "duotone", "thin"], Qu = {
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
      validator: (e) => Zu.includes(e)
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
}, Xu = ["id", "aria-selected", "aria-controls", "tabindex", "disabled"], Ju = { class: "ui-tab-trigger-label min-w-0 truncate" };
function ed(e, t, r, n, l, i) {
  const o = y("ui-icon");
  return s(), a("button", {
    type: "button",
    role: "tab",
    id: i.triggerDomId,
    class: v(i.triggerClass),
    "aria-selected": i.isSelected ? "true" : "false",
    "aria-controls": i.panelDomId,
    tabindex: i.isSelected ? 0 : -1,
    disabled: r.disabled,
    onClick: t[0] || (t[0] = (...u) => i.select && i.select(...u))
  }, [
    r.icon ? (s(), k(o, {
      key: 0,
      name: r.icon,
      type: i.tabIconType,
      size: i.tabIconSize,
      class: "ui-tab-trigger-icon",
      "aria-hidden": "true"
    }, null, 8, ["name", "type", "size"])) : f("", !0),
    c("span", Ju, [
      g(e.$slots, "default", {}, () => [
        P(p(r.label), 1)
      ])
    ])
  ], 10, Xu);
}
const td = /* @__PURE__ */ _(Qu, [["render", ed]]);
let pt = 0;
const G = 40;
function J(e) {
  return String(e).padStart(2, "0");
}
const id = {
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
    return pt += 1, {
      fallbackId: `ui-timepicker-${pt}`,
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
      const n = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      n && (t = Math.min(23, Math.max(0, parseInt(n[1], 10))), r = Math.min(59, Math.max(0, parseInt(n[2], 10))));
      const l = this.minuteValues;
      let i = l[0] ?? 0, o = 999;
      for (const u of l) {
        const d = Math.abs(u - r);
        d < o && (o = d, i = u);
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
      const r = this.wheelSpacerTop(e), n = e.scrollTop + e.clientHeight / 2, l = Math.round((n - r - G / 2) / G);
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
      const n = () => {
        this.scrollWheelToIndex(this.$refs.hourWheel, e), this.scrollWheelToIndex(this.$refs.minuteWheel, r);
      };
      n(), requestAnimationFrame(() => {
        n(), requestAnimationFrame(() => {
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
      const n = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - n) > 0.5 && (e.scrollTop = n), this.emitDraft();
    }
  }
}, rd = { class: "min-w-0 flex-1 truncate text-foreground" }, nd = { class: "ui-timepicker-panel w-full p-2" }, sd = { class: "relative" }, ld = { class: "relative z-[1] flex items-stretch gap-0.5" }, ad = ["aria-valuenow"], od = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, ud = { class: "ui-timepicker-wheel-spacer" }, dd = ["onClick"], cd = ["aria-valuenow"], hd = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, fd = { class: "ui-timepicker-wheel-spacer" }, md = ["onClick"];
function pd(e, t, r, n, l, i) {
  const o = y("ui-button"), u = y("ui-popover");
  return s(), a("div", {
    class: v(["ui-timepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    b(u, {
      open: l.menuOpen,
      "onUpdate:open": t[0] || (t[0] = (d) => l.menuOpen = d),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: w(({ open: d, toggle: h }) => [
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
          "aria-expanded": d ? "true" : "false",
          "aria-haspopup": !0,
          onClick: h
        }, {
          default: w(() => [
            c("span", rd, p(i.display), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: w(() => [
        c("div", nd, [
          c("div", sd, [
            t[2] || (t[2] = c("div", {
              class: "pointer-events-none absolute inset-x-0 top-1/2 z-0 h-10 -translate-y-1/2 rounded-lg bg-secondary/35 ring-1 ring-border",
              "aria-hidden": "true"
            }, null, -1)),
            c("div", ld, [
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": l.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": "Saat"
              }, [
                c("div", od, [
                  c("div", ud, [
                    (s(!0), a(L, null, V(i.hourOptions, (d) => (s(), a("button", {
                      key: "h-" + d,
                      type: "button",
                      tabindex: "-1",
                      class: "ui-timepicker-wheel-item",
                      onClick: (h) => i.selectHour(d)
                    }, p(i.pad2(d)), 9, dd))), 128))
                  ])
                ], 512)
              ], 8, ad),
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
                c("div", hd, [
                  c("div", fd, [
                    (s(!0), a(L, null, V(i.minuteValues, (d, h) => (s(), a("button", {
                      key: "m-" + d,
                      type: "button",
                      tabindex: "-1",
                      class: "ui-timepicker-wheel-item",
                      onClick: (m) => i.selectMinute(h)
                    }, p(i.pad2(d)), 9, md))), 128))
                  ])
                ], 512)
              ], 8, cd)
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const gd = /* @__PURE__ */ _(id, [["render", pd]]), H = be({
  /** @type {ToastItem[]} */
  items: []
});
let gt = 0;
function ee(e = {}) {
  gt += 1;
  const t = gt, r = {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    variant: e.variant ?? "info",
    duration: e.duration !== void 0 ? e.duration : 4500,
    _timer: null
  };
  return H.items.push(r), r.duration > 0 && (r._timer = setTimeout(() => ke(t), r.duration)), t;
}
function ke(e) {
  const t = H.items.findIndex((n) => n.id === e);
  if (t === -1) return;
  const r = H.items[t];
  r._timer && (clearTimeout(r._timer), r._timer = null), H.items.splice(t, 1);
}
function bd() {
  for (const e of H.items)
    e._timer && clearTimeout(e._timer);
  H.items.splice(0);
}
const bt = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, yt = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, yd = {
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
    queueDismissToast: ke,
    iconFor(e) {
      return bt[e] || bt.info;
    },
    iconToneClass(e) {
      return yt[e] || yt.info;
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
}, vd = { class: "ui-toast-host" }, _d = { class: "ui-alert-body" }, kd = {
  key: 0,
  class: "ui-alert-title"
}, wd = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function Sd(e, t, r, n, l, i) {
  const o = y("ui-icon"), u = y("ui-button");
  return s(), k(Z, { to: "body" }, [
    c("div", vd, [
      b(Mt, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack"
      }, {
        default: w(() => [
          (s(!0), a(L, null, V(i.items, (d) => (s(), a("div", {
            key: d.id,
            class: "pointer-events-auto flex w-full justify-center"
          }, [
            c("div", C({
              class: i.toastClasses(d)
            }, { ref_for: !0 }, i.toastA11y(d)), [
              c("span", {
                class: v(["ui-alert-icon", i.iconToneClass(d.variant)]),
                "aria-hidden": "true"
              }, [
                b(o, {
                  name: i.iconFor(d.variant),
                  size: "sm"
                }, null, 8, ["name"])
              ], 2),
              c("div", _d, [
                d.title ? (s(), a("p", kd, p(d.title), 1)) : f("", !0),
                d.description ? (s(), a("p", wd, p(d.description), 1)) : f("", !0)
              ]),
              b(u, {
                "native-type": "button",
                variant: "ghost",
                color: "secondary",
                cubed: "",
                size: "sm",
                class: "ui-toast-dismiss shrink-0",
                "prefix-icon": "xmark",
                "aria-label": i.dismissLabel,
                onClick: (h) => i.queueDismissToast(d.id)
              }, null, 8, ["aria-label", "onClick"])
            ], 16)
          ]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const xd = /* @__PURE__ */ _(yd, [["render", Sd]]), Cd = ["square", "video", "auto"], Td = ["fill", "sm", "md", "lg"], vt = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, Id = {
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
      validator: (e) => Cd.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => Td.includes(e)
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
        vt[this.size] || vt.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [r, n] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = n);
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
}, Ld = ["src", "alt"], Ad = ["aria-hidden"], zd = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, $d = {
  key: 3,
  class: "ui-photo__overflow"
}, Dd = ["aria-label"], Vd = ["aria-label"], Pd = { class: "ui-photo-preview__panel" }, Md = ["src", "alt"], Od = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Rd(e, t, r, n, l, i) {
  const o = y("ui-icon"), u = y("ui-button");
  return s(), a(L, null, [
    (s(), k(U(i.rootTag), C({
      type: r.interactive ? "button" : void 0,
      class: i.rootClass
    }, i.rootBind, { onClick: i.onClick }), {
      default: w(() => [
        r.src && !l.imageFailed ? (s(), a("img", {
          key: 0,
          src: r.src,
          alt: i.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (d) => l.imageFailed = !0)
        }, null, 40, Ld)) : (s(), a("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          b(o, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, Ad)),
        r.favorite ? (s(), a("span", zd, [
          b(o, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : f("", !0),
        r.overflowLabel ? (s(), a("span", $d, p(r.overflowLabel), 1)) : f("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (s(), k(Z, { to: "body" }, [
      b(ne, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: w(() => [
          l.previewOpen ? (s(), a("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[2] || (t[2] = (...d) => i.onPreviewKeydown && i.onPreviewKeydown(...d))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[1] || (t[1] = (...d) => i.closePreview && i.closePreview(...d))
            }, null, 8, Vd),
            c("div", Pd, [
              b(u, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (s(), k(u, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: A(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.activeSrc ? (s(), a("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Md)) : f("", !0),
              i.showNext ? (s(), k(u, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: A(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.counterLabel ? (s(), a("p", Od, p(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, Dd)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Bd = /* @__PURE__ */ _(Id, [["render", Rd]]), Ed = ["square", "video", "auto"], Fd = {
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
      validator: (e) => Ed.includes(e)
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
}, Nd = ["data-count"], Yd = ["aria-label"], Hd = ["aria-label"], Wd = { class: "ui-photo-preview__panel" }, jd = ["src", "alt"], Kd = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Gd(e, t, r, n, l, i) {
  const o = y("ui-photo"), u = y("ui-button");
  return s(), a(L, null, [
    c("div", {
      class: v(["ui-photos", i.layoutClass]),
      "data-count": i.displayCount
    }, [
      (s(!0), a(L, null, V(i.visibleItems, (d, h) => (s(), k(o, {
        key: d.key || `${d.src}-${h}`,
        src: d.src,
        alt: d.alt || "",
        favorite: !!d.favorite,
        aspect: r.aspect,
        preview: r.preview,
        "gallery-index": h,
        "overflow-label": h === i.visibleItems.length - 1 && i.overflowCount > 0 ? i.overflowLabel : "",
        "aria-label": d.alt || void 0,
        onOpenPreview: i.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, Nd),
    (s(), k(Z, { to: "body" }, [
      b(ne, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: w(() => [
          l.previewOpen ? (s(), a("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[1] || (t[1] = (...d) => i.onPreviewKeydown && i.onPreviewKeydown(...d))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[0] || (t[0] = (...d) => i.closePreview && i.closePreview(...d))
            }, null, 8, Hd),
            c("div", Wd, [
              b(u, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (s(), k(u, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: A(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.activeSrc ? (s(), a("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, jd)) : f("", !0),
              i.showNext ? (s(), k(u, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: A(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : f("", !0),
              i.counterLabel ? (s(), a("p", Kd, p(i.counterLabel), 1)) : f("", !0)
            ])
          ], 40, Yd)) : f("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Ud = /* @__PURE__ */ _(Fd, [["render", Gd]]), qd = {
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
}, $t = {
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
}, Zd = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], Qd = "ui-sans-serif, system-ui, sans-serif", _t = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, kt = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
};
function Xd(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function Jd(e) {
  const t = String(e).trim();
  return !t || t.includes(",") ? t : `${t}, ${Qd}`;
}
function ec(e) {
  const t = e.trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((r) => parseInt(t[r] + t[r], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function tc(e, t, r) {
  const [n, l, i] = [e, t, r].map((o) => {
    const u = o / 255;
    return u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * n + 0.7152 * l + 0.0722 * i;
}
function ic(e, t = "#ffffff", r = "#0a0a0b") {
  const n = ec(e);
  return n && tc(...n) > 0.4 ? r : t;
}
function rc(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([A-Z])/g, "-$1").replace(/_/g, "-").toLowerCase()}`;
}
function nc(e) {
  if (e == null || e === "")
    return null;
  const t = Number(e);
  if (Number.isNaN(t))
    return null;
  const r = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, r))}%`;
}
function sc(e) {
  if (e == null || e === "")
    return null;
  if (typeof e == "number")
    return `${e}px`;
  const t = String(e).trim();
  return _t[t] != null ? _t[t] : /^\d+$/.test(t) ? `${t}px` : t;
}
function lc(e) {
  return e == null || e === "" ? null : kt[e] ? kt[e] : String(e);
}
function pe(e, t, r) {
  if (!r || typeof r != "object")
    return;
  const n = nc(r.opacity ?? r.bgOpacity);
  n && (e[`--ui-${t}-opacity`] = n);
  const l = sc(r.backdropBlur ?? r.backdropFilter);
  l && (e[`--ui-${t}-backdrop-blur`] = l);
  const i = lc(r.mixFrom);
  i && (e[`--ui-${t}-mix-from`] = i);
}
function wt(e, t, r) {
  const n = e[t];
  if (n != null && n !== "")
    return String(n);
  const l = e[r];
  if (l != null && l !== "")
    return String(l);
}
function ac(e = {}, t = {}) {
  const r = Xd(e.root ?? t.root);
  if (!r || typeof e != "object")
    return {};
  e.mode === "dark" ? r.classList.add("dark") : e.mode === "light" && r.classList.remove("dark");
  const n = {};
  if (e.fontFamily && (n["--font-sans"] = Jd(e.fontFamily)), e.baseColor && typeof e.baseColor == "object")
    for (const u of Zd) {
      const d = e.baseColor[u];
      d != null && d !== "" && (n[`--base-${u}`] = String(d));
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
  for (const [u, d] of l) {
    const h = e[u];
    h != null && h !== "" && (n[d] = String(h));
  }
  const i = wt(e, "primaryColor", "primary");
  i && (n["--primary"] = i, e.primaryForeground || (n["--primary-foreground"] = ic(i)), e.ring || (n["--ring"] = `color-mix(in oklab, ${i} 55%, transparent)`));
  const o = wt(e, "secondaryColor", "secondary");
  if (o && (n["--secondary"] = o), pe(n, "surface", e.surfaceStyle), pe(n, "control", e.controlStyle), pe(n, "input", e.inputStyle), e.colors && typeof e.colors == "object")
    for (const [u, d] of Object.entries(e.colors))
      d != null && d !== "" && (n[rc(u)] = String(d));
  for (const [u, d] of Object.entries(n))
    r.style.setProperty(u, d);
  return { ...n };
}
function fc(e, t) {
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
function ae(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function mc() {
  return {
    push: ee,
    dismiss: ke,
    clear: bd,
    info: (e) => ee({ ...ae(e), variant: "info" }),
    success: (e) => ee({ ...ae(e), variant: "success" }),
    warning: (e) => ee({ ...ae(e), variant: "warning" }),
    error: (e) => ee({ ...ae(e), variant: "error" })
  };
}
function pc(e = !1) {
  return be({
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
function gc() {
  return {
    confirm: Fr
  };
}
const ge = {
  en: qd,
  tr: $t
};
function bc(e = "tr") {
  return ge[e] ?? ge.tr;
}
const yc = $t, oc = [
  ["ui-action-group", Nt],
  ["ui-alert", Zt],
  ["ui-avatar", ni],
  ["ui-badge", Tt],
  ["ui-button", Fi],
  ["ui-card", nr],
  ["ui-checkbox", Pr],
  ["ui-checkbox-group", Er],
  ["ui-color-picker", _r],
  ["ui-currency-input", Tr],
  ["ui-confirm-dialog", Hr],
  ["ui-date-picker", Qr],
  ["ui-date-range-picker", fn],
  ["ui-dialog", Vn],
  ["ui-divider", ue],
  ["ui-dropdown", Rn],
  ["ui-empty", Gn],
  ["ui-field", is],
  ["ui-file", ms],
  ["ui-form-row", Cs],
  ["ui-icon", $s],
  ["ui-icon-picker", Ks],
  ["ui-input", il],
  ["ui-password", ul],
  ["ui-phone", pl],
  ["ui-pin", kl],
  ["ui-list", Cl],
  ["ui-list-item", Vl],
  ["ui-popover", Hl],
  ["ui-progress", ea],
  ["ui-radio", aa],
  ["ui-radio-group", fa],
  ["ui-select", Pa],
  ["ui-menu", Na],
  ["ui-menu-group", Ka],
  ["ui-menu-item", qa],
  ["ui-menu-nav", Ja],
  ["ui-segment", uo],
  ["ui-segment-group", go],
  ["ui-skeleton", Ho],
  ["ui-slider", eu],
  ["ui-stepper", Mo],
  ["ui-switch", nu],
  ["ui-table", ou],
  ["ui-table-body", hu],
  ["ui-table-cell", yu],
  ["ui-table-head", Su],
  ["ui-table-header", Tu],
  ["ui-table-pagination", Vu],
  ["ui-table-row", Ru],
  ["ui-tag", zt],
  ["ui-tab-list", Nu],
  ["ui-tab-panel", ju],
  ["ui-tabs", qu],
  ["ui-tab-trigger", td],
  ["ui-time-picker", gd],
  ["ui-tooltip", ve],
  ["ui-toast", xd],
  ["ui-photo", Bd],
  ["ui-photos", Ud]
];
function uc(e, t = {}) {
  var o, u;
  const { i18n: r, locale: n, locales: l, theme: i } = t;
  if (i && ac(i), (o = r == null ? void 0 : r.global) != null && o.mergeLocaleMessage) {
    const d = l ?? (n != null ? [n] : [
      typeof r.global.locale == "string" ? r.global.locale : ((u = r.global.locale) == null ? void 0 : u.value) ?? "tr"
    ]);
    for (const h of d) {
      const m = ge[h];
      m && r.global.mergeLocaleMessage(h, m);
    }
  }
  for (const [d, h] of oc)
    e.component(d, h);
}
const vc = {
  install: uc
};
export {
  Nt as ActionGroup,
  Zt as Alert,
  ni as Avatar,
  Tt as Badge,
  Fi as Button,
  nr as Card,
  Pr as Checkbox,
  Er as CheckboxGroup,
  _r as ColorPicker,
  Hr as ConfirmDialog,
  Tr as CurrencyInput,
  Qr as DatePicker,
  fn as DateRangePicker,
  Vn as Dialog,
  ue as Divider,
  Rn as Dropdown,
  Gn as Empty,
  is as Field,
  ms as File,
  Cs as FormRow,
  $s as Icon,
  Ks as IconPicker,
  il as Input,
  Cl as List,
  Vl as ListItem,
  Na as Menu,
  Ka as MenuGroup,
  qa as MenuItem,
  Ja as MenuNav,
  ul as Password,
  pl as Phone,
  Bd as Photo,
  Ud as Photos,
  kl as Pin,
  Hl as Popover,
  ea as Progress,
  aa as Radio,
  fa as RadioGroup,
  uo as Segment,
  go as SegmentGroup,
  Pa as Select,
  Ho as Skeleton,
  eu as Slider,
  Mo as Stepper,
  nu as Switch,
  Nu as TabList,
  ju as TabPanel,
  td as TabTrigger,
  ou as Table,
  hu as TableBody,
  yu as TableCell,
  Su as TableHead,
  Tu as TableHeader,
  Vu as TablePagination,
  Ru as TableRow,
  qu as Tabs,
  zt as Tag,
  gd as TimePicker,
  xd as Toast,
  ve as Tooltip,
  ac as applyUiTheme,
  bd as clearToasts,
  vc as default,
  ke as dismissToast,
  hc as formatCurrencyAmount,
  It as getCurrencySymbol,
  bc as getUiMessages,
  fc as mergeUiTheme,
  ee as pushToast,
  Fr as requestConfirm,
  _e as resolveCurrencyCode,
  kr as sanitizeMoneyInput,
  yc as uiMessagesTr,
  gc as useConfirm,
  pc as useDialog,
  mc as useToast
};
//# sourceMappingURL=index.js.map
