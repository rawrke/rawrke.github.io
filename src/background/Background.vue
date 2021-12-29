<template>
	<canvas 
		id="canvas" 
		width="800" 
		height="800"
		ref="canvasRef"
	/>
</template>

<script>
import MyLittleNode from "../classes/Node.js"

export default {
	data() {
		return {
			canvas: Object,
			ctx: Object,
			nodes: []
		}
	},
  methods: {
		initCanvas() {
			this.canvas = this.$refs.canvasRef
      console.log(this.canvas)
			this.ctx = this.canvas.getContext("2d")
			console.log(new MyLittleNode(2,3))
		},
		initNodes() {
			for (var x = 0; x < 800; x += 40) {
				for (var y = 0; y < 800; y += 40) {
					this.nodes.push(new MyLittleNode(x, y))
				}
			}
		},
		drawNodes() {
			this.ctx.clearRect(0,0,800,800)

			for (var i = 0; i < this.nodes.length; i++) {
				this.drawNode(i)
			}
		},
		drawNode(i) {
			var node = this.nodes[i]
			this.ctx.fillStyle = 'rgb(222,44,222)'
			this.ctx.beginPath()
			this.ctx.arc(node.x, node.y, 6, 0, 2*Math.PI)
			this.ctx.fill()
			this.ctx.closePath()
			node.x += (Math.random() * 2) - 1
			node.y += (Math.random() * 2) - 1
		}
	},
	mounted() {
		this.initCanvas()
		this.initNodes()
		setInterval(this.drawNodes, 20)
	}
}
</script>

<style>

</style>