// "use client";

// import { motion } from "framer-motion";

// const badges = [
//   { label: "Kamino", icon: "K" },
//   { label: "Jupiter", icon: "J" },
//   { label: "12.4% APY", icon: null },
//   { label: "Non-custodial", icon: null },
// ];

// const orbitAngles = [0, 90, 180, 270];

// function BadgeChip({
//   label,
//   icon,
//   index,
// }: {
//   label: string;
//   icon: string | null;
//   index: number;
// }) {
//   const angle = orbitAngles[index];
//   const rad = (angle * Math.PI) / 180;
//   const radiusX = 180;
//   const radiusY = 140;
//   const x = Math.cos(rad) * radiusX;
//   const y = Math.sin(rad) * radiusY;

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
//       className="absolute glass-strong rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
//       style={{
//         top: `calc(50% + ${y}px)`,
//         left: `calc(50% + ${x}px)`,
//         transform: "translate(-50%, -50%)",
//         color: icon ? "var(--color-primary)" : "var(--color-text-secondary)",
//         animation: `badgeFloat${index % 2 === 0 ? "A" : "B"} ${6 + index}s ease-in-out infinite alternate`,
//       }}
//     >
//       {icon && (
//         <span
//           className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
//           style={{
//             background: "var(--color-primary-glow)",
//             color: "var(--color-primary)",
//           }}
//         >
//           {icon}
//         </span>
//       )}
//       {label}
//     </motion.div>
//   );
// }

// export function DashboardMockup() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, rotateY: 10, rotateX: -5 }}
//       animate={{ opacity: 1, rotateY: 5, rotateX: 3 }}
//       transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//       className="relative w-full max-w-[480px]"
//       style={{ perspective: "1000px" }}
//     >
//       {/* Floating badges */}
//       <div className="hidden lg:block absolute inset-0 z-10">
//         {badges.map((b, i) => (
//           <BadgeChip key={b.label} label={b.label} icon={b.icon} index={i} />
//         ))}
//       </div>

//       {/* Main card */}
//       <div
//         className="glass-strong rounded-2xl p-6 relative overflow-hidden"
//         style={{
//           transform: "perspective(1000px) rotateY(5deg) rotateX(3deg)",
//           boxShadow: "var(--shadow-card-hover), var(--shadow-glow)",
//           animation: "cardFloat 8s ease-in-out infinite alternate",
//         }}
//       >
//         {/* Glow effect */}
//         <div
//           className="absolute top-0 left-0 right-0 h-px"
//           style={{
//             background:
//               "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
//           }}
//         />

//         {/* Header */}
//         <div className="flex items-center justify-between mb-5">
//           <div className="flex items-center gap-2">
//             <div
//               className="w-2 h-2 rounded-full"
//               style={{ background: "#4ADE80" }}
//             />
//             <span
//               className="text-xs font-medium uppercase tracking-wider"
//               style={{
//                 color: "var(--color-text-muted)",
//                 fontFamily: "var(--font-mono)",
//               }}
//             >
//               Live borrow
//             </span>
//           </div>
//           <span
//             className="text-xs px-2 py-0.5 rounded-full"
//             style={{
//               background: "var(--color-primary-glow)",
//               color: "var(--color-primary)",
//               fontFamily: "var(--font-mono)",
//             }}
//           >
//             Best rate
//           </span>
//         </div>

//         {/* Flow steps */}
//         <div className="space-y-4">
//           {/* Collateral */}
//           <div
//             className="rounded-xl p-4"
//             style={{
//               background: "var(--color-bg-card)",
//               border: "1px solid var(--color-border)",
//             }}
//           >
//             <div
//               className="text-[10px] uppercase tracking-wider mb-2"
//               style={{
//                 color: "var(--color-text-muted)",
//                 fontFamily: "var(--font-mono)",
//               }}
//             >
//               Collateral
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <div
//                   className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
//                   style={{
//                     background: "linear-gradient(135deg, #9945FF, #14F195)",
//                     color: "#fff",
//                   }}
//                 >
//                   S
//                 </div>
//                 <div>
//                   <div
//                     className="text-sm font-medium"
//                     style={{ color: "var(--color-text)" }}
//                   >
//                     10.0 SOL
//                   </div>
//                   <div
//                     className="text-[11px]"
//                     style={{ color: "var(--color-text-muted)" }}
//                   >
//                     $1,700
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="text-xs px-2 py-1 rounded-lg"
//                 style={{
//                   background: "rgba(74, 222, 128, 0.1)",
//                   color: "#4ADE80",
//                 }}
//               >
//                 Active
//               </div>
//             </div>
//           </div>

