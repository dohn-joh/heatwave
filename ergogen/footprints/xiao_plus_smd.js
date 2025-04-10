module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: 'P0.02' },
    P2: { type: 'net', value: 'P0.03' },
    P3: { type: 'net', value: 'P0.28' },
    P4: { type: 'net', value: 'P0.29' },
    P5: { type: 'net', value: 'P0.04' },
    P6: { type: 'net', value: 'P0.05' },
    P7: { type: 'net', value: 'P1.11' },
    P8: { type: 'net', value: 'P1.12' },
    P9: { type: 'net', value: 'P1.13' },
    P10: { type: 'net', value: 'P1.14' },
    P11: { type: 'net', value: 'P1.15' },
    P12: { type: 'net', value: '3V3' },
    P13: { type: 'net', value: 'GND' },
    P14: { type: 'net', value: '5V' },
    P15: { type: 'net', value: 'P0.15' },
    P16: { type: 'net', value: 'P0.19' },
    P17: { type: 'net', value: 'P1.01' },
    P18: { type: 'net', value: 'P0.09' },
    P19: { type: 'net', value: 'P0.10' },
    P20: { type: 'net', value: 'P0.31' },
    P21: { type: 'net', value: 'P1.03' },
    P22: { type: 'net', value: 'P1.05' },
    P23: { type: 'net', value: 'P1.07' },
    P24: { type: 'net', value: 'DIO' },
    P25: { type: 'net', value: 'CLK' },
    P26: { type: 'net', value: 'RST' },
    P27: { type: 'net', value: 'GND' },
    P28: { type: 'net', value: 'BAT+' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "xiao_plus_smd_prod"`);
fp.push(p.at);
fp.push(`(layer ${(flip ? "B" : "F")}.Cu)`);
fp.push(`(attr smd)`);

fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);


// Pads
fp.push(`(pad "1" smd roundrect (at ${(flip ? 8.255 : -8.255)} -7.6165 ${p.r + 180}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P1})`);
fp.push(`(pad "2" smd roundrect (at ${(flip ? 8.255 : -8.255)} -5.0765 ${p.r + 180}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P2})`);
fp.push(`(pad "3" smd roundrect (at ${(flip ? 8.255 : -8.255)} -2.5365 ${p.r + 180}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P3})`);
fp.push(`(pad "4" smd roundrect (at ${(flip ? 8.255 : -8.255)} 0.0035 ${p.r + 180}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P4})`);
fp.push(`(pad "5" smd roundrect (at ${(flip ? 8.255 : -8.255)} 2.5435 ${p.r + 180}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P5})`);
fp.push(`(pad "6" smd roundrect (at ${(flip ? 8.255 : -8.255)} 5.0835 ${p.r + 180}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P6})`);
fp.push(`(pad "7" smd roundrect (at ${(flip ? 8.255 : -8.255)} 7.6235 ${p.r + 180}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P7})`);
fp.push(`(pad "8" smd roundrect (at ${(flip ? -8.255 : 8.255)} 7.6235 ${p.r}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P8})`);
fp.push(`(pad "9" smd roundrect (at ${(flip ? -8.255 : 8.255)} 5.0835 ${p.r}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P9})`);
fp.push(`(pad "10" smd roundrect (at ${(flip ? -8.255 : 8.255)} 2.5435 ${p.r}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P10})`);
fp.push(`(pad "11" smd roundrect (at ${(flip ? -8.255 : 8.255)} 0.0035 ${p.r}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P11})`);
fp.push(`(pad "12" smd roundrect (at ${(flip ? -8.255 : 8.255)} -2.5365 ${p.r}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P12})`);
fp.push(`(pad "13" smd roundrect (at ${(flip ? -8.255 : 8.255)} -5.0765 ${p.r}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P13})`);
fp.push(`(pad "14" smd roundrect (at ${(flip ? -8.255 : 8.255)} -7.6165 ${p.r}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45) ${p.P14})`);
fp.push(`(pad "15" smd roundrect (at ${(flip ? 8.655 : -8.655)} -6.3465 ${p.r + 180}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P15})`);
fp.push(`(pad "16" smd roundrect (at ${(flip ? 8.655 : -8.655)} -3.8065 ${p.r + 180}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P16})`);
fp.push(`(pad "17" smd roundrect (at ${(flip ? 8.655 : -8.655)} -1.2665 ${p.r + 180}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P17})`);
fp.push(`(pad "18" smd roundrect (at ${(flip ? 8.655 : -8.655)} 1.2735 ${p.r + 180}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P18})`);
fp.push(`(pad "19" smd roundrect (at ${(flip ? 8.655 : -8.655)} 3.8135 ${p.r + 180}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P19})`);
fp.push(`(pad "20" smd roundrect (at ${(flip ? 8.655 : -8.655)} 6.3535 ${p.r + 180}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P20})`);
fp.push(`(pad "21" smd roundrect (at ${(flip ? -8.655 : 8.655)} 6.3535 ${p.r}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P21})`);
fp.push(`(pad "22" smd roundrect (at ${(flip ? -8.655 : 8.655)} 3.8135 ${p.r}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P22})`);
fp.push(`(pad "23" smd roundrect (at ${(flip ? -8.655 : 8.655)} 1.2735 ${p.r}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45) ${p.P23})`);
fp.push(`(pad "24" thru_hole circle (at ${(flip ? 1.27 : -1.27)} -8.5725 ${p.r}) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.P24})`);
fp.push(`(pad "25" thru_hole circle (at ${(flip ? -1.27 : 1.27)} -8.5725 ${p.r}) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.P25})`);
fp.push(`(pad "26" thru_hole circle (at ${(flip ? 1.27 : -1.27)} -6.0325 ${p.r}) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.P26})`);
fp.push(`(pad "27" thru_hole circle (at ${(flip ? -1.27 : 1.27)} -6.0325 ${p.r}) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.P27})`);
fp.push(`(pad "28" thru_hole circle (at ${(flip ? 1.08792 : -1.08792)} 4.6202 ${p.r}) (size 1.397 1.397) (drill 1.016) (property pad_prop_castellated) (layers "*.Cu" "*.Mask") (remove_unused_layers no) ${p.P28})`);

// F.SilkS
fp.push(`(fp_line (start ${(flip ? 8.89 : -8.89)} 8.6625) (end ${(flip ? 8.89 : -8.89)} -8.6625) (stroke (width 0.15) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? 6.985 : -6.985)} -10.5675) (end ${(flip ? -6.985 : 6.985)} -10.5675) (stroke (width 0.15) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? -6.985 : 6.985)} 10.5675) (end ${(flip ? 6.985 : -6.985)} 10.5675) (stroke (width 0.15) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_line (start ${(flip ? -8.89 : 8.89)} -8.6625) (end ${(flip ? -8.89 : 8.89)} 8.6625) (stroke (width 0.15) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_arc (start ${(flip ? 6.984999 : -6.984999)} -8.6625) (end ${(flip ? 8.89 : -8.89)} -8.6625) (angle 89.9999) (stroke (width 0.15) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_arc (start ${(flip ? 6.984999 : -6.984999)} 8.6625) (end ${(flip ? 6.985 : -6.985)} 10.5675) (angle 89.9999) (stroke (width 0.15) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_arc (start ${(flip ? -6.984999 : 6.984999)} -8.6625) (end ${(flip ? -6.985 : 6.985)} -10.5675) (angle 90) (stroke (width 0.15) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);
fp.push(`(fp_arc (start ${(flip ? -6.984999 : 6.984999)} 8.6625) (end ${(flip ? -8.89 : 8.89)} 8.6625) (angle 90) (stroke (width 0.15) (type solid)) (layer ${(flip ? "B.SilkS" : "F.SilkS")}))`);

// Dwgs.User
fp.push(`(fp_rect (start ${(flip ? 4.47 : -4.47)} -12.0755) (end ${(flip ? -4.47 : 4.47)} -10.5675) (stroke (width 0.15) (type solid)) (fill no) (layer "Dwgs.User"))`);

// Edge.Cuts
fp.push(`(fp_line (start ${(flip ? 5.73792 : -5.73792)} 8.8892) (end ${(flip ? 5.73792 : -5.73792)} 4.6512) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? 5.35692 : -5.35692)} 4.2702) (end ${(flip ? 1.11892 : -1.11892)} 4.2702) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? 1.625 : -1.625)} -6.0585) (end ${(flip ? 1.625 : -1.625)} -8.5465) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? 1.244 : -1.244)} -8.9275) (end ${(flip ? -1.244 : 1.244)} -8.9275) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? 1.11892 : -1.11892)} 9.2702) (end ${(flip ? 5.35692 : -5.35692)} 9.2702) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? 0.73792 : -0.73792)} 4.6512) (end ${(flip ? 0.73792 : -0.73792)} 8.8892) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -1.244 : 1.244)} -5.6775) (end ${(flip ? 1.244 : -1.244)} -5.6775) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -1.625 : 1.625)} -8.5465) (end ${(flip ? -1.625 : 1.625)} -6.0585) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start ${(flip ? 5.356921 : -5.356921)} 4.651199) (end ${(flip ? 5.73792 : -5.73792)} 4.6512) (angle 90.0003) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start ${(flip ? 5.356921 : -5.356921)} 8.889201) (end ${(flip ? 5.35692 : -5.35692)} 9.2702) (angle 90.0003) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start ${(flip ? 1.244001 : -1.244001)} -8.546501) (end ${(flip ? 1.625 : -1.625)} -8.5465) (angle 90.0003) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start ${(flip ? 1.244001 : -1.2440001)} -6.058499) (end ${(flip ? 1.244 : -1.244)} -5.6775) (angle 90.0003) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start ${(flip ? 1.118919 : -1.118919)} 4.651199) (end ${(flip ? 1.11892 : -1.11892)} 4.2702) (angle 90.003) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start ${(flip ? 1.118919 : -1.118919)} 8.889201) (end ${(flip ? 0.73792 : -0.73792)} 8.8892) (angle 90.003) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start ${(flip ? -1.244 : 1.244)} -8.5465) (end ${(flip ? -1.244 : 1.244)} -8.9275) (angle 90) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start ${(flip ? -1.244 : 1.244)} -6.0585) (end ${(flip ? -1.625 : 1.625)} -6.0585) (angle 90) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))`);

// User.1
fp.push(`(fp_circle (center -8.89 -7.5565) (end ${(flip ? 8.89 : -8.89)} -7.6835) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -8.89 -5.0165) (end ${(flip ? 8.89 : -8.89)} -5.1435) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -8.89 -2.4765) (end ${(flip ? 8.89 : -8.89)} -2.6035) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -8.89 0.0635) (end ${(flip ? 8.89 : -8.89)} -0.0635) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -8.89 2.6035) (end ${(flip ? 8.89 : -8.89)} 2.4765) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -8.89 5.1435) (end ${(flip ? 8.89 : -8.89)} 5.0165) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -8.89 7.6835) (end ${(flip ? 8.89 : -8.89)} 7.5565) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -7.62 -7.5565) (end ${(flip ? 7.62 : -7.62)} -7.6835) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -7.62 -5.0165) (end ${(flip ? 7.62 : -7.62)} -5.1435) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -7.62 -2.4765) (end ${(flip ? 7.62 : -7.62)} -2.6035) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -7.62 0.0635) (end ${(flip ? 7.62 : -7.62)} -0.0635) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -7.62 2.6035) (end ${(flip ? 7.62 : -7.62)} 2.4765) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -7.62 5.1435) (end ${(flip ? 7.62 : -7.62)} 5.0165) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center -7.62 7.6835) (end ${(flip ? 7.62 : -7.62)} 7.5565) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 7.62 -7.5565) (end ${(flip ? -7.62 : 7.62)} -7.6835) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 7.62 -5.0165) (end ${(flip ? -7.62 : 7.62)} -5.1435) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 7.62 -2.4765) (end ${(flip ? -7.62 : 7.62)} -2.6035) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 7.62 0.0635) (end ${(flip ? -7.62 : 7.62)} -0.0635) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 7.62 2.6035) (end ${(flip ? -7.62 : 7.62)} 2.4765) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 7.62 5.1435) (end ${(flip ? -7.62 : 7.62)} 5.0165) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 7.62 7.6835) (end ${(flip ? -7.62 : 7.62)} 7.5565) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 8.89 -7.5565) (end ${(flip ? -8.89 : 8.89)} -7.6835) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 8.89 -5.0165) (end ${(flip ? -8.89 : 8.89)} -5.1435) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 8.89 -2.4765) (end ${(flip ? -8.89 : 8.89)} -2.6035) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 8.89 0.0635) (end ${(flip ? -8.89 : 8.89)} -0.0635) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 8.89 2.6035) (end ${(flip ? -8.89 : 8.89)} 2.4765) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 8.89 5.1435) (end ${(flip ? -8.89 : 8.89)} 5.0165) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);
fp.push(`(fp_circle (center 8.89 7.6835) (end ${(flip ? -8.89 : 8.89)} 7.5565) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1"))`);

// B.SilkS
fp.push(`(fp_text user "BAT+" (at ${(flip ? -3.153965 : 3.153965)} 4.202883 ${p.r + 0}) (unlocked yes) (layer ${(flip ? "F.SilkS" : "B.SilkS")}) (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "GND    RST" (at ${(flip ? -4.644429 : 4.644429)} -3.932189 ${p.r + 0}) (unlocked yes) (layer ${(flip ? "F.SilkS" : "B.SilkS")}) (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "CLK    DIO" (at ${(flip ? -4.423684 : 4.423684)} -9.462446 ${p.r + 0}) (unlocked yes) (layer ${(flip ? "F.SilkS" : "B.SilkS")}) (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);

fp.push(`(generator "pcbnew")`);
fp.push(`(generator_version "9.0")`);
fp.push(`(embedded_fonts no)`);
fp.push(`(model "\${_MYPATH}/XIAO nRF52840 Plus oriented.step" (offset (xyz 0 0.09 0)) (scale (xyz 1 1 1)) (rotate (xyz -0 -0 -0)))`);

fp.push(`)`);

    return fp.join('\n');
  }
}

