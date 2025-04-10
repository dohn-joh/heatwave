module.exports = {
  params: {
    designator: 'XX',
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
fp.push(`(fp_line (start ${(flip ? 12.575 : -12.575)} -10.2) (end ${(flip ? 12.575 : -12.575)} 66.157282) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? 12.575 : -12.575)} -10.2) (end ${(flip ? -207.873199 : 207.873199)} -10.2) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? 12.575 : -12.575)} 66.157282) (end ${(flip ? 1.998755 : -1.998755)} 66.245742) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? 1.998755 : -1.998755)} 66.245742) (end ${(flip ? -7.140189 : 7.140189)} 66.470615) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -7.140189 : 7.140189)} 66.470615) (end ${(flip ? -15.261241 : 15.261241)} 66.862169) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -15.261241 : 15.261241)} 66.862169) (end ${(flip ? -22.775667 : 22.775667)} 67.450417) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -22.775667 : 22.775667)} 67.450417) (end ${(flip ? -30.086701 : 30.086701)} 68.264201) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -30.086701 : 30.086701)} 68.264201) (end ${(flip ? -37.596352 : 37.596352)} 69.330084) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -37.596352 : 37.596352)} 69.330084) (end ${(flip ? -43.902437 : 43.902437)} 70.361541) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -43.902437 : 43.902437)} 70.361541) (end ${(flip ? -50.785416 : 50.785416)} 71.578062) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -50.785416 : 50.785416)} 71.578062) (end ${(flip ? -58.450277 : 58.450277)} 72.993693) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -58.450277 : 58.450277)} 72.993693) (end ${(flip ? -67.102704 : 67.102704)} 74.622844) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -67.102704 : 67.102704)} 74.622844) (end ${(flip ? -76.948639 : 76.948639)} 76.480182) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -76.948639 : 76.948639)} 76.480182) (end ${(flip ? -88.192441 : 88.192441)} 78.580136) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -118.34956 : 118.34956)} 76.480182) (end ${(flip ? -107.105747 : 107.105747)} 78.580138) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -128.195495 : 128.195495)} 74.622844) (end ${(flip ? -118.34956 : 118.34956)} 76.480182) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -136.847922 : 136.847922)} 72.993693) (end ${(flip ? -128.195495 : 128.195495)} 74.622844) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -144.512783 : 144.512783)} 71.578062) (end ${(flip ? -136.847922 : 136.847922)} 72.993693) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -151.395762 : 151.395762)} 70.361541) (end ${(flip ? -144.512783 : 144.512783)} 71.578062) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -157.701847 : 157.701847)} 69.330084) (end ${(flip ? -151.395762 : 151.395762)} 70.361541) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -165.211498 : 165.211498)} 68.264201) (end ${(flip ? -157.701847 : 157.701847)} 69.330084) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -172.522532 : 172.522532)} 67.450417) (end ${(flip ? -165.211498 : 165.211498)} 68.264201) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -180.036958 : 180.036958)} 66.862169) (end ${(flip ? -172.522532 : 172.522532)} 67.450417) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -188.15801 : 188.15801)} 66.470615) (end ${(flip ? -180.036958 : 180.036958)} 66.862169) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -197.296954 : 197.296954)} 66.245742) (end ${(flip ? -188.15801 : 188.15801)} 66.470615) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -207.873199 : 207.873199)} -10.2) (end ${(flip ? -207.873199 : 207.873199)} 66.157282) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_line (start ${(flip ? -207.873199 : 207.873199)} 66.157282) (end ${(flip ? -197.296954 : 197.296954)} 66.245742) (stroke (width 0.15) (type default)) (layer "Edge.Cuts"))`);
fp.push(`(fp_arc (start 97.6491 27.5619) (end 107.105747 78.580138) (angle 21.0021) (layer "Edge.Cuts") (stroke (width 0.15) (type solid)))`);

fp.push(`(generator "pcbnew")`);
fp.push(`(generator_version "9.0")`);
// fp.push(`(group "" (members "06ad1b26-5f93-47fb-8702-44c2f184c6a2" "089efb29-ee4f-4638-afbb-21d6cbe1de62" "16deba02-1d7e-4b81-b779-c56f5c470d45" "1ba3ccba-0f90-413d-913c-5ac2b071bb9f" "2208bf93-9b3d-4403-94ea-612ae7c32816" "25f5d2c7-9e94-4e08-a00c-3b91d12d9537" "39271238-e22b-45f8-aec2-b51d6465aa96" "470eaf54-512d-4d0d-85e4-f645319f0a8f" "4843b442-bc83-4c04-a618-a5f5265792de" "4b4d7c38-d7a2-454b-add5-ec00814829c8" "4df12f18-ad7b-4895-a1f1-d4076a33a248" "511350cb-e12a-4c3d-8ddc-7139fbe32aee" "51fdadfb-9595-4c4d-800b-5c42b4acf58f" "53e10e44-47dc-4969-b79f-d0c80673ee8f" "6a0d851b-8ad7-4ee1-b4dc-92dcfb7f8d00" "6e0945d4-0bd5-480c-b826-4b0319cc0e65" "7138f9e3-f35b-4ea9-81f0-96a4dbfb69c4" "854f42a6-fa37-4510-a531-4cdee1714478" "8f821677-df1b-40e5-9eb4-89020731d44f" "8ff1cc8e-45b4-4fcf-a5d0-5291dd09ded8" "9f851072-1de5-4e54-8a4e-0ffbc225ffb1" "a9df5e2c-9d14-4d98-9988-28158cfe61c3" "bc27dc2f-12ff-4145-9ecf-dc0c283f7473" "c5c151f5-8250-4e8d-83ec-3a62123d5e8a" "d98924b3-874a-4ade-965b-9dc9a4d5c292" "e408ab7f-cf08-4716-8df8-55fafd6aa8f4" "ece48e42-d466-41a3-8663-7da7d12ced23" "edf40877-614f-4a25-96e1-0c29fb05e125"))`);
fp.push(`(embedded_fonts no)`);

fp.push(`)`);

    return fp.join('\n');
  }
}

