"use client";

import Image from "next/image";
import { useMemo, useState, useCallback, useEffect, useRef } from "react";
import Line from "@/assets/Line.png";

const PARENT_ROW_HEIGHT = 56; // h-14
const BOTTOM_BAR_HEIGHT = 36;

const parentItems = [
    { key: "merch", label: "Merchandise" },
    { key: "drinks", label: "Đồ uống" },
    { key: "food", label: "Đồ ăn" },
];

const childItemsByParent = {
    merch: ["Cốc bã cafe", "Pin cài áo", "Túi", "Sticker"],
    drinks: [
        "Matcha",
        "Espresso",
        "Vietnamese coffee",
        "Cold brew",
        "Cold infuse",
        "Tea&kombucha",
        "V60",
        "Chocolate",
        "Alcohol",
    ],
    food: ["Bánh mặn", "Bánh ngọt", "Snack", "Seasonal"],
};

/** Catalog architecture: parent -> child -> array of products (placeholder data) */
const catalog = {
    drinks: {
        Matcha: mkItems("Matcha"),
        Espresso: mkItems("Espresso"),
        "Vietnamese coffee": mkItems("Vietnamese coffee"),
        "Cold brew": mkItems("Cold brew"),
        "Cold infuse": mkItems("Cold infuse"),
        "Tea&kombucha": mkItems("Tea & Kombucha"),
        V60: mkItems("V60"),
        Chocolate: mkItems("Chocolate"),
        Alcohol: mkItems("Alcohol"),
    },
    food: {
        "Bánh mặn": mkItems("Bánh mặn"),
        "Bánh ngọt": mkItems("Bánh ngọt"),
        Snack: mkItems("Snack"),
        Seasonal: mkItems("Seasonal Food"),
    },
    merch: {
        "Cốc bã cafe": mkItems("Cốc bã cafe"),
        "Pin cài áo": mkItems("Pin cài áo"),
        Túi: mkItems("Túi"),
        Sticker: mkItems("Sticker"),
    },
};

function mkItems(prefix) {
    return Array.from({ length: 9 }, (_, i) => ({
        id: `${prefix}-${i + 1}`,
        name: `${prefix} ${i + 1}`,
        price: 40,
        currency: "VND",
        note: "Mô tả sản phẩm",
        imageSrc: null, // wire real images later
    }));
}

