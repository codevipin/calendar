const express = require('express'),
	axios = require('axios');
	app = express(),
	bodyParser = require('body-parser');

app.use(bodyParser.json());

app.route('/commodity/:id')
	.get(async (req, res) => {
		const commodityValue  = await axios.get(`http://localhost:3000/commodity/${req.params.id}`)
		const commodityDesc  = await axios.get(`http://localhost:3000/commodityDesc/${req.params.id}`)
		commodityValue.data.commodity_desc = commodityDesc.data.commodity_desc;
		res.send(commodityValue.data);
	})

	.put(async (req, res) => {
		const resp  = await axios.patch(`http://localhost:3000/commodity/${req.params.id}`, req.body)
		res.send({"message": "Update done"})
	})

app.post('/commodity', async (req, res) => {
	const resp  = await axios.post(`http://localhost:3000/commodity/`, req.body)
	res.send({"message": "commodity added"})
})

app.listen(4000, ()=>{
	console.log("listening...");
})