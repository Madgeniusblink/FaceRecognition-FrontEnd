import React from 'react'

class Rank extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rankEmoji: 'You have no badge'
        }
    }

    componentDidMount() {
        this.generateEmoji(this.props.entries)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
            return null
        }
        this.generateEmoji(this.props.entries)
    }

    generateEmoji = (entries) => {
        fetch(`https://9otnpns9r0.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
            .then(response => response.json())
            .then(data => this.setState({ rankEmoji: data.input}))
            .catch(console.log)
    }

    render() {
        const {name, entries} = this.props 
        return (
            <div>
                <div className='white f2'>
                    {`${name}, Your Current entry is...`}
                </div>
                <div className='white f1'>
                    {entries}
                </div>
                <div className='white f3'>
                    {`Rank Badge: ${this.state.rankEmoji}`}
                </div>
            </div>
        )
    }
}

export default Rank;