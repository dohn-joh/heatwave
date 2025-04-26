// based on ceoloide's reset_switch_smd_side
// Datasheet:
//   https://cdn.shopify.com/s/files/1/0618/5674/3655/files/PANASONIC-EVQPUC02K.pdf?v=1670451309

module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    from: { type: 'net', value: 'GND' },
    to: { type: 'net', value: 'RST' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "sw_reset_side"`);
fp.push(p.at);
fp.push(`(layer ${(flip ? "B" : "F")}.Cu)`);
fp.push(`(attr smd)`);

fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);


// Pads
fp.push(`(pad "" np_thru_hole circle (at 0 -1.375 ${p.r + 180}) (size 0.75 0.75) (drill 0.75) (layers "*.Cu" "*.Mask"))`);
fp.push(`(pad "" np_thru_hole circle (at 0 1.375 ${p.r + 180}) (size 0.75 0.75) (drill 0.75) (layers "*.Cu" "*.Mask"))`);
fp.push(`(pad "1" smd rect (at ${(flip ? -2.625 : 2.625)} -0.85 ${p.r + 180}) (size 1.55 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") ${p.from})`);
fp.push(`(pad "2" smd rect (at ${(flip ? -2.625 : 2.625)} 0.85 ${p.r + 180}) (size 1.55 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") ${p.to})`);
fp.push(`(pad "3" smd rect (at ${(flip ? 2.625 : -2.625)} -0.85 ${p.r + 180}) (size 1.55 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") ${p.from})`);
fp.push(`(pad "4" smd rect (at ${(flip ? 2.625 : -2.625)} 0.85 ${p.r + 180}) (size 1.55 1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") ${p.to})`);

// Dwgs.User
fp.push(`(fp_line (start ${(flip ? 2.35 : -2.35)} -1.75) (end ${(flip ? 2.35 : -2.35)} 1.75) (stroke (width 0.1) (type solid)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? 2.35 : -2.35)} -1.75) (end ${(flip ? -2.35 : 2.35)} -1.75) (stroke (width 0.1) (type solid)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? 2.35 : -2.35)} 1.75) (end ${(flip ? -2.35 : 2.35)} 1.75) (stroke (width 0.1) (type solid)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? 1.3 : -1.3)} -2.75) (end ${(flip ? 1.3 : -1.3)} -1.75) (stroke (width 0.1) (type solid)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? 1.3 : -1.3)} -2.75) (end ${(flip ? -1.3 : 1.3)} -2.75) (stroke (width 0.1) (type solid)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -1.3 : 1.3)} -2.75) (end ${(flip ? -1.3 : 1.3)} -1.75) (stroke (width 0.1) (type solid)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -2.35 : 2.35)} -1.75) (end ${(flip ? -2.35 : 2.35)} 1.75) (stroke (width 0.1) (type solid)) (layer "Dwgs.User"))`);

fp.push(`(generator "pcbnew")`);
fp.push(`(generator_version "9.0")`);
fp.push(`(embedded_fonts no)`);
fp.push(`(model "\${_MYPATH}/EVQPU-LC-02K.STEP" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 90 180 0)))`);

fp.push(`)`);

    return fp.join('\n');
  }
}