//           {/* Arrow */}
//           <div className="flex justify-center">
//             <div
//               className="w-px h-4"
//               style={{ background: "var(--color-border-strong)" }}
//             />
//           </div>

//           {/* Borrow */}
//           <div
//             className="rounded-xl p-4"
//             style={{
//               background: "var(--color-bg-card)",
//               border: "1px solid var(--color-border)",
//             }}
//           >
//             <div
//               className="text-[10px] uppercase tracking-wider mb-2"
//               style={{
//                 color: "var(--color-text-muted)",
//                 fontFamily: "var(--font-mono)",
//               }}
//             >
//               Borrow
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <div
//                   className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
//                   style={{
//                     background: "var(--color-primary-glow)",
//                     color: "var(--color-primary)",
//                   }}
//                 >
//                   $
//                 </div>
//                 <div>
//                   <div
//                     className="text-sm font-medium"
//                     style={{ color: "var(--color-text)" }}
//                   >
//                     $1,190
//                   </div>
//                   <div
//                     className="text-[11px]"
//                     style={{ color: "var(--color-text-muted)" }}
//                   >
//                     70% LTV
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="text-xs px-2 py-1 rounded-lg"
//                 style={{
//                   background: "var(--color-primary-glow)",
//                   color: "var(--color-primary)",
//                 }}
//               >
//                 12.4% APR
//               </div>
//             </div>
//           </div>

//           {/* Arrow */}
//           <div className="flex justify-center">
//             <div
//               className="w-px h-4"
//               style={{ background: "var(--color-border-strong)" }}
//             />
//           </div>

//           {/* Cash out */}
//           <div
//             className="rounded-xl p-4"
//             style={{
//               background: "var(--color-bg-card)",
//               border: "1px solid var(--color-border)",
//             }}
//           >
//             <div
//               className="text-[10px] uppercase tracking-wider mb-2"
//               style={{
//                 color: "var(--color-text-muted)",
//                 fontFamily: "var(--font-mono)",
//               }}
//             >
//               Cash out to
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <div
//                   className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 107, 107, 0.05))",
//                     color: "var(--color-accent)",
//                   }}
//                 >
//                   🏦
//                 </div>
//                 <div>
//                   <div
//                     className="text-sm font-medium"
//                     style={{ color: "var(--color-text)" }}
//                   >
//                     M-Pesa
//                   </div>
//                   <div
//                     className="text-[11px]"
//                     style={{ color: "var(--color-text-muted)" }}
//                   >
//                     KES 153,500
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="text-xs px-2 py-1 rounded-lg"
//                 style={{
//                   background: "rgba(255, 107, 107, 0.1)",
//                   color: "var(--color-accent)",
//                 }}
//               >
//                 Instant
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom glow */}
//         <div
//           className="absolute bottom-0 left-0 right-0 h-px"
//           style={{
//             background:
//               "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
//             opacity: 0.5,
//           }}
//         />
//       </div>

//       <style jsx>{`
//         @keyframes cardFloat {
//           0% {
//             transform: perspective(1000px) rotateY(5deg) rotateX(3deg)
//               translateY(0);
//           }
//           100% {
//             transform: perspective(1000px) rotateY(5deg) rotateX(3deg)
//               translateY(-8px);
//           }
//         }
//         @keyframes badgeFloatA {
//           0% {
//             transform: translate(-50%, -50%) translateY(0);
//           }
//           100% {
//             transform: translate(-50%, -50%) translateY(-6px);
//           }
//         }
//         @keyframes badgeFloatB {
//           0% {
//             transform: translate(-50%, -50%) translateY(0);
//           }
//           100% {
//             transform: translate(-50%, -50%) translateY(6px);
//           }
//         }
//       `}</style>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";

// Each badge is anchored to a corner/edge zone outside the card,
// instead of orbiting on a fixed-radius circle that assumed a
// perfect square card. This scales correctly regardless of the
// card's actual rendered height.
const badges = [
  {
    label: "Kamino",
    icon: "K",
    style: { top: "-6%", left: "-8%" },
    floatDir: "A" as const,
  },
  {
    label: "Jupiter",
    icon: "J",
    style: { top: "28%", right: "-10%" },
    floatDir: "B" as const,
  },
  {
    label: "12.4% APY",
    icon: null,
    style: { top: "58%", right: "-12%" },
    floatDir: "A" as const,
  },
  {
    label: "Non-custodial",
    icon: null,
    style: { bottom: "-5%", left: "-6%" },
    floatDir: "B" as const,
  },
];

