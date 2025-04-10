// PEC12R-4xxxF-Sxxxx
//
// Nets
//    from: corresponds to switch pin 1 (for button presses)
//    to: corresponds to switch pin 2 (for button presses)
//    A: corresponds to pin 1 (CW)
//    C: corresponds to pin 2 (GND)
//    B: corresponds to pin 3 (CCW)

module.exports = {
    params: {
        designator: 'ROT',
        from: undefined,
        to: undefined,
        A: undefined,
        C: undefined,
        B: undefined
    },
    body: p => `
        (module PEC12R-4xxxF-Sxxxx (layer F.Cu) (tedit 603326DE)

            ${p.at /* parametric position */}
        
            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0 ${p.rot}) (layer F.SilkS) 
                ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.Fab)
                (effects (font (size 1 1) (thickness 0.15))))

            ${''/* component outline */}
            (fp_line (start -8.15 -7.35) (end -8.15 7.35) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
            (fp_line (start -8.15 7.35) (end 8.65 7.35) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
            (fp_line (start 8.65 -7.35) (end -8.15 -7.35) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
            (fp_line (start 8.65 7.35) (end 8.65 -7.35) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
            (fp_rect (start -6.7 6.2) (end 6.7 -6.2) (stroke (width 0.15) (type default)) (layer "F.Fab"))

            ${''/* pin names */}
            (pad "1" thru_hole rect (at -7 2.5 ${90+p.rot}) (size 1.8 1.8) (drill 1.2) (layers "*.Cu" "*.Mask") ${p.from.str})
            (pad "2" thru_hole circle (at -7 -2.5 ${90+p.rot}) (size 1.8 1.8) (drill 1.2) (layers "*.Cu" "*.Mask") ${p.to.str})
            (pad "A" thru_hole circle (at 7.5 2.5 ${90+p.rot}) (size 1.8 1.8) (drill 1.2) (layers "*.Cu" "*.Mask") ${p.A.str})
            (pad "B" thru_hole circle (at 7.5 -2.5 ${90+p.rot}) (size 1.8 1.8) (drill 1.2) (layers "*.Cu" "*.Mask") ${p.B.str})
            (pad "C" thru_hole circle (at 7.5 0 ${90+p.rot}) (size 1.8 1.8) (drill 1.2) (layers "*.Cu" "*.Mask") ${p.C.str})

            ${''/* Legs */}
            (pad "" thru_hole oval (at 0 -5.6 ${90+p.rot}) (size 3 6) (drill oval 2 2.1) (layers "*.Cu" "*.Mask"))
            (pad "" thru_hole oval (at 0 5.6 ${90+p.rot}) (size 3 6) (drill oval 2 2.1) (layers "*.Cu" "*.Mask"))
        )

    `
}
