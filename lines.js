class lines {
    static get inputProperties(){
        return ['--amount'];
    }

    paint(ctx, size, props){
        

        let z = 0
        let amount = props.get('--amount')
        while (z <= size.height) {
            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.moveTo(0, 0);
            ctx.arcTo(0, size.height, size.width, size.height, z);
            ctx.stroke();
            z += size.height/amount
        }
       z=0    
       while (z <= size.height) {
           ctx.beginPath()
           ctx.strokeStyle = 'White'
           ctx.moveTo(size.width, 0)
           ctx.arcTo(0, 0, 0, size.height, z);
           ctx.stroke() //stroke = niet opgevuld
           z += size.height/amount
       }
       z=0
       while (z <= size.height) {
           ctx.beginPath()
           ctx.strokeStyle = 'White'
           ctx.moveTo(size.width, size.height)
           ctx.arcTo(size.width, 0, 0, 0, z);
           ctx.stroke() //stroke = niet opgevuld
           z += size.height/amount
       }
       z=0
       while (z <= size.height) {
           ctx.beginPath()
           ctx.strokeStyle = 'White'
           ctx.moveTo(0, size.height)
           ctx.arcTo(size.width, size.height, size.width, 0, z);
           ctx.stroke() //stroke = niet opgevuld
           z += size.height/amount
       }
    }
}

registerPaint('lines', lines)