module.exports = {
  params: {
    designator: 'GL',
    side: 'F',

  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "hotswap_v2_pin_cutout"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Drawings on F.SilkS
fp.push(`(fp_line (start ${(flip ? 4.7 : -4.7)} -7.3) (end ${(flip ? 2.8 : -2.8)} -7.3) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 4.7 : -4.7)} -4.6) (end ${(flip ? 4.7 : -4.7)} -7.3) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 2.8 : -2.8)} -7.3) (end ${(flip ? 2.8 : -2.8)} -7.325739) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 2.8 : -2.8)} -4.6) (end ${(flip ? 4.7 : -4.7)} -4.6) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 2.8 : -2.8)} -4.574261) (end ${(flip ? 2.8 : -2.8)} -4.6) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 2.565688 : -2.565688)} -7.891418) (end ${(flip ? 1.891418 : -1.891418)} -8.565688) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.891418 : -1.891418)} -3.334312) (end ${(flip ? 2.565688 : -2.565688)} -4.008582) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.325739 : -1.325739)} -8.8) (end ${(flip ? -1.42574 : 1.42574)} -8.8) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.03923 : -1.03923)} -3.1) (end ${(flip ? 1.325739 : -1.325739)} -3.1) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -1.991418 : 1.991418)} -8.565688) (end ${(flip ? -2.665658 : 2.665658)} -7.891448) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -2.9 : 2.9)} -7.332511) (end ${(flip ? -2.9 : 2.9)} -7.174893) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -3.6 : 3.6)} -6.55) (end ${(flip ? -6.5 : 6.5)} -6.55) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -6.5 : 6.5)} -0.95) (end ${(flip ? -3.2 : 3.2)} -0.95) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -7.8 : 7.8)} -5.25) (end ${(flip ? -7.8 : 7.8)} -5.1) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -7.8 : 7.8)} -5.1) (end ${(flip ? -9.7 : 9.7)} -5.1) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -7.8 : 7.8)} -2.4) (end ${(flip ? -7.8 : 7.8)} -2.25) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -9.7 : 9.7)} -5.1) (end ${(flip ? -9.7 : 9.7)} -2.4) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -9.7 : 9.7)} -2.4) (end ${(flip ? -7.8 : 7.8)} -2.4) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? 2 : -2)} -7.325737) (end ${(flip ? 2.8 : -2.8)} -7.325739) (angle 45) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? 2 : -2)} -4.574263) (end ${(flip ? 2.565688 : -2.565688)} -4.008582) (angle 45) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? 1.325737 : -1.325737)} -8) (end ${(flip ? 1.891418 : -1.891418)} -8.565688) (angle 45) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? 1.325737 : -1.325737)} -3.9) (end ${(flip ? 1.325739 : -1.325739)} -3.1) (angle 45) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? 1.139157 : -1.139157)} -2.85) (end ${(flip ? 1.03923 : -1.03923)} -3.1) (angle 136.426) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -1.42574 : 1.42574)} -8) (end ${(flip ? -1.42574 : 1.42574)} -8.8) (angle 45) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -2.09987 : 2.09987)} -7.32564) (end ${(flip ? -2.665658 : 2.665658)} -7.891448) (angle 45) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 0 0) (end ${(flip ? -2.736724 : 2.736724)} -0.591895) (angle 260.4171) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -3.05528 : 3.05528)} -0.63437) (end ${(flip ? -2.736724 : 2.736724)} -0.591895) (angle 102.1371) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -3.2 : 3.2)} -2.4517) (end ${(flip ? -3.2 : 3.2)} -0.95) (angle 4.5553) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -3.59997 : 3.59997)} -7.25448) (end ${(flip ? -3.6 : 3.6)} -6.55) (angle 83.5157) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -6.5 : 6.5)} -5.25) (end ${(flip ? -6.5 : 6.5)} -6.55) (angle 90) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -6.5 : 6.5)} -2.25) (end ${(flip ? -7.8 : 7.8)} -2.25) (angle 90) (stroke (width 0.0001) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 -0.5 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "hotswap_v2_pin_cutout" (at 0 1 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}


