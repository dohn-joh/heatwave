// Author: @infused-kim
//
// Description:
// Allows you to place text on the PCB.

module.exports = {
  params: {
    designator: 'TXT',
    side: 'F',
    reverse: false,
    knockout: false,
    text: 'text',
  },
  body: p => {
    const front = `
      (gr_text "${p.text}" ${p.at} (layer F.SilkS)
        (effects (font (size 1 1) (thickness 0.15)))
      )
    `
    const back = `
      (gr_text "${p.text}" ${p.at} (layer B.SilkS)
        (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
      )
    `
    const front_knockout = `
      (gr_text "${p.text}" ${p.at} (layer F.SilkS knockout)
        (effects (font (size 1 1) (thickness 0.15)))
      )
    `
    const back_knockout = `
      (gr_text "${p.text}" ${p.at} (layer B.SilkS knockout)
        (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
      )
    `

    let final = '';

    if(p.side == "F" || p.reverse) {
        if(p.knockout)
            final+= front_knockout
        else
            final += front;
    }
    if(p.side == "B" || p.reverse) {
        if(p.knockout)
            final+= back_knockout
        else
            final += back;
    }

    return final;
  }
}