export default function BottomMegaMenu() {
    const [activeParent, setActiveParent] = useState("drinks");
    const [activeChild, setActiveChild] = useState(
        childItemsByParent["drinks"][0]
    );

    const [hoveringParent, setHoveringParent] = useState(false);
    const [hoveringChild, setHoveringChild] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [bottomBarDismissed, setBottomBarDismissed] = useState(false);

    // keep activeChild in sync with parent
    useEffect(() => {
        const first = childItemsByParent[activeParent]?.[0];
        if (first) setActiveChild(first);
    }, [activeParent]);

    const slideClass = isOpen
        ? "translate-y-0"
        : `translate-y-[calc(100%-${PARENT_ROW_HEIGHT}px)]`;

    const bgClass = useMemo(() => {
        if (isOpen) return "bg-black/90";
        if (hoveringParent || hoveringChild) return "bg-black/80";
        return "bg-black/20";
    }, [isOpen, hoveringParent, hoveringChild]);

    const children = childItemsByParent[activeParent] ?? [];
    const gridItems =
        catalog?.[activeParent]?.[activeChild] ?? []; // ← products for presentation area

    const showBottomPullBar = !bottomBarDismissed && !isOpen;
    const highlightBar = hoveringParent || hoveringChild; // ← same trigger as black background

    const raiseMenu = useCallback(() => {
        setIsOpen(true);
        setBottomBarDismissed(true);
    }, []);

    const collapseMenu = useCallback(() => {
        setIsOpen(false);
        setBottomBarDismissed(false); // re-show bar
    }, []);

    const handleParentEnter = useCallback(() => setHoveringParent(true), []);
    const handleParentLeave = useCallback(() => setHoveringParent(false), []);
    const handleChildEnter = useCallback(() => setHoveringChild(true), []);
    const handleChildLeave = useCallback(() => setHoveringChild(false), []);

    return (
        <div
            className={[
                "fixed bottom-0 left-0 w-full z-40 pointer-events-auto",
                "transition-transform duration-300 ease-out",
                slideClass,
            ].join(" ")}
            onMouseLeave={() => {
                setHoveringParent(false);
                setHoveringChild(false);
            }}
        >
            <div
                className={[
                    "shadow-[0_-8px_30px_rgba(0,0,0,0.35)]",
                    "transition-colors duration-300",
                    "relative",
                    bgClass,
                ].join(" ")}
            >
                {isOpen && <CollapseHandle onClick={collapseMenu} />}

                {/* Parent: activates on hover */}
                <ParentList
                    items={parentItems}
                    activeKey={activeParent}
                    onSelect={setActiveParent}
                    onHoverStart={handleParentEnter}
                    onHoverEnd={handleParentLeave}
                    dividerSrc={Line}
                    dividerWidth={1}
                    dividerHeight={0}
                />

                {/* Child: activates on hover; extra pb if bar is visible */}
                <ChildList
                    items={children}
                    activeItem={activeChild}
                    onItemHover={setActiveChild}
                    onHoverStart={handleChildEnter}
                    onHoverEnd={handleChildLeave}
                    padBottom={showBottomPullBar}
                    bottomBarHeight={BOTTOM_BAR_HEIGHT}
                />

                <MenuContent isOpen={isOpen}>
                    <ProductGrid items={gridItems} />
                </MenuContent>
            </div>

            {showBottomPullBar && (
                <BottomPullBar
                    height={BOTTOM_BAR_HEIGHT}
                    onActivate={raiseMenu}
                    highlight={highlightBar} // ← turn white when bg darkens
                />
            )}
        </div>
    );
}

/* -------------------- Pieces -------------------- */