function BadgeChip({
  label,
  icon,
  style,
  floatDir,
  index,
}: {
  label: string;
  icon: string | null;
  style: React.CSSProperties;
  floatDir: "A" | "B";
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
      className="absolute glass-strong rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
      style={{
        ...style,
        color: icon ? "var(--color-primary)" : "var(--color-text-secondary)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
        backdropFilter: "blur(12px)",
        animation: `badgeFloat${floatDir} ${6 + index}s ease-in-out infinite alternate`,
      }}
    >
      {icon && (
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
          style={{
            background: "var(--color-primary-glow)",
            color: "var(--color-primary)",
          }}
        >
          {icon}
        </span>
      )}
      {label}
    </motion.div>
  );
}

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 10, rotateX: -5 }}
      animate={{ opacity: 1, rotateY: 5, rotateX: 3 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      className="relative w-full max-w-[480px] mx-auto"
      style={{ perspective: "1000px" }}
    >
      {/* Floating badges — positioned relative to this wrapper,
          which is the same size as the card, so "-8%" etc. always
          lands outside the card edge rather than on top of content */}
      <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none">
        {badges.map((b, i) => (
          <BadgeChip
            key={b.label}
            label={b.label}
            icon={b.icon}
            style={b.style}
            floatDir={b.floatDir}
            index={i}
          />
        ))}
      </div>

      {/* Main card */}
      <div
        className="glass-strong rounded-2xl p-6 relative overflow-hidden"
        style={{
          transform: "perspective(1000px) rotateY(5deg) rotateX(3deg)",
          boxShadow: "var(--shadow-card-hover), var(--shadow-glow)",
          animation: "cardFloat 8s ease-in-out infinite alternate",
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
          }}
        />

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#4ADE80" }}
            />
            <span
              className="text-xs font-medium uppercase tracking-wider"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Live borrow
            </span>
          </div>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              background: "var(--color-primary-glow)",
              color: "var(--color-primary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Best rate
          </span>
        </div>

        {/* Flow steps */}
        <div className="space-y-4">
          {/* Collateral */}
          <div
            className="rounded-xl p-4"
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="text-[10px] uppercase tracking-wider mb-2"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Collateral
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: "linear-gradient(135deg, #9945FF, #14F195)",
                    color: "#fff",
                  }}
                >
                  S
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    10.0 SOL
                  </div>
                  <div
                    className="text-[11px]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    $1,700
                  </div>
                </div>
              </div>
              <div
                className="text-xs px-2 py-1 rounded-lg"
                style={{
                  background: "rgba(74, 222, 128, 0.1)",
                  color: "#4ADE80",
                }}
              >
                Active
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div
              className="w-px h-4"
              style={{ background: "var(--color-border-strong)" }}
            />
          </div>

          {/* Borrow */}
          {/* <div
            className="rounded-xl p-4"
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="text-[10px] uppercase tracking-wider mb-2"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Borrow
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: "var(--color-primary-glow)",
                    color: "var(--color-primary)",
                  }}
                >
                  $
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    $1,190
                  </div>
                  <div
                    className="text-[11px]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    70% LTV
                  </div>
                </div>
              </div>
              <div
                className="text-xs px-2 py-1 rounded-lg"
                style={{
                  background: "var(--color-primary-glow)",
                  color: "var(--color-primary)",
                }}
              >
                12.4% APR
              </div>
            </div>
          </div> */}

          {/* Arrow */}
          <div className="flex justify-center">
            <div
              className="w-px h-4"
              style={{ background: "var(--color-border-strong)" }}
            />
          </div>

          {/* Cash out */}
          <div
            className="rounded-xl p-4"
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div
              className="text-[10px] uppercase tracking-wider mb-2"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Cash out to
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 107, 107, 0.05))",
                    color: "var(--color-accent)",
                  }}
                >
                  🏦
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    M-Pesa
                  </div>
                  <div
                    className="text-[11px]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    KES 153,500
                  </div>
                </div>
              </div>
              <div
                className="text-xs px-2 py-1 rounded-lg"
                style={{
                  background: "rgba(255, 107, 107, 0.1)",
                  color: "var(--color-accent)",
                }}
              >
                Instant
              </div>
            </div>
          </div>
        </div>

        {/* Bottom glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
            opacity: 0.5,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes cardFloat {
          0% {
            transform: perspective(1000px) rotateY(5deg) rotateX(3deg)
              translateY(0);
          }
          100% {
            transform: perspective(1000px) rotateY(5deg) rotateX(3deg)
              translateY(-8px);
          }
        }
        @keyframes badgeFloatA {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-6px);
          }
        }
        @keyframes badgeFloatB {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(6px);
          }
        }
      `}</style>
    </motion.div>
  );
}