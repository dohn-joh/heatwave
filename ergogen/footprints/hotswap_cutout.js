module.exports = {
  params: {
    designator: 'GL',
    side: 'F',

  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "hotswap_cutout"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Drawings on ${p.side}.SilkS
fp.push(`(fp_line (start ${(flip ? 4.7 : -4.7)} -7.3) (end ${(flip ? 4.7 : -4.7)} -4.6) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? 4.7 : -4.7)} -4.6) (end ${(flip ? 2.8 : -2.8)} -4.6) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? 2.8 : -2.8)} -7.325739) (end ${(flip ? 2.8 : -2.8)} -7.3) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? 2.8 : -2.8)} -7.3) (end ${(flip ? 4.7 : -4.7)} -7.3) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? 2.8 : -2.8)} -4.6) (end ${(flip ? 2.8 : -2.8)} -4.574261) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? 2.565688 : -2.565688)} -4.008582) (end ${(flip ? 1.891417 : -1.891417)} -3.334311) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? 1.891418 : -1.891418)} -8.565688) (end ${(flip ? 2.565689 : -2.565689)} -7.891417) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? 1.325739 : -1.325739)} -3.1) (end ${(flip ? -0.509686 : 0.509686)} -3.1) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? -1.42574 : 1.42574)} -8.8) (end ${(flip ? 1.325739 : -1.325739)} -8.8) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? -2.665658 : 2.665658)} -7.891448) (end ${(flip ? -1.991418 : 1.991418)} -8.565688) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? -2.9 : 2.9)} -7.174644) (end ${(flip ? -2.9 : 2.9)} -7.332511) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? -3.2 : 3.2)} -0.95) (end ${(flip ? -6.5 : 6.5)} -0.95) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? -6.5 : 6.5)} -6.55) (end ${(flip ? -3.6 : 3.6)} -6.55) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? -7.8 : 7.8)} -5.1) (end ${(flip ? -7.8 : 7.8)} -5.25) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? -7.8 : 7.8)} -2.4) (end ${(flip ? -9.7 : 9.7)} -2.4) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? -7.8 : 7.8)} -2.25) (end ${(flip ? -7.8 : 7.8)} -2.4) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? -9.7 : 9.7)} -5.1) (end ${(flip ? -7.8 : 7.8)} -5.1) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_line (start ${(flip ? -9.7 : 9.7)} -2.4) (end ${(flip ? -9.7 : 9.7)} -5.1) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? 2.000009 : -2.000009)} -7.325739) (end ${(flip ? 2.8 : -2.8)} -7.325739) (angle 45) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? 2.000009 : -2.000009)} -4.574261) (end ${(flip ? 2.565688 : -2.565688)} -4.008582) (angle 45) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? 1.325739 : -1.325739)} -8.000009) (end ${(flip ? 1.891418 : -1.891418)} -8.565688) (angle 45) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? 1.325739 : -1.325739)} -3.899991) (end ${(flip ? 1.325739 : -1.325739)} -3.1) (angle 45) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? -0.233343 : 0.233343)} -1.514511) (end ${(flip ? -0.509686 : 0.509686)} -3.1) (angle 62.5792) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? -1.42574 : 1.42574)} -8.00001) (end ${(flip ? -1.42574 : 1.42574)} -8.8) (angle 45) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? -2.09984 : 2.09984)} -7.32563) (end ${(flip ? -2.665658 : 2.665658)} -7.891448) (angle 44.5072) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? -3.2 : 3.2)} -2.4518) (end ${(flip ? -3.2 : 3.2)} -0.95) (angle 72.4667) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? -3.59997 : 3.59997)} -7.25448) (end ${(flip ? -3.6 : 3.6)} -6.55) (angle 96.4858) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? -6.5 : 6.5)} -5.25) (end ${(flip ? -6.5 : 6.5)} -6.55) (angle 90) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? -6.5 : 6.5)} -2.25) (end ${(flip ? -7.8 : 7.8)} -2.25) (angle 90) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 -0.5 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "hotswap_cutout" (at 0 1 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}


