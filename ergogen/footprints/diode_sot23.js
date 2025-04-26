// based on nexperia datasheet: https://assets.nexperia.com/documents/data-sheet/BAV70.pdf

module.exports = {
  params: {
    designator: 'D',
    side: 'F',
    pad_width: 0.7,
    pad_height: 0.6,
    from1: { type: 'net', value: undefined },
    from2: { type: 'net', value: undefined },
    to: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SOT-23"`);
fp.push(p.at);
fp.push(`(layer ${(flip ? "B" : "F")}.Cu)`);
fp.push(`(tags "SOT TO_SOT_SMD")`);
fp.push(`(attr smd)`);

fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);


// Pads
fp.push(`(pad "1" smd roundrect (at ${(flip ? 0.95 : -0.95)} 1 ${p.r}) (size ${p.pad_width} ${p.pad_height}) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.from1})`);
fp.push(`(pad "2" smd roundrect (at ${(flip ? -0.95 : 0.95)} 1 ${p.r}) (size ${p.pad_width} ${p.pad_height}) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.from2})`);
fp.push(`(pad "3" smd roundrect (at 0 -1 ${p.r}) (size ${p.pad_width} ${p.pad_height}) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.to})`);

// F.SilkS
fp.push(`(fp_line (start ${(flip ? 1.56 : -1.56)} -0.65) (end ${(flip ? 0.36 : -0.36)} -0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? 1.56 : -1.56)} 0.65) (end ${(flip ? 1.56 : -1.56)} -0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? 1.56 : -1.56)} 0.65) (end ${(flip ? 1.31 : -1.31)} 0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? -0.36 : 0.36)} -0.65) (end ${(flip ? -1.56 : 1.56)} -0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? -0.59 : 0.59)} 0.65) (end ${(flip ? 0.59 : -0.59)} 0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? -1.56 : 1.56)} 0.65) (end ${(flip ? -1.31 : 1.31)} 0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? -1.56 : 1.56)} 0.65) (end ${(flip ? -1.56 : 1.56)} -0.65) (stroke (width 0.12) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);

// F.CrtYd
fp.push(`(fp_rect (start ${(flip ? 1.65 : -1.65)} -1.5) (end ${(flip ? -1.65 : 1.65)} 1.5) (stroke (width 0.1) (type solid)) (fill no) (layer ${(flip ? "B.CrtYd" : "F.CrtYd")}))`);

fp.push(`(generator "pcbnew")`);
fp.push(`(generator_version "9.0")`);
fp.push(`(embedded_fonts no)`);
fp.push(`(model "\${KICAD9_3DMODEL_DIR}/Package_TO_SOT_SMD.3dshapes/SOT-23.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz -0 -0 ${(flip ? 90 : -90)})))`);

fp.push(`)`);

    return fp.join('\n');
  }
}

