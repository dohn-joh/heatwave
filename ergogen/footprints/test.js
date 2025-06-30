module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: 'AAA' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "test"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole circle (at 0 0 ${p.r}) (size 0.6 0.6) (drill 0.3) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P1})`);
fp.push(`(pad "1" smd roundrect (at ${(flip ? -6.35 : 6.35)} 0 ${p.r}) (size 1.905 1.27) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.15) (thermal_bridge_angle 45)  ${p.P1})`);

// Drawings on F.Cu

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 -0.5 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "test" (at 0 1 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    fp.push(`(segment (start ${(flip ? -0 : 0)} 0) (end ${(flip ? -6.35 : 6.35)} 0) (width 0.1) (layer "${(flip ? "B.Cu" : "F.Cu")}") (net 1))`);
    return fp.join('\n');
  }
}


