if('registerProperty' in CSS) {
    CSS.registerProperty({
        name: '--amount',
        syntax: '<integer>',
        inherits: false,
        initialValue: '2'
    })
}

CSS.paintWorklet.addModule('lines.js')