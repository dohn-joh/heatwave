module.exports = {
    params: {
        designator: 'MCU',
        side:  'F',

        D0: {type: 'net', value: 'D0'},
        D1: {type: 'net', value: 'D1'},
        D2: {type: 'net', value: 'D2'},
        D3: {type: 'net', value: 'D3'},
        D4: {type: 'net', value: 'D4'},
        D5: {type: 'net', value: 'D5'},
        D6: {type: 'net', value: 'D6'},

        D10: {type: 'net', value: 'D10'},
        D9: {type: 'net', value: 'D9'},
        D8: {type: 'net', value: 'D8'},
        D7: {type: 'net', value: 'D7'},
        RAW3V3: {type: 'net', value: 'RAW3V3'},
        RAW5V: {type: 'net', value: 'RAW5V'},

        CLK: {type: 'net', value: 'CLK'},
        DIO: {type: 'net', value: 'DIO'},
        GND: {type: 'net', value: 'GND'},
        RST: {type: 'net', value: 'RST'},

        BAT: {type: 'net', value: 'BAT'},

        NFC1: {type: 'net', value: 'NFC1'},
        NFC2: {type: 'net', value: 'NFC2'},
    },
    body:   p => `
(footprint "xiao_smd"
  (layer "${p.side}.Cu")
  ${p.at}
  (property "Reference" "${p.ref}" 
      (at -19.3989 -11.28268 ${p.rot}) 
      (layer "${p.side}.SilkS")
      ${p.ref_hide}
    (effects (font (size 0.889 0.889) (thickness 0.1016)))
  )
  (attr smd exclude_from_pos_files)

  (fp_line (start -8.89 -10.5) (end -8.89 10.5) (stroke (width 0.12) (type default)) (layer "Dwgs.User"))
  (fp_line (start -8.89 -10.5) (end 8.89 -10.5) (stroke (width 0.12) (type default)) (layer "Dwgs.User"))
  (fp_line (start 8.89 -10.5) (end 8.89 10.5) (stroke (width 0.12) (type default)) (layer "Dwgs.User"))
  (fp_line (start 8.89 10.5) (end -8.89 10.5) (stroke (width 0.12) (type default)) (layer "Dwgs.User"))
  (fp_rect (start -4.5 -12.008) (end 4.5 -4.658) (stroke (width 0.12) (type default)) (fill none) (layer "Dwgs.User"))
  (fp_line (start -4.655408 -0.584408) (end -4.655408 4.4154) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
  (fp_line (start -4.655408 -0.584408) (end 0.3444 -0.584408) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
  (fp_line (start -4.655408 4.4154) (end 0.3444 4.4154) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
  (fp_line (start -1.530247 -8.832247) (end 1.517753 -8.832247) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
  (fp_line (start -1.530247 -5.784247) (end -1.530247 -8.832247) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
  (fp_line (start -1.530247 -5.784247) (end 1.517753 -5.784247) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
  (fp_line (start 0.3444 -0.584408) (end 0.3444 4.4154) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
  (fp_line (start 1.517753 -5.784247) (end 1.517753 -8.832247) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
  (fp_line (start 3.530592 6.751409) (end 5.943592 6.751409) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
  (fp_line (start 3.530592 9.418409) (end 3.530592 6.751409) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
  (fp_line (start 5.943592 6.751409) (end 5.943592 9.418409) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
  (fp_line (start 5.943592 9.418409) (end 3.530592 9.418409) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))

  (fp_text user "BAT+" (at -7.3 -0.25 0)(unlocked yes) (layer "B.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
  (fp_text user "RST" (at -3.6 -5.95 0)(unlocked yes) (layer "B.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))

  (fp_text user "BAT+" (at -7.3 -0.25 ${0 + p.rot})
 (layer "B.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (fp_text user "RST" (at -3.6 -5.95 ${0 + p.rot})
 (layer "B.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
  )
  (pad "1" smd oval (at -7.62 -7.62 ${180 + p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.D0.str})
  (pad "2" smd oval (at -7.62 -5.08 ${180 + p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.D1.str})
  (pad "3" smd oval (at -7.62 -2.54 ${180 + p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.D2.str})
  (pad "4" smd oval (at -7.62 0 ${180 + p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.D3.str})
  (pad "5" smd oval (at -7.62 2.54 ${180 + p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.D4.str})
  (pad "6" smd oval (at -7.62 5.08 ${180 + p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.D5.str})
  (pad "7" smd oval (at -7.62 7.62 ${180 + p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.D6.str})

  (pad "8" smd oval (at 7.62 7.62 ${p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.D7.str})
  (pad "9" smd oval (at 7.62 5.08 ${p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.D8.str})
  (pad "10" smd oval (at 7.62 2.54 ${p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.D9.str})
  (pad "11" smd oval (at 7.62 0 ${p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.D10.str})
  (pad "12" smd oval (at 7.62 -2.54 ${p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.RAW3V3.str})
  (pad "13" smd oval (at 7.62 -5.08 ${p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.GND.str})
  (pad "14" smd oval (at 7.62 -7.62 ${p.rot}) (size 2.75 1.8) (drill (offset 0.475 0)) (layers "F.Cu" "F.Paste" "F.Mask")
  ${p.RAW5V.str})
  (pad "15" thru_hole circle (at -1.27 -8.572 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")
  ${p.CLK.str})
  (pad "16" thru_hole circle (at 1.27 -8.572 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")
  ${p.DIO.str})
  (pad "17" thru_hole circle (at -1.27 -6.032 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")
  ${p.RST.str})
  (pad "18" thru_hole circle (at 1.27 -6.032 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")
  ${p.GND.str})
  (pad "19" thru_hole circle (at -4.445 -0.317 ${180 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")
  ${p.BAT.str})
  (pad "20" thru_hole circle (at 3.81 9.208 ${180 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")
  ${p.NFC1.str})
  (pad "21" thru_hole circle (at 5.715 9.208 ${180 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")
  ${p.NFC2.str})
)
    `
}
