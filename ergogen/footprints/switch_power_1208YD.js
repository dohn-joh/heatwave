module.exports = {
    params: {
        designator: 'SW',
        side: 'F',

        pad1: {type: 'net', value: 'BAT'},
        pad2: {type: 'net', value: 'BAT_CONN'},
    },

    body:   p => `
(footprint "1208YD"
  (layer "${p.side}.Cu")
  ${p.at}
  (property "Reference" "${p.ref}"
    (at 0 -0.5 ${p.rot})
    (layer "${p.side}.SilkS")
    ${p.ref_hide}
    (effects (font (size 1 1) (thickness 0.1)))
  )
  (attr smd)
  (fp_rect (start -5.825 -3.95) (end 5.825 3.95) (stroke (width 0.15) (type default)) (fill none) (layer "F.SilkS"))
  (fp_circle (center 0 0) (end 3.55 0) (stroke (width 0.2) (type default)) (fill none) (layer "Edge.Cuts"))
  (pad "1" smd rect (at -8.925 0 ${p.rot}) (size 4 2.5) (layers "F.Cu" "F.Paste" "F.Mask")
    (thermal_bridge_angle 45)
    ${p.pad1.str})
  (pad "2" smd rect (at 8.925 0 ${p.rot}) (size 4 2.5) (layers "F.Cu" "F.Paste" "F.Mask")
    (thermal_bridge_angle 45)
    ${p.pad2.str})
)
`
}
