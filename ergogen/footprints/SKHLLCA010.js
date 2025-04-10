// alps SKHLLCA010 DIP pushbutton
// reset switch

module.exports = {
    params: {
        designator: 'S',
        side: 'F',
        pad1: {type: 'net', value: 'RST'},
        pad2: {type: 'net', value: 'GND'},
    },
    body: p => `

(module "SKHLLCA010" (layer "F.Cu")
        ${p.at /* parametric position */}
  (attr through_hole)
  (fp_text reference "${p.ref}" (at -2.25 3.5 ${p.rot}) (layer ${p.side}.SilkS) ${p.ref_hide} 
      (effects (font (size 1 1) (thickness 0.15))))
  (fp_text value "SKHLLCA010" (at 0 -0.75 unlocked) (layer "F.Fab")
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_line (start -2.25 0.55) (end 2.25 0.55) (layer "F.Fab") (width 0.12))
  (fp_line (start -3.9 -0.07) (end -3.9 -3.75) (layer "F.Fab") (width 0.12))
  (fp_line (start -1.25 -3.75) (end -1.25 -5) (layer "F.Fab") (width 0.12))
  (fp_line (start 3.9 -0.07) (end 3.9 -3.75) (layer "F.Fab") (width 0.12))
  (fp_line (start -3.9 -3.75) (end 3.9 -3.75) (layer "F.Fab") (width 0.12))
  (fp_line (start 1.25 -3.75) (end 1.25 -5) (layer "F.Fab") (width 0.12))
  (fp_line (start -1.25 -5) (end 1.25 -5) (layer "F.Fab") (width 0.12))
  (fp_line (start -3.65 -4.97) (end 3.65 -4.97) (layer "F.CrtYd") (width 0.05))
  (fp_line (start 3.65 -4.97) (end 3.65 2.18) (layer "F.CrtYd") (width 0.05))
  (fp_line (start -3.65 -4.97) (end -3.65 2.18) (layer "F.CrtYd") (width 0.05))
  (fp_line (start -3.65 2.18) (end 3.65 2.18) (layer "F.CrtYd") (width 0.05))
  (pad "1" thru_hole circle (at -2.5 -1.25 ${p.rot}) (size 1.8 1.8) (drill 1) (layers *.Cu "B.Mask") ${p.pad1.str})
  (pad "2" thru_hole circle (at 2.5 -1.25 ${p.rot}) (size 1.8 1.8) (drill 1) (layers *.Cu "B.Mask") ${p.pad2.str})
  (pad "MP" thru_hole circle (at -3.5 1.25 ${p.rot}) (size 2.1 2.1) (drill 1.3) (layers *.Cu *.Mask))
  (pad "MP" thru_hole circle (at 3.5 1.25 ${p.rot}) (size 2.1 2.1) (drill 1.3) (layers *.Cu *.Mask))
)
        `
}
