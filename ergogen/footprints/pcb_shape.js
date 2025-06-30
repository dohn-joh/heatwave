module.exports = {
  params: {
    designator: 'EC',
    side: 'F',

  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "pcb_shape"`);
fp.push(p.at);
fp.push(`(layer ${(flip ? "B" : "F")}.Cu)`);
fp.push(`(attr smd)`);

fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);


// Pads

// Edge.Cuts
fp.push(`(fp_line (start ${(flip ? 12.575 : -12.575)} -11.949998) (end ${(flip ? 12.575 : -12.575)} 64.911298) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? 11.326101 : -11.326101)} 66.161299) (end ${(flip ? 1.03077 : -1.03077)} 66.261528) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? 11.324999 : -11.324999)} -13.2) (end ${(flip ? -206.6232 : 206.6232)} -13.2) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? 1.03077 : -1.03077)} 66.261528) (end ${(flip ? -7.901166 : 7.901166)} 66.498377) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -7.901166 : 7.901166)} 66.498377) (end ${(flip ? -15.872508 : 15.872508)} 66.901151) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -15.872508 : 15.872508)} 66.901151) (end ${(flip ? -23.281004 : 23.281004)} 67.49891) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -23.281004 : 23.281004)} 67.49891) (end ${(flip ? -30.51736 : 30.51736)} 68.319453) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -30.51736 : 30.51736)} 68.319453) (end ${(flip ? -37.971492 : 37.971492)} 69.388457) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -37.971492 : 37.971492)} 69.388457) (end ${(flip ? -44.23959 : 44.23959)} 70.419299) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -44.23959 : 44.23959)} 70.419299) (end ${(flip ? -51.08305 : 51.08305)} 71.632118) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -51.08305 : 51.08305)} 71.632118) (end ${(flip ? -58.700691 : 58.700691)} 73.040555) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -58.700691 : 58.700691)} 73.040555) (end ${(flip ? -67.291954 : 67.291954)} 74.658596) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -67.291954 : 67.291954)} 74.658596) (end ${(flip ? -77.056506 : 77.056506)} 76.500462) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -77.056506 : 77.056506)} 76.500462) (end ${(flip ? -88.193036 : 88.193036)} 78.580246) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -118.241693 : 118.241693)} 76.500462) (end ${(flip ? -107.105152 : 107.105152)} 78.580248) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -128.006245 : 128.006245)} 74.658596) (end ${(flip ? -118.241693 : 118.241693)} 76.500462) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -136.597508 : 136.597508)} 73.040555) (end ${(flip ? -128.006245 : 128.006245)} 74.658596) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -144.215149 : 144.215149)} 71.632118) (end ${(flip ? -136.597508 : 136.597508)} 73.040555) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -151.058609 : 151.058609)} 70.419299) (end ${(flip ? -144.215149 : 144.215149)} 71.632118) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -157.326707 : 157.326707)} 69.388457) (end ${(flip ? -151.058609 : 151.058609)} 70.419299) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -164.780839 : 164.780839)} 68.319453) (end ${(flip ? -157.326707 : 157.326707)} 69.388457) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -172.017195 : 172.017195)} 67.49891) (end ${(flip ? -164.780839 : 164.780839)} 68.319453) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -179.425691 : 179.425691)} 66.901151) (end ${(flip ? -172.017195 : 172.017195)} 67.49891) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -187.397033 : 187.397033)} 66.498377) (end ${(flip ? -179.425691 : 179.425691)} 66.901151) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -196.328969 : 196.328969)} 66.261528) (end ${(flip ? -187.397033 : 187.397033)} 66.498377) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -206.624415 : 206.624415)} 66.161298) (end ${(flip ? -196.328969 : 196.328969)} 66.261528) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_line (start ${(flip ? -207.8732 : 207.8732)} -11.95) (end ${(flip ? -207.873199 : 207.873199)} 64.9113) (stroke (width 0.15) (type default)) (layer "Edge.Cuts") )`);
fp.push(`(fp_arc (start -11.325 -11.95) (end ${(flip ? 12.575 : -12.575)} -11.95) (angle 90) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start -11.325 64.9113) (end ${(flip ? 11.326101 : -11.326101)} 66.1613) (angle 90) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start 97.6491 27.5619) (end ${(flip ? -107.105152 : 107.105152)} 78.580248) (angle 21) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start 206.6232 -11.95) (end ${(flip ? -206.6232 : 206.6232)} -13.2) (angle 90) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start 206.6232 64.9113) (end ${(flip ? -207.8732 : 207.8732)} 64.9113) (angle 90) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);

fp.push(`(generator "pcbnew")`);
fp.push(`(generator_version "9.0")`);
fp.push(`(embedded_fonts no)`);

fp.push(`)`);

    return fp.join('\n');
  }
}

