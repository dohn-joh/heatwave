// author: dohn-joh
// based on CPG135001S30 datasheet: https://www.kailhswitch.com/Content/upload/pdf/202115927/CPG135001S30-data-sheet.pdf

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
fp.push(`(fp_line (start ${(flip ? 4.7 : -4.7)} -7.3) (end ${(flip ? 4.7 : -4.7)} -4.6) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 4.7 : -4.7)} -4.6) (end ${(flip ? 2.8 : -2.8)} -4.6) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 2.8 : -2.8)} -7.325736) (end ${(flip ? 2.8 : -2.8)} -7.3) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 2.8 : -2.8)} -7.3) (end ${(flip ? 4.7 : -4.7)} -7.3) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 2.8 : -2.8)} -4.6) (end ${(flip ? 2.8 : -2.8)} -4.574264) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 2.565685 : -2.565685)} -4.008579) (end ${(flip ? 1.891421 : -1.891421)} -3.334315) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.891421 : -1.891421)} -8.565685) (end ${(flip ? 2.565685 : -2.565685)} -7.891421) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.325736 : -1.325736)} -3.1) (end ${(flip ? -0.509691 : 0.509691)} -3.1) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -1.425736 : 1.425736)} -8.8) (end ${(flip ? 1.325736 : -1.325736)} -8.8) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -2.665685 : 2.665685)} -7.891421) (end ${(flip ? -1.991421 : 1.991421)} -8.565685) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -2.9 : 2.9)} -7.174644) (end ${(flip ? -2.9 : 2.9)} -7.325736) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -3.2 : 3.2)} -0.95) (end ${(flip ? -6.5 : 6.5)} -0.95) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -6.5 : 6.5)} -6.55) (end ${(flip ? -3.6 : 3.6)} -6.55) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -7.8 : 7.8)} -5.1) (end ${(flip ? -7.8 : 7.8)} -5.25) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -7.8 : 7.8)} -2.4) (end ${(flip ? -9.7 : 9.7)} -2.4) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -7.8 : 7.8)} -2.25) (end ${(flip ? -7.8 : 7.8)} -2.4) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -9.7 : 9.7)} -5.1) (end ${(flip ? -7.8 : 7.8)} -5.1) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -9.7 : 9.7)} -2.4) (end ${(flip ? -9.7 : 9.7)} -5.1) (stroke (width 0.15) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? 2.000009 : -2.000009)} -7.325739) (end ${(flip ? 2.8 : -2.8)} -7.325736) (angle 45) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? 2.000009 : -2.000009)} -4.574261) (end ${(flip ? 2.565685 : -2.565685)} -4.008579) (angle 45) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? 1.325739 : -1.325739)} -8.000009) (end ${(flip ? 1.891421 : -1.891421)} -8.565685) (angle 45) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? 1.325739 : -1.325739)} -3.899991) (end ${(flip ? 1.325736 : -1.325736)} -3.1) (angle 45) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? -0.23334 : 0.23334)} -1.51451) (end ${(flip ? -0.509691 : 0.509691)} -3.1) (angle 62.5789) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? -1.42574 : 1.42574)} -8.00001) (end ${(flip ? -1.425736 : 1.425736)} -8.8) (angle 45) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? -2.10001 : 2.10001)} -7.32574) (end ${(flip ? -2.665685 : 2.665685)} -7.891421) (angle 45) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? -3.2 : 3.2)} -2.4518) (end ${(flip ? -3.2 : 3.2)} -0.95) (angle 72.4667) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
fp.push(`(fp_arc (start ${(flip ? -3.6 : 3.6)} -7.25454) (end ${(flip ? -3.6 : 3.6)} -6.55) (angle 83.4886) (stroke (width 0.15) (type default)) (layer "${p.side}.SilkS") )`);
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