function ParentList({
    items = [],
    activeKey,
    onSelect = () => { },
    onHoverStart = () => { },
    onHoverEnd = () => { },
    dividerSrc,
    dividerAlt = "divider",
    dividerWidth = 5,
    dividerHeight = 3,
    dividerClassName = "",
    containerClassName = "",
    itemClassName = "",
}) {
    return (
        <div
            className={["h-14 w-full flex items-center pl-35 select-none", containerClassName].join(
                " "
            )}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
        >
            {items.map((it, idx) => (
                <div key={it.key} className="flex items-center">
                    <button
                        onMouseEnter={() => onSelect(it.key)} // hover activates
                        onClick={() => onSelect(it.key)}       // touch fallback
                        aria-pressed={activeKey === it.key}
                        className={[
                            "text-white/85 hover:text-white font-semibold tracking-wide cursor-pointer",
                            "text-lg md:text-xl transition-colors",
                            activeKey === it.key ? "opacity-100" : "opacity-85",
                            itemClassName,
                        ].join(" ")}
                    >
                        {it.label}
                    </button>

                    {idx !== items.length - 1 && (
                        <>
                            {dividerSrc ? (
                                <span
                                    className={[
                                        "mx-4 md:mx-6 inline-flex items-center",
                                        "pointer-events-none",
                                        dividerClassName,
                                    ].join(" ")}
                                    aria-hidden="true"
                                >
                                    <Image
                                        src={dividerSrc}
                                        alt={dividerAlt}
                                        width={dividerWidth}
                                        height={dividerHeight}
                                        priority={false}
                                    />
                                </span>
                            ) : (
                                <span className="mx-4 md:mx-6 text-white/40" aria-hidden="true">
                                    |
                                </span>
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

function ChildList({
    items,
    activeItem,
    onItemHover = () => { },
    onHoverStart,
    onHoverEnd,
    padBottom,
    bottomBarHeight,
}) {
    const extraPB = padBottom ? bottomBarHeight + 8 : 0;

    return (
        <div
            className="h-14 flex items-center pl-35 overflow-x-auto"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            style={{ paddingBottom: extraPB }}
        >
            <ul className="flex gap-8 min-w-max">
                {items.map((label) => {
                    const isActive = activeItem === label;
                    return (
                        <li key={label}>
                            <button
                                type="button"
                                onMouseEnter={() => onItemHover(label)} // hover activates child
                                className={[
                                    "whitespace-nowrap transition-colors",
                                    isActive ? "text-white" : "text-white/85 hover:text-white",
                                ].join(" ")}
                            >
                                {label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

function MenuContent({ isOpen, children }) {
    return (
        <div
            className={[
                "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
                isOpen ? "max-h-[62vh] opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
        >
            <div className="pl-35 pr-6 md:pr-10 py-8">{children}</div>
        </div>
    );
}

function ProductGrid({ items }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8 md:gap-x-16">
            {items.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}

function ProductCard({ product }) {
    return (
        <div className="w-full">
            <div
                className="mx-auto w-[150px] h-[150px] md:w-[180px] md:h-[180px]
                   rounded-full bg-white/10 ring-1 ring-white/10
                   shadow-lg shadow-black/40"
            />
            <div className="mt-4 text-white">
                <div className="text-lg font-semibold">{product.name}</div>
                <div className="mt-1 flex items-center text-sm text-white/85">
                    <span>{product.price}</span>
                    <span className="mx-2 flex-1 border-b border-white/30 translate-y-[2px]" />
                    <span className="tracking-wide">{product.currency}</span>
                </div>
                <div className="mt-1 text-xs text-white/70">{product.note}</div>
            </div>
        </div>
    );
}

/* -------------------- Arrow Components -------------------- */

// Full-width bottom pull bar: transparent by default; turns white when
// parent/child hover OR when directly hovered; opens once.
function BottomPullBar({ onActivate, height = 36, highlight = false }) {
    const timerRef = useRef(null);

    const handleEnter = () => {
        // brief delay so the white "light up" is visible before opening
        timerRef.current = setTimeout(() => onActivate?.(), 120);
    };
    const clearTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };
    const handleImmediate = () => {
        clearTimer();
        onActivate?.();
    };

    const bgClass = highlight ? "bg-black/20" : "bg-transparent hover:bg-black/80";

    return (
        <div
            className="absolute left-0 bottom-0 w-full z-50"
            style={{ height }}
            onMouseEnter={handleEnter}
            onMouseLeave={clearTimer}
            onPointerDown={handleImmediate}
            onClick={handleImmediate}
            aria-hidden="false"
        >
            <div className={`w-full h-full ${bgClass} transition flex items-center justify-center`}>
                <div className="flex flex-col items-center justify-center gap-0.5 pointer-events-none opacity-80 transition">
                    <ChevronDownThin className="w-6 h-3" />
                    <ChevronDownThin className="w-6 h-3 -mt-1" />
                </div>
            </div>
        </div>
    );
}

function CollapseHandle({ onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="absolute -top-9 left-1/2 -translate-x-1/2 z-50
                 w-20 h-8 rounded-full bg-white/15 hover:bg-white/25
                 transition flex flex-col items-center justify-center gap-0.5
                 outline-none"
            aria-label="Collapse menu"
        >
            <ChevronUpThin className="w-5 h-3" />
            <ChevronUpThin className="w-5 h-3 -mt-1" />
        </button>
    );
}

function ChevronDownThin({ className = "" }) {
    return (
        <svg viewBox="0 0 24 12" className={className} fill="none" aria-hidden="true">
            <path d="M2 2L12 10L22 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function ChevronUpThin({ className = "" }) {
    return (
        <svg viewBox="0 0 24 12" className={className} fill="none" aria-hidden="true">
            <path d="M2 10L12 2L22 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}
