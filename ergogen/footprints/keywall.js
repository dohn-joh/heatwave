module.exports = {
  params: {
    designator: 'XX',
    side: 'F',

  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "keywall"`);
fp.push(p.at);
fp.push(`(layer ${(flip ? "B" : "F")}.Cu)`);
fp.push(`(attr smd)`);

fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);


// Pads

// Dwgs.User
fp.push(`(fp_line (start ${(flip ? 12.575 : -12.575)} -10.2) (end ${(flip ? 12.575 : -12.575)} 48.2) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? 2.375 : -2.375)} 48.2) (end ${(flip ? 12.575 : -12.575)} 48.2) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? 2.375 : -2.375)} 48.2) (end ${(flip ? -12.379538 : 12.379538)} 48.338871) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -0 : 0)} -10.2) (end ${(flip ? 12.575 : -12.575)} -10.2) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -0 : 0)} -10.2) (end ${(flip ? -9.081233 : 9.081233)} -10.114943) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -9.081233 : 9.081233)} -10.114943) (end ${(flip ? -18.223833 : 18.223833)} -9.816252) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -12.379538 : 12.379538)} 48.338871) (end ${(flip ? -27.616656 : 27.616656)} 49.067164) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -18.223833 : 18.223833)} -9.816252) (end ${(flip ? -27.455754 : 27.455754)} -9.243981) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -27.455754 : 27.455754)} -9.243981) (end ${(flip ? -36.340808 : 36.340808)} -8.445381) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -27.616656 : 27.616656)} 49.067164) (end ${(flip ? -40.383665 : 40.383665)} 50.357447) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -36.340808 : 36.340808)} -8.445381) (end ${(flip ? -39.988257 : 39.988257)} -8.051877) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -39.988257 : 39.988257)} -8.051877) (end ${(flip ? -43.312038 : 43.312038)} -7.655785) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -40.383665 : 40.383665)} 50.357447) (end ${(flip ? -54.221033 : 54.221033)} 52.527008) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -43.312038 : 43.312038)} -7.655785) (end ${(flip ? -46.358113 : 46.358113)} -7.253096) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -46.358113 : 46.358113)} -7.253096) (end ${(flip ? -49.450029 : 49.450029)} -6.800946) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -49.450029 : 49.450029)} -6.800946) (end ${(flip ? -52.948633 : 52.948633)} -6.251249) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -52.948633 : 52.948633)} -6.251249) (end ${(flip ? -57.214771 : 57.214771)} -5.555921) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -57.214771 : 57.214771)} -5.555921) (end ${(flip ? -62.609288 : 62.609288)} -4.666878) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -82.932077 : 82.932077)} 57.848286) (end ${(flip ? -54.221033 : 54.221033)} 52.527008) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -82.932077 : 82.932077)} 57.848286) (end ${(flip ? -86.336812 : 86.336812)} 39.477975) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -86.336812 : 86.336812)} 39.477975) (end ${(flip ? -87.622338 : 87.622338)} 39.716233) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -87.622338 : 87.622338)} 39.716233) (end ${(flip ? -91.339943 : 91.339943)} 19.657833) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -87.935447 : 87.935447)} 19.026847) (end ${(flip ? -91.339943 : 91.339943)} 0.657833) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -91.339943 : 91.339943)} 0.657833) (end ${(flip ? -62.609288 : 62.609288)} -4.666878) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -91.339943 : 91.339943)} 19.657833) (end ${(flip ? -87.935447 : 87.935447)} 19.026847) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -103.958256 : 103.958256)} 0.657833) (end ${(flip ? -132.688911 : 132.688911)} -4.666878) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -103.958256 : 103.958256)} 19.657833) (end ${(flip ? -107.362752 : 107.362752)} 19.026847) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -107.362752 : 107.362752)} 19.026847) (end ${(flip ? -103.958256 : 103.958256)} 0.657833) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -107.675861 : 107.675861)} 39.716233) (end ${(flip ? -103.958256 : 103.958256)} 19.657833) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -108.961387 : 108.961387)} 39.477975) (end ${(flip ? -107.675861 : 107.675861)} 39.716233) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -112.366123 : 112.366123)} 57.848286) (end ${(flip ? -108.961387 : 108.961387)} 39.477975) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -112.366123 : 112.366123)} 57.848286) (end ${(flip ? -141.077166 : 141.077166)} 52.527008) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -138.083428 : 138.083428)} -5.555921) (end ${(flip ? -132.688911 : 132.688911)} -4.666878) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -142.349566 : 142.349566)} -6.251249) (end ${(flip ? -138.083428 : 138.083428)} -5.555921) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -145.84817 : 145.84817)} -6.800946) (end ${(flip ? -142.349566 : 142.349566)} -6.251249) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -148.940086 : 148.940086)} -7.253096) (end ${(flip ? -145.84817 : 145.84817)} -6.800946) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -151.986161 : 151.986161)} -7.655785) (end ${(flip ? -148.940086 : 148.940086)} -7.253096) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -154.914534 : 154.914534)} 50.357447) (end ${(flip ? -141.077166 : 141.077166)} 52.527008) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -155.309942 : 155.309942)} -8.051877) (end ${(flip ? -151.986161 : 151.986161)} -7.655785) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -158.957391 : 158.957391)} -8.445381) (end ${(flip ? -155.309942 : 155.309942)} -8.051877) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -167.681543 : 167.681543)} 49.067164) (end ${(flip ? -154.914534 : 154.914534)} 50.357447) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -167.842445 : 167.842445)} -9.243981) (end ${(flip ? -158.957391 : 158.957391)} -8.445381) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -177.074366 : 177.074366)} -9.816252) (end ${(flip ? -167.842445 : 167.842445)} -9.243981) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -182.918661 : 182.918661)} 48.338871) (end ${(flip ? -167.681543 : 167.681543)} 49.067164) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -186.216966 : 186.216966)} -10.114943) (end ${(flip ? -177.074366 : 177.074366)} -9.816252) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -195.298199 : 195.298199)} -10.2) (end ${(flip ? -186.216966 : 186.216966)} -10.114943) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -195.298199 : 195.298199)} -10.2) (end ${(flip ? -207.873199 : 207.873199)} -10.2) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -197.673199 : 197.673199)} 48.2) (end ${(flip ? -182.918661 : 182.918661)} 48.338871) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -197.673199 : 197.673199)} 48.2) (end ${(flip ? -207.873199 : 207.873199)} 48.2) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);
fp.push(`(fp_line (start ${(flip ? -207.873199 : 207.873199)} -10.2) (end ${(flip ? -207.873199 : 207.873199)} 48.2) (stroke (width 0.15) (type default)) (layer "Dwgs.User"))`);

