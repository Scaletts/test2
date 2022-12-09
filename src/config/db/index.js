const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

connect = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://test:test@cluster0.bkjuojr.mongodb.net/test?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			}
		)
		console.log('Connect susscessfully!!')
	} catch (error) {
		console.log('Connect failure!')
	}
}

module.exports = { connect }
