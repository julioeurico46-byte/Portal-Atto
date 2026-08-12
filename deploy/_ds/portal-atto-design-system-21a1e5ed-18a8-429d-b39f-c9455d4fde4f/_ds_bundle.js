/* @ds-bundle: {"format":4,"namespace":"PortalAttoDesignSystem_21a1e5","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"EmptyState","sourcePath":"components/data/EmptyState.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"ef151b02db9e","components/core/Badge.jsx":"3cc3946402dd","components/core/Button.jsx":"54033f69081c","components/core/Card.jsx":"4aefca8892ec","components/core/Icon.jsx":"e596afba739c","components/core/IconButton.jsx":"623e65008d78","components/core/Tag.jsx":"610306c34c9d","components/data/DataTable.jsx":"4a60095991d8","components/data/EmptyState.jsx":"4d8fb3a5fcc6","components/feedback/Alert.jsx":"a7a25be1257a","components/feedback/Dialog.jsx":"2731cd2c6ec5","components/feedback/Toast.jsx":"446d2ee336e1","components/feedback/Tooltip.jsx":"c4ac7e319985","components/forms/Checkbox.jsx":"02ec5b103c51","components/forms/Input.jsx":"4fbc5e2e6091","components/forms/Radio.jsx":"257951f711f6","components/forms/Select.jsx":"fb1dae68850d","components/forms/Switch.jsx":"244c650ee168","components/navigation/Breadcrumbs.jsx":"dcdeca85f2cb","components/navigation/Tabs.jsx":"799e207ff462","ui_kits/portal/Dashboard.jsx":"34d32ed5f9f0","ui_kits/portal/Login.jsx":"7ebe8f6825b5","ui_kits/portal/RequestDetail.jsx":"8192bc1449d0","ui_kits/portal/Requests.jsx":"f785893e8c3a","ui_kits/portal/Settings.jsx":"39f93b597923","ui_kits/portal/Shell.jsx":"8d48266c521c","ui_kits/portal/data.js":"85e6ebda9343","ui_kits/site/Sections.jsx":"d732c192df69","ui_kits/site/Site.jsx":"fb04c8f0ea54"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PortalAttoDesignSystem_21a1e5 = window.PortalAttoDesignSystem_21a1e5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 72
};
function initials(name) {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function Avatar({
  name = "",
  src,
  size = "md",
  shape = "rounded",
  tone = "neutral",
  status,
  style,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const tones = {
    neutral: {
      background: "var(--ink-100)",
      color: "var(--ink-700)"
    },
    brand: {
      background: "var(--atto-yellow)",
      color: "var(--ink-1000)"
    },
    solid: {
      background: "var(--ink-950)",
      color: "var(--white)"
    }
  };
  const t = tones[tone] || tones.neutral;
  const statusColor = {
    online: "var(--green-500)",
    busy: "var(--red-500)",
    away: "var(--orange-500)",
    offline: "var(--ink-300)"
  }[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "0 0 auto",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    title: name,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: px + "px",
      height: px + "px",
      borderRadius: shape === "circle" ? "50%" : Math.max(6, Math.round(px * 0.28)) + "px",
      overflow: "hidden",
      font: "600 " + Math.max(10, Math.round(px * 0.36)) + "px/1 var(--font-sans)",
      letterSpacing: "0.01em",
      ...t
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials(name)), statusColor ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "-1px",
      bottom: "-1px",
      width: Math.max(8, px * 0.26) + "px",
      height: Math.max(8, px * 0.26) + "px",
      borderRadius: "50%",
      background: statusColor,
      border: "2px solid var(--surface-card)"
    }
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: "var(--ink-50)",
    color: "var(--ink-700)",
    border: "var(--ink-100)",
    dot: "var(--ink-400)"
  },
  brand: {
    background: "var(--atto-yellow-wash)",
    color: "var(--ink-900)",
    border: "var(--atto-yellow-tint)",
    dot: "var(--atto-yellow)"
  },
  success: {
    background: "var(--green-50)",
    color: "var(--green-600)",
    border: "var(--green-100)",
    dot: "var(--green-500)"
  },
  warning: {
    background: "var(--orange-50)",
    color: "var(--orange-600)",
    border: "var(--orange-100)",
    dot: "var(--orange-500)"
  },
  danger: {
    background: "var(--red-50)",
    color: "var(--red-600)",
    border: "var(--red-100)",
    dot: "var(--red-500)"
  },
  info: {
    background: "var(--blue-50)",
    color: "var(--blue-600)",
    border: "var(--blue-100)",
    dot: "var(--blue-500)"
  },
  solid: {
    background: "var(--ink-950)",
    color: "var(--white)",
    border: "var(--ink-950)",
    dot: "var(--atto-yellow)"
  }
};
const SIZES = {
  sm: {
    font: "500 11px/1 var(--font-sans)",
    padding: "0 7px",
    height: "20px"
  },
  md: {
    font: "500 12px/1 var(--font-sans)",
    padding: "0 9px",
    height: "24px"
  }
};
function Badge({
  children,
  tone = "neutral",
  size = "md",
  dot = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      height: s.height,
      padding: s.padding,
      font: s.font,
      letterSpacing: "0.005em",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      background: t.background,
      color: t.color,
      border: "1px solid " + t.border,
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: t.dot,
      flex: "0 0 auto"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: "32px",
    padding: "0 12px",
    font: "600 13px/1 var(--font-sans)",
    radius: "8px",
    icon: 15,
    gap: "6px"
  },
  md: {
    height: "40px",
    padding: "0 16px",
    font: "600 15px/1 var(--font-sans)",
    radius: "10px",
    icon: 17,
    gap: "8px"
  },
  lg: {
    height: "48px",
    padding: "0 22px",
    font: "600 16px/1 var(--font-sans)",
    radius: "12px",
    icon: 19,
    gap: "10px"
  }
};
const VARIANTS = {
  primary: {
    base: {
      background: "var(--atto-yellow)",
      color: "var(--text-on-brand)",
      border: "1px solid transparent"
    },
    hover: {
      background: "var(--atto-yellow-press)"
    },
    active: {
      background: "var(--atto-yellow-deep)"
    }
  },
  secondary: {
    base: {
      background: "var(--surface-card)",
      color: "var(--ink-950)",
      border: "1px solid var(--border-default)"
    },
    hover: {
      background: "var(--ink-50)",
      border: "1px solid var(--border-strong)"
    },
    active: {
      background: "var(--ink-100)"
    }
  },
  ghost: {
    base: {
      background: "transparent",
      color: "var(--ink-700)",
      border: "1px solid transparent"
    },
    hover: {
      background: "var(--surface-hover)",
      color: "var(--ink-950)"
    },
    active: {
      background: "var(--surface-active)"
    }
  },
  inverse: {
    base: {
      background: "var(--ink-950)",
      color: "var(--white)",
      border: "1px solid var(--ink-950)"
    },
    hover: {
      background: "var(--ink-800)",
      border: "1px solid var(--ink-800)"
    },
    active: {
      background: "var(--ink-700)"
    }
  },
  danger: {
    base: {
      background: "var(--red-500)",
      color: "var(--white)",
      border: "1px solid transparent"
    },
    hover: {
      background: "var(--red-600)"
    },
    active: {
      background: "var(--red-600)"
    }
  }
};
function iconMask(name, size) {
  return {
    width: size + "px",
    height: size + "px",
    flex: "0 0 auto",
    background: "currentColor",
    WebkitMask: "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/" + name + ".svg) center/contain no-repeat",
    mask: "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/" + name + ".svg) center/contain no-repeat"
  };
}
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  loading = false,
  href,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [st, setSt] = React.useState({
    hover: false,
    active: false,
    focus: false
  });
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const off = disabled || loading;
  const styles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    font: s.font,
    letterSpacing: "-0.005em",
    borderRadius: s.radius,
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: off ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : "auto",
    transition: "var(--transition-control), transform var(--duration-fast) var(--ease-standard)",
    transform: st.active && !off ? "scale(var(--press-scale))" : "none",
    opacity: off ? 0.45 : 1,
    boxShadow: st.focus ? "var(--focus-ring)" : "none",
    ...v.base,
    ...(st.hover && !off ? v.hover : null),
    ...(st.active && !off ? v.active : null),
    ...style
  };
  const handlers = {
    onMouseEnter: () => setSt(p => ({
      ...p,
      hover: true
    })),
    onMouseLeave: () => setSt(p => ({
      ...p,
      hover: false,
      active: false
    })),
    onMouseDown: () => setSt(p => ({
      ...p,
      active: true
    })),
    onMouseUp: () => setSt(p => ({
      ...p,
      active: false
    })),
    onFocus: e => setSt(p => ({
      ...p,
      focus: e.target.matches(":focus-visible")
    })),
    onBlur: () => setSt(p => ({
      ...p,
      focus: false
    }))
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, loading ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...iconMask("loader-circle", s.icon),
      animation: "atto-spin 900ms linear infinite"
    }
  }) : null, !loading && iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: iconMask(iconLeft, s.icon)
  }) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: iconMask(iconRight, s.icon)
  }) : null, /*#__PURE__*/React.createElement("style", null, "@keyframes atto-spin{to{transform:rotate(360deg)}}"));
  if (href && !off) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: styles,
      onClick: onClick
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: off,
    style: styles,
    onClick: off ? undefined : onClick
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  default: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "var(--shadow-xs)"
  },
  flat: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "none"
  },
  sunken: {
    background: "var(--surface-sunken)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "none"
  },
  raised: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "var(--shadow-md)"
  },
  inverse: {
    background: "var(--ink-950)",
    border: "1px solid var(--ink-800)",
    boxShadow: "none",
    color: "var(--white)"
  },
  brand: {
    background: "var(--atto-yellow)",
    border: "1px solid var(--atto-yellow)",
    boxShadow: "none",
    color: "var(--ink-1000)"
  }
};
function Card({
  children,
  title,
  subtitle,
  actions,
  footer,
  variant = "default",
  padding = "20px",
  quadrant = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.default;
  return /*#__PURE__*/React.createElement("section", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: variant === "inverse" ? "atto-inverse" : undefined,
    style: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "var(--radius-card)",
      borderTopRightRadius: quadrant ? "var(--radius-2xl)" : "var(--radius-card)",
      overflow: "hidden",
      transition: "var(--transition-surface)",
      cursor: onClick ? "pointer" : "default",
      ...v,
      boxShadow: onClick && hover ? "var(--shadow-md)" : v.boxShadow,
      transform: onClick && hover ? "translateY(-1px)" : "none",
      ...style
    }
  }, rest), title || actions ? /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "16px",
      padding: padding,
      paddingBottom: subtitle ? "12px" : "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)",
      letterSpacing: "-0.01em",
      color: "inherit"
    }
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: variant === "inverse" ? "rgba(255,255,255,.6)" : "var(--text-secondary)"
    }
  }, subtitle) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flex: "0 0 auto"
    }
  }, actions) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: title || actions ? "0 " + padding + " " + padding : padding,
      flex: 1,
      minWidth: 0
    }
  }, children), footer ? /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "14px " + padding,
      borderTop: "1px solid " + (variant === "inverse" ? "rgba(255,255,255,.12)" : "var(--border-subtle)"),
      background: variant === "default" || variant === "flat" ? "var(--ink-25)" : "transparent"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lucide glyph rendered as a CSS mask so it inherits currentColor. */