fp.push(`(generator "pcbnew")`);
fp.push(`(generator_version "9.0")`);
fp.push(`(group "" (members "01a4a780-a809-43f7-9ceb-f2e1c5ece13e" "05f0b76e-cebf-4faf-8ee3-b0bb3e9c6322" "0d5fb1d3-bed9-45d6-8485-02f579329068" "10222971-a856-4e90-8aff-13f37bf494e6" "10558d63-08a6-40ad-b61d-e1492a6077d9" "11dc7414-a7db-450a-bea6-060d7ae14382" "1effb853-be5a-4e53-9280-61bd8bb3b990" "23be0d8d-eb44-4004-825b-78f664cfdcea" "2a28e5fe-4a18-415d-a685-0b0fa4306ee4" "2a29a416-860b-479d-bee2-6248be53d562" "2fa61687-2096-4984-b586-f5ccfc9ba2cc" "34f1d580-8410-4ae6-8c2e-3a18dc7bf72d" "47bff3e7-9350-472b-b7ee-1fc3e8bbcb02" "49f223c2-bac8-4d47-8e61-8c237367e843" "4a6b12cc-adcf-49d9-b1db-941e0273da1c" "4f5b2e59-ef97-4e76-9c6a-04f0ac1563cc" "5468c34d-0359-4b78-8418-7125e8b915a5" "76d98ae9-83bf-4e90-a8c6-3ade4aa76bef" "7880bd46-a6ee-4733-931e-4c1abb932459" "7c2bb6da-939a-44a0-a794-0fc65eaf6eda" "80399d84-42f5-4d06-acdd-b9d6ef0e6c79" "83862089-52c7-43ef-8139-b2cf9d34331a" "841e4585-5765-4ddb-89d5-af4ffcddd7f9" "8442cb6e-7118-4f87-a729-a45a910a78df" "8abcb868-945d-4e84-875e-159ce63edf56" "8f4babb4-3c6b-474e-a842-43b3b9d5b2f3" "915e08f3-3561-455e-ba3e-0699135aa8d6" "9892f975-2fc0-4165-8be4-880cb4473a19" "9a64e0ca-9661-4c78-80fb-07cd27d795ff" "9f9d1386-6290-4e3f-89c6-02fbe8351272" "a0427bf5-605a-4e31-bf02-fec5d8b92e73" "ab710da4-5e86-431a-a8bc-73196a645168" "ade9e385-fa2c-47e1-b3df-51c7969ff313" "af03b216-1162-45a6-bd76-be7f4fee5867" "b58a3ed3-845c-4e5b-b104-ab516b982feb" "c56b3652-4597-4057-aa46-8cf80481ef0b" "ce4539cf-1422-43a8-ae5f-97b3f1792f0d" "d0a3d6b3-9574-4d6e-9dc8-878b8a53e193" "d13a3278-2907-4361-a551-12a4c7099934" "d27cc46d-2f2c-4390-99eb-f4fe4a904c19" "e3975404-f0d5-4b1d-b4b9-2f354d339120" "e56389a1-c023-4141-b414-0d8acec9f036" "ebce9f58-c99b-4929-8c34-17e96d44796b" "ef001e9f-1dc0-465d-a5d4-952cd6a910e8" "f089d43e-37db-41cc-acf6-21223e566eb1" "f312dbcf-68c8-47ce-b63a-5a71b7cabe74" "f32a8243-f546-4af1-a1fd-e5c9a6108e2c" "f4f28cee-dce6-46e9-9f8c-d0571c1fd50f" "f6116f32-eb0c-4e49-8359-eb881f0346e1" "f8ba19b6-1d22-4544-b005-7ab648e5be00"))`);
fp.push(`(embedded_fonts no)`);

fp.push(`)`);

    return fp.join('\n');
  }
}

