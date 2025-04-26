// based on infused-kim's molex pico ez-mate connector footprint

module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    pad_1: { type: 'net', value: 'RAW' },
    pad_2: { type: 'net', value: 'GND' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "conn_molex_pico_front"`);
fp.push(p.at);
fp.push(`(layer ${(flip ? "B" : "F")}.Cu)`);
fp.push(`(attr smd)`);

fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);


// Pads
fp.push(`(pad "1" smd roundrect (at ${(flip ? 0.6 : -0.6)} -1.875 ${p.r}) (size 0.6 0.85) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.pad_1})`);
fp.push(`(pad "2" smd roundrect (at ${(flip ? -0.6 : 0.6)} -1.875 ${p.r}) (size 0.6 0.85) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25) ${p.pad_2})`);
fp.push(`(pad "MP" smd roundrect (at ${(flip ? 1.75 : -1.75)} 1.9 ${p.r}) (size 0.7 0.8) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25))`);
fp.push(`(pad "MP" smd roundrect (at ${(flip ? -1.75 : 1.75)} 1.9 ${p.r}) (size 0.7 0.8) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.25))`);

// F.SilkS
fp.push(`(fp_rect (start ${(flip ? 2.1 : -2.1)} -1.98) (end ${(flip ? -2.1 : 2.1)} 2.52) (stroke (width 0.15) (type default)) (fill no) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_text user "+" (at ${(flip ? 1.32 : -1.32)} -2.75 ${p.r + 0}) (unlocked yes) (layer ${(flip ? "B.SilkS" : "F.SilkS")}) (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);

// F.CrtYd
fp.push(`(fp_line (start ${(flip ? 2.6 : -2.6)} -2.8) (end ${(flip ? 2.6 : -2.6)} 3.02) (stroke (width 0.05) (type solid)) (layer ${(flip ? "B.CrtYd" : "F.CrtYd")}))`);
fp.push(`(fp_line (start ${(flip ? 2.6 : -2.6)} 3.02) (end ${(flip ? -2.6 : 2.6)} 3.02) (stroke (width 0.05) (type solid)) (layer ${(flip ? "B.CrtYd" : "F.CrtYd")}))`);
fp.push(`(fp_line (start ${(flip ? -2.6 : 2.6)} -2.8) (end ${(flip ? 2.6 : -2.6)} -2.8) (stroke (width 0.05) (type solid)) (layer ${(flip ? "B.CrtYd" : "F.CrtYd")}))`);
fp.push(`(fp_line (start ${(flip ? -2.6 : 2.6)} 3.02) (end ${(flip ? -2.6 : 2.6)} -2.8) (stroke (width 0.05) (type solid)) (layer ${(flip ? "B.CrtYd" : "F.CrtYd")}))`);

// F.Fab
fp.push(`(fp_line (start ${(flip ? 2.1 : -2.1)} -1.98) (end ${(flip ? 2.1 : -2.1)} 2.52) (stroke (width 0.1) (type solid)) (layer ${(flip ? "B.Fab" : "F.Fab")}))`);
fp.push(`(fp_line (start ${(flip ? 2.1 : -2.1)} -1.98) (end ${(flip ? -2.1 : 2.1)} -1.98) (stroke (width 0.1) (type solid)) (layer ${(flip ? "B.Fab" : "F.Fab")}))`);
fp.push(`(fp_line (start ${(flip ? 2.1 : -2.1)} 2.52) (end ${(flip ? 0.75 : -0.75)} 2.52) (stroke (width 0.1) (type solid)) (layer ${(flip ? "B.Fab" : "F.Fab")}))`);
fp.push(`(fp_line (start ${(flip ? 1.1 : -1.1)} -1.98) (end ${(flip ? 0.6 : -0.6)} -1.272893) (stroke (width 0.1) (type solid)) (layer ${(flip ? "B.Fab" : "F.Fab")}))`);
fp.push(`(fp_line (start ${(flip ? 0.75 : -0.75)} 2.52) (end ${(flip ? 0.45 : -0.45)} 2.02) (stroke (width 0.1) (type solid)) (layer ${(flip ? "B.Fab" : "F.Fab")}))`);
fp.push(`(fp_line (start ${(flip ? 0.6 : -0.6)} -1.272893) (end ${(flip ? 0.1 : -0.1)} -1.98) (stroke (width 0.1) (type solid)) (layer ${(flip ? "B.Fab" : "F.Fab")}))`);
fp.push(`(fp_line (start ${(flip ? 0.45 : -0.45)} 2.02) (end ${(flip ? -0.45 : 0.45)} 2.02) (stroke (width 0.1) (type solid)) (layer ${(flip ? "B.Fab" : "F.Fab")}))`);
fp.push(`(fp_line (start ${(flip ? -0.45 : 0.45)} 2.02) (end ${(flip ? -0.75 : 0.75)} 2.52) (stroke (width 0.1) (type solid)) (layer ${(flip ? "B.Fab" : "F.Fab")}))`);
fp.push(`(fp_line (start ${(flip ? -0.75 : 0.75)} 2.52) (end ${(flip ? -2.1 : 2.1)} 2.52) (stroke (width 0.1) (type solid)) (layer ${(flip ? "B.Fab" : "F.Fab")}))`);
fp.push(`(fp_line (start ${(flip ? -2.1 : 2.1)} -1.98) (end ${(flip ? -2.1 : 2.1)} 2.52) (stroke (width 0.1) (type solid)) (layer ${(flip ? "B.Fab" : "F.Fab")}))`);

fp.push(`(generator "pcbnew")`);
fp.push(`(generator_version "9.0")`);
fp.push(`(embedded_fonts no)`);
fp.push(`(model ":_MYPATH:781710002.stp" (offset (xyz 0.58 -2.3 0.24)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

fp.push(`)`);

    return fp.join('\n');
  }
}

