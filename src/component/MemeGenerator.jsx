import React, {Component} from "react"
import {TextField, Button} from "@material-ui/core"

class MemeGenerator extends Component {
	state = {
		topText: "",
		bottomText: "",
		randomImg: "http://i.imgflip.com/1bij.jpg",
		allMemeImgs: []
	}

	componentDidMount = () => {
		fetch("https://api.imgflip.com/get_memes")
			.then(res => res.json())
			.then(res => this.setState({allMemeImgs: res.data.memes}))
	}

	handleChange = e => {
		const {value, name} = e.target
		this.setState({[name]: value})
	}

	generateMeme = e => {
		e.preventDefault()
		let {randomImg, allMemeImgs} = this.state
		const index = Math.floor(Math.random() * allMemeImgs.length)
		randomImg = allMemeImgs[index].url
		this.setState({randomImg})
	}

	render() {
		const {topText, bottomText, randomImg} = this.state
		return (
			<main>
				<form onSubmit={this.generateMeme}>
					<div className='inputs'>
						<TextField
							name='topText'
							variant='filled'
							label='Top Text'
							value={topText}
							onChange={this.handleChange}
						/>
						<TextField
							name='bottomText'
							variant='filled'
							label='Bottom Text'
							value={bottomText}
							onChange={this.handleChange}
						/>
					</div>
					<Button
						type='submit'
						id='submitBtn'
						variant='contained'
						size='large'
						color='primary'>
						Generate
					</Button>
				</form>

				<div className='meme'>
					<img src={randomImg} alt='' />
					<h2 className='top'>{topText}</h2>
					<h2 className='bottom'>{bottomText}</h2>
				</div>
			</main>
		)
	}
}

export default MemeGenerator
