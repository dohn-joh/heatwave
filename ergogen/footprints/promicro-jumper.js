module.exports = {
    params: {
        designator: 'MCU', //see https://en.wikipedia.org/wiki/Reference_designator#Designators
        side: 'F',
        RAW: {type: 'net', value: 'RAW'},
        GND: {type: 'net', value: 'GND'},
        RST: {type: 'net', value: 'RST'},

        //skipped pin
        P10: {type: 'net', value: 'P10'},
        P11: {type: 'net', value: 'P11'},
        P12: {type: 'net', value: 'P12'},
        P13: {type: 'net', value: 'P13'},
        P14: {type: 'net', value: 'P14'},
        P15: {type: 'net', value: 'P15'},
        P16: {type: 'net', value: 'P16'},
        P17: {type: 'net', value: 'P17'},

        //skipped pin
        P20: {type: 'net', value: 'P20'},
        P21: {type: 'net', value: 'P21'},
        P22: {type: 'net', value: 'P22'},
        P23: {type: 'net', value: 'P23'},
        P24: {type: 'net', value: 'P24'},
        P25: {type: 'net', value: 'P25'},
        P26: {type: 'net', value: 'P26'},
        P27: {type: 'net', value: 'P27'},
    },
    body: p => `
(module promicro (layer F.Cu)
        ${p.at /* parametric position */}
  (attr through_hole)
  (fp_text reference "${p.ref}" (at 0 0 ${-90 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide}
      (effects (font (size 1.27 1.27) (thickness 0.15)))
  )
  (fp_text value "mcu" (at 0 0 270) (layer "F.SilkS") hide
      (effects (font (size 1.27 1.27) (thickness 0.15)))
  )
  (fp_line (start 3.2 -14.97) (end 3.2 -12.97)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 3.2 -12.97) (end 6 -12.97)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 3.2 -12.43) (end 3.2 -10.43)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 3.2 -10.43) (end 6 -10.43)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 3.2 -9.89) (end 3.2 -7.89)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 3.2 -7.89) (end 6 -7.89)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 6 -14.97) (end 3.2 -14.97)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 6 -14.3) (end 6 -14.97)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 6 -12.97) (end 6 -13.65)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 6 -12.43) (end 3.2 -12.43)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 6 -11.75) (end 6 -12.43)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 6 -10.43) (end 6 -11.1)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 6 -9.89) (end 3.2 -9.89)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 6 -9.225) (end 6 -9.89)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start 6 -7.89) (end 6 -8.55)
    (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
  (fp_line (start -6 -14.97) (end -3.2 -14.97)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -6 -14.3) (end -6 -14.97)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -6 -12.97) (end -6 -13.65)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -6 -12.43) (end -3.2 -12.43)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -6 -11.75) (end -6 -12.43)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -6 -10.43) (end -6 -11.1)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -6 -9.89) (end -3.2 -9.89)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -6 -9.225) (end -6 -9.89)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -6 -7.89) (end -6 -8.575)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -3.2 -14.97) (end -3.2 -12.97)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -3.2 -12.97) (end -6 -12.97)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -3.2 -12.43) (end -3.2 -10.43)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -3.2 -10.43) (end -6 -10.43)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -3.2 -9.89) (end -3.2 -7.89)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -3.2 -7.89) (end -6 -7.89)
    (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
  (fp_line (start -8.89 -17.78) (end -8.89 15.24)
    (stroke (width 0.15) (type solid)) (layer "Dwgs.User"))
  (fp_line (start -8.89 15.24) (end 8.89 15.24)
    (stroke (width 0.15) (type solid)) (layer "Dwgs.User"))
  (fp_line (start -3.81 -19.304) (end 3.81 -19.304)
    (stroke (width 0.15) (type solid)) (layer "Dwgs.User"))
  (fp_line (start -3.81 -14.224) (end -3.81 -19.304)
    (stroke (width 0.15) (type solid)) (layer "Dwgs.User"))
  (fp_line (start 3.81 -19.304) (end 3.81 -14.224)
    (stroke (width 0.15) (type solid)) (layer "Dwgs.User"))
  (fp_line (start 3.81 -14.224) (end -3.81 -14.224)
    (stroke (width 0.15) (type solid)) (layer "Dwgs.User"))
  (fp_line (start 8.89 -17.78) (end -8.89 -17.78)
    (stroke (width 0.15) (type solid)) (layer "Dwgs.User"))
  (fp_line (start 8.89 15.24) (end 8.89 -17.78)
    (stroke (width 0.15) (type solid)) (layer "Dwgs.User"))
  (fp_line (start 2.95 -12.72) (end 2.95 -15.22)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
  (fp_line (start 2.95 -12.72) (end 6.25 -12.72)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
  (fp_line (start 2.95 -10.18) (end 2.95 -12.68)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
  (fp_line (start 2.95 -10.18) (end 6.25 -10.18)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
  (fp_line (start 2.95 -7.64) (end 2.95 -10.14)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
  (fp_line (start 2.95 -7.64) (end 6.25 -7.64)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
  (fp_line (start 6.25 -15.22) (end 2.95 -15.22)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
  (fp_line (start 6.25 -15.22) (end 6.25 -12.72)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
  (fp_line (start 6.25 -12.68) (end 2.95 -12.68)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
  (fp_line (start 6.25 -12.68) (end 6.25 -10.18)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
  (fp_line (start 6.25 -10.14) (end 2.95 -10.14)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
  (fp_line (start 6.25 -10.14) (end 6.25 -7.64)
    (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
  (fp_line (start -6.25 -15.22) (end -6.25 -12.72)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
  (fp_line (start -6.25 -15.22) (end -2.95 -15.22)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
  (fp_line (start -6.25 -12.68) (end -6.25 -10.18)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
  (fp_line (start -6.25 -12.68) (end -2.95 -12.68)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
  (fp_line (start -6.25 -10.14) (end -6.25 -7.64)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
  (fp_line (start -6.25 -10.14) (end -2.95 -10.14)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
  (fp_line (start -2.95 -12.72) (end -6.25 -12.72)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
  (fp_line (start -2.95 -12.72) (end -2.95 -15.22)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
  (fp_line (start -2.95 -10.18) (end -6.25 -10.18)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
  (fp_line (start -2.95 -10.18) (end -2.95 -12.68)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
  (fp_line (start -2.95 -7.64) (end -6.25 -7.64)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
  (fp_line (start -2.95 -7.64) (end -2.95 -10.14)
    (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
  (pad "" thru_hole circle (at -7.62 -13.97 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask"))
  (pad "" thru_hole circle (at -7.62 -11.43 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask"))
  (pad "" thru_hole circle (at -7.62 -8.89 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask"))
  (pad "" thru_hole circle (at -7.62 -6.35 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask"))
  (pad "" smd rect (at -6.25 -13.97 ${270 + p.rot}) (size 0.5 1.524) (layers "F.Cu" "F.Mask"))
  (pad "" smd rect (at -6.25 -11.43 ${270 + p.rot}) (size 0.5 1.524) (layers "F.Cu" "F.Mask"))
  (pad "" smd rect (at -6.25 -8.89 ${270 + p.rot}) (size 0.5 1.524) (layers "F.Cu" "F.Mask"))
  (pad "" smd custom (at -5.325 -13.97 ${180 + p.rot}) (size 0.3 0.3) (layers "F.Cu" "F.Mask")
    (zone_connect 2)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.5 0.75)
          (xy -0.65 0.75)
          (xy -0.15 0)
          (xy -0.65 -0.75)
          (xy 0.5 -0.75)
        )
        (width 0) (fill yes))
    ))
  (pad "" smd custom (at -5.325 -11.43 ${180 + p.rot}) (size 0.3 0.3) (layers "F.Cu" "F.Mask")
    (zone_connect 2)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.5 0.75)
          (xy -0.65 0.75)
          (xy -0.15 0)
          (xy -0.65 -0.75)
          (xy 0.5 -0.75)
        )
        (width 0) (fill yes))
    ))
  (pad "" smd custom (at -5.325 -8.89 ${180 + p.rot}) (size 0.3 0.3) (layers "F.Cu" "F.Mask")
    (zone_connect 2)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.5 0.75)
          (xy -0.65 0.75)
          (xy -0.15 0)
          (xy -0.65 -0.75)
          (xy 0.5 -0.75)
        )
        (width 0) (fill yes))
    ))
  (pad "" smd custom (at 5.325 -13.97 ${180 + p.rot}) (size 0.3 0.3) (layers "B.Cu" "B.Mask")
    (zone_connect 2)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.15 0)
          (xy 0.65 0.75)
          (xy -0.5 0.75)
          (xy -0.5 -0.75)
          (xy 0.65 -0.75)
        )
        (width 0) (fill yes))
    ))
  (pad "" smd custom (at 5.325 -11.43 ${180 + p.rot}) (size 0.3 0.3) (layers "B.Cu" "B.Mask")
    (zone_connect 2)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.15 0)
          (xy 0.65 0.75)
          (xy -0.5 0.75)
          (xy -0.5 -0.75)
          (xy 0.65 -0.75)
        )
        (width 0) (fill yes))
    ))
  (pad "" smd custom (at 5.325 -8.89 ${180 + p.rot}) (size 0.3 0.3) (layers "B.Cu" "B.Mask")
    (zone_connect 2)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.15 0)
          (xy 0.65 0.75)
          (xy -0.5 0.75)
          (xy -0.5 -0.75)
          (xy 0.65 -0.75)
        )
        (width 0) (fill yes))
    ))
  (pad "" smd rect (at 6.275 -13.97 ${270 + p.rot}) (size 0.5 1.524) (layers "B.Cu" "B.Mask"))
  (pad "" smd rect (at 6.275 -11.43 ${270 + p.rot}) (size 0.5 1.524) (layers "B.Cu" "B.Mask"))
  (pad "" smd rect (at 6.275 -8.89 ${270 + p.rot}) (size 0.5 1.524) (layers "B.Cu" "B.Mask"))
  (pad "" thru_hole circle (at 7.62 -13.97 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask"))
  (pad "" thru_hole circle (at 7.62 -11.43 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask"))
  (pad "" thru_hole circle (at 7.62 -8.89 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask"))
  (pad "" thru_hole circle (at 7.62 -6.35 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask"))
  (pad "1" smd custom (at -3.875 -13.97 ${180 + p.rot}) (size 0.3 0.3) (layers "F.Cu" "F.Mask") ${p.RAW.str}
    (zone_connect 2)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 1 0)
          (xy 0.5 0.75)
          (xy -0.5 0.75)
          (xy -0.5 -0.75)
          (xy 0.5 -0.75)
        )
        (width 0) (fill yes))
    ))
  (pad "1" smd custom (at 3.875 -13.97 ${180 + p.rot}) (size 0.3 0.3) (layers "B.Cu" "B.Mask") ${p.RAW.str}
    (zone_connect 2)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.5 0.75)
          (xy -0.5 0.75)
          (xy -1 0)
          (xy -0.5 -0.75)
          (xy 0.5 -0.75)
        )
        (width 0) (fill yes))
    ))
  (pad "2" smd custom (at -3.875 -11.43 ${180 + p.rot}) (size 0.3 0.3) (layers "F.Cu" "F.Mask") ${p.GND.str}
    (zone_connect 2)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 1 0)
          (xy 0.5 0.75)
          (xy -0.5 0.75)
          (xy -0.5 -0.75)
          (xy 0.5 -0.75)
        )
        (width 0) (fill yes))
    ))
  (pad "2" smd custom (at 3.875 -11.43 ${180 + p.rot}) (size 0.3 0.3) (layers "B.Cu" "B.Mask") ${p.GND.str}
    (zone_connect 2)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.5 0.75)
          (xy -0.5 0.75)
          (xy -1 0)
          (xy -0.5 -0.75)
          (xy 0.5 -0.75)
        )
        (width 0) (fill yes))
    ))
  (pad "3" smd custom (at -3.875 -8.89 ${180 + p.rot}) (size 0.3 0.3) (layers "F.Cu" "F.Mask") ${p.RST.str}
    (zone_connect 2)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 1 0)
          (xy 0.5 0.75)
          (xy -0.5 0.75)
          (xy -0.5 -0.75)
          (xy 0.5 -0.75)
        )
        (width 0) (fill yes))
    ))
  (pad "3" smd custom (at 3.875 -8.89 ${180 + p.rot}) (size 0.3 0.3) (layers "B.Cu" "B.Mask") ${p.RST.str}
    (zone_connect 2)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.5 0.75)
          (xy -0.5 0.75)
          (xy -1 0)
          (xy -0.5 -0.75)
          (xy 0.5 -0.75)
        )
        (width 0) (fill yes))
    ))
  (pad "10" thru_hole circle (at -7.62 -3.81 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P10.str})
  (pad "11" thru_hole circle (at -7.62 -1.27 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P11.str})
  (pad "12" thru_hole circle (at -7.62 1.27 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P12.str})
  (pad "13" thru_hole circle (at -7.62 3.81 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P13.str})
  (pad "14" thru_hole circle (at -7.62 6.35 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P14.str})
  (pad "15" thru_hole circle (at -7.62 8.89 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P15.str})
  (pad "16" thru_hole circle (at -7.62 11.43 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P16.str})
  (pad "17" thru_hole circle (at -7.62 13.97 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P17.str})
  (pad "20" thru_hole circle (at 7.62 -3.81 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P20.str})
  (pad "21" thru_hole circle (at 7.62 -1.27 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P21.str})
  (pad "22" thru_hole circle (at 7.62 1.27 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P22.str})
  (pad "23" thru_hole circle (at 7.62 3.81 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P23.str})
  (pad "24" thru_hole circle (at 7.62 6.35 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P24.str})
  (pad "25" thru_hole circle (at 7.62 8.89 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P25.str})
  (pad "26" thru_hole circle (at 7.62 11.43 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P26.str})
  (pad "27" thru_hole circle (at 7.62 13.97 ${270 + p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers "*.Cu" "*.Mask") ${p.P27.str})
)
        `
}
