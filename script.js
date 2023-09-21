//your JS code here. If required.
const display = document.getElementById("timer")
	setInterval(()=>{
		const date = new Date()
				display.innerText = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`
},1000)