function Icon({
  name = "circle",
  size = 18,
  color = "currentColor",
  strokeAccent = false,
  style,
  ...rest
}) {
  const url = "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/" + name + ".svg) center/contain no-repeat";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: size + "px",
      height: size + "px",
      flex: "0 0 auto",
      background: strokeAccent ? "var(--atto-yellow)" : color,
      WebkitMask: url,
      mask: url,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    box: "32px",
    icon: 16,
    radius: "8px"
  },
  md: {
    box: "40px",
    icon: 18,
    radius: "10px"
  },
  lg: {
    box: "48px",
    icon: 20,
    radius: "12px"
  }
};
const VARIANTS = {
  primary: {
    base: {
      background: "var(--atto-yellow)",
      color: "var(--ink-1000)",
      border: "1px solid transparent"
    },
    hover: {
      background: "var(--atto-yellow-press)"
    },
    active: {
      background: "var(--atto-yellow-deep)"
    }
  },
  secondary: {
    base: {
      background: "var(--surface-card)",
      color: "var(--ink-800)",
      border: "1px solid var(--border-default)"
    },
    hover: {
      background: "var(--ink-50)",
      border: "1px solid var(--border-strong)"
    },
    active: {
      background: "var(--ink-100)"
    }
  },
  ghost: {
    base: {
      background: "transparent",
      color: "var(--ink-600)",
      border: "1px solid transparent"
    },
    hover: {
      background: "var(--surface-hover)",
      color: "var(--ink-950)"
    },
    active: {
      background: "var(--surface-active)"
    }
  },
  inverse: {
    base: {
      background: "var(--ink-950)",
      color: "var(--white)",
      border: "1px solid var(--ink-950)"
    },
    hover: {
      background: "var(--ink-800)"
    },
    active: {
      background: "var(--ink-700)"
    }
  }
};
function IconButton({
  icon = "ellipsis",
  label,
  variant = "ghost",
  size = "md",
  shape = "rounded",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [st, setSt] = React.useState({
    hover: false,
    active: false,
    focus: false
  });
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const url = "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/" + icon + ".svg) center/contain no-repeat";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setSt(p => ({
      ...p,
      hover: true
    })),
    onMouseLeave: () => setSt(p => ({
      ...p,
      hover: false,
      active: false
    })),
    onMouseDown: () => setSt(p => ({
      ...p,
      active: true
    })),
    onMouseUp: () => setSt(p => ({
      ...p,
      active: false
    })),
    onFocus: e => setSt(p => ({
      ...p,
      focus: e.target.matches(":focus-visible")
    })),
    onBlur: () => setSt(p => ({
      ...p,
      focus: false
    })),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      padding: 0,
      borderRadius: shape === "circle" ? "var(--radius-pill)" : s.radius,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "var(--transition-control), transform var(--duration-fast) var(--ease-standard)",
      transform: st.active && !disabled ? "scale(var(--press-scale))" : "none",
      boxShadow: st.focus ? "var(--focus-ring)" : "none",
      ...v.base,
      ...(st.hover && !disabled ? v.hover : null),
      ...(st.active && !disabled ? v.active : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.icon + "px",
      height: s.icon + "px",
      background: "currentColor",
      WebkitMask: url,
      mask: url
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  icon,
  selected = false,
  removable = false,
  onRemove,
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick) || removable;
  const iconUrl = n => "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/" + n + ".svg) center/contain no-repeat";
  const bg = selected ? "var(--atto-yellow)" : hover && interactive ? "var(--ink-100)" : "var(--ink-50)";
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      height: "28px",
      padding: removable ? "0 6px 0 10px" : "0 10px",
      font: "500 13px/1 var(--font-sans)",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : interactive ? "pointer" : "default",
      background: bg,
      color: selected ? "var(--ink-1000)" : "var(--ink-700)",
      border: "1px solid " + (selected ? "var(--atto-yellow)" : "var(--border-subtle)"),
      opacity: disabled ? 0.5 : 1,
      transition: "var(--transition-control)",
      userSelect: "none",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "14px",
      height: "14px",
      background: "currentColor",
      WebkitMask: iconUrl(icon),
      mask: iconUrl(icon)
    }
  }) : null, children, removable ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remover",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove(e);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "18px",
      height: "18px",
      padding: 0,
      borderRadius: "50%",
      border: "none",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "12px",
      height: "12px",
      background: "currentColor",
      WebkitMask: iconUrl("x"),
      mask: iconUrl("x")
    }
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  dense = false,
  selectable = false,
  selected = [],
  onSelect,
  onRowClick,
  empty,
  footer,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  const padY = dense ? "9px" : "13px";
  const check = "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/check.svg) center/contain no-repeat";
  const allOn = rows.length > 0 && selected.length === rows.length;
  const box = (on, onToggle) => /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onToggle();
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "17px",
      height: "17px",
      borderRadius: "var(--radius-xs)",
      cursor: "pointer",
      background: on ? "var(--atto-yellow)" : "var(--surface-card)",
      border: "1px solid " + (on ? "var(--atto-yellow)" : "var(--border-strong)")
    }
  }, on ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "12px",
      height: "12px",
      background: "var(--ink-1000)",
      WebkitMask: check,
      mask: check
    }
  }) : null);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      overflowX: "auto",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      font: "var(--type-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable ? /*#__PURE__*/React.createElement("th", {
    style: {
      width: "40px",
      padding: "10px 0 10px 16px",
      textAlign: "left",
      borderBottom: "1px solid var(--border-default)",
      background: "var(--ink-25)"
    }
  }, box(allOn, () => onSelect && onSelect(allOn ? [] : rows.map((r, i) => r.id || i)))) : null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      padding: "10px 16px",
      textAlign: c.align || "left",
      whiteSpace: "nowrap",
      width: c.width,
      font: "600 11px/1.2 var(--font-sans)",
      letterSpacing: "0.09em",
      textTransform: "uppercase",
      color: "var(--ink-500)",
      borderBottom: "1px solid var(--border-default)",
      background: "var(--ink-25)"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + (selectable ? 1 : 0),
    style: {
      padding: "40px 16px"
    }
  }, empty)) : rows.map((row, i) => {
    const id = row.id || i;
    const on = selected.indexOf(id) !== -1;
    return /*#__PURE__*/React.createElement("tr", {
      key: id,
      onMouseEnter: () => setHover(id),
      onMouseLeave: () => setHover(null),
      onClick: onRowClick ? () => onRowClick(row) : undefined,
      style: {
        background: on ? "var(--atto-yellow-wash)" : hover === id ? "var(--ink-25)" : "transparent",
        cursor: onRowClick ? "pointer" : "default",
        transition: "background-color var(--duration-fast) var(--ease-standard)"
      }
    }, selectable ? /*#__PURE__*/React.createElement("td", {
      style: {
        padding: padY + " 0 " + padY + " 16px",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, box(on, () => onSelect && onSelect(on ? selected.filter(s => s !== id) : selected.concat([id])))) : null, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        padding: padY + " 16px",
        textAlign: c.align || "left",
        borderBottom: "1px solid var(--border-subtle)",
        color: "var(--text-primary)",
        fontVariantNumeric: c.numeric ? "tabular-nums" : "normal"
      }
    }, c.render ? c.render(row) : row[c.key])));
  }))), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      padding: "12px 16px",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  icon = "inbox",
  title,
  description,
  action,
  compact = false,
  style,
  ...rest
}) {
  const url = "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/" + icon + ".svg) center/contain no-repeat";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: compact ? "8px" : "12px",
      padding: compact ? "24px 16px" : "48px 24px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: compact ? "40px" : "56px",
      height: compact ? "40px" : "56px",
      borderRadius: "var(--radius-lg)",
      borderTopRightRadius: "var(--radius-2xl)",
      background: "var(--atto-yellow-wash)",
      border: "1px solid var(--atto-yellow-tint)",
      marginBottom: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: compact ? "20px" : "26px",
      height: compact ? "20px" : "26px",
      background: "var(--ink-800)",
      WebkitMask: url,
      mask: url
    }
  })), title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      font: compact ? "var(--type-h4)" : "var(--type-h3)",
      letterSpacing: "-0.01em"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      maxWidth: "42ch"
    }
  }, description) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "8px"
    }
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: "var(--blue-50)",
    border: "var(--blue-100)",
    color: "var(--blue-600)",
    icon: "info"
  },
  success: {
    bg: "var(--green-50)",
    border: "var(--green-100)",
    color: "var(--green-600)",
    icon: "circle-check"
  },
  warning: {
    bg: "var(--orange-50)",
    border: "var(--orange-100)",
    color: "var(--orange-600)",
    icon: "triangle-alert"
  },
  danger: {
    bg: "var(--red-50)",
    border: "var(--red-100)",
    color: "var(--red-600)",
    icon: "circle-x"
  },
  brand: {
    bg: "var(--atto-yellow-wash)",
    border: "var(--atto-yellow-tint)",
    color: "var(--ink-900)",
    icon: "sparkles"
  }
};
function Alert({
  title,
  children,
  tone = "info",
  action,
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  const url = n => "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/" + n + ".svg) center/contain no-repeat";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "note",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      padding: "14px 16px",
      background: t.bg,
      border: "1px solid " + t.border,
      borderRadius: "var(--radius-md)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "18px",
      height: "18px",
      flex: "0 0 auto",
      marginTop: "1px",
      background: t.color,
      WebkitMask: url(t.icon),
      mask: url(t.icon)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 14px/1.35 var(--font-sans)",
      color: "var(--ink-900)"
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1.5 var(--font-sans)",
      color: "var(--ink-700)"
    }
  }, children) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "10px"
    }
  }, action) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fechar",
    onClick: onClose,
    style: {
      width: "22px",
      height: "22px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "14px",
      height: "14px",
      background: "var(--ink-400)",
      WebkitMask: url("x"),
      mask: url("x")
    }
  })) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WIDTHS = {
  sm: "420px",
  md: "560px",
  lg: "760px"
};
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  size = "md",
  tone = "default",
  onClose,
  closeLabel = "Fechar",
  style,
  ...rest
}) {
  if (!open) return null;
  const x = "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/x.svg) center/contain no-repeat";
  const toneIcon = {
    danger: "triangle-alert",
    success: "circle-check",
    info: "info"
  }[tone];
  const toneColor = {
    danger: "var(--red-500)",
    success: "var(--green-500)",
    info: "var(--blue-500)"
  }[tone];
  const iconUrl = toneIcon ? "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/" + toneIcon + ".svg) center/contain no-repeat" : null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: "var(--z-modal)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      background: "var(--overlay-scrim)",
      backdropFilter: "blur(2px)"
    },
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      maxWidth: WIDTHS[size] || WIDTHS.md,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-modal)",
      boxShadow: "var(--shadow-xl)",
      overflow: "hidden",
      animation: "atto-dialog-in var(--duration-slow) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "14px",
      padding: "24px 24px 0"
    }
  }, iconUrl ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "36px",
      height: "36px",
      flex: "0 0 auto",
      borderRadius: "var(--radius-md)",
      background: tone === "danger" ? "var(--red-50)" : tone === "success" ? "var(--green-50)" : "var(--blue-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "19px",
      height: "19px",
      background: toneColor,
      WebkitMask: iconUrl,
      mask: iconUrl
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h3)",
      letterSpacing: "-0.015em"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": closeLabel,
    onClick: onClose,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "32px",
      height: "32px",
      flex: "0 0 auto",
      border: "none",
      borderRadius: "var(--radius-sm)",
      background: "transparent",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "17px",
      height: "17px",
      background: "var(--ink-500)",
      WebkitMask: x,
      mask: x
    }
  })) : null), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 24px 24px",
      font: "var(--type-body)",
      color: "var(--text-secondary)"
    }
  }, children) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: "24px"
    }
  }), footer ? /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
      padding: "16px 24px",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--ink-25)"
    }
  }, footer) : null, /*#__PURE__*/React.createElement("style", null, "@keyframes atto-dialog-in{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}")));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  default: {
    icon: "info",
    color: "var(--atto-yellow)"
  },
  success: {
    icon: "circle-check",
    color: "var(--green-500)"
  },
  warning: {
    icon: "triangle-alert",
    color: "var(--orange-500)"
  },
  danger: {
    icon: "circle-x",
    color: "var(--red-500)"
  },
  info: {
    icon: "info",
    color: "var(--blue-500)"
  }
};
function Toast({
  title,
  message,
  tone = "default",
  action,
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.default;
  const url = n => "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/" + n + ".svg) center/contain no-repeat";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: "atto-inverse",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      width: "360px",
      padding: "14px 16px",
      background: "var(--ink-950)",
      color: "var(--white)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      animation: "atto-toast-in var(--duration-slow) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "18px",
      height: "18px",
      flex: "0 0 auto",
      marginTop: "1px",
      background: t.color,
      WebkitMask: url(t.icon),
      mask: url(t.icon)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 14px/1.35 var(--font-sans)"
    }
  }, title) : null, message ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/1.45 var(--font-sans)",
      color: "rgba(255,255,255,.72)"
    }
  }, message) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "8px"
    }
  }, action) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fechar",
    onClick: onClose,
    style: {
      width: "22px",
      height: "22px",
      flex: "0 0 auto",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "14px",
      height: "14px",
      background: "rgba(255,255,255,.55)",
      WebkitMask: url("x"),
      mask: url("x")
    }
  })) : null, /*#__PURE__*/React.createElement("style", null, "@keyframes atto-toast-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}"));
}
function ToastStack({
  children,
  position = "bottom-right",
  style
}) {
  const pos = {
    "bottom-right": {
      bottom: "24px",
      right: "24px",
      alignItems: "flex-end"
    },
    "bottom-left": {
      bottom: "24px",
      left: "24px",
      alignItems: "flex-start"
    },
    "top-right": {
      top: "24px",
      right: "24px",
      alignItems: "flex-end"
    }
  }[position];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      zIndex: "var(--z-toast)",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      ...pos,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  children,
  content,
  placement = "top",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, open && content ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: "var(--z-tooltip)",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      padding: "6px 9px",
      borderRadius: "var(--radius-sm)",
      background: "var(--ink-950)",
      color: "var(--white)",
      font: "400 12px/1.3 var(--font-sans)",
      boxShadow: "var(--shadow-md)",
      animation: "atto-tip-in var(--duration-fast) var(--ease-out)",
      ...pos
    }
  }, content) : null, /*#__PURE__*/React.createElement("style", null, "@keyframes atto-tip-in{from{opacity:0}to{opacity:1}}"));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  name,
  value,
  onChange,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [focus, setFocus] = React.useState(false);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const isOn = checked !== undefined ? checked : undefined;
  const [internal, setInternal] = React.useState(Boolean(defaultChecked));
  const on = isOn !== undefined ? isOn : internal;
  const mark = "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/" + (indeterminate ? "minus" : "check") + ".svg) center/contain no-repeat";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: description ? "flex-start" : "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    name: name,
    value: value,
    checked: isOn,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: e => {
      if (isOn === undefined) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "18px",
      height: "18px",
      flex: "0 0 auto",
      marginTop: description ? "1px" : 0,
      borderRadius: "var(--radius-xs)",
      background: on || indeterminate ? "var(--atto-yellow)" : "var(--surface-card)",
      border: "1px solid " + (on || indeterminate ? "var(--atto-yellow)" : "var(--border-strong)"),
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "var(--transition-control)"
    }
  }, on || indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "13px",
      height: "13px",
      background: "var(--ink-1000)",
      WebkitMask: mark,
      mask: mark
    }
  }) : null), label || description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-primary)"
    }
  }, label) : null, description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-secondary)"
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: "32px",
    font: "400 13px/1.2 var(--font-sans)",
    padding: "0 10px",
    radius: "8px"
  },
  md: {
    height: "40px",
    font: "400 15px/1.2 var(--font-sans)",
    padding: "0 12px",
    radius: "10px"
  },
  lg: {
    height: "48px",
    font: "400 16px/1.2 var(--font-sans)",
    padding: "0 14px",
    radius: "12px"
  }
};
function Input({
  label,
  hint,
  error,
  value,
  defaultValue,
  placeholder,
  type = "text",
  size = "md",
  name,
  id,
  iconLeft,
  suffix,
  disabled = false,
  readOnly = false,
  required = false,
  multiline = false,
  rows = 4,
  onChange,
  onFocus,
  onBlur,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const uid = id || name;
  const iconUrl = n => "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/" + n + ".svg) center/contain no-repeat";
  const border = error ? "var(--red-500)" : focus ? "var(--ink-950)" : "var(--border-default)";
  const field = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: multiline ? "flex-start" : "center",
      gap: "8px",
      height: multiline ? "auto" : s.height,
      padding: multiline ? "10px 12px" : s.padding,
      background: disabled ? "var(--ink-50)" : "var(--surface-card)",
      border: "1px solid " + border,
      borderRadius: s.radius,
      boxShadow: focus ? error ? "0 0 0 3px var(--red-100)" : "0 0 0 3px var(--atto-yellow-tint)" : "none",
      transition: "var(--transition-control)",
      cursor: disabled ? "not-allowed" : "text",
      opacity: disabled ? 0.7 : 1
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "16px",
      height: "16px",
      flex: "0 0 auto",
      background: "var(--ink-400)",
      WebkitMask: iconUrl(iconLeft),
      mask: iconUrl(iconLeft)
    }
  }) : null, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    name: name,
    rows: rows,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    onChange: onChange,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      font: s.font,
      lineHeight: 1.55,
      resize: "vertical",
      color: "var(--text-primary)"
    }
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    name: name,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    onChange: onChange,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      font: s.font,
      color: "var(--text-primary)"
    }
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      flex: "0 0 auto"
    }
  }, suffix) : null);
  if (!label && !hint && !error) return /*#__PURE__*/React.createElement("div", {
    style: style
  }, field);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      font: "var(--type-label)",
      color: "var(--text-primary)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red-500)",
      marginLeft: "3px"
    }
  }, "*") : null) : null, field, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-secondary)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked,
  defaultChecked,
  disabled = false,
  name,
  value,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [internal, setInternal] = React.useState(Boolean(defaultChecked));
  const on = checked !== undefined ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: description ? "flex-start" : "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "18px",
      height: "18px",
      flex: "0 0 auto",
      marginTop: description ? "1px" : 0,
      borderRadius: "50%",
      background: "var(--surface-card)",
      border: "1px solid " + (on ? "var(--ink-950)" : "var(--border-strong)"),
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "var(--transition-control)"
    }
  }, on ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "var(--atto-yellow)",
      border: "1px solid var(--ink-950)"
    }
  }) : null), label || description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-primary)"
    }
  }, label) : null, description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-secondary)"
    }
  }, description) : null) : null);
}
function RadioGroup({
  label,
  name,
  options = [],
  value,
  onChange,
  direction = "column",
  style
}) {
  const items = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("legend", {
    style: {
      font: "var(--type-label)",
      color: "var(--text-primary)",
      padding: 0,
      marginBottom: "2px"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "row" ? "20px" : "10px"
    }
  }, items.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: name,
    value: o.value,
    label: o.label,
    description: o.description,
    checked: value !== undefined ? value === o.value : undefined,
    defaultChecked: value === undefined ? o.defaultChecked : undefined,
    onChange: onChange
  }))));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: "32px",
    font: "400 13px/1.2 var(--font-sans)",
    padding: "0 32px 0 10px",
    radius: "8px"
  },
  md: {
    height: "40px",
    font: "400 15px/1.2 var(--font-sans)",
    padding: "0 36px 0 12px",
    radius: "10px"
  },
  lg: {
    height: "48px",
    font: "400 16px/1.2 var(--font-sans)",
    padding: "0 40px 0 14px",
    radius: "12px"
  }
};
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  defaultValue,
  placeholder,
  size = "md",
  name,
  id,
  disabled = false,
  required = false,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const uid = id || name;
  const caret = "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/chevron-down.svg) center/contain no-repeat";
  const border = error ? "var(--red-500)" : focus ? "var(--ink-950)" : "var(--border-default)";
  const items = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const field = /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    name: name,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: s.height,
      padding: s.padding,
      font: s.font,
      color: "var(--text-primary)",
      background: disabled ? "var(--ink-50)" : "var(--surface-card)",
      border: "1px solid " + border,
      borderRadius: s.radius,
      outline: "none",
      boxShadow: focus ? error ? "0 0 0 3px var(--red-100)" : "0 0 0 3px var(--atto-yellow-tint)" : "none",
      transition: "var(--transition-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.7 : 1
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, items.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "16px",
      height: "16px",
      background: "var(--ink-500)",
      WebkitMask: caret,
      mask: caret,
      pointerEvents: "none"
    }
  }));
  if (!label && !hint && !error) return /*#__PURE__*/React.createElement("div", {
    style: style
  }, field);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      font: "var(--type-label)",
      color: "var(--text-primary)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red-500)",
      marginLeft: "3px"
    }
  }, "*") : null) : null, field, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-secondary)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    w: 34,
    h: 20,
    knob: 14
  },
  md: {
    w: 44,
    h: 26,
    knob: 20
  }
};
function Switch({
  label,
  description,
  checked,
  defaultChecked,
  disabled = false,
  size = "md",
  name,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [internal, setInternal] = React.useState(Boolean(defaultChecked));
  const on = checked !== undefined ? checked : internal;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: description ? "flex-start" : "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    name: name,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block",
      width: s.w + "px",
      height: s.h + "px",
      flex: "0 0 auto",
      marginTop: description ? "2px" : 0,
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--atto-yellow)" : "var(--ink-200)",
      border: "1px solid " + (on ? "var(--atto-yellow-press)" : "var(--ink-300)"),
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "background-color var(--duration-base) var(--ease-standard),border-color var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "50%",
      left: on ? s.w - s.knob - 4 + "px" : "2px",
      transform: "translateY(-50%)",
      width: s.knob + "px",
      height: s.knob + "px",
      borderRadius: "50%",
      background: on ? "var(--ink-1000)" : "var(--white)",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--duration-base) var(--ease-standard),background-color var(--duration-base) var(--ease-standard)"
    }
  })), label || description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-primary)"
    }
  }, label) : null, description ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-secondary)"
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumbs({
  items = [],
  style,
  ...rest
}) {
  const sep = "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/chevron-right.svg) center/contain no-repeat";
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Trilha",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      flexWrap: "wrap",
      ...style
    }
  }, rest), items.map((item, i) => {
    const last = i === items.length - 1;
    const label = typeof item === "string" ? item : item.label;
    const href = typeof item === "string" ? undefined : item.href;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label + i
    }, last || !href ? /*#__PURE__*/React.createElement("span", {
      "aria-current": last ? "page" : undefined,
      style: {
        font: "var(--type-body-sm)",
        color: last ? "var(--text-primary)" : "var(--text-secondary)",
        fontWeight: last ? 500 : 400
      }
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: href,
      onClick: typeof item === "object" ? item.onClick : undefined,
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-secondary)",
        textDecoration: "none"
      }
    }, label), !last ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: "14px",
        height: "14px",
        background: "var(--ink-300)",
        WebkitMask: sep,
        mask: sep
      }
    }) : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  size = "md",
  style,
  ...rest
}) {
  const list = items.map(t => typeof t === "string" ? {
    value: t,
    label: t
  } : t);
  const [internal, setInternal] = React.useState(defaultValue || list[0] && list[0].value);
  const [hover, setHover] = React.useState(null);
  const active = value !== undefined ? value : internal;
  const pick = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const font = size === "sm" ? "500 13px/1 var(--font-sans)" : "500 15px/1 var(--font-sans)";
  const pad = size === "sm" ? "8px 2px" : "12px 2px";
  const iconUrl = n => "url(https://cdn.jsdelivr.net/npm/lucide-static@0.427.0/icons/" + n + ".svg) center/contain no-repeat";
  if (variant === "segmented") {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "tablist",
      style: {
        display: "inline-flex",
        padding: "3px",
        gap: "2px",
        background: "var(--ink-50)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-pill)",
        ...style
      }
    }, rest), list.map(t => {
      const on = t.value === active;
      return /*#__PURE__*/React.createElement("button", {
        key: t.value,
        role: "tab",
        "aria-selected": on,
        onClick: () => pick(t.value),
        onMouseEnter: () => setHover(t.value),
        onMouseLeave: () => setHover(null),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: size === "sm" ? "6px 12px" : "8px 16px",
          font,
          border: "none",
          borderRadius: "var(--radius-pill)",
          cursor: "pointer",
          background: on ? "var(--white)" : hover === t.value ? "var(--ink-100)" : "transparent",
          color: on ? "var(--ink-950)" : "var(--ink-600)",
          boxShadow: on ? "var(--shadow-xs)" : "none",
          transition: "var(--transition-control)"
        }
      }, t.icon ? /*#__PURE__*/React.createElement("span", {
        style: {
          width: "15px",
          height: "15px",
          background: "currentColor",
          WebkitMask: iconUrl(t.icon),
          mask: iconUrl(t.icon)
        }
      }) : null, t.label, t.count !== undefined ? /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-caption)",
          color: "var(--text-muted)"
        }
      }, t.count) : null);
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "24px",
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), list.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(t.value),
      onMouseEnter: () => setHover(t.value),
      onMouseLeave: () => setHover(null),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: pad,
        font,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        position: "relative",
        color: on ? "var(--ink-950)" : hover === t.value ? "var(--ink-800)" : "var(--ink-500)",
        boxShadow: on ? "inset 0 -3px 0 var(--atto-yellow)" : "none",
        transition: "var(--transition-control)"
      }
    }, t.icon ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: "16px",
        height: "16px",
        background: "currentColor",
        WebkitMask: iconUrl(t.icon),
        mask: iconUrl(t.icon)
      }
    }) : null, t.label, t.count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 11px/1 var(--font-sans)",
        padding: "3px 6px",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--atto-yellow-wash)" : "var(--ink-50)",
        color: "var(--ink-600)"
      }
    }, t.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Dashboard.jsx
try { (() => {
const DSD = window.PortalAttoDesignSystem_21a1e5;
function VolumeChart({
  data
}) {
  const max = Math.max.apply(null, data.map(d => d.v));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: "14px",
      height: "132px"
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.m,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: Math.round(d.v / max * 108) + "px",
      borderRadius: "var(--radius-sm) var(--radius-sm) 0 0",
      background: i === data.length - 1 ? "var(--atto-yellow)" : "var(--ink-100)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: i === data.length - 1 ? "var(--text-primary)" : "var(--text-muted)"
    }
  }, d.m))));
}
function Dashboard({
  onOpenRequest,
  onNavigate
}) {
  const d = window.AttoData;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Painel",
    subtitle: "Domingo, 9 de agosto \xB7 Construtora Vale \xB7 Unidade Centro",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DSD.Button, {
      variant: "secondary",
      size: "md",
      iconLeft: "download"
    }, "Exportar"), /*#__PURE__*/React.createElement(DSD.Button, {
      size: "md",
      iconLeft: "plus",
      onClick: () => onNavigate("solicitacoes")
    }, "Nova solicita\xE7\xE3o"))
  }), /*#__PURE__*/React.createElement(DSD.Alert, {
    tone: "warning",
    title: "3 documentos vencem esta semana",
    action: /*#__PURE__*/React.createElement(DSD.Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => onNavigate("solicitacoes")
    }, "Ver documentos"),
    style: {
      marginBottom: "20px"
    }
  }, "Assine at\xE9 12/09 para manter os contratos ativos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      marginBottom: "20px"
    }
  }, d.stats.map(s => /*#__PURE__*/React.createElement(StatCard, {
    key: s.label,
    stat: s
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 340px",
      gap: "16px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(DSD.Card, {
    padding: "0",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 20px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h4)"
    }
  }, "Solicita\xE7\xF5es recentes"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: "3px"
    }
  }, "Atualizado h\xE1 4 minutos")), /*#__PURE__*/React.createElement(DSD.Button, {
    size: "sm",
    variant: "ghost",
    iconRight: "arrow-right",
    onClick: () => onNavigate("solicitacoes")
  }, "Ver todas")), /*#__PURE__*/React.createElement(DSD.DataTable, {
    dense: true,
    onRowClick: onOpenRequest,
    columns: [{
      key: "id",
      label: "Protocolo",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-mono)",
          color: "var(--text-primary)"
        }
      }, r.id)
    }, {
      key: "empresa",
      label: "Empresa",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "8px"
        }
      }, /*#__PURE__*/React.createElement(DSD.Avatar, {
        name: r.empresa,
        size: "xs"
      }), r.empresa)
    }, {
      key: "tipo",
      label: "Tipo"
    }, {
      key: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(DSD.Badge, {
        size: "sm",
        tone: r.tone,
        dot: true
      }, r.status)
    }, {
      key: "valor",
      label: "Valor",
      align: "right",
      numeric: true
    }],
    rows: d.requests.slice(0, 4)
  })), /*#__PURE__*/React.createElement(DSD.Card, {
    title: "Volume de solicita\xE7\xF5es",
    subtitle: "\xDAltimos 6 meses",
    actions: /*#__PURE__*/React.createElement(DSD.Tabs, {
      variant: "segmented",
      size: "sm",
      items: ["6m", "12m"]
    })
  }, /*#__PURE__*/React.createElement(VolumeChart, {
    data: d.volume
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(DSD.Card, {
    title: "Atividade",
    padding: "18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, d.timeline.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "32px",
      height: "32px",
      flex: "0 0 auto",
      borderRadius: "var(--radius-md)",
      background: "var(--ink-50)"
    }
  }, /*#__PURE__*/React.createElement(DSD.Icon, {
    name: t.icon,
    size: 16,
    color: "var(--ink-700)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-primary)"
    }
  }, t.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, t.time)))))), /*#__PURE__*/React.createElement(DSD.Card, {
    variant: "inverse",
    quadrant: true,
    padding: "20px"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--atto-yellow)"
    }
  }, "Plano Pro"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "600 20px/1.25 var(--font-sans)",
      color: "var(--white)",
      margin: "10px 0 8px"
    }
  }, "Assinatura em lote liberada"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "rgba(255,255,255,.7)",
      marginBottom: "16px"
    }
  }, "Assine at\xE9 50 documentos de uma vez com certificado A1."), /*#__PURE__*/React.createElement(DSD.Button, {
    size: "sm",
    iconRight: "arrow-right"
  }, "Ativar agora")))));
}
Object.assign(window, {
  Dashboard,
  VolumeChart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Login.jsx
try { (() => {
const DSL = window.PortalAttoDesignSystem_21a1e5;
function Login({
  onEnter
}) {
  const [loading, setLoading] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onEnter();
    }, 700);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "atto-inverse",
    style: {
      flex: "1 1 55%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "48px",
      background: "var(--ink-950)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-reversed.png",
    alt: "Portal Atto",
    style: {
      height: "44px",
      width: "auto",
      position: "relative"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "460px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "900 48px/1.02 var(--font-display)",
      letterSpacing: "-0.03em",
      color: "var(--white)"
    }
  }, "Seus contratos,", /*#__PURE__*/React.createElement("br", null), "resolvidos", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--atto-yellow)"
    }
  }, "em minutos.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "rgba(255,255,255,.72)",
      marginTop: "20px"
    }
  }, "Solicita\xE7\xF5es, documentos e assinaturas da sua empresa em um \xFAnico portal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      gap: "28px",
      font: "var(--type-body-sm)",
      color: "rgba(255,255,255,.55)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Suporte 8h\u201318h"), /*#__PURE__*/React.createElement("span", null, "ICP-Brasil"), /*#__PURE__*/React.createElement("span", null, "LGPD")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "-90px",
      bottom: "-90px",
      width: "320px",
      height: "320px",
      borderRadius: "var(--radius-2xl) 0 var(--radius-2xl) var(--radius-2xl)",
      background: "rgba(255,222,0,.06)",
      border: "1px solid rgba(255,222,0,.14)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 45%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px"
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      width: "100%",
      maxWidth: "360px",
      display: "flex",
      flexDirection: "column",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "-0.02em"
    }
  }, "Acessar o portal"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      marginTop: "6px"
    }
  }, "Use o e-mail cadastrado pela sua empresa.")), /*#__PURE__*/React.createElement(DSL.Input, {
    label: "E-mail",
    type: "email",
    defaultValue: "marina@construtoravale.com.br",
    iconLeft: "mail",
    required: true
  }), /*#__PURE__*/React.createElement(DSL.Input, {
    label: "Senha",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    iconLeft: "lock",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(DSL.Checkbox, {
    label: "Manter conectado",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: "var(--type-body-sm)"
    }
  }, "Esqueci minha senha")), /*#__PURE__*/React.createElement(DSL.Button, {
    type: "submit",
    fullWidth: true,
    size: "lg",
    loading: loading,
    iconRight: loading ? undefined : "arrow-right"
  }, "Entrar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "var(--text-muted)",
      font: "var(--type-caption)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: "var(--border-subtle)"
    }
  }), "ou", /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: "var(--border-subtle)"
    }
  })), /*#__PURE__*/React.createElement(DSL.Button, {
    variant: "secondary",
    fullWidth: true,
    size: "lg",
    iconLeft: "shield-check",
    onClick: onEnter
  }, "Entrar com certificado digital"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, "Primeiro acesso? ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Fale com o administrador da sua empresa"), "."))));
}
Object.assign(window, {
  Login
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/RequestDetail.jsx
try { (() => {
const DSX = window.PortalAttoDesignSystem_21a1e5;
function RequestDetail({
  request,
  onBack,
  onSign
}) {
  const d = window.AttoData;
  const r = request || d.requests[0];
  const [tab, setTab] = React.useState("resumo");
  const steps = [{
    label: "Criada",
    done: true,
    time: "05/08 · 09:12"
  }, {
    label: "Documentos anexados",
    done: true,
    time: "07/08 · 14:40"
  }, {
    label: "Em análise jurídica",
    done: true,
    time: "08/08 · 10:05"
  }, {
    label: "Assinaturas",
    done: false,
    time: "2 de 4 concluídas"
  }, {
    label: "Arquivada",
    done: false,
    time: "—"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    breadcrumbs: [{
      label: "Painel",
      href: "#",
      onClick: onBack
    }, {
      label: "Solicitações",
      href: "#",
      onClick: onBack
    }, r.id],
    title: r.tipo,
    subtitle: r.empresa + " · aberta por " + r.resp + " · prazo " + r.prazo,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DSX.Button, {
      variant: "secondary",
      iconLeft: "download"
    }, "Baixar tudo"), /*#__PURE__*/React.createElement(DSX.Button, {
      iconLeft: "file-signature",
      onClick: onSign
    }, "Assinar"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: "16px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(DSX.Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 20px 0"
    }
  }, /*#__PURE__*/React.createElement(DSX.Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "resumo",
      label: "Resumo"
    }, {
      value: "docs",
      label: "Documentos",
      count: 3
    }, {
      value: "hist",
      label: "Histórico"
    }]
  })), tab === "resumo" ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "16px"
    }
  }, [["Protocolo", r.id], ["Valor do contrato", r.valor], ["Status", null], ["Unidade", "Centro"], ["Vigência", "12 meses"], ["CNPJ", "12.345.678/0001-90"]].map(k => /*#__PURE__*/React.createElement("div", {
    key: k[0],
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, k[0]), k[1] === null ? /*#__PURE__*/React.createElement(DSX.Badge, {
    tone: r.tone,
    dot: true
  }, r.status) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: k[0] === "Protocolo" || k[0] === "CNPJ" ? "var(--type-mono)" : "var(--type-body)",
      color: "var(--text-primary)"
    }
  }, k[1])))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      font: "var(--type-h4)",
      marginBottom: "8px"
    }
  }, "Objeto"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: "68ch"
    }
  }, "Execu\xE7\xE3o de obra civil para amplia\xE7\xE3o do galp\xE3o de estocagem, incluindo funda\xE7\xE3o, estrutura met\xE1lica e cobertura, conforme cronograma f\xEDsico-financeiro anexo.")), /*#__PURE__*/React.createElement(DSX.Alert, {
    tone: "info",
    title: "2 assinaturas pendentes"
  }, "Diego Muniz e o representante legal da contratada ainda n\xE3o assinaram.")) : tab === "docs" ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 0 0"
    }
  }, /*#__PURE__*/React.createElement(DSX.DataTable, {
    dense: true,
    columns: [{
      key: "nome",
      label: "Arquivo",
      render: x => /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "10px"
        }
      }, /*#__PURE__*/React.createElement(DSX.Icon, {
        name: "file-text",
        size: 16,
        color: "var(--ink-500)"
      }), x.nome)
    }, {
      key: "autor",
      label: "Enviado por"
    }, {
      key: "data",
      label: "Data"
    }, {
      key: "tamanho",
      label: "Tamanho",
      align: "right",
      numeric: true
    }, {
      key: "a",
      label: "",
      width: "44px",
      render: () => /*#__PURE__*/React.createElement(DSX.IconButton, {
        icon: "download",
        label: "Baixar",
        size: "sm"
      })
    }],
    rows: d.documents
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px"
    }
  }, /*#__PURE__*/React.createElement(DSX.Button, {
    size: "sm",
    variant: "secondary",
    iconLeft: "upload"
  }, "Anexar documento"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, d.timeline.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "32px",
      height: "32px",
      flex: "0 0 auto",
      borderRadius: "var(--radius-md)",
      background: "var(--ink-50)"
    }
  }, /*#__PURE__*/React.createElement(DSX.Icon, {
    name: t.icon,
    size: 16,
    color: "var(--ink-700)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)"
    }
  }, t.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, t.time)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(DSX.Card, {
    title: "Andamento",
    padding: "18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: "flex",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: s.done ? "var(--atto-yellow)" : "var(--white)",
      border: "1px solid " + (s.done ? "var(--atto-yellow)" : "var(--border-strong)")
    }
  }, s.done ? /*#__PURE__*/React.createElement(DSX.Icon, {
    name: "check",
    size: 13,
    color: "var(--ink-1000)"
  }) : null), i < steps.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1px",
      flex: 1,
      minHeight: "26px",
      background: "var(--border-default)"
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: s.done ? "500 13px/1.3 var(--font-sans)" : "400 13px/1.3 var(--font-sans)",
      color: s.done ? "var(--text-primary)" : "var(--text-muted)"
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, s.time)))))), /*#__PURE__*/React.createElement(DSX.Card, {
    title: "Assinantes",
    padding: "18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, [["Marina Rocha", "Assinou", "success"], ["Diego Muniz", "Pendente", "warning"], ["Cartório 3º Ofício", "Aguardando", "neutral"]].map(p => /*#__PURE__*/React.createElement("div", {
    key: p[0],
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement(DSX.Avatar, {
    name: p[0],
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: "var(--type-body-sm)"
    }
  }, p[0]), /*#__PURE__*/React.createElement(DSX.Badge, {
    size: "sm",
    tone: p[2],
    dot: p[2] !== "neutral"
  }, p[1]))))))));
}
Object.assign(window, {
  RequestDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/RequestDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Requests.jsx
try { (() => {
const DSR = window.PortalAttoDesignSystem_21a1e5;
function Requests({
  onOpenRequest,
  onNewRequest
}) {
  const d = window.AttoData;
  const [tab, setTab] = React.useState("todas");
  const [sel, setSel] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const rows = d.requests.filter(r => tab === "pendentes" ? r.tone === "warning" || r.tone === "info" : tab === "minhas" ? r.resp === d.user.name : tab === "rascunhos" ? r.status === "Rascunho" : true).filter(r => query ? (r.id + r.empresa + r.tipo).toLowerCase().indexOf(query.toLowerCase()) !== -1 : true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Solicita\xE7\xF5es",
    subtitle: "128 registros \xB7 24 em aberto",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DSR.Button, {
      variant: "secondary",
      iconLeft: "download"
    }, "Exportar CSV"), /*#__PURE__*/React.createElement(DSR.Button, {
      iconLeft: "plus",
      onClick: onNewRequest
    }, "Nova solicita\xE7\xE3o"))
  }), /*#__PURE__*/React.createElement(DSR.Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 20px 0"
    }
  }, /*#__PURE__*/React.createElement(DSR.Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "todas",
      label: "Todas",
      count: 128
    }, {
      value: "minhas",
      label: "Minhas",
      icon: "user",
      count: 2
    }, {
      value: "pendentes",
      label: "Pendentes",
      count: 2
    }, {
      value: "rascunhos",
      label: "Rascunhos",
      count: 1
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "14px 20px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "280px"
    }
  }, /*#__PURE__*/React.createElement(DSR.Input, {
    size: "sm",
    iconLeft: "search",
    placeholder: "Buscar protocolo ou empresa",
    value: query,
    onChange: e => setQuery(e.target.value)
  })), /*#__PURE__*/React.createElement(DSR.Tag, {
    icon: "calendar",
    selected: true
  }, "\xDAltimos 30 dias"), /*#__PURE__*/React.createElement(DSR.Tag, {
    removable: true,
    onRemove: () => {}
  }, "Unidade Centro"), /*#__PURE__*/React.createElement(DSR.Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: "filter"
  }, "Mais filtros"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), sel.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, sel.length, " selecionadas"), /*#__PURE__*/React.createElement(DSR.Button, {
    size: "sm",
    variant: "secondary",
    iconLeft: "file-signature"
  }, "Assinar em lote")) : /*#__PURE__*/React.createElement(DSR.Tabs, {
    variant: "segmented",
    size: "sm",
    items: [{
      value: "l",
      label: "Lista",
      icon: "list"
    }, {
      value: "g",
      label: "Grade",
      icon: "layout-grid"
    }]
  })), /*#__PURE__*/React.createElement(DSR.DataTable, {
    selectable: true,
    selected: sel,
    onSelect: setSel,
    onRowClick: onOpenRequest,
    columns: [{
      key: "id",
      label: "Protocolo",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-mono)",
          color: "var(--text-primary)"
        }
      }, r.id)
    }, {
      key: "empresa",
      label: "Empresa",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "8px"
        }
      }, /*#__PURE__*/React.createElement(DSR.Avatar, {
        name: r.empresa,
        size: "xs"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, /*#__PURE__*/React.createElement("span", null, r.empresa), /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-caption)",
          color: "var(--text-muted)"
        }
      }, r.tipo)))
    }, {
      key: "resp",
      label: "Responsável"
    }, {
      key: "prazo",
      label: "Prazo"
    }, {
      key: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(DSR.Badge, {
        size: "sm",
        tone: r.tone,
        dot: r.tone !== "neutral"
      }, r.status)
    }, {
      key: "valor",
      label: "Valor",
      align: "right",
      numeric: true
    }, {
      key: "acoes",
      label: "",
      width: "48px",
      render: () => /*#__PURE__*/React.createElement(DSR.IconButton, {
        icon: "ellipsis",
        label: "A\xE7\xF5es",
        size: "sm"
      })
    }],
    rows: rows,
    empty: /*#__PURE__*/React.createElement(DSR.EmptyState, {
      icon: "search-x",
      title: "Nenhum resultado",
      description: "Ajuste os filtros ou o termo buscado para encontrar a solicita\xE7\xE3o.",
      action: /*#__PURE__*/React.createElement(DSR.Button, {
        size: "sm",
        variant: "secondary",
        onClick: () => {
          setQuery("");
          setTab("todas");
        }
      }, "Limpar filtros")
    }),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-caption)",
        color: "var(--text-secondary)"
      }
    }, "Mostrando ", rows.length, " de 128 registros"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "8px"
      }
    }, /*#__PURE__*/React.createElement(DSR.Button, {
      size: "sm",
      variant: "secondary",
      iconLeft: "chevron-left"
    }, "Anterior"), /*#__PURE__*/React.createElement(DSR.Button, {
      size: "sm",
      variant: "secondary",
      iconRight: "chevron-right"
    }, "Pr\xF3xima")))
  })));
}
Object.assign(window, {
  Requests
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Requests.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Settings.jsx
try { (() => {
const DSS = window.PortalAttoDesignSystem_21a1e5;
function Settings() {
  const d = window.AttoData;
  const [tab, setTab] = React.useState("empresa");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Configura\xE7\xF5es",
    subtitle: "Construtora Vale \xB7 CNPJ 12.345.678/0001-90"
  }), /*#__PURE__*/React.createElement(DSS.Tabs, {
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: "20px"
    },
    items: [{
      value: "empresa",
      label: "Empresa"
    }, {
      value: "equipe",
      label: "Equipe",
      count: 4
    }, {
      value: "notif",
      label: "Notificações"
    }, {
      value: "plano",
      label: "Plano e cobrança"
    }]
  }), tab === "empresa" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: "16px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(DSS.Card, {
    title: "Dados da empresa",
    subtitle: "Usados nos contratos e nas notas emitidas pelo portal",
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px"
      }
    }, /*#__PURE__*/React.createElement(DSS.Button, {
      variant: "secondary",
      size: "sm"
    }, "Cancelar"), /*#__PURE__*/React.createElement(DSS.Button, {
      size: "sm"
    }, "Salvar altera\xE7\xF5es"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(DSS.Input, {
    label: "Raz\xE3o social",
    defaultValue: "Construtora Vale Ltda."
  }), /*#__PURE__*/React.createElement(DSS.Input, {
    label: "CNPJ",
    defaultValue: "12.345.678/0001-90",
    iconLeft: "building-2"
  }), /*#__PURE__*/React.createElement(DSS.Input, {
    label: "E-mail financeiro",
    type: "email",
    defaultValue: "financeiro@construtoravale.com.br"
  }), /*#__PURE__*/React.createElement(DSS.Input, {
    label: "Telefone",
    defaultValue: "(41) 3030-1200"
  }), /*#__PURE__*/React.createElement(DSS.Select, {
    label: "Unidade padr\xE3o",
    options: ["Centro", "Zona Sul", "Industrial"],
    defaultValue: "Centro"
  }), /*#__PURE__*/React.createElement(DSS.Select, {
    label: "Fuso hor\xE1rio",
    options: ["Brasília (GMT-3)", "Manaus (GMT-4)"]
  }), /*#__PURE__*/React.createElement(DSS.Input, {
    label: "Observa\xE7\xF5es internas",
    multiline: true,
    rows: 3,
    placeholder: "Vis\xEDvel apenas para a sua equipe",
    style: {
      gridColumn: "1 / -1"
    }
  }))), /*#__PURE__*/React.createElement(DSS.Card, {
    title: "Identidade",
    padding: "18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement(DSS.Avatar, {
    name: "Construtora Vale",
    tone: "brand",
    size: "xl"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement(DSS.Button, {
    size: "sm",
    variant: "secondary",
    iconLeft: "upload"
  }, "Enviar logo"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, "PNG ou SVG, m\xEDn. 512px"))), /*#__PURE__*/React.createElement(DSS.Switch, {
    label: "Usar logo nos documentos",
    defaultChecked: true
  }))) : tab === "equipe" ? /*#__PURE__*/React.createElement(DSS.Card, {
    padding: "0",
    title: "Equipe",
    subtitle: "4 pessoas com acesso ao portal",
    actions: /*#__PURE__*/React.createElement(DSS.Button, {
      size: "sm",
      iconLeft: "plus"
    }, "Convidar pessoa")
  }, /*#__PURE__*/React.createElement(DSS.DataTable, {
    columns: [{
      key: "nome",
      label: "Pessoa",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "10px"
        }
      }, /*#__PURE__*/React.createElement(DSS.Avatar, {
        name: r.nome,
        size: "sm"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, /*#__PURE__*/React.createElement("span", null, r.nome), /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-caption)",
          color: "var(--text-muted)"
        }
      }, r.email)))
    }, {
      key: "papel",
      label: "Papel"
    }, {
      key: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(DSS.Badge, {
        size: "sm",
        tone: r.tone,
        dot: true
      }, r.status)
    }, {
      key: "a",
      label: "",
      width: "44px",
      render: () => /*#__PURE__*/React.createElement(DSS.IconButton, {
        icon: "ellipsis",
        label: "A\xE7\xF5es",
        size: "sm"
      })
    }],
    rows: d.team
  })) : tab === "notif" ? /*#__PURE__*/React.createElement(DSS.Card, {
    title: "Notifica\xE7\xF5es",
    subtitle: "Escolha o que a Atto avisa e por onde",
    style: {
      maxWidth: "640px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement(DSS.Switch, {
    label: "Novas solicita\xE7\xF5es",
    description: "Quando algu\xE9m da sua unidade abre uma solicita\xE7\xE3o.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(DSS.Switch, {
    label: "Assinaturas pendentes",
    description: "Lembrete di\xE1rio \xE0s 9h enquanto houver pend\xEAncia.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(DSS.Switch, {
    label: "Documentos a vencer",
    description: "7, 3 e 1 dia antes do vencimento.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(DSS.Switch, {
    label: "Resumo semanal",
    description: "Segunda-feira, com o que mudou na semana."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "1px",
      background: "var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement(DSS.RadioGroup, {
    label: "Canal preferido",
    name: "canal",
    direction: "row",
    options: [{
      value: "email",
      label: "E-mail",
      defaultChecked: true
    }, {
      value: "whats",
      label: "WhatsApp"
    }, {
      value: "ambos",
      label: "Ambos"
    }]
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: "16px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(DSS.Card, {
    title: "Plano atual",
    subtitle: "Cobran\xE7a mensal, pr\xF3xima em 01/09/2026",
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-caption)",
        color: "var(--text-muted)"
      }
    }, "Cancele quando quiser, sem multa."), /*#__PURE__*/React.createElement(DSS.Button, {
      size: "sm",
      variant: "secondary"
    }, "Mudar de plano"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(DSS.Badge, {
    tone: "brand"
  }, "Plano Pro"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 30px/1 var(--font-display)",
      letterSpacing: "-0.02em",
      fontVariantNumeric: "tabular-nums"
    }
  }, "R$ 890", /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)"
    }
  }, "/m\xEAs"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      marginTop: "16px"
    }
  }, ["Assinatura em lote com certificado A1", "Usuários ilimitados", "Integração com ERP", "Suporte prioritário 8h–18h"].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(DSS.Icon, {
    name: "circle-check",
    size: 16,
    color: "var(--green-500)"
  }), t)))), /*#__PURE__*/React.createElement(DSS.Card, {
    title: "Pagamento",
    padding: "18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(DSS.Icon, {
    name: "credit-card",
    size: 20,
    color: "var(--ink-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)"
    }
  }, "Cart\xE3o \u2022\u2022\u2022\u2022 4821"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, "Vence 08/2029")), /*#__PURE__*/React.createElement(DSS.IconButton, {
    icon: "pencil",
    label: "Editar",
    size: "sm"
  })))));
}
Object.assign(window, {
  Settings
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Settings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Shell.jsx
try { (() => {
const DS = window.PortalAttoDesignSystem_21a1e5;
function NavItem({
  item,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      width: "100%",
      padding: "9px 12px",
      border: "none",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      textAlign: "left",
      font: active ? "600 14px/1.2 var(--font-sans)" : "400 14px/1.2 var(--font-sans)",
      background: active ? "var(--atto-yellow-wash)" : hover ? "var(--ink-50)" : "transparent",
      color: active ? "var(--ink-950)" : "var(--ink-600)",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement(DS.Icon, {
    name: item.icon,
    size: 17,
    color: active ? "var(--ink-900)" : "var(--ink-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.count ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 11px/1 var(--font-sans)",
      padding: "4px 7px",
      borderRadius: "var(--radius-pill)",
      background: active ? "var(--atto-yellow)" : "var(--ink-100)",
      color: "var(--ink-800)"
    }
  }, item.count) : null);
}
function Sidebar({
  screen,
  onNavigate
}) {
  const d = window.AttoData;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--sidebar-width)",
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      background: "var(--white)",
      borderRight: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--topbar-height)",
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.png",
    alt: "Portal Atto",
    style: {
      height: "30px",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      padding: "14px 12px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      padding: "6px 12px 8px"
    }
  }, "Opera\xE7\xE3o"), d.nav.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.id,
    item: n,
    active: screen === n.id || screen === "detalhe" && n.id === "solicitacoes",
    onClick: () => onNavigate(n.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, d.navFooter.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.id,
    item: n,
    active: screen === n.id,
    onClick: () => onNavigate(n.id)
  }))));
}
function Topbar({
  onNewRequest,
  onNavigate
}) {
  const d = window.AttoData;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--topbar-height)",
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "0 24px",
      background: "var(--white)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "320px"
    }
  }, /*#__PURE__*/React.createElement(DS.Input, {
    size: "sm",
    iconLeft: "search",
    placeholder: "Buscar protocolo, empresa ou documento"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(DS.Button, {
    size: "sm",
    iconLeft: "plus",
    onClick: onNewRequest
  }, "Nova solicita\xE7\xE3o"), /*#__PURE__*/React.createElement(DS.Tooltip, {
    content: "Notifica\xE7\xF5es"
  }, /*#__PURE__*/React.createElement(DS.IconButton, {
    icon: "bell",
    label: "Notifica\xE7\xF5es",
    size: "sm"
  })), /*#__PURE__*/React.createElement(DS.Tooltip, {
    content: "Ajuda"
  }, /*#__PURE__*/React.createElement(DS.IconButton, {
    icon: "circle-help",
    label: "Ajuda",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "1px",
      height: "26px",
      background: "var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("config"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "4px 6px 4px 4px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(DS.Avatar, {
    name: d.user.name,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 13px/1.2 var(--font-sans)"
    }
  }, d.user.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, d.user.company)), /*#__PURE__*/React.createElement(DS.Icon, {
    name: "chevron-down",
    size: 15,
    color: "var(--ink-400)"
  })));
}
function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "24px",
      marginBottom: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      minWidth: 0
    }
  }, breadcrumbs ? /*#__PURE__*/React.createElement(DS.Breadcrumbs, {
    items: breadcrumbs,
    style: {
      marginBottom: "2px"
    }
  }) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "-0.02em"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, subtitle) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flex: "0 0 auto"
    }
  }, actions) : null);
}
function StatCard({
  stat
}) {
  return /*#__PURE__*/React.createElement(DS.Card, {
    padding: "18px",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, stat.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 30px/1.1 var(--font-display)",
      letterSpacing: "-0.02em",
      margin: "10px 0 8px",
      fontVariantNumeric: "tabular-nums"
    }
  }, stat.value), /*#__PURE__*/React.createElement(DS.Badge, {
    size: "sm",
    tone: stat.tone,
    dot: stat.tone !== "neutral"
  }, stat.delta));
}
Object.assign(window, {
  Sidebar,
  Topbar,
  PageHeader,
  StatCard,
  NavItem
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/data.js
try { (() => {
window.AttoData = {
  user: {
    name: "Marina Rocha",
    role: "Administradora",
    company: "Construtora Vale"
  },
  nav: [{
    id: "painel",
    label: "Painel",
    icon: "layout-dashboard"
  }, {
    id: "solicitacoes",
    label: "Solicitações",
    icon: "inbox",
    count: 24
  }, {
    id: "documentos",
    label: "Documentos",
    icon: "file-text"
  }, {
    id: "empresas",
    label: "Empresas",
    icon: "building-2"
  }, {
    id: "relatorios",
    label: "Relatórios",
    icon: "chart-line"
  }],
  navFooter: [{
    id: "config",
    label: "Configurações",
    icon: "settings"
  }],
  stats: [{
    label: "Solicitações abertas",
    value: "24",
    delta: "+6 esta semana",
    tone: "success"
  }, {
    label: "Aguardando assinatura",
    value: "8",
    delta: "3 vencem em 48h",
    tone: "warning"
  }, {
    label: "Documentos ativos",
    value: "312",
    delta: "+18 no mês",
    tone: "success"
  }, {
    label: "Valor em contratos",
    value: "R$ 1,24 mi",
    delta: "estável",
    tone: "neutral"
  }],
  requests: [{
    id: "2026-4821",
    empresa: "Construtora Vale",
    tipo: "Contrato de obra",
    resp: "Marina Rocha",
    status: "Aprovado",
    tone: "success",
    prazo: "12/09",
    valor: "R$ 12.400,00"
  }, {
    id: "2026-4820",
    empresa: "Metalúrgica Serra",
    tipo: "Aditivo contratual",
    resp: "Diego Muniz",
    status: "Em análise",
    tone: "warning",
    prazo: "10/09",
    valor: "R$ 3.180,00"
  }, {
    id: "2026-4819",
    empresa: "Transportes Iguaçu",
    tipo: "Renovação",
    resp: "Ana Lima",
    status: "Vencido",
    tone: "danger",
    prazo: "02/09",
    valor: "R$ 890,00"
  }, {
    id: "2026-4818",
    empresa: "Agro Pinhal",
    tipo: "Contrato de fornecimento",
    resp: "Rafael Souza",
    status: "Processando",
    tone: "info",
    prazo: "18/09",
    valor: "R$ 27.900,00"
  }, {
    id: "2026-4817",
    empresa: "Clínica Bom Retiro",
    tipo: "Prestação de serviço",
    resp: "Marina Rocha",
    status: "Aprovado",
    tone: "success",
    prazo: "24/09",
    valor: "R$ 6.500,00"
  }, {
    id: "2026-4816",
    empresa: "Editora Lumen",
    tipo: "Contrato de obra",
    resp: "Ana Lima",
    status: "Rascunho",
    tone: "neutral",
    prazo: "—",
    valor: "R$ 2.250,00"
  }],
  timeline: [{
    icon: "file-signature",
    title: "Diego Muniz assinou o aditivo",
    time: "há 12 min"
  }, {
    icon: "upload",
    title: "Novo anexo em 2026-4820",
    time: "há 1 h"
  }, {
    icon: "circle-check",
    title: "Solicitação 2026-4821 aprovada",
    time: "há 3 h"
  }, {
    icon: "users",
    title: "Ana Lima entrou na unidade Centro",
    time: "ontem"
  }],
  volume: [{
    m: "Mar",
    v: 42
  }, {
    m: "Abr",
    v: 55
  }, {
    m: "Mai",
    v: 48
  }, {
    m: "Jun",
    v: 71
  }, {
    m: "Jul",
    v: 64
  }, {
    m: "Ago",
    v: 86
  }],
  team: [{
    nome: "Marina Rocha",
    email: "marina@construtoravale.com.br",
    papel: "Administradora",
    status: "Ativo",
    tone: "success"
  }, {
    nome: "Diego Muniz",
    email: "diego@construtoravale.com.br",
    papel: "Assinante",
    status: "Ativo",
    tone: "success"
  }, {
    nome: "Ana Lima",
    email: "ana@construtoravale.com.br",
    papel: "Operadora",
    status: "Convite enviado",
    tone: "warning"
  }, {
    nome: "Rafael Souza",
    email: "rafael@construtoravale.com.br",
    papel: "Leitura",
    status: "Ativo",
    tone: "success"
  }],
  documents: [{
    nome: "Contrato_obra_4821.pdf",
    tamanho: "2,4 MB",
    autor: "Marina Rocha",
    data: "09/08/2026"
  }, {
    nome: "ART_engenheiro.pdf",
    tamanho: "812 KB",
    autor: "Diego Muniz",
    data: "08/08/2026"
  }, {
    nome: "Cronograma_fisico.xlsx",
    tamanho: "146 KB",
    autor: "Ana Lima",
    data: "07/08/2026"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/data.js", error: String((e && e.message) || e) }); }

// ui_kits/site/Sections.jsx
try { (() => {
const S2 = window.PortalAttoDesignSystem_21a1e5;
const PLANS = [{
  name: "Essencial",
  price: {
    mes: "R$ 390",
    ano: "R$ 3.510"
  },
  note: "até 5 usuários",
  feats: ["Solicitações ilimitadas", "Assinatura simples", "1 unidade", "Suporte por e-mail"],
  cta: "Começar agora",
  variant: "secondary"
}, {
  name: "Pro",
  price: {
    mes: "R$ 890",
    ano: "R$ 8.010"
  },
  note: "usuários ilimitados",
  feats: ["Tudo do Essencial", "Assinatura em lote (A1/A3)", "Multiunidade", "Integração com ERP", "Suporte prioritário 8h–18h"],
  cta: "Falar com vendas",
  variant: "primary",
  highlight: true
}, {
  name: "Corporativo",
  price: {
    mes: "sob consulta",
    ano: "sob consulta"
  },
  note: "contrato anual",
  feats: ["Tudo do Pro", "SSO e diretório interno", "Ambiente dedicado", "SLA e gerente de conta"],
  cta: "Falar com vendas",
  variant: "secondary"
}];
function Pricing() {
  const [ciclo, setCiclo] = React.useState("Mensal");
  const key = ciclo === "Mensal" ? "mes" : "ano";
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "18px",
      marginBottom: "40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Planos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "900 48px/1.05 var(--font-display)",
      letterSpacing: "-0.03em",
      maxWidth: "20ch"
    }
  }, "Pre\xE7o fechado, sem taxa por assinatura."), /*#__PURE__*/React.createElement(S2.Tabs, {
    variant: "segmented",
    value: ciclo,
    onChange: setCiclo,
    items: ["Mensal", "Anual"]
  }), ciclo === "Anual" ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-success)"
    }
  }, "2 meses gr\xE1tis no plano anual") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px",
      alignItems: "start"
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      background: p.highlight ? "var(--ink-950)" : "var(--surface-card)",
      color: p.highlight ? "var(--white)" : "var(--text-primary)",
      border: "1px solid " + (p.highlight ? "var(--ink-950)" : "var(--border-subtle)"),
      borderRadius: "var(--radius-panel)",
      borderTopRightRadius: p.highlight ? "var(--radius-2xl)" : "var(--radius-panel)",
      padding: "28px",
      boxShadow: p.highlight ? "var(--shadow-lg)" : "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px",
      marginBottom: "18px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "600 20px/1.2 var(--font-sans)",
      color: p.highlight ? "var(--white)" : "var(--text-primary)"
    }
  }, p.name), p.highlight ? /*#__PURE__*/React.createElement(S2.Badge, {
    tone: "brand",
    size: "sm"
  }, "Mais escolhido") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "900 36px/1 var(--font-display)",
      letterSpacing: "-0.03em",
      fontVariantNumeric: "tabular-nums"
    }
  }, p.price[key]), p.price[key].indexOf("R$") === 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: p.highlight ? "rgba(255,255,255,.6)" : "var(--text-muted)"
    }
  }, "/", ciclo === "Mensal" ? "mês" : "ano") : null), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: p.highlight ? "rgba(255,255,255,.6)" : "var(--text-muted)",
      margin: "6px 0 22px"
    }
  }, p.note), /*#__PURE__*/React.createElement(S2.Button, {
    variant: p.variant,
    fullWidth: true
  }, p.cta), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginTop: "22px"
    }
  }, p.feats.map(f => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "9px",
      font: "var(--type-body-sm)",
      color: p.highlight ? "rgba(255,255,255,.78)" : "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(S2.Icon, {
    name: "check",
    size: 16,
    color: p.highlight ? "var(--atto-yellow)" : "var(--green-500)"
  }), f))))))));
}
function Faq() {
  const qs = [{
    q: "A assinatura tem validade jurídica?",
    a: "Sim. O portal usa certificados ICP-Brasil (A1 e A3) e registra a trilha completa de cada assinatura — data, hora, IP e autor."
  }, {
    q: "Preciso instalar alguma coisa?",
    a: "Não. Tudo roda no navegador. Para certificado A3 é usado o token da própria empresa, com a extensão oficial."
  }, {
    q: "Consigo migrar contratos antigos?",
    a: "Sim. A equipe de implantação importa a base atual em lote durante os cinco primeiros dias."
  }, {
    q: "Como funciona o suporte?",
    a: "E-mail em todos os planos e atendimento prioritário 8h–18h no Pro e no Corporativo."
  }];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-25)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-md)",
      margin: "0 auto",
      padding: "80px 32px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "900 36px/1.1 var(--font-display)",
      letterSpacing: "-0.03em",
      marginBottom: "28px"
    }
  }, "Perguntas frequentes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, qs.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: item.q,
    style: {
      background: "var(--white)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      padding: "18px 20px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      font: "600 16px/1.4 var(--font-sans)"
    }
  }, item.q, /*#__PURE__*/React.createElement(S2.Icon, {
    name: open === i ? "chevron-down" : "chevron-right",
    size: 18,
    color: "var(--ink-500)"
  })), open === i ? /*#__PURE__*/React.createElement("p", {
    style: {
      padding: "0 20px 20px",
      font: "var(--type-body)",
      color: "var(--text-secondary)",
      maxWidth: "68ch"
    }
  }, item.a) : null)))));
}
function CtaBand({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--atto-yellow)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "64px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "32px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "900 40px/1.05 var(--font-display)",
      letterSpacing: "-0.03em",
      color: "var(--ink-1000)",
      maxWidth: "20ch"
    }
  }, "Comece pela sua pr\xF3xima solicita\xE7\xE3o."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "rgba(0,0,0,.7)",
      marginTop: "12px"
    }
  }, "Implanta\xE7\xE3o em 5 dias \xFAteis. Sem fidelidade.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(S2.Button, {
    variant: "inverse",
    size: "lg",
    iconRight: "arrow-right",
    onClick: onEnter
  }, "Ver o portal"), /*#__PURE__*/React.createElement(S2.Button, {
    variant: "secondary",
    size: "lg"
  }, "Falar com vendas"))));
}
function SiteFooter() {
  const cols = [{
    t: "Produto",
    l: ["Solicitações", "Assinatura eletrônica", "Documentos", "Relatórios", "Integrações"]
  }, {
    t: "Empresa",
    l: ["Sobre a Atto", "Segurança", "Status", "Trabalhe conosco"]
  }, {
    t: "Suporte",
    l: ["Central de ajuda", "Fale conosco", "Implantação", "Treinamentos"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "atto-inverse",
    style: {
      background: "var(--ink-950)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "64px 32px 28px",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3,1fr)",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-reversed.png",
    alt: "Portal Atto",
    style: {
      height: "40px",
      width: "auto",
      marginBottom: "18px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "rgba(255,255,255,.6)",
      maxWidth: "34ch"
    }
  }, "Solicita\xE7\xF5es, documentos e assinaturas em um portal s\xF3.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--atto-yellow)"
    }
  }, c.t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginTop: "14px"
    }
  }, c.l.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "var(--type-body-sm)",
      color: "rgba(255,255,255,.7)",
      textDecoration: "none"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "20px 32px 40px",
      borderTop: "1px solid rgba(255,255,255,.12)",
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "rgba(255,255,255,.45)"
    }
  }, "\xA9 2026 Portal Atto \xB7 CNPJ 12.345.678/0001-90"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "20px"
    }
  }, ["Privacidade", "Termos", "LGPD"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: "var(--type-caption)",
      color: "rgba(255,255,255,.45)",
      textDecoration: "none"
    }
  }, l)))));
}
Object.assign(window, {
  Pricing,
  Faq,
  CtaBand,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Site.jsx
try { (() => {
const S = window.PortalAttoDesignSystem_21a1e5;
const NAV = ["Produto", "Planos", "Segurança", "Ajuda"];
function SiteHeader({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(255,255,255,.86)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "0 32px",
      height: "72px",
      display: "flex",
      alignItems: "center",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.png",
    alt: "Portal Atto",
    style: {
      height: "34px",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "26px",
      flex: 1
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      font: "500 14px/1 var(--font-sans)",
      textDecoration: "none",
      color: "var(--ink-700)"
    }
  }, n))), /*#__PURE__*/React.createElement(S.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onEnter
  }, "Entrar"), /*#__PURE__*/React.createElement(S.Button, {
    size: "sm",
    iconRight: "arrow-right"
  }, "Falar com vendas")));
}
function Hero({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--white)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "80px 32px 72px",
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S.Badge, {
    tone: "brand"
  }, "Assinatura eletr\xF4nica com ICP-Brasil"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "900 64px/1.02 var(--font-display)",
      letterSpacing: "-0.03em",
      margin: "20px 0 18px"
    }
  }, "Contratos que", /*#__PURE__*/React.createElement("br", null), "andam sozinhos", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--atto-yellow)"
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-secondary)",
      maxWidth: "46ch",
      marginBottom: "28px"
    }
  }, "O Portal Atto re\xFAne solicita\xE7\xF5es, documentos e assinaturas da sua empresa em um lugar s\xF3 \u2014 com prazo, respons\xE1vel e protocolo em cada etapa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      marginBottom: "22px"
    }
  }, /*#__PURE__*/React.createElement(S.Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: onEnter
  }, "Ver o portal por dentro"), /*#__PURE__*/React.createElement(S.Button, {
    size: "lg",
    variant: "secondary",
    iconLeft: "calendar"
  }, "Agendar demonstra\xE7\xE3o")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "22px",
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px"
    }
  }, /*#__PURE__*/React.createElement(S.Icon, {
    name: "check",
    size: 15,
    color: "var(--green-500)"
  }), "Sem instala\xE7\xE3o"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px"
    }
  }, /*#__PURE__*/React.createElement(S.Icon, {
    name: "check",
    size: 15,
    color: "var(--green-500)"
  }), "Implanta\xE7\xE3o em 5 dias"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px"
    }
  }, /*#__PURE__*/React.createElement(S.Icon, {
    name: "check",
    size: 15,
    color: "var(--green-500)"
  }), "LGPD"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-18px -18px auto auto",
      width: "220px",
      height: "220px",
      borderRadius: "var(--radius-2xl) 0 var(--radius-2xl) var(--radius-2xl)",
      background: "var(--atto-yellow-wash)",
      border: "1px solid var(--atto-yellow-tint)"
    }
  }), /*#__PURE__*/React.createElement(S.Card, {
    variant: "raised",
    padding: "0",
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 16px",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--ink-25)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      background: "var(--ink-200)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      background: "var(--ink-200)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      background: "var(--atto-yellow)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginLeft: "8px"
    }
  }, "portal.atto.com.br/painel")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px",
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px"
    }
  }, [["Abertas", "24"], ["Assinar", "8"], ["Vencendo", "3"]].map(s => /*#__PURE__*/React.createElement("div", {
    key: s[0],
    style: {
      flex: 1,
      padding: "12px",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 24px/1.1 var(--font-display)",
      letterSpacing: "-0.02em",
      marginTop: "6px"
    }
  }, s[1])))), /*#__PURE__*/React.createElement(S.DataTable, {
    dense: true,
    columns: [{
      key: "id",
      label: "Protocolo",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-mono)"
        }
      }, r.id)
    }, {
      key: "empresa",
      label: "Empresa"
    }, {
      key: "status",
      label: "Status",
      render: r => /*#__PURE__*/React.createElement(S.Badge, {
        size: "sm",
        tone: r.tone,
        dot: true
      }, r.status)
    }],
    rows: window.AttoData.requests.slice(0, 3)
  }))))));
}
function Trust() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-25)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "28px 32px",
      display: "flex",
      alignItems: "center",
      gap: "40px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Em opera\xE7\xE3o em"), ["Construtora Vale", "Metalúrgica Serra", "Transportes Iguaçu", "Agro Pinhal", "Editora Lumen"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      font: "600 15px/1 var(--font-sans)",
      letterSpacing: "-0.01em",
      color: "var(--ink-400)"
    }
  }, c))));
}
function Features() {
  const items = [{
    icon: "inbox",
    title: "Solicitações com dono",
    text: "Cada pedido nasce com protocolo, responsável e prazo. Ninguém pergunta “em que pé está?” de novo."
  }, {
    icon: "file-signature",
    title: "Assinatura em lote",
    text: "Assine até 50 documentos de uma vez com certificado A1 ou A3, direto do navegador."
  }, {
    icon: "shield-check",
    title: "Trilha auditável",
    text: "Toda ação fica registrada com data, hora, IP e autor — pronto para auditoria e para o jurídico."
  }, {
    icon: "building-2",
    title: "Multiunidade",
    text: "Separe por filial, obra ou centro de custo sem duplicar cadastro nem perder a visão geral."
  }, {
    icon: "bell",
    title: "Avisos que chegam",
    text: "Lembretes por e-mail e WhatsApp 7, 3 e 1 dia antes do vencimento de cada documento."
  }, {
    icon: "chart-line",
    title: "Relatórios prontos",
    text: "Volume, tempo médio por etapa e gargalos por unidade, exportáveis em CSV."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "O que o portal faz"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "900 48px/1.05 var(--font-display)",
      letterSpacing: "-0.03em",
      margin: "14px 0 48px",
      maxWidth: "18ch"
    }
  }, "Tudo o que trava um contrato, resolvido em uma tela."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px"
    }
  }, items.map((f, i) => /*#__PURE__*/React.createElement(S.Card, {
    key: f.title,
    quadrant: i === 0,
    padding: "24px"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "46px",
      height: "46px",
      borderRadius: "var(--radius-lg)",
      borderTopRightRadius: "var(--radius-2xl)",
      background: "var(--atto-yellow-wash)",
      border: "1px solid var(--atto-yellow-tint)",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement(S.Icon, {
    name: f.icon,
    size: 22,
    color: "var(--ink-900)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      letterSpacing: "-0.015em",
      marginBottom: "8px"
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, f.text))))));
}
function Steps() {
  const steps = [{
    n: "01",
    t: "Abra a solicitação",
    d: "Tipo, empresa, valor e prazo. Leva menos de um minuto."
  }, {
    n: "02",
    t: "Anexe e envie",
    d: "O portal cobra os documentos que faltam e avisa quem precisa agir."
  }, {
    n: "03",
    t: "Assine e arquive",
    d: "Assinatura com validade jurídica e arquivamento automático."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "atto-inverse",
    style: {
      background: "var(--ink-950)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "88px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "32px",
      marginBottom: "48px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "900 48px/1.05 var(--font-display)",
      letterSpacing: "-0.03em",
      color: "var(--white)",
      maxWidth: "16ch"
    }
  }, "Tr\xEAs passos, do pedido ao arquivo."), /*#__PURE__*/React.createElement(S.Button, {
    variant: "primary",
    iconRight: "arrow-right"
  }, "Ver demonstra\xE7\xE3o")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "1px",
      background: "rgba(255,255,255,.12)",
      border: "1px solid rgba(255,255,255,.12)",
      borderRadius: "var(--radius-panel)",
      overflow: "hidden"
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: "var(--ink-950)",
      padding: "32px 28px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "900 40px/1 var(--font-display)",
      letterSpacing: "-0.03em",
      color: "var(--atto-yellow)"
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "600 20px/1.3 var(--font-sans)",
      color: "var(--white)",
      margin: "18px 0 8px"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "rgba(255,255,255,.66)"
    }
  }, s.d))))));
}
Object.assign(window, {
  SiteHeader,
  Hero,
  Trust,
  Features,
  Steps
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
